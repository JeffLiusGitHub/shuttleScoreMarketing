import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { findCampaign } from '../data/campaigns.js';
import { navLinks, siteConfig } from '../data/site.js';
import AppStoreButton from './AppStoreButton.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const campaignSlug = location.pathname.startsWith('/campaign/') ? location.pathname.split('/').filter(Boolean)[1] : '';
  const campaign = findCampaign(campaignSlug);

  if (campaign) {
    return (
      <header className="site-header campaign-header">
        <div className="header-inner">
          <Link className="brand-link" to="/" aria-label={`${siteConfig.appName} home`}>
            <img src="/assets/app-icon.png" alt="" />
            <span>{siteConfig.appName}</span>
          </Link>

          <nav className="campaign-nav-minimal" aria-label="Campaign navigation">
            <Link className="nav-link" to="/privacy">Privacy</Link>
            <AppStoreButton
              source={`${campaign.sourcePrefix}_nav`}
              href={campaign.appStoreUrl}
              campaignId={campaign.slug}
            />
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-link" to="/" aria-label={`${siteConfig.appName} home`} onClick={() => setOpen(false)}>
          <img src="/assets/app-icon.png" alt="" />
          <span>{siteConfig.appName}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className="nav-link">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="desktop-cta">
          <AppStoreButton source="nav_desktop" />
        </div>

        <button className="mobile-menu-button" type="button" aria-label="Open navigation menu" onClick={() => setOpen(true)}>
          <Menu size={23} aria-hidden="true" />
        </button>
      </div>

      {open ? (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="mobile-menu-top">
            <Link className="brand-link" to="/" onClick={() => setOpen(false)}>
              <img src="/assets/app-icon.png" alt="" />
              <span>{siteConfig.appName}</span>
            </Link>
            <button className="mobile-menu-button" type="button" aria-label="Close navigation menu" onClick={() => setOpen(false)}>
              <X size={23} aria-hidden="true" />
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink key={link.href} to={link.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <AppStoreButton source="nav_mobile" />
        </div>
      ) : null}
    </header>
  );
}
