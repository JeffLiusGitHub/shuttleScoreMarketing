import { Link } from 'react-router-dom';
import { navLinks, siteConfig } from '../data/site.js';
import AppStoreButton from './AppStoreButton.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div>
          <p className="eyebrow">Next rally</p>
          <h2>Score fast. Train smarter.</h2>
        </div>
        <AppStoreButton source="footer" />
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="brand-link" to="/">
            <img src="/assets/app-icon.png" alt="" />
            <span>{siteConfig.appName}</span>
          </Link>
          <p>{siteConfig.description}</p>
        </div>

        <div>
          <h3>Product</h3>
          {navLinks.slice(0, 2).map((link) => (
            <Link key={link.href} to={link.href}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact">Support</Link>
        </div>

        <div>
          <h3>Legal</h3>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
        </div>

        <div>
          <h3>Community</h3>
          {siteConfig.socialLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label} <span className="coming-soon">coming soon</span>
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 {siteConfig.copyrightName}. All rights reserved.</span>
        <span>Marketing site v0.1</span>
      </div>
    </footer>
  );
}
