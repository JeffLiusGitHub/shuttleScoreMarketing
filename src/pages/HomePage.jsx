import {
  Apple,
  BatteryCharging,
  Brain,
  ChartNoAxesCombined,
  HeartPulse,
  Hexagon,
  Lock,
  Radar,
  Watch
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AppStoreButton from '../components/AppStoreButton.jsx';
import { CoachInsightMockup, HeroProductMockup, ProgressMockup } from '../components/ProductMockups.jsx';
import { features, pricingTiers } from '../data/site.js';

const iconMap = {
  watch: Watch,
  brain: Brain,
  radar: Radar,
  heart: HeartPulse,
  battery: BatteryCharging,
  chart: ChartNoAxesCombined
};

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-background" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="badge-row">
              <span><Apple size={16} aria-hidden="true" /> Built for iPhone and Apple Watch</span>
              <span><Lock size={16} aria-hidden="true" /> Local and explainable</span>
            </div>
            <h1>ShuttleScore</h1>
            <p className="hero-subtitle">Score your match. Understand your game.</p>
            <p className="hero-text">
              Fast Apple Watch badminton scoring with an iPhone scoreboard and a local AI coach that explains performance,
              heart rate, recovery, progress, and what to train next.
            </p>
            <div className="hero-actions">
              <AppStoreButton source="hero_primary" />
              <Link className="text-link" to="/guides">
                Read the guides
              </Link>
            </div>
          </div>

          <HeroProductMockup />
        </div>
      </section>

      <section className="section content-band" id="features">
        <div className="section-heading">
          <p className="eyebrow">Why it works</p>
          <h2>Everything after the point should make the next rally clearer.</h2>
          <p>
            ShuttleScore keeps the scoring flow simple during play, then turns the match timeline into coaching evidence.
          </p>
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
          <h2>Watch input. Phone display. No extra ceremony.</h2>
          <p>
            Start a singles or doubles match, choose who serves first, and let formal match time begin when scoring really
            starts. The phone uses a clear scoreboard while the watch stays focused on fast point entry.
          </p>
          <ul className="check-list">
            <li>Singles and doubles match modes</li>
            <li>Home and guest team presentation</li>
            <li>Match duration starts with formal scoring</li>
          </ul>
        </div>
        <div className="visual-panel court-panel">
          <img src="/assets/player.png" alt="Badminton player jumping to hit a shuttlecock" />
        </div>
      </section>

      <section className="section split-section reverse">
        <div className="split-copy">
          <p className="eyebrow">Local AI coach</p>
          <h2>Advice tied to the six dimensions, fitness, heart rate, and points.</h2>
          <p>
            Instead of generic training text, ShuttleScore connects each recommendation to the match evidence: hexagon
            strengths and weaknesses, heart-rate performance, point ownership, recovery demand, and progress.
          </p>
          <ul className="check-list">
            <li>Strength and weakness cards</li>
            <li>Fitness insight and recovery type</li>
            <li>Training recommendations users can act on</li>
          </ul>
        </div>
        <CoachInsightMockup />
      </section>

      <section className="section split-section">
        <div className="split-copy">
          <p className="eyebrow">Progress</p>
          <h2>See whether recent matches are actually moving your game forward.</h2>
          <p>
            Match history is not just storage. Filter by date, singles or doubles, win or loss, and performance level,
            then compare today with your recent baseline.
          </p>
          <Link className="text-link" to="/guides/local-ai-coach-badminton">
            How local coaching stays explainable
          </Link>
        </div>
        <ProgressMockup />
      </section>

      <section className="section privacy-band">
        <div>
          <p className="eyebrow">Private by design</p>
          <h2>No video assumption. No cloud coach required.</h2>
        </div>
        <p>
          ShuttleScore is designed around local, deterministic insights from your point timeline, workout context, and
          motion summaries. The website and app should keep privacy language explicit and easy to verify.
        </p>
      </section>

      <section className="section pricing-section">
        <div className="section-heading">
          <p className="eyebrow">Pricing direction</p>
          <h2>Free scoring, paid coaching depth.</h2>
          <p>The landing page is ready for App Store subscription links once pricing is live.</p>
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
