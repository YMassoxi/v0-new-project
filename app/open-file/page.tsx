"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function OpenFilePage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Obter arquivo da API de lançamento de arquivos
    async function getFileData() {
      try {
        if ("launchQueue" in window && "files" in (window as any).launchQueue) {
          ;(window as any).launchQueue.setConsumer(async (launchParams: any) => {
            if (launchParams.files && launchParams.files.length) {
              // Obter o primeiro arquivo
              const fileHandle = launchParams.files[0]
              const file = await fileHandle.getFile()
              setFile(file)
            }
          })
        }
      } catch (error) {
        console.error("Erro ao processar arquivo:", error)
      } finally {
        setLoading(false)
      }
    }

    getFileData()
    setLoading(false)
  }, [])

  const handleOpen = async () => {
    try {
      // Aqui você implementaria a lógica para abrir o arquivo
      console.log("Abrindo arquivo:", file)

      // Redirecionar para a página principal após abrir
      router.push("/")
    } catch (error) {
      console.error("Erro ao abrir arquivo:", error)
    }
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Abrir Arquivo" text="Visualize e abra o arquivo no GPro." />

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="font-orbitron">Arquivo</CardTitle>
          <CardDescription>Detalhes do arquivo a ser aberto.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-6">
          {loading ? (
            <p>Carregando arquivo...</p>
          ) : file ? (
            <div className="text-center">
              <FileText className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-lg font-medium">{file.name}</h3>
              <p className="text-sm text-muted-foreground">
                {file.type} • {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>
          ) : (
            <p>Nenhum arquivo para abrir.</p>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push("/")}>
            Cancelar
          </Button>
          <Button onClick={handleOpen} disabled={!file}>
            Abrir
          </Button>
        </CardFooter>
      </Card>
    </DashboardShell>
  )
}
