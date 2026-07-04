import { ArrowRight, Download } from 'lucide-react';
import { siteConfig } from '../data/site.js';
import { trackDownload } from '../analytics.js';

export default function AppStoreButton({
  source = 'unknown',
  variant = 'primary',
  children = 'Download on the App Store',
  href = siteConfig.appStoreUrl,
  campaignId,
  className = ''
}) {
  return (
    <a
      className={`app-store-button ${variant === 'secondary' ? 'secondary' : ''} ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackDownload(source, { campaign_id: campaignId, destination_url: href })}
    >
      <Download size={18} aria-hidden="true" />
      <span>{children}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </a>
  );
}
