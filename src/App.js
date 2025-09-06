import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CouponPage from './components/CouponPage';
import HowToUsePage from './components/HowToUsePage';
import TermsOfUsePage from './components/TermsOfUsePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coupon/:id" element={<CouponPage />} />
        <Route path="/como-usar-cupons" element={<HowToUsePage />} />
        <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
