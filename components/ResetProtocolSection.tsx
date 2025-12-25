import Image from 'next/image'

export default function ResetProtocolSection() {
  const eatImage = '/images/WhatsApp Image 2025-12-25 at 19.14.32.jpeg'
  const avoidImage = '/images/WhatsApp Image 2025-12-25 at 19.15.19.jpeg'
  const drinkImage = '/images/WhatsApp Image 2025-12-25 at 19.14.53.jpeg'

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 mb-16 sm:mb-20 text-center tracking-tight">
            הזנת הגוף: הפרוטוקול התזונתי לשבוע ה-RESET
          </h2>

          {/* Full Width Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-12 sm:mb-16">
            {/* What to eat */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <Image
                src={eatImage}
                alt="מה אוכלים"
                fill
                className="object-cover"
              />
            </div>

            {/* What to avoid */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <Image
                src={avoidImage}
                alt="מה מוציאים"
                fill
                className="object-cover"
              />
            </div>

            {/* What to drink */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <Image
                src={drinkImage}
                alt="מה שותים"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Below Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* What to eat */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-gray-900 mb-4 tracking-tight">
                מה אוכלים?
              </h3>
              <div className="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  מזון &apos;חי&apos; מהטבע בלבד: ירקות, פירות, חלבון נקי, שומן איכותי.
                </p>
                <p className="text-gray-900">
                  העיקרון: אוכלים עד שובע נעים. אין ספירת קלוריות, יש דגש על איכות.
                </p>
              </div>
            </div>

            {/* What to avoid */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-gray-900 mb-4 tracking-tight">
                מה מוציאים (או מצמצמים)?
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light">
                סוכר לבן, קמח לבן, מזון מעובד/מתועש, קפאין ואלכוהול.
              </p>
            </div>

            {/* What to drink */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-gray-900 mb-4 tracking-tight">
                מה שותים (&apos;הניקוז&apos;)?
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light">
                2-3 ליטר מים ביום. ניתן להוסיף לימון או חליטות צמחים.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

