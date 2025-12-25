import Image from 'next/image'

export default function AboutSection() {
  // אם יש לך תמונה לסעיף "עלינו", שנה את זה ל-true והוסף את התמונה ל-public/images/about-image.jpg
  const hasImage = false
  const aboutImage = '/images/about-image.jpg'

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-warm-900 mb-6 sm:mb-8 md:mb-12 text-center tracking-tight">
            עלינו
          </h2>
          
          {/* Optional image */}
          {hasImage && (
            <div className="mb-8 sm:mb-12 md:mb-16 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative w-full h-64 sm:h-80 md:h-96">
                <Image
                  src={aboutImage}
                  alt="נשמה וגוף"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}

          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg md:text-xl text-warm-700 leading-relaxed text-center">
            <p className="font-medium text-warm-800">
              בואו נצא יחד למסע של ריפוי וצמיחה דרך תנועה, נשימה ומודעות.
            </p>
            <p>
              כאן אנחנו משחררים את כל מה שכובל אותנו - חוקי אכילה נוקשים, 
              דפוסי חשיבה ישנים שמגבילים אותנו, ובוחרים בחופש להיות מי שאנחנו באמת.
            </p>
            <p className="text-warm-600 font-medium text-lg sm:text-xl md:text-2xl pt-4 sm:pt-6">
              כל צעד הוא הזדמנות להתחבר לעצמנו, לגוף שלנו ולנשמה שלנו.
            </p>
          </div>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-12 sm:mt-16 md:mt-20">
            <div className="bg-white rounded-lg p-8 sm:p-10 text-center border border-warm-200/50 hover:border-warm-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-0.5 bg-warm-300 mx-auto mb-6"></div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-warm-900 mb-3 tracking-tight">תנועה</h3>
              <p className="text-warm-600 text-sm sm:text-base leading-relaxed">חיבור לגוף דרך תנועה מודעת</p>
            </div>
            <div className="bg-white rounded-lg p-8 sm:p-10 text-center border border-warm-200/50 hover:border-warm-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-0.5 bg-warm-300 mx-auto mb-6"></div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-warm-900 mb-3 tracking-tight">צמיחה</h3>
              <p className="text-warm-600 text-sm sm:text-base leading-relaxed">שחרור דפוסים ישנים וצמיחה חדשה</p>
            </div>
            <div className="bg-white rounded-lg p-8 sm:p-10 text-center border border-warm-200/50 hover:border-warm-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-0.5 bg-warm-300 mx-auto mb-6"></div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-warm-900 mb-3 tracking-tight">חופש</h3>
              <p className="text-warm-600 text-sm sm:text-base leading-relaxed">בחירה בחופש להיות מי שאנחנו</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

