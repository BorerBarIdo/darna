export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-warm-50">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-warm-800">פאנל ניהול - נשמה וגוף</h1>
        </div>
      </nav>
      {children}
    </div>
  )
}

