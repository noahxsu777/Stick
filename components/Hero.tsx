import React from 'react';
import { ArrowRight, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../App';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    en: {
      badge: "Excellence in Cleaning & Remodeling",
      titleStart: "Sumaq Wasi",
      titleEnd: "Transform Your Space",
      description: "We bring Walmart and Big Y standards to your home. Deep cleaning, luxury remodeling, and attention to detail that you'll love.",
      ctaPrimary: "Quote on WhatsApp",
      ctaSecondary: "View Services",
      insured: "Fully Insured",
      satisfaction: "100% Satisfaction",
      cardTitle: "Brilliant Results",
      cardSub: "In every corner of your home"
    },
    es: {
      badge: "Excelencia en Limpieza y Remodelación",
      titleStart: "Sumaq Wasi",
      titleEnd: "Transforma tu Espacio",
      description: "Llevamos los estándares de Walmart y Big Y a tu hogar. Limpieza profunda, remodelaciones de lujo y atención al detalle que enamora.",
      ctaPrimary: "Cotizar por WhatsApp",
      ctaSecondary: "Ver Servicios",
      insured: "Empresa Asegurada",
      satisfaction: "Satisfacción 100%",
      cardTitle: "Resultados Brillantes",
      cardSub: "En cada rincón de tu hogar"
    }
  };

  const t = content[language];

  return (
    <div id="home" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Living Room"
          className="w-full h-full object-cover opacity-50 scale-105 animate-pulse-slow"
          style={{ animationDuration: '20s' }}
        />
        {/* Advanced Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900" />
      </div>

      {/* Animated Blobs for "Beautiful Effects" */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-in-up">
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-all duration-300 group cursor-default shadow-[0_0_20px_rgba(56,189,248,0.3)]">
              <Sparkles className="w-4 h-4 text-brand-400 mr-2 animate-pulse" />
              <span className="text-brand-100 font-medium text-sm tracking-wide uppercase group-hover:text-white transition-colors">
                {t.badge}
              </span>
            </div>
            
            {/* Main Heading with Gradient */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-lg">
              {t.titleStart} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-white to-brand-300 animate-gradient-x">
                {t.titleEnd}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-xl leading-relaxed font-light">
              {language === 'en' ? (
                <>
                  We bring the standards of <strong>Walmart</strong> and <strong>Big Y</strong> to your home. Deep cleaning, luxury remodeling, and attention to detail that you'll love.
                </>
              ) : (
                 <>
                  Llevamos los estándares de <strong>Walmart</strong> y <strong>Big Y</strong> a tu hogar. Limpieza profunda, remodelaciones de lujo y atención al detalle que enamora.
                </>
              )}
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-brand-600 to-brand-500 rounded-full shadow-lg shadow-brand-500/40 hover:shadow-brand-500/60 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></span>
                <span className="relative flex items-center">
                  {t.ctaPrimary}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-white/30 bg-white/5 backdrop-blur-md rounded-full hover:bg-white/15 transition-all duration-300 hover:border-white/50"
              >
                {t.ctaSecondary}
              </a>
            </div>

            {/* Stats/Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-300 font-medium">
              <div className="flex items-center bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700/50">
                <ShieldCheck className="w-5 h-5 text-green-400 mr-2" />
                {t.insured}
              </div>
              <div className="flex items-center bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700/50">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                {t.satisfaction}
              </div>
            </div>
          </div>

          {/* Floating Card Image - Hidden on mobile, visible on LG */}
          <div className="hidden lg:block relative animate-float-delayed">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
              <div className="absolute inset-0 bg-brand-500/20 mix-blend-overlay z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1581578731117-104f2a863ccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Cleaning Professional" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Glass Element */}
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-800 text-lg">{t.cardTitle}</p>
                    <p className="text-sm text-slate-500">{t.cardSub}</p>
                  </div>
                  <div className="bg-brand-100 p-2 rounded-full">
                    <Sparkles className="w-6 h-6 text-brand-600" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative blobs behind image */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-slate-50 fill-current w-full h-auto">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;