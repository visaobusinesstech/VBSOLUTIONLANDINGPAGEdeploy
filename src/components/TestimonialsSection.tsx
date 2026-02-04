
import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendes",
    company: "NeoBiz Tech",
    text: "A Visão Business transformou completamente nossa operação. O RocketMail aumentou nossas conversões em 300% e automatizou todo nosso funil de vendas."
  },
  {
    id: 2,
    name: "Marina Silva",
    company: "Lumera Solutions",
    text: "As automações desenvolvidas pela equipe nos pouparam 20 horas semanais. Investimento que se pagou em menos de dois meses de implementação."
  },
  {
    id: 3,
    name: "João Costa",
    company: "Zycore AI",
    text: "Dashboard de análise de dados incrível. Agora tomamos decisões baseadas em dados reais e precisos, com visualizações que facilitam nossa estratégia."
  },
  {
    id: 4,
    name: "Ana Rodrigues",
    company: "TechFlow Pro",
    text: "A integração foi perfeita e o suporte excepcional. Nossa produtividade aumentou significativamente desde a implementação das soluções da Visão Business."
  },
  {
    id: 5,
    name: "Ricardo Santos",
    company: "Innovex Corp",
    text: "Resultados impressionantes em pouco tempo. As automações criadas superaram nossas expectativas e trouxeram um ROI fantástico para nosso negócio."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black/40 to-gray-900/60 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            O que nossos <span className="text-blue-400">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Histórias reais de transformação e sucesso com nossas soluções
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="bg-white/5 backdrop-blur-md border border-blue-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:bg-white/10 hover:border-blue-400/40 transition-all duration-500">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-blue-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 font-light italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div className="border-t border-blue-500/20 pt-6">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-blue-300 font-medium">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 border-2 border-blue-500/50 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-110 transition-all duration-300 backdrop-blur-sm z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 border-2 border-blue-500/50 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-110 transition-all duration-300 backdrop-blur-sm z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 8000);
                }}
                className="transition-all duration-300 hover:scale-125"
              >
                {index === currentIndex ? (
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                ) : (
                  <div className="w-3 h-3 bg-gray-500 rounded-full hover:bg-blue-400 transition-colors duration-300"></div>
                )}
              </button>
            ))}
          </div>

          {/* Progress indicator */}
          {isAutoPlaying && (
            <div className="mt-6 w-full bg-gray-700 rounded-full h-1 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-100 ease-linear"
                style={{
                  width: `${((Date.now() % 4000) / 4000) * 100}%`,
                  animation: 'progress 4s linear infinite'
                }}
              ></div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
