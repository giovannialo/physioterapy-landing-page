const depoimentos = [
  {
    nome: 'Ana Paula S.',
    tratamento: 'Fisioterapia Ortopédica',
    texto:
      'Após a cirurgia no joelho, não acreditava que voltaria a caminhar sem dor. Em três meses de tratamento, retomei minha rotina completamente.',
  },
  {
    nome: 'Carlos M.',
    tratamento: 'Fisioterapia Esportiva',
    texto:
      'Lesionei o ombro jogando tênis e precisava voltar rápido. O atendimento foi personalizado e o resultado superou minhas expectativas.',
  },
  {
    nome: 'Mariana F.',
    tratamento: 'Fisioterapia Neurológica',
    texto:
      'Minha mãe passou por um AVC e a equipe foi fundamental na reabilitação. Profissionais dedicados e muito humanos.',
  },
]

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-white py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-zinc-800 mb-3">O que nossos pacientes dizem</h2>
        <div className="w-16 h-1 bg-teal-500 rounded-full mb-10" aria-hidden="true" />
        <div className="grid gap-6 sm:grid-cols-3">
          {depoimentos.map((d) => (
            <div key={d.nome} className="bg-zinc-50 rounded-2xl p-6 flex flex-col gap-4 border border-zinc-100">
              <div className="flex gap-1" aria-label="Avaliação: 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-teal-500">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed flex-1">"{d.texto}"</p>
              <div>
                <p className="text-sm font-semibold text-zinc-800">{d.nome}</p>
                <p className="text-xs text-teal-600">{d.tratamento}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
