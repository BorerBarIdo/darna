import Image from 'next/image'

export default function JourneyBenefitsSection() {
  const sectionImage = '/images/WhatsApp Image 2025-12-25 at 19.15.34.jpeg'
  
  const benefits = [
    {
      title: '12 מודולים (שבועות) מחזוריים המכסים את כל היבטי החיים: מודל השפע והאיזון, בילויים, אירועים ועוד.',
    },
    {
      title: 'ליווי אישי יומיומי ותמיכה בקבוצת וואטסאפ סגורה ואינטימית.',
    },
    {
      title: 'קהילה חמה ותומכת של נשים וגברים שנמצאים בדיוק באותו מסע כמוך.',
    },
    {
      title: 'בניית אמת חדשה סביב אכילה ודימוי גוף שתשפיע על כל מעגלי חייך: זוגיות, משפחה וחברים.',
    },
    {
      title: 'ידע תזונתי פרקטי מבוסס מדע המקדם בריאות נבונה, מהנה ובת-קיימא.',
    },
  ]

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20">
            {/* Title */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 tracking-tight">
                מה עוד תקבלי/י במסע &apos;נשמה וגוף&apos;?
              </h2>
            </div>

            {/* Image */}
            <div>
              <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden">
                <Image
                  src={sectionImage}
                  alt="מה עוד תקבלי במסע"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">

          <div className="space-y-4 sm:space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="border-r-2 border-gray-200 pr-6"
              >
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  {benefit.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

