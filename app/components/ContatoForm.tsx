"use client"

import { useState } from "react"

export default function ContatoForm() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" })
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState(false)
  const [carregando, setCarregando] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setCarregando(true)
    setErro(false)
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setEnviado(true)
    } catch {
      setErro(true)
    } finally {
      setCarregando(false)
    }
  }

  return (
    <section id="contato" className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-zinc-800 mb-2 text-center">Contato</h2>
        <p className="text-zinc-500 text-center mb-8">
          Entre em contato conosco. Responderemos o mais breve possível.
        </p>

        {enviado ? (
          <p role="status" className="text-center text-teal-600 font-medium">
            Mensagem enviada! Entraremos em contato em breve.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-zinc-700 mb-1">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome completo"
                className="w-full rounded-lg border border-zinc-300 px-4 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full rounded-lg border border-zinc-300 px-4 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-zinc-700 mb-1">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={5}
                value={form.mensagem}
                onChange={handleChange}
                placeholder="Como podemos ajudar?"
                className="w-full rounded-lg border border-zinc-300 px-4 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="self-end bg-teal-600 hover:bg-teal-700 disabled:opacity-60 text-white font-semibold px-8 py-2 rounded-lg transition-colors"
            >
              {carregando ? 'Enviando…' : 'Enviar'}
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
