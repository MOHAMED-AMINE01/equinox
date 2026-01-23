import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Plus, Minus, ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export const Services: React.FC = () => {
  const [openBenefit, setOpenBenefit] = useState<number | null>(0);

  const services: ServiceItem[] = [
    {
      id: 'conseil',
      title: 'Conseil',
      description: 'En tant que spécialiste de la cuisine professionnelle pour la restauration et l’hôtellerie, EQUINOX vous accompagne à chaque étape pour sécuriser vos décisions et maximiser la performance de votre établissement. Chaque étude est menée de manière personnalisée, en tenant compte de votre concept, de vos volumes, de vos flux et de vos objectifs de développement.',
      details: [
        'Identification de vos besoins spécifiques et de vos contraintes opérationnelles',
        'Proposition de solutions concrètes et réalistes, adaptées à votre modèle CHR',
        'Optimisation des processus de production pour plus d’efficacité en cuisine',
        'Détection des opportunités d’expansion et de développement'
      ]
    },
    {
      id: 'conception',
      title: 'Conception',
      description: 'Nous transformons vos idées en projets concrets grâce à notre expertise en conception de cuisines professionnelles et en modélisation de grandes cuisines. Chaque plan est pensé pour optimiser les flux, la sécurité et l’ergonomie, que ce soit pour un restaurant gastronomique, un hôtel ou une collectivité.',
      details: [
        'Conception de plans sur mesure pour votre cuisine professionnelle',
        'Réalisation de modélisations 3D pour visualiser et valider le projet avant travaux',
        'Sélection et commande des équipements adaptés à vos besoins'
      ]
    },
    {
      id: 'installation',
      title: 'Installation',
      description: 'Nos équipes assurent l’installation de votre cuisine professionnelle dans le respect des normes d’hygiène, de sécurité et des délais, à Monaco comme sur l’ensemble de la Côte d’Azur. L’objectif : une cuisine opérationnelle rapidement, performante et prête à soutenir votre rythme de service.',
      details: [
        'Gestion logistique complète des livraisons et des interventions sur site',
        'Montage et raccordement des équipements de cuisine dans le respect des normes',
        'Mise en service avec vérification des performances et ajustement des réglages'
      ]
    },
    {
      id: 'formation',
      title: 'Formation',
      description: 'Une cuisine professionnelle n’exprime tout son potentiel que si les équipes la maîtrisent parfaitement. Nous formons vos collaborateurs pour garantir un usage optimal, sûr et efficace des équipements installés, qu’il s’agisse de matériel de cuisson, de froid ou de préparation.',
      details: [
        'Formation sur l’utilisation correcte et efficace des équipements',
        'Transmission des bonnes pratiques pour maximiser la durée de vie des appareils'
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      description: 'Pour garantir la longévité et la fiabilité de vos installations, EQUINOX propose un service de maintenance de cuisine professionnelle régulier et préventif. Cette approche limite les risques de panne, réduit les interruptions de service et sécurise votre activité sur le long terme.',
      details: [
        'Vérifications régulières et contrôles approfondis de vos équipements',
        'Entretien ciblé et nettoyage technique pour un fonctionnement optimal',
        'Ajustements, réparations et recommandations d’amélioration si nécessaire'
      ]
    },
    {
      id: 'urgence',
      title: 'Intervention d\'urgence',
      description: 'En cas de panne ou de dysfonctionnement, notre service d’intervention d’urgence pour cuisine professionnelle est organisé pour répondre aux enjeux des métiers de la restauration et de l’hôtellerie, où chaque service compte.',
      details: [
        'Service d’astreinte disponible 7 jours sur 7, 24 heures sur 24',
        'Interventions de réparation rapides et efficaces sur vos équipements critiques',
        'Remplacement ou proposition de solutions alternatives si nécessaire'
      ]
    }
  ];

  return (
    <div className="bg-background min-h-screen text-white">

      {/* HEADER SECTION (Hero) */}
      <div className="relative h-[50vh] min-h-[400px] w-full flex flex-col justify-center items-center overflow-hidden border-b border-white/5 pt-32">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
            alt="Services Header"
            className="w-full h-full object-cover grayscale scale-105"
          />
          {/* Gradients to create the "moody" look */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-background/90"></div>

          {/* Decorative Vertical Lines */}
          <div className="absolute inset-0 container mx-auto px-6 border-x border-white/5 flex justify-between pointer-events-none opacity-20">
            <div className="h-full w-px bg-white/10 hidden md:block"></div>
            <div className="h-full w-px bg-white/10"></div>
            <div className="h-full w-px bg-white/10 hidden md:block"></div>
          </div>
        </div>

        {/* Hero Text Content */}
        <div className="relative z-10 text-center animate-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight mb-8 drop-shadow-2xl">
            Nos Services
          </h1>
          <div className="flex items-center justify-center gap-6 text-xs font-bold tracking-[0.2em] text-textMuted uppercase">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span className="w-12 h-[1px] bg-primary"></span>
            <span className="text-white">Services</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-20 items-start relative mb-24">

          {/* LEFT COLUMN - STICKY */}
          <div className="lg:w-5/12 lg:h-[calc(100vh-6rem)] lg:sticky lg:top-24 pt-20 pb-12 flex flex-col z-10">

            <div className="flex flex-col items-start pr-0 lg:pr-10">
              <div className="mb-8 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-primary"></span>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Nos Expertises</span>
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-display font-bold leading-[1.1] mb-8">
                Des solutions sur mesure pour des cuisines performantes.
              </h1>

              <div className="text-textMuted text-lg leading-relaxed space-y-6 max-w-xl">
                <p>
                  Chez EQUINOX, chaque projet est pensé comme un véritable outil de performance pour les acteurs de la restauration à Monaco et sur la Côte d’Azur.
                </p>
                <p className="hidden lg:block">
                  De la conception à l'intervention d'urgence, nous créons des cuisines fonctionnelles, fiables et durables, parfaitement adaptées aux contraintes CHR.
                </p>
              </div>

              {/* Animated Bubble CTA */}
              <div className="mt-12">
                <Link to="/about" className="group relative inline-flex items-center h-16 w-full max-w-[320px] cursor-pointer">
                  <span className="absolute left-0 h-16 w-16 bg-white/5 rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-primary border border-white/5"></span>
                  <span className="relative z-10 pl-6 text-sm font-bold tracking-[0.2em] uppercase text-white transition-colors whitespace-nowrap">
                    Notre méthode
                  </span>
                </Link>
              </div>
            </div>

            {/* Background Element for Left Side */}
            <div className="absolute left-[-50vw] top-0 bottom-0 w-[50vw] bg-surface/20 pointer-events-none hidden lg:block"></div>
          </div>


          {/* RIGHT COLUMN - SCROLLABLE CONTENT */}
          <div className="lg:w-7/12 pt-0 lg:pt-20">
            <div className="flex flex-col">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`group py-16 lg:py-24 border-white/10 transition-all duration-500 ${index !== 0 ? 'border-t' : ''}`}
                >
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-8">
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20 shrink-0">
                      <div
                        className="w-full h-full bg-white group-hover:bg-primary transition-all duration-500 group-hover:scale-110"
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
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-white group-hover:text-primary translate-x-2 transition-transform duration-500">
                      {service.title}
                    </h2>
                  </div>

                  <div className="lg:pl-28">
                    <p className="text-lg text-textMuted leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <ul className="space-y-4 mb-8">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-white/80">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-8">
                      <Link to="/contact" className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs hover:text-primary transition-colors duration-300">
                        Demander un devis <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* NEW BLOCK: SCROLLING TEXT & BENEFITS */}
      <section className="py-24 bg-background overflow-hidden relative">
        <style>{`
          @keyframes scrollText {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-text {
            animation: scrollText 30s linear infinite;
          }
          .text-outline {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
            color: transparent;
          }
        `}</style>

        {/* Scrolling Bar - NOS SERVICES (Transparent & Larger) */}
        <div className="mb-20 flex whitespace-nowrap overflow-hidden select-none border-y border-white/5 py-12">
          <div className="animate-scroll-text flex items-center gap-16">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <React.Fragment key={i}>
                <span className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-white">NOS SERVICES</span>
                <ArrowUpRight className="text-primary w-12 h-12 md:w-24 md:h-24 shrink-0" strokeWidth={2} />
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="aspect-[5/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/mapliers/EQUINOX-CUISINE_domaine-mappliers-ombra.jpg"
                    alt="Expertise Equinox"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Right Content Side */}
            <div className="w-full lg:w-1/2">
              <div className="mb-8">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">NOS ATOUTS</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  L'expertise technique <br />au service de votre rendement
                </h2>
                <p className="text-textMuted text-lg leading-relaxed max-w-xl">
                  Parce qu'une cuisine est avant tout un outil de travail, nous mettons tout en œuvre pour garantir sa fiabilité et sa pérennité.
                </p>
              </div>

              {/* Benefits List - Accordion Style matching the second image */}
              <div className="space-y-8">
                {[
                  { title: "Standard de Qualité Élevé", desc: "À travers nos années d'expérience, nous avons appris que la robustesse est la clé. Nous sélectionnons uniquement le matériel capable de supporter les services les plus intenses." },
                  { title: "Approche Personnalisée", desc: "Chaque cuisine est unique. Nous concevons vos flux et implantations sur mesure pour maximiser l'ergonomie de vos brigades." },
                  { title: "Innovation Technique", desc: "Nous intégrons les solutions connectées et économes en énergie pour réduire vos coûts opérationnels durablement." },
                  { title: "Service Premium", desc: "Un accompagnement VIP incluant formation sur site et audit régulier de vos performances techniques." }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group cursor-pointer"
                    onClick={() => setOpenBenefit(openBenefit === idx ? null : idx)}
                  >
                    <div className="flex items-center gap-6 mb-4">
                      <div className="relative flex items-center justify-center">
                        <div className={`absolute transition-all duration-500 ${openBenefit === idx ? 'opacity-0 rotate-90' : 'opacity-100'}`}>
                          <Plus className="text-primary" size={24} strokeWidth={3} />
                        </div>
                        <div className={`absolute transition-all duration-500 ${openBenefit === idx ? 'opacity-100' : 'opacity-0'}`}>
                          <Minus className="text-primary" size={24} strokeWidth={3} />
                        </div>
                        <div className="w-6 h-6"></div>
                      </div>
                      <h4 className={`text-xl md:text-2xl font-display font-bold transition-colors ${openBenefit === idx ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
                        {item.title}
                      </h4>
                    </div>
                    <div className={`pl-12 overflow-hidden transition-all duration-500 ease-in-out ${openBenefit === idx ? 'max-h-40 mb-6' : 'max-h-0'}`}>
                      <div className="border-l-2 border-primary/30 pl-6 py-2">
                        <p className="text-textMuted text-lg leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Block - MOVED OUTSIDE THE 2-COLUMN LAYOUT TO BE FULL WIDTH */}
      <div className="container mx-auto px-6 pb-24">
        <div className="relative rounded-3xl overflow-hidden border border-white/5 group">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10 px-8 py-16 md:p-24 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 text-primary">
              <Phone size={32} />
            </div>

            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Un projet ? Une urgence ?</h3>
            <p className="text-textMuted text-xl mb-12 max-w-xl mx-auto leading-relaxed">
              Nos équipes techniques sont prêtes à intervenir rapidement à Monaco et sur la Côte d'Azur.
            </p>

            <Link to="/contact" className="group/btn relative inline-flex items-center justify-center h-16 px-12 cursor-pointer overflow-hidden rounded-full border border-white/20 hover:border-primary transition-colors duration-300 bg-background/50 hover:bg-primary/10">
              <span className="absolute inset-0 w-full h-full bg-primary origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/btn:scale-x-100"></span>
              <span className="relative z-10 text-base font-bold uppercase tracking-widest text-white transition-colors group-hover/btn:text-white">Contactez-nous</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};