# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Visão Geral

Projeto Node.js de web scraping que extrai HTML, CSS inline e JavaScript inline de websites usando axios + cheerio. O alvo atual é um site Canva (`tonicoloteste.my.canva.site`).

## Comandos

- **Instalar dependências:** `npm install`
- **Executar o scraper:** `node index.js`

Não há testes, linter ou build configurados.

## Arquitetura

- **`index.js`** — Script principal de scraping. Faz GET na URL alvo com axios, parseia o HTML com cheerio, e salva três arquivos de saída:
  - `index.html` — HTML completo da página
  - `style.css` — CSS extraído de tags `<style>` inline (não busca CSS de arquivos externos)
  - `script.js` — JavaScript extraído de tags `<script>` inline (não busca JS de arquivos externos)

Os arquivos de saída (`index.html`, `style.css`, `script.js`) são gerados pelo scraper e sobrescritos a cada execução — não são código-fonte.

## Dependências Principais

- **axios** — Requisições HTTP
- **cheerio** — Parsing e manipulação de HTML (API jQuery-like)
- **website-scraper** / **website-scraper-puppeteer** — Declaradas no package.json mas não utilizadas em `index.js` atualmente

## Limitações Conhecidas

O scraper atual extrai apenas conteúdo inline. CSS e JS referenciados via `<link href>` e `<script src>` não são baixados.
