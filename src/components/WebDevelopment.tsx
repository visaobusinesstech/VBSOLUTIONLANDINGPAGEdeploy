
import React from 'react';
import { Palette, Smartphone, Zap, Link, Eye, MessageSquare } from 'lucide-react';

const WebDevelopment = () => {
  const features = [
    {
      icon: Palette,
      title: 'Design estratégico baseado em UX/UI',
      description: 'Interfaces que convertem visitantes em clientes'
    },
    {
      icon: Zap,
      title: 'Performance otimizada (SEO + velocidade)',
      description: 'Sites rápidos que rankeiam bem no Google'
    },
    {
      icon: Smartphone,
      title: 'Mobile-first',
      description: 'Experiência perfeita em todos os dispositivos'
    },
    {
      icon: Link,
      title: 'Integração com WhatsApp, CRM e pixel',
      description: 'Conecte seu site aos seus sistemas de vendas'
    },
    {
      icon: Eye,
      title: 'Visual premium com tipografia refinada',
      description: 'Design sofisticado que transmite credibilidade'
    }
  ];

  return (
    <section id="sites" className="py-20 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Sites e Landing Pages que{' '}
            <span className="text-blue-600">convertem e impressionam.</span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Criamos experiências digitais sob medida para negócios que exigem 
            design, performance e escalabilidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="flex items-start space-x-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Design de website moderno"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-black text-white rounded-2xl p-8 text-center animate-fade-in border border-gray-300">
          <h3 className="text-2xl font-bold mb-4">
            Seu site pode ser seu melhor vendedor
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Transforme visitantes em leads qualificados com um site que combina 
            design estratégico e tecnologia de ponta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              📌 Solicite seu site agora mesmo
            </button>
            <button className="border-2 border-blue-600 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              Agende uma reunião gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
