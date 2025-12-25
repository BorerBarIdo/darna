import { getEvents, deleteEvent } from '@/lib/data'
import Link from 'next/link'
import { format } from 'date-fns'
import DeleteButton from '@/components/DeleteButton'

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-warm-800">ניהול אירועים</h2>
          <Link
            href="/admin/events/new"
            className="bg-warm-500 hover:bg-warm-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            + הוסף אירוע חדש
          </Link>
        </div>

        {events.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-warm-600 text-lg">אין אירועים עדיין</p>
            <Link
              href="/admin/events/new"
              className="inline-block mt-4 text-warm-600 hover:text-warm-700 underline"
            >
              הוסף אירוע ראשון
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md p-6 flex justify-between items-start"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-warm-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-warm-600 mb-2">
                    {format(new Date(event.date), 'd בMMMM yyyy')}
                    {event.time && ` • ${event.time}`}
                  </p>
                  <p className="text-warm-700 line-clamp-2">{event.description}</p>
                </div>
                <div className="flex gap-2 mr-4">
                  <Link
                    href={`/admin/events/${event.id}/edit`}
                    className="bg-warm-100 hover:bg-warm-200 text-warm-800 px-4 py-2 rounded-lg transition-colors"
                  >
                    ערוך
                  </Link>
                  <DeleteButton eventId={event.id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

