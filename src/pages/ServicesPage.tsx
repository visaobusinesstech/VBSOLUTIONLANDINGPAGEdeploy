
import React, { useEffect } from 'react';
import CentralNavbar from '../components/CentralNavbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Zap, BarChart3, Code, Clock, Users, Award, ArrowRight, Check, Target, Shield, Rocket } from 'lucide-react';
import { ShinyButton } from '@/components/ui/shiny-button';

const ServicesPage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-animation');
    scrollElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automações",
      description: "Transforme processos manuais em fluxos automatizados inteligentes",
      benefits: ["Redução de 80% no tempo operacional", "Eliminação de erros humanos", "Integração com múltiplas plataformas"],
      link: "/automacoes"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Análise de Dados",
      description: "Dashboards e relatórios que transformam dados em insights estratégicos",
      benefits: ["Decisões baseadas em dados reais", "Visualizações interativas", "Relatórios automatizados"],
      link: "/analise-dados"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desenvolvimento de Sistemas",
      description: "Soluções web personalizadas para resolver problemas específicos do seu negócio",
      benefits: ["Desenvolvimento sob medida", "Tecnologias modernas", "Suporte contínuo"],
      link: "/desenvolvimento-web"
    }
  ];

  const trustLogos = [
    { name: "TechCorp", logo: "🏢" },
    { name: "StartupPro", logo: "🚀" },
    { name: "BusinessMax", logo: "💼" },
    { name: "InnovaCorp", logo: "⚡" },
    { name: "DigitalFirst", logo: "💻" },
    { name: "GrowthCo", logo: "📈" }
  ];

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Soluções Personalizadas",
      description: "Cada projeto é único e desenvolvido especificamente para suas necessidades"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança Garantida",
      description: "Proteção de dados e conformidade com as melhores práticas de segurança"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Entrega Ágil",
      description: "Metodologia eficiente que garante resultados no tempo acordado"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Suporte Especializado",
      description: "Equipe dedicada para garantir o sucesso da sua implementação"
    }
  ];

  return (
    <div className="min-h-screen w-full relative bg-gradient-to-b from-black to-gray-900">
      <CentralNavbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Nossos <span className="text-blue-400">Serviços</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Soluções completas de automação, análise de dados e desenvolvimento 
                  para transformar seu negócio com tecnologia de ponta.
                </p>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center">
                  Começar Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
              
              <div className="animate-slide-up">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/30">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">+59</div>
                      <div className="text-gray-300 text-sm">Projetos Entregues</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">+30</div>
                      <div className="text-gray-300 text-sm">Empresas Atendidas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">+550h</div>
                      <div className="text-gray-300 text-sm">Horas Economizadas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                      <div className="text-gray-300 text-sm">Satisfação</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Service Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Soluções que Transformam
              </h2>
              <p className="text-xl text-gray-300">
                Escolha a solução ideal para o seu negócio
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-transparent border border-blue-400/30 rounded-2xl p-8 hover:bg-blue-400/5 hover:border-blue-400/40 hover:scale-105 transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <ShinyButton variant="ghost" size="md" speed="slow" animated={false} className="w-full opacity-90 hover:opacity-100">
                    Saiba mais
                  </ShinyButton>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alternating Image/Text Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-20">
            {/* Section 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Automação que Revoluciona
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Transforme processos manuais repetitivos em fluxos automatizados 
                  inteligentes que trabalham 24/7 para o seu negócio.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <Rocket className="w-5 h-5 text-blue-400" />
                    Integração com +100 plataformas
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Rocket className="w-5 h-5 text-blue-400" />
                    Redução de até 80% no tempo operacional
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Rocket className="w-5 h-5 text-blue-400" />
                    ROI comprovado em menos de 3 meses
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/30 animate-slide-up">
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <Zap className="w-16 h-16 text-blue-400" />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/30 animate-slide-up lg:order-1">
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-blue-400" />
                </div>
              </div>
              
              <div className="animate-fade-in lg:order-2">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Dados que Geram Resultados
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Transforme dados brutos em insights estratégicos com dashboards 
                  interativos e relatórios automatizados que orientam suas decisões.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    Visualizações em tempo real
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    Relatórios automatizados
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    Integração com múltiplas fontes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">
              Confiança de empresas de todos os tamanhos
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {trustLogos.map((company, index) => (
                <div key={index} className="flex flex-col items-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl mb-2">{company.logo}</div>
                  <p className="text-gray-400 font-medium">{company.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Por que Escolher a Visão Business?
              </h2>
              <p className="text-xl text-gray-300">
                Diferenciais que garantem o sucesso do seu projeto
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-blue-500/20 rounded-xl p-6 hover:bg-white/10 hover:border-blue-400/40 hover:scale-105 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="text-xl text-blue-100 mb-8 opacity-90">
              Junte-se a mais de 30 empresas que já revolucionaram seus processos
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Agendar Consulta Gratuita
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Ver Portfólio
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
