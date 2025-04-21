/**
 * Abre o WhatsApp com um número e mensagem pré-definidos
 * @param phoneNumber Número de telefone no formato internacional (ex: 5511999999999)
 * @param message Mensagem pré-definida
 */
export function openWhatsApp(phoneNumber: string, message: string): void {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")
}

/**
 * Abre o Google Maps com uma localização específica
 * @param location Nome ou endereço do local
 */
export function openGoogleMaps(location: string): void {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
  window.open(url, "_blank")
}
