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
          <div className="relative bg-white rounded-full px-1 py-1 w-[280px] h-11 flex items-center border border-neutral-300">
            <div
              className={cn(
                "absolute left-3 top-1.5 h-8 w-24 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_10px_rgba(0,0,0,0.06)] transition-transform duration-200 ease-out will-change-transform",
                interval === "monthly"
                  ? "translate-x-0"
                  : interval === "semiannually"
                  ? "translate-x-[84px]"
                  : "translate-x-[168px]"
              )}
            />
            <button
              type="button"
              onClick={() => setInterval("monthly")}
              className={cn(
                "relative z-10 w-28 h-9 rounded-full text-sm transition-colors duration-200 ease-out",
                interval === "monthly" ? "text-[#0b2a7e] font-semibold bg-neutral-200" : "text-neutral-600",
              )}
            >
              Mensal
            </button>
            <button
              type="button"
              onClick={() => setInterval("semiannually")}
              className={cn(
                "relative z-10 w-28 h-9 rounded-full text-sm transition-colors duration-200 ease-out",
                interval === "semiannually" ? "text-[#0b2a7e] font-semibold bg-neutral-200" : "text-neutral-600",
              )}
            >
              Semestral
            </button>
            <button
              type="button"
              onClick={() => setInterval("yearly")}
              className={cn(
                "relative z-10 w-28 h-9 rounded-full text-sm transition-colors duration-200 ease-out",
                interval === "yearly" ? "text-[#0b2a7e] font-semibold bg-neutral-200" : "text-neutral-600",
              )}
            >
              Anual
            </button>
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

              <div
                className={cn(
                  "w-full py-2 px-4 rounded-md text-center text-sm font-semibold transition-colors mt-auto",
                  selectedPlan === plan.level
                    ? "bg-[#0b2a7e] text-white hover:bg-[#0a256a] border border-[#0b2a7e]"
                    : "bg-zinc-100 text-[#0B1220] hover:bg-zinc-200 border border-neutral-300"
                )}
              >
                {plan.buttonText || "Comece agora"}
              </div>
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
