
import React, { useEffect } from 'react';
import CentralNavbar from '../components/CentralNavbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import RocketMailHero from '../components/RocketMailHero';
import RocketMailFeatures from '../components/RocketMailFeatures';
import RocketMailDemo from '../components/RocketMailDemo';
import RocketMailCTA from '../components/RocketMailCTA';

const RocketMailPage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    const scrollElements = document.querySelectorAll('.scroll-animation');
    scrollElements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full relative">
      {/* Background image with overlay - matching site structure */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/41ee5590-7020-4b7e-98d3-f781b44a8f9a.png')`,
        }}
      />
      
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-blue-950/70 to-black/90" />
      
      {/* Content */}
      <div className="relative z-10">
        <CentralNavbar />
        
        <main className="pt-16">
          <RocketMailHero />
          <RocketMailFeatures />
          <RocketMailDemo />
          <RocketMailCTA />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default RocketMailPage;
