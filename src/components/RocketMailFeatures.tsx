
import React from 'react';
import { Users, Clock, BarChart, Globe, Zap, Mail } from 'lucide-react';

const RocketMailFeatures = () => {
  const features = [
    {
      icon: Users,
      title: 'Gestão de Contatos',
      description: 'Anexe e gerencie tabelas de contatos extensas com facilidade. Organize informações completas incluindo tags personalizadas, telefones, razão social e dados adicionais para segmentação precisa e comunicação direcionada.',
      image: '/lovable-uploads/7a32d1d2-601c-4af2-b319-e46107593736.png',
      reverse: false
    },
    {
      icon: Clock,
      title: 'Agendamentos Inteligentes',
      description: 'Programe disparos de e-mails de forma prática, filtrando contatos por tags e selecionando múltiplos destinatários. Organize sua comunicação com controle total de datas, horários e campanhas, garantindo eficiência no envio sem esforço manual.',
      image: '/lovable-uploads/ad7e7afe-ab7a-4948-a864-c380195be9f7.png',
      reverse: true
    },
    {
      icon: BarChart,
      title: 'Painel de Controle Inteligente',
      description: 'Visualize em tempo real os principais indicadores da sua operação de e-mail marketing: contatos, templates, agendamentos e envios. Monitore facilmente a performance com gráficos dinâmicos e métricas claras para decisões mais rápidas e assertivas.',
      image: '/lovable-uploads/49bd513c-3c9c-465d-a057-88506f2c0435.png',
      reverse: false
    }
  ];

  const iconFeatures = [
    { icon: Globe, title: 'Domínio Próprio', description: 'Use seu domínio para aumentar credibilidade' },
    { icon: Zap, title: 'Templates Profissionais', description: 'Biblioteca completa de templates responsivos' },
    { icon: Mail, title: 'Segmentação Avançada', description: 'Segmente audiências com precisão cirúrgica' }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-satoshi">
            Recursos que fazem a diferença
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-satoshi">
            Descubra as funcionalidades que tornam o <span className="text-blue-400">Rocket</span><span className="text-white">Mail</span> a escolha ideal 
            para empresas que querem escalar suas vendas através do email marketing.
          </p>
        </div>

        {/* Features principais com imagens */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                feature.reverse ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Conteúdo */}
              <div className={`animate-fade-in ${feature.reverse ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white font-satoshi">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed font-satoshi">
                  {feature.description}
                </p>
              </div>

              {/* Imagem sem borda */}
              <div className={`animate-slide-up ${feature.reverse ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <div className="rounded-2xl p-6 bg-transparent">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features com ícones - sem bordas */}
        <div className="mt-32">
          <div className="grid md:grid-cols-3 gap-8">
            {iconFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-4 font-satoshi">
                  {feature.title}
                </h4>
                
                <p className="text-gray-300 font-satoshi">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RocketMailFeatures;
