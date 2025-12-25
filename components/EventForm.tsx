'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Event } from '@/lib/data'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const eventSchema = z.object({
  title: z.string().min(1, 'כותרת חובה'),
  description: z.string().min(1, 'תיאור חובה'),
  date: z.string().min(1, 'תאריך חובה'),
  time: z.string().optional(),
  location: z.string().optional(),
  image: z.string().optional(),
})

type EventFormData = z.infer<typeof eventSchema>

interface EventFormProps {
  event?: Event
}

export default function EventForm({ event }: EventFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(event?.image || null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: event
      ? {
          title: event.title,
          description: event.description,
          date: event.date.split('T')[0],
          time: event.time || '',
          location: event.location || '',
          image: event.image || '',
        }
      : undefined,
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = async (data: EventFormData) => {
    setIsSubmitting(true)
    try {
      let imageUrl = data.image

      // Upload image if a new one was selected
      if (imageFile) {
        const formData = new FormData()
        formData.append('image', imageFile)

        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        if (!uploadResponse.ok) {
          throw new Error('שגיאה בהעלאת התמונה')
        }

        const uploadData = await uploadResponse.json()
        imageUrl = uploadData.url
      }

      const eventData: Event = {
        id: event?.id || Date.now().toString(),
        title: data.title,
        description: data.description,
        date: new Date(data.date).toISOString(),
        time: data.time || undefined,
        location: data.location || undefined,
        image: imageUrl,
        createdAt: event?.createdAt || new Date().toISOString(),
      }

      const response = await fetch('/api/events', {
        method: event ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      })

      if (!response.ok) {
        throw new Error('שגיאה בשמירת האירוע')
      }

      router.push('/admin/events')
      router.refresh()
    } catch (error) {
      console.error('Error:', error)
      alert('שגיאה בשמירת האירוע. נסה שוב.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
      <div>
        <label className="block text-sm font-medium text-warm-800 mb-2">
          כותרת *
        </label>
        <input
          {...register('title')}
          type="text"
          className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-warm-800 mb-2">
          תיאור *
        </label>
        <textarea
          {...register('description')}
          rows={5}
          className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-warm-800 mb-2">
            תאריך *
          </label>
          <input
            {...register('date')}
            type="date"
            className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent"
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-warm-800 mb-2">
            שעה
          </label>
          <input
            {...register('time')}
            type="time"
            className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-warm-800 mb-2">
          מיקום
        </label>
        <input
          {...register('location')}
          type="text"
          className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-warm-800 mb-2">
          תמונה
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent"
        />
        {imagePreview && (
          <div className="mt-4">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-w-md h-64 object-cover rounded-lg"
            />
          </div>
        )}
        <input
          {...register('image')}
          type="hidden"
          value={imagePreview || ''}
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-warm-500 hover:bg-warm-600 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'שומר...' : 'שמור'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-warm-100 hover:bg-warm-200 text-warm-800 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          ביטול
        </button>
      </div>
    </form>
  )
}

