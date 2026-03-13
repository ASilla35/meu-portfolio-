import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-gray-900 text-lg tracking-tight">
          Aimadu Silla
        </Link>
        <ul className="flex items-center gap-8">
          <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Sobre</Link></li>
          <li><Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blog</Link></li>
          <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}