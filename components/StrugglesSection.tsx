import Image from 'next/image'

export default function StrugglesSection() {
  const sectionImage = '/images/WhatsApp Image 2025-12-25 at 19.14.53.jpeg'

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden">
                <Image
                  src={sectionImage}
                  alt="נמאס לך מהמעגל הזה"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 tracking-tight">
                נמאס לך מהמעגל הזה?
              </h2>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* First struggle */}
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed font-light">
                לספור קלוריות ולחיות לפי חוקים קפדניים.
              </p>
            </div>

            {/* Second struggle */}
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed font-light">
                לדעת בדיוק מה &apos;צריך&apos; לעשות, אבל להרגיש שהאכילה הרגשית תמיד משתלטת.
              </p>
            </div>

            {/* Third struggle */}
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed font-light">
                לרצות לרדת במשקל, אבל לחיות עם רגשות אשם מתמידים.
              </p>
            </div>
          </div>

          {/* Transition text */}
          <div className="mt-20 sm:mt-24 md:mt-32 text-center space-y-4">
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-gray-900 tracking-tight">
              הגיע הזמן לשבור את המעגל
            </p>
            <p className="text-xl sm:text-2xl text-gray-600 font-light">
              בואו נצא יחד למסע של שחרור, ריפוי וחופש
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

