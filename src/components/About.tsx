
import React from 'react';
import { Target, Eye, Heart, Users, Zap, Award, Rocket, Code, BarChart3, Shield, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Democratizar tecnologia avançada, criando soluções personalizadas que geram valor real e transformam processos empresariais.',
      gradient: 'from-blue-500/10 to-blue-600/10',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência em automação inteligente no Brasil, reconhecidos pela inovação e excelência em transformação digital.',
      gradient: 'from-purple-500/10 to-purple-600/10',
      iconColor: 'text-purple-400',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Inovação constante, simplicidade estratégica, automação inteligente, foco no cliente, segurança de dados e empatia em cada projeto.',
      gradient: 'from-green-500/10 to-green-600/10',
      iconColor: 'text-green-400',
      borderColor: 'border-green-500/20'
    }
  ];

  const teamMembers = [
    {
      name: 'João Silva',
      role: 'CEO & Fundador',
      image: '/lovable-uploads/c3937744-0587-41c5-8f65-a9c18303aac8.png',
      description: 'Especialista em automação empresarial com 8 anos de experiência transformando negócios.'
    },
    {
      name: 'Maria Santos',
      role: 'CTO',
      image: '/lovable-uploads/d18934ba-a66c-46b9-8724-7a32f8012fab.png',
      description: 'Desenvolvedora sênior focada em soluções tecnológicas inovadoras e escaláveis.'
    },
    {
      name: 'Pedro Costa',
      role: 'Head de Vendas',
      image: '/lovable-uploads/e4519b82-3994-40a9-98c7-10a439b89593.png',
      description: 'Especialista em relacionamento e estratégias comerciais B2B de alto impacto.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-black to-gray-900 font-inter relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tecnologia com propósito.{' '}
            <span className="text-blue-400">Inovação com sofisticação.</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A Visão Business nasceu da união entre excelência técnica, visão estratégica 
            e foco em resultado. Desenvolvemos soluções inteligentes para empresas B2B 
            que buscam escalar com eficiência, simplicidade e impacto real.
          </p>
        </div>

        {/* Nossa Essência - Redesigned */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-inter">
            Nossa <span className="text-blue-400">Essência</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`relative p-6 h-full bg-gradient-to-br ${value.gradient} backdrop-blur-sm rounded-xl border ${value.borderColor} hover:border-opacity-60 transition-all duration-500 hover:scale-105 hover:translate-y-[-4px]`}>
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 border ${value.borderColor}`}>
                      <value.icon className={`w-8 h-8 ${value.iconColor} group-hover:rotate-6 transition-all duration-300`} />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 font-inter">
                    {value.title}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-sm">
                    {value.description}
                  </p>

                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-${value.iconColor.split('-')[1]}-400 to-transparent animate-pulse`}></div>
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-${value.iconColor.split('-')[1]}-400 to-transparent animate-pulse`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nossa Equipe - Redesigned with standardized cards */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-inter">
            Nossa <span className="text-blue-400">Equipe</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 hover:translate-y-[-4px] h-64 flex flex-col">
                  {/* Image container - amplified size */}
                  <div className="relative mb-4 flex justify-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-0.5">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300 font-inter">
                        {member.name}
                      </h4>
                      
                      <p className="text-blue-400 font-semibold mb-3 text-xs">
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-gray-300 text-xs leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {member.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
