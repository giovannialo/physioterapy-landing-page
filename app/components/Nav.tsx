const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre-nos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
]

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100 shadow-sm">
      <nav className="mx-auto max-w-4xl px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="text-teal-600 font-bold text-lg tracking-tight">
          FisioClínica
        </a>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-teal-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
