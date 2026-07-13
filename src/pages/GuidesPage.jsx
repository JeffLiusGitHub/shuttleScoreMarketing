import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackGuideClick } from '../analytics.js';
import { guides } from '../data/guides.js';

export default function GuidesPage() {
  return (
    <div className="velocity-page">
      <div className="velocity-speed-lines" aria-hidden="true" />
      <section className="page-section">
      <div className="page-heading">
        <span className="velocity-eyebrow">Guides</span>
        <h1>Scoring questions.<br /><em>Coaching answers.</em></h1>
        <p>
          Short decision guides for players comparing Apple Watch scoring, match review, heart-rate context, and local AI
          coaching.
        </p>
      </div>

      <div className="guide-list">
        {guides.map((guide) => (
          <Link
            className="guide-card"
            key={guide.slug}
            to={`/guides/${guide.slug}`}
            onClick={() => trackGuideClick(guide.slug, guide.stage)}
          >
            <span className="guide-number">{guide.id}</span>
            <span className="stage-pill">{guide.stage}</span>
            <h2>{guide.question}</h2>
            <p>{guide.answer}</p>
            <span className="guide-link">
              Read guide <ArrowRight size={17} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
      </section>
    </div>
  );
}
