/**
 * Função para fazer perguntas à assistente virtual Maria
 * @param question A pergunta a ser feita
 * @returns Uma promessa que resolve para a resposta da assistente
 */
export async function askMaria(question: string): Promise<string> {
  // Simulação de resposta da assistente
  // Em uma implementação real, isso se conectaria a uma API de IA
  const respostas = [
    "Posso ajudar você a organizar sua agenda para a próxima semana.",
    "Vou verificar suas finanças e criar um relatório personalizado.",
    "Suas tarefas prioritárias para hoje foram atualizadas.",
    "Encontrei 3 documentos relacionados à sua pesquisa.",
    "Lembrete: você tem uma reunião importante amanhã às 10h.",
    `Sobre "${question}", vou pesquisar e te dar mais informações em breve.`,
  ]

  // Simula um tempo de resposta
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Retorna uma resposta aleatória
  return respostas[Math.floor(Math.random() * respostas.length)]
}
