export default function FirstStepSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-warm-900 mb-12 sm:mb-16 tracking-tight">
            הצעד הראשון שלך: איך מתחילים?
          </h2>

          {/* Decorative element */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-warm-300 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border border-warm-400 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-r border-b border-warm-500 transform rotate-45"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-warm-800 leading-relaxed">
            <p className="font-light">
              המסע שלנו מתחיל במודול הראשון והבסיסי ביותר:
            </p>

            <div className="bg-warm-50/50 rounded-lg p-8 sm:p-10 border border-warm-200/50 text-right space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-warm-900 mb-4">
                מודול 1: RESET (ניקוי ופתיחת מרחב)
              </h3>
              
              <div className="space-y-4 text-warm-700">
                <div>
                  <p className="font-medium text-warm-900 mb-2">המסר המוביל:</p>
                  <p className="font-light italic">
                    'כדי לבנות אמת חדשה, עלינו לפנות את הישנה – במקרר, בלב ובמחשבה.'
                  </p>
                </div>
                
                <div>
                  <p className="font-medium text-warm-900 mb-2">ההבטחה:</p>
                  <p className="font-light italic">
                    'השבוע אנחנו מורידים את הרעש כדי להתחיל לשמוע את קול הנשמה והשובע האמיתי.'
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

