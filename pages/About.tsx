import React from 'react';
import { Award, MapPin, Users, ClipboardCheck, Wrench, Sparkles, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-white">
       <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
      
      {/* HEADER SECTION (Hero) */}
      <div className="relative h-[60vh] min-h-[500px] w-full flex flex-col justify-center items-center overflow-hidden border-b border-white/5 pt-32">
         <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto-format&fit=crop"
              alt="About Header"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-black/60"></div>
         </div>

         <div className="relative z-10 text-center animate-up px-6">
            <span className="text-primary font-bold tracking-[0.2em] uppercase mb-6 block">À Propos</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight mb-8 drop-shadow-2xl">
               L'excellence au service <br/> de votre cuisine
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
         </div>
      </div>

      {/* QUI SOMMES NOUS */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 rounded-sm overflow-hidden aspect-square md:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none lg:mx-0 shadow-2xl border border-white/10">
                 <img src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?q=80&w=2000&auto=format&fit=crop" alt="Team Equinox" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
               </div>
               {/* Decorative elements */}
               {/* <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 border border-primary/30 -z-0 hidden md:block"></div> */}
            </div>
            
            <div className="lg:w-1/2">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Qui Sommes Nous</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Experts en cuisines professionnelles.
              </h2>
              
              <div className="space-y-6 text-textMuted text-lg leading-relaxed">
                <p>
                  Equinox est une société d’experts en cuisines professionnelles qui accompagne les acteurs de la restauration et de l'hospitalité dans leurs projets.
                </p>
                <p>
                  Nous développons une offre de services complète pour répondre aux besoins de conseil, de création, d’installation et de maintenance des équipements de cuisines professionnelles.
                </p>
                <p className="text-white border-l-2 border-primary pl-6 italic">
                  Fondée en 2024, Equinox est née d’un savoir-faire unique, bâtie sur plus de 15 ans de formation et d’expérience.
                </p>
                <p>
                  Notre mission est d’offrir des solutions sur-mesure, parfaitement adaptées aux exigences des professionnels des métiers de bouche. Nous travaillons main dans la main avec nos clients, les guidant et les accompagnant de A à Z pour garantir leur satisfaction totale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & ZONE (IMPROVED STYLE) */}
      <section className="py-16 md:py-24 bg-background border-y border-white/5 relative overflow-hidden">
         {/* Vertical Lines Background */}
         <div className="absolute inset-0 pointer-events-none z-0">
            {/* <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/5"></div> */}
            <div className="absolute lg:left-1/2 lg:top-0 lg:bottom-0 lg:w-px lg:bg-white/5"></div>
            {/* <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/5"></div> */}
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-stretch">
               
               {/* Certifications */}
               <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-16 h-16 rounded-full bg-surfaceLight/30 flex items-center justify-center text-primary border border-white/10 shrink-0 shadow-[0_0_20px_rgba(21, 19, 42, 0.25)]">
                        <Award size={32} />
                     </div>
                     <h3 className="text-2xl md:text-3xl font-display font-bold">Certifications</h3>
                  </div>
                  
                  <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden group flex-grow">
                     <div className="absolute top-0 right-0 p-8 opacity-5 text-white group-hover:opacity-10 transition-opacity pointer-events-none">
                        <Award size={100} strokeWidth={1.5} />
                     </div>
                     <h4 className="text-xl font-bold text-white mb-4">QUALICLIMAFROID</h4>
                     <p className="text-textMuted mb-6 leading-relaxed">
                        En tant que professionnel du froid, nous sommes fiers d’être certifiés QUALICLIMAFROID, une référence dans le secteur depuis 1973.
                     </p>
                     <p className="text-textMuted mb-6 leading-relaxed">
                        Cette certification valorise les entreprises fiables et engagées dans les bonnes pratiques d’installation, de maintenance et de gestion des équipements thermiques. Elle témoigne de notre sérieux, de notre conformité aux exigences réglementaires, et de notre volonté constante de répondre aux plus hauts standards techniques et environnementaux.
                     </p>
                     <p className="text-white font-bold">
                        Faire appel à une entreprise certifiée QUALICLIMAFROID, c’est faire le choix d’un partenaire de confiance.
                     </p>
                  </div>
               </div>

               {/* Zone d'intervention */}
               <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-full bg-surfaceLight/30 flex items-center justify-center text-primary border border-white/10 shrink-0 shadow-[0_0_20px_rgba(21, 19, 42, 0.25)]">
                        <MapPin size={32} />
                     </div>
                     <h3 className="text-2xl md:text-3xl font-display font-bold">Zone d’intervention</h3>
                  </div>

                  <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden group text-textMuted text-lg leading-relaxed flex-grow">
                     <p className="mb-6">
                        EQUINOX est implantée stratégiquement avec deux établissements : l’un à <span className="text-white font-bold">Nice</span>, au cœur des Alpes-Maritimes, et l’autre à <span className="text-white font-bold">Monaco</span>.
                     </p>
                     <p className="mb-6">
                        Cette double implantation nous permet de couvrir efficacement l’ensemble de la Côte d’Azur, de Menton à Cannes en passant par Antibes, Grasse, Mougins, Saint Laurent-du-Var ou encore Cagnes-sur-Mer.
                     </p>
                     <p>
                        Notre ancrage local nous garantit une réactivité optimale, un suivi rigoureux sur le terrain et une parfaite compréhension des enjeux propres à chaque établissement.
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* SCROLLING BANNER - MÉTHODE */}
      <section className="py-12 bg-background border-t border-white/5 overflow-hidden">
          <div className="flex w-fit animate-scroll">
              {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center shrink-0 mx-8">
                      <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter whitespace-nowrap">NOTRE MÉTHODE</h2>
                      <ArrowUpRight className="w-12 h-12 md:w-20 md:h-20 text-primary mx-8 shrink-0" />
                  </div>
              ))}
          </div>
      </section>

      {/* METHODE (Timeline style) */}
      <section className="py-16 md:py-24 relative overflow-hidden">
         {/* Vertical line through center */}
         <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 md:mb-20">
               <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Notre Méthode</span>
               <h2 className="text-4xl md:text-5xl font-display font-bold">Un Processus Maîtrisé, de la Vision à la Réalité.</h2>
            </div>

            <div className="space-y-16 lg:space-y-32">
               
               {/* STEP 1 */}
               <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/2 flex justify-end lg:pr-16 text-right order-2 lg:order-1">
                     <div>
                        <span className="text-5xl md:text-6xl font-display font-bold text-white/10 block mb-4">01</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">ANTICIPER <br/><span className="text-primary text-lg font-normal">Les bases avant l’action</span></h3>
                        <p className="text-textMuted leading-relaxed">
                           Avant toute intervention, nous prenons le temps d’observer, de mesurer, d’anticiper. Sur place, notre chef de projet évalue les réalités du site et identifie les points sensibles : volumes, accès, circulation, contraintes techniques ou architecturales. Rien n’est laissé au hasard.
                        </p>
                     </div>
                  </div>
                  <div className="lg:w-1/2 lg:pl-16 order-1 lg:order-2">
                     <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                        <h4 className="font-bold text-white mb-4 flex items-center gap-3"><ClipboardCheck className="text-primary"/> Anticipation logistique</h4>
                        <p className="text-textMuted text-sm leading-relaxed">
                           Derrière chaque installation parfaitement exécutée se cache une organisation logistique millimétrée. Notre gestion des commandes s’appuie sur une coordination étroite entre les équipes commerciales et opérationnelles. Avant même la livraison sur site, une phase de préparation minutieuse est réalisée dans notre atelier : les équipements sont préassemblés, vérifiés et conditionnés.
                        </p>
                     </div>
                  </div>
               </div>

               {/* STEP 2 */}
               <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/2 lg:pr-16 order-2 lg:order-1">
                      <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                        <h4 className="font-bold text-white mb-4 flex items-center gap-3"><Wrench className="text-primary"/> Installation & mise en service</h4>
                        <p className="text-textMuted text-sm leading-relaxed">
                           Chaque projet d’aménagement est mené avec un souci du détail constant. Nous assurons l’implantation complète des équipements dans toutes les zones fonctionnelles : espaces de cuisson, laveries, réserves, bars. Les essais techniques sont réalisés avec méthode : mise sous pression, vérifications d’étanchéité, réglages précis.
                        </p>
                     </div>
                  </div>
                  <div className="lg:w-1/2 flex justify-start lg:pl-16 order-1 lg:order-2">
                     <div>
                        <span className="text-5xl md:text-6xl font-display font-bold text-white/10 block mb-4">02</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">AGIR SUR LE TERRAIN <br/><span className="text-primary text-lg font-normal">La précision du geste</span></h3>
                        <p className="text-textMuted leading-relaxed">
                           Parce qu’un chantier bien exécuté se mesure dans les détails invisibles, notre exigence se prolonge jusqu’au moindre réglage.
                        </p>
                     </div>
                  </div>
               </div>

               {/* STEP 3 */}
               <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/2 flex justify-end lg:pr-16 text-right order-2 lg:order-1">
                     <div>
                        <span className="text-5xl md:text-6xl font-display font-bold text-white/10 block mb-4">03</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">CONTRÔLE, NETTOYAGE, REPLI <br/><span className="text-primary text-lg font-normal">Remise du chantier</span></h3>
                        <p className="text-textMuted leading-relaxed">
                           Nettoyer, finaliser, transmettre : chaque chantier se termine dans le respect du lieu. Avant notre départ, nos techniciens procèdent à un nettoyage complet. Lors des opérations de contrôle (OPR), nous inspectons chaque zone, corrigeons les finitions et levons les réserves.
                        </p>
                     </div>
                  </div>
                  <div className="lg:w-1/2 lg:pl-16 order-1 lg:order-2">
                     <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                        <h4 className="font-bold text-white mb-4 flex items-center gap-3"><Sparkles className="text-primary"/> Prise en main</h4>
                        <p className="text-textMuted text-sm leading-relaxed">
                           Nous assurons une prise en main en douceur : nous accompagnons les utilisateurs dans la bonne manipulation et l’entretien courant de chaque équipement. Des démonstrations, des réponses concrètes, et surtout une promesse tenue : transmettre bien plus qu’un équipement, transmettre un savoir-faire.
                        </p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* SCROLLING BANNER */}
      <section className="py-12 bg-background border-t border-white/5 overflow-hidden">
          <div className="flex w-fit animate-scroll">
              {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center shrink-0 mx-8">
                      <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter whitespace-nowrap">NOTRE ÉQUIPE</h2>
                      <ArrowUpRight className="w-12 h-12 md:w-20 md:h-20 text-primary mx-8 shrink-0" />
                  </div>
              ))}
          </div>
      </section>

      {/* TEAM SECTION - NEW DESIGN */}
      <section className="py-16 md:py-24 bg-background border-y border-white/5">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
               <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Notre Équipe</span>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">Des experts passionnés à votre service.</h2>
               <p className="text-textMuted text-lg mt-6">
                  Notre force réside dans la complémentarité de nos talents. Chaque membre apporte une expertise unique pour garantir la réussite de votre projet, de la conception à la maintenance.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {[
                    {
                        name: 'Jean Dupont',
                        role: 'Fondateur & Gérant',
                        img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=600&auto=format&fit=crop'
                    },
                    {
                        name: 'Marie Dubois',
                        role: 'Chef de Projet & Conception',
                        img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
                    },
                    {
                        name: 'Lucas Martin',
                        role: 'Responsable Technique',
                        img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop'
                    },
                ].map((member, index) => (
                    <div key={index} className="text-center group">
                        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-6 shadow-lg bg-background">
                            <img 
                                src={member.img} 
                                alt={`Portrait de ${member.name}`}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                            />
                        </div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">{member.name}</h3>
                        <p className="text-textMuted">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-background">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
         
         <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight">
               Faites confiance à Equinox pour vous accompagner dans vos projets de cuisine professionnelle.
            </h2>
            <p className="text-lg md:text-xl text-textMuted mb-12">
               Ensemble, créons les conditions de votre succès !
            </p>
            
            <Link to="/contact" className="group relative inline-flex items-center h-20 w-full max-w-[280px] cursor-pointer mx-auto">
               <span className="absolute left-0 h-20 w-20 bg-white/5 rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-primary border border-white/10 shadow-xl"></span>
               <span className="relative z-10 pl-8 w-full text-center pr-8 text-sm font-bold tracking-[0.2em] uppercase text-white transition-colors whitespace-nowrap flex items-center justify-center gap-4">
                  Contactez-nous
               </span>
            </Link>
         </div>
      </section>

    </div>
  );
};