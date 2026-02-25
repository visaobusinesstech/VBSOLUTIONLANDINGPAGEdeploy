 "use client";
 import { useRef, useState } from "react";
 import { motion } from "motion/react";
 import { cn } from "@/lib/utils";
 import { Code2 } from "lucide-react";
 import { Button as MovingBorderButton } from "@/components/ui/moving-border";
 
 type Periodo = "mensal" | "semestral" | "anual";
 
 type Plan = {
   name: string;
   description: string;
   buttonText: string;
   buttonVariant: "default" | "outline";
   badge?: "Melhor preço" | "Mais vendido";
   includes: string[];
   prices: Record<Periodo, number>;
 };
 
 const plans: Plan[] = [
   {
     name: "Starter",
     description:
       "Para quem está começando, com recursos essenciais e limites ideais para pequenas equipes.",
     buttonText: "COMECE AGORA",
     buttonVariant: "outline",
     includes: [
       "Criação e gerenciamento de negócios e produtos.",
       "Gerenciamento de até 10 mil leads com controle de tags.",
       "Cadastro de até 3 usuários da sua empresa.",
       "Automação para interagir com leads ilimitado.",
       "Multiatendimento com até 2 conexões (WhatsApp).",
       "2 integrações com Webhooks para conectar outras ferramentas.",
       "Dashboards de negócios das pipelines.",
     ],
     prices: { mensal: 147, semestral: 112, anual: 91 },
   },
   {
     name: "Essencial",
     description:
       "Funcionalidades avançadas e limites ampliados para empresas em crescimento constante.",
     buttonText: "COMECE AGORA",
     buttonVariant: "default",
     badge: "Melhor preço",
     includes: [
       "Criação e gerenciamento de pipeline ilimitado.",
       "Criação e gerenciamento de negócios e produtos.",
       "Gerenciamento de até 100 mil leads com controle de tags.",
       "Cadastro de 15 usuários na empresa.",
       "Automação para interagir com leads ilimitado.",
       "Multiatendimento com até 10 conexões (WhatsApp).",
       "15 integrações com Webhooks para conectar outras ferramentas.",
       "Dashboards de negócios das pipelines.",
       "Acesso à API para integração com outras ferramentas.",
     ],
     prices: { mensal: 460, semestral: 402, anual: 344 },
   },
   {
     name: "Pro",
     description:
       "Para grandes equipes e operações que precisam de recursos ilimitados e máxima flexibilidade.",
     buttonText: "COMECE AGORA",
     buttonVariant: "outline",
     badge: "Mais vendido",
     includes: [
       "Criação e gerenciamento de pipelines ilimitadas.",
       "Gerenciamento ilimitado de leads com controle de tags.",
       "Criação e gerenciamento de negócios e produtos.",
       "Cadastro ilimitado de usuários na empresa.",
       "Automações ilimitadas para otimizar interações com leads.",
       "Multiatendimento com conexões ilimitadas (WhatsApp).",
       "Integrações com Webhooks ilimitadas para conectar outras ferramentas.",
       "Dashboards de negócios das pipelines.",
       "Acesso à API para integração com outras ferramentas.",
     ],
     prices: { mensal: 807, semestral: 750, anual: 692 },
   },
 ];
 
 const PricingSwitch = ({ onSwitch }: { onSwitch: (value: Periodo) => void }) => {
   const [selected, setSelected] = useState<Periodo>("anual");
   const handleSwitch = (value: Periodo) => {
     setSelected(value);
     onSwitch(value);
   };
 
   const tabs: { key: Periodo; label: string }[] = [
     { key: "anual", label: "Anual" },
     { key: "semestral", label: "Semestral" },
     { key: "mensal", label: "Mensal" },
   ];
 
   return (
     <div className="flex justify-center">
       <div className="relative mx-auto flex w-fit rounded-full bg-[#0b0f1a] border border-white/15 p-1 shadow-inner">
         {tabs.map((t) => (
           <button
             key={t.key}
             onClick={() => handleSwitch(t.key)}
             className={cn(
               "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
               selected === t.key ? "text-white" : "text-white/70"
             )}
           >
             {selected === t.key && (
               <motion.span
                 layoutId={"switch-3way"}
                 className="absolute top-0 left-0 h-10 w-full rounded-full border border-blue-400/40 shadow-sm shadow-blue-500/30 bg-gradient-to-t from-[#4F8BFF] to-[#2F6BFF]"
                 transition={{ type: "spring", stiffness: 500, damping: 30 }}
               />
             )}
             <span className="relative">{t.label}</span>
           </button>
         ))}
       </div>
     </div>
   );
 };
 
 export default function PricingSection6() {
   const [periodo, setPeriodo] = useState<Periodo>("anual");
   const pricingRef = useRef<HTMLDivElement>(null);
 
   return (
     <section
       ref={pricingRef}
       className="relative w-full overflow-x-hidden py-8 md:py-14"
       style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
     >
       <div className="mx-auto max-w-6xl px-4 sm:px-6">
         <div className="rounded-3xl bg-white text-neutral-900 ring-1 ring-black/5 shadow-sm p-6 md:p-8">
           <PricingSwitch onSwitch={setPeriodo} />
 
           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {plans.map((plan) => {
               const price = plan.prices[periodo];
               const baseMensal = plan.prices["mensal"];
               const isDiscounted = periodo !== "mensal";
               const isStarter = plan.name === "Starter";
               const isEssencial = plan.name === "Essencial";
               const isPro = plan.name === "Pro";
 
               const highlightContent = (text: string) => {
                 let t = text.replace(/membros?/gi, "usuários");
                 const parts: Array<{ key: number; node: React.ReactNode }> = [];
                 let key = 0;
                 const tokens = t.split(/(\bilimitad[oa]s?\b|\blimitações\b|\busuários\b|\b\d+(?:\.\d+)?\b)/gi);
                 for (const token of tokens) {
                   if (!token) continue;
                   if (/^\bilimitad[oa]s?\b$/i.test(token) || /^\blimitações\b$/i.test(token) || /^\busuários\b$/i.test(token) || /^\d+(?:\.\d+)?$/.test(token)) {
                     parts.push({
                       key: key++,
                       node: <span className="text-[#2F6BFF]">{token}</span>,
                     });
                   } else {
                    parts.push({ key: key++, node: <span className="text-black">{token}</span> });
                   }
                 }
                 return parts.map(p => <span key={p.key}>{p.node}</span>);
               };
 
               return (
                 <div
                   key={plan.name}
                    className="rounded-2xl p-0 overflow-visible bg-transparent"
                 >
                    {/* Header box: nome do plano + descrição */}
                    <div
                      className={cn(
                        "px-6 py-5 rounded-md border-2",
                        isPro
                          ? "bg-[#0b0f1a] text-white border-[#0b0f1a]"
                          : "bg-white/85 text-black",
                        isEssencial && !isPro ? "border-[#2F6BFF]" : "",
                        isStarter && !isPro ? "border-[#E0E3EA]" : "",
                        !isEssencial && !isStarter && !isPro ? "border-[#0b0f1a]/20" : "",
                        !isPro && "bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:12px_12px]"
                      )}
                    >
                      <div className="flex items-start justify-between">
                       <div>
                          <div
                            className={cn(
                              "inline-flex items-center rounded-md border-2 px-3 py-2",
                              isPro
                                ? "border-white/30 bg-black text-white"
                                : isEssencial
                                ? "border-[#2F6BFF] bg-white/85 text-black"
                                : isStarter
                                ? "border-[#E0E3EA] bg-white/85 text-black"
                                : "border-[#0b0f1a]/20 bg-white/85 text-black"
                            )}
                          >
                            <h3 className={cn("text-base font-semibold tracking-tight", isPro ? "text-white" : "text-black")}>{plan.name}</h3>
                          </div>
                          <p className={cn("text-sm mt-3 max-w-xs", isPro ? "text-white/70" : "text-black")}>
                            {plan.description}
                          </p>
                       </div>
                      {plan.badge && (
                          <button
                            type="button"
                            aria-label={plan.badge}
                            className={cn(
                              "relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium shadow-sm cursor-pointer transition-colors",
                              plan.badge === "Melhor preço"
                                ? "bg-[#2F6BFF] hover:bg-[#2860f0] text-white border-[#2F6BFF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2F6BFF]"
                                : "bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7C3AED]"
                            )}
                          >
                            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                              <span
                                className={cn(
                                  "absolute inline-flex h-full w-full rounded-full",
                                  plan.badge === "Melhor preço"
                                    ? "animate-ping bg-[#A5C4FF]/60"
                                    : "animate-ping bg-[#C4A5FF]/60"
                                )}
                              />
                              <span className="relative inline-flex h-2.5 w-2.5 rounded-full ring-2 ring-white/90" />
                            </span>
                            <span className="leading-none">{plan.badge}</span>
                          </button>
                      )}
                     </div>
                   </div>
                    {/* Body box: preço + benefícios + CTA (borda termina após o botão) */}
                    <div
                      className={cn(
                        "mt-3 px-6 pt-5 pb-6 rounded-md border-2 bg-white text-black",
                        isEssencial ? "border-[#2F6BFF]" : isStarter ? "border-[#E0E3EA]" : "border-[#0b0f1a]/20"
                      )}
                    >
                      <div>
                        {isDiscounted && (
                          <div className="text-xs text-neutral-500 line-through">
                            R${baseMensal.toFixed(2)}
                          </div>
                        )}
                        <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
                          R${price}
                          <span className="text-sm ml-1 text-neutral-600">/por mês</span>
                        </div>
                      </div>

                      <div className="mt-5">
                        <ul className={cn("text-sm", "text-black", isPro ? "divide-y divide-neutral-200" : "")}>
                          {(!isEssencial ? plan.includes : plan.includes.slice(0, plan.includes.length - 2)).map((inc, idx) => (
                            <li key={idx} className={cn("flex items-start gap-2", isPro ? "py-2 first:pt-0 last:pb-0" : "py-1")}>
                              <Code2 className="mt-0.5 h-4 w-4 text-[#2F6BFF]" />
                              <span>{highlightContent(inc)}</span>
                            </li>
                          ))}
                        </ul>

                        {isEssencial && (
                          <div className="mt-4 space-y-2">
                            <div className="rounded-xl border border-dashed border-[#2F6BFF] bg-[#2F6BFF]/5 px-3 py-2 text-sm text-black">
                              Dashboards de negócios das pipelines.
                            </div>
                            <div className="rounded-xl border border-dashed border-[#2F6BFF] bg-[#2F6BFF]/5 px-3 py-2 text-sm text-black">
                              Acesso à API para integração com outras ferramentas.
                            </div>
                          </div>
                        )}
                      </div>

                      <CTAButton
                        href="#"
                        variant={isEssencial ? "primary" : isPro ? "purple" : "neutral"}
                      >
                        {plan.buttonText}
                      </CTAButton>
                    </div>
                 </div>
               );
             })}
           </div>
         </div>
       </div>
     </section>
   );
 }

function CTAButton({
  href,
  children,
  variant = "neutral",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "purple" | "neutral";
}) {
  const common = {
    containerClassName: "w-full h-11 p-[1px] mt-6",
    className:
      "w-full h-11 text-sm font-semibold rounded-lg border backdrop-blur-lg",
    borderRadius: "0.75rem",
  } as const;

  if (variant === "primary") {
    return (
      <MovingBorderButton
        as="a"
        href={href}
        {...common}
        className={cn(
          common.className,
          "bg-gradient-to-r from-[#2F6BFF] to-[#5B8CFF] border-[#2F6BFF] text-white"
        )}
        borderClassName="bg-[radial-gradient(#60a5fa_40%,transparent_60%)]"
      >
        {children}
      </MovingBorderButton>
    );
  }

  if (variant === "purple") {
    return (
      <MovingBorderButton
        as="a"
        href={href}
        {...common}
        className={cn(
          common.className,
          "bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] border-[#7C3AED] text-white"
        )}
        borderClassName="bg-[radial-gradient(#a78bfa_40%,transparent_60%)]"
      >
        {children}
      </MovingBorderButton>
    );
  }

  return (
    <MovingBorderButton
      as="a"
      href={href}
      {...common}
      className={cn(
        common.className,
        "bg-white text-black border-neutral-200"
      )}
      borderClassName="bg-[radial-gradient(#93c5fd_40%,transparent_60%)]"
    >
      {children}
    </MovingBorderButton>
  );
}
