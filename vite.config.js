import { access } from 'node:fs/promises';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import puppeteer from 'puppeteer-core';

const chromeCandidates = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge'
];

async function findBrowser() {
  for (const path of chromeCandidates) {
    try {
      await access(path);
      return path;
    } catch {
      // Continue vers le navigateur suivant.
    }
  }
  throw new Error('Google Chrome, Chromium ou Microsoft Edge est requis pour générer le PDF.');
}

function pdfApiPlugin() {
  return {
    name: 'local-cahier-pdf-api',
    configureServer(server) {
      server.middlewares.use('/api/cahier-pdf', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Méthode non autorisée' }));
          return;
        }

        try {
          let body = '';
          for await (const chunk of req) body += chunk;
          const { html = '', baseUrl = '' } = JSON.parse(body || '{}');
          if (!html) throw new Error('Contenu PDF vide');

          const executablePath = await findBrowser();
          const browser = await puppeteer.launch({
            executablePath,
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
          });

          try {
            const page = await browser.newPage();
            await page.setContent(`<!doctype html><html><head><base href="${baseUrl}/"></head><body>${html}</body></html>`, {
              waitUntil: 'networkidle0',
              timeout: 120000
            });
            await page.emulateMediaType('screen');
            const pdf = await page.pdf({
              format: 'A4',
              printBackground: true,
              preferCSSPageSize: true,
              margin: { top: 0, right: 0, bottom: 0, left: 0 }
            });

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="Cahier-de-texte-2026-2027.pdf"');
            res.end(Buffer.from(pdf));
          } finally {
            await browser.close();
          }
        } catch (error) {
          console.error('PDF generation error:', error);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: error?.message || 'Erreur génération PDF' }));
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), pdfApiPlugin()],
  build: {
    target: 'es2017',
    cssTarget: 'safari13'
  },
  esbuild: {
    target: 'es2017'
  }
});
