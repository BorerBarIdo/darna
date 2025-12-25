export default function ResetProtocolSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-warm-900 mb-12 sm:mb-16 text-center tracking-tight">
            הזנת הגוף: הפרוטוקול התזונתי לשבוע ה-RESET
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* What to eat */}
            <div className="bg-warm-50/50 rounded-lg p-6 sm:p-8 border border-warm-200/50">
              <div className="mb-6">
                <div className="w-12 h-12 border border-green-400 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-t border-r border-green-500 transform -rotate-45"></div>
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-warm-900 mb-4 tracking-tight">
                מה אוכלים?
              </h3>
              
              <div className="space-y-3 text-warm-700 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  מזון &apos;חי&apos; מהטבע בלבד: ירקות, פירות, חלבון נקי, שומן איכותי.
                </p>
                <p className="font-medium text-warm-900">
                  העיקרון: אוכלים עד שובע נעים. אין ספירת קלוריות, יש דגש על איכות.
                </p>
              </div>
            </div>

            {/* What to avoid */}
            <div className="bg-warm-50/50 rounded-lg p-6 sm:p-8 border border-warm-200/50">
              <div className="mb-6">
                <div className="w-12 h-12 border border-warm-400 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border border-warm-500 transform rotate-45 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-warm-500"></div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-warm-900 mb-4 tracking-tight">
                מה מוציאים (או מצמצמים)?
              </h3>
              
              <p className="text-warm-700 text-sm sm:text-base leading-relaxed font-light">
                סוכר לבן, קמח לבן, מזון מעובד/מתועש, קפאין ואלכוהול.
              </p>
            </div>

            {/* What to drink */}
            <div className="bg-warm-50/50 rounded-lg p-6 sm:p-8 border border-warm-200/50">
              <div className="mb-6">
                <div className="w-12 h-12 border border-green-400 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border border-green-500 rounded-full"></div>
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-warm-900 mb-4 tracking-tight">
                מה שותים (&apos;הניקוז&apos;)?
              </h3>
              
              <p className="text-warm-700 text-sm sm:text-base leading-relaxed font-light">
                2-3 ליטר מים ביום. ניתן להוסיף לימון או חליטות צמחים.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

