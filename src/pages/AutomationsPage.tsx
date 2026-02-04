
import React from 'react';
import CentralNavbar from '../components/CentralNavbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Zap, MessageSquare, Calendar, Workflow, ArrowRight } from 'lucide-react';

const AutomationsPage = () => {
  const services = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Robôs de Atendimento (WhatsApp)",
      description: "Atendimento 24/7 com respostas inteligentes e personalizadas"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Integração com Calendários e CRM",
      description: "Sincronização automática de agendamentos e dados de clientes"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Fluxos Automatizados e Inteligentes",
      description: "Processos otimizados que reduzem tempo e aumentam eficiência"
    }
  ];

  return (
    <div className="min-h-screen tech-background w-full">
      <CentralNavbar />
      
      <main className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center bg-blue-500/20 border border-blue-500/40 px-6 py-3 rounded-full mb-6 backdrop-blur-sm">
              <Zap className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold">Automações</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Automatize processos.{' '}
              <span className="text-blue-400 glow-text">Economize tempo.</span>{' '}
              Aumente sua eficiência.
            </h1>
          </div>

          {/* Workflow Image Section */}
          <div className="mb-16 flex justify-center">
            <div className="relative bg-bg-dark/50 border-4 border-blue-500/60 rounded-3xl p-8 shadow-2xl backdrop-blur-sm max-w-4xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10 rounded-3xl blur-2xl -z-10"></div>
              <img 
                src="/lovable-uploads/e4519b82-3994-40a9-98c7-10a439b89593.png" 
                alt="Workflow de Automação Inteligente" 
                className="w-full h-auto object-contain opacity-20 rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/60 to-transparent rounded-3xl"></div>
              
              {/* Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Fluxos Automatizados <span className="text-blue-400">Inteligentes</span>
                  </h3>
                  <p className="text-xl text-gray-300">
                    WhatsApp + IA + CRM = Resultados Exponenciais
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-bg-dark/30 border border-blue-500/20 p-8 rounded-2xl hover:bg-bg-dark/50 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-bg-dark/50 border border-blue-500/30 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Como Nossas Automações Transformam seu Negócio
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Antes da Automação</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                    Atendimento manual limitado
                  </li>
                  <li className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                    Processos lentos e repetitivos
                  </li>
                  <li className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                    Perda de leads por demora
                  </li>
                  <li className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                    Alto custo operacional
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Após a Automação</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Atendimento 24/7 inteligente
                  </li>
                  <li className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Processos automáticos e rápidos
                  </li>
                  <li className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Resposta imediata aos leads
                  </li>
                  <li className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Redução de custos em 60%
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="schedule-button inline-flex items-center justify-center gap-3">
              Agende uma demonstração
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AutomationsPage;
