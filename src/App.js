import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CouponPage from './components/CouponPage';
import HowToUsePage from './components/HowToUsePage';
import TermsOfUsePage from './components/TermsOfUsePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import ContatoPage from './components/ContatoPage';

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
      </Routes>
    </Router>
  );
};

export default App;
