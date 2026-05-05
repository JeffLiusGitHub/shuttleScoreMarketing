import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';
import { getPageMeta, renderHead } from './seo.js';
import './styles/global.css';

export function render(url) {
  const meta = getPageMeta(url);
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  return {
    html,
    head: renderHead(meta),
    status: meta.status || 200
  };
}
