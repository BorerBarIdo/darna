export default function StrugglesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-warm-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-warm-900 mb-8 sm:mb-12 text-center tracking-tight">
            נמאס לך מהמעגל הזה?
          </h2>
          
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* First struggle */}
            <div className="bg-white rounded-lg p-6 sm:p-8 md:p-10 border border-warm-200/50 hover:border-warm-300 transition-all duration-300 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-1 h-12 bg-warm-400 rounded-full mt-1"></div>
                <p className="text-lg sm:text-xl md:text-2xl text-warm-900 leading-relaxed font-light">
                  לספור קלוריות ולחיות לפי חוקים קפדניים.
                </p>
              </div>
            </div>

            {/* Second struggle */}
            <div className="bg-white rounded-lg p-6 sm:p-8 md:p-10 border border-warm-200/50 hover:border-warm-300 transition-all duration-300 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-1 h-12 bg-warm-400 rounded-full mt-1"></div>
                <p className="text-lg sm:text-xl md:text-2xl text-warm-900 leading-relaxed font-light">
                  לדעת בדיוק מה &apos;צריך&apos; לעשות, אבל להרגיש שהאכילה הרגשית תמיד משתלטת.
                </p>
              </div>
            </div>

            {/* Third struggle */}
            <div className="bg-white rounded-lg p-6 sm:p-8 md:p-10 border border-warm-200/50 hover:border-warm-300 transition-all duration-300 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-1 h-12 bg-warm-400 rounded-full mt-1"></div>
                <p className="text-lg sm:text-xl md:text-2xl text-warm-900 leading-relaxed font-light">
                  לרצות לרדת במשקל, אבל לחיות עם רגשות אשם מתמידים.
                </p>
              </div>
            </div>
          </div>

          {/* Transition text */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-warm-900 tracking-tight">
              הגיע הזמן לשבור את המעגל
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-warm-700 mt-4 font-light">
              בואו נצא יחד למסע של שחרור, ריפוי וחופש
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

