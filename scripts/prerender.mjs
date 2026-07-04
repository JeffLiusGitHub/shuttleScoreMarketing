import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { campaigns } from '../src/data/campaigns.js';
import { guides } from '../src/data/guides.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const clientDir = path.join(rootDir, 'dist/client');
const templatePath = path.join(clientDir, 'index.html');
const { render } = await import('../dist/server/entry-server.js');

const routes = [
  '/',
  ...campaigns.map((campaign) => `/campaign/${campaign.slug}`),
  '/guides',
  ...guides.map((guide) => `/guides/${guide.slug}`),
  '/privacy',
  '/terms',
  '/contact'
];

const template = await fs.readFile(templatePath, 'utf8');

for (const route of routes) {
  const rendered = await render(route);
  const html = template
    .replace('<!--app-head-->', rendered.head)
    .replace('<!--app-html-->', rendered.html);

  await writeRoute(route, html);
}

const notFound = await render('/404');
const notFoundHtml = template
  .replace('<!--app-head-->', notFound.head)
  .replace('<!--app-html-->', notFound.html);

await fs.writeFile(path.join(clientDir, '404.html'), notFoundHtml);

async function writeRoute(route, html) {
  const filePath =
    route === '/'
      ? path.join(clientDir, 'index.html')
      : path.join(clientDir, route.replace(/^\//, ''), 'index.html');

  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, html);
}
