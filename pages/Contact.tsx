import React, { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, ArrowRight, Check, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';


export const Contact: React.FC = () => {
   const [captchaVerified, setCaptchaVerified] = useState(false);
   const [captchaLoading, setCaptchaLoading] = useState(false);
   const [activeMap, setActiveMap] = useState<'fr' | 'mc' | null>(null);
   const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
   });
   const mapFrRef = useRef<HTMLDivElement>(null);
   const mapMcRef = useRef<HTMLDivElement>(null);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev: typeof formData) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      setFormStatus('submitting');

      try {
         // Utilisation d'une variable d'environnement pour l'URL de l'API
         const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
         const response = await fetch(`${apiUrl}/api/contact`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });

         if (response.ok) {
            setFormStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            
            // Masquer le message de succès après 2 secondes
            setTimeout(() => {
               setFormStatus('idle');
            }, 2000);
         } else {
            setFormStatus('error');
         }
      } catch (error) {
         console.error('Error submitting form:', error);
         setFormStatus('error');
      }
   };

   const handleCaptchaClick = () => {
      if (!captchaVerified && !captchaLoading) {
         setCaptchaLoading(true);
         // Simulate network verification
         setTimeout(() => {
            setCaptchaLoading(false);
            setCaptchaVerified(true);
         }, 1500);
      }
   };

   const scrollToMap = (type: 'fr' | 'mc') => {
      setActiveMap(type);
      setTimeout(() => {
         if (type === 'fr' && mapFrRef.current) {
            mapFrRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
         } else if (type === 'mc' && mapMcRef.current) {
            mapMcRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
         }
      }, 100);
      setTimeout(() => setActiveMap(null), 2000); // Remove highlight after 2s
   };

   return (
      <div className="bg-background min-h-screen text-white">

         {/* HEADER SECTION (Hero) */}
         <div className="relative h-[50vh] min-h-[400px] w-full flex flex-col justify-center items-center overflow-hidden border-b border-white/5 pt-32">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0">
               <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
                  alt="Contact Header"
                  className="w-full h-full object-cover scale-105"
               />
               {/* Dark Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/80"></div>
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-background/90"></div>
            </div>

            {/* Hero Text Content */}
            <div className="relative z-10 text-center animate-up">
               <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight mb-8 drop-shadow-2xl text-white">
                  Contactez-nous
               </h1>
               <div className="flex items-center justify-center gap-6 text-xs font-bold tracking-[0.2em] text-textMuted uppercase">
                  <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
                  <span className="w-12 h-[1px] bg-primary"></span>
                  <span className="text-white">Contact</span>
               </div>
            </div>
         </div>

         {/* Main Content Split */}
         <div className="container mx-auto px-6 py-24">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

               {/* LEFT COLUMN: FORM */}
               <div className="lg:w-7/12 relative">
                  <div className="bg-surfaceLight/50 backdrop-blur-sm p-8 md:p-14 rounded-3xl border border-white/5 relative z-10">
                     <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-white">Envoyez-nous un message</h2>

                     <form className="space-y-10" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="group">
                           <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Nom, Prénom *"
                              required
                              className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-textMuted/50 focus:outline-none focus:border-primary transition-colors text-lg"
                           />
                        </div>

                        {/* Email */}
                        <div className="group">
                           <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Email *"
                              required
                              className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-textMuted/50 focus:outline-none focus:border-primary transition-colors text-lg"
                           />
                        </div>

                        {/* Phone */}
                        <div className="group">
                           <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Téléphone"
                              className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-textMuted/50 focus:outline-none focus:border-primary transition-colors text-lg"
                           />
                        </div>

                        {/* Subject */}
                        <div className="group">
                           <input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              placeholder="Sujet"
                              className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-textMuted/50 focus:outline-none focus:border-primary transition-colors text-lg"
                           />
                        </div>

                        {/* Message */}
                        <div className="group">
                           <textarea
                              rows={4}
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Votre Message *"
                              required
                              className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-textMuted/50 focus:outline-none focus:border-primary transition-colors resize-none text-lg"
                           ></textarea>
                        </div>

                        {/* Submit Button - Bubble Style */}
                        <div className="pt-8 flex flex-col gap-4">
                           <button 
                              type="submit" 
                              disabled={formStatus === 'submitting'}
                              className="group relative inline-flex items-center justify-start h-16 w-40 cursor-pointer bg-transparent border-none p-0 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                           >
                              <span className="absolute left-0 h-16 w-16 bg-white/5 rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-primary border border-white/10 shadow-lg"></span>
                              <span className="relative z-10 pl-6 text-sm font-bold tracking-[0.2em] uppercase text-white transition-colors whitespace-nowrap">
                                 {formStatus === 'submitting' ? 'Envoi...' : 'Envoyer'}
                              </span>
                           </button>

                           {formStatus === 'success' && (
                              <p className="text-green-500 font-medium">Votre message a été envoyé avec succès !</p>
                           )}
                           {formStatus === 'error' && (
                              <p className="text-red-500 font-medium">Une erreur est survenue. Veuillez réessayer.</p>
                           )}
                        </div>
                     </form>
                  </div>
               </div>

               {/* RIGHT COLUMN: INFO */}
               <div className="lg:w-5/12 flex flex-col justify-center pt-10 lg:pt-0">

                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight text-white">
                     Un projet en tête ? <br /> Parlons-en ensemble.
                  </h2>

                  <p className="text-textMuted text-lg leading-relaxed mb-12">
                     Que vous ayez un projet de cuisine professionnelle à concevoir, une installation à prévoir ou un besoin d’accompagnement technique, notre équipe est à votre écoute pour vous apporter des solutions sur mesure.
                     <br /><br />
                     Contactez-nous dès aujourd’hui par téléphone ou par email. Nous serons ravis d’échanger sur les besoins de votre établissement.
                  </p>


                  <div className="space-y-12">
                     {/* Téléphone */}
                     <div className="flex flex-col gap-2 relative pl-8 border-l border-white/10">
                        <span className="text-xs font-bold uppercase tracking-widest text-textMuted">Téléphone</span>
                        <div className="flex flex-col gap-1">
                           <a href="tel:0493989339" className="text-xl md:text-2xl text-white hover:text-primary transition-colors font-medium">04 93 98 93 39</a>
                        </div>
                     </div>

                     {/* Email */}
                     <div className="flex flex-col gap-2 relative pl-8 border-l border-white/10">
                        <span className="text-xs font-bold uppercase tracking-widest text-textMuted">Email</span>
                        <a href="mailto:contact@equinox.mc" className="text-xl md:text-2xl text-white hover:text-primary transition-colors font-medium break-all">contact@equinox.mc</a>
                     </div>


                     {/* Adresse France */}
                     <div
                        className="flex flex-col gap-2 relative pl-8 border-l border-white/10 cursor-pointer group"
                        onClick={() => scrollToMap('fr')}
                     >
                        <span className="text-xs font-bold uppercase tracking-widest text-textMuted">ADRESSE FRANCE</span>
                        <p className="text-xl md:text-2xl text-white hover:text-primary transition-colors font-medium">302 Boulevard du Mercantour <br /> 06200 NICE</p>
                     </div>

                     {/* Adresse Monaco */}
                     <div
                        className="flex flex-col gap-2 relative pl-8 border-l border-white/10 cursor-pointer group"
                        onClick={() => scrollToMap('mc')}
                     >
                        <span className="text-xs font-bold uppercase tracking-widest text-textMuted">ADRESSE MONACO</span>
                        <p className="text-xl md:text-2xl text-white hover:text-primary transition-colors font-medium">5 Rue Louis NOTARI, Le Jean-Luc<br />98000 MONACO</p>
                     </div>
                  </div>

                  <div className="flex gap-6 mt-16 pl-8">
                     <a href="https://www.instagram.com/equinox_cuisine" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-transparent transition-all">
                        <Instagram size={20} />
                     </a>
                     <a href="https://www.facebook.com/profile.php?id=61565974004284" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-transparent transition-all">
                        <Facebook size={20} />
                     </a>
                     <a href="https://linkedin.com/company/equinox-cuisine" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-transparent transition-all">
                        <Linkedin size={20} />
                     </a>
                  </div>
               </div>

            </div>
         </div>


         {/* MAP SECTION - Two Maps Side by Side on Desktop */}
         <div className="w-full min-h-[400px] bg-background relative overflow-hidden border-t border-white/5 py-8">
            <div className="flex flex-col lg:flex-row gap-8 h-[50vh] min-h-[400px] justify-center items-stretch">
               {/* France Map */}
               <div
                  ref={mapFrRef}
                  className={`flex-1 bg-white/10 rounded-2xl overflow-hidden shadow-lg transition-all border-4 ${activeMap === 'fr' ? 'border-primary' : 'border-transparent'}`}
                  style={{ minWidth: 0 }}
               >
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.2588691530933!2d7.199018076652233!3d43.70514197110007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd1b3b063857d%3A0x40819a5fd979c320!2s302%20Bd%20du%20Mercantour%2C%2006200%20Nice!5e0!3m2!1sen!2sfr!4v1710345600000!5m2!1sen!2sfr"
                     width="100%"
                     height="100%"
                     style={{ border: 0, filter: 'grayscale(100%)', minHeight: 350 }}
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="Equinox France Location"
                  ></iframe>
               </div>
               {/* Monaco Map */}
               <div
                  ref={mapMcRef}
                  className={`flex-1 bg-white/10 rounded-2xl overflow-hidden shadow-lg transition-all border-4 ${activeMap === 'mc' ? 'border-primary' : 'border-transparent'}`}
                  style={{ minWidth: 0 }}
               >
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.073964479836!2d7.419897315601839!3d43.73499397911809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc29e7e2e7e2b%3A0x2a2b2b2b2b2b2b2b!2s5%20Rue%20Louis%20Notari%2C%2098000%20Monaco!5e0!3m2!1sfr!2sfr!4v1710345600001!5m2!1sfr!2sfr"
                     width="100%"
                     height="100%"
                     style={{ border: 0, filter: 'grayscale(100%)', minHeight: 350 }}
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="Equinox Monaco Location"
                  ></iframe>
               </div>
            </div>
         </div>

      </div>
   );
};