
import * as React from 'react';
const { useEffect } = React;
import WhatsAppButton from '../components/WhatsAppButton';
import TestimonialsSection from '../components/TestimonialsSection';
import SyntheticHero from '@/components/ui/synthetic-hero';
import CentralNavbar from '../components/CentralNavbar';
import Footer from '../components/Footer';
import Faq from '@/components/ui/faq';

const Index = () => {
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
    <div className="min-h-screen w-full tech-background">
      <CentralNavbar />
      
      <main>
        <SyntheticHero />

        <div className="relative">
          <div className="relative">
            <Faq />
            <Footer />
          </div>
        </div>
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
