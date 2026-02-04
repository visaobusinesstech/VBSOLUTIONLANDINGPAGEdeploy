
import { useState } from 'react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      console.log('=== INICIANDO ENVIO DO FORMULÁRIO ===');
      console.log('Dados do formulário:', formData);
      
      // Salvar no Supabase primeiro
      console.log('Salvando no banco de dados...');
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            phone: formData.phone || null,
            service: formData.service || null,
            message: formData.message
          }
        ]);

      if (error) {
        console.error('Erro ao salvar no banco:', error);
        toast.error('Erro ao salvar mensagem. Tente novamente.');
        return { success: false };
      }

      console.log('Dados salvos no banco com sucesso:', data);
      
      // Enviar email via Edge Function
      console.log('Enviando email via Edge Function...');
      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      console.log('Resposta da Edge Function:', { emailData, emailError });

      if (emailError) {
        console.error('Erro na Edge Function:', emailError);
        toast.error(`Erro ao enviar email: ${emailError.message}`);
        return { success: false };
      }

      if (emailData?.error) {
        console.error('Erro retornado pela função:', emailData.error);
        toast.error(`Erro no envio: ${emailData.error}`);
        return { success: false };
      }

      console.log('Email enviado com sucesso!', emailData);
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      
      return { success: true };
    } catch (error) {
      console.error('=== ERRO GERAL NO ENVIO ===');
      console.error('Tipo do erro:', error?.constructor?.name);
      console.error('Mensagem do erro:', error?.message);
      console.error('Erro completo:', error);
      
      toast.error('Erro inesperado ao enviar mensagem. Tente novamente.');
      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting
  };
};
