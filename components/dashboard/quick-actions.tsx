import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarPlus, FileText, MessageSquare, PlusCircle, CreditCard, Map, Car } from "lucide-react"

interface QuickActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function QuickActions({ className, ...props }: QuickActionsProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle className="font-orbitron">Ações Rápidas</CardTitle>
        <CardDescription>Acesse rapidamente as funcionalidades mais utilizadas.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <Button variant="outline" className="h-24 flex-col gap-1 p-2">
            <PlusCircle className="h-8 w-8 mb-1" />
            <span>Nova Tarefa</span>
          </Button>
          <Button variant="outline" className="h-24 flex-col gap-1 p-2">
            <CalendarPlus className="h-8 w-8 mb-1" />
            <span>Agendar</span>
          </Button>
          <Button variant="outline" className="h-24 flex-col gap-1 p-2">
            <MessageSquare className="h-8 w-8 mb-1" />
            <span>WhatsApp</span>
          </Button>
          <Button variant="outline" className="h-24 flex-col gap-1 p-2">
            <FileText className="h-8 w-8 mb-1" />
            <span>Documentos</span>
          </Button>
          <Button variant="outline" className="h-24 flex-col gap-1 p-2">
            <CreditCard className="h-8 w-8 mb-1" />
            <span>Multicaixa</span>
          </Button>
          <Button variant="outline" className="h-24 flex-col gap-1 p-2">
            <CreditCard className="h-8 w-8 mb-1" />
            <span>Millennium BCP</span>
          </Button>
          <Button variant="outline" className="h-24 flex-col gap-1 p-2">
            <Map className="h-8 w-8 mb-1" />
            <span>Maps</span>
          </Button>
          <Button variant="outline" className="h-24 flex-col gap-1 p-2">
            <Car className="h-8 w-8 mb-1" />
            <span>Uber</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
