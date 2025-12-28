
import React, { useState } from 'react';
import CentralNavbar from '../components/CentralNavbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formDataToSend = {
      nome: e.currentTarget.nome.value,
      email: e.currentTarget.email.value,
      telefone: e.currentTarget.telefone.value,
      mensagem: e.currentTarget.mensagem.value,
    };

    console.log('=== INICIANDO ENVIO DO FORMULÁRIO ===');
    console.log('Dados do formulário:', formDataToSend);

    try {
      // Salvar no Supabase
      console.log('Salvando no Supabase...');
      const { error: supabaseError } = await supabase
        .from('form_contatos')
        .insert([formDataToSend]);

      if (supabaseError) {
        console.error('Erro ao salvar no Supabase:', supabaseError);
        alert('Erro ao salvar: ' + supabaseError.message);
      return;
    }

      console.log('Dados salvos no Supabase com sucesso!');

      // Enviar email via EmailJS
      try {
        console.log('Iniciando EmailJS...');
        
        // Verificar se EmailJS está disponível
        if (typeof emailjs === 'undefined') {
          throw new Error('EmailJS não está carregado');
        }
        
        // Inicializar EmailJS com sua Public Key CORRETA
        emailjs.init('k2i_sTC4juysag5KY');
        console.log('EmailJS inicializado');
        const templateParams = {
          from_name: formDataToSend.nome,
          from_email: formDataToSend.email,
          phone: formDataToSend.telefone,
          message: formDataToSend.mensagem,
          to_email: 'visaobusinesstech@gmail.com'
        };

        console.log('Parâmetros do template:', templateParams);
        console.log('Service ID: service_abc123');
        console.log('Template ID: template_okiuiku');
        console.log('Enviando email...');
        const emailResponse = await emailjs.send(
          'service_abc123', // Seu Service ID já configurado
          'template_okiuiku', // Seu Template ID
          templateParams
        );

        console.log('Resposta do EmailJS:', emailResponse);

        if (emailResponse.status === 200) {
          console.log('Email enviado com sucesso!');
          alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
          if (e.currentTarget) {
            e.currentTarget.reset();
          }
          setFormData({
            nome: '',
            email: '',
            telefone: '',
            mensagem: ''
          });
        } else {
          console.error('Erro no status do EmailJS:', emailResponse);
          alert('Mensagem salva, mas erro ao enviar email. Entraremos em contato em breve.');
          if (e.currentTarget) {
            e.currentTarget.reset();
          }
          setFormData({
            nome: '',
            email: '',
            telefone: '',
            mensagem: ''
          });
        }
      } catch (emailError: any) {
        console.error('=== ERRO NO EMAILJS ===');
        console.error('Tipo do erro:', emailError?.constructor?.name);
        console.error('Mensagem do erro:', emailError?.message);
        console.error('Status do erro:', emailError?.status);
        console.error('Texto do erro:', emailError?.text);
        console.error('Erro completo:', emailError);
        alert('Mensagem salva com sucesso! Entraremos em contato em breve.');
        if (e.currentTarget) {
          e.currentTarget.reset();
        }
      setFormData({
          nome: '',
        email: '',
          telefone: '',
          mensagem: ''
        });
      }

    } catch (error: any) {
      console.error('=== ERRO GERAL ===');
      console.error('Tipo do erro:', error?.constructor?.name);
      console.error('Mensagem do erro:', error?.message);
      console.error('Erro completo:', error);
      alert('Erro inesperado ao enviar mensagem. Tente novamente.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Background image with overlay - matching AboutPage structure */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/d60e93aa-a7a1-463-9128931e1.png')`,
        }}
      />
      
      {/* Dark overlay for readability - matching AboutPage */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-blue-950/70 to-black/90" />
      
      {/* Content */}
      <div className="relative z-10">
        <CentralNavbar />
        
        <main className="pt-20 sm:pt-32 pb-16">
          {/* Hero Section */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
            <div className="text-center animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 font-satoshi">
                Transforme seu negócio com{' '}
                <span className="text-blue-400">tecnologia</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 font-satoshi px-4">
                Com a melhor empresa de tecnologia do Brasil, seu negócio tende á impulsionar por meio da inovação. Atuamos como líder em <span className="text-blue-400">automações inteligentes</span> no país e nos consolidamos como referência em soluções empresariais, com foco em <span className="text-blue-400">resultados reais</span>.
              </p>
            </div>
          </div>

          {/* Contact Form and Info */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
              {/* Informações de Contato */}
              <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-white border border-blue-500/30">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-satoshi">Como nos encontrar</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium font-satoshi text-sm sm:text-base">E-mail</div>
                        <div className="text-gray-300 font-satoshi text-sm sm:text-base">visaobusinesstech@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium font-satoshi text-sm sm:text-base">WhatsApp</div>
                        <div className="text-gray-300 font-satoshi text-sm sm:text-base">+55 41 9777-2066</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium font-satoshi text-sm sm:text-base">Localização</div>
                        <div className="text-gray-300 font-satoshi text-sm sm:text-base">Curitiba, PR - Brasil</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulário */}
              <div className="border border-blue-900/30 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl backdrop-blur-md animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Seu nome completo</label>
                      <input
                        type="text"
                        name="nome"
                        placeholder="Seu nome completo"
                        required
                        className="w-full bg-[#101624] border border-blue-900/40 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm sm:text-base">E-mail *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="seu@email.com"
                        required
                        className="w-full bg-[#101624] border border-blue-900/40 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Telefone</label>
                      <input
                        type="text"
                        name="telefone"
                        placeholder="(11) 99999-9999"
                        className="w-full bg-[#101624] border border-blue-900/40 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Mensagem *</label>
                    <textarea
                      name="mensagem"
                      placeholder="Conte-nos como nossos especialistas em tecnologia podem te ajudar..."
                      required
                      rows={4}
                      className="w-full bg-[#101624] border border-blue-900/40 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:from-blue-800 to-blue-950 transition-all duration-300 shadow-md hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default ContactPage;
