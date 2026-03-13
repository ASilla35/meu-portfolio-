import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6">

      {/* Hero */}
      <section className="py-24 border-b border-gray-100">
        <p className="text-sm text-gray-500 mb-4 tracking-widest uppercase">Olá, eu sou</p>
        <h1 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
          Aimadu Silla
        </h1>
        <p className="text-xl text-gray-600 max-w-xl leading-relaxed mb-10">
          Desenvolvedor web apaixonado por construir produtos úteis e escrever sobre tecnologia.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/about"
            className="bg-gray-900 text-white text-sm px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Sobre mim
          </Link>
          <Link
            href="/blog"
            className="text-sm text-gray-600 px-6 py-3 rounded-lg border border-gray-200 hover:border-gray-400 transition-colors"
          >
            Ver blog
          </Link>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 border-b border-gray-100">
        <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-8">Stack técnico</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['JavaScript', 'Next.js', 'Node.js', 'React', 'Tailwind CSS', 'Git', 'SQL', 'REST APIs'].map(skill => (
            <div key={skill} className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-gray-400 transition-colors">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Blog */}
      <section className="py-16">
        <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-4">Do blog</h2>
        <p className="text-gray-600 mb-6">Escrevo sobre desenvolvimento web, ferramentas e o que estou a aprender.</p>
        <Link
          href="/blog"
          className="text-sm text-gray-900 font-medium hover:underline underline-offset-4"
        >
          Ver todos os artigos →
        </Link>
      </section>

    </main>
  )
}