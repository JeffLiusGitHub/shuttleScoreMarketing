import fs from 'node:fs/promises';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const requestedPort = Number(process.env.PORT || 5173);
const host = process.env.HOST || '127.0.0.1';
const base = process.env.BASE || '/';
const port = await resolvePort(requestedPort);

const app = express();
let vite;

if (isProduction) {
  app.use(base, express.static(path.resolve(__dirname, 'dist/client'), { index: false }));
} else {
  const { createServer } = await import('vite');
  vite = await createServer({
    root: __dirname,
    server: {
      middlewareMode: true,
      hmr: { port: port + 20_000 }
    },
    appType: 'custom'
  });
  app.use(vite.middlewares);
}

app.use('*', async (req, res, next) => {
  try {
    const url = req.originalUrl.replace(base, '/');
    let template;
    let render;

    if (isProduction) {
      template = await fs.readFile(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
      render = (await import('./dist/server/entry-server.js')).render;
    } else {
      template = await fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
    }

    const rendered = await render(url);
    const html = template
      .replace('<!--app-head-->', rendered.head)
      .replace('<!--app-html-->', rendered.html);

    res.status(rendered.status || 200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (error) {
    vite?.ssrFixStacktrace(error);
    next(error);
  }
});

function resolvePort(startPort, attemptsLeft = 10) {
  return new Promise((resolve, reject) => {
    const probe = net.createServer();

    probe.once('error', (error) => {
      if (error.code === 'EADDRINUSE' && attemptsLeft > 0 && !process.env.PORT) {
        const nextPort = startPort + 1;
        console.warn(`Port ${startPort} is already in use. Trying ${nextPort}...`);
        resolve(resolvePort(nextPort, attemptsLeft - 1));
        return;
      }

      reject(error);
    });

    probe.once('listening', () => {
      probe.close(() => resolve(startPort));
    });

    probe.listen(startPort, host);
  });
}

app.listen(port, host, () => {
  console.log(`ShuttleScore marketing site running at http://${host}:${port}`);
});
