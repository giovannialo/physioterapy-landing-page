const servicos = [
  {
    titulo: 'Fisioterapia Ortopédica',
    descricao:
      'Tratamento de dores e lesões musculoesqueléticas com técnicas modernas e individualizadas.',
    icone: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M18 6a2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 .73.4 1.36 1 1.72V12l-3-1.5L9 12V7.72A2 2 0 0 0 8 4a2 2 0 0 0-2 2 2 2 0 0 0 1 1.72V16.28A2 2 0 0 0 6 18a2 2 0 0 0 2 2 2 2 0 0 0 2-2c0-.73-.4-1.36-1-1.72V14l3 1.5 3-1.5v2.28A2 2 0 0 0 14 18a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-1-1.72V7.72A2 2 0 0 0 18 6z" />
      </svg>
    ),
  },
  {
    titulo: 'Fisioterapia Neurológica',
    descricao:
      'Reabilitação de pacientes com condições neurológicas, promovendo autonomia e qualidade de vida.',
    icone: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.66z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.66z" />
      </svg>
    ),
  },
  {
    titulo: 'Fisioterapia Esportiva',
    descricao:
      'Prevenção e recuperação de lesões para atletas de todos os níveis de desempenho.',
    icone: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
]

export default function ServicosOferecidos() {
  return (
    <section id="servicos" className="bg-zinc-50 py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-zinc-800 mb-3">Serviços Oferecidos</h2>
        <div className="w-16 h-1 bg-teal-500 rounded-full mb-10" aria-hidden="true" />

        <div className="grid gap-6 sm:grid-cols-3">
          {servicos.map((servico) => (
            <div
              key={servico.titulo}
              className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0" aria-hidden="true">
                {servico.icone}
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-800 mb-1">
                  {servico.titulo}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {servico.descricao}
                </p>
              </div>
              <a
                href="#agendamento"
                className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors mt-auto"
              >
                Agendar consulta →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
