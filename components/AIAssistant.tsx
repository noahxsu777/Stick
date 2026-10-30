import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import { sendMessageToAssistant } from '../services/geminiService';
import type { Language } from '../App';

export default function AIAssistant({ language }: { language: Language }) {
  const es = language === 'es';
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot'; text: string}[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const [input, setInput] = useState('');
  const log = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setMessages([{ role: 'bot', text: es ? '¡Hola! Soy Sam Lake, tu asistente de Sumaq Wasi. ¿Qué necesitas saber sobre limpieza, remodelación o cómo solicitar una cotización?' : 'Hi! I’m Sam Lake, your Sumaq Wasi assistant. What would you like to know about cleaning, remodeling or requesting a quote?' }]);
  }, [language]);
  useEffect(() => { if (open) field.current?.focus(); }, [open]);
  useEffect(() => { if (open && log.current) log.current.scrollTop = log.current.scrollHeight; }, [messages, open]);
  const close = () => { setOpen(false); trigger.current?.focus(); };
  const ask = async (value: string) => {
    const question = value.trim(); if (!question || busy) return;
    const history = messages.slice(1).map(item => ({ role: item.role === 'user' ? 'user' as const : 'assistant' as const, content: item.text }));
    setMessages(previous => [...previous.slice(-48), { role: 'user', text: question }]);
    setInput(''); setBusy(true); setError(false);
    try {
      const response = await sendMessageToAssistant([...history, {role:'user',content:question}].slice(-8), language);
      setMessages(previous => [...previous, {role:'bot',text:response}]);
    } catch { setError(true); }
    finally { setBusy(false); }
  };
  const lastQuestion = [...messages].reverse().find(item => item.role === 'user')?.text;
  const whatsappText = `${es ? '¡Hola Sumaq Wasi! Quisiera ayuda con una consulta.' : 'Hello Sumaq Wasi! I would like help with a question.'}${lastQuestion ? '\n\n' + lastQuestion : ''}`;
  return <>
    <button ref={trigger} className={`sw-chat-trigger${open ? ' is-hidden' : ''}`} onClick={() => setOpen(true)} aria-label={es ? 'Hablar con Sam Lake' : 'Chat with Sam Lake'} aria-expanded={open} aria-controls="sw-chat"><MessageCircle size={24}/></button>
    {open && <section id="sw-chat" className="sw-chat-panel" role="dialog" aria-labelledby="sw-chat-title" onKeyDown={event => { if (event.key === 'Escape') close(); }}>
      <header className="sw-chat-header"><span className="sw-chat-avatar"><img src="/sumaq-wasi-symbol.webp" width="775" height="480" alt=""/></span><div><h3 id="sw-chat-title">Sam Lake</h3><p><span className="sw-chat-status-dot"/>{es ? 'Asistente de Sumaq Wasi' : 'Sumaq Wasi assistant'}</p></div><button onClick={close} aria-label={es ? 'Cerrar asistente' : 'Close assistant'}><X size={21}/></button></header>
      <div className="sw-chat-log" ref={log} role="log" aria-live="polite" aria-relevant="additions">{messages.map((message,index) => <div key={index} className={`sw-chat-message ${message.role}`}><span className="sw-chat-sr">{message.role === 'user' ? (es ? 'Tú: ' : 'You: ') : 'Sam Lake: '}</span>{message.text}</div>)}{busy && <p className="sw-chat-thinking" role="status"><span className="sw-typing-dots" aria-hidden="true"><i/><i/><i/></span><span>{es ? 'Sam está escribiendo…' : 'Sam is typing…'}</span></p>}{error && <p className="sw-chat-error" role="alert">{es ? 'Sam no pudo responder en este momento. Puedes hablar con nuestro equipo por WhatsApp.' : 'Sam couldn’t respond right now. You can reach our team on WhatsApp.'}</p>}</div>
      <div className="sw-chat-quick" aria-label={es ? 'Consultas rápidas' : 'Quick questions'}>{(es ? ['Servicios','Cotización','Cobertura','Disponibilidad'] : ['Services','Quote','Coverage','Availability']).map(label => <button key={label} disabled={busy} onClick={() => ask(label)}>{label}</button>)}</div>
      <a className="sw-chat-whatsapp" href={`https://wa.me/18608655828?text=${encodeURIComponent(whatsappText)}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={17}/>{es ? 'Hablar con el equipo' : 'Talk to our team'}<ArrowUpRight size={17}/></a>
      <form className="sw-chat-compose" onSubmit={event => { event.preventDefault(); ask(input); }}><label className="sw-chat-sr" htmlFor="sw-chat-input">{es ? 'Tu consulta' : 'Your question'}</label><input ref={field} id="sw-chat-input" autoComplete="off" value={input} maxLength={1000} onChange={event => setInput(event.target.value)} placeholder={es ? 'Escribe tu consulta…' : 'Type your question…'}/><button type="submit" disabled={busy || !input.trim()} aria-label={es ? 'Enviar consulta' : 'Send question'}><Send size={18}/></button></form>
    </section>}
  </>;
}
