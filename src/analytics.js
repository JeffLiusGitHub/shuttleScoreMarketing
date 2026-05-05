export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

export function trackDownload(source) {
  trackEvent('app_store_click', {
    source,
    content_type: 'landing_cta',
    item_id: 'app_store'
  });
}

export function trackGuideClick(slug, stage) {
  trackEvent('select_content', {
    source: 'guides_list',
    content_type: 'geo_guide',
    item_id: slug,
    stage
  });
}
