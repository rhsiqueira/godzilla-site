# godzilla-site

Landing page da **Godzilla Coleta de Óleo**: coleta de óleo de cozinha usado em São Paulo.

Site público: https://www.godzillacoletadeoleo.com.br

## Tecnologias

- React 18 (Create React App)
- Pré-renderização própria para SEO (`scripts/prerender.js`)

## Rodando localmente

Requisitos: Node.js 18 ou superior.

```bash
npm install
npm start
```

O site abre em http://localhost:3000.

## Build de produção

```bash
npm run build
```

Gera a pasta `build/`. Depois do build do React, o `scripts/prerender.js`:

- renderiza a página em HTML estático (Google, WhatsApp e outros robôs leem sem JavaScript);
- adiciona dados estruturados (negócio local e perguntas frequentes);
- gera link canônico, `sitemap.xml` e a linha `Sitemap:` no `robots.txt`, usando o `siteUrl`.

## Onde editar o conteúdo

| O quê | Onde |
|---|---|
| Contatos, WhatsApp, números, textos, FAQ, endereço do site (`siteUrl`) | `src/data/site.js` |
| Seções da página | `src/sections/` |
| Cabeçalho, rodapé e botões do WhatsApp | `src/components/` |
| Estilos | `src/styles/` |
| Imagens, vídeo, favicon e metadados do `<head>` | `public/` |

## Projetos relacionados (planejados)

- **godzilla-api**: backend do sistema de gestão de coletas (antigo SGC)
- **godzilla-backoffice**: área interna da equipe Godzilla
- **godzilla-app**: Portal do Cliente
