// Seção de Perguntas Frequentes com acordeão interativo sobre os serviços da clínica
"use client"

import { useState } from "react"

interface FAQItem {
  pergunta: string
  resposta: string
}

interface FAQProps {
  items?: FAQItem[]
}

const itensPadrao: FAQItem[] = [
  {
    pergunta: "Preciso de encaminhamento médico para fazer fisioterapia?",
    resposta: "Não é obrigatório. Você pode agendar uma avaliação diretamente conosco. O fisioterapeuta realizará uma anamnese completa e, se necessário, indicará a consulta com um médico especialista.",
  },
  {
    pergunta: "Quantas sessões são necessárias para ter resultado?",
    resposta: "O número de sessões varia conforme o diagnóstico e a evolução de cada paciente. Em geral, condições agudas respondem em 8 a 12 sessões, enquanto casos crônicos podem exigir acompanhamento mais prolongado.",
  },
  {
    pergunta: "Os planos de saúde cobrem as sessões?",
    resposta: "Trabalhamos com os principais planos de saúde. Entre em contato conosco informando seu plano para confirmarmos a cobertura antes do agendamento.",
  },
  {
    pergunta: "Como é feita a primeira consulta?",
    resposta: "A primeira consulta é uma avaliação gratuita. O fisioterapeuta coleta seu histórico clínico, realiza testes funcionais e define o protocolo de tratamento mais adequado para o seu caso.",
  },
  {
    pergunta: "Qual a duração de cada sessão?",
    resposta: "As sessões têm duração média de 50 minutos, podendo variar conforme o tipo de tratamento e a necessidade individual do paciente.",
  },
]

export default function FAQ({ items = itensPadrao }: FAQProps) {
  const [aberto, setAberto] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-zinc-50 py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-zinc-800 mb-3">Perguntas frequentes</h2>
        <div className="w-16 h-1 bg-teal-500 rounded-full mb-10" aria-hidden="true" />
        <dl className="flex flex-col gap-3">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border border-zinc-100 overflow-hidden">
              <dt>
                <button
                  onClick={() => setAberto(aberto === index ? null : index)}
                  aria-expanded={aberto === index}
                  className="w-full flex justify-between items-center gap-4 px-6 py-5 text-left text-zinc-800 font-medium hover:bg-zinc-50 transition-colors"
                >
                  {item.pergunta}
                  <span aria-hidden="true" className={`text-teal-500 transition-transform shrink-0 ${aberto === index ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>
              </dt>
              {aberto === index && (
                <dd className="px-6 pb-5 text-zinc-600 text-sm leading-relaxed border-t border-zinc-100 pt-4">
                  {item.resposta}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
