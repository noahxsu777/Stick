import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import { sendMessageToAssistant } from '../services/geminiService';
import type { Language } from '../App';

export default function AIAssistant({ language }: { language: Language }) {
  const es = language === 'es';
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot'; text: string}[]>([]);
  const [input, setInput] = useState('');
  const log = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setMessages([{ role: 'bot', text: es ? '¡Hola! Bienvenido a Sumaq Wasi. Soy una guía automática de consultas frecuentes. Puedo orientarte sobre nuestros servicios y cómo solicitar una cotización.' : 'Hi! Welcome to Sumaq Wasi. I’m an automated FAQ guide. I can help you explore our services and request a quote.' }]);
  }, [language]);
  useEffect(() => { if (open) field.current?.focus(); }, [open]);
  useEffect(() => { if (open && log.current) log.current.scrollTop = log.current.scrollHeight; }, [messages, open]);
  const close = () => { setOpen(false); trigger.current?.focus(); };
  const ask = (value: string) => {
    const question = value.trim(); if (!question) return;
    const response = sendMessageToAssistant(question, [], language);
    setMessages(previous => [...previous.slice(-48), { role: 'user', text: question }, { role: 'bot', text: response }]);
    setInput('');
  };
  const lastQuestion = [...messages].reverse().find(item => item.role === 'user')?.text;
  const whatsappText = `${es ? '¡Hola Sumaq Wasi! Quisiera ayuda con una consulta.' : 'Hello Sumaq Wasi! I would like help with a question.'}${lastQuestion ? '\n\n' + lastQuestion : ''}`;
  return <>
    <button ref={trigger} className={`sw-chat-trigger${open ? ' is-hidden' : ''}`} onClick={() => setOpen(true)} aria-label={es ? 'Abrir asistente' : 'Open assistant'} aria-expanded={open} aria-controls="sw-chat"><MessageCircle size={24}/></button>
    {open && <section id="sw-chat" className="sw-chat-panel" role="dialog" aria-labelledby="sw-chat-title" onKeyDown={event => { if (event.key === 'Escape') close(); }}>
      <header className="sw-chat-header"><span className="sw-chat-avatar"><img src="/sumaq-wasi-symbol.webp" width="775" height="480" alt=""/></span><div><h3 id="sw-chat-title">Sumaq Wasi</h3><p>{es ? 'Guía de consultas frecuentes' : 'Automated FAQ guide'}</p></div><button onClick={close} aria-label={es ? 'Cerrar asistente' : 'Close assistant'}><X size={21}/></button></header>
      <div className="sw-chat-log" ref={log} role="log" aria-live="polite" aria-relevant="additions">{messages.map((message,index) => <div key={index} className={`sw-chat-message ${message.role}`}><span className="sw-chat-sr">{message.role === 'user' ? (es ? 'Tú: ' : 'You: ') : 'Sumaq Wasi: '}</span>{message.text}</div>)}</div>
      <div className="sw-chat-quick" aria-label={es ? 'Consultas rápidas' : 'Quick questions'}>{(es ? ['Servicios','Cotización','Cobertura','Disponibilidad'] : ['Services','Quote','Coverage','Availability']).map(label => <button key={label} onClick={() => ask(label)}>{label}</button>)}</div>
      <a className="sw-chat-whatsapp" href={`https://wa.me/18608655828?text=${encodeURIComponent(whatsappText)}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={17}/>{es ? 'Hablar con el equipo' : 'Talk to our team'}<ArrowUpRight size={17}/></a>
      <form className="sw-chat-compose" onSubmit={event => { event.preventDefault(); ask(input); }}><label className="sw-chat-sr" htmlFor="sw-chat-input">{es ? 'Tu consulta' : 'Your question'}</label><input ref={field} id="sw-chat-input" autoComplete="off" value={input} maxLength={1000} onChange={event => setInput(event.target.value)} placeholder={es ? 'Escribe tu consulta…' : 'Type your question…'}/><button type="submit" disabled={!input.trim()} aria-label={es ? 'Enviar consulta' : 'Send question'}><Send size={18}/></button></form>
    </section>}
  </>;
}
