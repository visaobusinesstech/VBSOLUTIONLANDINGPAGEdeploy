
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

const RocketMailDemo = () => {
  const handleWhatsAppClick = () => {
    openWhatsApp();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo à esquerda */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-satoshi">
              Veja o <span className="text-blue-400">Rocket</span><span className="text-white">Mail</span> em ação
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed font-satoshi">
              Veja, na prática, como o <span className="text-blue-400">Rocket</span><span className="text-white">Mail</span> automatiza seu processo de nutrição de leads, com fluxos visuais, mensagens personalizadas e disparos inteligentes. Neste vídeo, você verá como a ferramenta funciona por dentro e como esta solução digital ideal para o seu negócio, se encaixaria no seu time.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-200 font-satoshi">Interface intuitiva e fácil de usar</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-200 font-satoshi">Configuração rápida de campanhas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-200 font-satoshi">Acompanhamento de resultados em tempo real</span>
              </div>
            </div>

            <button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-blue-500/30 hover:scale-105 font-satoshi"
            >
              Agendar Demonstração
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          {/* Vídeo à direita */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/20">
                <div className="relative rounded-lg overflow-hidden bg-black aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/kCI0f6Dwol8"
                    title="Demonstração RocketMail"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  
                  {/* Overlay decorativo */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-green-400/10 pointer-events-none rounded-lg"></div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RocketMailDemo;
