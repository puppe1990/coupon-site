import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CouponPage from './components/CouponPage';
import HowToUsePage from './components/HowToUsePage';
import TermsOfUsePage from './components/TermsOfUsePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import ContatoPage from './components/ContatoPage';
import SobreNosPage from './components/SobreNosPage';
import SitemapPage from './components/SitemapPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coupon/:id" element={<CouponPage />} />
        <Route path="/como-usar-cupons" element={<HowToUsePage />} />
        <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/sobre-nos" element={<SobreNosPage />} />
        <Route path="/sitemap.xml" element={<SitemapPage />} />
      </Routes>
    </Router>
  );
};

export default App;
