export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-100 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-serif font-semibold mb-4 tracking-tight">נשמה וגוף</h3>
          <p className="text-warm-300 text-sm sm:text-base mb-6 font-light">
            משחררים חוקי אכילה, דפוסי חשיבה ישנים ובוחרים בחופש
          </p>
          <div className="text-warm-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} נשמה וגוף. כל הזכויות שמורות.
          </div>
        </div>
      </div>
    </footer>
  )
}

