
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Code, Smartphone, Zap, Globe, ArrowRight, Target } from 'lucide-react';

const WebDevelopmentPage = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Criação de Sites Institucionais",
      description: "Sites com alto desempenho e design sofisticado que transmitem credibilidade"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Landing Pages Otimizadas",
      description: "Páginas focadas em conversão com design estratégico e responsivo"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Design Responsivo e Técnico",
      description: "Experiência perfeita em todos os dispositivos com tecnologia avançada"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Integração com CRM/Funil",
      description: "Envio de formulários direto para seu sistema de vendas"
    }
  ];

  return (
    <div className="min-h-screen tech-background w-full">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center bg-blue-500/20 border border-blue-500/40 px-6 py-3 rounded-full mb-6 backdrop-blur-sm">
              <Code className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold">Desenvolvimento Web</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Primeiras impressões contam.{' '}
              <span className="text-blue-400 glow-text">Deixe o seu site vender por você.</span>
            </h1>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
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

          {/* Technology Stack */}
          <div className="bg-bg-dark/50 border border-blue-500/30 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              Tecnologia de Ponta
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="font-bold text-white mb-2">Performance</h3>
                <p className="text-gray-400 text-sm">Sites que carregam em menos de 2 segundos</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="font-bold text-white mb-2">SEO Otimizado</h3>
                <p className="text-gray-400 text-sm">Estrutura otimizada para motores de busca</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="font-bold text-white mb-2">Mobile First</h3>
                <p className="text-gray-400 text-sm">Design pensado primeiro para dispositivos móveis</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-bg-dark/50 border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6">
              Seu Site Como Sua Melhor Ferramenta de Vendas
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Desenvolvimento completo do conceito ao lançamento, com suporte contínuo 
              e integração total com seus sistemas.
            </p>
            <button className="schedule-button inline-flex items-center justify-center gap-3">
              Comece seu projeto conosco
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

export default WebDevelopmentPage;
