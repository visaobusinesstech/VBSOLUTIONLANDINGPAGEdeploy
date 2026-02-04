
import * as React from 'react';
const { useEffect } = React;
import WhatsAppButton from '../components/WhatsAppButton';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';
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
    <div className="min-h-screen w-full">
      <CentralNavbar />
      
      <main>
        <SyntheticHero />

        <div className="relative">
          <div className="fixed inset-0 bg-gradient-to-b from-white/80 via-blue-50/40 to-white/80" style={{zIndex: 1}} />
          
          <div className="relative z-10">
            <Faq />

            <ContactForm />

            <Footer />
          </div>
        </div>
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
