'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function UploadImagePage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setIsUploading(true)
    try {
      const formData = new FormData()
      formData.append('image', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('שגיאה בהעלאת התמונה')
      }

      const data = await response.json()
      alert(`התמונה הועלתה בהצלחה! קישור: ${data.url}`)
      router.push('/admin/images')
      router.refresh()
    } catch (error) {
      console.error('Error:', error)
      alert('שגיאה בהעלאת התמונה. נסה שוב.')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-warm-800 mb-8">העלה תמונה חדשה</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label className="block text-sm font-medium text-warm-800 mb-2">
              בחר תמונה
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent"
              required
            />
          </div>

          {preview && (
            <div className="mb-6">
              <p className="text-sm font-medium text-warm-800 mb-2">תצוגה מקדימה:</p>
              <div className="relative w-full h-64 rounded-lg overflow-hidden border border-warm-300">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={!file || isUploading}
              className="bg-warm-500 hover:bg-warm-600 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {isUploading ? 'מעלה...' : 'העלה תמונה'}
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
      </div>
    </div>
  )
}

