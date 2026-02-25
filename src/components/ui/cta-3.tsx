import { PlusIcon } from "lucide-react";
import { ShinyButton } from "./shiny-button";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export function CallToAction() {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y px-4 py-8 bg-gradient-to-b from-white/5 to-transparent">
      <PlusIcon className="absolute top-[-12.5px] left-[-11.5px] z-[1] size-6" strokeWidth={1} />
      <PlusIcon className="absolute top-[-12.5px] right-[-11.5px] z-[1] size-6" strokeWidth={1} />
      <PlusIcon className="absolute bottom-[-12.5px] left-[-11.5px] z-[1] size-6" strokeWidth={1} />
      <PlusIcon className="absolute right-[-11.5px] bottom-[-12.5px] z-[1] size-6" strokeWidth={1} />

      <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
      <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />
      <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed" />

      <div className="space-y-1">
        <h2 className="text-center font-normal text-2xl text-neutral-100 flex items-center justify-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[#1d4ed8]" />
          Chegou a hora de vender mais.
        </h2>
        <p className="text-center text-neutral-200">
          Organize seu funil, automatize contatos e converta mais.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-300">
          <span className="px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10">Onboarding guiado</span>
          <span className="px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10">Suporte humanizado</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <a href="/planos" className="inline-block">
          <ShinyButton className="text-base opacity-90 hover:opacity-100" variant="ghost" size="md" speed="slow" animated={false}>
            Consultar planos
          </ShinyButton>
        </a>
        <a href={getWhatsAppUrl()} className="inline-block">
          <ShinyButton className="text-xs px-3 sm:text-base sm:px-4" size="md">
            Agendar Demonstração
          </ShinyButton>
        </a>
      </div>
    </div>
  );
}
