import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Plan from './components/Plan/Plan';
import WhyChoose from './components/WhyChoose/WhyChoose';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Plan />
      <WhyChoose />
      <Footer />
    </div>
  );
};

export default App;
