import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import AppStoreButton from '../components/AppStoreButton.jsx';
import { findGuide, relatedGuides } from '../data/guides.js';

export default function GuideDetailPage() {
  const { slug } = useParams();
  const guide = findGuide(slug);

  if (!guide) {
    return (
      <section className="page-section">
        <div className="page-heading">
          <p className="eyebrow">Guide not found</p>
          <h1>This guide is not available.</h1>
          <Link className="text-link" to="/guides">
            Back to guides
          </Link>
        </div>
      </section>
    );
  }

  const related = relatedGuides(guide);

  return (
    <article className="article-page">
      <Link className="back-link" to="/guides">
        <ArrowLeft size={17} aria-hidden="true" /> Back to guides
      </Link>
      <div className="article-hero">
        <span className="stage-pill">{guide.stage}</span>
        <h1>{guide.question}</h1>
        <p>{guide.answer}</p>
      </div>

      <div className="article-body">
        <section>
          <h2>Short answer</h2>
          <p>{guide.answer}</p>
        </section>

        <section>
          <h2>Why it matters</h2>
          <p>{guide.dataPoint}</p>
        </section>

        <section>
          <h2>Where ShuttleScore fits</h2>
          <p>
            ShuttleScore is built for players who want the scoring flow to stay lightweight during play, then want an
            explainable review after the match. The app connects point outcomes, match mode, fitness context, recovery,
            and progress instead of treating each metric as an isolated number.
          </p>
        </section>

        <section>
          <h2>Sources</h2>
          <ul className="source-list">
            {guide.sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noopener noreferrer">
                  {source.label} <ExternalLink size={15} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="updated-text">Updated {guide.updatedAt}</p>
        </section>

        <div className="article-cta">
          <div>
            <p className="eyebrow">Try the workflow</p>
            <h2>Score your next match, then review the evidence.</h2>
          </div>
          <AppStoreButton source="guide_detail" />
        </div>
      </div>

      {related.length ? (
        <section className="related-guides">
          <h2>Related guides</h2>
          <div className="related-grid">
            {related.map((item) => (
              <Link className="related-card" key={item.slug} to={`/guides/${item.slug}`}>
                <span className="stage-pill">{item.stage}</span>
                <strong>{item.question}</strong>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
