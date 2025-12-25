import Image from 'next/image'

export default function RevolutionSection() {
  const sectionImage = '/images/WhatsApp Image 2025-12-25 at 19.15.34.jpeg'

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20">
            {/* Title */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 tracking-tight">
                דיאטה? לא עוד!
              </h2>
            </div>

            {/* Image */}
            <div>
              <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden">
                <Image
                  src={sectionImage}
                  alt="דיאטה לא עוד"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-700 mb-16 sm:mb-20 text-center leading-relaxed font-light">
              &apos;נשמה וגוף&apos; היא מהפכה תודעתית לירידה במשקל וחיים מתוך:
            </p>

            {/* Three Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 md:gap-20 mb-20 sm:mb-24">
              {/* Abundance */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 tracking-tight">
                  שפע
                </h3>
              </div>

              {/* Informed Choice */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 tracking-tight">
                  בחירה מושכלת
                </h3>
              </div>

              {/* Joy and Self-Love */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 tracking-tight">
                  שמחה ואהבה עצמית
                </h3>
              </div>
            </div>

            {/* Bottom text */}
            <div className="text-center space-y-4">
              <p className="text-xl sm:text-2xl text-gray-600 font-light">
                לא עוד הגבלות וחוקים נוקשים
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-serif font-normal tracking-tight">
                אלא חיים מתוך שפע, בחירה מושכלת ואהבה עצמית
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

