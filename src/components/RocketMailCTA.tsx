
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const RocketMailCTA = () => {
  const handleWhatsAppClick = () => {
    const url = 'https://api.whatsapp.com/send/?phone=5541997772066&text=Ol%C3%A1%20tudo%20bem%3F%20Tenho%20interesse%20em%20conhcer%20o%20VBSolution%20CRM%20solicito%20uma%20demonstra%C3%A7%C3%A3o%21&type=phone_number&app_absent=0';
    window.open(url, '_blank');
  };

  const ctaPoints = [
    'Setup completo em menos de 24 horas',
    'Suporte dedicado durante toda implementação',
    'Primeira campanha configurada por nossos especialistas',
    'Treinamento completo da equipe incluído'
  ];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">          
          {/* Conteúdo */}
          <div className="relative z-10 p-12 lg:p-16 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-satoshi leading-tight">
              <span className="text-white">Transforme seu email marketing</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                em uma máquina de vendas
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-satoshi">
              Junte-se a centenas de empresas que já revolucionaram seus resultados com o <span className="text-blue-400">Rocket</span><span className="text-white">Mail</span>. 
              Não perca mais tempo com processos manuais quando você pode automatizar tudo.
            </p>

            {/* Lista de benefícios */}
            <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
              {ctaPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-200 font-satoshi">{point}</span>
                </div>
              ))}
            </div>

            {/* Botão CTA - único botão reduzido */}
            <div className="flex justify-center">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-blue-500/40 hover:scale-105 flex items-center gap-3 font-satoshi"
              >
                Agendar Apresentação
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RocketMailCTA;
