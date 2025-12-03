import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Machinery from './components/Machinery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-energen-orange selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Catalog />
          <Machinery />
          <Services />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
};

export default App;