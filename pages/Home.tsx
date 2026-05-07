import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowUpRight, DraftingCompass, Wrench, GraduationCap, Settings, Phone, Shield, MessageCircle } from 'lucide-react';

export const Home: React.FC = () => {
  // Data for client logos
  const clients = [
    { name: 'Aéroport de Nice', img: '/LOGOS CLIENTS/B_Aeroport_Nice_Cote_d_Azur_logo.png' },
    { name: 'AS Monaco', img: '/LOGOS CLIENTS/B_AS-monaco.png', scale: 0.8 },
    { name: 'Royal Mougins', img: '/LOGOS CLIENTS/B_Logo%2BRoyal%2BMougins.png', scale: 0.9 },
    { name: 'Mairie de Monaco', img: '/LOGOS CLIENTS/B_Mairie_de_Monaco_logo.png', scale: 0.9 },
    { name: 'Monte-Carlo SBM', img: '/LOGOS CLIENTS/B_montecarlo-1.png', scale: 1.4 },
    { name: 'Groupe Barrière', img: '/LOGOS CLIENTS/B_logo-groupe-barriere-21683efd0f2d7f3.png', scale: 1.5 },
    { name: 'Lagardère', img: '/LOGOS CLIENTS/B_Lagardere.png', scale: 1.3 },
    { name: 'Sodexo', img: '/LOGOS CLIENTS/B_sodexo.png' },
    { name: 'SSP', img: '/LOGOS CLIENTS/B_SSP.png' },
    { name: 'Ville de Nice', img: '/LOGOS CLIENTS/B_ville-de-nice-logo.png' },
    { name: 'Allianz Riviera', img: '/LOGOS CLIENTS/allianz-logo.png.webp' },
    { name: 'Area', img: '/LOGOS CLIENTS/B_AREA.png' },
  ];

  return (
    <div className="flex flex-col">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 60s linear infinite;
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-6rem)] mt-24 bg-background flex flex-col pt-16 pb-12 lg:items-center overflow-hidden">

        {/* Left Side: Vertical Socials (Desktop Only) */}
        <div className="hidden lg:flex flex-col justify-center gap-32 items-center absolute left-0 top-0 bottom-0 w-24 z-30 border-r border-white/5 bg-background/50 backdrop-blur-sm">
          <a href="https://www.facebook.com/equinox.cuisine" target="_blank" rel="noreferrer" className="text-[10px] font-bold tracking-[0.3em] text-white/90 hover:text-primary transition-colors -rotate-90 uppercase whitespace-nowrap">FACEBOOK</a>
          <a href="https://www.linkedin.com/company/equinox-cuisine/" target="_blank" rel="noreferrer" className="text-[10px] font-bold tracking-[0.3em] text-white/90 hover:text-primary transition-colors -rotate-90 uppercase whitespace-nowrap">LINKEDIN</a>
          <a href="https://www.instagram.com/equinox_cuisine" target="_blank" rel="noreferrer" className="text-[10px] font-bold tracking-[0.3em] text-white/90 hover:text-primary transition-colors -rotate-90 uppercase whitespace-nowrap">INSTAGRAM</a>
        </div>

        {/* Right Side: Main Image (Desktop Only) */}
        <div className="absolute right-0 top-0 bottom-0 w-[55%] hidden lg:block z-0 pl-16 py-10">
          <div className="h-full w-full bg-surfaceLight rounded-tl-[350px] rounded-bl-[350px] overflow-hidden relative shadow-2xl shadow-black/50 border-l border-y border-white/5 group">
            <img
              src="equinox-hp-fourneau-molteni.png"
              alt="Cuisine professionnelle inox"
              className="w-full h-full object-cover grayscale blur-[2px] transition-all duration-700 ease-in-out hover:grayscale-0 hover:blur-0"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-black/40 mix-blend-overlay pointer-events-none"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 relative z-10 lg:pl-32 flex flex-col justify-center lg:pt-10">
          <div className="max-w-5xl">

            {/* 1. Top Pill Image + Text */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-8 animate-up delay-100">
              {/* Image Pill */}
              <div className="w-48 h-16 md:w-64 md:h-20 rounded-full overflow-hidden border border-white/20 shadow-lg shrink-0 relative group">
                <img src="/equinox-hp-plan-conception_2.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Detail" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              </div>
              {/* Text */}
              <p className="text-white font-medium max-w-md text-sm md:text-base leading-relaxed border-l-2 border-primary/50 pl-4">
                De la conception à l’installation, votre cuisine professionnelle sans compromis.
              </p>
            </div>

            {/* 2. Main Title Block */}
            <div className="relative mb-8 animate-up delay-200">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter uppercase mb-6 drop-shadow-2xl">
                <span className="text-primary block relative z-10">L'EXCELLENCE</span>
                <span className="text-white block relative z-10">TECHNIQUE</span>
                <span className="text-white/90 block text-3xl md:text-5xl lg:text-6xl mt-2 tracking-normal normal-case font-light">
                  au service de votre efficacité
                </span>

                <span className="absolute -top-12 -left-12 text-[10rem] text-white/5 -z-0 select-none hidden lg:block pointer-events-none">EQUINOX</span>
              </h1>
            </div>

            {/* 3. Second Pill Image */}
            <div className="mb-10 w-48 h-16 md:w-64 md:h-20 rounded-full overflow-hidden border border-white/20 shadow-lg relative group animate-up delay-300">
              <img src="/equinox-hp-cuisine.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Detail 2" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>

            {/* 4. Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center animate-up delay-400">
              <a href="mailto:contact@equinox.mc?subject=Discussion sur mon projet de cuisine professionnelle" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-10 py-5 text-lg group shadow-lg shadow-primary/20 justify-between sm:justify-center">
                  <span className="relative z-10">Discutons de votre projet</span>
                  <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </Button>
              </a>
              <a href="tel:+33493989339" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 py-5 text-lg hover:bg-white/5 backdrop-blur-sm justify-center">
                  Demander un devis
                </Button>
              </a>
            </div>
          </div>
        </div>



      </section>

      {/* Intro Section (Mission) */}
      <section className="py-24 lg:py-40 bg-background relative z-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">

            {/* Left Column: Heading & Sticky CTA (35%) */}
            <div className="md:w-[35%] flex flex-col items-start md:sticky md:top-32">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary"></span>
                Notre Mission
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-12">
                La cuisine professionnelle, levier de performance.
              </h2>

              {/* New Animated Bubble Button */}
              <Link to="/contact" className="group relative inline-flex items-center h-16 w-full max-w-[250px] cursor-pointer">
                <span className="absolute left-0 h-16 w-16 bg-white/5 rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-primary border border-white/5"></span>
                <span className="relative z-10 pl-6 text-sm font-bold tracking-[0.2em] uppercase text-white transition-colors whitespace-nowrap">
                  Contactez nous
                </span>
              </Link>
            </div>

            {/* Right Column: Text Content (65%) */}
            <div className="md:w-[65%] flex flex-col justify-center pt-2 md:pt-0">
              <div className="border-l border-white/10 pl-8 lg:pl-12">
                <h3 className="text-2xl font-display font-medium text-white mb-8 italic opacity-90">
                  Ce qui nous distingue : une exigence sans faille et une vision globale de votre métier.
                </h3>
                <p className="text-textMuted text-lg leading-relaxed mb-8">
                  Depuis plus de 15 ans, nous accompagnons les professionnels de la restauration, de l’hôtellerie et des métiers de bouche sur toute la Côte d’Azur et à Monaco. Nous ne vendons pas seulement du matériel : nous concevons des outils de travail sur mesure.
                </p>
                <p className="text-textMuted text-lg leading-relaxed mb-8">
                  Notre approche globale — conseil, conception, installation, formation et maintenance — vous garantit un accompagnement complet et sans compromis, du premier plan à la mise en service, puis tout au long de la vie de votre cuisine.
                </p>
                <p className="text-textMuted text-lg leading-relaxed">
                  Chaque projet est unique, chaque contrainte est un défi technique que nous relevons pour optimiser vos flux, votre ergonomie et votre rentabilité.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section (New Replacement) */}
      <section
        className="relative py-32 bg-surface overflow-visible border-t border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-surfaceLight to-background opacity-60 pointer-events-none"></div>
        {/* Vertical Lines Background (Exactly 3 lines) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/5"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5"></div>
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/5"></div>
        </div>

        {/* SERVICES Title - Centered on the dividing line between sections */}
        <div className="absolute top-0 left-0 w-full z-30 pointer-events-none select-none flex justify-start pl-6 md:pl-24 -translate-y-1/2">
          <span className="text-[9vw] md:text-[5vw] leading-none font-bold text-white tracking-tighter font-display whitespace-nowrap">
            SERVICES
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-24 max-w-4xl mx-auto pt-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Notre Expertise</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Une expertise complète pour <br /> chaque étape de votre projet.
            </h2>
            <p className="text-textMuted text-lg leading-relaxed">
              EQUINOX vous accompagne de A à Z, pour que votre cuisine professionnelle soit à la fois performante, ergonomique et parfaitement adaptée à vos contraintes de service.
            </p>
          </div>

          {/* Circular Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {[
              {
                title: 'Conseil',
                desc: 'Analyser vos besoins, vos flux et vos contraintes pour définir une solution technique cohérente et pérenne, adaptée à votre activité CHR ou collective.',
                img: '/services/EQUINOX-cuisine-services-conseil.png'
              },
              {
                title: 'Conception',
                desc: 'Imaginer et dessiner une cuisine professionnelle sur mesure, optimisée pour vos équipes, vos volumes et vos ambitions, qu’il s’agisse d’un restaurant gastronomique, d’un hôtel ou d’une collectivité.',
                img: '/services/EQUINOX-cuisine-services-conception.png'
              },
              {
                title: 'Installation',
                desc: 'Coordonner et réaliser l’installation complète de vos équipements de cuisine professionnelle, dans le respect des normes d’hygiène, de sécurité et des délais, à Monaco et sur la Côte d’Azur.',
                img: '/services/EQUINOX-cuisine-services-installation.png'
              },
              {
                title: 'Formation',
                desc: 'Accompagner vos équipes dans la prise en main des équipements de cuisine afin d’exploiter pleinement leur potentiel technique au quotidien.',
                img: '/services/EQUINOX-cuisine-services-formation.png'
              },
              {
                title: 'Maintenance',
                desc: 'Assurer le suivi et la maintenance de votre cuisine professionnelle pour garantir sa performance, prolonger sa durée de vie et limiter les arrêts d’activité.',
                img: '/services/EQUINOX-cuisine-services-sav.png'
              },
              {
                title: 'Intervention d’urgence',
                desc: 'Répondre rapidement à vos imprévus techniques et garantir votre continuité de service grâce à une astreinte 24/7 dédiée à nos clients sous contrat.',
                img: '/services/EQUINOX-cuisine-services-intervention-urgence.png'
              },
            ].map((service, i) => (
              <div key={i} className="group flex flex-col items-center text-center">
                {/* Circular Image Container */}
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 border border-white/10 relative shadow-2xl">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500"></div>
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-textMuted text-base leading-relaxed max-w-xs mx-auto">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* New Bubble Button */}
          <div className="mt-24 text-center flex justify-center">
            <Link to="/services" className="group relative inline-flex items-center justify-start h-16 w-full max-w-xs cursor-pointer">
              <span className="absolute left-1/2 -translate-x-1/2 h-16 w-16 bg-white/5 rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-primary group-hover:translate-x-0 group-hover:left-0 border border-white/10"></span>
              <span className="relative z-10 w-full text-center text-sm font-bold tracking-[0.2em] uppercase text-white transition-colors whitespace-nowrap">
                Découvrez tous nos services
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 items-start lg:items-stretch">

            {/* Left: Image (Grayscale Portrait style) */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative lg:absolute lg:inset-0 group h-full w-full">
                <div className="aspect-[5/4] lg:aspect-auto h-full w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/vision/EQUINOX-cuisine-nice-vision.png"
                    alt="Vision Equinox"
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">Notre Vision</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-[1.1]">
                Une vision : des cuisines qui font vivre votre ambition.
              </h2>

              {/* Text Content - Compacted to fit image height */}
              <div className="space-y-5 text-textMuted text-lg leading-relaxed">
                <p>
                  Chez EQUINOX, nous savons qu’une cuisine professionnelle bien pensée est bien plus qu’un espace technique : c’est le cœur battant de votre établissement, le lieu où se joue votre promesse client au quotidien.
                </p>
                <p>
                  C’est pourquoi nous travaillons à vos côtés, avec exigence, transparence et sens du détail, pour que chaque mètre carré et chaque équipement serve votre efficacité opérationnelle.
                </p>
                <p>
                  De la première esquisse au suivi après installation, notre équipe se mobilise pour créer les conditions de votre réussite, dans la durée.
                </p>
                <p>
                  Faites confiance à EQUINOX pour concevoir, installer et maintenir une cuisine à la hauteur de vos exigences. Ensemble, faisons de votre ambition une réussite durable.
                </p>
              </div>

              {/* "Read More" Style Link */}
              <div className="mt-8">
                <Link to="/about" className="inline-flex items-center gap-3 text-primary font-bold tracking-widest text-xs uppercase hover:text-white transition-colors group">
                  <span className="text-lg group-hover:translate-x-1 transition-transform">+</span> EN SAVOIR PLUS
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Figures (Chiffres Clés) Section */}
      <section className="py-24 relative bg-surface border-t border-white/5 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image - Absolute Right 60% with vertical margin (top-12 bottom-12) */}
        <div className="absolute top-12 bottom-12 right-0 w-[80%] md:w-[70%] lg:w-[60%] z-0">
          <div className="w-full h-full bg-surfaceLight rounded-tl-[350px] rounded-bl-[350px] overflow-hidden relative shadow-2xl border-l border-y border-white/5">
            <img src="/chiffres_cles/EQUINOX-cuisine-chiffres.jpg" className="w-full h-full object-cover opacity-80 transition-opacity duration-700" alt="Equinox Tech" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Layout Grid: Content on Left overlapping the image space */}
          <div className="flex flex-col lg:flex-row items-center">

            <div className="w-full">
              {/* Title Block */}
              <div className="flex flex-col mb-12">
                <div className="flex items-center gap-6 mb-4">
                  {/* Pill - Updated Image */}
                  <div className="w-32 h-12 md:w-48 md:h-20 rounded-full overflow-hidden border border-white/20 relative shrink-0">
                    <img src="/chiffres_cles/EQUINOX-cuisine-monaco.png" className="w-full h-full object-cover" alt="Detail" loading="lazy" />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                  </div>
                  {/* Word 1 - Increased Size */}
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase leading-none tracking-tighter drop-shadow-xl">
                    EQUINOX
                  </h2>
                </div>
                {/* Word 2 - Increased Size */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase leading-none tracking-tighter text-white/60 pl-2 drop-shadow-xl">
                  EN CHIFFRES
                </h2>
              </div>

              <p className="text-textMuted text-lg leading-relaxed max-w-xl mb-16 relative">
                Implantés en France et à Monaco, nous mettons notre expertise au service des professionnels de la restauration, des établissements CHR (cafés, hôtels, restaurants), des métiers de bouche et des collectivités.
              </p>

              {/* Stats - 4 Cols on Desktop (Same Line) - Names BELOW figures */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                <div className="flex flex-col items-start gap-2">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary leading-none drop-shadow-lg">15</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-white leading-tight mt-2">Ans <br />d'expérience</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary leading-none drop-shadow-lg">06</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-white leading-tight mt-2">Domaines <br />d'expertise</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary leading-none drop-shadow-lg">24/7</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-white leading-tight mt-2">Service <br />d'astreinte</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary leading-none drop-shadow-lg">02</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-white leading-tight mt-2">Implantations <br />(Fr & Mc)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Realizations Preview & Description (Updated) */}
      <section className="py-24 relative overflow-hidden bg-background border-t border-white/5">
        <div className="container mx-auto px-6">

          {/* Split Layout: Left Sticky Title, Right Content */}
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start mb-16">

            {/* Left Column: Heading & Sticky CTA (40%) */}
            <div className="md:w-[40%] flex flex-col items-start md:sticky md:top-32">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary"></span>
                Nos Réalisations
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-8">
                Des cuisines professionnelles conçues pour l’exigence du terrain.
              </h2>

              {/* BUBBLE STYLE BUTTON REPLACEMENT */}
              <Link to="/portfolio" className="hidden md:inline-flex group relative items-center h-16 w-full max-w-[350px] cursor-pointer">
                <span className="absolute left-0 h-16 w-16 bg-white/5 rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-primary border border-white/5"></span>
                <span className="relative z-10 pl-6 text-sm font-bold tracking-[0.2em] uppercase text-white transition-colors whitespace-nowrap">
                  Voir toutes nos réalisations
                </span>
              </Link>
            </div>

            {/* Right Column: Text Content (60%) */}
            <div className="md:w-[60%] flex flex-col justify-center pt-2 md:pt-0">
              <div className="border-l border-white/10 pl-8 lg:pl-12 text-textMuted text-lg leading-relaxed space-y-6">
                <p>
                  Des restaurants gastronomiques aux concepts de restauration innovants, en passant par les corners en aéroport, les hôtels, les bars, les domaines viticoles et leurs espaces de dégustation, la restauration collective, les pâtisseries et les maisons d’exception, nous concevons et réalisons des cuisines professionnelles adaptées à chaque univers, à chaque rythme de service et à chaque niveau d’exigence.
                </p>
                <p>
                  Découvrez quelques-unes de nos réalisations de cuisines professionnelles, pensées et installées par nos équipes pour des clients basés en France et à Monaco.
                </p>
              </div>

              <div className="mt-8 md:hidden">
                <Link to="/portfolio">
                  <Button variant="outline">Voir toutes nos réalisations</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Existing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { id: '1', title: 'TAYAC', loc: 'Monaco', img: '/tayac/EQUINOX-CUISINE_tayac.jpg', cat: 'Pâtisserie Haute Couture' },
              { id: '2', title: 'BAGNARD', loc: 'Aéroport Nice', img: '/bagnard/EQUINOX-CUISINE_bagnard.jpg', cat: 'Street Food Premium' },
              { id: '3', title: 'DOMAINE DES MAPLIERS', loc: 'Provence', img: '/mapliers/EQUINOX-CUISINE_domaine-mapliers.jpg', cat: 'Domaine Viticole' },
            ].map((project, i) => (
              <Link to={`/portfolio/${project.id}`} key={project.id} className="group relative block overflow-hidden rounded-xl bg-surfaceLight">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={project.img} alt={project.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{project.loc}</span>
                  <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section >

      {/* Partners & Trust (Double Sliding Rows) */}
      < section className="py-32 bg-surface border-t border-white/5 overflow-hidden relative" >
        <div className="container mx-auto px-6 mb-20">
          <div className="flex flex-col items-center">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">Partenaires technique</span>
            <h5 className="text-3xl md:text-4xl font-display font-bold text-center">Ils nous font confiance</h5>
          </div>
        </div>

        {/* Trust Slider Container with Faded Edges */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks (Edge Fades) */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-surface to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-surface to-transparent z-20 pointer-events-none"></div>

          {/* Row 1: Scrolling Left */}
          <div className="flex w-[400%] animate-scroll mb-12">
            {[...clients, ...clients].map((client, i) => (
              <div key={`row1-${i}`} className="flex-shrink-0 mx-8 md:mx-12 w-32 h-32 md:w-48 md:h-48 flex justify-center items-center group relative">
                {/* Glow behind on hover */}
                <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={client.img}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain opacity-40 group-hover:opacity-100 group-hover:scale-110 brightness-0 invert transition-all duration-700 relative z-10"
                  style={{ transform: i < clients.length ? `scale(${client.scale || 1})` : `scale(${client.scale || 1})` }}
                />
              </div>
            ))}
          </div>

          {/* Row 2: Scrolling Right (Reversed) */}
          <div className="flex w-[400%] animate-scroll-reverse">
            {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, i) => (
              <div key={`row2-${i}`} className="flex-shrink-0 mx-8 md:mx-12 w-32 h-32 md:w-48 md:h-48 flex justify-center items-center group relative">
                {/* Glow behind on hover */}
                <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={client.img}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain opacity-40 group-hover:opacity-100 group-hover:scale-110 brightness-0 invert transition-all duration-700 relative z-10"
                  style={{ transform: i < clients.length ? `scale(${client.scale || 1})` : `scale(${client.scale || 1})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="py-32 relative overflow-hidden bg-surface border-t border-white/5" >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-8 border border-primary/20">
            <MessageCircle size={32} />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
            Vous avez un projet <br />
            <span className="text-white/60">de cuisine professionnelle ?</span>
          </h2>

          <p className="text-textMuted text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Échangeons dès maintenant sur vos besoins et bénéficiez d’un accompagnement personnalisé à chaque étape, de la conception à la mise en service.
          </p>

          <Link to="/contact" className="group relative inline-flex items-center h-20 w-full max-w-[280px] cursor-pointer mx-auto">
            <span className="absolute left-0 h-20 w-20 bg-white/5 rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-primary border border-white/10 shadow-xl"></span>
            <span className="relative z-10 pl-8 w-full text-center pr-8 text-sm font-bold tracking-[0.2em] uppercase text-white transition-colors whitespace-nowrap flex items-center justify-center gap-4">
              Contactez-nous
            </span>
          </Link>
        </div>
      </section >
    </div >
  );
};