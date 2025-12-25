export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-warm-400 via-warm-500 to-warm-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4 sm:mb-6 md:mb-8 tracking-tight">
            מוכנים להתחיל את המסע?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-warm-50 mb-8 sm:mb-10 md:mb-12 leading-relaxed font-light">
            בואו נצא יחד למסע של ריפוי, צמיחה וחופש
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a
              href="#events"
              className="bg-white text-warm-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-medium text-lg sm:text-xl hover:bg-warm-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              צפה באירועים קרובים
            </a>
            <a
              href="#about"
              className="bg-transparent backdrop-blur-sm text-white border border-white/50 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-medium text-lg sm:text-xl hover:bg-white/10 transition-all duration-300"
            >
              למידע נוסף
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

