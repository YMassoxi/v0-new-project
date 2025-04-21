"use client"

import type React from "react"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    receitas: 4000,
    despesas: 2400,
    data: "Jan",
  },
  {
    receitas: 3000,
    despesas: 1398,
    data: "Fev",
  },
  {
    receitas: 2000,
    despesas: 3800,
    data: "Mar",
  },
  {
    receitas: 2780,
    despesas: 3908,
    data: "Abr",
  },
  {
    receitas: 1890,
    despesas: 4800,
    data: "Mai",
  },
  {
    receitas: 2390,
    despesas: 3800,
    data: "Jun",
  },
  {
    receitas: 3490,
    despesas: 4300,
    data: "Jul",
  },
]

interface FinancialSummaryProps extends React.HTMLAttributes<HTMLDivElement> {}

export function FinancialSummary({ className, ...props }: FinancialSummaryProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle className="font-orbitron">Resumo Financeiro</CardTitle>
        <CardDescription>Visão geral de receitas e despesas.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            receitas: {
              label: "Receitas",
              color: "hsl(var(--chart-1))",
            },
            despesas: {
              label: "Despesas",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="aspect-[4/3]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Tooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="receitas"
                activeDot={{
                  r: 6,
                  style: { fill: "var(--color-receitas)", opacity: 0.25 },
                }}
                style={{
                  stroke: "var(--color-receitas)",
                }}
              />
              <Line
                type="monotone"
                dataKey="despesas"
                strokeWidth={2}
                activeDot={{
                  r: 6,
                  style: { fill: "var(--color-despesas)", opacity: 0.25 },
                }}
                style={{
                  stroke: "var(--color-despesas)",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
