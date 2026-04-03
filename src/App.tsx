import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { TermsOfService } from './policies/TermsOfService';
import { PrivacyPolicy } from './policies/PrivacyPolicy';
import { CookiePolicy } from './policies/CookiePolicy';
import { Security } from './policies/Security';
import { Careers } from './company/Careers';
import { PressKit } from './company/PressKit';
import { ScrollToTop } from './components/ScrollToTop';
import { Waitlist } from './pages/Waitlist';
import { Contact } from './pages/Contact';
import { Apply } from './pages/Apply';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policies/terms" element={<TermsOfService />} />
        <Route path="/policies/privacy" element={<PrivacyPolicy />} />
        <Route path="/policies/cookies" element={<CookiePolicy />} />
        <Route path="/policies/security" element={<Security />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/company/press" element={<PressKit />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
  );
}




