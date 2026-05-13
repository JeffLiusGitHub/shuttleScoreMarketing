import { findGuide, guides } from './data/guides.js';
import { siteConfig } from './data/site.js';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizePath(url) {
  try {
    return new URL(url, siteConfig.siteUrl).pathname;
  } catch {
    return '/';
  }
}

function canonical(pathname) {
  const normalized = pathname === '/' ? '' : pathname.replace(/\/$/, '');
  return `${siteConfig.siteUrl}${normalized}`;
}

const baseMeta = {
  title: 'ShuttleScore - Score fast. Train smarter.',
  description: siteConfig.description,
  image: `${siteConfig.siteUrl}/og-default.png`,
  type: 'website',
  status: 200
};

export function getPageMeta(url) {
  const pathname = normalizePath(url);

  if (pathname === '/') {
    return {
      ...baseMeta,
      pathname,
      title: 'ShuttleScore - Score fast. Train smarter.',
      description:
        'Score badminton on Apple Watch, show the match on iPhone, and get local coaching after the final rally.'
    };
  }

  if (pathname === '/guides') {
    return {
      ...baseMeta,
      pathname,
      title: 'Badminton scoring and training guides - ShuttleScore',
      description:
        'Decision-focused guides about Apple Watch badminton scoring, local AI coaching, heart-rate insights, recovery, singles, and doubles.'
    };
  }

  if (pathname.startsWith('/guides/')) {
    const slug = pathname.split('/').filter(Boolean)[1];
    const guide = findGuide(slug);

    if (guide) {
      return {
        ...baseMeta,
        pathname,
        type: 'article',
        title: `${guide.question} - ShuttleScore Guide`,
        description: guide.answer,
        guide
      };
    }
  }

  if (pathname === '/privacy') {
    return {
      ...baseMeta,
      pathname,
      title: 'Privacy Policy - ShuttleScore',
      description: 'How ShuttleScore handles match, workout, analytics, and support data.'
    };
  }

  if (pathname === '/terms') {
    return {
      ...baseMeta,
      pathname,
      title: 'Terms of Service - ShuttleScore',
      description: 'The terms that apply when using ShuttleScore and its subscription features.'
    };
  }

  if (pathname === '/contact') {
    return {
      ...baseMeta,
      pathname,
      title: 'Contact ShuttleScore Support',
      description: 'Get support for ShuttleScore, report bugs, and send product feedback.'
    };
  }

  return {
    ...baseMeta,
    pathname,
    status: 404,
    title: 'Page not found - ShuttleScore',
    description: 'This ShuttleScore marketing page could not be found.'
  };
}

function softwareJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.appName,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'iOS, watchOS',
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };
}

function guideJsonLd(guide) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: guide.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: guide.answer
        }
      }
    ]
  };
}

export function renderHead(meta) {
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const url = canonical(meta.pathname);
  const image = meta.image;
  const jsonLd = [softwareJsonLd()];

  if (meta.guide) {
    jsonLd.push(guideJsonLd(meta.guide));
  }

  const gaId = process.env.VITE_GA_MEASUREMENT_ID || '';
  const analytics = gaId
    ? `
    <script async src="https://www.googletagmanager.com/gtag/js?id=${escapeHtml(gaId)}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${escapeHtml(gaId)}');
    </script>`
    : '';

  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href="${escapeHtml(url)}" />
    <meta property="og:type" content="${escapeHtml(meta.type)}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${escapeHtml(url)}" />
    <meta property="og:image" content="${escapeHtml(image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${escapeHtml(image)}" />
    <link rel="icon" href="/assets/app-icon.png" />
    ${jsonLd.map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join('\n')}
    ${analytics}
  `;
}

export function applyClientMeta(pathname) {
  const meta = getPageMeta(pathname);
  document.title = meta.title;

  setMeta('description', meta.description);
  setMeta('robots', 'index,follow');
  setLink('canonical', canonical(meta.pathname));
  setProperty('og:type', meta.type);
  setProperty('og:title', meta.title);
  setProperty('og:description', meta.description);
  setProperty('og:url', canonical(meta.pathname));
  setProperty('og:image', meta.image);
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', meta.title);
  setMeta('twitter:description', meta.description);
  setMeta('twitter:image', meta.image);
}

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setLink(rel, href) {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

export function guideSitemapEntries() {
  return guides.map((guide) => `/guides/${guide.slug}`);
}
