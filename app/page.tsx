// Página principal da landing page: exibe navegação, seções Hero, "Sobre Nós", "Serviços Oferecidos" e rodapé
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import SobreNos from "./components/SobreNos"
import ServicosOferecidos from "./components/ServicosOferecidos"
import Depoimentos from "./components/Depoimentos"
import ContatoForm from "./components/ContatoForm"
import Footer from "./components/Footer"
import WhatsAppFloat from "./components/WhatsAppFloat"

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-zinc-50 font-sans pt-16">
        <Hero />
        <SobreNos />
        <ServicosOferecidos />
        <Depoimentos />
        <ContatoForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
