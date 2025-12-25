import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'נשמה וגוף - משחררים חוקי אכילה, דפוסי חשיבה ישנים ובוחרים בחופש',
  description: 'נשמה וגוף - משחררים חוקי אכילה, דפוסי חשיבה ישנים ובוחרים בחופש',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=EB+Garamond:wght@400;500;600&family=Great+Vibes&display=swap" rel="stylesheet" />
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/images/WhatsApp Image 2025-12-25 at 19.14.32.jpeg" fetchPriority="high" />
      </head>
      <body>{children}</body>
    </html>
  )
}

