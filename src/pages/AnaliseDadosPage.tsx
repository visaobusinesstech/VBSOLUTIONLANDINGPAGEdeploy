import React, { useEffect } from 'react';
import CentralNavbar from '../components/CentralNavbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { BarChart3, TrendingUp, Database, Gauge, ArrowRight, Check, AlertTriangle, Eye, Brain, Target } from 'lucide-react';

const AnaliseDadosPage = () => {
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

  const handleWhatsAppClick = () => {
    const url = 'https://api.whatsapp.com/send/?phone=5541997772066&text=Ol%C3%A1%20tudo%20bem%3F%20Tenho%20interesse%20em%20conhcer%20o%20VBSolution%20CRM%20solicito%20uma%20demonstra%C3%A7%C3%A3o%21&type=phone_number&app_absent=0';
    window.open(url, '_blank');
  };

  const problemJourney = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Dados Espalhados",
      description: "Informações em planilhas, sistemas diferentes",
      problem: "Visão fragmentada"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Análise Manual",
      description: "Horas perdidas interpretando números",
      problem: "Decisões lentas"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Decisões no Escuro",
      description: "Baseadas em intuição, não em fatos",
      problem: "Oportunidades perdidas"
    }
  ];

  const solutions = [
    {
      title: "Dashboards Inteligentes",
      description: "Visualizações automáticas que revelam insights ocultos nos seus dados",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Análise em Tempo Real",
      description: "Monitore seu negócio 24/7 com alertas automáticos de oportunidades",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Integração Total",
      description: "Todos os seus sistemas conectados em uma única fonte da verdade",
      icon: <Database className="w-8 h-8" />
    }
  ];

  const results = [
    'Dashboards Power BI profissionais e interativos',
    'Relatórios automáticos enviados por email',
    'Alertas inteligentes de anomalias e oportunidades',
    'Integração com todas suas fontes de dados',
    'Análises preditivas para antecipar tendências',
    'Interface mobile para decisões em qualquer lugar'
  ];

  return (
    <div className="min-h-screen w-full relative">
      {/* Background image with overlay */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/7329374d-dada-40e2-abf9-6bb883cf8ecc.png')`,
        }}
      />
      
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-blue-950/70 to-black/90" />
      
      {/* Content */}
      <div className="relative z-10">
        <CentralNavbar />
        
        <main className="pt-32 pb-16">
          {/* Hero Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="text-white">Seus Dados Estão</span>
                  <br />
                  <span className="text-blue-400">Mentindo Para Você</span>
                </h1>
                <p className="text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Você tem acesso a todos os dados do seu negócio, mas ainda toma decisões baseadas 
                  em intuição? Seus concorrentes já descobriram como transformar dados em vantagem competitiva.
                </p>
                <button 
                  onClick={handleWhatsAppClick}
                  className="schedule-button inline-flex items-center"
                >
                  Descobrir a Verdade nos Dados
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </section>

          {/* Problem Journey */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  O Ciclo da Cegueira Empresarial
                </h2>
                <p className="text-xl text-gray-300">
                  Como a falta de análise adequada está custando caro para seu negócio
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {problemJourney.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="relative">
                      <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center text-red-400 mx-auto mb-6">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 mb-2">{step.description}</p>
                    <p className="text-red-400 font-semibold text-sm">{step.problem}</p>
                    {index < problemJourney.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-8 transform -translate-x-4">
                        <ArrowRight className="w-6 h-6 text-gray-500" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="backdrop-blur-sm rounded-2xl p-8 text-center">
                <Brain className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  O Custo da Cegueira de Dados
                </h3>
                <p className="text-gray-300 text-lg">
                  Empresas orientadas por dados são <span className="text-red-400 font-bold">23x mais propensas</span> a 
                  adquirir clientes e <span className="text-red-400 font-bold">19x mais propensas</span> a ser lucrativas. 
                  Quantas oportunidades você está perdendo?
                </p>
              </div>
            </div>
          </section>

          {/* Dashboard Demo Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Veja Seus Dados Ganharem Vida
                </h2>
                <p className="text-xl text-gray-300">
                  Dashboard interativo que transforma números em insights acionáveis
                </p>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm">
                <iframe 
                  src="https://app.powerbi.com/view?r=eyJrIjoiNmJmNGVlMDUtOWM1Mi00MWU2LWJlMzctNWVmMTI0ZTE1MzEzIiwidCI6IjMzYzBkZTljLTdiYjgtNDZlZC05ZmM2LTM1MjNjMjFjNzE2OCJ9"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  allowFullScreen={true}
                  className="rounded-xl"
                  title="Dashboard Interativo - Análise de Dados"
                ></iframe>
                <p className="text-gray-300 text-center mt-6 text-lg">
                  ⬆️ Este é o poder de uma análise de dados empresarial profissional. Explore o dashboard acima e veja como 
                  transformamos dados complexos em insights claros e acionáveis.
                </p>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  A Revolução dos Dados Começa Aqui
                </h2>
                <p className="text-xl text-gray-300">
                  Transforme dados caóticos em vantagem competitiva estratégica
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {solutions.map((solution, index) => (
                  <div key={index} className="p-8 text-center rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 bg-transparent">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-6">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300">
                      {solution.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white text-center mb-8">
                  O que você terá no seu sistema de análise
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-200">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Transformation Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    De Reativo para Preditivo
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Pare de reagir aos problemas quando já é tarde. Como a número 1 em análise de dados empresariais, oferecemos soluções <span className='text-blue-400'>preditivas</span> que permitem <span className='text-blue-400'>antecipar tendências</span>, identificar oportunidades antes da concorrência e tomar decisões com base no <span className='text-blue-400'>futuro</span>, não no passado.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-gray-300">Decisões Reativas: Baseadas no que já aconteceu</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300">Decisões Preditivas: Baseadas no que vai acontecer</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 text-center">
                  <Target className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                  <div className="text-6xl font-bold text-blue-400 mb-2">89%</div>
                  <p className="text-xl text-white font-semibold mb-4">Mais Assertividade</p>
                  <p className="text-gray-300">
                    Aumento na precisão de decisões estratégicas com análise de dados profissional
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Expanded CTA Final */}
          <section className="py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="p-16 animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Transforme Dados em Vantagem Competitiva
                </h2>
                <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Enquanto seus concorrentes ainda tomam decisões no escuro, você terá 
                  insights precisos para dominar seu mercado.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 text-base rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-105 inline-flex items-center justify-center gap-3"
                  >
                    Criar Meu Dashboard
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default AnaliseDadosPage;
