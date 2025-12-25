import Image from 'next/image'

export default function TwoWorldsSection() {
  const bodyImage = '/images/WhatsApp Image 2025-12-25 at 19.14.53.jpeg'
  const soulImage = '/images/WhatsApp Image 2025-12-25 at 19.15.34.jpeg'

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 mb-16 sm:mb-20 text-center tracking-tight">
            המערך שלנו משלב בין שני עולמות
          </h2>

          {/* Full Width Images Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-12 sm:mb-16">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <Image
                src={bodyImage}
                alt="הזנת הגוף"
                fill
                className="object-cover"
                loading="lazy"
                quality={85}
              />
            </div>
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <Image
                src={soulImage}
                alt="הזנת הנשמה"
                fill
                className="object-cover"
                loading="lazy"
                quality={85}
              />
            </div>
          </div>

          {/* Content Below Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            {/* Left Column - Body Nourishment */}
            <div className="text-center lg:text-right">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 mb-3 tracking-tight">
                הזנת הגוף
              </h3>
              <p className="text-gray-600 mb-4 font-light">
                הצד המקצועי/תזונתי
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                פרוטוקול תזונתי פשוט שמטרתו ניקוי מערכת העיכול, איפוס הורמונלי ואיזון רמות הסוכר.
              </p>
            </div>

            {/* Right Column - Soul Nourishment */}
            <div className="text-center lg:text-right">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 mb-3 tracking-tight">
                הזנת הנשמה
              </h3>
              <p className="text-gray-600 mb-4 font-light">
                הצד התודעתי/רוחני
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                כלים להבנה שהמחשבה בוראת מציאות, לזיהוי אמונות מגבילות ולהזרעת כוונה חדשה בתת-המודע.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

