import EventForm from '@/components/EventForm'

export default function NewEventPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-warm-800 mb-8">הוסף אירוע חדש</h2>
        <EventForm />
      </div>
    </div>
  )
}

