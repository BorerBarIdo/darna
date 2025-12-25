export default function Hero() {
  // אם יש לך תמונת רקע, שנה את זה ל-true והוסף את התמונה ל-public/images/hero-bg.jpg
  const hasBackgroundImage = false
  const backgroundImage = '/images/hero-bg.jpg'

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16 sm:pt-20"
      style={hasBackgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-gray-900 leading-tight tracking-tight">
            נשמה וגוף
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mx-auto leading-relaxed font-light max-w-2xl">
            משחררים חוקי אכילה, דפוסי חשיבה ישנים ובוחרים בחופש
          </p>
          <div className="pt-4">
            <p className="text-lg sm:text-xl text-gray-600 font-light">
              מסע של ריפוי דרך תנועה
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

