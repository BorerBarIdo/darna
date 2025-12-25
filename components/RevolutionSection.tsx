export default function RevolutionSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-warm-50 via-green-50/40 to-warm-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-warm-900 mb-6 sm:mb-8 text-center tracking-tight">
            דיאטה? לא עוד!
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-warm-800 mb-10 sm:mb-12 md:mb-16 text-center leading-relaxed max-w-4xl mx-auto font-light">
            'נשמה וגוף' היא מהפכה תודעתית לירידה במשקל וחיים מתוך:
          </p>

          {/* Three Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {/* Abundance */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-0.5 bg-warm-300 mb-6"></div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-warm-900 mb-3 tracking-tight">
                שפע
              </h3>
            </div>

            {/* Informed Choice */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-0.5 bg-green-300 mb-6"></div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-warm-900 mb-3 tracking-tight">
                בחירה מושכלת
              </h3>
            </div>

            {/* Joy and Self-Love */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-0.5 bg-warm-300 mb-6"></div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-warm-900 mb-3 tracking-tight">
                שמחה ואהבה עצמית
              </h3>
            </div>
          </div>

          {/* Bottom text */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-warm-800 font-light">
              לא עוד הגבלות וחוקים נוקשים
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-warm-900 font-serif font-semibold mt-4 tracking-tight">
              אלא חיים מתוך שפע, בחירה מושכלת ואהבה עצמית
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

