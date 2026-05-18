import SobreNos from "./components/SobreNos"
import ServicosOferecidos from "./components/ServicosOferecidos"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 font-sans">
      <SobreNos />
      <ServicosOferecidos />
    </main>
  )
}
