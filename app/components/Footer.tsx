export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-zinc-400 py-12 px-6">
      <div className="mx-auto max-w-4xl grid gap-10 sm:grid-cols-3 mb-10">

        <div className="flex flex-col gap-2">
          <span className="text-teal-400 font-bold text-base mb-1">FisioClínica</span>
          <p className="text-sm">Rua das Palmeiras, 142 — Sala 5</p>
          <p className="text-sm">Jardim Europa, São Paulo – SP</p>
          <p className="text-sm">CEP 01234-567</p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-zinc-200 font-semibold text-sm mb-1">Horários</span>
          <p className="text-sm">Segunda a sexta: 8h – 20h</p>
          <p className="text-sm">Sábado: 8h – 13h</p>
          <p className="text-sm">Domingo: fechado</p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-zinc-200 font-semibold text-sm mb-1">Contato</span>
          <a href="tel:+5511999999999" className="text-sm hover:text-teal-400 transition-colors">
            (11) 99999-9999
          </a>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-teal-400 transition-colors"
          >
            WhatsApp
          </a>
          <a href="mailto:contato@fisioclinica.com.br" className="text-sm hover:text-teal-400 transition-colors">
            contato@fisioclinica.com.br
          </a>
        </div>

      </div>
      <div className="mx-auto max-w-4xl border-t border-zinc-700 pt-6">
        <p className="text-xs text-center">© 2026 FisioClínica. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
