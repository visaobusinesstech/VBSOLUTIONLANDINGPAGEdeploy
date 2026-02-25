'use client'
import { Activity, Map as MapIcon, MessageCircle } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import DottedMap from 'dotted-map'
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
} from 'recharts'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

type DataPoint = { time: string; desktop: number }

const activityData: DataPoint[] = [
  { time: '09:00', desktop: 120 },
  { time: '10:00', desktop: 180 },
  { time: '11:00', desktop: 150 },
  { time: '12:00', desktop: 210 },
  { time: '13:00', desktop: 190 },
  { time: '14:00', desktop: 230 },
  { time: '15:00', desktop: 200 },
]

const chartConfig: ChartConfig = {
  desktop: { label: 'Desktop', color: 'hsl(var(--primary))' },
}

export function Features() {
  return (
    <section className="hidden sm:block px-4 py-8 md:py-14">
      <div className="relative mx-auto grid max-w-5xl md:grid-cols-2">
        <div>
          <div className="p-5 sm:p-6">
            
            <p className="mt-8 text-2xl font-normal">O melhor CRM da América Latina VBSolution</p>
          </div>

          <div aria-hidden className="relative">
            <div className="relative overflow-hidden">
              <div className="[background-image:radial-gradient(var(--tw-gradient-stops))] to-background absolute inset-0 from-transparent to-75%"></div>
              <Map />
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden p-5 sm:p-6 bg-transparent">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:block"
          />
          <div className="relative z-10">
            <span className="text-muted-foreground flex items-center gap-2">
              <MapIcon className="size-4" />
              Multi-atendimento no WhatsApp + Api Oficial
            </span>
            <p className="my-8 text-2xl font-normal"></p>
          </div>
          <div aria-hidden className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex justify-center items-center size-5 rounded-full">
                  <span className="size-3 rounded-full bg-primary" />
                </span>
                <span className="text-muted-foreground text-xs">Sat 22 Feb</span>
              </div>
              <div className="rounded-[--radius] bg-background mt-1.5 w-3/5 p-3 text-xs">
                Olá, gostaria de uma demonstração do sistema VBSolution CRM!
              </div>
            </div>

            <div>
              <div className="rounded-[--radius] mb-1 ml-auto w-3/5 bg-blue-600 p-3 text-xs text-white">
                Perfeito! Antes, gostaria de entender melhor sobre o seu negócio.
              </div>
              <span className="text-muted-foreground block text-right text-xs">Now</span>
            </div>
          </div>
        </div>

        <div className="relative col-span-full p-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block"
          />
          <p className="text-center text-4xl font-normal lg:text-7xl">+ 99,99% de vendas</p>
        </div>

        <div className="relative col-span-full">
          <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
            <span className="text-muted-foreground text-sm flex items-center gap-2">
              <Activity className="size-4" />
              Controle suas vendas
            </span>
            <p className="my-4 text-2xl font-normal"></p>
          </div>
          <MonitoringChart />
        </div>
      </div>
    </section>
  )
}

const map = new DottedMap({ height: 55, grid: 'diagonal' })
const points = map.getPoints()

const svgOptions = {
  backgroundColor: 'var(--color-background)',
  color: 'currentColor',
  radius: 0.28,
}

const Map = () => {
  const viewBox = `0 0 120 60`
  const latam = points.filter((p) => p.x >= 12 && p.x <= 68 && p.y >= 12 && p.y <= 55)
  return (
    <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }}>
      {points.map((point, index) => (
        <circle
          key={`world-${index}`}
          cx={point.x}
          cy={point.y}
          r={svgOptions.radius}
          fill="#94a3b8"
          fillOpacity={0.35}
        />
      ))}
      {latam.map((point, index) => (
        <circle
          key={`latam-${index}`}
          cx={point.x}
          cy={point.y}
          r={svgOptions.radius}
          fill="#60a5fa"
          fillOpacity={0.9}
        />
      ))}
    </svg>
  )
}

const vendasLeadsData: Array<{ time: string; leads: number; vendidas: number }> = [
  { time: '09:00', leads: 120, vendidas: 24 },
  { time: '10:00', leads: 150, vendidas: 32 },
  { time: '11:00', leads: 170, vendidas: 41 },
  { time: '12:00', leads: 160, vendidas: 38 },
  { time: '13:00', leads: 190, vendidas: 47 },
  { time: '14:00', leads: 200, vendidas: 53 },
  { time: '15:00', leads: 180, vendidas: 49 },
]

const vendasLeadsConfig: ChartConfig = {
  leads: { label: 'Leads', color: '#9ca3af' }, // cinza
  valor: { label: 'Valor (R$)', color: '#60a5fa' }, // azul
}

function MonitoringChart() {
  const base = useMemo(() => vendasLeadsData, [])
  const [phase, setPhase] = useState(0)
  const data = useMemo(
    () =>
      base.map((d, idx) => {
        const leads = d.leads + ((phase + idx * 3) % 40)
        // Valor proporcional à quantidade de leads, para as curvas ficarem parecidas
        const valor =
          leads * 120 +
          5000 +
          ((phase + idx * 2) % 1500)
        return {
          time: d.time,
          leads,
          valor,
        }
      }),
    [base, phase]
  )
  useEffect(() => {
    const id = setInterval(() => setPhase((p) => (p + 2) % 100), 900)
    return () => clearInterval(id)
  }, [])
  return (
    <ChartContainer config={vendasLeadsConfig} className="h-[340px] w-full">
      <AreaChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 0 }}>
        <defs>
          <linearGradient id="fillLeads" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-leads)" stopOpacity={0.25} />
            <stop offset="95%" stopColor="var(--color-leads)" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="fillValor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-valor)" stopOpacity={0.35} />
            <stop offset="95%" stopColor="var(--color-valor)" stopOpacity={0.08} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis
          yAxisId="leadsAxis"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis
          yAxisId="valorAxis"
          orientation="right"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(v: number) => `R$ ${Math.round(v / 1000)}k`}
        />
        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.25} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Area
          dataKey="leads"
          yAxisId="leadsAxis"
          type="monotone"
          fill="url(#fillLeads)"
          stroke="var(--color-leads)"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
        <Area
          dataKey="valor"
          yAxisId="valorAxis"
          type="monotone"
          fill="url(#fillValor)"
          stroke="var(--color-valor)"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
      </AreaChart>
    </ChartContainer>
  )
}
