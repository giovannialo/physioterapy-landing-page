// Seção de especialidades: destaca os principais focos de tratamento oferecidos
const especialidades = [
  {
    titulo: 'Coluna',
    descricao:
      'Tratamento de hérnias de disco, lombalgias, dores cervicais e desvios posturais com protocolos individualizados.',
    icone: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <line x1="12" y1="2" x2="12" y2="22" />
        <path d="M12 6c2 0 4 1 4 3s-2 3-4 3" />
        <path d="M12 12c2 0 4 1 4 3s-2 3-4 3" />
        <path d="M12 6c-2 0-4 1-4 3s2 3 4 3" />
        <path d="M12 12c-2 0-4 1-4 3s2 3 4 3" />
      </svg>
    ),
  },
  {
    titulo: 'Joelho',
    descricao:
      'Reabilitação de lesões ligamentares, meniscais e patelares, com foco em retorno funcional seguro.',
    icone: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2c-3 4-4 7-4 10a4 4 0 0 0 8 0c0-3-1-6-4-10z" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    titulo: 'Pós-operatório',
    descricao:
      'Recuperação funcional após cirurgias ortopédicas, reduzindo dor, edema e restabelecendo o movimento.',
    icone: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    titulo: 'Esportivo',
    descricao:
      'Prevenção de lesões, potencialização do desempenho e retorno ao esporte para atletas de todos os níveis.',
    icone: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
]

export default function Especialidades() {
  return (
    <section id="especialidades" className="bg-white py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-zinc-800 mb-3">Nossas Especialidades</h2>
        <div className="w-16 h-1 bg-teal-500 rounded-full mb-10" aria-hidden="true" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {especialidades.map((item) => (
            <div
              key={item.titulo}
              className="bg-zinc-50 rounded-2xl p-6 shadow-sm border border-zinc-100 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0" aria-hidden="true">
                {item.icone}
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-800 mb-1">{item.titulo}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{item.descricao}</p>
              </div>
              <a
                href="#agendamento"
                aria-label={`Agendar consulta para ${item.titulo}`}
                className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors mt-auto"
              >
                Agendar consulta <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
