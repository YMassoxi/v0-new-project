const CACHE_NAME = "gpro-cache-v2"
const urlsToCache = [
  "/",
  "/calendar",
  "/personal/tasks",
  "/icon",
  "/apple-icon",
  "/favicon.ico",
  "/manifest.webmanifest",
]

// Instalação do Service Worker e cache de recursos
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache aberto")
      return cache.addAll(urlsToCache)
    }),
  )
})

// Ativação do Service Worker e limpeza de caches antigos
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Interceptação de requisições para servir do cache quando offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - retorna a resposta do cache
      if (response) {
        return response
      }
      return fetch(event.request).then((response) => {
        // Verifica se recebemos uma resposta válida
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        // Clone a resposta
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
    }),
  )
})

// Gerenciamento de notificações push
self.addEventListener("push", (event) => {
  const data = event.data.json()
  const options = {
    body: data.body,
    icon: "/icon",
    badge: "/icon",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "1",
      url: data.url || "/",
    },
    actions: [
      {
        action: "explore",
        title: "Ver detalhes",
        icon: "/icon",
      },
      {
        action: "close",
        title: "Fechar",
        icon: "/icon",
      },
    ],
  }

  event.waitUntil(self.registration.showNotification(data.title, options))
})

// Gerenciamento de cliques em notificações
self.addEventListener("notificationclick", (event) => {
  const notification = event.notification
  const action = event.action
  const url = notification.data.url

  if (action === "close") {
    notification.close()
  } else {
    event.waitUntil(
      clients.matchAll({ type: "window" }).then((clientList) => {
        // Verifica se já existe uma janela aberta e a foca
        for (const client of clientList) {
          if (client.url === url && "focus" in client) {
            return client.focus()
          }
        }
        // Se não existir, abre uma nova janela
        if (clients.openWindow) {
          return clients.openWindow(url)
        }
      }),
    )
  }
  notification.close()
})
