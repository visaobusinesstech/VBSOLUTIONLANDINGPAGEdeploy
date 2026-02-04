
import React from 'react';
import { BarChart3, TrendingUp, Database, Gauge } from 'lucide-react';

const DataAnalysis = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Painéis interativos',
      description: 'Dashboards personalizados com visualizações dinâmicas'
    },
    {
      icon: TrendingUp,
      title: 'Insights em tempo real',
      description: 'Análises automáticas que revelam oportunidades'
    },
    {
      icon: Database,
      title: 'Integração com sistemas',
      description: 'Conecte todas suas fontes de dados em um só lugar'
    },
    {
      icon: Gauge,
      title: 'Dashboards Power BI',
      description: 'Relatórios profissionais com a tecnologia Microsoft'
    }
  ];

  return (
    <section id="analise-dados" className="py-20 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Dados que guiam decisões.{' '}
              <span className="text-blue-600">Relatórios que geram valor.</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Crie dashboards interativos com integração total aos seus sistemas. 
              Visualize seus resultados em tempo real e tome decisões baseadas em dados confiáveis.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className="flex items-start space-x-4 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dashboard de análise de dados"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysis;
