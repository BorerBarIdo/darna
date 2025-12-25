import Image from 'next/image'

export default function RevolutionSection() {
  const sectionImage = '/images/WhatsApp Image 2025-12-25 at 19.15.34.jpeg'

  return (
    <section className="py-24 sm:py-32 md:py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Image and Title Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center mb-20 sm:mb-24">
            {/* Title */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 tracking-tight mb-8">
                דיאטה? לא עוד!
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-light">
                &apos;נשמה וגוף&apos; היא מהפכה תודעתית לירידה במשקל וחיים מתוך:
              </p>
            </div>

            {/* Image */}
            <div>
              <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={sectionImage}
                  alt="דיאטה לא עוד"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Three Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-20 sm:mb-24">
            {/* Abundance */}
            <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 tracking-tight mb-4">
                שפע
              </h3>
            </div>

            {/* Informed Choice */}
            <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 tracking-tight mb-4">
                בחירה מושכלת
              </h3>
            </div>

            {/* Joy and Self-Love */}
            <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 tracking-tight mb-4">
                שמחה ואהבה עצמית
              </h3>
            </div>
          </div>

          {/* Bottom text */}
          <div className="text-center space-y-4 p-8 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-xl sm:text-2xl text-gray-600 font-light">
              לא עוד הגבלות וחוקים נוקשים
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-serif font-normal tracking-tight">
              אלא חיים מתוך שפע, בחירה מושכלת ואהבה עצמית
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

