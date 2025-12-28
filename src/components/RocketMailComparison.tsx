
import React from 'react';
import { X, Check } from 'lucide-react';

const RocketMailComparison = () => {
  const comparisons = [
    {
      without: 'Envio manual, um email por vez',
      with: 'Disparo automático de até 10.000 emails'
    },
    {
      without: 'Templates genéricos e pouco atratativos',
      with: 'Biblioteca de templates profissionais responsivos'
    },
    {
      without: 'Sem controle de horários de envio',
      with: 'Agendamento inteligente no momento ideal'
    },
    {
      without: 'Métricas limitadas ou inexistentes',
      with: 'Relatórios completos com análise detalhada'
    },
    {
      without: 'Processo manual consome muito tempo',
      with: 'Automação total economiza 15h por semana'
    },
    {
      without: 'Baixa taxa de conversão',
      with: 'Aumento de até 300% nas conversões'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-satoshi">
            Antes e depois do RocketMail
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-satoshi">
            Veja a transformação que o RocketMail pode trazer para o seu negócio
          </p>
        </div>

        {/* Comparação */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-blue-500/20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Sem RocketMail */}
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-red-400 mb-2 font-satoshi">
                  Sem RocketMail
                </h3>
                <p className="text-gray-400 font-satoshi">
                  Processos manuais e resultados limitados
                </p>
              </div>

              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 bg-red-500/10 rounded-lg border border-red-500/20"
                  >
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-satoshi">{item.without}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Com RocketMail */}
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-2 font-satoshi">
                  Com RocketMail
                </h3>
                <p className="text-gray-400 font-satoshi">
                  Automação inteligente e resultados excepcionais
                </p>
              </div>

              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20"
                  >
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-satoshi">{item.with}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA central */}
          <div className="text-center mt-12 pt-8 border-t border-blue-500/20">
            <p className="text-lg text-gray-300 mb-6 font-satoshi">
              Pronto para fazer essa transformação no seu negócio?
            </p>
            <button 
              onClick={() => {
                const url = 'https://api.whatsapp.com/send/?phone=5541997772066&text=Ol%C3%A1%20tudo%20bem%3F%20Tenho%20interesse%20em%20conhcer%20o%20VBSolution%20CRM%20solicito%20uma%20demonstra%C3%A7%C3%A3o%21&type=phone_number&app_absent=0';
                window.open(url, '_blank');
              }}
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:scale-105 font-satoshi"
            >
              Começar Transformação Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RocketMailComparison;
