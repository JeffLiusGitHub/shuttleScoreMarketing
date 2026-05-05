import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>The page you opened does not exist in the ShuttleScore marketing site.</p>
        <Link className="text-link" to="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
