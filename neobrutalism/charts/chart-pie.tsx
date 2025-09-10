"use client"

import { TrendingUp } from "lucide-react"
import { Cell, Pie, PieChart } from "recharts"

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

export const description = "A donut chart - Neobrutalism style"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "#3b82f6" },
  { browser: "safari", visitors: 200, fill: "#f59e0b" },
  { browser: "firefox", visitors: 187, fill: "#ef4444" },
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

export function ChartPieNeobrutalism() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="flex items-center gap-2">
          <div className="h-6 w-6 bg-purple-500 border-2 border-black"></div>
          GRÁFICO CIRCULAR - DONA
        </CardTitle>
        <p className="font-bold text-black text-sm">Enero - Junio 2024</p>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent 
                  hideLabel 
                  className="bg-white border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-bold"
                />
              }
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={4}
              stroke="#000000"
            >
              <Cell fill="#3b82f6" />
              <Cell fill="#f59e0b" />
              <Cell fill="#ef4444" />
              <Cell fill="#10b981" />
              <Cell fill="#8b5cf6" />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <div className="p-6 pt-0">
        <div className="bg-purple-200 border-4 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
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