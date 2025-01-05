import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Plan from './components/Plan/Plan';
import WhyChoose from './components/WhyChoose/WhyChoose';
import Footer from './components/Footer/Footer';
import OurWork from './components/OurWork/OurWork';

import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Plan />
            <WhyChoose />
            <Footer />
          </>
        } />
        <Route path="/our-work" element={<OurWork />} />
      </Routes>
    </Router>
  );
};

export default App;
