const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434'

export async function getEmbedding(text: string): Promise<number[]> {
  const res = await fetch(`${OLLAMA_URL}/api/embeddings`, {
    method: 'POST',
    body: JSON.stringify({ model: 'nomic-embed-text', prompt: text }),
  })
  if (!res.ok) {
    throw new Error(`Ollama embeddings error: ${res.status} ${await res.text()}`)
  }
  const data = await res.json()
  return data.embedding
}