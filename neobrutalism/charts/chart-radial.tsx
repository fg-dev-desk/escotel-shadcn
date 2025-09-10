"use client"

import { TrendingUp } from "lucide-react"
import { RadialBar, RadialBarChart } from "recharts"

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

export const description = "A radial chart - Neobrutalism style"

const chartData = [
  { browser: "safari", visitors: 200, fill: "#f59e0b" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "#f59e0b",
  },
} satisfies ChartConfig

export function ChartRadialNeobrutalism() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="flex items-center gap-2">
          <div className="h-6 w-6 bg-red-500 border-2 border-black"></div>
          GRÁFICO RADIAL - FORMA
        </CardTitle>
        <p className="font-bold text-black text-sm">Enero - Junio 2024</p>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent 
                  hideLabel 
                  nameKey="browser" 
                  className="bg-white border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-bold"
                />
              }
            />
            <RadialBar 
              dataKey="visitors" 
              background={{ fill: "#e5e7eb", stroke: "#000000", strokeWidth: 2 }}
              cornerRadius={0}
              stroke="#000000"
              strokeWidth={3}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <div className="p-6 pt-0">
        <div className="bg-red-200 border-4 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
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