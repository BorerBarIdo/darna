import Image from 'next/image'

export default function AboutSection() {
  const aboutImage = '/images/WhatsApp Image 2025-12-25 at 19.14.32.jpeg'

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-12 sm:mb-16">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden">
                <Image
                  src={aboutImage}
                  alt="נשמה וגוף"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Title */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 tracking-tight">
                עלינו
              </h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">

          <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-gray-700 leading-relaxed text-center font-light">
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
          
          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 md:gap-20 mt-20 sm:mt-24 md:mt-32">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 mb-3 tracking-tight">תנועה</h3>
              <p className="text-gray-600 text-base leading-relaxed font-light">חיבור לגוף דרך תנועה מודעת</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 mb-3 tracking-tight">צמיחה</h3>
              <p className="text-gray-600 text-base leading-relaxed font-light">שחרור דפוסים ישנים וצמיחה חדשה</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 mb-3 tracking-tight">חופש</h3>
              <p className="text-gray-600 text-base leading-relaxed font-light">בחירה בחופש להיות מי שאנחנו</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

