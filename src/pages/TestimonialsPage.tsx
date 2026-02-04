
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Star, Quote, TrendingUp, Zap, Target } from 'lucide-react';

const TestimonialsPage = () => {
  // Scroll animation effect
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

  const testimonials = [
    {
      name: 'João Silva',
      position: 'CEO',
      company: 'TechSolutions',
      avatar: '👨‍💼',
      text: 'A Visão Business transformou nosso processo comercial com automações inteligentes e relatórios precisos. Aumentamos nossa eficiência em 200% e reduzimos custos operacionais significativamente. Resultados reais em menos de 30 dias!',
      rating: 5,
      results: 'Eficiência +200%',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Maria Santos',
      position: 'Diretora de Marketing',
      company: 'InnovaGroup',
      avatar: '👩‍💼',
      text: 'O Rocket Mail revolucionou nossa estratégia de e-mail marketing. A ferramenta é intuitiva, os relatórios são detalhados e o suporte é excepcional. Aumentamos nossa taxa de conversão em 300% em apenas 60 dias.',
      rating: 5,
      results: 'Conversão +300%',
      icon: <Target className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Carlos Oliveira',
      position: 'Fundador',
      company: 'StartupTech',
      avatar: '👨‍🚀',
      text: 'Dashboards incríveis que realmente fazem diferença na tomada de decisões. A equipe da Visão Business entende de negócio e entrega soluções que funcionam. Nosso ROI melhorou drasticamente.',
      rating: 5,
      results: 'ROI +180%',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Ana Costa',
      position: 'Gerente Comercial',
      company: 'SalesForce Pro',
      avatar: '👩‍💻',
      text: 'Nosso site novo gerou 5x mais leads qualificados comparado ao anterior. Design impecável, performance excepcional e integração perfeita com nosso CRM. Investimento que se pagou rapidamente.',
      rating: 5,
      results: 'Leads +500%',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Roberto Ferreira',
      position: 'Diretor de Operações',
      company: 'LogiSmart',
      avatar: '👨‍🔧',
      text: 'As automações de WhatsApp e CRM mudaram completamente nossa operação. Atendimento 24h, leads qualificados automaticamente e equipe focada em vendas. Crescimento sustentável e escalável.',
      rating: 5,
      results: 'Produtividade +250%',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Fernanda Lima',
      position: 'Head de Growth',
      company: 'ScaleUp',
      avatar: '👩‍🎯',
      text: 'A integração completa dos sistemas permitiu uma visão 360° do nosso funil de vendas. Automações inteligentes que realmente entendem o comportamento do cliente. Crescimento exponencial e sustentável.',
      rating: 5,
      results: 'Growth +400%',
      icon: <Target className="w-5 h-5" />,
      color: 'from-teal-500 to-green-500'
    }
  ];

  const stats = [
    { value: '200+', label: 'Projetos Entregues', color: 'text-blue-400' },
    { value: '99%', label: 'Taxa de Satisfação', color: 'text-green-400' },
    { value: '280%', label: 'ROI Médio dos Clientes', color: 'text-yellow-400' },
    { value: '24/7', label: 'Suporte Técnico', color: 'text-purple-400' }
  ];

  return (
    <div className="min-h-screen tech-background w-full">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Confiança se constrói com{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent glow-text">resultados</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empresas que cresceram com nossas soluções tecnológicas e 
              transformaram seus resultados de forma mensurável.
            </p>
          </div>

          {/* Animated Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16 scroll-animation">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-bg-dark/30 border border-blue-500/30 rounded-2xl p-6 text-center hover:bg-bg-dark/50 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm group"
              >
                <div className={`text-4xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Dynamic Testimonials Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 scroll-animation">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-bg-dark/50 border border-blue-500/20 p-8 rounded-3xl hover:bg-bg-dark/70 hover:border-blue-400/40 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm relative group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Quote Icon with animation */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
                </div>

                {/* Rating with animation */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-300 mb-6 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                  "{testimonial.text}"
                </blockquote>

                {/* Results Badge with icon */}
                <div className={`inline-flex items-center bg-gradient-to-r ${testimonial.color} bg-opacity-20 border border-current border-opacity-30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  {testimonial.icon}
                  <span className="ml-2">📈 {testimonial.results}</span>
                </div>

                {/* Author with enhanced styling */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-blue-400">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center bg-bg-dark/50 border border-blue-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm scroll-animation relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-pulse-slow"></div>
            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-dotted border-blue-400/30 animate-spin-slow"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-dotted border-purple-400/30 animate-bounce"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Quer ser nosso próximo <span className="text-blue-400 glow-text">case de sucesso</span>?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Junte-se às empresas que já transformaram seus resultados com 
                nossas soluções tecnológicas inteligentes.
              </p>
              <button className="schedule-button flex items-center justify-center gap-3 group mx-auto">
                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Agende uma conversa estratégica
                <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TestimonialsPage;
