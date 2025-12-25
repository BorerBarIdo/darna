import Image from 'next/image'

export default function FirstStepSection() {
  const sectionImage = '/images/WhatsApp Image 2025-12-25 at 19.15.19.jpeg'

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden">
                <Image
                  src={sectionImage}
                  alt="הצעד הראשון"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-right space-y-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 tracking-tight">
                הצעד הראשון שלך: איך מתחילים?
              </h2>

              <div className="space-y-6 text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
                <p>
                  המסע שלנו מתחיל במודול הראשון והבסיסי ביותר:
                </p>

                <div className="space-y-6 pt-4">
                  <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900">
                    מודול 1: RESET (ניקוי ופתיחת מרחב)
                  </h3>
                  
                  <div className="space-y-6 text-gray-600">
                    <div>
                      <p className="font-light mb-2">המסר המוביל:</p>
                      <p className="font-light italic">
                        &apos;כדי לבנות אמת חדשה, עלינו לפנות את הישנה – במקרר, בלב ובמחשבה.&apos;
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-light mb-2">ההבטחה:</p>
                      <p className="font-light italic">
                        &apos;השבוע אנחנו מורידים את הרעש כדי להתחיל לשמוע את קול הנשמה והשובע האמיתי.&apos;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

