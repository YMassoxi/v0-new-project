if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("Service Worker registrado com sucesso:", registration.scope)

        // Solicitar permissão para notificações
        if ("Notification" in window) {
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              console.log("Permissão para notificações concedida")
              subscribeToPushNotifications(registration)
            }
          })
        }
      })
      .catch((error) => {
        console.error("Erro ao registrar Service Worker:", error)
      })
  })
}

// Função para inscrever o usuário em notificações push
async function subscribeToPushNotifications(registration) {
  try {
    // Verificar se já existe uma inscrição
    let subscription = await registration.pushManager.getSubscription()

    if (!subscription) {
      // Criar uma nova inscrição
      const publicKey = urlBase64ToUint8Array(
        "BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U",
      )

      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKey,
      })

      // Enviar a inscrição para o servidor
      await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscription),
      })

      console.log("Usuário inscrito em notificações push")
    }
  } catch (error) {
    console.error("Erro ao inscrever em notificações push:", error)
  }
}

// Função auxiliar para converter chave pública
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/")

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

// Registrar para sincronização em segundo plano
if ("serviceWorker" in navigator && "SyncManager" in window) {
  navigator.serviceWorker.ready.then((registration) => {
    // Registrar sincronização para tarefas
    document.addEventListener("sync-tasks", () => {
      registration.sync.register("sync-tasks")
    })

    // Registrar sincronização para calendário
    document.addEventListener("sync-calendar", () => {
      registration.sync.register("sync-calendar")
    })
  })
}
