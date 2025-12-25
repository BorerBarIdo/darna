export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 tracking-tight">נשמה וגוף</h3>
          <p className="text-gray-600 text-sm sm:text-base font-light">
            משחררים חוקי אכילה, דפוסי חשיבה ישנים ובוחרים בחופש
          </p>
          <div className="text-gray-400 text-xs sm:text-sm font-light">
            © {new Date().getFullYear()} נשמה וגוף. כל הזכויות שמורות.
          </div>
        </div>
      </div>
    </footer>
  )
}

