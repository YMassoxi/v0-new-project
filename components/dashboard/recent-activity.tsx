import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface RecentActivityProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RecentActivity({ className, ...props }: RecentActivityProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle className="font-orbitron">Atividade Recente</CardTitle>
        <CardDescription>Últimas ações e atualizações em suas tarefas.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="flex items-center">
            <Avatar className="h-9 w-9 mr-3">
              <AvatarImage src="/placeholder.svg" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Você concluiu a tarefa <span className="font-semibold">Preparar apresentação</span>
              </p>
              <p className="text-xs text-muted-foreground">Há 2 horas</p>
            </div>
            <Badge variant="outline" className="ml-auto">
              Profissional
            </Badge>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9 mr-3">
              <AvatarImage src="/placeholder.svg" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Você adicionou uma nova tarefa <span className="font-semibold">Pagar contas</span>
              </p>
              <p className="text-xs text-muted-foreground">Há 5 horas</p>
            </div>
            <Badge variant="outline" className="ml-auto">
              Pessoal
            </Badge>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9 mr-3">
              <AvatarImage src="/placeholder.svg" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Você atualizou o projeto <span className="font-semibold">Expansão de Mercado</span>
              </p>
              <p className="text-xs text-muted-foreground">Ontem às 18:30</p>
            </div>
            <Badge variant="outline" className="ml-auto">
              Empresarial
            </Badge>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9 mr-3">
              <AvatarImage src="/placeholder.svg" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Você agendou uma reunião com <span className="font-semibold">Carlos Silva</span>
              </p>
              <p className="text-xs text-muted-foreground">Ontem às 14:15</p>
            </div>
            <Badge variant="outline" className="ml-auto">
              Profissional
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
