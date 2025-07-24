import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServicesAndTraining from './components/ServicesAndTraining';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

export function App() {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      // Clean up the added link when component unmounts
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="font-['Inter',sans-serif] antialiased text-gray-800">
      <Navbar />
      <Hero />
      <AboutUs />
      <ServicesAndTraining />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
