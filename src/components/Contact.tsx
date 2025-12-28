import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const { submitForm, isSubmitting } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    const result = await submitForm(formData);
    
    if (result.success) {
      // Limpar formulário após envio bem-sucedido
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const team = [
    {
      name: 'Leonardo Sena',
      position: 'CEO',
      email: 'visaobusinesstech@gmail.com',
      photo: '👨‍💼'
    },
    {
      name: 'Davi Resende',
      position: 'CTO',
      email: 'visaobusinesstech@gmail.com',
      photo: '👨‍💻'
    },
    {
      name: 'Nicolas Fragoso',
      position: 'Head de Produtos',
      email: 'visaobusinesstech@gmail.com',
      photo: '👨‍🚀'
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      value: "+55 41 9777-2066",
      href: "tel:+5541977720066"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      value: "visaobusinesstech@gmail.com",
      href: "mailto:visaobusinesstech@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      value: "Curitiba, PR - Brasil",
      href: null
    }
  ];

  return (
    <section 
      id="contato" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/lovable-uploads/42525ce4-c0e2-4575-ad48-39a43cf1d3bb.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-satoshi">
            Vamos criar algo{' '}
            <span className="text-blue-400 glow-text">extraordinário juntos?</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-satoshi">
            Preencha o formulário ou fale conosco pelo WhatsApp. Estamos prontos 
            para levar sua empresa ao próximo nível.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-white/10 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2 font-satoshi">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-blue-500/30 bg-white/10 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors backdrop-blur-sm placeholder-gray-400 font-satoshi disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2 font-satoshi">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-blue-500/30 bg-white/10 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors backdrop-blur-sm placeholder-gray-400 font-satoshi disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-white mb-2 font-satoshi">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-blue-500/30 bg-white/10 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors backdrop-blur-sm placeholder-gray-400 font-satoshi disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-white mb-2 font-satoshi">
                      Serviço de interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-blue-500/30 bg-white/10 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors backdrop-blur-sm font-satoshi disabled:opacity-50"
                    >
                      <option value="" className="bg-gray-800">Selecione um serviço</option>
                      <option value="rocket-mail" className="bg-gray-800">Rocket Mail</option>
                      <option value="analise-dados" className="bg-gray-800">Análise de Dados</option>
                      <option value="automacoes" className="bg-gray-800">Automações</option>
                      <option value="sites" className="bg-gray-800">Criação de Sites</option>
                      <option value="consultoria" className="bg-gray-800">Consultoria Geral</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2 font-satoshi">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-blue-500/30 bg-white/10 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none backdrop-blur-sm placeholder-gray-400 font-satoshi disabled:opacity-50"
                    placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 font-satoshi disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info and Team */}
          <div className="space-y-8 animate-slide-up">
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 font-satoshi">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center text-blue-400">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white font-satoshi">{info.title}</h4>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-gray-300 hover:text-blue-400 transition-colors font-satoshi"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 font-satoshi">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Cards */}
            <div className="bg-white/10 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 font-satoshi">
                Nossa Equipe
              </h3>
              
              <div className="space-y-4">
                {team.map((member, index) => (
                  <div 
                    key={member.name}
                    className="bg-white/10 border border-blue-500/20 p-6 rounded-xl hover:bg-white/20 hover:border-blue-500/40 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center text-2xl">
                        {member.photo}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg font-satoshi">
                          {member.name}
                        </h4>
                        <p className="text-blue-400 font-medium font-satoshi">
                          {member.position}
                        </p>
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-satoshi"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-blue-500/30 text-white p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-4 font-satoshi">
                Precisa falar conosco agora?
              </h4>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 font-satoshi">
                💬 Chame no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
