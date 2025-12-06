import { GoogleGenAI } from "@google/genai";

// Ensure API Key is available
const apiKey = process.env.API_KEY;

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const sendMessageToAssistant = async (message: string, history: string[], language: 'en' | 'es'): Promise<string> => {
  if (!ai) {
    return language === 'en' 
      ? "Sorry, the virtual assistant is not configured (Missing API Key)." 
      : "Lo siento, el asistente virtual no está configurado actualmente (Falta API Key).";
  }

  try {
    const model = "gemini-2.5-flash";
    const systemInstruction = `
      You are the friendly and professional virtual assistant for "Sumaq Wasi LLC".
      
      Company Info:
      - Name: Sumaq Wasi LLC (Means "Beautiful House" in Quechua).
      - Services: House cleaning, office cleaning, commercial deep cleaning, and remodeling.
      - Notable Clients: We work with big companies like Big Y and Walmart.
      - Tone: Friendly, helpful, professional, and persuasive.
      - Goal: Help the client understand our services and encourage them to ask for a quote via WhatsApp.
      
      CRITICAL INSTRUCTION:
      The user is currently viewing the website in language code: "${language}".
      You MUST respond in ${language === 'en' ? 'ENGLISH' : 'SPANISH'}.
      
      Keep answers concise. Use emojis occasionally.
    `;

    const prompt = `
      Conversation History:
      ${history.join("\n")}
      
      User (${language}): ${message}
      Assistant:
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || (language === 'en' ? "I couldn't process that request right now." : "Lo siento, no pude procesar tu solicitud en este momento.");
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return language === 'en' 
      ? "There was an error connecting to the server. Please try again later."
      : "Hubo un error al conectar con el servidor. Por favor intenta más tarde.";
  }
};