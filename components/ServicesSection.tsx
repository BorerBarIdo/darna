import Image from 'next/image'

interface Service {
  id: string
  title: string
  image?: string
  description?: string
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      id: '1',
      title: 'תנועה מודעת',
      image: '/images/WhatsApp Image 2025-12-25 at 19.14.32.jpeg',
      description: 'חיבור לגוף דרך תנועה'
    },
    {
      id: '2',
      title: 'נשימה ומודעות',
      image: '/images/WhatsApp Image 2025-12-25 at 19.14.53.jpeg',
      description: 'שחרור דרך נשימה'
    },
    {
      id: '3',
      title: 'ריפוי רגשי',
      image: '/images/WhatsApp Image 2025-12-25 at 19.15.19.jpeg',
      description: 'עבודה עם רגשות ודפוסים'
    },
    {
      id: '4',
      title: 'חיבור לנשמה',
      image: '/images/WhatsApp Image 2025-12-25 at 19.15.34.jpeg',
      description: 'מסע פנימי של גילוי'
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 sm:mb-16 md:mb-20 gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-warm-900 tracking-tight">
              השירותים שלנו
            </h2>
            <button className="border border-warm-800 text-warm-800 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-warm-50 transition-colors">
              כל השירותים
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square rounded-full overflow-hidden mb-4 sm:mb-5 shadow-md hover:shadow-xl transition-all duration-500">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-sm sm:text-base md:text-lg font-medium text-warm-900 mb-1">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

