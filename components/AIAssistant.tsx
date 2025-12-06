import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToAssistant } from '../services/geminiService';
import { Language } from '../App';

interface AIProps {
  language: Language;
}

const AIAssistant: React.FC<AIProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Reset initial message when language changes
  useEffect(() => {
    const greeting = language === 'en'
      ? "Hi! I'm the Sumaq Wasi virtual assistant. How can I help you with your cleaning or remodeling needs today?"
      : "¡Hola! Soy el asistente virtual de Sumaq Wasi. ¿En qué puedo ayudarte hoy con tu limpieza o remodelación?";
    
    setMessages([{role: 'bot', text: greeting}]);
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Build simple history context for the API
    const history = messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`);
    
    const responseText = await sendMessageToAssistant(userMsg, history, language);
    
    setMessages(prev => [...prev, { role: 'bot', text: responseText }]);
    setIsLoading(false);
  };

  const t = {
    title: language === 'en' ? 'Sumaq Wasi Assistant' : 'Asistente Sumaq Wasi',
    online: language === 'en' ? 'Online with Gemini AI' : 'En línea con Gemini AI',
    placeholder: language === 'en' ? 'Type your query...' : 'Escribe tu consulta...',
    label: language === 'en' ? 'Chat with assistant' : 'Chat con asistente'
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-brand-600 text-white p-4 rounded-full shadow-2xl hover:bg-brand-700 transition-all transform hover:scale-110 flex items-center justify-center ${isOpen ? 'hidden' : 'flex'}`}
        aria-label={t.label}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col transition-all duration-300 origin-bottom-right border border-slate-100 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-500 p-4 rounded-t-2xl flex justify-between items-center text-white">
          <div className="flex items-center space-x-2">
            <div className="bg-white/20 p-1.5 rounded-full">
               <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">{t.title}</h3>
              <p className="text-xs text-brand-100 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                {t.online}
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-100">
                <Loader2 className="w-5 h-5 text-brand-500 animate-spin" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 bg-white rounded-b-2xl">
          <div className="flex items-center space-x-2 bg-slate-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-brand-500/50 transition-shadow">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t.placeholder}
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm outline-none text-slate-700 placeholder:text-slate-400"
            />
            <button 
              type="submit" 
              disabled={isLoading || !inputValue.trim()}
              className="p-1.5 bg-brand-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-700 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AIAssistant;