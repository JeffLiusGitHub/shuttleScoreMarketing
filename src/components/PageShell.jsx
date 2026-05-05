import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { applyClientMeta } from '../seo.js';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function PageShell({ children }) {
  const location = useLocation();

  useEffect(() => {
    applyClientMeta(location.pathname);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
