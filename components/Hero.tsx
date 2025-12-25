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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
          {/* Logo - Darna */}
          <div className="mb-12 sm:mb-16">
            <div className="inline-block">
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-serif font-normal text-gray-900 leading-none" style={{ 
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '0.08em',
                fontWeight: 400,
                lineHeight: '0.9'
              }}>
                דרנה
              </h1>
              <div className="w-32 h-px bg-gray-500 mx-auto mt-6"></div>
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-8 sm:space-y-10">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-gray-900 leading-[1.1] tracking-wide" style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: '0.05em',
              fontWeight: 400
            }}>
              נשמה וגוף
            </h2>
            
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed font-light" style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 300
              }}>
                משחררים חוקי אכילה, דפוסי חשיבה ישנים ובוחרים בחופש
              </p>
              
              <div className="pt-8">
                <p className="text-sm sm:text-base text-gray-600 font-light tracking-[0.15em]" style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontSize: '0.85rem'
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

