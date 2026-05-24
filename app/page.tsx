// Página principal da landing page: exibe navegação, seções Hero, "Sobre Nós", "Serviços Oferecidos" e rodapé
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import SobreNos from "./components/SobreNos"
import ServicosOferecidos from "./components/ServicosOferecidos"
import Especialidades from "./components/Especialidades"
import Depoimentos from "./components/Depoimentos"
import BannerPromo from "./components/BannerPromo"
import FormAgendamento from "./components/FormAgendamento"
import ContatoForm from "./components/ContatoForm"
import FAQ from "./components/FAQ"
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
        <Especialidades />
        <Depoimentos />
        <BannerPromo
          destaque="Oferta especial"
          titulo="Primeira avaliação gratuita"
          descricao="Agende sua consulta inicial sem custo e descubra o tratamento ideal para sua recuperação."
          ctaTexto="Agendar agora"
          ctaLink="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20gratuita"
        />
        <FormAgendamento />
        <ContatoForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
