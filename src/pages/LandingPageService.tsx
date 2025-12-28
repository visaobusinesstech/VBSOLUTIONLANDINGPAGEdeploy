
import React, { useEffect } from 'react';
import CentralNavbar from '../components/CentralNavbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Layout, Smartphone, Zap, Target, Check, TrendingUp, Users, Eye, MousePointer, ShoppingCart } from 'lucide-react';

const LandingPageService = () => {
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

  const journeySteps = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visitante Chega",
      description: "Alguém descobre seu negócio",
      problem: "95% saem sem agir"
    },
    {
      icon: <MousePointer className="w-8 h-8" />,
      title: "Navega Perdido",  
      description: "Não entende sua proposta",
      problem: "Confusão = Desistência"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Sai Sem Comprar",
      description: "Oportunidade perdida",
      problem: "Receita que não vem"
    }
  ];

  const solutions = [
    {
      title: "Foco na Conversão",
      description: "Cada elemento é posicionado estrategicamente para guiar o visitante até a ação desejada",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Experiência Mobile",
      description: "Design responsivo que funciona perfeitamente em qualquer dispositivo",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "Performance Máxima",
      description: "Carregamento ultrarrápido e otimização SEO para máxima visibilidade",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const results = [
    'Headlines que capturam atenção imediatamente',
    'CTAs estratégicos em pontos de alta conversão',
    'Design que transmite credibilidade profissional',
    'Formulários otimizados para captura de leads',
    'Velocidade de carregamento otimizada',
    'SEO configurado para encontrar seus clientes'
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
                  <span className="text-white">Sua Landing Page</span>
                  <br />
                  <span className="text-blue-400">Está Perdendo Clientes</span>
                </h1>
                <p className="text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  A cada 100 visitantes, quantos se tornam clientes? Se a resposta for menos de 10, 
                  você está deixando dinheiro na mesa todos os dias.
                </p>
                <button 
                  onClick={handleWhatsAppClick}
                  className="schedule-button inline-flex items-center"
                >
                  Parar de Perder Clientes
                </button>
              </div>
            </div>
          </section>

          {/* Problem Journey */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  A Jornada do Visitante Perdido
                </h2>
                <p className="text-xl text-gray-300">
                  Veja como sua landing page atual está sabotando suas vendas
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {journeySteps.map((step, index) => (
                  <div key={index} className="text-center">
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
                    {index < journeySteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-8 transform -translate-x-4">
                        <div className="w-6 h-6 text-gray-500" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="backdrop-blur-sm rounded-2xl p-8 text-center">
                <TrendingUp className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  O Custo do Problema
                </h3>
                <p className="text-gray-300 text-lg">
                  Se você recebe 1000 visitantes por mês e apenas 2% convertem, está perdendo 
                  <span className="text-red-400 font-bold"> 980 oportunidades de negócio</span> todos os meses.
                </p>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  A Transformação Começa Aqui
                </h2>
                <p className="text-xl text-gray-300">
                  Landing pages que convertem visitantes em clientes qualificados
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {solutions.map((solution, index) => (
                  <div key={index} className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-6">
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
                  O que você terá na sua nova Landing Page Otimizada
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
                    De 2% para 15% de Conversão
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Imagine transformar sua taxa de conversão de <span className='text-blue-400'>2%</span> para <span className='text-blue-400'>15%</span>. Com 1.000 visitantes mensais, isso significa sair de 20 para 150 novos clientes - um salto de <span className='text-blue-400'>130 clientes</span>. Como top 1 em desenvolvimento de landing pages profissionais, entregamos páginas que <span className='text-blue-400'>convertem</span>.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-gray-300">Landing Page Atual: 2% de conversão</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300">Landing Page Otimizada: 15% de conversão</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 text-center">
                  <Users className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                  <div className="text-6xl font-bold text-blue-400 mb-2">7.5x</div>
                  <p className="text-xl text-white font-semibold mb-4">Mais Conversões</p>
                  <p className="text-gray-300">
                    Aumento médio de conversão com nossas landing pages otimizadas
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section - Updated with removed background/border and smaller button */}
          <section className="py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="p-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Pare de Perder Clientes Hoje Mesmo
                </h2>
                <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Cada dia que passa sem uma landing page otimizada é receita deixada na mesa. 
                  Vamos mudar isso agora.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 border border-blue-400"
                  >
                    Criar Minha Landing Page
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

export default LandingPageService;
