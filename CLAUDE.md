# Fisioterapia Landing Page

Landing page informativa de fisioterapia construída com Next.js App Router.

## Comandos

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera o build de produção
- `npm run lint` — executa o ESLint

## Stack

- **Next.js 16** com App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**

## Estrutura

- `app/page.tsx` — página principal (rota `/`)
- `app/layout.tsx` — layout raiz com metadados e fontes
- `app/globals.css` — estilos globais
- `public/` — assets estáticos

## Padrões de código
- Comentários em português
- Componentes funcionais com TypeScript (sem `any`)
- Usar Server Components por padrão, Client Components só quando necessário

## O que NÃO fazer
- Não criar `tailwind.config.js` (v4 não usa)
- Não usar `pages/` router (projeto usa App Router)
- Não instalar pacotes sem perguntar antes

## Observações

- Ler `AGENTS.md` antes de qualquer alteração no Next.js: esta versão tem mudanças de API em relação a versões anteriores.
- Tailwind CSS v4 usa sintaxe diferente da v3 (sem `tailwind.config.js`, configuração via CSS).
- Fontes: Geist Sans e Geist Mono via `next/font/google`.

## Comandos customizados disponíveis

- `/component <Nome>` — cria um componente React em `app/components/` seguindo os padrões do projeto (TypeScript, Tailwind, export default)
- `/accessibility` — audita acessibilidade do projeto: verifica uso de aria, contraste, semântica HTML e sugere melhorias
- `/review` — revisa as alterações da sessão: roda o build, verifica console.log esquecidos e sugere melhorias de acessibilidade
- `/commit` — analisa todas as alterações não commitadas e propõe commits separados por contexto seguindo conventional commits
## Automações ativas
- Lint roda automaticamente após qualquer alteração em `.ts` ou `.tsx`
- Arquivos `.env` são bloqueados para leitura e escrita
