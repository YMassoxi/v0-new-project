import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function PersonalTasksPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Tarefas Pessoais" text="Gerencie suas tarefas e compromissos pessoais.">
        <Button className="mt-2">
          <Plus className="mr-2 h-4 w-4" /> Nova Tarefa
        </Button>
      </DashboardHeader>

      <Tabs defaultValue="todas" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="todas">Todas</TabsTrigger>
          <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
          <TabsTrigger value="concluidas">Concluídas</TabsTrigger>
          <TabsTrigger value="importantes">Importantes</TabsTrigger>
        </TabsList>
        <TabsContent value="todas">
          <Card>
            <CardHeader>
              <CardTitle className="font-orbitron">Todas as Tarefas</CardTitle>
              <CardDescription>Visualize e gerencie todas as suas tarefas pessoais.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Checkbox id="task1" />
                  <div className="space-y-1">
                    <label
                      htmlFor="task1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Pagar contas do mês
                    </label>
                    <p className="text-xs text-muted-foreground">Vencimento: 15/04/2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Checkbox id="task2" />
                  <div className="space-y-1">
                    <label
                      htmlFor="task2"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Agendar consulta médica
                    </label>
                    <p className="text-xs text-muted-foreground">Até: 20/04/2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Checkbox id="task3" />
                  <div className="space-y-1">
                    <label
                      htmlFor="task3"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Comprar passagem para Lisboa
                    </label>
                    <p className="text-xs text-muted-foreground">Até: 25/04/2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Checkbox id="task4" checked />
                  <div className="space-y-1">
                    <label
                      htmlFor="task4"
                      className="text-sm font-medium leading-none line-through text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Renovar documentos
                    </label>
                    <p className="text-xs text-muted-foreground">Concluído: 10/04/2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pendentes">
          <Card>
            <CardHeader>
              <CardTitle className="font-orbitron">Tarefas Pendentes</CardTitle>
              <CardDescription>Visualize e gerencie suas tarefas pendentes.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Checkbox id="pending1" />
                  <div className="space-y-1">
                    <label
                      htmlFor="pending1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Pagar contas do mês
                    </label>
                    <p className="text-xs text-muted-foreground">Vencimento: 15/04/2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Checkbox id="pending2" />
                  <div className="space-y-1">
                    <label
                      htmlFor="pending2"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Agendar consulta médica
                    </label>
                    <p className="text-xs text-muted-foreground">Até: 20/04/2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Checkbox id="pending3" />
                  <div className="space-y-1">
                    <label
                      htmlFor="pending3"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Comprar passagem para Lisboa
                    </label>
                    <p className="text-xs text-muted-foreground">Até: 25/04/2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="concluidas">
          <Card>
            <CardHeader>
              <CardTitle className="font-orbitron">Tarefas Concluídas</CardTitle>
              <CardDescription>Visualize suas tarefas concluídas.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Checkbox id="completed1" checked />
                  <div className="space-y-1">
                    <label
                      htmlFor="completed1"
                      className="text-sm font-medium leading-none line-through text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Renovar documentos
                    </label>
                    <p className="text-xs text-muted-foreground">Concluído: 10/04/2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="importantes">
          <Card>
            <CardHeader>
              <CardTitle className="font-orbitron">Tarefas Importantes</CardTitle>
              <CardDescription>Visualize e gerencie suas tarefas marcadas como importantes.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Checkbox id="important1" />
                  <div className="space-y-1">
                    <label
                      htmlFor="important1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Comprar passagem para Lisboa
                    </label>
                    <p className="text-xs text-muted-foreground">Até: 25/04/2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
