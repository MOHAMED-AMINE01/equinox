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
        'Détection des opportunités d’expansion et de développement (nouvelles offres, nouveaux concepts, nouveaux espaces)'
      ]
    },
    {
      id: 'conception',
      title: 'Conception',
      description: 'Nous transformons vos idées en projets concrets grâce à notre expertise en conception de cuisines professionnelles et en modélisation de grandes cuisines. Chaque plan est pensé pour optimiser les flux, la sécurité et l’ergonomie, que ce soit pour un restaurant gastronomique, un hôtel ou une collectivité.',
      details: [
        'Conception de plans sur mesure pour votre cuisine professionnelle',
        'Réalisation de modélisations 3D pour visualiser et valider le projet avant travaux',
        'Sélection et commande des équipements adaptés à vos besoins, à vos volumes et à votre positionnement'
      ]
    },
    {
      id: 'installation',
      title: 'Installation',
      description: 'Nos équipes assurent l’installation de votre cuisine professionnelle dans le respect des normes d’hygiène, de sécurité et des délais, à Monaco comme sur l’ensemble de la Côte d’Azur. L’objectif : une cuisine opérationnelle rapidement, performante et prête à soutenir votre rythme de service.',
      details: [
        'Gestion logistique complète des livraisons et des interventions sur site',
        'Montage et raccordement des équipements de cuisine dans le respect des normes en vigueur',
        'Mise en service avec vérification des performances et ajustement des réglages'
      ]
    },
    {
      id: 'formation',
      title: 'Formation',
      description: 'Une cuisine professionnelle n’exprime tout son potentiel que si les équipes la maîtrisent parfaitement. Nous formons vos collaborateurs pour garantir un usage optimal, sûr et efficace des équipements installés, qu’il s’agisse de matériel de cuisson, de froid ou de préparation.',
      details: [
        'Formation sur l’utilisation correcte et efficace des équipements de cuisine professionnelle',
        'Transmission des bonnes pratiques pour maximiser la durée de vie et la performance des appareils'
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      description: 'Pour garantir la longévité et la fiabilité de vos installations, EQUINOX propose un service de maintenance de cuisine professionnelle régulier et préventif. Cette approche limite les risques de panne, réduit les interruptions de service et sécurise votre activité sur le long terme.',
      details: [
        'Vérifications régulières et contrôles approfondis de vos équipements',
        'Entretien ciblé et nettoyage technique pour un fonctionnement optimal et durable',
        'Ajustements, réparations et recommandations d’amélioration si nécessaire'
      ]
    },
    {
      id: 'urgence',
      title: 'Intervention d’urgence',
      description: 'En cas de panne ou de dysfonctionnement, notre service d’intervention d’urgence pour cuisine professionnelle est organisé pour répondre aux enjeux des métiers de la restauration et de l’hôtellerie, où chaque service compte.',
      details: [
        'Service d’astreinte disponible 7 jours sur 7, 24 heures sur 24',
        'Interventions de réparation rapides et efficaces sur vos équipements critiques',
        'Remplacement ou proposition de solutions alternatives si un équipement est défectueux'
      ]
    }
  ];

  const benefits = [
    {
      title: "Zone accueil et de service (front of house)",
      desc: "Ce que vos clients voient et ressentent, est bien plus qu’un décor : c’est la première expression de votre marque, un lieu d’émotion et de mise en scène culinaire. Nos équipes traduisent votre vision en un environnement fonctionnel, esthétique et parfaitement maîtrisé, où design, ergonomie et ambiance concourent à un seul objectif : valoriser votre savoir-faire et sublimer l’expérience de vos clients."
    },
    {
      title: "Zones de production et de préparation (back of house)",
      desc: "C’est le cœur invisible de votre performance. Là où chaque geste, chaque flux et chaque équipement sont pensés pour garantir efficacité, sécurité et régularité du service. C’est également ici que notre expertise prend toute sa valeur : concevoir des cuisines professionnelles sur mesure, performantes et durables, adaptées à vos volumes et à vos ambitions."
    },
    {
      title: "Cuisine privée",
      desc: "Grâce à notre expérience dans le secteur CHR, nous accompagnons aussi bien les établissements de restauration, d’hôtellerie et de luxe que les espaces résidentiels haut de gamme, où la frontière entre cuisine professionnelle et cuisine privée devient plus fluide que jamais. Notre approche : mettre la précision du monde pro au service de la convivialité, du confort et de l’excellence, quel que soit le cadre."
    }
  ];

  return (
    <div className="bg-background min-h-screen text-white">

      {/* HEADER SECTION (Hero) */}
      <div className="relative h-[60vh] min-h-[500px] w-full flex flex-col justify-center items-center overflow-hidden border-b border-white/5 pt-32 text-center px-6">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
            alt="Services Header"
            className="w-full h-full object-cover grayscale scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-background/90"></div>
        </div>

        <div className="relative z-10 text-center animate-up px-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight mb-8 drop-shadow-2xl">
            Nos Services
          </h1>
          <div className="flex items-center justify-center gap-6 text-xs font-bold tracking-[0.2em] text-textMuted uppercase mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span className="w-12 h-[1px] bg-primary"></span>
            <span className="text-white">Services</span>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-20 items-start relative mb-24 lg:mb-24">

          {/* LEFT COLUMN - STICKY */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 pt-20 pb-12 flex flex-col z-10">
            <div className="flex flex-col items-start pr-0 lg:pr-10">
              <div className="mb-8 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-primary"></span>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Nos Expertises</span>
              </div>

              <h2 className="text-4xl md:text-5xl xl:text-6xl font-display font-bold leading-[1.1] mb-8">
                Des solutions sur mesure pour des cuisines professionnelles performantes.
              </h2>

              <div className="text-textMuted text-lg leading-relaxed space-y-8">
                <p>
                  Chez EQUINOX, chaque projet de cuisine professionnelle est pensé comme un véritable outil de performance, au service des acteurs de la restauration et de l’hospitalité à Monaco et sur la Côte d’Azur. Nous accompagnons les restaurants, hôtels, métiers de bouche et collectivités à chaque étape, de l’idée à l’entretien, en tant que partenaire technique spécialisé en cuisines professionnelles sur mesure.
                </p>
                <p>
                  Grâce à une expertise complète – conseil, conception, installation, formation, maintenance et intervention d’urgence – nous créons des cuisines fonctionnelles, fiables et durables, parfaitement adaptées aux contraintes des établissements CHR. Notre mission est de vous permettre d’optimiser vos performances en toute sérénité, avec des équipements de qualité, une installation conforme aux normes et un accompagnement personnalisé, avant, pendant et après la mise en service de votre cuisine professionnelle.
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-12">
                <Link to="/contact" className="group relative inline-flex items-center h-16 w-full max-w-[320px] cursor-pointer">
                  <span className="absolute left-0 h-16 w-16 bg-white/5 rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-primary border border-white/5"></span>
                  <span className="relative z-10 pl-6 text-sm font-bold tracking-[0.2em] uppercase text-white transition-colors whitespace-nowrap">
                    Démarrer un projet
                  </span>
                </Link>
              </div>
            </div>
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
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-white group-hover:text-primary translate-x-1 lg:translate-x-2 transition-transform duration-500">
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
        `}</style>

        {/* Scrolling Bar - NOTRE SAVOIR-FAIRE */}
        <div className="mb-20 flex whitespace-nowrap overflow-hidden select-none border-y border-white/5 py-12">
          <div className="animate-scroll-text flex items-center gap-16">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center shrink-0 mx-8">
                <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter whitespace-nowrap">NOTRE SAVOIR-FAIRE</h2>
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
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="aspect-[5/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/mapliers/EQUINOX-CUISINE_domaine-mappliers-ombra.jpg"
                    alt="Savoir-faire Equinox"
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Right Content Side */}
            <div className="w-full lg:w-1/2">
              <div className="mb-8">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Imaginer, concevoir et réussir ensemble.</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  Entre expérience client <br />et performance technique
                </h2>
                <p className="text-textMuted text-lg leading-relaxed max-w-xl">
                  Chez EQUINOX, nous concevons les espaces de restauration dans leur globalité, des zones visibles au public jusqu’aux postes techniques les plus stratégiques.
                </p>
              </div>

              {/* Benefits List - Accordion */}
              <div className="space-y-8">
                {benefits.map((item, idx) => (
                  <div
                    key={idx}
                    className="group cursor-pointer border-b border-white/5 pb-8"
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
                    <div className={`pl-12 overflow-hidden transition-all duration-500 ease-in-out ${openBenefit === idx ? 'max-h-60 mt-4' : 'max-h-0'}`}>
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

      {/* Final CTA Block */}
      <div className="container mx-auto px-6 pb-24 mt-12">
        <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-surface/30 backdrop-blur-sm group">
          <div className="relative z-10 px-8 py-16 md:p-24 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 text-primary">
              <Phone size={32} />
            </div>

            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white max-w-3xl">
              Un projet de cuisine professionnelle sur mesure ou une urgence à gérer ? Parlons-en dès aujourd’hui.
            </h3>

            <div className="mt-12">
              <Link to="/contact" className="group/btn relative inline-flex items-center justify-center h-20 px-12 cursor-pointer overflow-hidden rounded-full border border-white/20 hover:border-primary transition-colors duration-300 bg-background/50 hover:bg-primary/10">
                <span className="absolute inset-0 w-full h-full bg-primary origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/btn:scale-x-100"></span>
                <span className="relative z-10 text-base font-bold uppercase tracking-widest text-white transition-colors group-hover/btn:text-white">Contactez-nous</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};