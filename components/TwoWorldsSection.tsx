export default function TwoWorldsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-warm-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-warm-900 mb-12 sm:mb-16 text-center tracking-tight">
            המערך שלנו משלב בין שני עולמות
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Left Column - Body Nourishment */}
            <div className="bg-white rounded-lg p-8 sm:p-10 border border-warm-200/50">
              <div className="mb-6">
                <div className="w-16 h-16 border border-green-400 rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-8 border-t border-r border-green-500 transform -rotate-45"></div>
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-warm-900 mb-2 tracking-tight">
                הזנת הגוף
              </h3>
              <p className="text-warm-600 mb-6 font-light">
                הצד המקצועי/תזונתי
              </p>
              
              <p className="text-warm-700 leading-relaxed font-light">
                פרוטוקול תזונתי פשוט שמטרתו ניקוי מערכת העיכול, איפוס הורמונלי ואיזון רמות הסוכר.
              </p>
            </div>

            {/* Right Column - Soul Nourishment */}
            <div className="bg-white rounded-lg p-8 sm:p-10 border border-warm-200/50">
              <div className="mb-6">
                <div className="w-16 h-16 border border-warm-400 rounded-full flex items-center justify-center mb-4">
                  <div className="w-10 h-10 border border-warm-500 rounded-full relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-warm-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-warm-900 mb-2 tracking-tight">
                הזנת הנשמה
              </h3>
              <p className="text-warm-600 mb-6 font-light">
                הצד התודעתי/רוחני
              </p>
              
              <p className="text-warm-700 leading-relaxed font-light">
                כלים להבנה שהמחשבה בוראת מציאות, לזיהוי אמונות מגבילות ולהזרעת כוונה חדשה בתת-המודע.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

