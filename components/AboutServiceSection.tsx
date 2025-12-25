import Image from 'next/image'

export default function AboutServiceSection() {
  const serviceImage = '/images/WhatsApp Image 2025-12-25 at 19.14.32.jpeg'

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-warm-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-warm-900 mb-6 sm:mb-8 tracking-tight">
                על התהליך
              </h2>
              <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-warm-700 leading-relaxed">
                <p>
                  המסע שלנו יחד מתחיל בהקשבה - לגוף, לנפש ולנשמה. אנחנו לא רק עובדים עם תנועה, אלא יוצרים חיבור עמוק שמאפשר שחרור של כל מה שכובל אותנו.
                </p>
                <p>
                  דרך תנועה מודעת, נשימה עמוקה ועבודה רגשית, אנחנו משחררים דפוסים ישנים, חוקי אכילה נוקשים ורגשות אשם. במקומם, אנחנו בונים חופש, אהבה עצמית וחיבור אמיתי למי שאנחנו באמת.
                </p>
                <p className="text-warm-800 font-medium text-lg sm:text-xl pt-2">
                  כל מפגש הוא הזדמנות לצמיחה, ריפוי וחופש חדש.
                </p>
              </div>
            </div>

            {/* Image Content */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
                <Image
                  src={serviceImage}
                  alt="תהליך הריפוי"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

