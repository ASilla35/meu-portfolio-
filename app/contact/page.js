export const metadata = {
  title: 'Contato — João Silva',
}

export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Contato</p>
      <h1 className="text-4xl font-semibold text-gray-900 mb-6">Vamos conversar</h1>
      <p className="text-gray-600 max-w-xl leading-relaxed mb-16">
        Estou disponível para projetos freelance, oportunidades de trabalho
        ou simplesmente para trocar ideias sobre tecnologia.
      </p>

      <div className="space-y-4">
        <a href="mailto:1aimadu.silla@gmail.com" className="flex items-center justify-between border border-gray-200 rounded-lg px-6 py-4 hover:border-gray-400 transition-colors group">
          <span className="text-sm text-gray-500">Email</span>
          <span className="text-sm text-gray-900 font-medium group-hover:underline underline-offset-4">1aimadu.silla@gmail.com →</span>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-gray-200 rounded-lg px-6 py-4 hover:border-gray-400 transition-colors group">
          <span className="text-sm text-gray-500">GitHub</span>
          <span className="text-sm text-gray-900 font-medium group-hover:underline underline-offset-4">github.com/aimadusilla →</span>
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-gray-200 rounded-lg px-6 py-4 hover:border-gray-400 transition-colors group">
          <span className="text-sm text-gray-500">LinkedIn</span>
          <span className="text-sm text-gray-900 font-medium group-hover:underline underline-offset-4">linkedin.com/in/aimadusilla →</span>
        </a>
      </div>
    </main>
  )
}