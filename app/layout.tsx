import Link from 'next/link'
import './globals.css'

export const metadata ={
  title: 'Portfolio',
  description: 'Mon portfolio avec Next.js',
}

export default function RootLayout({ children}: { children: React.ReactNode}) {
  return (
    <html lang='fr'>
      <body className="bg-violet-50">
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-violet-100 shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-6 h-16">
            <h1 className="text-lg font-semibold text-violet-900">Mon Portfolio</h1>
            <ul className="flex gap-8">
              <li><Link className="text-violet-700 hover:text-violet-900 hover:underline underline-offset-4 decoration-violet-300" href="/">Accueil</Link></li>
              <li><Link className="text-violet-700 hover:text-violet-900 hover:underline underline-offset-4 decoration-violet-300" href="/apropos">À propos</Link></li>
              <li><Link className="text-violet-700 hover:text-violet-900 hover:underline underline-offset-4 decoration-violet-300" href="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <main className="pt-20 max-w-6xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  )
}
