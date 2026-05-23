// Banner promocional para destacar ofertas ou chamadas de ação especiais

interface BannerPromoProps {
  titulo: string
  descricao: string
  ctaTexto: string
  ctaLink: string
  destaque?: string
}

export default function BannerPromo({
  titulo,
  descricao,
  ctaTexto,
  ctaLink,
  destaque,
}: BannerPromoProps) {
  return (
    <section className="bg-teal-700 py-12 px-6">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-white text-center sm:text-left">
          {destaque && (
            <span className="inline-block bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              {destaque}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-2">{titulo}</h2>
          <p className="text-teal-100 text-sm leading-relaxed max-w-lg">{descricao}</p>
        </div>
        <a
          href={ctaLink}
          className="shrink-0 inline-block bg-white text-teal-700 font-semibold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors whitespace-nowrap"
        >
          {ctaTexto}
        </a>
      </div>
    </section>
  )
}
