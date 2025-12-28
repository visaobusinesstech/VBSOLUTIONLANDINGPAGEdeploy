
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'João Silva',
      position: 'CEO',
      company: 'TechSolutions',
      logo: '🚀',
      text: 'A Visão Business transformou nosso processo comercial com automações e relatórios. Resultados reais em menos de 30 dias!',
      rating: 5
    },
    {
      name: 'Maria Santos',
      position: 'Diretora de Marketing',
      company: 'InnovaGroup',
      logo: '⚡',
      text: 'O Rocket Mail revolucionou nossa estratégia de e-mail marketing. Aumentamos nossa taxa de conversão em 300%.',
      rating: 5
    },
    {
      name: 'Carlos Oliveira',
      position: 'Fundador',
      company: 'StartupTech',
      logo: '💎',
      text: 'Dashboards incríveis e automações que realmente funcionam. A equipe da Visão Business entende de negócio.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      position: 'Gerente Comercial',
      company: 'SalesForce Pro',
      logo: '🎯',
      text: 'Nosso site novo gerou 5x mais leads qualificados. Design impecável e performance excepcional.',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6">
            Confiança se constrói com{' '}
            <span className="text-vb-blue">resultados.</span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Veja o que nossos clientes têm a dizer sobre as transformações 
            que alcançaram com nossas soluções.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "🗣️ {testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-vb-blue/10 rounded-full flex items-center justify-center text-xl mr-4">
                  {testimonial.logo}
                </div>
                <div>
                  <div className="font-semibold text-black">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white p-8 rounded-2xl shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-black mb-4">
              Quer ser nosso próximo case de sucesso?
            </h3>
            <p className="text-gray-600 mb-6">
              Vamos conversar sobre como podemos transformar seu negócio.
            </p>
            <button className="bg-vb-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-vb-blue-dark transition-colors duration-300">
              Agende uma conversa estratégica
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
