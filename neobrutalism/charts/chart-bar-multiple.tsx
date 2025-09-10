"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "A multiple bar chart - Neobrutalism style"

const chartData = [
  { month: "Enero", desktop: 186, mobile: 80 },
  { month: "Febrero", desktop: 305, mobile: 200 },
  { month: "Marzo", desktop: 237, mobile: 120 },
  { month: "Abril", desktop: 73, mobile: 190 },
  { month: "Mayo", desktop: 209, mobile: 130 },
  { month: "Junio", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3b82f6",
  },
  mobile: {
    label: "Mobile",
    color: "#f59e0b",
  },
} satisfies ChartConfig

export function ChartBarMultipleNeobrutalism() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="h-6 w-6 bg-pink-500 border-2 border-black"></div>
          GRÁFICO DE BARRAS - MÚLTIPLE
        </CardTitle>
        <p className="font-bold text-black text-sm">Enero - Junio 2024</p>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid 
              vertical={false} 
              strokeDasharray="0"
              stroke="#000000" 
              strokeWidth={2}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              className="text-black font-bold"
              style={{ fontSize: '12px', fontWeight: 'bold' }}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent 
                  indicator="dashed" 
                  className="bg-white border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-bold"
                />
              }
            />
            <Bar 
              dataKey="desktop" 
              fill="#3b82f6" 
              radius={[0, 0, 0, 0]}
              stroke="#000000"
              strokeWidth={2}
            />
            <Bar 
              dataKey="mobile" 
              fill="#f59e0b" 
              radius={[0, 0, 0, 0]}
              stroke="#000000"
              strokeWidth={2}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <div className="p-6 pt-0">
        <div className="bg-pink-200 border-4 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
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