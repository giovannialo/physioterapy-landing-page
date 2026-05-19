export default function Hero() {
  return (
    <section id="inicio" className="bg-teal-600 py-28 px-6 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-teal-200 text-sm font-medium tracking-widest uppercase mb-4">
          Clínica de Fisioterapia
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Recupere seu movimento.<br />Retome sua vida.
        </h1>
        <p className="text-teal-100 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Tratamentos personalizados com técnicas modernas para aliviar dores,
          reabilitar lesões e melhorar sua qualidade de vida.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#servicos"
            className="inline-block bg-white text-teal-700 font-semibold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors"
          >
            Conheça nossos serviços
          </a>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-800 text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-900 transition-colors"
          >
            Agendar consulta
          </a>
        </div>
      </div>
    </section>
  )
}
