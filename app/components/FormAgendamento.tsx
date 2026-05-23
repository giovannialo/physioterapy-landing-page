"use client"

// Formulário de agendamento de consulta com campos de especialidade, data e horário

import { useState } from "react"

interface FormAgendamentoProps {
  titulo?: string
  descricao?: string
  especialidades?: string[]
  onSucesso?: () => void
}

const ESPECIALIDADES_PADRAO = [
  "Fisioterapia Ortopédica",
  "Fisioterapia Neurológica",
  "Fisioterapia Esportiva",
  "Fisioterapia Respiratória",
  "Fisioterapia Pediátrica",
]

const inputClass =
  "w-full rounded-lg border border-zinc-300 px-4 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
const labelClass = "block text-sm font-medium text-zinc-700 mb-1"

export default function FormAgendamento({
  titulo = "Agendar Consulta",
  descricao = "Preencha o formulário e entraremos em contato para confirmar seu horário.",
  especialidades = ESPECIALIDADES_PADRAO,
  onSucesso,
}: FormAgendamentoProps) {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    especialidade: "",
    data: "",
    horario: "",
    observacoes: "",
  })
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState(false)
  const [carregando, setCarregando] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setCarregando(true)
    setErro(false)
    try {
      const res = await fetch("/api/agendamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setEnviado(true)
      onSucesso?.()
    } catch {
      setErro(true)
    } finally {
      setCarregando(false)
    }
  }

  return (
    <section id="agendamento" className="py-16 px-6 bg-zinc-50">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-zinc-800 mb-2 text-center">{titulo}</h2>
        <p className="text-zinc-500 text-center mb-8">{descricao}</p>

        {enviado ? (
          <p role="status" className="text-center text-teal-600 font-medium">
            Solicitação recebida! Entraremos em contato para confirmar seu agendamento.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nome" className={labelClass}>Nome</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="telefone" className={labelClass}>Telefone</label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  value={form.telefone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="especialidade" className={labelClass}>Especialidade</label>
              <select
                id="especialidade"
                name="especialidade"
                required
                value={form.especialidade}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Selecione uma especialidade</option>
                {especialidades.map((esp) => (
                  <option key={esp} value={esp}>{esp}</option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="data" className={labelClass}>Data preferida</label>
                <input
                  id="data"
                  name="data"
                  type="date"
                  required
                  value={form.data}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="horario" className={labelClass}>Horário preferido</label>
                <input
                  id="horario"
                  name="horario"
                  type="time"
                  required
                  value={form.horario}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="observacoes" className={labelClass}>
                Observações{" "}
                <span className="text-zinc-400 font-normal">(opcional)</span>
              </label>
              <textarea
                id="observacoes"
                name="observacoes"
                rows={3}
                value={form.observacoes}
                onChange={handleChange}
                placeholder="Descreva brevemente sua queixa ou dúvida"
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="self-end bg-teal-600 hover:bg-teal-700 disabled:opacity-60 text-white font-semibold px-8 py-2 rounded-lg transition-colors"
            >
              {carregando ? "Enviando…" : "Solicitar agendamento"}
            </button>

            {erro && (
              <p role="alert" className="text-red-600 text-sm text-center">
                Erro ao enviar. Tente novamente.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
