"use client";
import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare, Plus } from "lucide-react";

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
      "Fazemos a configuração inicial, migramos seus dados, treinamos sua equipe e acompanhamos o início da operação para garantir tração.",
  },
  {
    question: "Qual o prazo de implementação?",
    answer:
      "O prazo varia de acordo com a complexidade da sua operação, mas geralmente a implementação completa leva de 1 a 4 semanas. Durante esse período, nossa equipe trabalha lado a lado com você.",
  },
  {
    question: "Vocês oferecem suporte?",
    answer:
      "Sim. Suporte 100% humanizado via Meet e grupo VIP no WhatsApp. Estamos disponíveis para tirar dúvidas e orientar boas práticas.",
  },
  {
    question: "Como funciona o modelo de pagamento?",
    answer:
      "Trabalhamos com mensalidade fixa baseada no número de usuários cadastrados. Não há taxa de setup nem taxa por módulo e você pode cancelar quando quiser.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Sim. Criptografia em trânsito e em repouso, backups automáticos e conformidade com a LGPD.",
  },
];

export function Faq({ title = "Perguntas Frequentes", items = defaultItems, supportHref = "https://api.whatsapp.com/send/?phone=5541997772066&text=Ol%C3%A1%20tudo%20bem%3F%20Tenho%20interesse%20em%20conhcer%20o%20VBSolution%20CRM%20solicito%20uma%20demonstra%C3%A7%C3%A3o%21&type=phone_number&app_absent=0" }: FaqProps) {
  return (
    <section id="faq" className="pt-6 pb-12 scroll-animation">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-neutral-100">{title}</h2>
          <p className="mt-2 text-sm md:text-base text-neutral-400">Tire suas dúvidas sobre o VBSolution</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div>
            <div className="bg-white text-neutral-900 rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
              <Accordion type="single" collapsible className="w-full divide-y divide-neutral-200">
                {items.map((item, idx) => (
                  <AccordionItem value={`q-${idx}`} key={idx} className="m-0 border-none">
                    <AccordionTrigger className="group px-5 py-4 text-neutral-900 text-black text-base font-medium hover:no-underline hover:bg-neutral-50 focus:outline-none focus:ring-0">
                      <span className="flex items-center gap-3 text-neutral-900 text-black">
                        <Plus className="size-4 text-neutral-500 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-4 text-neutral-700">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="mt-6 flex justify-center">
              <a
                href={supportHref}
                className="inline-flex items-center gap-2 px-6 h-11 rounded-lg font-medium transition-colors bg-[#0f2b8f] text-white hover:bg-[#1d4ed8]"
              >
                <MessageSquare className="w-5 h-5" />
                Falar com suporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq
