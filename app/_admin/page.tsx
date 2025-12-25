import Link from 'next/link'

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-warm-800 mb-8">דף הבית - ניהול</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/admin/events"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-warm-800 mb-2">ניהול אירועים</h3>
            <p className="text-warm-600">הוסף, ערוך ומחק אירועים</p>
          </Link>
          <Link
            href="/admin/images"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-warm-800 mb-2">ניהול תמונות</h3>
            <p className="text-warm-600">העלה ותחזק תמונות</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

