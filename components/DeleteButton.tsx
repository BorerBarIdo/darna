'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface DeleteButtonProps {
  eventId: string
}

export default function DeleteButton({ eventId }: DeleteButtonProps) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm('האם אתה בטוח שברצונך למחוק את האירוע?')) {
      return
    }

    setIsDeleting(true)
    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('שגיאה במחיקת האירוע')
      }

      router.refresh()
    } catch (error) {
      console.error('Error:', error)
      alert('שגיאה במחיקת האירוע. נסה שוב.')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
    >
      {isDeleting ? 'מוחק...' : 'מחק'}
    </button>
  )
}

