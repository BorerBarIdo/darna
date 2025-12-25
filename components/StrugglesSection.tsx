import Image from 'next/image'

export default function StrugglesSection() {
  const sectionImage = '/images/WhatsApp Image 2025-12-25 at 19.14.53.jpeg'

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      {/* Full Width Image */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] mb-16 sm:mb-20">
        <Image
          src={sectionImage}
          alt="נמאס לך מהמעגל הזה"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 tracking-tight text-center mb-16 sm:mb-20">
            נמאס לך מהמעגל הזה?
          </h2>
          
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
      </div>
    </section>
  )
}

