import { Mail, Send } from 'lucide-react';
import { siteConfig } from '../data/site.js';

export default function ContactPage() {
  return (
    <section className="page-section contact-page">
      <div className="page-heading">
        <p className="eyebrow">Contact</p>
        <h1>Support and feedback for {siteConfig.appName}.</h1>
        <p>
          Send bug reports, TestFlight feedback, subscription questions, and product ideas. Avoid sending unnecessary
          health or personal data by email.
        </p>
      </div>

      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${siteConfig.supportEmail}`}>
          <Mail size={24} aria-hidden="true" />
          <span>Email support</span>
          <strong>{siteConfig.supportEmail}</strong>
        </a>
        <div className="contact-card">
          <Send size={24} aria-hidden="true" />
          <span>Helpful bug report details</span>
          <strong>Device model, OS version, app version, steps to reproduce</strong>
        </div>
      </div>
    </section>
  );
}
