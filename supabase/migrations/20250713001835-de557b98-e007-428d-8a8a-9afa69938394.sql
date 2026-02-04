
-- Criar tabela para armazenar os contatos do formulário
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  service TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir inserção de novos contatos (público)
CREATE POLICY "Anyone can insert contacts" 
  ON public.contacts 
  FOR INSERT 
  WITH CHECK (true);

-- Criar política para que apenas administradores possam visualizar contatos
-- (você pode ajustar isso conforme necessário)
CREATE POLICY "Only authenticated users can view contacts" 
  ON public.contacts 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
