import { getEvents } from '@/lib/data'
import { notFound } from 'next/navigation'
import EventForm from '@/components/EventForm'

export default async function EditEventPage({
  params,
}: {
  params: { id: string }
}) {
  const events = await getEvents()
  const event = events.find(e => e.id === params.id)

  if (!event) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-warm-800 mb-8">ערוך אירוע</h2>
        <EventForm event={event} />
      </div>
    </div>
  )
}

