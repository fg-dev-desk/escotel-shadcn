"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "A stacked bar chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80, tablet: 20 },
  { month: "February", desktop: 305, mobile: 200, tablet: 40 },
  { month: "March", desktop: 237, mobile: 120, tablet: 30 },
  { month: "April", desktop: 73, mobile: 190, tablet: 25 },
  { month: "May", desktop: 209, mobile: 130, tablet: 35 },
  { month: "June", desktop: 214, mobile: 140, tablet: 45 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--color-chart-2)",
  },
  tablet: {
    label: "Tablet",
    color: "var(--color-chart-3)",
  },
} satisfies ChartConfig

export function ChartBarStacked() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Stacked</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="desktop"
              stackId="a"
              fill="var(--color-chart-1)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="var(--color-chart-2)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="tablet"
              stackId="a"
              fill="var(--color-chart-3)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}