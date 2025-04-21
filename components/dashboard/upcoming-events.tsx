import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

interface UpcomingEventsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UpcomingEvents({ className, ...props }: UpcomingEventsProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle className="font-orbitron">Próximos Eventos</CardTitle>
        <CardDescription>Seus compromissos para os próximos dias.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 rounded-md border p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Reunião com Cliente</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                <span>Hoje, 14:00 - 15:30</span>
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="mr-1 h-3 w-3" />
                <span>Escritório Central, Luanda</span>
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-4 rounded-md border p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Entrega de Projeto</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                <span>Amanhã, 10:00</span>
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="mr-1 h-3 w-3" />
                <span>Remoto</span>
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-4 rounded-md border p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Voo para Lisboa</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                <span>Sexta, 08:45</span>
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="mr-1 h-3 w-3" />
                <span>Aeroporto Internacional 4 de Fevereiro</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
