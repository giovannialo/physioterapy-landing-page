# Relatório de Auditoria — Acessibilidade & SEO

Gerado em: 2026-05-23

## Prioridade Alta

| # | Categoria | Arquivo | Problema |
|---|-----------|---------|----------|
| 1 | SEO | `app/layout.tsx` | `lang="en"` no `<html>` conflita com todo o conteúdo em português — prejudica indexação e leitores de tela |
| 2 | SEO | `app/layout.tsx` | Metadados `title` e `description` ainda com os valores padrão do Next.js ("Create Next App") — não indexa corretamente |

---

## Prioridade Média

| # | Categoria | Arquivo | Linha | Problema |
|---|-----------|---------|-------|----------|
| 3 | Acessibilidade | `Depoimentos.tsx` | 32–36 | SVGs das estrelas de avaliação sem `aria-label` ou `<title>` — leitores de tela não descrevem a pontuação |
| 4 | Acessibilidade | `ServicosOferecidos.tsx` | 7–30 | SVGs dos ícones de cada especialidade sem `aria-label` ou `<title>` |
| 5 | SEO | `BannerPromo.tsx` | ~30–35 | Link externo (WhatsApp) sem `rel="noopener noreferrer"` — os demais links externos do projeto têm este atributo |
| 6 | SEO | `FormAgendamento.tsx` | 71 | Seção tem `id="agendamento"` mas não está linkada no menu de navegação |
| 7 | SEO | `Footer.tsx` | ~31 | Link com texto "WhatsApp" sem contexto de ação ("Falar pelo WhatsApp" seria mais descritivo) |
| 8 | SEO | `ServicosOferecidos.tsx` | — | Cards de serviço sem CTA ou link — conteúdo puramente informativo, oportunidade de conversão perdida |

---

## Prioridade Baixa

| # | Categoria | Arquivo | Linha | Problema |
|---|-----------|---------|-------|----------|
| 9 | Acessibilidade | `Depoimentos.tsx` | 27 | `<div>` decorativo (linha visual teal) sem `aria-hidden="true"` |
| 10 | Acessibilidade | `ServicosOferecidos.tsx` | 40 | Idem — `<div>` decorativo sem `aria-hidden="true"` |
| 11 | Acessibilidade | `SobreNos.tsx` | 12 | Idem — `<div>` decorativo sem `aria-hidden="true"` |
| 12 | Acessibilidade | `BannerPromo.tsx` | 23 | Badge de destaque (`<span>`) sem indicação semântica do propósito |
| 13 | SEO | `Nav.tsx` | 12 | Logo "FisioClínica" sem `aria-label` descritivo (ex: "Voltar ao início") |
| 14 | SEO | `Depoimentos.tsx` | — | Seção sem `id` para âncora e sem link no menu — não aparece na navegação interna |

---

## Resumo

| Prioridade | Acessibilidade | SEO | Total |
|-----------|:-:|:-:|:-:|
| Alta | 0 | 2 | **2** |
| Média | 2 | 4 | **6** |
| Baixa | 4 | 2 | **6** |

**O que resolver primeiro:** os dois itens de SEO alta (#1 e #2) estão em `layout.tsx` e são correções de uma linha cada — alto impacto, baixo esforço. Os SVGs sem `aria-label` (#3 e #4) são os mais relevantes em acessibilidade.
