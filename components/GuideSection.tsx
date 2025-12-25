import Image from 'next/image'

export default function GuideSection() {
  // משתמש באחת התמונות שהעלית
  const guideImage = '/images/WhatsApp Image 2025-12-25 at 19.15.34.jpeg'

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-warm-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-96 sm:h-[500px] md:h-[600px] overflow-hidden">
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
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-warm-900 mb-6 sm:mb-8 tracking-tight">
                המדריכה שלך למסע
              </h2>

              <div className="space-y-6 sm:space-y-8">
                <p className="text-base sm:text-lg md:text-xl text-warm-700 leading-relaxed">
                  שמי טלי שורץ, ובמשך 26 שנות ניסיון אספתי ידע, כלים ואג&apos;נדות שעובדות. המסע שלי שילב בין העולמות כדי ליצור גישה שלמה:
                </p>

                {/* Three Key Areas */}
                <div className="space-y-4 sm:space-y-6">
                  {/* הגוף - Body */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 flex items-center justify-center mt-1">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-warm-800 mb-2">
                        הגוף:
                      </h3>
                      <p className="text-base sm:text-lg text-warm-700 leading-relaxed">
                        תואר שני בחינוך גופני ומאמנת אישית בטכנולוגית EMS ואורח חיים בריא.
                      </p>
                    </div>
                  </div>

                  {/* הנפש - Soul/Mind */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 flex items-center justify-center mt-1">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-warm-800 mb-2">
                        הנפש:
                      </h3>
                      <p className="text-base sm:text-lg text-warm-700 leading-relaxed">
                        מאמנת מוסמכת לאכילה רגשית.
                      </p>
                    </div>
                  </div>

                  {/* הרוח - Spirit */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 flex items-center justify-center mt-1">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-warm-800 mb-2">
                        הרוח:
                      </h3>
                      <p className="text-base sm:text-lg text-warm-700 leading-relaxed">
                        מתקשרת רוחנית.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Concluding Statement */}
                <div className="pt-4 sm:pt-6 border-t-2 border-warm-200">
                  <p className="text-lg sm:text-xl md:text-2xl text-warm-800 font-medium leading-relaxed">
                    אני כאן כדי לחלוק איתך דרך חדשה שבה הגוף, הנפש והנשמה עובדים יחד.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

