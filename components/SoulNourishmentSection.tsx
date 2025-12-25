import Image from 'next/image'

export default function SoulNourishmentSection() {
  const sectionImage = '/images/WhatsApp Image 2025-12-25 at 19.15.34.jpeg'

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      {/* Full Width Image */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] mb-16 sm:mb-20">
        <Image
          src={sectionImage}
          alt="הזנת הנשמה"
          fill
          className="object-cover"
          loading="lazy"
          quality={85}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 tracking-tight text-center mb-4">
            הזנת הנשמה: הכלי התודעתי
          </h2>
          <p className="text-xl sm:text-2xl font-serif font-normal text-gray-900 mb-12 sm:mb-16 text-center tracking-tight">
            לשבוע ה-RESET
          </p>

          <div className="space-y-8 sm:space-y-10">
            {/* Scientific Principle */}
            <div className="border-r-2 border-gray-200 pr-6">
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-gray-900 mb-4 tracking-tight">
                העיקרון המדעי
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                התת-מודע שלנו לא מבחין בין דמיון למציאות, והוא כפוף להנחיות שלנו. הוא מבצע את מה שאנחנו מרגישים ומדמיינים.
              </p>
            </div>

            {/* First Practice */}
            <div className="border-r-2 border-gray-200 pr-6">
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-gray-900 mb-4 tracking-tight">
                התרגול הראשון: מיפוי אמונות
              </h3>
              <ul className="space-y-3 text-gray-700 leading-relaxed font-light list-none">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>
                    נזהה 3 &apos;חוקי אוכל&apos; ישנים שמנהלים אותנו (למשל: &apos;חייבים לסיים מהצלחת&apos;).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>
                    נבחר חוק אחד שאנחנו מוכנים לשחרר השבוע.
                  </span>
                </li>
              </ul>
            </div>

            {/* Daily Tool */}
            <div className="border-r-2 border-gray-200 pr-6">
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-gray-900 mb-4 tracking-tight">
                הכלי היומי: מדיטציית &apos;מרחב חדש&apos;
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                תרגול קצר (3 דקות) של נשימות, ויזואליזציה של אור מנקה והזרעת כוונה חדשה.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

