export default function JourneyBenefitsSection() {
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
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-warm-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-warm-900 mb-12 sm:mb-16 text-center tracking-tight">
            מה עוד תקבלי/י במסע 'נשמה וגוף'?
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 sm:p-8 border border-warm-200/50 hover:border-warm-300 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 border border-warm-400 rounded-full flex items-center justify-center mt-1">
                    <div className="w-4 h-4 border border-warm-500 rounded-full"></div>
                  </div>
                  <p className="text-base sm:text-lg text-warm-800 leading-relaxed font-light flex-1">
                    {benefit.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

