import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Language } from '../App';

interface FooterProps {
  onNavigate: (view: 'home' | 'privacy' | 'terms', sectionId?: string) => void;
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, language }) => {
  const content = {
    en: {
      desc: "Professional cleaning and remodeling services. Transforming homes and businesses with dedication and excellence.",
      services: "Services",
      legal: "Legal",
      res: "Residential Cleaning",
      comm: "Commercial Cleaning",
      ret: "Retail Services",
      rem: "Remodeling",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved."
    },
    es: {
      desc: "Servicios profesionales de limpieza y remodelación. Transformando hogares y empresas con dedicación y excelencia.",
      services: "Servicios",
      legal: "Legal",
      res: "Limpieza Residencial",
      comm: "Limpieza de Oficinas",
      ret: "Servicios para Retail",
      rem: "Remodelaciones",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      rights: "Todos los derechos reservados."
    }
  };

  const t = content[language];

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
             <span 
               className="text-2xl font-bold tracking-tight text-white cursor-pointer"
               onClick={() => onNavigate('home')}
             >
              Sumaq<span className="text-brand-500">Wasi</span>
            </span>
            <p className="mt-4 text-slate-400 max-w-sm">
              {t.desc}
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-brand-400 uppercase tracking-wider">{t.services}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <button onClick={() => onNavigate('home', '#services')} className="text-slate-400 hover:text-white text-left">
                  {t.res}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', '#services')} className="text-slate-400 hover:text-white text-left">
                  {t.comm}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', '#services')} className="text-slate-400 hover:text-white text-left">
                  {t.ret}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', '#services')} className="text-slate-400 hover:text-white text-left">
                  {t.rem}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-brand-400 uppercase tracking-wider">{t.legal}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <button onClick={() => onNavigate('privacy')} className="text-slate-400 hover:text-white text-left">
                  {t.privacy}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="text-slate-400 hover:text-white text-left">
                  {t.terms}
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Sumaq Wasi LLC. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;