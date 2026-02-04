
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Circle, CircleDot } from 'lucide-react';

interface DemoImage {
  src: string;
  title: string;
  description: string;
}

interface RocketMailGalleryProps {
  variant?: 'homepage' | 'page';
}

const RocketMailGallery = ({ variant = 'homepage' }: RocketMailGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const demoImages: DemoImage[] = [
    {
      src: '/lovable-uploads/c524893a-afe1-4205-bee8-c5f6eb8f950c.png',
      title: 'Dashboard Principal',
      description: 'Visão completa das suas campanhas e métricas de desempenho'
    },
    {
      src: '/lovable-uploads/7b612910-84e8-4732-9682-2638b5425f4a.png',
      title: 'Gestão de Contatos',
      description: 'Organize e gerencie sua base de leads de forma eficiente'
    },
    {
      src: '/lovable-uploads/9f60fc44-3568-4bfc-93f1-1a99dd6fb834.png',
      title: 'Agendamento Inteligente',
      description: 'Configure campanhas para envio automático no momento ideal'
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % demoImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, demoImages.length]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % demoImages.length);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + demoImages.length) % demoImages.length);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToImage = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const containerClass = variant === 'homepage' 
    ? 'max-w-lg mx-auto' 
    : 'max-w-4xl mx-auto';

  return (
    <div className={`${containerClass} scroll-animation`}>
      <div className="relative group">
        {/* Main carousel container - sem borda ou fundo azul */}
        <div className="p-6 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:animate-pulse bg-transparent">
          
          {/* Image Display with 3D effect */}
          <div className="relative mb-6 overflow-hidden">
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative">
              <div 
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%) rotateY(${currentIndex * 2}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {demoImages.map((image, index) => (
                  <div 
                    key={index}
                    className="min-w-full h-full flex items-center justify-center relative"
                    style={{
                      transform: `rotateY(${index === currentIndex ? 0 : 5}deg)`,
                      transformOrigin: 'center'
                    }}
                  >
                    <img 
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-contain bg-white transition-transform duration-500"
                      style={{
                        filter: index === currentIndex ? 'none' : 'brightness(0.7)'
                      }}
                    />
                    
                    {/* Scanner effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse"></div>
                      <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 border-2 border-blue-500/50 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 border-2 border-blue-500/50 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Image Info */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2 transition-all duration-300">
              {demoImages[currentIndex].title}
            </h3>
            <p className="text-gray-300 text-sm transition-all duration-300">
              {demoImages[currentIndex].description}
            </p>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3">
            {demoImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className="transition-all duration-300 hover:scale-125 group"
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
            <div className="mt-4 w-full bg-gray-700 rounded-full h-1 overflow-hidden">
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
    </div>
  );
};

export default RocketMailGallery;
