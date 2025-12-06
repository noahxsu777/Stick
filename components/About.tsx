import React from 'react';
import { Award, Users, Clock, ShieldCheck } from 'lucide-react';
import { Language } from '../App';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const content = {
    en: {
      exp: "Years of experience creating beautiful spaces",
      title: "About",
      subtitle: "means",
      meaning: "Beautiful House",
      inQuechua: "in Quechua. That is our origin and our promise. Founded with the mission to elevate standards of cleaning and renovation.",
      p2: "We don't just clean; we care for your investment. Whether it's a complete office remodel or weekly home maintenance, we apply the same rigor demanded by our corporate clients.",
      quality: { title: "Premium Quality", desc: "Corporate standards in every job." },
      team: { title: "Expert Team", desc: "Trained and trustworthy personnel." },
      punctuality: { title: "Punctuality", desc: "We respect your time, always." },
      insured: { title: "Insured", desc: "Fully insured LLC company." }
    },
    es: {
      exp: "Años de experiencia creando espacios hermosos",
      title: "Sobre",
      subtitle: "significa",
      meaning: "Casa Hermosa",
      inQuechua: "en Quechua. Ese es nuestro origen y nuestra promesa. Fundada con la misión de elevar los estándares de limpieza y renovación.",
      p2: "No solo limpiamos; cuidamos tu inversión. Ya sea una remodelación completa de oficina o el mantenimiento semanal de tu casa, aplicamos la misma rigurosidad que exigen nuestros clientes corporativos.",
      quality: { title: "Calidad Premium", desc: "Estándares corporativos en cada trabajo." },
      team: { title: "Equipo Experto", desc: "Personal entrenado y de confianza." },
      punctuality: { title: "Puntualidad", desc: "Respetamos tu tiempo, siempre." },
      insured: { title: "Asegurados", desc: "Empresa LLC totalmente asegurada." }
    }
  };

  const t = content[language];

  return (
    <section id="about" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute top-0 left-0 -ml-4 -mt-4 w-24 h-24 bg-brand-100 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute bottom-0 right-0 -mr-4 -mb-4 w-32 h-32 bg-teal-100 rounded-full opacity-50 blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Team cleaning" 
              className="relative rounded-2xl shadow-2xl w-full object-cover transform transition-transform duration-500 hover:scale-[1.02]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="text-4xl font-bold text-brand-600">10+</p>
              <p className="text-slate-600 font-medium">{t.exp}</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              {t.title} <span className="text-brand-600">Sumaq Wasi</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              "Sumaq Wasi" {t.subtitle} <span className="font-semibold text-brand-500">{t.meaning}</span> {t.inQuechua}
            </p>
            <p className="text-lg text-slate-600 mb-8">
              {t.p2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Award className="w-6 h-6 text-brand-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-slate-900">{t.quality.title}</h4>
                  <p className="text-sm text-slate-500">{t.quality.desc}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Users className="w-6 h-6 text-brand-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-slate-900">{t.team.title}</h4>
                  <p className="text-sm text-slate-500">{t.team.desc}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-slate-900">{t.punctuality.title}</h4>
                  <p className="text-sm text-slate-500">{t.punctuality.desc}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-brand-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-slate-900">{t.insured.title}</h4>
                  <p className="text-sm text-slate-500">{t.insured.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;