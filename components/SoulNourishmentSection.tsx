export default function SoulNourishmentSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-warm-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-warm-900 mb-4 sm:mb-6 text-center tracking-tight">
            הזנת הנשמה: הכלי התודעתי
          </h2>
          <p className="text-xl sm:text-2xl font-serif font-semibold text-warm-900 mb-12 sm:mb-16 text-center tracking-tight">
            לשבוע ה-RESET
          </p>

          <div className="space-y-8 sm:space-y-10">
            {/* Scientific Principle */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border-r-4 border-warm-500">
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-warm-900 mb-4 tracking-tight">
                העיקרון המדעי
              </h3>
              <p className="text-warm-700 leading-relaxed font-light">
                התת-מודע שלנו לא מבחין בין דמיון למציאות, והוא כפוף להנחיות שלנו. הוא מבצע את מה שאנחנו מרגישים ומדמיינים.
              </p>
            </div>

            {/* First Practice */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border-r-4 border-warm-500">
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-warm-900 mb-4 tracking-tight">
                התרגול הראשון: מיפוי אמונות
              </h3>
              <ul className="space-y-3 text-warm-700 leading-relaxed font-light list-none">
                <li className="flex items-start gap-3">
                  <span className="text-warm-500 mt-1">•</span>
                  <span>
                    נזהה 3 'חוקי אוכל' ישנים שמנהלים אותנו (למשל: 'חייבים לסיים מהצלחת').
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warm-500 mt-1">•</span>
                  <span>
                    נבחר חוק אחד שאנחנו מוכנים לשחרר השבוע.
                  </span>
                </li>
              </ul>
            </div>

            {/* Daily Tool */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border-r-4 border-warm-500">
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-warm-900 mb-4 tracking-tight">
                הכלי היומי: מדיטציית 'מרחב חדש'
              </h3>
              <p className="text-warm-700 leading-relaxed font-light">
                תרגול קצר (3 דקות) של נשימות, ויזואליזציה של אור מנקה והזרעת כוונה חדשה.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

