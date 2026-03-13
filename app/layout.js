import { Geist } from 'next/font/google'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata = {
  title: 'Aimadu Silla — Dev & Blog',
  description: 'Portfólio e blog pessoal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${geist.className} bg-white text-gray-900 flex flex-col min-h-screen`}>
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}