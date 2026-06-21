import { Link } from 'react-router-dom';
import { siteConfig } from '../data/site.js';

export default function NotFoundPage() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>The page you opened does not exist in the {siteConfig.appName} marketing site.</p>
        <Link className="text-link" to="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
