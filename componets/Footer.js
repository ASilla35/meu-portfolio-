export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-auto">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <p className="text-sm text-gray-500">© 2026 Aimadu Silla</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}