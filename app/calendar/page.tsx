import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Calendário" text="Gerencie seus compromissos e eventos." />

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-5">
          <CardHeader>
            <CardTitle className="font-orbitron">Calendário</CardTitle>
            <CardDescription>Visualize e gerencie seus compromissos.</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="range" className="rounded-md border" />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="font-orbitron">Próximos Eventos</CardTitle>
            <CardDescription>Seus compromissos para os próximos dias.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="font-medium">Hoje</div>
                <div className="rounded-md border p-3">
                  <div className="font-medium">Reunião com Cliente</div>
                  <div className="text-xs text-muted-foreground">14:00 - 15:30</div>
                  <div className="text-xs text-muted-foreground">Escritório Central, Luanda</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-medium">Amanhã</div>
                <div className="rounded-md border p-3">
                  <div className="font-medium">Entrega de Projeto</div>
                  <div className="text-xs text-muted-foreground">10:00</div>
                  <div className="text-xs text-muted-foreground">Remoto</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-medium">Sexta-feira</div>
                <div className="rounded-md border p-3">
                  <div className="font-medium">Voo para Lisboa</div>
                  <div className="text-xs text-muted-foreground">08:45</div>
                  <div className="text-xs text-muted-foreground">Aeroporto Internacional 4 de Fevereiro</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
