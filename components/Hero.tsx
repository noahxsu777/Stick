import React from 'react';
import { ArrowRight, Home, Building2, Paintbrush, MapPin } from 'lucide-react';
import { Language } from '../App';

const Hero: React.FC<{ language: Language }> = ({ language }) => {
  const es = language === 'es';
  return (
    <section id="home" className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2000&q=80" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/45" />
      </div>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-36 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-brand-200 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold mb-7"><MapPin className="w-4 h-4" /> Connecticut &amp; Rhode Island</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6">{es ? 'Un espacio que se siente' : 'A space that feels'} <span className="text-brand-300">{es ? 'como nuevo.' : 'like new.'}</span></h1>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mb-9">{es ? 'Limpieza residencial, comercial y remodelación para cuidar los espacios que más importan.' : 'Residential and commercial cleaning and remodeling for the spaces that matter most.'}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold shadow-lg transition-colors">{es ? 'Solicitar cotización' : 'Get a quote'} <ArrowRight className="w-5 h-5" /></a>
            <a href="#services" className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-white/40 bg-white/10 hover:bg-white/20 font-semibold transition-colors">{es ? 'Ver nuestros servicios' : 'Explore our services'}</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-12">
            {[[Home, es ? 'Hogares' : 'Homes'], [Building2, es ? 'Negocios' : 'Businesses'], [Paintbrush, es ? 'Remodelación' : 'Remodeling']].map(([Icon, label]) => {
              const ServiceIcon = Icon as typeof Home;
              return <a key={label as string} href="#services" className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm font-semibold hover:bg-white/20 transition-colors"><ServiceIcon className="w-5 h-5 text-brand-300" />{label as string}<ArrowRight className="w-4 h-4 ml-auto" /></a>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
