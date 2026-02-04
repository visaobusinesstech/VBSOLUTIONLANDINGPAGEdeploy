import React from 'react';
import { Mail, Clock, Globe, FileText, BarChart, Zap, Check } from 'lucide-react';
import RocketMailGallery from './RocketMailGallery';
import { openWhatsApp } from '../utils/whatsapp';
const RocketMail = () => {
  const features = [{
    icon: Mail,
    title: 'Disparo em Massa com Qualidade',
    description: 'Envie milhares de e-mails mantendo alta deliverabilidade'
  }, {
    icon: Clock,
    title: 'Agendamento Inteligente',
    description: 'Configure campanhas para serem enviadas no momento ideal'
  }, {
    icon: Globe,
    title: 'Domínio Próprio',
    description: 'Use seu próprio domínio para aumentar a credibilidade'
  }, {
    icon: FileText,
    title: 'Templates Profissionais',
    description: 'Biblioteca completa de templates responsivos e elegantes'
  }, {
    icon: BarChart,
    title: 'Relatórios Completos',
    description: 'Métricas detalhadas de abertura, cliques e conversões'
  }, {
    icon: Zap,
    title: 'Totalmente Automático',
    description: 'Configure uma vez e deixe o sistema trabalhar por você'
  }];
  const benefits = ['Envio em massa com até 10 mil e-mails simultâneos', 'Templates personalizáveis para cada serviço ou campanha', 'Geração automática de leads via e-mail', 'Agendamentos e relatórios de performance em tempo real'];
  const handleWhatsAppClick = () => {
    openWhatsApp();
  };
  return <section id="rocket-mail" className="py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-satoshi">
            <span className="text-blue-400">Rocket</span>
            <span className="text-black">Mail</span>
          </h2>
          <p className="text-xl text-blue-400 mb-4 font-semibold font-satoshi">
            Automatize. Agende. Converta.
          </p>
        </div>

        {/* Main Content Section with Gallery and Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Gallery */}
          <div className="animate-fade-in">
            <RocketMailGallery variant="homepage" />
          </div>

          {/* Right Side - Content */}
          <div className="animate-slide-up">
            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-satoshi">
              Crie templates, automatize e envie suas cartas de apresentação para milhares de leads. 
              Com o <span className="text-blue-400">Rocket</span><span className="text-black">Mail</span>, você dispara até 10 mil e-mails de uma só vez, com personalização, escala e zero esforço manual.
            </p>

            <h3 className="text-2xl font-bold text-blue-400 mb-6 font-satoshi">Benefícios:</h3>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-satoshi">{benefit}</p>
                </div>)}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => <div key={feature.title} className="bg-transparent border border-blue-400/30 p-6 rounded-lg hover:bg-blue-400/5 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 animate-slide-up group" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="bg-blue-500/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/50 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-blue-300" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-black font-satoshi">
                {feature.title}
              </h3>
              
              <p className="text-gray-700 text-sm leading-relaxed font-satoshi">
                {feature.description}
              </p>
            </div>)}
        </div>

        
      </div>
    </section>;
};
export default RocketMail;
