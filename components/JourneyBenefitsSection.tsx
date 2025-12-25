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
      {/* Full Width Image */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] mb-16 sm:mb-20">
        <Image
          src={sectionImage}
          alt="מה עוד תקבלי במסע"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 tracking-tight text-center mb-12 sm:mb-16">
            מה עוד תקבלי/י במסע &apos;נשמה וגוף&apos;?
          </h2>

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
      </div>
    </section>
  )
}

