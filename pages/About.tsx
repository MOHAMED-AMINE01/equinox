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
                  src="/ML_PC/EQUINOX-conception-installation-grandes-cuisines.png"
                  alt="About Header"
                  className="w-full h-full object-cover scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-black/60"></div>
            </div>

            <div className="relative z-10 text-center animate-up px-6">
               <span className="text-primary font-bold tracking-[0.2em] uppercase mb-6 block">À Propos</span>
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight mb-8 drop-shadow-2xl">
                  L'excellence au service <br /> de votre cuisine
               </h1>
               <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
         </div>

         {/* QUI SOMMES NOUS */}
         <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
               <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center lg:items-stretch">
                  <div className="w-full lg:w-1/2 relative">
                     <div className="relative lg:absolute lg:inset-0 z-10 rounded-sm overflow-hidden aspect-square md:aspect-[4/5] lg:aspect-auto h-full w-full max-w-md mx-auto lg:max-w-none lg:mx-0 shadow-2xl border border-white/10">
                        <img src="/apropos_page/EQUINOX-Cafe-de-Turin-grande-cuisine.jpg" alt="Team Equinox" className="w-full h-full object-cover transition-all duration-700" />
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

         {/* SCROLLING BANNER - ATTESTATION DE CAPACITÉ */}
         <section className="py-12 bg-background border-y border-white/5 overflow-hidden">
            <div className="flex w-fit animate-scroll">
               {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center shrink-0 mx-8">
                     <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter whitespace-nowrap">Attestation De Capacité</h2>
                     <div className="w-12 h-12 md:w-20 md:h-20 bg-[#CDBF98] mx-8 shrink-0"
                        style={{
                           maskImage: 'url(/EQUINOX-LOGO_monogramme_B.png)',
                           WebkitMaskImage: 'url(/EQUINOX-LOGO_monogramme_B.png)',
                           maskRepeat: 'no-repeat',
                           WebkitMaskRepeat: 'no-repeat',
                           maskPosition: 'center',
                           WebkitMaskPosition: 'center',
                           maskSize: 'contain',
                           WebkitMaskSize: 'contain'
                        }}
                     />
                  </div>
               ))}
            </div>
         </section>

         {/* CERTIFICATIONS SECTION */}
         <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
               <div className="flex flex-col lg:flex-row gap-16 items-center">
                  {/* Text Side (2/3) */}
                  <div className="w-full lg:w-2/3">
                     <span className="text-primary font-bold tracking-widest uppercase text-sm mb-8 block">CERTIFICATIONS</span>
                     <div className="space-y-6 text-textMuted text-lg leading-relaxed">
                        <p>
                           En tant que professionnel du froid, nous sommes fiers d’être certifiés <span className="text-white font-bold">QUALICLIMAFROID</span>, une référence dans le secteur depuis 1973.
                        </p>
                        <p>
                           Cette certification valorise les entreprises fiables et engagées dans les bonnes pratiques d’installation, de maintenance et de gestion des équipements thermiques.
                        </p>
                        <p>
                           Elle témoigne de notre sérieux, de notre conformité aux exigences réglementaires, et de notre volonté constante de répondre aux plus hauts standards techniques et environnementaux.
                        </p>
                        <p className="text-white font-bold italic border-l-2 border-primary pl-6 py-2">
                           Faire appel à une entreprise certifiée QUALICLIMAFROID, c’est faire le choix d’un partenaire de confiance.
                        </p>
                     </div>
                  </div>

                  {/* Logo Side (1/3) - ADC Image */}
                  <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                     <div className="relative group max-w-[280px]">
                        <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <img
                           src="/ADC-BLANC.jpg"
                           alt="Attestation De Capacité"
                           className="relative z-10 w-full h-auto object-contain rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
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
                     <div className="w-12 h-12 md:w-20 md:h-20 bg-[#CDBF98] mx-8 shrink-0"
                        style={{
                           maskImage: 'url(/EQUINOX-LOGO_monogramme_B.png)',
                           WebkitMaskImage: 'url(/EQUINOX-LOGO_monogramme_B.png)',
                           maskRepeat: 'no-repeat',
                           WebkitMaskRepeat: 'no-repeat',
                           maskPosition: 'center',
                           WebkitMaskPosition: 'center',
                           maskSize: 'contain',
                           WebkitMaskSize: 'contain'
                        }}
                     />
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
                  <h2 className="text-4xl md:text-5xl font-display font-bold">Un processus maîtrisé, de la vision à la réalité.</h2>
               </div>

               <div className="space-y-16 lg:space-y-32">

                  {/* STEP 1 */}
                  <div className="flex flex-col lg:flex-row gap-12 items-center">
                     <div className="lg:w-1/2 flex justify-end lg:pr-16 text-right order-2 lg:order-1">
                        <div>
                           <span className="text-5xl md:text-6xl font-display font-bold text-white/10 block mb-4">01</span>
                           <h3 className="text-xl md:text-2xl font-bold text-white mb-4">ANTICIPER <br /><span className="text-primary text-lg font-normal">Les bases avant l’action</span></h3>
                           <p className="text-textMuted leading-relaxed">
                              Avant toute intervention, nous prenons le temps d’observer, de mesurer, d’anticiper. Sur place, notre chef de projet évalue les réalités du site et identifie les points sensibles : volumes, accès, circulation, contraintes techniques ou architecturales. Rien n’est laissé au hasard.
                           </p>
                        </div>
                     </div>
                     <div className="lg:w-1/2 lg:pl-16 order-1 lg:order-2">
                        <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                           <h4 className="text-[1.125rem] font-bold text-primary mb-4 flex items-center gap-3"><ClipboardCheck className="text-primary" /> Anticipation logistique</h4>
                           <p className="text-textMuted text-[1rem] leading-relaxed">
                              Derrière chaque installation parfaitement exécutée se cache une organisation logistique millimétrée. Notre gestion des commandes s’appuie sur une coordination étroite entre les équipes commerciales et opérationnelles. Avant même la livraison sur site, une phase de préparation minutieuse est réalisée dans notre atelier : les équipements sont préassemblés, vérifiés et conditionnés.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="flex flex-col lg:flex-row gap-12 items-center">
                     <div className="lg:w-1/2 lg:pr-16 order-2 lg:order-1">
                        <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                           <h4 className="text-[1.125rem] font-bold text-primary mb-4 flex items-center gap-3"><Wrench className="text-primary" /> Installation & mise en service</h4>
                           <p className="text-textMuted text-[1rem] leading-relaxed">
                              Chaque projet d’aménagement est mené avec un souci du détail constant. Nous assurons l’implantation complète des équipements dans toutes les zones fonctionnelles : espaces de cuisson, laveries, réserves, bars. Les essais techniques sont réalisés avec méthode : mise sous pression, vérifications d’étanchéité, réglages précis.
                           </p>
                        </div>
                     </div>
                     <div className="lg:w-1/2 flex justify-start lg:pl-16 order-1 lg:order-2">
                        <div>
                           <span className="text-5xl md:text-6xl font-display font-bold text-white/10 block mb-4">02</span>
                           <h3 className="text-xl md:text-2xl font-bold text-white mb-4">AGIR SUR LE TERRAIN <br /><span className="text-primary text-lg font-normal">La précision du geste</span></h3>
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
                           <h3 className="text-xl md:text-2xl font-bold text-white mb-4">CONTRÔLE, NETTOYAGE, REPLI <br /><span className="text-primary text-lg font-normal">Remise du chantier</span></h3>
                           <p className="text-textMuted leading-relaxed">
                              Nettoyer, finaliser, transmettre : chaque chantier se termine dans le respect du lieu. Avant notre départ, nos techniciens procèdent à un nettoyage complet. Lors des opérations de contrôle (OPR), nous inspectons chaque zone, corrigeons les finitions et levons les réserves.
                           </p>
                        </div>
                     </div>
                     <div className="lg:w-1/2 lg:pl-16 order-1 lg:order-2">
                        <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                           <h4 className="text-[1.125rem] font-bold text-primary mb-4 flex items-center gap-3"><Sparkles className="text-primary" /> Prise en main</h4>
                           <p className="text-textMuted text-[1rem] leading-relaxed">
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
                     <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter whitespace-nowrap">NOTRE ZONE D'INTERVENTION</h2>
                     <div className="w-12 h-12 md:w-20 md:h-20 bg-[#CDBF98] mx-8 shrink-0"
                        style={{
                           maskImage: 'url(/EQUINOX-LOGO_monogramme_B.png)',
                           WebkitMaskImage: 'url(/EQUINOX-LOGO_monogramme_B.png)',
                           maskRepeat: 'no-repeat',
                           WebkitMaskRepeat: 'no-repeat',
                           maskPosition: 'center',
                           WebkitMaskPosition: 'center',
                           maskSize: 'contain',
                           WebkitMaskSize: 'contain'
                        }}
                     />
                  </div>
               ))}
            </div>
         </section>



         {/* ZONE D'INTERVENTION SECTION */}
         <section className="py-24 bg-surface border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto">
                  <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block text-center">Notre zone d’intervention</span>
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 text-white text-center">Une présence stratégique.</h2>
                  <div className="space-y-6 text-textMuted text-lg leading-relaxed text-center lg:text-left">
                     <p>
                        <span className="text-white font-bold">EQUINOX</span> est implantée stratégiquement avec deux établissements : l’un à <span className="text-white font-bold">Nice</span>, au cœur des Alpes-Maritimes, et l’autre à <span className="text-white font-bold">Monaco</span>. Cette double implantation nous permet de couvrir efficacement l’ensemble de la Côte d’Azur, de Menton à Cannes en passant par Antibes, Grasse, Mougins, Saint Laurent-du-Var ou encore Cagnes-sur-Mer.
                     </p>
                     <p>
                        Nous intervenons auprès des professionnels de la restauration, de l’hôtellerie, des métiers de bouche et des collectivités, en leur proposant des solutions sur-mesure en conception, installation, maintenance et SAV de cuisines professionnelles. Notre ancrage local nous garantit une réactivité optimale, un suivi rigoureux sur le terrain et une parfaite compréhension des enjeux propres à chaque établissement.
                     </p>
                  </div>
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