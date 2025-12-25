import OptimizedImage from './OptimizedImage'

export default function AboutSection() {
  const aboutImage = '/images/WhatsApp Image 2025-12-25 at 19.14.32.jpeg'

  return (
    <section className="py-24 sm:py-32 md:py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Image and Content Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center mb-20 sm:mb-24">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden rounded-lg shadow-lg">
                <OptimizedImage
                  src={aboutImage}
                  alt="נשמה וגוף"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 tracking-tight mb-8 sm:mb-10">
                עלינו
              </h2>

              <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
                <p>
                  בואו נצא יחד למסע של ריפוי וצמיחה דרך תנועה, נשימה ומודעות.
                </p>
                <p>
                  כאן אנחנו משחררים את כל מה שכובל אותנו - חוקי אכילה נוקשים, 
                  דפוסי חשיבה ישנים שמגבילים אותנו, ובוחרים בחופש להיות מי שאנחנו באמת.
                </p>
                <p className="text-gray-900 text-xl sm:text-2xl pt-4 font-light">
                  כל צעד הוא הזדמנות להתחבר לעצמנו, לגוף שלנו ולנשמה שלנו.
                </p>
              </div>
            </div>
          </div>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mt-20 sm:mt-24">
            <div className="text-center p-8 bg-gray-50/50 rounded-lg border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 mb-4 tracking-tight">תנועה</h3>
              <p className="text-gray-600 text-base leading-relaxed font-light">חיבור לגוף דרך תנועה מודעת</p>
            </div>
            <div className="text-center p-8 bg-gray-50/50 rounded-lg border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 mb-4 tracking-tight">צמיחה</h3>
              <p className="text-gray-600 text-base leading-relaxed font-light">שחרור דפוסים ישנים וצמיחה חדשה</p>
            </div>
            <div className="text-center p-8 bg-gray-50/50 rounded-lg border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 mb-4 tracking-tight">חופש</h3>
              <p className="text-gray-600 text-base leading-relaxed font-light">בחירה בחופש להיות מי שאנחנו</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

