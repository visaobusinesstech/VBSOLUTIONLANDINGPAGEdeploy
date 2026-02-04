import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Zap, Settings, ArrowRight, Globe, Users, Rocket } from 'lucide-react';
const ServicesShowcase = () => {
  const services = [{
    title: "Automações Inteligentes",
    description: "Robôs que trabalham 24/7 para automatizar seus processos e multiplicar resultados",
    icon: <Zap className="w-12 h-12" />,
    href: "/automacao",
    color: "from-blue-500 to-blue-600",
    features: ["WhatsApp Business", "CRM Integration", "Email Marketing", "Workflows"],
    stats: "300% mais eficiência",
    image: <div className="absolute top-4 right-4 w-16 h-16 rounded-lg overflow-hidden border border-blue-500/30">
          
        </div>
  }, {
    title: "Análise de Dados",
    description: "Dashboards inteligentes que transformam dados em insights estratégicos",
    icon: <BarChart3 className="w-12 h-12" />,
    href: "/analise-dados",
    color: "from-blue-500 to-blue-700",
    features: ["Power BI", "Dashboards", "Relatórios", "IA Preditiva"],
    stats: "95% precisão nas previsões"
  }, {
    title: "Desenvolvimento Web",
    description: "Sites e sistemas modernos que convertem visitantes em clientes",
    icon: <Globe className="w-12 h-12" />,
    href: "/landing-page",
    color: "from-gray-500 to-gray-700",
    features: ["Sites Responsivos", "E-commerce", "SEO", "Performance"],
    stats: "5x mais conversões"
  }];
  return <section className="py-20 bg-bg-dark/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Nossos <span className="text-blue-400 glow-text">Serviços</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluções completas para transformar seu negócio com tecnologia de ponta
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="group bg-bg-dark/40 border border-blue-500/20 rounded-2xl p-8 hover:bg-bg-dark/60 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm relative">
              {service.image}
              
              <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, idx) => <span key={idx} className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                      {feature}
                    </span>)}
                </div>
                <div className="text-sm font-semibold text-blue-400">{service.stats}</div>
              </div>
              
              <Link to={service.href} className="inline-flex items-center justify-center w-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-blue-400 px-6 py-3 rounded-xl transition-all duration-300 group-hover:scale-105">
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ServicesShowcase;