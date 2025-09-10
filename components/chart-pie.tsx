"use client"

import { TrendingUp } from "lucide-react"
import { Cell, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chart-1)" },
  { browser: "safari", visitors: 200, fill: "var(--color-chart-2)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-chart-3)" },
  { browser: "edge", visitors: 173, fill: "var(--color-chart-4)" },
  { browser: "other", visitors: 90, fill: "var(--color-chart-5)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--color-chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--color-chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--color-chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--color-chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--color-chart-5)",
  },
} satisfies ChartConfig

export function ChartPie() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Cell fill="var(--color-chart-1)" />
              <Cell fill="var(--color-chart-2)" />
              <Cell fill="var(--color-chart-3)" />
              <Cell fill="var(--color-chart-4)" />
              <Cell fill="var(--color-chart-5)" />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}