export const metadata = {
  title: 'Sobre mim — João Silva',
}

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      {/* Intro */}
      <section className="border-b border-gray-100 pb-16">
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Sobre mim</p>
        <h1 className="text-4xl font-semibold text-gray-900 mb-8">
          Olá, Aimadu Silla👋
        </h1>
        <div className="space-y-4 text-gray-600 leading-relaxed max-w-2xl">
          <p>
            Sou desenvolvedor web com foco em JavaScript e ecosistema Node.js. 
            Gosto de construir produtos simples, rápidos e bem feitos.
          </p>
          <p>
            Atualmente estou a aprender Next.js e a explorar como construir 
            aplicações modernas com boas práticas de performance e acessibilidade.
          </p>
          <p>
            Quando não estou a programar, estou a ler, a escrever no blog 
            ou a explorar novas ferramentas.
          </p>
        </div>
      </section>

      {/* Experiência */}
      <section className="py-16 border-b border-gray-100">
        <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-8">Experiência</h2>
        <div className="space-y-8">
          {[
            {
              role: 'Desenvolvedor Frontend',
              company: 'Bravantic',
              period: '2025',
              desc: 'Desenvolvimento de interfaces com React e Next.js.',
            },
            {
              role: 'Continente - Colombo',
              company: 'Operador de Loja',
              period: '2025',
              desc: '.',
            },
          ].map((job) => (
            <div key={job.company} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
              <p className="text-sm text-gray-400 md:w-36 shrink-0">{job.period}</p>
              <div>
                <p className="font-medium text-gray-900">{job.role}</p>
                <p className="text-sm text-gray-500 mb-1">{job.company}</p>
                <p className="text-sm text-gray-600">{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills detalhadas */}
      <section className="py-16">
        <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-8">Stack técnico</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              area: 'Frontend',
              items: ['JavaScript', 'React', 'Next.js', 'HTML e CSS'],
            },
            {
              area: 'Backend',
              items: ['Node.js', '.Net', 'SQL'],
            },
            {
              area: 'Ferramentas',
              items: ['Git', 'GitHub', 'Vercel', 'VS Code'],
            },
          ].map((group) => (
            <div key={group.area}>
              <p className="font-medium text-gray-900 mb-3">{group.area}</p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 inline-block"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}