"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"

export default function ProtocolHandlerPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [protocolUrl, setProtocolUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Obter URL do protocolo personalizado
    const url = searchParams.get("url")
    setProtocolUrl(url)
    setLoading(false)
  }, [searchParams])

  const handleProcess = async () => {
    try {
      // Aqui você implementaria a lógica para processar a URL do protocolo
      console.log("Processando URL do protocolo:", protocolUrl)

      // Redirecionar para a página principal após processar
      router.push("/")
    } catch (error) {
      console.error("Erro ao processar URL do protocolo:", error)
    }
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Protocolo GPro" text="Processar URL do protocolo personalizado." />

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="font-orbitron">URL do Protocolo</CardTitle>
          <CardDescription>Detalhes da URL do protocolo personalizado.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-6">
          {loading ? (
            <p>Carregando dados do protocolo...</p>
          ) : protocolUrl ? (
            <div className="text-center">
              <Link className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-lg font-medium">Protocolo GPro</h3>
              <p className="text-sm text-muted-foreground break-all">{protocolUrl}</p>
            </div>
          ) : (
            <p>Nenhuma URL de protocolo para processar.</p>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push("/")}>
            Cancelar
          </Button>
          <Button onClick={handleProcess} disabled={!protocolUrl}>
            Processar
          </Button>
        </CardFooter>
      </Card>
    </DashboardShell>
  )
}
