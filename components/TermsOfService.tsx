import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, AlertCircle, Clock, CreditCard } from 'lucide-react';
import { Language } from '../App';

interface Props {
  onBack: () => void;
  language: Language;
}

const TermsOfService: React.FC<Props> = ({ onBack, language }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      back: "Back to Home",
      title: "Terms of Service",
      intro: "By hiring Sumaq Wasi LLC services, you agree to the following terms and conditions designed to ensure excellent service.",
      sections: [
        {
          title: "1. Service Acceptance",
          text: "By requesting a quote or scheduling a cleaning/remodeling with Sumaq Wasi LLC, you agree to comply with these Terms of Service. These terms apply to all users and clients of the company."
        },
        {
          title: "2. Cancellations & Rescheduling",
          policyTitle: "24-Hour Policy:",
          policyText: "We understand that unforeseen events may occur. However, we require at least **24 hours** notice to cancel or reschedule an appointment without cost.",
          list: ["Cancellations with less than 24 hours may incur a 50% charge of the estimated service.", "If our team arrives and cannot access the property, a travel fee will be charged."]
        },
        {
          title: "3. Payments & Billing",
          text: "Payment is due upon completion of service, unless a different term has been agreed upon in writing (common for corporate clients like Walmart/Big Y).",
          subtext: "We accept cash, checks, bank transfers, and major credit cards. For large remodeling projects, an initial deposit may be required before work begins."
        },
        {
          title: "4. Satisfaction Guarantee & Liability",
          text: "**Sumaq Wasi Guarantee:** If you are not completely satisfied with a cleaning area, contact us within 24 hours of service and we will return to re-clean that area at no additional cost.",
          subtext: "**Liability:** Sumaq Wasi LLC is fully insured. We treat your home or office with the utmost care. In the unlikely event of damage, notify us immediately (within 24 hours) to initiate the claim process with our insurance."
        }
      ],
      footer: "These terms are governed by the laws of the state where the service is provided."
    },
    es: {
      back: "Volver al Inicio",
      title: "Términos de Servicio",
      intro: "Al contratar los servicios de Sumaq Wasi LLC, usted acepta los siguientes términos y condiciones diseñados para asegurar un servicio excelente.",
      sections: [
        {
          title: "1. Aceptación del Servicio",
          text: "Al solicitar una cotización o agendar una limpieza/remodelación con Sumaq Wasi LLC, usted acepta cumplir con estos Términos de Servicio. Estos términos se aplican a todos los usuarios y clientes de la empresa."
        },
        {
          title: "2. Cancelaciones y Reprogramación",
          policyTitle: "Política de 24 Horas:",
          policyText: "Entendemos que pueden surgir imprevistos. Sin embargo, requerimos un aviso de al menos **24 horas** para cancelar o reprogramar una cita sin costo.",
          list: ["Cancelaciones con menos de 24 horas pueden incurrir en un cargo del 50% del servicio estimado.", "Si nuestro equipo llega y no puede acceder a la propiedad, se cobrará una tarifa por desplazamiento."]
        },
        {
          title: "3. Pagos y Facturación",
          text: "El pago es debido en el momento de la finalización del servicio, a menos que se haya acordado un término diferente por escrito (común para clientes corporativos como Walmart/Big Y).",
          subtext: "Aceptamos efectivo, cheques, transferencias bancarias y tarjetas de crédito principales. Para proyectos de remodelación grandes, se puede requerir un depósito inicial antes de comenzar el trabajo."
        },
        {
          title: "4. Garantía de Satisfacción y Responsabilidad",
          text: "**Garantía Sumaq Wasi:** Si no está completamente satisfecho con un área de limpieza, contáctenos dentro de las 24 horas posteriores al servicio y regresaremos para volver a limpiar esa área sin costo adicional.",
          subtext: "**Responsabilidad:** Sumaq Wasi LLC está totalmente asegurada. Tratamos su hogar u oficina con el máximo cuidado. En el improbable caso de daños, notifíquenos inmediatamente (dentro de las 24 horas) para iniciar el proceso de reclamación con nuestro seguro."
        }
      ],
      footer: "Estos términos se rigen por las leyes del estado donde se presta el servicio."
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
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-500/30">
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
                <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-2" />
                {t.sections[0].title}
              </h2>
              <p>
                {t.sections[0].text}
              </p>
            </section>

            <section>
              <h2 className="flex items-center text-xl font-bold text-slate-900 mb-4">
                <Clock className="w-5 h-5 text-indigo-600 mr-2" />
                {t.sections[1].title}
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <p className="font-medium text-slate-800 mb-2">{t.sections[1].policyTitle}</p>
                <p>
                  {t.sections[1].policyText?.split('**').map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm marker:text-indigo-500">
                  {t.sections[1].list?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="flex items-center text-xl font-bold text-slate-900 mb-4">
                <CreditCard className="w-5 h-5 text-indigo-600 mr-2" />
                {t.sections[2].title}
              </h2>
              <p className="mb-4">
                {t.sections[2].text}
              </p>
              <p>
                {t.sections[2].subtext}
              </p>
            </section>

            <section>
              <h2 className="flex items-center text-xl font-bold text-slate-900 mb-4">
                <AlertCircle className="w-5 h-5 text-indigo-600 mr-2" />
                {t.sections[3].title}
              </h2>
              <p className="mb-4">
                {t.sections[3].text?.split('**').map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
              </p>
              <p>
                {t.sections[3].subtext?.split('**').map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
              </p>
            </section>

            <div className="pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-500">
                {t.footer}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;