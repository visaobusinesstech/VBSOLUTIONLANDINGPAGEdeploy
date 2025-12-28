
import React from 'react';
import { BarChart3, Database, Brain, Check } from 'lucide-react';

const DataAnalysisService = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Dashboards Interativos',
      description: 'Visualizações dinâmicas em tempo real'
    },
    {
      icon: Brain,
      title: 'IA Preditiva',
      description: 'Insights automáticos com inteligência artificial'
    },
    {
      icon: Database,
      title: 'Integração Total',
      description: 'Conecte todas suas fontes de dados'
    }
  ];

  const benefits = [
    'Aumento de 400% na precisão das decisões',
    'Redução de 60% nos riscos de investimento',
    'Identificação automática de oportunidades',
    'Relatórios personalizados para cada área'
  ];

  return (
    <section 
      id="analise-dados-service" 
      className="py-20 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-black">Análise</span>
            <span className="text-black"> de Dados</span>
          </h2>
          <p className="text-xl text-blue-400 mb-4 font-semibold">
            Analise. Visualize. Decida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <div className="rounded-2xl p-6">
              <div className="rounded-lg overflow-hidden" style={{ aspectRatio: '16/10', height: '300px' }}>
                <iframe
                  src="https://app.powerbi.com/view?r=eyJrIjoiNmJmNGVlMDUtOWM1Mi00MWU2LWJlMzctNWVmMTI0ZTE1MzEzIiwidCI6IjMzYzBkZTljLTdiYjgtNDZlZC05ZmM2LTM1MjNjMjFjNzE2OCJ9"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allowFullScreen={true}
                  title="Dashboard Power BI - Análise de Dados"
                />
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Transforme dados brutos em insights estratégicos poderosos. Nossos dashboards inteligentes 
              revelam oportunidades escondidas e antecipam tendências do mercado com precisão.
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

export default DataAnalysisService;
