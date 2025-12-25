import Image from 'next/image'

export default function Hero() {
  const backgroundImage = '/images/WhatsApp Image 2025-12-25 at 19.14.32.jpeg'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="רקע"
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.25 }}
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
          {/* Logo */}
          <div className="mb-8 sm:mb-12">
            <div className="inline-block">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-normal text-gray-900 leading-none tracking-wider" style={{ 
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '0.05em',
                fontWeight: 400
              }}>
                דרנה
              </h1>
              <div className="w-24 h-0.5 bg-gray-400 mx-auto mt-4"></div>
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-gray-900 leading-tight tracking-wide" style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: '0.03em',
              fontWeight: 400
            }}>
              נשמה וגוף
            </h2>
            
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic" style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic'
              }}>
                משחררים חוקי אכילה, דפוסי חשיבה ישנים ובוחרים בחופש
              </p>
              
              <div className="pt-6">
                <p className="text-base sm:text-lg text-gray-600 font-light tracking-wide" style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '0.9rem'
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

