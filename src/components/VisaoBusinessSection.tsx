
import React from 'react';
import { Users, Building, Clock, TrendingUp, Zap, Award } from 'lucide-react';

const VisaoBusinessSection = () => {
  const stats = [
    {
      icon: <Clock className="w-8 h-8" />,
      number: '+59',
      label: 'automações entregues',
      description: 'Soluções implementadas com sucesso em diversos segmentos'
    },
    {
      icon: <Building className="w-8 h-8" />,
      number: '+30',
      label: 'empresas atendidas',
      description: 'Clientes que confiam em nossa expertise tecnológica'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: '+550',
      label: 'horas economizadas por mês',
      description: 'Tempo recuperado através de automações inteligentes'
    }
  ];

  return (
    <section className="py-20 relative scroll-animation">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in">
          Visão Business
        </h2>
        
        <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-16 animate-fade-in">
          Somos uma empresa de tecnologia que nasceu com o propósito de transformar tarefas manuais em inteligência automatizada. Aliamos inovação, personalização e resultados reais para empresas de todos os tamanhos.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-blue-500/20 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-400/40 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
              </div>
              
              <div className="bg-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center text-blue-400 mb-6 mx-auto group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                {stat.number}
              </div>
              
              <div className="text-lg font-semibold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors duration-300">
                {stat.label}
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaoBusinessSection;
