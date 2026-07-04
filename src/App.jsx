import { Route, Routes } from 'react-router-dom';
import PageShell from './components/PageShell.jsx';
import CampaignPage from './pages/CampaignPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import GuideDetailPage from './pages/GuideDetailPage.jsx';
import GuidesPage from './pages/GuidesPage.jsx';
import HomePage from './pages/HomePage.jsx';
import LegalPage from './pages/LegalPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campaign/:slug" element={<CampaignPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/guides/:slug" element={<GuideDetailPage />} />
        <Route path="/privacy" element={<LegalPage type="privacy" />} />
        <Route path="/terms" element={<LegalPage type="terms" />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PageShell>
  );
}
