// TypeScript: étendre window pour gtag et dataLayer
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [showPrefs, setShowPrefs] = useState(false);


  // Fonction pour poser un vrai cookie
  function setCookie(name: string, value: string, days: number) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
  }

  // Fonction pour charger Google Analytics après consentement
  function loadGoogleAnalytics() {
     if (typeof window.gtag === 'function') return; // déjà chargé
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-1TDHDSS6BQ';
    script.async = true;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) { window.dataLayer!.push(args); }
    window.gtag = gtag;
    window.gtag('js', new Date());
    window.gtag('config', 'G-1TDHDSS6BQ');
  }

  const handleAccept = () => {
    setVisible(false);
    localStorage.setItem('cookieConsent', 'true');
    setCookie('cookieConsent', 'accepted', 365);
    loadGoogleAnalytics();
  };

  const handlePreferences = () => {
    setShowPrefs(true);
  };

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem('cookieConsent', 'closed');
  };

  React.useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:bottom-8 md:right-8 md:left-auto md:translate-x-0 z-50 max-w-xl w-[95vw] md:w-full bg-background border border-white/10 rounded-3xl shadow-2xl flex items-center p-6 gap-6 animate-fade-in backdrop-blur-md" style={{boxShadow:'0 8px 32px 0 rgba(0,0,0,0.25)'}}>
      {/* Cookies SVG réalistes */}
      <div className="hidden md:flex flex-col gap-2 items-center">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="28" fill="#F5D6A1" stroke="#E2B97F" strokeWidth="3" />
          <circle cx="20" cy="22" r="3" fill="#A97B50" />
          <circle cx="38" cy="28" r="2.5" fill="#A97B50" />
          <circle cx="28" cy="38" r="2" fill="#A97B50" />
          <circle cx="40" cy="40" r="1.5" fill="#A97B50" />
          <circle cx="34" cy="18" r="1.5" fill="#A97B50" />
        </svg>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="16" fill="#F5D6A1" stroke="#E2B97F" strokeWidth="2" />
          <circle cx="12" cy="12" r="2" fill="#A97B50" />
          <circle cx="24" cy="20" r="1.5" fill="#A97B50" />
          <circle cx="20" cy="26" r="1" fill="#A97B50" />
        </svg>
      </div>
      <div className="flex-1 text-sm md:text-base text-white">
        <span className="font-bold text-xl text-primary">Cookies</span>
        <p className="mt-1 mb-3 text-white/90 leading-relaxed">
          Nous utilisons des cookies pour personnaliser le contenu, mesurer l’audience et améliorer votre expérience. En cliquant sur « Accepter », vous consentez à leur utilisation. <Link to="/privacy" className="underline text-primary">En savoir plus</Link>.
        </p>
        <div className="flex gap-3 mt-2">
          <button onClick={handleAccept} className="bg-primary text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-primary/80 transition">Accepter</button>
          <button onClick={handlePreferences} className="bg-white/90 text-black px-6 py-2 rounded-lg font-bold shadow hover:bg-white transition">Préférences</button>
        </div>
        {showPrefs && (
          <div className="mt-4 p-4 rounded-xl bg-white/10 border border-white/10">
            <div className="font-semibold mb-2 text-primary text-base">Préférences cookies</div>
            <div className="text-xs text-white/80 mb-3">Vous pouvez choisir d’accepter uniquement les cookies essentiels. Les cookies de mesure d’audience (Google Analytics) sont optionnels.</div>
            <div className="flex gap-2">
              <button onClick={handleAccept} className="bg-primary text-white px-4 py-1.5 rounded font-bold shadow hover:bg-primary/80 transition">Accepter tout</button>
              <button onClick={handleClose} className="bg-white/90 text-black px-4 py-1.5 rounded font-bold shadow hover:bg-white transition">Essentiels uniquement</button>
            </div>
          </div>
        )}
        <div className="mt-3 text-xs text-white/60">
          Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Contactez-nous pour toute demande.
        </div>
      </div>
      <button onClick={handleClose} className="ml-2 text-white/60 hover:text-primary text-2xl font-bold p-1 rounded transition absolute top-3 right-4">
        ×
      </button>
    </div>
  );
};

export default CookieBanner;
