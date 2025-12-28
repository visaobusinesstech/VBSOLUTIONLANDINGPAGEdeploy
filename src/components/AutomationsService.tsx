
import React from 'react';
import { MessageSquare, Calendar, Workflow, Check } from 'lucide-react';

const AutomationsService = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Business',
      description: 'Atendimento automatizado 24/7'
    },
    {
      icon: Calendar,
      title: 'Integração CRM',
      description: 'Sincronização total de dados'
    },
    {
      icon: Workflow,
      title: 'Fluxos Inteligentes',
      description: 'Processos otimizados automaticamente'
    }
  ];

  const benefits = [
    'Redução de 90% no tempo de atendimento',
    'Aumento de 300% na taxa de conversão',
    'Automação completa de processos repetitivos',
    'Integração com todas suas ferramentas atuais'
  ];

  return (
    <section 
      id="automacoes-service" 
      className="py-20 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-black">Automações</span>
            <span className="text-black"> Inteligentes</span>
          </h2>
          <p className="text-xl mb-4 font-semibold">
            <span className="text-black">Automatize. Escale. </span>
            <span className="text-blue-400">Inove.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <div className="rounded-2xl p-8">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/fba1ccd2-694d-4770-9d4e-3d0f52d54e52.png"
                  alt="Automações Inteligentes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Transforme processos manuais em fluxos automatizados inteligentes. Nossos robôs trabalham 24/7 
              para capturar leads, nutrir relacionamentos e converter oportunidades em vendas reais.
            </p>

            <h3 className="text-2xl font-bold text-blue-400 mb-6">Benefícios:</h3>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-200">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-transparent border border-blue-400/30 p-6 rounded-xl hover:bg-blue-400/5 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-blue-500/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/50 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-blue-300" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-black">
                {feature.title}
              </h3>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationsService;
