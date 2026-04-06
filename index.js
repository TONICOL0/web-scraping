const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('node:fs/promises'); // Para salvar os arquivos

async function scrapeWebsite(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // Salvar o HTML
    await fs.writeFile('index.html', html);
    console.log('HTML salvo em index.html');

    // Extrair e salvar CSS (isso é mais complexo, pois CSS pode estar em arquivos externos ou dentro de tags <style>)
    const styleTags = $('style');
    let allCSS = '';
    styleTags.each((i, el) => {
      allCSS += $(el).html() + '\n';
    });
    await fs.writeFile('style.css', allCSS);
    console.log('CSS (inline) salvo em style.css');

    // Para pegar CSS de arquivos externos, você precisaria analisar o HTML por links e fazer requisições separadas.

    // Extrair e salvar JavaScript (similar ao CSS, pode estar inline ou em arquivos externos)
    const scriptTags = $('script');
    let allJS = '';
    scriptTags.each((i, el) => {
      const scriptContent = $(el).html();
      if (scriptContent) {
        allJS += scriptContent + ';\n';
      }
    });
    await fs.writeFile('script.js', allJS);
    console.log('JavaScript (inline) salvo em script.js');

    // Para pegar JS de arquivos externos, você precisaria analisar o HTML por tags <script src="..."> e fazer requisições separadas.

  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

const targetUrl = 'https://exemplo.com'; // Substitua pela URL desejada
scrapeWebsite(targetUrl);