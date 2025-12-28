
import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black/90 to-blue-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Vamos Conversar?
        </h2>
        
        <p className="text-xl text-gray-200 leading-relaxed mb-12">
          Seu negócio pode ser mais eficiente, inteligente e escalável. Vamos conversar sem compromisso?
          <br />
          Agende uma demonstração e veja o que a Visão Business pode fazer por você.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://wa.me/5541997772066?text=Ol%C3%A1%20tudo%20bem%3F%20Tenho%20interesse%20em%20conhcer%20o%20VBSolution%20CRM%20solicito%20uma%20demonstra%C3%A7%C3%A3o%21"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/40 hover:scale-105 inline-flex items-center justify-center gap-3"
          >
            <Calendar className="w-5 h-5" />
            Agendar uma Reunião
          </a>
          
          <a
            href="https://wa.me/5541997772066?text=Ol%C3%A1%20tudo%20bem%3F%20Tenho%20interesse%20em%20conhcer%20o%20VBSolution%20CRM%20solicito%20uma%20demonstra%C3%A7%C3%A3o%21"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/40 text-blue-400 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-blue-700/30 hover:border-blue-400/60 hover:scale-105 inline-flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com um Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
