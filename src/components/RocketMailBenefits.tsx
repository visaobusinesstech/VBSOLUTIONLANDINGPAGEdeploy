
import React from 'react';
import { TrendingUp, Clock, Shield, Target, Zap, Users } from 'lucide-react';

const RocketMailBenefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumento de 300% na conversão',
      description: 'Emails personalizados geram muito mais engajamento',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      icon: Clock,
      title: 'Economia de 15h por semana',
      description: 'Automação total elimina trabalho manual repetitivo',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      icon: Shield,
      title: '99,7% de deliverabilidade',
      description: 'Tecnologia avançada garante chegada na caixa de entrada',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    },
    {
      icon: Target,
      title: 'Segmentação precisa',
      description: 'Mensagem certa para a pessoa certa no momento ideal',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20'
    },
    {
      icon: Zap,
      title: 'Setup em 15 minutos',
      description: 'Configure sua primeira campanha rapidamente',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20'
    },
    {
      icon: Users,
      title: 'Suporte especializado',
      description: 'Equipe dedicada para garantir seu sucesso',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-satoshi">
            Por que empresas escolhem o RocketMail?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-satoshi">
            Resultados comprovados que fazem a diferença no seu negócio
          </p>
        </div>

        {/* Grid de benefícios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${benefit.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 font-satoshi">
                {benefit.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed font-satoshi">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Seção de estatísticas */}
        <div className="mt-20 bg-gradient-to-r from-blue-600/10 to-blue-800/10 backdrop-blur-md rounded-2xl p-12 border border-blue-500/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2 font-satoshi">10K+</div>
              <div className="text-gray-300 font-satoshi">Emails por campanha</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2 font-satoshi">300%</div>
              <div className="text-gray-300 font-satoshi">Aumento na conversão</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2 font-satoshi">99.7%</div>
              <div className="text-gray-300 font-satoshi">Taxa de deliverabilidade</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2 font-satoshi">24/7</div>
              <div className="text-gray-300 font-satoshi">Automação ativa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RocketMailBenefits;
