
import React from 'react';
import { Bot, MessageSquare, Calendar, Workflow } from 'lucide-react';

const Automations = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'Robôs de atendimento por WhatsApp',
      description: 'Atendimento 24/7 com respostas inteligentes e personalizadas'
    },
    {
      icon: Calendar,
      title: 'Integração com calendários e CRM',
      description: 'Sincronização automática de agendamentos e dados de clientes'
    },
    {
      icon: Workflow,
      title: 'Fluxos automatizados de atendimento',
      description: 'Processos otimizados que reduzem tempo de resposta'
    },
    {
      icon: Bot,
      title: 'Mensagens programadas e personalizadas',
      description: 'Comunicação estratégica no momento certo para cada cliente'
    }
  ];

  return (
    <section id="automacoes" className="py-20 bg-gray-100 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Robôs que trabalham por você.{' '}
            <span className="text-blue-600">Resultados que escalam com você.</span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Automatizamos fluxos de atendimento, agendamentos e relacionamento com clientes. 
            Reduza tarefas manuais e ganhe escala.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up border border-gray-200"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-black mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white p-8 rounded-2xl shadow-sm max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">
              Pronto para automatizar seu negócio?
            </h3>
            <p className="text-gray-600 mb-6">
              Vamos criar fluxos inteligentes que trabalham 24/7 para você.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              🤖 Solicite sua automação personalizada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automations;
