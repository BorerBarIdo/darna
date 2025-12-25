import OptimizedImage from './OptimizedImage'

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
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 sm:mb-20 gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 tracking-tight">
              השירותים שלנו
            </h2>
            <button className="border border-gray-800 text-gray-800 px-8 py-3 rounded-full text-sm sm:text-base hover:bg-gray-50 transition-colors font-light">
              כל השירותים
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square rounded-full overflow-hidden mb-6">
                  {service.image ? (
                    <OptimizedImage
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : null}
                </div>
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-light text-gray-900">
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

