export default function CTASection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8 sm:space-y-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 tracking-tight">
            מוכנים להתחיל את המסע?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light">
            בואו נצא יחד למסע של ריפוי, צמיחה וחופש
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4">
            <a
              href="#events"
              className="bg-gray-900 text-white px-10 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 font-light"
            >
              צפה באירועים קרובים
            </a>
            <a
              href="#about"
              className="bg-transparent text-gray-900 border border-gray-900 px-10 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 font-light"
            >
              למידע נוסף
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

