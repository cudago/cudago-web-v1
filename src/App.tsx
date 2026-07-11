import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { TermsOfService } from './policies/TermsOfService';
import { PrivacyPolicy } from './policies/PrivacyPolicy';
import { Careers } from './company/Careers';
import { ScrollToTop } from './components/ScrollToTop';
import { Contact } from './pages/Contact';
import { Apply } from './pages/Apply';
import { UserAppDownload } from './pages/app/user/Download';
import { UserAppDeleteAccount } from './pages/app/user/DeleteAccount';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policies/terms" element={<TermsOfService />} />
        <Route path="/policies/privacy" element={<PrivacyPolicy />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/app/user/download" element={<UserAppDownload />} />
        <Route path="/app/user/delete-account" element={<UserAppDeleteAccount />} />
        <Route path="/download" element={<Navigate to="/app/user/download" replace />} />
        <Route path="/delete-account" element={<Navigate to="/app/user/delete-account" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
  );
}
