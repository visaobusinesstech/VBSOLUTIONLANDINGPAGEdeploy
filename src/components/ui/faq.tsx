"use client";
import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  title?: string;
  items?: FaqItem[];
  supportHref?: string;
};

const defaultItems: FaqItem[] = [
  {
    question: "Como funciona a implementação?",
    answer:
      "Nossa equipe acompanha todo o processo de implementação. Fazemos a configuração inicial, migramos seus dados, treinamos sua equipe e oferecemos suporte contínuo para garantir o sucesso da sua operação.",
  },
  {
    question: "Qual o prazo de implementação?",
    answer:
      "O prazo varia de acordo com a complexidade da sua operação, mas geralmente a implementação completa leva de 1 a 4 semanas. Durante esse período, nossa equipe trabalha lado a lado com você.",
  },
  {
    question: "Vocês oferecem suporte?",
    answer:
      "Sim! Oferecemos suporte completo via WhatsApp, email e videoconferência. Nossa equipe está sempre disponível para ajudar você a extrair o máximo valor da plataforma.",
  },
  {
    question: "Como funciona o modelo de pagamento?",
    answer:
      "Trabalhamos com mensalidade fixa baseada no número de usuários cadastrados. Não há taxa de setup nem taxa por módulo e você pode cancelar quando quiser.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Absolutamente. Utilizamos os mais altos padrões de segurança da indústria, com criptografia end-to-end, backups automáticos e conformidade com LGPD.",
  },
];

export function Faq({ title = "Perguntas Frequentes", items = defaultItems, supportHref = "https://api.whatsapp.com/send/?phone=5541997772066&text=Ol%C3%A1%20tudo%20bem%3F%20Tenho%20interesse%20em%20conhcer%20o%20VBSolution%20CRM%20solicito%20uma%20demonstra%C3%A7%C3%A3o%21&type=phone_number&app_absent=0" }: FaqProps) {
  return (
    <section id="faq" className="pt-6 pb-12 scroll-animation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-center">
          <h2 className="text-5xl font-bold tracking-tight text-black">{title}</h2>
          <p className="mt-3 text-lg text-neutral-600">Tire suas dúvidas sobre o VBSolution</p>
        </div>
        <div className="p-2 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, idx) => (
              <AccordionItem
                value={`q-${idx}`}
                key={idx}
                className="border border-gray-200 mb-3 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-300 hover:-translate-y-[2px]"
              >
                <AccordionTrigger className="px-6 py-5 text-black text-lg font-semibold hover:no-underline [&>svg]:text-[#3b82f6] focus:outline-none focus:ring-0">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-neutral-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 flex justify-center">
            <a
              href={supportHref}
              className="inline-flex items-center gap-2 bg-[#3b82f6] text-white px-5 py-3 rounded-lg font-medium shadow-sm"
            >
              <MessageSquare className="w-5 h-5" />
              Falar com suporte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq
