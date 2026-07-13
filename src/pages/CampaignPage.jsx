import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  MessageSquare,
  QrCode,
  ShieldCheck,
  Watch
} from 'lucide-react';
import { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppStoreButton from '../components/AppStoreButton.jsx';
import { HeroProductMockup, MatchSetupMockup } from '../components/ProductMockups.jsx';
import { findCampaign } from '../data/campaigns.js';
import { siteConfig } from '../data/site.js';
import NotFoundPage from './NotFoundPage.jsx';

function LinkifiedEmailText({ text }) {
  const email = siteConfig.supportEmail;
  const parts = text.split(email);
  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 ? <a href={`mailto:${email}`}>{email}</a> : null}
    </Fragment>
  ));
}

const stepIcons = [QrCode, Watch, ClipboardCheck];

export default function CampaignPage() {
  const { slug } = useParams();
  const campaign = findCampaign(slug);

  if (!campaign) {
    return <NotFoundPage />;
  }

  const Visual = campaign.visual === 'setup' ? MatchSetupMockup : HeroProductMockup;

  return (
    <>
      <section className="campaign-hero">
        <div className="campaign-hero-inner">
          <div className="campaign-copy">
            <p className="eyebrow">{campaign.eyebrow}</p>
            <h1>{campaign.title}</h1>
            <p>{campaign.subtitle}</p>
            <div className="badge-row">
              {campaign.badges.map((badge) => (
                <span key={badge}><CheckCircle2 size={16} aria-hidden="true" /> {badge}</span>
              ))}
            </div>
            <div className="hero-actions">
              <AppStoreButton
                source={`${campaign.sourcePrefix}_hero`}
                href={campaign.appStoreUrl}
                campaignId={campaign.slug}
              >
                Download for this match
              </AppStoreButton>
              <Link className="text-link" to={campaign.relatedGuide}>
                Read the guide
              </Link>
            </div>
          </div>

          <Visual />
        </div>
      </section>

      <section className="section campaign-proof-section">
        <div className="campaign-proof-grid">
          {campaign.proof.map((item) => (
            <article className="campaign-proof-card" key={item.value}>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section campaign-flow-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>One page, one action.</h2>
          <p>{campaign.finalCta}</p>
        </div>
        <div className="campaign-step-grid">
          {campaign.steps.map((step, index) => {
            const Icon = stepIcons[index] || CheckCircle2;
            return (
              <article className="campaign-step-card" key={step.title}>
                <span><Icon size={22} aria-hidden="true" /></span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section campaign-feature-band">
        <div className="campaign-feature-grid">
          {campaign.featureBlocks.map((block) => (
            <article className="campaign-feature-card" key={block.title}>
              <ShieldCheck size={22} aria-hidden="true" />
              <h3>{block.title}</h3>
              <p>{block.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section campaign-offer-section">
        <div className="campaign-offer-card">
          <div>
            <p className="eyebrow">Offer</p>
            <h2>{campaign.offer.title}</h2>
            <p><LinkifiedEmailText text={campaign.offer.text} /></p>
          </div>
          <AppStoreButton
            source={`${campaign.sourcePrefix}_offer`}
            href={campaign.appStoreUrl}
            campaignId={campaign.slug}
          >
            Try Sevix now
          </AppStoreButton>
        </div>
      </section>

      <section className="section faq-section campaign-faq-section">
        <div className="section-heading">
          <p className="eyebrow">Campaign FAQ</p>
          <h2>Answer the first objections.</h2>
        </div>
        <div className="faq-list">
          {campaign.faq.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section campaign-final-cta">
        <MessageSquare size={28} aria-hidden="true" />
        <h2>{campaign.finalCta}</h2>
        <AppStoreButton
          source={`${campaign.sourcePrefix}_final`}
          href={campaign.appStoreUrl}
          campaignId={campaign.slug}
        >
          Get the App
        </AppStoreButton>
        <Link className="campaign-secondary-link" to="/contact">
          Need a club link? Contact support <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
