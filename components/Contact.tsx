import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles } from 'lucide-react';
import { Language } from '../App';

interface ContactProps {
  preselectedService?: string;
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ preselectedService, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const content = {
    en: {
      badge: "Direct Contact",
      title: "Ready to renew your space?",
      subtitle: "Fill out the form and we will automatically redirect you to **WhatsApp**. You will receive priority and personalized attention instantly.",
      call: "Call Us",
      area: "Service Area",
      areaDesc: "Connecticut and surroundings",
      formTitle: "Quote via WhatsApp",
      name: "Full Name",
      phone: "Phone",
      service: "Service of Interest",
      details: "Project Details",
      detailsPH: "Tell us: square footage, type of cleaning, urgency...",
      btn: "Send to WhatsApp",
      note: "Clicking will open WhatsApp Web or App with your message ready.",
      options: ["Residential Cleaning", "Commercial Cleaning", "Remodeling & Painting", "Other Services"],
      msg: {
        intro: "Hello Sumaq Wasi, I would like a quote.",
        name: "Name",
        phone: "Phone",
        service: "Service",
        msg: "Message"
      }
    },
    es: {
      badge: "Contacto Directo",
      title: "¿Listo para renovar tu espacio?",
      subtitle: "Completa el formulario y te redirigiremos automáticamente a **WhatsApp**. Recibirás atención prioritaria y personalizada al instante.",
      call: "Llámanos",
      area: "Área de Servicio",
      areaDesc: "Connecticut y alrededores",
      formTitle: "Cotiza por WhatsApp",
      name: "Nombre Completo",
      phone: "Teléfono",
      service: "Servicio de Interés",
      details: "Detalles del Proyecto",
      detailsPH: "Cuéntanos: metros cuadrados, tipo de limpieza, urgencia...",
      btn: "Enviar a WhatsApp",
      note: "Al hacer clic, se abrirá WhatsApp Web o la App con tu mensaje listo.",
      options: ["Limpieza Residencial", "Limpieza Comercial", "Remodelación y Pintura", "Otros Servicios"],
      msg: {
        intro: "Hola Sumaq Wasi, me gustaría una cotización.",
        name: "Nombre",
        phone: "Teléfono",
        service: "Servicio",
        msg: "Mensaje"
      }
    }
  };

  const t = content[language];

  // Update service when prop changes, or set default based on language if empty
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        service: preselectedService
      }));
    } else {
       setFormData(prev => ({
        ...prev,
        service: t.options[0]
      }));
    }
  }, [preselectedService, language]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const phoneNumber = "18608655828"; // Updated business number
    const text = `${t.msg.intro}%0A%0A*${t.msg.name}:* ${formData.name}%0A*Email:* ${formData.email}%0A*${t.msg.phone}:* ${formData.phone}%0A*${t.msg.service}:* ${formData.service}%0A*${t.msg.msg}:* ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-brand-900/40 to-slate-900 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* Animated Blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob z-0"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000 z-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-5 text-white">
            <div className="inline-block p-3 rounded-2xl bg-white/5 backdrop-blur-md mb-6 border border-white/10">
              <Sparkles className="w-6 h-6 text-brand-400" />
            </div>
            <h2 className="text-brand-400 font-semibold tracking-wider uppercase mb-3">{t.badge}</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{t.title}</h3>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed font-light">
               {language === 'en' 
                ? <>Fill out the form and we will automatically redirect you to <strong>WhatsApp</strong>. You will receive priority and personalized attention instantly.</>
                : <>Completa el formulario y te redirigiremos automáticamente a <strong>WhatsApp</strong>. Recibirás atención prioritaria y personalizada al instante.</>
               }
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-14 h-14 glass-dark rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-brand-500 group-hover:border-brand-400 transition-all duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">{t.call}</p>
                  <p className="text-xl font-semibold mt-1 group-hover:text-brand-300 transition-colors">+1 (860) 865-5828</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-14 h-14 glass-dark rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-brand-500 group-hover:border-brand-400 transition-all duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Email</p>
                  <p className="text-xl font-semibold mt-1 group-hover:text-brand-300 transition-colors">contacto@sumaqwasi.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-14 h-14 glass-dark rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-brand-500 group-hover:border-brand-400 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">{t.area}</p>
                  <p className="text-xl font-semibold mt-1 group-hover:text-brand-300 transition-colors">{t.areaDesc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="glass-card bg-white/95 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/50 backdrop-blur-xl">
              <div className="h-2 bg-gradient-to-r from-brand-400 via-brand-600 to-indigo-600"></div>
              <div className="p-8 md:p-10">
                <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  {t.formTitle}
                </h4>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">{t.name}</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 transition-all outline-none"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 transition-all outline-none"
                        placeholder="juan@correo.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">{t.phone}</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 transition-all outline-none"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">{t.service}</label>
                    <div className="relative">
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="block w-full appearance-none rounded-xl border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 transition-all outline-none"
                      >
                        {t.options.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">{t.details}</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 transition-all outline-none resize-none"
                      placeholder={t.detailsPH}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:scale-[1.02] hover:shadow-green-500/30 relative overflow-hidden"
                  >
                    <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></span>
                    <Send className="w-5 h-5 mr-2" />
                    {t.btn}
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    {t.note}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;