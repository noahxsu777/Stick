import React, { useEffect } from 'react';
import { Shield, ArrowLeft, Lock, Eye, FileText } from 'lucide-react';
import { Language } from '../App';

interface Props {
  onBack: () => void;
  language: Language;
}

const PrivacyPolicy: React.FC<Props> = ({ onBack, language }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      back: "Back to Home",
      title: "Privacy Policy",
      intro: "At Sumaq Wasi LLC, we value your trust and are committed to protecting your personal information with the highest standards.",
      sections: [
        {
          title: "1. Information Collection",
          text: "We collect information that you provide directly to us when you request a quote, schedule a service, or communicate with us. This may include:",
          list: ["Contact information (Name, phone number, email).", "Property details (Address, approximate size, specific cleaning or remodeling needs).", "Communications sent via our web form or WhatsApp."]
        },
        {
          title: "2. Use of Information",
          text: "We use the information collected to:",
          list: ["Provide, maintain, and improve our cleaning and remodeling services.", "Process transactions and send confirmations or invoices.", "Respond to your comments, questions, and customer service requests.", "Send you service-related communications (reminders, schedule changes)."]
        },
        {
          title: "3. Data Protection & Sharing",
          text: "We do not sell or rent your personal information to third parties.",
          subtext: "We may share information with trusted service providers who help us operate our business (e.g., payment processing or communication tools like WhatsApp), always under strict confidentiality agreements."
        },
        {
          title: "4. Changes to this Policy",
          text: "Sumaq Wasi LLC reserves the right to update this privacy policy at any time. We will notify you of significant changes in how we treat personal information by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site."
        }
      ],
      updated: "Last updated:",
      contact: "If you have questions about this policy, contact us at"
    },
    es: {
      back: "Volver al Inicio",
      title: "Política de Privacidad",
      intro: "En Sumaq Wasi LLC, valoramos su confianza y nos comprometemos a proteger su información personal con los más altos estándares.",
      sections: [
        {
          title: "1. Recopilación de Información",
          text: "Recopilamos información que usted nos proporciona directamente cuando solicita una cotización, programa un servicio o se comunica con nosotros. Esto puede incluir:",
          list: ["Información de contacto (Nombre, número de teléfono, correo electrónico).", "Detalles de la propiedad (Dirección, tamaño aproximado, necesidades específicas de limpieza o remodelación).", "Comunicaciones enviadas a través de nuestro formulario web o WhatsApp."]
        },
        {
          title: "2. Uso de la Información",
          text: "Utilizamos la información recopilada para:",
          list: ["Proporcionar, mantener y mejorar nuestros servicios de limpieza y remodelación.", "Procesar transacciones y enviar confirmaciones o facturas.", "Responder a sus comentarios, preguntas y solicitudes de servicio al cliente.", "Enviarle comunicaciones relacionadas con su servicio (recordatorios, cambios de horario)."]
        },
        {
          title: "3. Protección y Compartición de Datos",
          text: "No vendemos ni alquilamos su información personal a terceros.",
          subtext: "Podemos compartir información con proveedores de servicios de confianza que nos ayudan a operar nuestro negocio (por ejemplo, procesamiento de pagos o herramientas de comunicación como WhatsApp), siempre bajo acuerdos de confidencialidad estrictos."
        },
        {
          title: "4. Cambios en esta Política",
          text: "Sumaq Wasi LLC se reserva el derecho de actualizar esta política de privacidad en cualquier momento. Le notificaremos sobre cambios significativos en la forma en que tratamos la información personal enviando un aviso a la dirección de correo electrónico principal especificada en su cuenta o colocando un aviso destacado en nuestro sitio."
        }
      ],
      updated: "Última actualización:",
      contact: "Si tiene preguntas sobre esta política, contáctenos en"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={onBack}
          className="group flex items-center text-slate-500 hover:text-brand-600 font-medium mb-8 transition-colors"
        >
          <div className="bg-white p-2 rounded-full shadow-sm border border-slate-200 mr-3 group-hover:border-brand-200">
             <ArrowLeft className="w-5 h-5" />
          </div>
          {t.back}
        </button>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          
          {/* Header */}
          <div className="bg-slate-900 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-widest mb-4 border border-brand-500/30">
                Legal
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.title}</h1>
              <p className="text-slate-300 text-lg max-w-2xl">
                {t.intro}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8 text-slate-600 leading-relaxed">
            
            <section>
              <h2 className="flex items-center text-xl font-bold text-slate-900 mb-4">
                <Shield className="w-5 h-5 text-brand-500 mr-2" />
                {t.sections[0].title}
              </h2>
              <p className="mb-4">
                {t.sections[0].text}
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-brand-500">
                {t.sections[0].list?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="flex items-center text-xl font-bold text-slate-900 mb-4">
                <Eye className="w-5 h-5 text-brand-500 mr-2" />
                {t.sections[1].title}
              </h2>
              <p>{t.sections[1].text}</p>
              <ul className="list-disc pl-5 space-y-2 mt-2 marker:text-brand-500">
                 {t.sections[1].list?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="flex items-center text-xl font-bold text-slate-900 mb-4">
                <Lock className="w-5 h-5 text-brand-500 mr-2" />
                {t.sections[2].title}
              </h2>
              <p className="mb-4">
                <strong>{t.sections[2].text}</strong>
              </p>
              <p>
                {t.sections[2].subtext}
              </p>
            </section>

            <section>
              <h2 className="flex items-center text-xl font-bold text-slate-900 mb-4">
                <FileText className="w-5 h-5 text-brand-500 mr-2" />
                {t.sections[3].title}
              </h2>
              <p>
               {t.sections[3].text}
              </p>
            </section>

            <div className="pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-500">
                {t.updated} {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm text-slate-500 mt-2">
                {t.contact} <span className="text-brand-600 font-medium">contacto@sumaqwasi.com</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;