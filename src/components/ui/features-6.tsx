'use client'
import { Check, Target, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ShinyButton } from './shiny-button'
import vendasImg from '@/fotos/Prints do VBSolution/vendas.png'
import dashboardImg from '@/fotos/Prints do VBSolution/dashboard.jpeg'

export function Features() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-100">
              Pipeline e operação integradas
            </h2>
            <p className="mt-2 text-neutral-300">
              Organize oportunidades, acompanhe métricas e acelere fechamentos com um fluxo claro.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { icon: Target, text: 'Funil visual com etapas personalizáveis' },
              { icon: Users, text: 'Colaboração entre times em tempo real' },
              { icon: Zap, text: 'Ações rápidas integradas ao WhatsApp e IA' },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 p-3 rounded-lg ring-1 ring-white/10 bg-white/5">
                <div className="w-6 h-6 bg-white/10 ring-1 ring-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-neutral-100" />
                </div>
                <p className="text-neutral-100">{item.text}</p>
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <Button size="lg" className="h-11 px-6">Quero vender mais</Button>
              <ShinyButton className="h-11 opacity-90 hover:opacity-100" variant="ghost" size="md" speed="slow" animated={false}>
                Consultar Planos
              </ShinyButton>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-2xl p-4 ring-1 ring-white/10 bg-white/5 backdrop-blur-sm shadow-2xl shadow-blue-500/10 overflow-hidden">
            <img
              src={vendasImg}
              alt="Pipeline de Vendas"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
          <div className="rounded-2xl p-4 ring-1 ring-white/10 bg-white/5 backdrop-blur-sm shadow-2xl shadow-blue-500/10 overflow-hidden">
            <img
              src={dashboardImg}
              alt="Dashboard"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
