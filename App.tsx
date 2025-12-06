import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

type ViewState = 'home' | 'privacy' | 'terms';
export type Language = 'en' | 'es';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedService, setSelectedService] = useState<string>('');
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('en'); // Default to English

  // Handle navigation logic
  const handleNavigate = (view: ViewState, sectionId?: string) => {
    setCurrentView(view);
    if (sectionId) {
      if (view === 'home') {
        // If we are going to home with a section, set it as pending scroll
        setPendingScroll(sectionId);
      }
    } else {
      // If just changing pages, scroll to top
      window.scrollTo(0, 0);
    }
  };

  // Effect to handle scrolling after view change
  useEffect(() => {
    if (currentView === 'home' && pendingScroll) {
      // Small timeout to ensure DOM is rendered
      setTimeout(() => {
        const element = document.getElementById(pendingScroll.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setPendingScroll(null);
      }, 100);
    }
  }, [currentView, pendingScroll]);

  const handleServiceSelect = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans">
      <Navbar 
        onNavigate={handleNavigate} 
        currentView={currentView} 
        language={language}
        setLanguage={setLanguage}
      />
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero language={language} />
            <Clients language={language} />
            <Services onServiceSelect={handleServiceSelect} language={language} />
            <About language={language} />
            <Contact preselectedService={selectedService} language={language} />
          </>
        )}
        
        {currentView === 'privacy' && (
          <PrivacyPolicy onBack={() => handleNavigate('home')} language={language} />
        )}

        {currentView === 'terms' && (
          <TermsOfService onBack={() => handleNavigate('home')} language={language} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} language={language} />
      <AIAssistant language={language} />
    </div>
  );
}

export default App;