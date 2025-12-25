export default function Hero() {
  // אם יש לך תמונת רקע, שנה את זה ל-true והוסף את התמונה ל-public/images/hero-bg.jpg
  const hasBackgroundImage = false
  const backgroundImage = '/images/hero-bg.jpg'

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-50 via-bright-50 to-warm-100 overflow-hidden pt-16 sm:pt-20"
      style={hasBackgroundImage ? {
        backgroundImage: `linear-gradient(rgba(255, 247, 237, 0.7), rgba(254, 252, 232, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-warm-200/30 rounded-full blur-3xl md:w-64 md:h-64 md:top-40 md:right-20"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-bright-200/30 rounded-full blur-3xl md:w-80 md:h-80 md:bottom-40 md:left-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-semibold text-warm-900 mb-4 sm:mb-6 leading-tight tracking-tight">
            נשמה וגוף
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-warm-800 mb-6 sm:mb-8 md:mb-12 mx-auto leading-relaxed px-2 font-light">
            משחררים חוקי אכילה, דפוסי חשיבה ישנים ובוחרים בחופש
          </p>
          <div className="mt-8 sm:mt-12 md:mt-16">
            <div className="inline-block bg-white/80 backdrop-blur-md rounded-full px-6 py-3 sm:px-8 sm:py-4 border border-warm-300/50 shadow-lg">
              <p className="text-warm-900 text-base sm:text-lg md:text-xl font-light">
                מסע של ריפוי דרך תנועה
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-warm-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-warm-500 rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

