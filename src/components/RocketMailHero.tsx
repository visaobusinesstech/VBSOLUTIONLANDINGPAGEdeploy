
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import RocketMailGallery from './RocketMailGallery';

const RocketMailHero = () => {
  const handleWhatsAppClick = () => {
    const url = 'https://api.whatsapp.com/send/?phone=5541997772066&text=Ol%C3%A1%20tudo%20bem%3F%20Tenho%20interesse%20em%20conhcer%20o%20VBSolution%20CRM%20solicito%20uma%20demonstra%C3%A7%C3%A3o%21&type=phone_number&app_absent=0';
    window.open(url, '_blank');
  };

  const handleScheduleDemo = () => {
    const url = 'https://api.whatsapp.com/send/?phone=5541997772066&text=Ol%C3%A1%20tudo%20bem%3F%20Tenho%20interesse%20em%20conhcer%20o%20VBSolution%20CRM%20solicito%20uma%20demonstra%C3%A7%C3%A3o%21&type=phone_number&app_absent=0';
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 scroll-animation opacity-0 translate-y-10 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 font-satoshi leading-tight">
              <span className="text-blue-400">Rocket</span>
              <span className="text-white">Mail</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-200 mb-6 font-satoshi">
              Automatize, agende e converta seus leads em clientes
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed font-satoshi">
              Transforme sua estratégia de email marketing com nossa plataforma completa. Crie campanhas personalizadas, automatize fluxos de nutrição e acompanhe resultados em tempo real.
            </p>
            
            {/* Features list */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200 font-satoshi">Envio de até 10.000 emails por campanha</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200 font-satoshi">Templates personalizáveis e responsivos</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200 font-satoshi">Automação completa de nutrição de leads</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200 font-satoshi">Relatórios detalhados em tempo real</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleScheduleDemo}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-blue-500/30 hover:scale-105 font-satoshi"
              >
                Agendar Demonstração
              </button>
            </div>
          </div>
          
          {/* Right side - Galeria interativa RocketMail */}
          <div className="relative">
            <RocketMailGallery variant="page" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RocketMailHero;
