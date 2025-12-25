import OptimizedImage from './OptimizedImage'

export default function Hero() {
  const backgroundImage = '/images/WhatsApp Image 2025-12-25 at 19.15.19.jpeg'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image - Full Width */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={backgroundImage}
          alt="רקע"
          fill
          priority
          style={{ opacity: 0.95, objectPosition: 'center bottom' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
          {/* Logo - Darna in English */}
          <div className="mb-12 sm:mb-16">
            <div className="inline-block">
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-normal leading-none relative z-20 text-gray-900" style={{ 
                fontFamily: "'Great Vibes', 'Brush Script MT', cursive",
                fontWeight: 400,
                lineHeight: '0.9',
                color: '#111827',
                textShadow: '3px 3px 10px rgba(255,255,255,1), 0 0 25px rgba(255,255,255,0.9)',
                display: 'block',
                visibility: 'visible'
              }}>
                Darna
              </h1>
              <div className="w-32 h-px bg-gray-600 mx-auto mt-6 relative z-20"></div>
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-8 sm:space-y-10 relative z-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal leading-[1.1] tracking-wide relative z-20 text-gray-900" style={{
              fontFamily: "'EB Garamond', 'Cormorant Garamond', Georgia, serif",
              letterSpacing: '0.05em',
              fontWeight: 500,
              color: '#111827',
              textShadow: '4px 4px 12px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,1), 2px 2px 8px rgba(0,0,0,0.1)',
              display: 'block',
              visibility: 'visible'
            }}>
              נשמה וגוף
            </h2>
            
            <div className="max-w-2xl mx-auto space-y-6 relative z-20">
              <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed font-light relative z-20 text-gray-900" style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#111827',
                textShadow: '4px 4px 12px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,1), 2px 2px 8px rgba(0,0,0,0.1)'
              }}>
                משחררים חוקי אכילה, דפוסי חשיבה ישנים ובוחרים בחופש
              </p>
              
              <div className="pt-8 relative z-20">
                <p className="text-base sm:text-lg md:text-xl text-gray-900 font-medium tracking-[0.15em] relative z-20" style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontWeight: 500,
                  color: '#111827',
                  textShadow: '3px 3px 10px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,0.9), 1px 1px 4px rgba(0,0,0,0.1)'
                }}>
                  מסע של ריפוי דרך תנועה
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

