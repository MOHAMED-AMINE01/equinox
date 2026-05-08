import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import CookieBanner from './CookieBanner';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set header to have a background on any scroll, making it transparent only at the very top.
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Réalisations', path: '/portfolio' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
  ];

  // Pages with a hero image that should sit under the transparent navbar.
  // For these pages, we remove the top padding from the main container.
  const pagesWithHero = ['/', '/services', '/a-propos', '/contact', '/portfolio', '/legal', '/privacy'];
  const isProjectDetailsPage = /^\/portfolio\/\d+$/.test(location.pathname);
  const hasHero = pagesWithHero.includes(location.pathname) || isProjectDetailsPage;

  return (
    <div className="min-h-screen flex flex-col bg-background text-text selection:bg-primary selection:text-white">
      <CookieBanner />
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent border-b border-transparent'}`}>
        <div className="container mx-auto px-6 h-24 flex justify-between items-center">

          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/EQUINOX-LOGO_1-Blanc.png"
              alt="EQUINOX Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* RIGHT: Navigation (Desktop) & Burger (Mobile) */}
          <div>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center gap-2.5 group"
                  >
                    {/* Bullet Point Indicator */}
                    <span className={`w-1.5 h-1.5 rounded-full border transition-all duration-300 
                      ${isActive
                        ? 'bg-primary border-primary'
                        : 'bg-transparent border-white/40 group-hover:border-white'}`}
                    />

                    {/* Link Text - Increased size to text-sm */}
                    <span className={`text-sm font-bold tracking-[0.15em] uppercase transition-colors duration-300
                      ${isActive ? 'text-white' : 'text-textMuted group-hover:text-white'}`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Burger Button */}
            <button
              className={`lg:hidden w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 
                  ${isMenuOpen ? 'bg-primary text-white' : 'bg-white/5 text-white hover:bg-white hover:text-black'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-32 px-6 lg:hidden">
          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-3xl font-display font-bold transition-colors flex items-center gap-4
                  ${location.pathname === link.path ? 'text-primary' : 'text-white hover:text-primary'}`}
              >
                <span className={`w-2 h-2 rounded-full border ${location.pathname === link.path ? 'bg-primary border-primary' : 'border-white/20'}`}></span>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className={`flex-grow ${hasHero ? '' : 'pt-24'}`}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-surface text-white pt-24 pb-12 relative z-10 overflow-hidden">
        {/* Blue Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2"></div>
        {/* Top Gradient Border */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">

            {/* Column 1: Brand (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center text-center md:items-start md:text-left">
              <Link to="/" className="inline-block mb-8">
                <img
                  src="/EQUINOX-LOGO_2-Blanc.png"
                  alt="EQUINOX"
                  className="h-48 w-auto object-contain"
                />
              </Link>
              <p className="text-textMuted leading-relaxed max-w-sm">
                Conception, installation et maintenance de cuisines professionnelles pour CHR et collectivités à Monaco et sur la Côte d’Azur.
              </p>
            </div>

            {/* Column 2: Navigation (2 cols) - NEW HOVER EFFECT */}
            <div className="lg:col-span-2 lg:col-start-6 flex flex-col items-center text-center md:items-start md:text-left">
              <h4 className="text-white font-bold text-lg mb-8">Navigation</h4>
              <ul className="space-y-6">
                {[
                  { name: 'Accueil', path: '/' },
                  { name: 'Services', path: '/services' },
                  { name: 'Réalisations', path: '/portfolio' },
                  { name: 'À propos', path: '/a-propos' },
                  { name: 'Contact', path: '/contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="group flex items-center justify-center md:justify-start">
                      {/* Hidden '+' that slides in and expands */}
                      <span className="text-primary font-bold overflow-hidden w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 ease-out whitespace-nowrap block">
                        +
                      </span>
                      {/* Link Text */}
                      <span className="text-textMuted group-hover:text-primary transition-colors duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact (3 cols) */}
            <div className="lg:col-span-3 flex flex-col items-center text-center md:items-start md:text-left">
              <h4 className="text-white font-bold text-lg mb-8">Nous contacter</h4>
              <ul className="space-y-3">
                {/* Téléphone */}
                <li>
                  <span className="text-white/50 text-xs uppercase tracking-widest block mb-1">Téléphone :</span>
                  <a href="tel:+33493989339" className="group flex items-center justify-center md:justify-start">
                    <span className="text-primary font-bold overflow-hidden w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 ease-out whitespace-nowrap block">
                      +
                    </span>
                    <span className="text-textMuted group-hover:text-primary transition-colors duration-300">
                      +33 4 93 98 93 39
                    </span>
                  </a>
                </li>

                {/* Email */}
                <li>
                  <span className="text-white/50 text-xs uppercase tracking-widest block mb-1">Email :</span>
                  <a href="mailto:contact@equinox.mc" className="group flex items-center justify-center md:justify-start">
                    <span className="text-primary font-bold overflow-hidden w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 ease-out whitespace-nowrap block">
                      +
                    </span>
                    <span className="text-textMuted group-hover:text-primary transition-colors duration-300">
                      contact@equinox.mc
                    </span>
                  </a>
                </li>

                {/* Nous trouver */}
                <li>
                  <span className="text-white/50 text-xs uppercase tracking-widest block mb-2">Nous trouver :</span>
                  <div className="space-y-2">
                    <a href="https://maps.app.goo.gl/6UezjTnDmJ3krLUPA" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center md:justify-start">
                      <span className="text-primary font-bold overflow-hidden w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 ease-out whitespace-nowrap block">
                        +
                      </span>
                      <span className="text-textMuted group-hover:text-primary transition-colors duration-300">
                        France
                      </span>
                    </a>
                    <a href="https://www.google.com/maps/place/5+Rue+Louis+Notari,+98000+Monaco/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center md:justify-start">
                      <span className="text-primary font-bold overflow-hidden w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 ease-out whitespace-nowrap block">
                        +
                      </span>
                      <span className="text-textMuted group-hover:text-primary transition-colors duration-300">
                        Monaco
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 4: Follow (3 cols) */}
            <div className="lg:col-span-2 flex flex-col items-center text-center md:items-start md:text-left">
              <h4 className="text-white font-bold text-lg mb-8">Nous suivre</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.instagram.com/equinox_cuisine" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61565974004284" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                  <Facebook size={20} />
                </a>
                <a href="https://linkedin.com/company/equinox-cuisine" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>


          {/* ADC Logo: Centered on Mobile, Corner on Desktop */}
          {/* <div className="flex justify-center md:block mt-12 mb-4 md:m-0">
            <img
              src="/ADC-BLANC.jpg"
              alt="Attestation de Capacité"
              className="h-20 md:h-24 w-auto object-contain transition-all duration-500 md:absolute md:bottom-16 md:right-12"
            />
          </div> */}

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-textMuted text-center md:text-left mt-16">
            <p>&copy; {new Date().getFullYear()} EQUINOX. Tous droits réservés.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <Link to="/legal" className="hover:text-primary transition-colors">Mentions légales</Link>
              <Link to="/privacy" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
            </div>
          </div>

        </div>
      </footer>

      {/* Scroll To Top Button - Fixed */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed right-6 bottom-6 md:right-10 md:bottom-10 z-50 w-12 h-12 rounded-full bg-surfaceLight border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-transparent transition-all duration-500 shadow-2xl ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Remonter en haut"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};