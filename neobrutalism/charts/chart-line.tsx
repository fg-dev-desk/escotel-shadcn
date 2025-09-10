"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

export const description = "A line chart - Neobrutalism style"

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

export function ChartLineNeobrutalism() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="h-6 w-6 bg-green-500 border-2 border-black"></div>
          GRÁFICO DE LÍNEAS
        </CardTitle>
        <p className="font-bold text-black text-sm">Enero - Junio 2024</p>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid 
              vertical={false} 
              strokeDasharray="0"
              stroke="#000000" 
              strokeWidth={2}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-black font-bold"
              style={{ fontSize: '12px', fontWeight: 'bold' }}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip 
              cursor={false} 
              content={
                <ChartTooltipContent 
                  className="bg-white border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-bold"
                />
              } 
            />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="#3b82f6"
              strokeWidth={4}
              dot={{
                fill: "#3b82f6",
                stroke: "#000000",
                strokeWidth: 3,
                r: 6
              }}
            />
            <Line
              dataKey="mobile"
              type="linear"
              stroke="#f59e0b"
              strokeWidth={4}
              dot={{
                fill: "#f59e0b",
                stroke: "#000000",
                strokeWidth: 3,
                r: 6
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <div className="p-6 pt-0">
        <div className="bg-yellow-200 border-4 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
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