import Image from 'next/image'

export default function AboutServiceSection() {
  const serviceImage = '/images/WhatsApp Image 2025-12-25 at 19.14.32.jpeg'

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      {/* Full Width Image */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] mb-16 sm:mb-20">
        <Image
          src={serviceImage}
          alt="תהליך הריפוי"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 tracking-tight text-center mb-8 sm:mb-10">
            על התהליך
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-gray-700 leading-relaxed font-light text-center">
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
      </div>
    </section>
  )
}

