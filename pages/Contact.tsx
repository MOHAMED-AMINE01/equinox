import React, { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, ArrowRight, Check, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);

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
               Contacts
            </h1>
            <div className="flex items-center justify-center gap-6 text-xs font-bold tracking-[0.2em] text-textMuted uppercase">
               <Link to="/" className="hover:text-primary transition-colors">Home</Link>
               <span className="w-12 h-[1px] bg-primary"></span>
               <span className="text-white">Contacts</span>
            </div>
         </div>
      </div>

      {/* Main Content Split */}
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: FORM */}
          <div className="lg:w-7/12 relative">
             <div className="bg-surfaceLight/50 backdrop-blur-sm p-8 md:p-14 rounded-3xl border border-white/5 relative z-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Envoyez-nous un message</h2>
                <p className="text-textMuted mb-12 text-sm">
                  Votre adresse email ne sera pas publiée. Les champs requis sont marqués *
                </p>

                <form className="space-y-10" action="mailto:contact@equinox.mc" method="post" encType="text/plain">
                  {/* Name */}
                  <div className="group">
                    <input 
                      type="text" 
                      placeholder="Nom, Prénom *" 
                      required
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-textMuted/50 focus:outline-none focus:border-primary transition-colors text-lg"
                    />
                  </div>

                  {/* Email */}
                  <div className="group">
                    <input 
                      type="email" 
                      placeholder="Email *" 
                      required
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-textMuted/50 focus:outline-none focus:border-primary transition-colors text-lg"
                    />
                  </div>

                  {/* Subject */}
                  <div className="group">
                     <input 
                        type="text" 
                        placeholder="Sujet" 
                        className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-textMuted/50 focus:outline-none focus:border-primary transition-colors text-lg"
                     />
                  </div>

                  {/* Message */}
                  <div className="group">
                    <textarea 
                      rows={4}
                      placeholder="Votre Message" 
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-textMuted/50 focus:outline-none focus:border-primary transition-colors resize-none text-lg"
                    ></textarea>
                  </div>

                  {/* Interactive Recaptcha Simulation */}
                  <div className="pt-2">
                     <div 
                        className="bg-[#222] border border-[#333] hover:border-[#444] rounded p-3 flex items-center gap-3 w-fit pr-10 cursor-pointer shadow-inner transition-colors select-none"
                        onClick={handleCaptchaClick}
                     >
                        <div className={`w-7 h-7 border-2 rounded-sm flex items-center justify-center bg-white/5 transition-all duration-300 ${captchaVerified ? 'border-transparent' : 'border-[#555] hover:border-[#777]'}`}>
                           {captchaLoading && (
                              <Loader2 className="animate-spin text-primary" size={18} />
                           )}
                           {captchaVerified && (
                              <Check className="text-[#46d246]" size={28} strokeWidth={3} />
                           )}
                           {!captchaLoading && !captchaVerified && (
                              <div className="w-full h-full"></div>
                           )}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[12px] text-white/90 leading-tight font-medium">I'm not a robot</span>
                            <div className="flex flex-col items-end mt-0.5">
                               <span className="text-[9px] text-[#777]">reCAPTCHA</span>
                               <div className="flex gap-1 text-[8px] text-[#555]">
                                 <span>Privacy</span>
                                 <span>-</span>
                                 <span>Terms</span>
                               </div>
                            </div>
                        </div>
                     </div>
                  </div>

                  {/* Submit Button - Bubble Style */}
                  <div className="pt-8">
                     <button type="submit" className="group relative inline-flex items-center justify-start h-16 w-40 cursor-pointer bg-transparent border-none p-0 focus:outline-none">
                        <span className="absolute left-0 h-16 w-16 bg-[#222] rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-primary border border-white/10 shadow-lg"></span>
                        <span className="relative z-10 pl-6 text-sm font-bold tracking-[0.2em] uppercase text-white transition-colors whitespace-nowrap">
                           Envoyer
                        </span>
                     </button>
                  </div>
                </form>
             </div>
          </div>

          {/* RIGHT COLUMN: INFO */}
          <div className="lg:w-5/12 flex flex-col justify-center pt-10 lg:pt-0">
             <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Nos Coordonnées</span>
             
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight text-white">
               Un projet en tête ? <br/> Discutons-en.
             </h2>
             
             <p className="text-textMuted text-lg leading-relaxed mb-12">
               Contactez-nous pour discuter des besoins de votre établissement dès aujourd'hui. Appelez-nous ou envoyez-nous un email.
             </p>

             <div className="space-y-12">
                <div className="flex flex-col gap-2 relative pl-8 border-l border-white/10">
                   <span className="text-xs font-bold uppercase tracking-widest text-textMuted">Adresse</span>
                   <p className="text-xl md:text-2xl text-white font-medium">302 Boulevard du Mercantour <br/> 06200 NICE</p>
                </div>

                <div className="flex flex-col gap-2 relative pl-8 border-l border-white/10">
                   <span className="text-xs font-bold uppercase tracking-widest text-textMuted">Téléphone</span>
                   <div className="flex flex-col gap-1">
                      <a href="tel:0493989339" className="text-xl md:text-2xl text-white hover:text-primary transition-colors font-medium">04 93 98 93 39</a>
                   </div>
                </div>

                <div className="flex flex-col gap-2 relative pl-8 border-l border-white/10">
                   <span className="text-xs font-bold uppercase tracking-widest text-textMuted">Email</span>
                   <a href="mailto:contact@equinox.mc" className="text-xl md:text-2xl text-white hover:text-primary transition-colors font-medium break-all">contact@equinox.mc</a>
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

      {/* MAP SECTION - Full Width Grayscale - Fully Interactive */}
      <div className="w-full h-[50vh] min-h-[400px] bg-[#f0f0f0] relative overflow-hidden border-t border-white/10">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.2588691530933!2d7.199018076652233!3d43.70514197110007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd1b3b063857d%3A0x40819a5fd979c320!2s302%20Bd%20du%20Mercantour%2C%2006200%20Nice!5e0!3m2!1sen!2sfr!4v1710345600000!5m2!1sen!2sfr" 
           width="100%" 
           height="100%" 
           style={{ border: 0, filter: 'grayscale(100%)' }} 
           allowFullScreen 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"
           title="Equinox Location"
         ></iframe>
      </div>

    </div>
  );
};