"use client"

import { useEffect, useState } from "react"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Smartphone, QrCode } from "lucide-react"

export default function DownloadPage() {
  const [isInstallable, setIsInstallable] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isAndroid, setIsAndroid] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Detectar se é Android ou iOS
    const userAgent = navigator.userAgent.toLowerCase()
    setIsAndroid(/android/.test(userAgent))
    setIsIOS(/iphone|ipad|ipod/.test(userAgent))

    // Detectar se o app é instalável
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevenir o comportamento padrão
      e.preventDefault()
      // Armazenar o evento para uso posterior
      setDeferredPrompt(e)
      // Atualizar UI para mostrar que é instalável
      setIsInstallable(true)
    })

    return () => {
      window.removeEventListener("beforeinstallprompt", () => {})
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    // Mostrar o prompt de instalação
    deferredPrompt.prompt()

    // Esperar pela escolha do usuário
    const { outcome } = await deferredPrompt.userChoice
    console.log(`Resultado da instalação: ${outcome}`)

    // Limpar o prompt salvo, só pode ser usado uma vez
    setDeferredPrompt(null)
    setIsInstallable(false)
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Baixar GPro"
        text="Instale o GPro no seu dispositivo para acesso offline e melhor experiência."
      />

      <Tabs defaultValue="android" className="w-full max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="android">Android</TabsTrigger>
          <TabsTrigger value="ios">iOS</TabsTrigger>
        </TabsList>

        <TabsContent value="android" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-orbitron">Instalar no Android</CardTitle>
              <CardDescription>
                Escolha uma das opções abaixo para instalar o GPro no seu dispositivo Android.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Opção 1: Instalar diretamente do navegador</h3>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-1 space-y-2">
                    <p className="text-sm">Esta é a maneira mais fácil de instalar o GPro:</p>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      <li>Toque nos três pontos (⋮) no canto superior direito do Chrome</li>
                      <li>Selecione "Instalar aplicativo" ou "Adicionar à tela inicial"</li>
                      <li>Confirme a instalação</li>
                    </ol>
                    {isInstallable && isAndroid && (
                      <Button onClick={handleInstall} className="mt-2">
                        <Smartphone className="mr-2 h-4 w-4" />
                        Instalar GPro
                      </Button>
                    )}
                  </div>
                  <div className="w-40 h-40 bg-white p-2 rounded-lg">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                        "https://v0-new-project-f61hcw9i0kf.vercel.app/",
                      )}`}
                      alt="QR Code para instalar o GPro"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Opção 2: Baixar o APK</h3>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-1 space-y-2">
                    <p className="text-sm">Se preferir, você pode baixar o arquivo APK diretamente:</p>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      <li>Clique no botão "Baixar APK" abaixo</li>
                      <li>Abra o arquivo baixado (geralmente em Downloads)</li>
                      <li>Permita a instalação de fontes desconhecidas se solicitado</li>
                      <li>Siga as instruções na tela para concluir a instalação</li>
                    </ol>
                    <Button asChild className="mt-2">
                      <a
                        href="https://bubblewrap-api.vercel.app/api/pwa?url=https://v0-new-project-f61hcw9i0kf.vercel.app/"
                        download="gpro.apk"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Baixar APK
                      </a>
                    </Button>
                  </div>
                  <div className="w-40 h-40 flex items-center justify-center bg-muted rounded-lg">
                    <QrCode className="h-20 w-20 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ios" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-orbitron">Instalar no iOS</CardTitle>
              <CardDescription>
                Siga as instruções abaixo para adicionar o GPro à sua tela inicial no iPhone ou iPad.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Adicionar à tela inicial</h3>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-1 space-y-2">
                    <p className="text-sm">Para instalar o GPro no seu dispositivo iOS:</p>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      <li>Abra o site no Safari (importante: deve ser o Safari)</li>
                      <li>Toque no ícone de compartilhamento (□↑)</li>
                      <li>Role para baixo e toque em "Adicionar à Tela de Início"</li>
                      <li>Confirme tocando em "Adicionar" no canto superior direito</li>
                    </ol>
                  </div>
                  <div className="w-40 h-40 bg-white p-2 rounded-lg">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                        "https://v0-new-project-f61hcw9i0kf.vercel.app/",
                      )}`}
                      alt="QR Code para instalar o GPro"
                      className="w-full h-full"
                    />
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
