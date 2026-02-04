
import React from 'react';
import { Monitor, Smartphone, Database, Cpu } from 'lucide-react';

const TechVisuals = () => {
  return (
    <section className="py-20 bg-bg-dark/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tecnologia <span className="text-blue-400 glow-text">Avançada</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Utilizamos as mais modernas tecnologias para criar soluções inovadoras
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="group bg-bg-dark/30 border border-blue-500/20 rounded-2xl p-8 hover:bg-bg-dark/50 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm text-center">
            <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Monitor className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
            <p className="text-gray-400">Aplicações web modernas e responsivas</p>
          </div>

          <div className="group bg-bg-dark/30 border border-blue-500/20 rounded-2xl p-8 hover:bg-bg-dark/50 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm text-center">
            <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Mobile First</h3>
            <p className="text-gray-400">Design otimizado para dispositivos móveis</p>
          </div>

          <div className="group bg-bg-dark/30 border border-blue-500/20 rounded-2xl p-8 hover:bg-bg-dark/50 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm text-center">
            <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Big Data</h3>
            <p className="text-gray-400">Análise avançada de dados e insights</p>
          </div>

          <div className="group bg-bg-dark/30 border border-blue-500/20 rounded-2xl p-8 hover:bg-bg-dark/50 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm text-center">
            <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Cpu className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">AI & Automation</h3>
            <p className="text-gray-400">Inteligência artificial e automação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechVisuals;
