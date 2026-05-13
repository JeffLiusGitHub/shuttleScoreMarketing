import {
  Apple,
  Brain,
  HeartPulse,
  Hexagon,
  History,
  Lock,
  Radar,
  SlidersHorizontal,
  Watch
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AppStoreButton from '../components/AppStoreButton.jsx';
import { CoachInsightMockup, HeroProductMockup, MatchSetupMockup, ProgressMockup } from '../components/ProductMockups.jsx';
import { features, pricingTiers } from '../data/site.js';

const iconMap = {
  watch: Watch,
  brain: Brain,
  radar: Radar,
  heart: HeartPulse,
  history: History,
  setup: SlidersHorizontal
};

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-background" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="badge-row">
              <span><Apple size={16} aria-hidden="true" /> Watch + iPhone</span>
              <span><Lock size={16} aria-hidden="true" /> Local coach</span>
            </div>
            <h1>ShuttleScore</h1>
            <p className="hero-subtitle">Score fast. Train smarter.</p>
            <p className="hero-text">
              Score on Apple Watch. Show the match on iPhone. Get local coaching after the final rally.
            </p>
            <div className="hero-actions">
              <AppStoreButton source="hero_primary" />
              <Link className="text-link" to="/guides">
                How it works
              </Link>
            </div>
          </div>

          <HeroProductMockup />
        </div>
      </section>

      <section className="section content-band" id="features">
        <div className="section-heading">
          <p className="eyebrow">Core features</p>
          <h2>Built for the rally.</h2>
          <p>Everything you need before, during, and after a match.</p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Hexagon;
            return (
              <article className="feature-card" key={feature.title}>
                <span className="feature-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section split-section">
        <div className="split-copy">
          <p className="eyebrow">Live scoring</p>
          <h2>Start. Score. Stay in the rally.</h2>
          <p>
            Set the format, choose first serve, then let Watch handle the points while iPhone shows the board.
          </p>
          <ul className="check-list">
            <li>Pinch, tap, or Digital Crown</li>
            <li>Toss or choose first server</li>
            <li>Lockable referee display</li>
          </ul>
        </div>
        <MatchSetupMockup />
      </section>

      <section className="section split-section reverse">
        <div className="split-copy">
          <p className="eyebrow">Local AI coach</p>
          <h2>Know what to train next.</h2>
          <p>
            A local coach turns score, heart rate, motion, and recovery into one clear next step.
          </p>
          <ul className="check-list">
            <li>Strongest and weakest phase</li>
            <li>Fatigue and recovery signals</li>
            <li>A drill you can do next</li>
          </ul>
        </div>
        <CoachInsightMockup />
      </section>

      <section className="section split-section">
        <div className="split-copy">
          <p className="eyebrow">Health and history</p>
          <h2>Your match log has a pulse.</h2>
          <p>
            See heart-rate zones, recovery, load, notes, and recent trends in one place.
          </p>
          <Link className="text-link" to="/guides/local-ai-coach-badminton">
            Read the coach guide
          </Link>
        </div>
        <ProgressMockup />
      </section>

      <section className="section privacy-band">
        <div>
          <p className="eyebrow">Private by design</p>
          <h2>No video. No cloud coach.</h2>
        </div>
        <p>
          Advice comes from your point timeline, heart rate, workout, and motion summaries. Simple inputs. Clear reasoning.
        </p>
      </section>

      <section className="section pricing-section">
        <div className="section-heading">
          <p className="eyebrow">Plans</p>
          <h2>Start free. Upgrade for the coach.</h2>
          <p>Core scoring stays free. Pro adds AI Coach, Health, full history, and trends.</p>
        </div>
        <div className="pricing-grid">
          {pricingTiers.map((tier) => (
            <article className={`pricing-card ${tier.highlighted ? 'highlighted' : ''}`} key={tier.name}>
              <h3>{tier.name}</h3>
              <strong>{tier.price}</strong>
              <p>{tier.description}</p>
              <ul>
                {tier.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
