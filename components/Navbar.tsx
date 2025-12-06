import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles, Globe } from 'lucide-react';
import { Language } from '../App';

interface NavbarProps {
  onNavigate: (view: 'home' | 'privacy' | 'terms', sectionId?: string) => void;
  currentView: 'home' | 'privacy' | 'terms';
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView, language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      home: 'Home',
      services: 'Services',
      clients: 'Clients',
      about: 'About Us',
      cta: 'Get Quote'
    },
    es: {
      home: 'Inicio',
      services: 'Servicios',
      clients: 'Clientes',
      about: 'Nosotros',
      cta: 'Cotizar Ahora'
    }
  };

  const t = content[language];

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.services, href: '#services' },
    { name: t.clients, href: '#clients' },
    { name: t.about, href: '#about' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      onNavigate('home', href);
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled || currentView !== 'home'
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3 border-b border-white/20' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center group cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg mr-3 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled || currentView !== 'home' ? 'text-slate-800' : 'text-white'}`}>
              Sumaq<span className="text-brand-400">Wasi</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium relative group transition-colors duration-300 ${
                  isScrolled || currentView !== 'home' ? 'text-slate-600 hover:text-brand-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                 isScrolled || currentView !== 'home' 
                 ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' 
                 : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <Globe className="w-3 h-3 mr-1.5" />
              <span className={language === 'en' ? 'text-brand-500' : ''}>EN</span>
              <span className="mx-1 opacity-50">|</span>
              <span className={language === 'es' ? 'text-brand-500' : ''}>ES</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className={`inline-flex items-center px-6 py-2.5 border text-sm font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-brand-500/25 ${
                isScrolled || currentView !== 'home'
                  ? 'border-transparent bg-brand-600 text-white hover:bg-brand-700' 
                  : 'border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-brand-600'
              }`}
            >
              <Phone className="w-4 h-4 mr-2" />
              {t.cta}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             {/* Mobile Language Toggle */}
             <button
              onClick={toggleLanguage}
              className={`flex items-center px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                 isScrolled || currentView !== 'home' 
                 ? 'bg-slate-100 text-slate-600' 
                 : 'bg-white/10 text-white border border-white/20'
              }`}
            >
              <span className={language === 'en' ? 'text-brand-400' : ''}>EN</span>
              <span className="mx-1 opacity-50">|</span>
              <span className={language === 'es' ? 'text-brand-400' : ''}>ES</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg transition-colors duration-300 ${
                isScrolled || currentView !== 'home' ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/20'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ease-in-out md:hidden z-50 overflow-hidden ${
          isOpen ? 'max-h-96 border-b border-slate-100' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-slate-100">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex w-full items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-brand-600 hover:bg-brand-700 shadow-md"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;