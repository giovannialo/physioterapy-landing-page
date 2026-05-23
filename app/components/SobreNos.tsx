const diferenciais = [
  { valor: '10+', titulo: 'Anos de experiência' },
  { valor: '2.000+', titulo: 'Pacientes atendidos' },
  { valor: '8', titulo: 'Especialidades' },
]

export default function SobreNos() {
  return (
    <section id="sobre-nos" className="bg-white py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-zinc-800 mb-3">Sobre Nós</h2>
        <div className="w-16 h-1 bg-teal-500 rounded-full mb-10" aria-hidden="true" />

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-zinc-600 text-lg leading-relaxed">
              Somos uma clínica de fisioterapia comprometida com a sua
              recuperação e bem-estar. Nossa equipe utiliza técnicas modernas e
              comprovadas para oferecer o melhor tratamento a cada paciente.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Acreditamos que cada pessoa é única — por isso desenvolvemos
              planos individualizados, focados nas necessidades específicas de
              cada paciente para garantir resultados efetivos.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
            {diferenciais.map((item) => (
              <div
                key={item.titulo}
                className="bg-teal-50 rounded-2xl p-6 text-center md:flex md:items-center md:gap-4 md:text-left"
              >
                <span className="block text-3xl font-bold text-teal-600">
                  {item.valor}
                </span>
                <span className="block text-sm text-zinc-500 mt-1 md:mt-0">
                  {item.titulo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
