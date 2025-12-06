import React from 'react';
import { Home, Building2, PaintBucket, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '../App';

interface ServicesProps {
  onServiceSelect: (serviceName: string) => void;
  language: Language;
}

const Services: React.FC<ServicesProps> = ({ onServiceSelect, language }) => {
  const content = {
    en: {
      badge: "Our Specialties",
      titleStart: "Comprehensive Solutions for",
      titleEnd: "Your Space",
      description: "We combine advanced cleaning technology with remodeling craftsmanship to create perfect environments.",
      services: [
        {
          title: "Residential Cleaning",
          description: "We transform your home into a sanctuary of purity. Detailed deep cleaning for kitchens, bathrooms, and common areas.",
          features: ["Deep cleaning", "Surface disinfection", "Basic organization"],
        },
        {
          title: "Commercial Cleaning",
          description: "Solutions for offices, retail, and large surfaces. Maintain an impeccable image for your clients.",
          features: ["Corporate protocols", "Flexible schedules", "Supplies included"],
        },
        {
          title: "Remodeling & Painting",
          description: "We completely renovate your spaces. Professional painting, flooring finishes, and structural improvements.",
          features: ["Interior/Exterior Painting", "Flooring installation", "Drywall and finishes"],
        }
      ],
      btn: "Request this service"
    },
    es: {
      badge: "Nuestras Especialidades",
      titleStart: "Soluciones Integrales para",
      titleEnd: "Tu Espacio",
      description: "Combinamos tecnología de limpieza avanzada con la artesanía de la remodelación para crear ambientes perfectos.",
      services: [
        {
          title: "Limpieza Residencial",
          description: "Transformamos tu hogar en un santuario de pureza. Limpieza profunda detallada para cocinas, baños y zonas comunes.",
          features: ["Limpieza profunda", "Desinfección de superficies", "Organización básica"],
        },
        {
          title: "Limpieza Comercial",
          description: "Soluciones para oficinas, retail y grandes superficies. Mantén una imagen impecable para tus clientes.",
          features: ["Protocolos corporativos", "Horarios flexibles", "Suministros incluidos"],
        },
        {
          title: "Remodelación y Pintura",
          description: "Renovamos tus espacios por completo. Pintura profesional, acabados de pisos y mejoras estructurales.",
          features: ["Pintura interior/exterior", "Instalación de pisos", "Drywall y acabados"],
        }
      ],
      btn: "Solicitar este servicio"
    }
  };

  const t = content[language];

  // Static properties that don't change with language
  const staticServiceProps = [
    {
      icon: <Home className="w-7 h-7 text-white" />,
      color: "from-brand-400 to-brand-600",
      accent: "text-brand-600",
      image: "https://kplusclean.com/wp-content/uploads/2021/06/post-600x350.jpg"
    },
    {
      icon: <Building2 className="w-7 h-7 text-white" />,
      color: "from-indigo-400 to-indigo-600",
      accent: "text-indigo-600",
      image: "https://imagenesyogonet.b-cdn.net/data/imagenes/2020/06/09/31541/md_1625351884-limpieza-casino-coronavirus-navajo-gaming.jpg"
    },
    {
      icon: <PaintBucket className="w-7 h-7 text-white" />,
      color: "from-amber-400 to-amber-600",
      accent: "text-amber-600",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white shadow-sm text-brand-600 text-sm font-bold tracking-wider uppercase mb-4 border border-brand-100">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            {t.titleStart} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">{t.titleEnd}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-500 leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.map((service, index) => {
             const staticProps = staticServiceProps[index];
             return (
              <div 
                key={index} 
                className="group relative bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-500/20 overflow-hidden transition-all duration-500 hover:-translate-y-3 flex flex-col"
              >
                {/* Image Header */}
                <div className="h-60 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  <img 
                    src={staticProps.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${staticProps.color} flex items-center justify-center shadow-lg z-20 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border-2 border-white/20`}>
                    {staticProps.icon}
                  </div>
                  
                  {/* Shine Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-30"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col relative z-20 bg-white">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed flex-1">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-slate-600 font-medium">
                        <div className={`mr-3 p-1 rounded-full bg-slate-50 ${staticProps.accent}`}>
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => onServiceSelect(service.title)}
                    className={`inline-flex items-center justify-center w-full py-3 rounded-xl font-bold ${staticProps.accent} bg-slate-50 hover:bg-brand-50 transition-all duration-300 group-hover:shadow-md cursor-pointer`}
                  >
                    {t.btn}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;