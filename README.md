# Web Scraping

Ferramenta simples de web scraping em Node.js que extrai o HTML, CSS inline e JavaScript inline de qualquer website.

## O que ele faz

- Faz uma requisição HTTP para a URL informada
- Extrai o HTML completo da página e salva em `index.html`
- Extrai todo CSS encontrado dentro de tags `<style>` e salva em `style.css`
- Extrai todo JavaScript encontrado dentro de tags `<script>` e salva em `script.js`

## Requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)

## Instalação

```bash
git clone https://github.com/TONICOL0/web-scraping.git
cd web-scraping
npm install
```

## Como usar

1. Abra o arquivo `index.js` e altere a variável `targetUrl` para a URL do site que deseja extrair:

```js
const targetUrl = 'https://exemplo.com'; // Substitua pela URL desejada
```

2. Execute o script:

```bash
node index.js
```

3. Após a execução, três arquivos serão gerados na raiz do projeto:
   - `index.html` — HTML completo da página
   - `style.css` — CSS inline extraído
   - `script.js` — JavaScript inline extraído

## Observações

- O scraper extrai apenas conteúdo inline (dentro de tags `<style>` e `<script>`). Arquivos CSS e JS externos referenciados via `<link>` e `<script src="...">` não são baixados automaticamente.
- Alguns sites podem bloquear requisições automatizadas. Nesses casos, pode ser necessário configurar headers personalizados ou usar ferramentas como Puppeteer.
