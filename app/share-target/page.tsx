"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ShareTargetPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [url, setUrl] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Obter parâmetros da URL para compartilhamentos via GET
    const titleParam = searchParams.get("title")
    const textParam = searchParams.get("text")
    const urlParam = searchParams.get("url")

    if (titleParam) setTitle(titleParam)
    if (textParam) setText(textParam)
    if (urlParam) setUrl(urlParam)

    // Para compartilhamentos via POST (arquivos)
    async function getFormData() {
      try {
        const formData = await (window as any).launchQueue?.files?.[0]
        if (formData) {
          setFile(formData)
        }
      } catch (error) {
        console.error("Erro ao processar arquivo compartilhado:", error)
      } finally {
        setLoading(false)
      }
    }

    getFormData()
    setLoading(false)
  }, [searchParams])

  const handleSave = async () => {
    try {
      // Aqui você implementaria a lógica para salvar o conteúdo compartilhado
      console.log("Salvando conteúdo compartilhado:", { title, text, url, file })

      // Redirecionar para a página principal após salvar
      router.push("/")
    } catch (error) {
      console.error("Erro ao salvar conteúdo compartilhado:", error)
    }
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Conteúdo Compartilhado" text="Revise e salve o conteúdo compartilhado com o GPro." />

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="font-orbitron">Salvar Conteúdo</CardTitle>
          <CardDescription>Revise e edite o conteúdo antes de salvar.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título do conteúdo"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="text">Texto</Label>
            <Textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Texto ou descrição"
              rows={4}
            />
          </div>

          {url && (
            <div className="space-y-2">
              <Label htmlFor="url">URL</Label>
              <Input id="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL do conteúdo" />
            </div>
          )}

          {file && (
            <div className="space-y-2">
              <Label>Arquivo</Label>
              <div className="p-3 border rounded-md">
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {file.type} • {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push("/")}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>Salvar</Button>
        </CardFooter>
      </Card>
    </DashboardShell>
  )
}
