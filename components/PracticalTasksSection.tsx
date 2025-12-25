import OptimizedImage from './OptimizedImage'

export default function PracticalTasksSection() {
  const physicalImage = '/images/WhatsApp Image 2025-12-25 at 19.14.32.jpeg'
  const emotionalImage = '/images/WhatsApp Image 2025-12-25 at 19.15.19.jpeg'

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 mb-16 sm:mb-20 text-center tracking-tight">
            הופכים תיאוריה לפעולה: המשימות היישומיות שלך
          </h2>

          {/* Full Width Images Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-12 sm:mb-16">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <OptimizedImage
                src={physicalImage}
                alt="משימה פיזית"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <OptimizedImage
                src={emotionalImage}
                alt="משימה רגשית"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content Below Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            {/* Physical Task */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-gray-900 mb-4 tracking-tight">
                משימה פיזית - &apos;טיהור המקדש&apos;
              </h3>
              <ul className="space-y-3 text-gray-700 text-base leading-relaxed font-light">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>סורקים את המזווה והמקרר.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>אוספים את כל המזון המתועש ל&apos;סלסילת הפרדה&apos; אחת, ומניחים אותה מחוץ לטווח הראייה.</span>
                </li>
              </ul>
            </div>

            {/* Emotional Task */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-gray-900 mb-4 tracking-tight">
                משימה רגשית - &apos;טיהור הלב&apos;
              </h3>
              <ul className="space-y-3 text-gray-700 text-base leading-relaxed font-light">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>כותבים על דף את כל ה&apos;רעלים הרגשיים&apos;: פחדים, אשמה, סיפורים ישנים על הגוף.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>עורכים &apos;טקס שחרור&apos;: קורעים את הדף או שורפים אותו כסמל לניקוי.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

