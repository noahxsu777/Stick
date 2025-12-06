import React from 'react';
import { Language } from '../App';

interface ClientsProps {
  language: Language;
}

const Clients: React.FC<ClientsProps> = ({ language }) => {
  const content = {
    en: {
      title: "Business Trust",
      subtitle: "Our quality standards are approved by market leaders",
      description: "applies the same deep cleaning and maintenance protocols required by these large corporations in your home or office. Industrial quality, home warmth."
    },
    es: {
      title: "Confianza Empresarial",
      subtitle: "Nuestros estándares de calidad están aprobados por líderes del mercado",
      description: "aplica los mismos protocolos de limpieza profunda y mantenimiento exigidos por estas grandes corporaciones en tu hogar u oficina. Calidad industrial, calidez de hogar."
    }
  };

  const t = content[language];

  return (
    <section id="clients" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-sm font-bold uppercase text-brand-600 tracking-widest mb-2">{t.title}</h3>
          <p className="text-2xl font-medium text-slate-800">
            {t.subtitle}
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            
            {/* Walmart Styled Logo */}
            <div className="group flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 cursor-default">
               <div className="text-5xl font-black text-[#0071CE] tracking-tighter">Walmart</div>
               <div className="text-[#FFC220] text-5xl font-bold -mt-4 animate-pulse">*</div>
            </div>
            
            <div className="h-12 w-px bg-slate-200 hidden md:block"></div>
            
            {/* Big Y Styled Logo */}
            <div className="group transition-all duration-300 transform hover:scale-105 filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 cursor-default">
              <div className="text-5xl font-black italic text-[#c8102e] font-serif">Big Y</div>
              <div className="text-xs text-[#c8102e] text-right font-sans font-bold tracking-widest uppercase mt-1">World Class Market</div>
            </div>

          </div>
          
          <div className="mt-10 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-brand-600">Sumaq Wasi LLC</span> {t.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;