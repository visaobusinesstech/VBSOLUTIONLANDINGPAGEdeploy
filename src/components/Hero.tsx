
import React from 'react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-black leading-tight mb-6">
              Transformamos sua rotina com{' '}
              <span className="text-vb-blue">tecnologia inteligente</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-4 italic">
              <small>Automatize. Escale. Inove.</small>
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Soluções de microSaaS sob medida para empresas B2B que exigem 
              desempenho, elegância e controle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-vb-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-vb-blue-dark transition-colors duration-300">
                Solicite uma Apresentação
              </button>
              <button className="border-2 border-vb-blue text-vb-blue px-8 py-3 rounded-lg font-semibold hover:bg-vb-blue hover:text-white transition-all duration-300">
                Conheça Nossos Serviços
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-up">
            <div className="bg-vb-dark rounded-2xl p-8 h-96 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Robô tecnológico moderno"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
