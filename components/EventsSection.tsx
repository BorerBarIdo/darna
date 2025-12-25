import { Event } from '@/lib/data'
import Image from 'next/image'
import { format } from 'date-fns'

interface EventsSectionProps {
  events: Event[]
}

export default function EventsSection({ events }: EventsSectionProps) {
  if (events.length === 0) {
    return (
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-warm-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-warm-900 mb-8 sm:mb-12 text-center tracking-tight">
            אירועים קרובים
          </h2>
          <div className="text-center text-warm-600 text-lg sm:text-xl md:text-2xl bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-warm-200 max-w-2xl mx-auto">
            בקרוב יפורסמו אירועים חדשים
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-warm-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-warm-800 mb-8 sm:mb-12 md:mb-16 text-center">
          אירועים קרובים
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-warm-100"
            >
              {event.image && (
                <div className="relative h-48 sm:h-56 md:h-64 w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4 sm:p-6">
                <div className="text-warm-500 text-xs sm:text-sm mb-2 font-medium">
                  {format(new Date(event.date), 'd בMMMM yyyy')}
                  {event.time && ` • ${event.time}`}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-warm-900 mb-2 sm:mb-3 tracking-tight">
                  {event.title}
                </h3>
                <p className="text-warm-700 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-3 leading-relaxed font-light">
                  {event.description}
                </p>
                {event.location && (
                  <div className="text-warm-600 text-xs sm:text-sm font-light">
                    {event.location}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

