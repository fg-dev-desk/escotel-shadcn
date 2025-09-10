"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart with an active bar - Neobrutalism style"

const chartData = [
  { browser: "chrome", visitors: 187, fill: "#3b82f6" },
  { browser: "safari", visitors: 200, fill: "#f59e0b" },
  { browser: "firefox", visitors: 275, fill: "#ef4444" },
  { browser: "edge", visitors: 173, fill: "#10b981" },
  { browser: "other", visitors: 90, fill: "#8b5cf6" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#3b82f6",
  },
  safari: {
    label: "Safari",
    color: "#f59e0b",
  },
  firefox: {
    label: "Firefox",
    color: "#ef4444",
  },
  edge: {
    label: "Edge",
    color: "#10b981",
  },
  other: {
    label: "Other",
    color: "#8b5cf6",
  },
} satisfies ChartConfig

export function ChartBarActiveNeobrutalism() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="h-6 w-6 bg-blue-500 border-2 border-black"></div>
          GRÁFICO DE BARRAS - ACTIVO
        </CardTitle>
        <p className="font-bold text-black text-sm">Enero - Junio 2024</p>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData} width={500} height={250}>
            <CartesianGrid 
              vertical={false} 
              strokeDasharray="0"
              stroke="#000000" 
              strokeWidth={2}
            />
            <XAxis
              dataKey="browser"
              tickLine={false}
              axisLine={false}
              className="text-black font-bold"
              style={{ fontSize: '12px', fontWeight: 'bold' }}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip 
              cursor={false} 
              content={
                <ChartTooltipContent 
                  hideLabel 
                  className="bg-white border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-bold"
                />
              } 
            />
            <Bar
              dataKey="visitors"
              strokeWidth={3}
              stroke="#000000"
              radius={[0, 0, 0, 0]}
              activeIndex={2}
              activeBar={({ ...props }) => (
                <Rectangle
                  {...props}
                  fillOpacity={1}
                  stroke="#000000"
                  strokeWidth={4}
                  strokeDasharray={0}
                />
              )}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <div className="p-6 pt-0">
        <div className="bg-green-200 border-4 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-2 font-black text-black mb-1">
            <TrendingUp className="h-4 w-4" strokeWidth={3} />
            CRECIMIENTO DEL 5.2% ESTE MES
          </div>
          <div className="text-black font-bold text-sm">
            Mostrando total de visitantes de los últimos 6 meses
          </div>
        </div>
      </div>
    </Card>
  )
}