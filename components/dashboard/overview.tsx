"use client"

import type React from "react"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    pessoal: 40,
    profissional: 24,
    empresarial: 18,
  },
  {
    name: "Fev",
    pessoal: 30,
    profissional: 28,
    empresarial: 22,
  },
  {
    name: "Mar",
    pessoal: 20,
    profissional: 36,
    empresarial: 26,
  },
  {
    name: "Abr",
    pessoal: 27,
    profissional: 40,
    empresarial: 30,
  },
  {
    name: "Mai",
    pessoal: 18,
    profissional: 48,
    empresarial: 24,
  },
  {
    name: "Jun",
    pessoal: 23,
    profissional: 34,
    empresarial: 28,
  },
]

interface OverviewProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Overview({ className, ...props }: OverviewProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle className="font-orbitron">Visão Geral de Atividades</CardTitle>
        <CardDescription>Distribuição de tarefas por área nos últimos 6 meses.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            pessoal: {
              label: "Pessoal",
              color: "hsl(var(--chart-1))",
            },
            profissional: {
              label: "Profissional",
              color: "hsl(var(--chart-2))",
            },
            empresarial: {
              label: "Empresarial",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="aspect-[4/3]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
              <YAxis tickLine={false} axisLine={false} fontSize={12} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="pessoal" fill="var(--color-pessoal)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="profissional" fill="var(--color-profissional)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="empresarial" fill="var(--color-empresarial)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
