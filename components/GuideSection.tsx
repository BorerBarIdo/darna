import Image from 'next/image'

export default function GuideSection() {
  // משתמש באחת התמונות שהעלית
  const guideImage = '/images/WhatsApp Image 2025-12-25 at 19.15.34.jpeg'

  return (
    <section className="py-24 sm:py-32 md:py-40 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={guideImage}
                  alt="טלי שורץ - המדריכה שלך למסע"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="order-1 lg:order-2 space-y-8 sm:space-y-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 tracking-tight">
                המדריכה שלך למסע
              </h2>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
                שמי טלי שורץ, ובמשך 26 שנות ניסיון אספתי ידע, כלים ואג&apos;נדות שעובדות. המסע שלי שילב בין העולמות כדי ליצור גישה שלמה:
              </p>

              {/* Three Key Areas */}
              <div className="space-y-6 sm:space-y-8">
                {/* הגוף - Body */}
                <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-gray-900 mb-3 tracking-tight">
                    הגוף:
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                    תואר שני בחינוך גופני ומאמנת אישית בטכנולוגית EMS ואורח חיים בריא.
                  </p>
                </div>

                {/* הנפש - Soul/Mind */}
                <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-gray-900 mb-3 tracking-tight">
                    הנפש:
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                    מאמנת מוסמכת לאכילה רגשית.
                  </p>
                </div>

                {/* הרוח - Spirit */}
                <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-gray-900 mb-3 tracking-tight">
                    הרוח:
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                    מתקשרת רוחנית.
                  </p>
                </div>
              </div>

              {/* Concluding Statement */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-light">
                  אני כאן כדי לחלוק איתך דרך חדשה שבה הגוף, הנפש והנשמה עובדים יחד.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

