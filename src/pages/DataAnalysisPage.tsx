
import React, { useEffect } from 'react';
import CentralNavbar from '../components/CentralNavbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { BarChart3, TrendingUp, Database, Gauge, PieChart, LineChart, Eye, Star, Clock, Users, Shield, Target, Brain, Zap } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

const DataAnalysisPage = () => {
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
    openWhatsApp();
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Background image with overlay */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/a162291e-1699-4ecf-90d1-9557d2a31850.png')`,
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
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center animate-fade-in">
                <h1 className="text-6xl md:text-7xl font-bold mb-8 font-satoshi leading-tight">
                  <span className="text-white">Dados que</span>
                  <br />
                  <span className="text-blue-400">Decidem</span>
                </h1>
                
                <div className="max-w-4xl mx-auto mb-12">
                  <p className="text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed font-satoshi">
                    Imagine tomar decisões com <span className="text-blue-400">100% de certeza</span> baseado em dados reais...
                  </p>
                  
                  <p className="text-xl text-gray-300 leading-relaxed font-satoshi">
                    Nossa plataforma de análise de dados transforma informações brutas em insights poderosos, 
                    revelando oportunidades escondidas e <span className="text-blue-400 font-semibold">antecipando tendências</span> 
                    que seus concorrentes ainda não descobriram.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-blue-500/30 hover:scale-105 font-satoshi"
                  >
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Ver Dashboards em Ação
                  </button>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-lg hover:scale-105 font-satoshi"
                  >
                    Análise Gratuita dos Seus Dados
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* The Problem Story Section */}
          <section className="py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-satoshi">
                  O Drama de Quem Decide no Escuro
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-satoshi">
                  Enquanto você "achava" que conhecia seu negócio, seus dados estavam gritando verdades que você não conseguia ouvir.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
                <div className="bg-gradient-to-br from-red-900/40 to-black/60 backdrop-blur-md border border-red-400/30 rounded-2xl p-8 shadow-2xl">
                  <Eye className="w-16 h-16 text-red-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4 font-satoshi">
                    Decisões baseadas em "achismo"
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed font-satoshi">
                    Você investe milhares em campanhas que "acredita" que funcionam, lança produtos que "imagina" 
                    que o mercado quer, e contrata pessoas baseado em "intuição". O resultado? Prejuízo silencioso.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-900/40 to-black/60 backdrop-blur-md border border-red-400/30 rounded-2xl p-8 shadow-2xl">
                  <Database className="w-16 h-16 text-red-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4 font-satoshi">
                    Dados dispersos e inutilizados
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed font-satoshi">
                    Seus dados estão espalhados em planilhas, sistemas diferentes, relatórios que ninguém lê. 
                    É como ter um cofre cheio de ouro, mas sem a chave para abrir.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-900/40 to-black/60 backdrop-blur-md border border-red-400/30 rounded-2xl p-8 shadow-2xl">
                  <TrendingUp className="w-16 h-16 text-red-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4 font-satoshi">
                    Concorrentes descobrindo oportunidades primeiro
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed font-satoshi">
                    Enquanto você demora para entender o que está acontecendo no seu mercado, 
                    seus concorrentes já identificaram a próxima tendência e estão lucrando com ela.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dashboard Demo Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-blue-900/20 to-black/40 backdrop-blur-md border border-blue-400/30 rounded-2xl p-12 animate-fade-in shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-6 font-satoshi">
                    Dashboard Interativo - Power BI
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed font-satoshi">
                    Veja como seus dados ganham vida em visualizações que revelam insights poderosos
                  </p>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden border border-blue-500/30">
                  <iframe
                    src="https://app.powerbi.com/view?r=eyJrIjoiNmJmNGVlMDUtOWM1Mi00MWU2LWJlMzctNWVmMTI0ZTE1MzEzIiwidCI6IjMzYzBkZTljLTdiYjgtNDZlZC05ZmM2LTM1MjNjMjFjNzE2OCJ9"
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen={true}
                    title="Power BI Dashboard - Análise de Dados"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* The Solution Story Section */}
          <section className="py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-satoshi">
                  E se Você Pudesse Prever o Futuro?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-satoshi">
                  Imagine acordar sabendo exatamente onde investir, quais produtos lançar e quais estratégias adotar.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
                <div className="bg-gradient-to-br from-green-900/40 to-black/60 backdrop-blur-md border border-green-400/30 rounded-2xl p-8 shadow-2xl">
                  <Brain className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4 font-satoshi">
                    Insights Automáticos com IA
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed font-satoshi">
                    Nossa inteligência artificial analisa milhões de pontos de dados e entrega insights prontos para ação. 
                    Não precisa ser estatístico - você recebe as descobertas em linguagem simples.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-900/40 to-black/60 backdrop-blur-md border border-green-400/30 rounded-2xl p-8 shadow-2xl">
                  <Target className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4 font-satoshi">
                    Previsões que Se Tornam Realidade
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed font-satoshi">
                    Identifique tendências antes que elas aconteçam. Nossos algoritmos preditivos revelam 
                    oportunidades futuras com precisão surpreendente.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-900/40 to-black/60 backdrop-blur-md border border-green-400/30 rounded-2xl p-8 shadow-2xl">
                  <Zap className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4 font-satoshi">
                    Dashboards que Falam por Si Só
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed font-satoshi">
                    Visualizações interativas que transformam dados complexos em histórias claras. 
                    Cada gráfico revela uma oportunidade, cada métrica aponta uma direção.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Transformation Results Section */}
          <section className="py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-blue-400"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-blue-400"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-blue-400"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-blue-400"></div>
                </div>
                
                <div className="relative bg-gradient-to-br from-blue-900/20 to-black/40 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-16 text-center animate-fade-in shadow-2xl">
                  <div className="relative z-10">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 font-satoshi leading-tight">
                      A Vantagem Competitiva
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 animate-pulse">
                        Que Você Precisa
                      </span>
                    </h2>
                    
                    <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
                      <p className="text-gray-200 font-satoshi text-xl">
                        Empresas que implementaram nossas soluções de análise relatam um aumento médio de 
                        <span className="text-green-400 font-semibold"> 400% na precisão das decisões</span> 
                        e redução de <span className="text-blue-400 font-semibold">60% nos riscos de investimento</span>.
                      </p>
                      
                      <p className="text-gray-300 font-satoshi">
                        Não é apenas sobre gráficos bonitos - é sobre <span className="text-white font-semibold">poder de decisão</span>. 
                        Enquanto seus concorrentes apostam no escuro, 
                        <span className="text-blue-400"> você sabe exatamente onde acertar</span>.
                      </p>
                      
                      <div className="pt-8">
                        <p className="text-2xl text-blue-300 font-semibold font-satoshi mb-4">
                          O futuro pertence a quem sabe interpretar dados.
                        </p>
                        <p className="text-xl text-gray-200 font-satoshi">
                          A pergunta é: você vai liderar ou vai ficar para trás?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Urgency and Social Proof Section */}
          <section className="py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-satoshi">
                  Mais de 300 Empresas Já Descobriram o Poder dos Dados
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-satoshi">
                  Enquanto você analisa, seus concorrentes estão implementando dashboards e ganhando vantagem.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gradient-to-br from-blue-900/40 to-black/60 backdrop-blur-md border border-blue-400/30 rounded-2xl p-8 text-center animate-slide-up shadow-2xl">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mx-auto mb-6">
                    <Star className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 font-satoshi">97%</h3>
                  <p className="text-gray-300 font-satoshi">Precisão nas previsões de mercado</p>
                </div>

                <div className="bg-gradient-to-br from-blue-900/40 to-black/60 backdrop-blur-md border border-blue-400/30 rounded-2xl p-8 text-center animate-slide-up shadow-2xl">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mx-auto mb-6">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 font-satoshi">400%</h3>
                  <p className="text-gray-300 font-satoshi">Melhoria na precisão das decisões</p>
                </div>

                <div className="bg-gradient-to-br from-blue-900/40 to-black/60 backdrop-blur-md border border-blue-400/30 rounded-2xl p-8 text-center animate-slide-up shadow-2xl">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mx-auto mb-6">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 font-satoshi">24/7</h3>
                  <p className="text-gray-300 font-satoshi">Monitoramento em tempo real</p>
                </div>
              </div>

              <div className="text-center animate-fade-in">
                <p className="text-2xl text-red-400 font-semibold mb-4 font-satoshi">
                  ⚠️ Cada dia sem dados é uma oportunidade perdida
                </p>
                <p className="text-lg text-gray-300 mb-8 font-satoshi">
                  Seus concorrentes não vão esperar você descobrir o poder dos dados.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-md border border-blue-500/30 rounded-2xl p-12 shadow-2xl animate-fade-in">
                <h2 className="text-4xl font-bold text-white mb-6 font-satoshi">
                  Transforme Dados em Vantagem Competitiva
                </h2>
                <p className="text-xl text-gray-300 mb-8 font-satoshi">
                  Em 30 dias, você pode ter dashboards inteligentes revelando oportunidades ocultas. 
                  Ou pode continuar decidindo no escuro enquanto outros descobrem o futuro.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-105 font-satoshi"
                  >
                    Quero Meus Dashboards Agora
                  </button>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-lg hover:scale-105 font-satoshi"
                  >
                    Análise Gratuita dos Meus Dados
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

export default DataAnalysisPage;
