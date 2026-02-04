import React, { useEffect } from 'react';
import CentralNavbar from '../components/CentralNavbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Bot, MessageSquare, Calendar, Workflow, Zap, ArrowRight, Check, Clock, Users, Shield, Target, TrendingUp, Eye, Star, Lightbulb, TrendingDown } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

const AutomacaoPage = () => {
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
          backgroundImage: `url('/lovable-uploads/41ee5590-7020-4b7e-98d3-f781b44a8f9a.png')`,
        }}
      />
      
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-blue-950/70 to-black/90" />
      
      {/* Content */}
      <div className="relative z-10">
        <CentralNavbar />
        
        <main className="pt-32 pb-16">
          {/* Hero Section - Narrative Style */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center animate-fade-in">
                <h1 className="text-6xl md:text-7xl font-bold mb-8 font-satoshi leading-tight">
                  <span className="text-white">Automações</span>
                  <br />
                  <span className="text-blue-400">Inteligentes</span>
                </h1>
                
                <div className="max-w-4xl mx-auto mb-12">
                  <p className="text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed font-satoshi">
                    Imagine nunca mais perder um <span className="text-blue-400">cliente potencial</span> por demora no atendimento...
                  </p>
                  
                  <p className="text-xl text-gray-300 leading-relaxed font-satoshi">
                    Descubra como a principal desenvolvedora de sistemas personalizados pode transformar seu atendimento em uma máquina de conversão que trabalha 24 horas por dia, qualifica leads e nunca tira férias.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-blue-500/30 hover:scale-105 font-satoshi"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Ver Automação em Ação
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* The Problem Story Section */}
          {/* Seção removida: 'A História que Todo Empresário Conhece' */}

          {/* Expanded IA Section */}
          <section className="py-40">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="animate-fade-in">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 font-satoshi">
                      Inteligência <span className="text-blue-400">Artificial</span> que Trabalha por Você
                    </h3>
                    <p className="text-gray-200 text-xl leading-relaxed mb-8 font-satoshi">
                      Com o poder da automação de processos, utilizamos o N8N para criar automações inteligentes para empresas diretamente no WhatsApp. Nossos fluxos automatizados capturam leads e nutrem relacionamentos de forma automática. Sua empresa operando 24/7, convertendo visitantes em clientes enquanto você dorme.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                      <p className="text-blue-400 font-semibold font-satoshi text-lg">Fluxos inteligentes em operação contínua</p>
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/3dd5dcaf-d586-41ee-b9ab-4c754dd95cad.png"
                        alt="Fluxo WhatsApp N8N"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Solution Story Section */}
          <section className="py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-satoshi">
                  E se Você Nunca Mais Perdesse um Cliente?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-satoshi">
                  Imagine acordar todo dia com novos leads qualificados esperando por você.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up">
                <div className="text-center">
                  <MessageSquare className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3 font-satoshi">
                    Atendimento Instantâneo 24/7
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-satoshi">
                    Nossos robôs conversam naturalmente com seus clientes a qualquer hora. 
                    Respondem perguntas, qualificam interesse e agendam reuniões automaticamente.
                  </p>
                </div>

                <div className="text-center">
                  <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3 font-satoshi">
                    Qualificação Inteligente de Leads
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-satoshi">
                    Cada conversa é analisada por IA. Identificamos clientes com real potencial de compra 
                    e encaminhamos apenas os leads quentes para sua equipe.
                  </p>
                </div>

                <div className="text-center">
                  <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3 font-satoshi">
                    Integração Total com Seus Sistemas
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-satoshi">
                    Conectamos com seu CRM, calendário e sistemas existentes. 
                    Dados organizados, agendamentos automáticos, relatórios em tempo real.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Transformation Results Section - Updated with white text and summarized description */}
          <section className="py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative">
                <div className="relative p-16 text-center animate-fade-in">
                  <div className="relative z-10">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 font-satoshi leading-tight">
                      A Transformação
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 animate-pulse">
                        Que Você Precisa
                      </span>
                    </h2>
                    
                    <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
                      <p className="text-white font-satoshi text-xl">
                        Aumento médio de 300% na conversão e redução de 80% no tempo de resposta. 
                        É uma revolução no relacionamento com clientes - enquanto concorrentes dormem, você vende.
                      </p>
                      
                      <div className="pt-8">
                        <p className="text-2xl text-blue-300 font-semibold font-satoshi mb-4">
                          O futuro do atendimento chegou.
                        </p>
                        <p className="text-xl text-white font-satoshi">
                          A pergunta é: você vai liderar ou vai ficar para trás?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section - without button */}
          <section className="py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="p-16 animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-satoshi">
                  Pare de Perder Clientes Agora Mesmo
                </h2>
                <p className="text-2xl text-gray-300 mb-12 font-satoshi max-w-4xl mx-auto leading-relaxed">
                  Em 30 dias, você pode ter uma máquina de vendas funcionando 24/7. 
                  Ou pode continuar perdendo oportunidades para quem já saiu na frente.
                </p>
                
                <div className="flex justify-center">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 text-base rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-105 font-satoshi"
                  >
                    Quero Minha Automação Agora
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

export default AutomacaoPage;
