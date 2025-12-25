export default function PracticalTasksSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-warm-900 mb-12 sm:mb-16 text-center tracking-tight">
            הופכים תיאוריה לפעולה: המשימות היישומיות שלך
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Physical Task */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-warm-200/50 shadow-sm">
              <div className="mb-6">
                <div className="w-16 h-16 border border-warm-400 rounded-lg flex items-center justify-center">
                  <div className="w-10 h-10 border border-warm-500 rounded flex items-center justify-center">
                    <div className="w-6 h-6 border-t border-r border-warm-600 transform -rotate-45"></div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-warm-900 mb-4 tracking-tight">
                משימה פיזית - 'טיהור המקדש'
              </h3>
              
              <ul className="space-y-3 text-warm-700 text-sm sm:text-base leading-relaxed font-light">
                <li className="flex items-start gap-3">
                  <span className="text-warm-500 mt-1">✓</span>
                  <span>סורקים את המזווה והמקרר.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warm-500 mt-1">✓</span>
                  <span>אוספים את כל המזון המתועש ל'סלסילת הפרדה' אחת, ומניחים אותה מחוץ לטווח הראייה.</span>
                </li>
              </ul>
            </div>

            {/* Emotional Task */}
            <div className="bg-warm-50/50 rounded-lg p-6 sm:p-8 border border-warm-200/50 shadow-sm">
              <div className="mb-6">
                <div className="w-16 h-16 border border-warm-400 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 border border-warm-500 rounded-full relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-warm-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-warm-900 mb-4 tracking-tight">
                משימה רגשית - 'טיהור הלב'
              </h3>
              
              <ul className="space-y-3 text-warm-700 text-sm sm:text-base leading-relaxed font-light">
                <li className="flex items-start gap-3">
                  <span className="text-warm-500 mt-1">✓</span>
                  <span>כותבים על דף את כל ה'רעלים הרגשיים': פחדים, אשמה, סיפורים ישנים על הגוף.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warm-500 mt-1">✓</span>
                  <span>עורכים 'טקס שחרור': קורעים את הדף או שורפים אותו כסמל לניקוי.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

