import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'conseil',
      number: '01',
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
      number: '02',
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
      number: '03',
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
      number: '04',
      title: 'Formation',
      description: 'Une cuisine professionnelle n’exprime tout son potentiel que si les équipes la maîtrisent parfaitement. Nous formons vos collaborateurs pour garantir un usage optimal, sûr et efficace des équipements installés, qu’il s’agisse de matériel de cuisson, de froid ou de préparation.',
      details: [
        'Formation sur l’utilisation correcte et efficace des équipements',
        'Transmission des bonnes pratiques pour maximiser la durée de vie des appareils'
      ]
    },
    {
      id: 'maintenance',
      number: '05',
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
      number: '06',
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
                   <Link to="/contact" className="group relative inline-flex items-center h-16 w-full max-w-[320px] cursor-pointer">
                      <span className="absolute left-0 h-16 w-16 bg-white/5 rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-primary border border-white/5"></span>
                      <span className="relative z-10 pl-6 text-sm font-bold tracking-[0.2em] uppercase text-white transition-colors whitespace-nowrap">
                         Parlez-nous de votre projet
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
                     <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-baseline mb-8">
                        <span className="text-6xl lg:text-7xl font-display font-bold text-white/10 group-hover:text-primary transition-colors duration-500">
                          {service.number}
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-white group-hover:translate-x-2 transition-transform duration-500">
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

                        <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
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