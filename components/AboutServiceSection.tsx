import Image from 'next/image'

export default function AboutServiceSection() {
  const serviceImage = '/images/WhatsApp Image 2025-12-25 at 19.14.32.jpeg'

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 tracking-tight">
                על התהליך
              </h2>
              <div className="space-y-6 text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
                <p>
                  המסע שלנו יחד מתחיל בהקשבה - לגוף, לנפש ולנשמה. אנחנו לא רק עובדים עם תנועה, אלא יוצרים חיבור עמוק שמאפשר שחרור של כל מה שכובל אותנו.
                </p>
                <p>
                  דרך תנועה מודעת, נשימה עמוקה ועבודה רגשית, אנחנו משחררים דפוסים ישנים, חוקי אכילה נוקשים ורגשות אשם. במקומם, אנחנו בונים חופש, אהבה עצמית וחיבור אמיתי למי שאנחנו באמת.
                </p>
                <p className="text-gray-900 text-xl sm:text-2xl pt-2 font-light">
                  כל מפגש הוא הזדמנות לצמיחה, ריפוי וחופש חדש.
                </p>
              </div>
            </div>

            {/* Image Content */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
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

