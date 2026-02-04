
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, BarChart3, Code, ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Automações",
      description: "Transforme processos manuais em fluxos automatizados inteligentes que trabalham 24/7 para o seu negócio.",
      features: [
        "Integração com múltiplas plataformas", 
        "Redução de até 80% no tempo operacional", 
        "ROI comprovado em menos de 3 meses"
      ],
      link: "/automacao"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Análise de Dados",
      description: "Dashboards e relatórios que transformam dados brutos em insights estratégicos para sua empresa.",
      features: [
        "Visualizações em tempo real", 
        "Relatórios automatizados", 
        "Integração com múltiplas fontes de dados"
      ],
      link: "/analise-dados"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Desenvolvimento de Sistemas",
      description: "Soluções web personalizadas e sistemas sob medida para resolver problemas específicos do seu negócio.",
      features: [
        "Desenvolvimento personalizado", 
        "Tecnologias modernas", 
        "Suporte técnico contínuo"
      ],
      link: "/landing-page"
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
            Nossos <span className="text-blue-400 glow-text">Serviços</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Soluções completas para automatizar e desenvolver o futuro do seu negócio. Uma transformação digital para sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-transparent border border-blue-400/30 rounded-2xl p-6 sm:p-8 hover:bg-blue-400/5 hover:border-blue-400/60 hover:scale-105 transition-all duration-300 group animate-slide-up flex flex-col h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-blue-500/20 w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center text-blue-400 mb-4 sm:mb-6 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 group-hover:text-blue-700 transition-colors duration-300 min-h-[3rem] sm:min-h-[3.5rem] flex items-center">
                {service.title}
              </h3>
              
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed flex-grow min-h-[4rem] sm:min-h-[4.5rem] text-sm sm:text-base">
                {service.description}
              </p>
              
              <div className="mb-6 sm:mb-8 flex-grow">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                to={service.link}
                className="w-full bg-transparent border-2 border-blue-500 text-blue-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 group-hover:scale-105 text-center inline-block mt-auto text-sm sm:text-base"
              >
                Saiba mais
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
