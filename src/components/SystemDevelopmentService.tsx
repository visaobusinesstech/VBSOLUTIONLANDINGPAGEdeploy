
import React from 'react';
import { Code, Database, Cloud, CheckCircle } from 'lucide-react';

const SystemDevelopmentService = () => {
  const technologies = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desenvolvimento Full-Stack",
      description: "Criamos soluções completas do front-end ao back-end"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Gestão de Dados",
      description: "Sistemas robustos para armazenamento e processamento"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Computing",
      description: "Infraestrutura escalável na nuvem"
    }
  ];

  const benefits = [
    "Protocolos de segurança de ponta a ponta",
    "Sistemas escaláveis que crescem com o negócio",
    "Integração perfeita com fluxos existentes",
    "Suporte técnico especializado contínuo"
  ];

  return (
    <section 
      id="desenvolvimento-sistemas-service" 
      className="py-20 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-black">Desenvolvimento</span>
            <span className="text-black"> de Sistemas</span>
          </h2>
          <p className="text-xl text-blue-400 mb-4 font-semibold">
            Desenvolva. Integre. Transforme.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <div className="rounded-2xl p-8">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/397f0d5e-3e58-4ca6-9719-5196ec9e92f3.png"
                  alt="Desenvolvimento de Sistemas - Visão Business"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="animate-slide-up space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Criamos sistemas sob medida que crescem junto com seu negócio. 
              Desde aplicações web até sistemas complexos de gestão, desenvolvemos 
              soluções que se integram perfeitamente ao seu fluxo de trabalho e 
              escalam conforme sua empresa cresce.
            </p>

            {/* Benefits Section */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-200">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-transparent border border-blue-400/30 p-6 rounded-xl hover:bg-blue-400/5 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 animate-slide-up group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-blue-500/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/50 transition-all duration-300 mx-auto">
                <div className="text-blue-300">
                  {tech.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-black">
                {tech.title}
              </h3>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemDevelopmentService;
