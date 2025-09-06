import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CouponPage from './components/CouponPage';
import HowToUsePage from './components/HowToUsePage';
import TermsOfUsePage from './components/TermsOfUsePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coupon/:id" element={<CouponPage />} />
        <Route path="/como-usar-cupons" element={<HowToUsePage />} />
        <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
      </Routes>
    </Router>
  );
};

export default App;
