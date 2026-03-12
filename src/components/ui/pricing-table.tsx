"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon, ArrowRightIcon, Cross2Icon } from "@radix-ui/react-icons"
import NumberFlow from "@number-flow/react"

export type PlanLevel = "starter" | "essencial" | "pro" | string;
export type Interval = "monthly" | "semiannually" | "yearly";

export interface PricingFeature {
  name: string;
  // If boolean, shows check/cross. If string, shows the text.
  values: Record<PlanLevel, boolean | string>;
}

export interface PricingPlan {
  name: string;
  level: PlanLevel;
  price: {
    monthly: number;
    semiannually: number;
    yearly: number;
  };
  popular?: boolean;
  badge?: string;
  description?: string;
  buttonText?: string;
}

export interface PricingTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  features: PricingFeature[];
  plans: PricingPlan[];
  onPlanSelect?: (plan: PlanLevel) => void;
  defaultPlan?: PlanLevel;
  defaultInterval?: Interval;
  containerClassName?: string;
  buttonClassName?: string;
}

export function PricingTable({
  features,
  plans,
  onPlanSelect,
  defaultPlan = "essencial",
  defaultInterval = "monthly",
  className,
  containerClassName,
  buttonClassName,
  ...props
}: PricingTableProps) {
  const [interval, setInterval] = React.useState<Interval>(defaultInterval);
  const [selectedPlan, setSelectedPlan] = React.useState<PlanLevel>(defaultPlan);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const monthlyRef = React.useRef<HTMLButtonElement>(null);
  const semiannuallyRef = React.useRef<HTMLButtonElement>(null);
  const yearlyRef = React.useRef<HTMLButtonElement>(null);
  const [pill, setPill] = React.useState({ left: 0, width: 0 });

  const intervalToRef = { monthly: monthlyRef, semiannually: semiannuallyRef, yearly: yearlyRef } as const;

  React.useLayoutEffect(() => {
    const btn = intervalToRef[interval].current;
    const container = containerRef.current;
    if (!btn || !container) return;
    const cRect = container.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();
    setPill({
      left: bRect.left - cRect.left,
      width: bRect.width,
    });
  }, [interval]);

  const handlePlanSelect = (plan: PlanLevel) => {
    setSelectedPlan(plan);
    onPlanSelect?.(plan);
  };

  return (
    <section
      className={cn(
        "text-foreground bg-transparent",
        "py-8 sm:py-16 md:py-20 px-4",
        "overflow-hidden pb-0",
      )}
    >
      <div
        className={cn("w-full max-w-5xl mx-auto px-4", containerClassName)}
        {...props}
      >
        <div className="flex justify-end mb-4 sm:mb-8">
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
                ref={monthlyRef}
                type="button"
                onClick={() => setInterval("monthly")}
                data-state={interval === "monthly" ? "on" : "off"}
                aria-current={interval === "monthly" ? "true" : undefined}
                className={cn(
                  "relative z-10 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2b8f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1225]",
                  interval === "monthly" ? "text-white" : "text-white/90 hover:text-white",
                )}
              >
                Mensal
              </button>
              <button
                ref={semiannuallyRef}
                type="button"
                onClick={() => setInterval("semiannually")}
                data-state={interval === "semiannually" ? "on" : "off"}
                aria-current={interval === "semiannually" ? "true" : undefined}
                className={cn(
                  "relative z-10 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2b8f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1225]",
                  interval === "semiannually" ? "text-white" : "text-white/90 hover:text-white",
                )}
              >
                Semestral
              </button>
              <button
                ref={yearlyRef}
                type="button"
                onClick={() => setInterval("yearly")}
                data-state={interval === "yearly" ? "on" : "off"}
                aria-current={interval === "yearly" ? "true" : undefined}
                className={cn(
                  "relative z-10 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2b8f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1225]",
                  interval === "yearly" ? "text-white" : "text-white/90 hover:text-white",
                )}
              >
                Anual
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {plans.map((plan) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => handlePlanSelect(plan.level)}
              className={cn(
                "flex flex-col p-6 rounded-xl text-left transition-all bg-white border",
                selectedPlan === plan.level 
                  ? "ring-2 ring-[#0b2a7e] border-transparent shadow-lg" 
                  : "border-zinc-300 hover:border-zinc-400",
              )}
            >
              <div className="flex items-center justify-between mb-4 w-full">
                <span className="text-lg font-semibold text-black">{plan.name}</span>
                {(plan.popular || plan.badge) && (
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium border-2 border-[#0f2b8f] text-[#0f2b8f] bg-transparent">
                    {plan.badge || "Mais vendido"}
                  </span>
                )}
              </div>
              
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-sm text-black">R$</span>
                <NumberFlow
                  format={{
                    style: "decimal",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }}
                  value={plan.price[interval]}
                  className="text-4xl font-bold text-black"
                />
                <span className="text-sm font-normal text-black">
                  /mês
                </span>
              </div>
              
              {plan.description && (
                <p className="text-sm text-black mb-6 min-h-[40px]">
                  {plan.description}
                </p>
              )}

              <a
                href="https://www.vbsolution.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full py-2 px-4 rounded-md text-center text-sm font-semibold transition-colors mt-auto",
                  selectedPlan === plan.level
                    ? "bg-[#0b2a7e] text-white hover:bg-[#0a256a] border border-[#0b2a7e]"
                    : "bg-zinc-100 text-[#0B1220] hover:bg-zinc-200 border border-neutral-300"
                )}
                onClick={(e) => e.stopPropagation()}
              >
                {plan.buttonText || "Comece agora"}
              </a>
            </button>
          ))}
        </div>

        {/* Mobile: lista empilhada sem corte */}
        <div className="md:hidden border border-zinc-200 rounded-xl bg-white">
          <div className="divide-y divide-zinc-200">
            <div className="p-4 bg-zinc-50">
              <div className="text-sm font-medium text-black">Recursos</div>
            </div>
            {features.map((feature) => (
              <div key={feature.name} className="p-4">
                <div className="text-sm text-black mb-3 break-words">
                  {feature.name}
                </div>
                <div className="space-y-2">
                  {plans.map((plan) => {
                    const value = feature.values[plan.level];
                    const isIlimitado = typeof value === "string" && /ilimitad/i.test(value);
                    return (
                      <div key={plan.level} className="flex items-center justify-between rounded-lg border border-zinc-200 p-2">
                        <span className="text-xs font-medium text-zinc-700">{plan.name}</span>
                        {typeof value === "boolean" ? (
                          value ? (
                            <CheckIcon className="w-5 h-5 text-blue-800" />
                          ) : (
                            <span className="text-black">-</span>
                          )
                        ) : (
                          <span className={cn(
                            "text-sm",
                            isIlimitado ? "text-[#0b2a7e] font-normal" :
                            plan.level === selectedPlan ? "text-blue-800 font-normal" :
                            "text-black"
                          )}>
                            {value}
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop/tablet: tabela tradicional com rolagem horizontal se necessário */}
        <div className="hidden md:block border border-zinc-200 rounded-xl overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <div className="min-w-[720px] divide-y divide-zinc-200">
              <div className="flex items-center p-4 bg-zinc-50">
                <div className="flex-1 text-sm font-medium text-black">Recursos</div>
                <div className="flex items-center gap-4 text-sm w-1/2">
                  {plans.map((plan) => (
                    <div
                      key={plan.level}
                      className="flex-1 text-center font-medium text-black"
                    >
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className={cn(
                    "flex items-center p-4 transition-colors hover:bg-zinc-50/50",
                  )}
                >
                  <div className="flex-1 text-sm text-black">
                    {feature.name}
                  </div>
                  <div className="flex items-center gap-4 text-sm w-1/2">
                  {plans.map((plan) => {
                    const value = feature.values[plan.level];
                    const isIlimitado = typeof value === "string" && /ilimitad/i.test(value);
                    return (
                      <div
                        key={plan.level}
                        className={cn(
                          "flex-1 flex justify-center text-center"
                        )}
                      >
                        {typeof value === "boolean" ? (
                          value ? (
                            <CheckIcon className="w-5 h-5 text-blue-800" />
                          ) : (
                            <span className="text-black">-</span>
                          )
                        ) : (
                          <span className={cn(
                            isIlimitado ? "text-[#0b2a7e] font-normal" :
                            plan.level === selectedPlan ? "text-blue-800 font-normal" :
                            "text-black"
                          )}>
                            {value}
                          </span>
                        )}
                      </div>
                    );
                  })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
