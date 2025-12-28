
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ServiceDetails = () => {
  const services = [{
    title: 'Automações',
    subtitle: 'Automatize tarefas e atendimentos — inclusive no WhatsApp. Criamos fluxos inteligentes que interpretam mensagens, qualificam leads e agilizam processos com rapidez e precisão.',
    benefits: ['Respostas automáticas no WhatsApp com inteligência', 'Qualificação de leads sem esforço manual', 'Economia de tempo e redução de retrabalho', 'Integração com CRMs e sistemas internos'],
    image: '/lovable-uploads/60751bf8-7dd3-4198-bd94-bce622cccfea.png'
  }, {
    title: 'RocketMail',
    subtitle: 'Crie templates, automatize e envie suas cartas de apresentação para milhares de leads. Com o RocketMail, você dispara até 10 mil e-mails de uma só vez, com personalização, escala e zero esforço manual.',
    benefits: ['Envio em massa com até 10 mil e-mails simultâneos', 'Templates personalizáveis para cada serviço ou campanha', 'Geração automática de leads via e-mail', 'Agendamentos e relatórios de performance em tempo real'],
    isRocketMail: true
  }, {
    title: 'Análises de Dados',
    subtitle: 'Tome decisões com base em dados — não em achismos. Nós transformamos seus números em dashboards claros e automáticos, que mostram o que está funcionando e onde estão as oportunidades.',
    benefits: ['Relatórios e dashboards automatizados e visuais', 'Identificação de gargalos e oportunidades reais', 'Acompanhamento em tempo real de métricas do seu negócio', 'Mais clareza, menos suposições'],
    powerBI: true,
    dashboardUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNmJmNGVlMDUtOWM1Mi00MWU2LWJlMzctNWVmMTI0ZTE1MzEzIiwidCI6IjMzYzBkZTljLTdiYjgtNDZlZC05ZmM2LTM1MjNjMjFjNzE2OCJ9'
  }, {
    title: 'Desenvolvimento de Sistemas',
    subtitle: 'Soluções digitais sob medida para o seu negócio. Desenvolvemos sistemas web e plataformas que integram, automatizam e escalam sua operação.',
    benefits: ['Funcionalidades adaptadas à sua realidade', 'Redução de custos com retrabalho e suporte', 'Segurança e estabilidade de dados', 'Interfaces modernas e intuitivas'],
    image: '/lovable-uploads/75a51468-144b-4259-b775-39c7a45d482c.png'
  }];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços em Detalhes
          </h2>
          <p className="text-xl text-gray-600">
            Soluções completas para transformar seu negócio
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {service.subtitle}
                </p>
                
                <div className="space-y-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image/Visual */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {service.isRocketMail ? (
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🚀</div>
                      <h4 className="text-2xl font-bold mb-2">RocketMail</h4>
                      <p className="text-blue-100">Automatize seu email marketing</p>
                    </div>
                  </div>
                ) : service.powerBI ? (
                  <div className="bg-gray-900 rounded-2xl p-2 shadow-2xl">
                    <iframe
                      src={service.dashboardUrl}
                      className="w-full h-80 rounded-lg"
                      frameBorder="0"
                      allowFullScreen={true}
                      title="Power BI Dashboard"
                    />
                  </div>
                ) : (
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
