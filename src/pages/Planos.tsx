import React, { useMemo, useState, useRef, useLayoutEffect } from "react";
import CentralNavbar from "../components/CentralNavbar";
import Footer from "../components/Footer";
import { Code } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { PricingTable, PricingPlan, PricingFeature } from "@/components/ui/pricing-table";
import empresa9 from "@/fotos/empresas/image-removebg-preview (9).png";
import empresa15 from "@/fotos/empresas/image-removebg-preview (15).png";
import empresa11 from "@/fotos/empresas/image-removebg-preview (11).png";
import empresa12 from "@/fotos/empresas/image-removebg-preview (12).png";
import empresa16 from "@/fotos/empresas/image-removebg-preview (16).png";
import empresa14 from "@/fotos/empresas/image-removebg-preview (14).png";
// import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";

const logosRow = [
  { src: empresa9, alt: "Empresa 1" },
  { src: empresa15, alt: "Empresa 2" },
  { src: empresa11, alt: "Empresa 3" },
  { src: empresa12, alt: "Empresa 4" },
  { src: empresa16, alt: "Empresa 5" },
  { src: empresa14, alt: "Empresa 6" },
];

type Cycle = "mensal" | "semestral" | "anual";

const formatPrice = (v: number) => `R$${v}/por mês`;

export default function Planos() {
  const [cycle, setCycle] = useState<Cycle>("anual");
  const containerRef = useRef<HTMLDivElement>(null);
  const annualRef = useRef<HTMLButtonElement>(null);
  const semestralRef = useRef<HTMLButtonElement>(null);
  const mensalRef = useRef<HTMLButtonElement>(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  const cycleToRef = { anual: annualRef, semestral: semestralRef, mensal: mensalRef } as const;

  useLayoutEffect(() => {
    const btn = cycleToRef[cycle].current;
    const container = containerRef.current;
    if (!btn || !container) return;
    const cRect = container.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();
    setPill({
      left: bRect.left - cRect.left,
      width: bRect.width,
    });
  }, [cycle]);

  const emphasize = (text: string) => {
    const regex =
      /(\b(?:ilimitad[oa]s?|usuários?|membros?|conexões?|leads?)\b|\d+\s?mil|\d+)/gi;
    const parts = text.split(regex);
    return parts.map((part, i) =>
      part && regex.test(part) ? (
        <span key={i} className="font-semibold">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  const priceParts = (v: number) => ({
    main: `R$${v}`,
    suffix: "/por mês",
  });

  const prices = useMemo(() => {
    return {
      starter: cycle === "mensal" ? 147 : cycle === "semestral" ? 112 : 91,
      essencial: cycle === "mensal" ? 460 : cycle === "semestral" ? 402 : 344,
      pro: cycle === "mensal" ? 807 : cycle === "semestral" ? 750 : 692,
    };
  }, [cycle]);

  const newFeatures: PricingFeature[] = [
    {
      name: "Criação e gerenciamento de negócios e produtos",
      values: { starter: true, essencial: true, pro: true }
    },
    {
      name: "E-mail Marketing",
      values: { starter: "Ilimitado", essencial: "Ilimitado", pro: "Ilimitado" }
    },
    {
      name: "Gerenciamento de leads com controle de tags",
      values: { starter: "Até 10 mil", essencial: "Até 100 mil", pro: "Ilimitado" }
    },
    {
      name: "Membros da equipe",
      values: { starter: "Até 3", essencial: "Até 15", pro: "Ilimitado" }
    },
    {
      name: "Automação para interagir com leads",
      values: { starter: "Ilimitado", essencial: "Ilimitado", pro: "Ilimitado" }
    },
    {
      name: "Multiatendimento (Conexões WhatsApp)",
      values: { starter: "Até 2", essencial: "Até 10", pro: "Ilimitado" }
    },
    {
      name: "Integrações com Webhooks",
      values: { starter: "2 integrações", essencial: "15 integrações", pro: "Ilimitadas" }
    },
    {
      name: "Dashboards de negócios das pipelines",
      values: { starter: true, essencial: true, pro: true }
    },
    {
      name: "Criação e gerenciamento de pipelines",
      values: { starter: "Ilimitado", essencial: "Ilimitado", pro: "Ilimitado" }
    },
    {
      name: "Acesso à API",
      values: { starter: true, essencial: true, pro: true }
    }
  ];

  const newPlans: PricingPlan[] = [
    {
      name: "Starter",
      level: "starter",
      price: { monthly: 147, semiannually: 112, yearly: 91 },
      description: "Para quem está começando, com recursos essenciais e limites ideais para pequenas equipes.",
      buttonText: "COMECE AGORA"
    },
    {
      name: "Essencial",
      level: "essencial",
      price: { monthly: 460, semiannually: 402, yearly: 344 },
      popular: false,
      badge: "Melhor preço",
      description: "Funcionalidades avançadas e limites ampliados para empresas em crescimento constante.",
      buttonText: "COMECE AGORA"
    },
    {
      name: "Pro",
      level: "pro",
      price: { monthly: 807, semiannually: 750, yearly: 692 },
      popular: true,
      description: "Funcionalidades avançadas e limites ampliados para empresas em crescimento constante.",
      buttonText: "COMECE AGORA"
    }
  ];

  return (
    <div className="min-h-screen w-full tech-background">
      <CentralNavbar />
      <main className="pt-16 pb-12 space-y-10 sm:pt-20 sm:pb-16 sm:space-y-14">
        <section
          className="text-black"
          style={{ fontFamily: '"Helvetica Neue", Arial, Helvetica, sans-serif' }}
        >
      <div className="max-w-6xl mx-auto rounded-3xl py-4 md:py-6 px-4 md:px-8">
        <div className="text-center space-y-3">
          <h2 className="text-[32px] md:text-[42px] leading-[1.1] font-normal tracking-tight text-white" style={{ fontFamily: '"Helvetica Neue", Arial, Helvetica, sans-serif' }}>
            Plano para todo tipo
            <br />
            de crescimento
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-neutral-500 leading-6">
            Tudo que você precisa pra vender com precisão, escala e
            <br />
            estrutura. Com o melhor custo-benefício do mercado.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="relative rounded-full overflow-hidden inline-block">
            <div
              className="absolute inset-0 rounded-full animate-shiny-toggle-spin"
              style={{
                background: "conic-gradient(from 0deg, transparent 72deg, #0f2b8f 90deg, white 108deg, #0f2b8f 126deg, transparent 360deg)",
              }}
              aria-hidden
            />
            <div
              ref={containerRef}
              role="group"
              aria-label="Ciclo de cobrança"
              className="relative inline-flex items-center gap-1 rounded-full p-1 min-w-0 m-[2px] overflow-hidden isolation-isolate backdrop-blur-sm"
              style={{
                background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))",
                boxShadow: "inset 0 0 0 1px rgba(11,18,37,0.7)",
              }}
            >
              <div
                className="absolute inset-0 rounded-full opacity-40 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 0.5px, transparent 0)",
                  backgroundSize: "4px 4px",
                }}
                aria-hidden
              />
              <div
                className="absolute top-1 h-9 rounded-full transition-all duration-300 ease-out pointer-events-none bg-[#0f2b8f] shadow-[0_2px_6px_rgba(15,43,143,0.4)]"
                style={{
                  left: pill.left,
                  width: pill.width,
                }}
              />
              <button
                ref={annualRef}
                type="button"
                onClick={() => setCycle("anual")}
                data-state={cycle === "anual" ? "on" : "off"}
                aria-current={cycle === "anual" ? "true" : undefined}
                className={`relative z-10 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2b8f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1225] ${
                  cycle === "anual" ? "text-white" : "text-white/90 hover:text-white"
                }`}
              >
                Anual
              </button>
              <button
                ref={semestralRef}
                type="button"
                onClick={() => setCycle("semestral")}
                data-state={cycle === "semestral" ? "on" : "off"}
                aria-current={cycle === "semestral" ? "true" : undefined}
                className={`relative z-10 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2b8f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1225] ${
                  cycle === "semestral" ? "text-white" : "text-white/90 hover:text-white"
                }`}
              >
                Semestral
              </button>
              <button
                ref={mensalRef}
                type="button"
                onClick={() => setCycle("mensal")}
                data-state={cycle === "mensal" ? "on" : "off"}
                aria-current={cycle === "mensal" ? "true" : undefined}
                className={`relative z-10 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2b8f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1225] ${
                  cycle === "mensal" ? "text-white" : "text-white/90 hover:text-white"
                }`}
              >
                Mensal
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white min-h-[560px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.10)] transition-shadow transform-gpu will-change-transform hover:-translate-y-0.5 !text-[#0F172A]">
            <div className="px-6 pt-5">
              <h3 className="text-xl font-semibold tracking-tight !text-[#0F172A]">Starter</h3>
              <p className="mt-1 text-[15px] leading-6 !text-[#475569]">
                Para quem está começando, com recursos essenciais e limites
                ideais para pequenas equipes.
              </p>
            </div>
            <div className="px-6 pt-4">
              <div className="text-xs text-black line-through">
                <span>{priceParts(Math.round(prices.starter * 1.25)).main}</span>
                <span className="ml-1 align-baseline">{priceParts(prices.starter).suffix}</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <div className="text-[32px] font-bold text-[#0B1220] tracking-tight">
                  <span>{priceParts(prices.starter).main}</span>
                  <span className="ml-1 align-baseline text-sm text-black">
                    {priceParts(prices.starter).suffix}
                  </span>
                </div>
              </div>
              <a
                href="https://www.vbsolution.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full h-10 rounded-md bg-zinc-100 text-[#0B1220] text-sm font-semibold hover:bg-zinc-200 transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2a7e] focus-visible:ring-offset-2 focus-visible:ring-offset-white border border-neutral-300 flex items-center justify-center"
              >
                COMECE AGORA
              </a>
            </div>
            <ul className="px-6 py-5 space-y-0 text-sm">
              {[
                "Criação e gerenciamento de negócios e produtos.",
                "Gerenciamento de até 10 mil leads com controle de tags.",
                "Cadastro de até 3 membros da sua empresa.",
                "Automação para interagir com leads ilimitado.",
                "Multiatendimento com até 2 conexões (WhatsApp).",
                "2 integrações com Webhooks para conectar outras ferramentas.",
                "Dashboards de negócios das pipelines.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 border-t border-black/10 first:border-t-0 py-3 first:pt-0">
                  <Code className="w-4 h-4 mt-[2px] text-slate-500" />
                  <span className="text-black">{emphasize(t)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-[#1e3a8a] bg-white shadow-[0_10px_40px_rgba(30,58,138,0.12)] hover:shadow-[0_16px_56px_rgba(30,58,138,0.16)] transition-shadow transform-gpu will-change-transform hover:-translate-y-0.5 min-h-[560px] !text-[#0F172A]">
            <div className="px-6 pt-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-tight !text-[#0F172A]">Essencial</h3>
                <span className="text-xs px-2 py-1 rounded-md border-2 border-[#0f2b8f] text-[#0f2b8f] bg-transparent font-semibold">
                  Melhor preço
                </span>
              </div>
              <p className="mt-1 text-[15px] leading-6 !text-[#475569]">
                Funcionalidades avançadas e limites ampliados para empresas em
                crescimento constante.
              </p>
            </div>
            <div className="px-6 pt-4">
              <div className="text-xs text-black line-through">
                <span>{priceParts(Math.round(prices.essencial * 1.25)).main}</span>
                <span className="ml-1 align-baseline">{priceParts(prices.essencial).suffix}</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <div className="text-[34px] font-bold text-[#0B1220] tracking-tight">
                  <span>{priceParts(prices.essencial).main}</span>
                  <span className="ml-1 align-baseline text-sm text-black">
                    {priceParts(prices.essencial).suffix}
                  </span>
                </div>
              </div>
              <a
                href="https://www.vbsolution.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full h-10 rounded-md bg-zinc-100 text-[#0B1220] text-sm font-semibold hover:bg-zinc-200 transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white border border-neutral-300 flex items-center justify-center"
              >
                COMECE AGORA
              </a>
            </div>
            <ul className="px-6 py-5 space-y-0 text-sm">
              {[
                "Criação e gerenciamento de pipeline ilimitado.",
                "Criação e gerenciamento de negócios e produtos.",
                "Gerenciamento de até 100 mil leads com controle de tags.",
                "Cadastro de 15 membros na empresa.",
                "Automação para interagir com leads ilimitado.",
                "Multiatendimento com até 10 conexões (WhatsApp).",
                "15 integrações com Webhooks para conectar outras ferramentas.",
                "Dashboards de negócios das pipelines.",
                "Acesso à API para integração com outras ferramentas.",
              ].map((t, i) => (
                <li
                  key={t}
                  className={`flex items-start gap-3 border-t border-black/10 first:border-t-0 py-3 first:pt-0 ${
                    i >= 7 ? "bg-[#0b2a7e]/10 rounded-md px-3 py-2 mt-2" : ""
                  }`}
                >
                  <Code className="w-4 h-4 mt-[2px] text-slate-500" />
                  <span className="text-black">
                    {emphasize(t)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#1b1f2f] bg-[#0c0f1a] min-h-[560px] shadow-[0_8px_24px_rgba(0,0,0,0.30)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.40)] transition-shadow transform-gpu will-change-transform hover:-translate-y-0.5">
            <div className="px-6 pt-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Pro</h3>
                <span className="text-xs px-2 py-1 rounded-md border-2 border-[#0f2b8f] text-white bg-transparent font-semibold">
                  Mais vendido
                </span>
              </div>
              <p className="mt-1 text-[15px] leading-6 text-neutral-300/90">
                Para operações de alta escala com automações avançadas, integrações ilimitadas
                e suporte enterprise.
              </p>
            </div>
            <div className="px-6 pt-4">
              <div className="text-xs text-white line-through">
                <span>{priceParts(Math.round(prices.pro * 1.25)).main}</span>
                <span className="ml-1 align-baseline text-white/80">{priceParts(prices.pro).suffix}</span>
                <span className="ml-2 text-white/80">Economize R${Math.round(Math.round(prices.pro * 1.25) - prices.pro)}</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <div className="text-[34px] font-bold text-white tracking-tight">
                  <span>{priceParts(prices.pro).main}</span>
                  <span className="ml-1 align-baseline text-sm text-white/60">
                    {priceParts(prices.pro).suffix}
                  </span>
                </div>
              </div>
              <a
                href="https://www.vbsolution.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full h-10 rounded-md bg-[#0b2a7e] text-white text-sm font-semibold hover:bg-[#0a256a] transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2a7e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0f1a] border border-[#0b2a7e] flex items-center justify-center"
              >
                COMECE AGORA
              </a>
            </div>
            <ul className="px-6 py-5 space-y-0 text-sm">
              {[
                "Criação e gerenciamento de pipelines ilimitadas.",
                "Gerenciamento ilimitado de leads com controle de tags.",
                "Criação e gerenciamento de negócios e produtos.",
                "Cadastro ilimitado de membros na empresa.",
                "Automações ilimitadas para otimizar interações com leads.",
                "Multiatendimento com conexões ilimitadas (WhatsApp).",
                "Integrações com Webhooks ilimitadas para conectar outras ferramentas.",
                "Dashboards de negócios das pipelines.",
                "Acesso à API para integração com outras ferramentas.",
              ].map((t, i) => (
                <li
                  key={t}
                  className={`flex items-start gap-3 border-t border-white/15 first:border-t-0 py-3 first:pt-0 ${
                    i >= 6 ? "bg-white/10 border border-white/20 rounded-md px-3 py-2 mt-2" : ""
                  }`}
                >
                  <Code className="w-4 h-4 mt-[2px] text-white/70" />
                  <span className="text-neutral-200">{emphasize(t)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
        </section>

        <section className="px-4">
          <div className="max-w-6xl mx-auto rounded-3xl bg-white/10 py-6 md:py-8 px-6 md:px-10">
            <div className="flex flex-col items-center text-center gap-8">
              <div className="space-y-2 md:space-y-3 max-w-2xl mx-auto">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-300">
                  Confiança do mercado
                </p>
                <h3 className="text-2xl md:text-3xl font-normal text-white">
                  Os melhores utilizam{" "}
                  <span className="text-white">VBSolution</span>
                </h3>
                <p className="text-sm md:text-base text-gray-100">
                  Empresas de alta performance confiam na nossa tecnologia para
                  organizar operações, vendas e atendimento em um único lugar.
                </p>
              </div>
              <div className="w-full max-w-6xl mx-auto">
                <div className="flex justify-center overflow-hidden py-2">
                  <InfiniteSlider gap={56} padX={32} speed={42} speedOnHover={36}>
                    {logosRow.map(({ src, alt }) => (
                      <div key={alt} className="relative h-24 w-[320px] flex items-center justify-center">
                        <img
                          src={src}
                          alt={alt}
                          className="pointer-events-none select-none object-contain flex-shrink-0 opacity-100 h-16 w-auto max-w-[200px] brightness-0 invert contrast-200"
                          draggable={false}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </InfiniteSlider>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PricingTable
          features={newFeatures}
          plans={newPlans}
          defaultPlan="essencial"
          defaultInterval="monthly"
        />
        {/* Depoimentos removidos a pedido do usuário */}
      </main>
      <Footer />
    </div>
  );
}
