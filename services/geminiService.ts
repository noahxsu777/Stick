export type AssistantMessage = { role: 'user' | 'assistant'; content: string };
export async function sendMessageToAssistant(messages: AssistantMessage[], language: 'en' | 'es'): Promise<string> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: messages.slice(-8), language }),
    signal: AbortSignal.timeout(25000),
  });
  if (!response.ok) throw new Error('ai_unavailable');
  const result = await response.json();
  if (typeof result.text !== 'string' || !result.text.trim() || result.source !== 'ai') throw new Error('invalid_response');
  return result.text;
}
