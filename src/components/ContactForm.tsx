
import { supabase } from '../lib/supabaseClient';
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = {
      nome: e.currentTarget.nome.value,
      email: e.currentTarget.email.value,
      telefone: e.currentTarget.telefone.value,
      mensagem: e.currentTarget.mensagem.value,
    };

    console.log('=== INICIANDO ENVIO DO FORMULÁRIO ===');
    console.log('Dados do formulário:', formData);

    try {
      // Salvar no Supabase
      console.log('Salvando no Supabase...');
      const { error: supabaseError } = await supabase
        .from('form_contatos')
        .insert([formData]);

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
          from_name: formData.nome,
          from_email: formData.email,
          phone: formData.telefone,
          message: formData.mensagem,
          to_email: 'visaobusinesstech@gmail.com'
        };

        console.log('Parâmetros do template:', templateParams);
        console.log('Service ID:', 'service_abc123');
        console.log('Template ID:', 'template_okiuiku');
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
        } else {
          console.error('Erro no status do EmailJS:', emailResponse);
          alert('Mensagem salva, mas erro ao enviar email. Entraremos em contato em breve.');
          if (e.currentTarget) {
            e.currentTarget.reset();
          }
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
      }

    } catch (error: any) {
      console.error('=== ERRO GERAL ===');
      console.error('Tipo do erro:', error?.constructor?.name);
      console.error('Mensagem do erro:', error?.message);
      console.error('Erro completo:', error);
      
      // Verificar se é um erro de rede/CORS
      if (error?.message?.includes('fetch') || error?.message?.includes('Failed to fetch')) {
        alert('Erro de conexão. Verifique sua internet e tente novamente. Se o problema persistir, entre em contato pelo WhatsApp.');
      } else {
        alert('Erro inesperado ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.');
      }
    }
  };

  return (
    <section id="contato" className="py-20 scroll-animation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Informações de Contato */}
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">Entre em contato conosco</h2>
            <p className="text-xl text-black mb-8">
              Pronto para transformar seu negócio? <span className="text-black">Vamos conversar!</span>
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <div>
                  <h4 className="text-black font-semibold">Telefone</h4>
                  <p className="text-black">+55 (41) 9 9777-2066</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <div>
                  <h4 className="text-black font-semibold">E-mail</h4>
                  <p className="text-black">visãobusinesstech@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <div>
                  <h4 className="text-black font-semibold">Localização</h4>
                  <p className="text-black">Curitiba (PR) - Brasil</p>
                </div>
              </div>
            </div>
          </div>
          {/* Formulário */}
          <div className="border border-gray-200 rounded-2xl p-10 shadow-xl backdrop-blur-md bg-white/60">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-black font-semibold mb-2">Nome *</label>
                  <input 
                    type="text" 
                    name="nome"
                    placeholder="Seu nome completo"
                    required 
                    className="w-full bg-white/70 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:border-gray-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-black font-semibold mb-2">E-mail *</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="seu@email.com"
                    required 
                    className="w-full bg-white/70 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:border-gray-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-black font-semibold mb-2">Telefone</label>
                  <input 
                    type="text" 
                    name="telefone"
                    placeholder="(11) 99999-9999" 
                    className="w-full bg-white/70 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:border-gray-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Mensagem *</label>
                <textarea 
                  name="mensagem"
                  placeholder="Conte-nos como podemos ajudar com inteligência personalizada nos negócios..."
                  required 
                  rows={5} 
                  defaultValue="Tenho interesse a conhecer ainda mais o VBSolution e solicito uma demonstração"
                  className="w-full bg-white/70 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:border-gray-400 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 bg-[#3b82f6] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:scale-[1.02]"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
