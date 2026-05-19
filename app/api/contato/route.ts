import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { nome, email, mensagem } = body

  if (!nome || !email || !mensagem) {
    return NextResponse.json({ erro: 'Campos obrigatórios ausentes.' }, { status: 400 })
  }

  console.log('Novo contato recebido:', { nome, email, mensagem })

  return NextResponse.json({ ok: true })
}
