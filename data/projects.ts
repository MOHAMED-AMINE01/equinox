import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'PHILIPPE TAYAC',
    category: 'Pâtisserie',
    location: 'Monaco',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1920&auto=format&fit=crop&fm=webp',
    gallery: [
      '/tayac/EQUINOX-CUISINE_patisserie-tayac-monaco-03.jpg',
      '/tayac/EQUINOX-CUISINE_patisserie-tayac-monaco-05.jpg',
      '/tayac/EQUINOX-CUISINE_patisserie-tayac-monaco-10.jpg',
      '/tayac/EQUINOX-CUISINE_patisserie-tayac-monaco-01.jpg',
      '/tayac/EQUINOX-CUISINE_patisserie-tayac-monaco-12.jpg'
    ],
    challenge: 'Implanté au cœur du Carré d’Or de Monaco, le nouveau salon-boutique du Chef Pâtissier Philippe Tayac devait incarner l’aboutissement d’un parcours d’excellence. L’enjeu était double : concevoir un espace parfaitement fonctionnel dans un environnement contraint, tout en offrant une mise en scène spectaculaire des créations pâtissières, à la hauteur d’une adresse pensée comme une bijouterie.',
    solution: {
      intro: 'Pour répondre aux attentes du Chef Philippe Tayac et de son équipe, EQUINOX a conçu une solution sur mesure, en étroite collaboration avec les partenaires techniques de la pâtisserie.',
      points: [
        'Vitrine réfrigérée sur mesure, réalisée en partenariat avec PANEM, permettant de sublimer les créations.',
        'Meubles froids et plans de travail inox, pensés pour optimiser les flux de production et assurer une hygiène irréprochable.',
        'Four haute vitesse MERRYCHEF, intégré pour une remise en température rapide et homogène.',
      ],
    },
    result: 'Le nouveau salon-boutique offre une expérience immersive, où la précision technique se met au service de l’émotion gourmande. La vitrine réfrigérée met en valeur les pâtisseries comme des pièces de haute joaillerie. Ce quatrième établissement marque une étape clé dans le développement du Chef à l’international, dans un écrin à la hauteur de son ambition.',
  },
  {
    id: 2,
    title: 'BAGNARD',
    category: 'Restauration',
    location: 'Aéroport de Nice',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1920&auto=format&fit=crop&fm=webp',
    gallery: [
      'bagnard/EQUINOX-CUISINE_restaurant-bagnard-aeroport.jpg',
      'bagnard/EQUINOX-CUISINE_vitrine-refrigeree.jpg',
      'bagnard/EQUINOX-CUISINE_meubles-froid.jpg',
      'bagnard/EQUINOX-CUISINE_restaurant-saladette.jpg',
      'bagnard/EQUINOX-CUISINE_restaurant-meubles-inox.jpg',
      'bagnard/EQUINOX-CUISINE_restaurant-bagnard-nice.jpg'
    ],
    challenge: 'Au cœur du Terminal 2 de l’aéroport de Nice, BAGNARD signe une escale gourmande. Le défi : concevoir une cuisine professionnelle sur mesure capable de délivrer une offre fraîche, qualitative et rythmée, dans un flux continu de voyageurs et avec des impératifs stricts en matière d’hygiène, de sécurité et de temps de service.',
    solution: {
      intro: 'EQUINOX a conçu et installé un ensemble d’équipements sur mesure, pensé pour allier fraîcheur, visibilité des produits et efficacité opérationnelle.',
      points: [
        'Vitrine réfrigérée CODIGEL pour mettre en avant les produits frais.',
        'Meubles froids avec saladette CORECO pour une organisation optimale des garnitures.',
        'Plans de travail fonctionnels pour limiter les déplacements et structurer les flux.',
        'Zone chaude optimisée avec plaques à induction et appareil de cuisson rapide.',
      ]
    },
    result: 'BAGNARD fait rayonner les saveurs méditerranéennes au cœur du Terminal 2. La configuration de la cuisine permet aux équipes de travailler avec fluidité, de servir rapidement et de maintenir un haut niveau de qualité, même lors des pics de trafic. Cette réalisation illustre notre capacité à concevoir des espaces performants dans des environnements techniques exigeants.',
  },
  {
    id: 3,
    title: 'DOMAINE DES MAPLIERS',
    category: 'Viticole',
    location: 'Lorgues',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1920&auto=format&fit=crop&fm=webp',
    gallery: [
      'mapliers/EQUINOX-CUISINE_domaine-des-mappliers.jpg',
      'mapliers/EQUINOX-CUISINE_bar-degustation.jpg',
      'mapliers/EQUINOX-CUISINE_gamko.jpg',
      'mapliers/EQUINOX-CUISINE_domaine-mappliers-ombra.jpg',
      'mapliers/EQUINOX-CUISINE_gamko-bar.jpg',
      'mapliers/EQUINOX-CUISINE_cave-vin.jpg',
      'mapliers/EQUINOX-CUISINE_domaine-des-mappliers-lorgue.jpg'
    ],
    challenge: 'Au cœur de la Provence varoise, le Domaine des Mapliers incarne une vision raffinée du vignoble. L’enjeu était de créer un espace technique parfaitement fonctionnel pour le service des vins et des boissons, tout en respectant l’esthétique chaleureuse et haut de gamme du domaine.',
    solution: {
      intro: 'EQUINOX a imaginé et installé une solution sur mesure, conciliant technicité, confort d’usage et finitions d’exception.',
      points: [
        'Arrière-bar réfrigéré GAMKO avec habillage bois sur mesure, en collaboration avec un ébéniste.',
        'Machine à glaçons HOSHIZAKI, pour garantir une qualité de glace irréprochable.',
        'Concept d’osmose HOBART, assurant une qualité d’eau optimale pour la verrerie.',
      ]
    },
    result: 'Le résultat est un espace de service à la fois discret, fonctionnel et résolument esthétique, en parfaite continuité avec l’ADN du domaine. À l’image des vins du Domaine des Mapliers, cette réalisation conjugue authenticité, exigence et justesse des finitions, en apportant une réponse technique haut de gamme au service de l’expérience de dégustation.',
  },
  {
    id: 4,
    title: 'VILLA LA MADONE',
    category: 'Résidentiel',
    location: 'Villefranche-sur-mer',
    year: '2025',
    image: 'madone/EQUINOX-CUISINE_fourneau-molteni-nice.jpg',
    gallery: [
      'madone/EQUINOX-CUISINE_fourneau-molteni-monaco.jpg',
      'madone/EQUINOX-CUISINE_inox-mat-marbre.jpg',
      'madone/EQUINOX-CUISINE_fourneau-molteni.jpg',
      'madone/EQUINOX-CUISINE_molteni.jpg',
      'madone/EQUINOX-CUISINE_villa-madone.jpg',
      'madone/EQUINOX-CUISINE_villa-premium-marbre.jpg',
      'madone/EQUINOX-CUISINE_colonne-froid.jpg',
      'madone/EQUINOX-CUISINE_colonne-froid-inox-poli-vibre-mat.jpg',
      'madone/EQUINOX-CUISINE_villa-luxe-bar.jpg',
      'madone/EQUINOX-CUISINE_bar-inox.jpg',
      'madone/EQUINOX-CUISINE_villa-bar-sur-mesure.jpg',
      'madone/EQUINOX-CUISINE_exterieure-bbq.jpg'
    ],
    challenge: `Surplombant la Méditerranée, Villa La Madone incarne une expression singulière de l'art de vivre : un lieu pensé comme une ode à la lumière, aux lignes épurées et aux horizons infinis, où l'élégance contemporaine dialogue avec un confort intemporel.\n\nDans le cadre d'une rénovation d'envergure, le défi était de concevoir et d'intégrer une cuisine professionnelle haut de gamme, capable de répondre aux exigences d'un service d'exception, tout en préservant l'âme des lieux. L'enjeu technique consistait notamment à remettre en état et à réintégrer le fourneau Molteni existant, véritable pièce maîtresse à conserver, symbole de savoir-faire et de caractère, tout en créant un environnement cohérent, fluide et esthétiquement irréprochable.`,
    solution: {
      intro: `Pour accompagner cette métamorphose, EQUINOX a conçu et installé un ensemble d'équipements sur mesure, alliant performance technique, finitions d'exception et intégration architecturale soignée.`,
      points: [
        `Cuisine intérieure haut de gamme sur mesure : réaménagement complet autour du fourneau Molteni remis en état, îlot central et meubles sur mesure conçus pour optimiser les flux, le confort de travail et l'harmonie visuelle avec les espaces de vie.`,
        `Armoires frigorifiques : sélection d'équipements performants et silencieux, intégrés avec discrétion pour garantir une maîtrise parfaite de la chaîne du froid.`,
        `Bar intérieur incurvé sur mesure : création d'un espace bar aux lignes élégantes, intégrant une remise fonctionnelle et une machine à glaçons, pensé comme un prolongement naturel des espaces de réception.`,
        `Cuisine extérieure sur mesure : conception d'un poste de cuisson extérieur avec barbecue haut de gamme et finitions soignées, pour sublimer l'expérience de convivialité en plein air, face à la Méditerranée.`
      ]
    },
    result: `Villa La Madone dispose aujourd'hui d'espaces de cuisine et de réception pensés comme de véritables prolongements de son identité : discrets, élégants, performants. La cuisine intérieure, orchestrée autour du fourneau Molteni restauré, conjugue patrimoine et modernité. Le bar intérieur et la cuisine extérieure offrent des espaces de service fluides et raffinés, en parfaite cohérence avec l'art de vivre porté par la villa.\n\nCette réalisation témoigne de la capacité d'EQUINOX à intervenir sur des projets d'exception, où la technique s'efface au profit de l'expérience, et où chaque détail participe à l'harmonie des lieux.`
  },
  {
    id: 5,
    title: 'MOSHI MOSHI',
    category: 'Restauration',
    location: 'Monaco',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop&fm=webp',
    gallery: [
      'moshi/EQUINOX-CUISINE_moshimoshi-monaco_7.jpg',
      'moshi/EQUINOX-CUISINE_moshimoshi-coldline.jpg',
      'moshi/EQUINOX-CUISINE_equipements-monaco.jpg',
      'moshi/EQUINOX-CUISINE_giorik-monaco.jpg',
      'moshi/EQUINOX-CUISINE_moshimoshi-monte-carlo.jpg'
    ],
    challenge: `Niché au premier étage du Marché de la Condamine, place d’Armes à Monaco, Moshi Moshi est un restaurant japonais emblématique qui s’apprête à écrire un nouveau chapitre de son histoire. Intimiste et chaleureux, le lieu incarne une rencontre singulière entre la culture culinaire japonaise et les saveurs méditerranéennes.\nLe défi consistait à concevoir une cuisine professionnelle complète, capable de soutenir un service exigeant autour du sushi et de la gastronomie nippone, tout en respectant les contraintes d’un espace en étage au cœur d’un bâtiment historique. L’enjeu était double : garantir une ergonomie parfaite pour les équipes en cuisine, tout en créant un comptoir à sushi visible et soigné, véritable vitrine du savoir-faire du restaurant.`,
    solution: {
      intro: `Pour accompagner cette nouvelle étape, EQUINOX a conçu et installé une cuisine professionnelle complète, pensée pour allier performance, hygiène irréprochable et esthétique cohérente avec l’identité du restaurant.`,
      points: [
        `Cuisine complète équipée : mise en place de l’ensemble des équipements frigorifiques nécessaires au stockage des produits frais, poissons et préparations, avec une attention particulière portée à la maîtrise des températures et à la fluidité des postes de travail.`,
        `Comptoir à sushi sur mesure : création d’un espace de dressage fonctionnel et élégant, conçu pour sublimer le geste du chef et offrir une expérience visuelle aux clients, tout en garantissant l’efficacité opérationnelle lors du service.`
      ]
    },
    result: `Moshi Moshi dispose aujourd’hui d’une cuisine professionnelle parfaitement adaptée à son positionnement et à son identité culinaire. Le comptoir à sushi sur mesure devient le cœur battant du restaurant, où précision technique et esthétique japonaise se rencontrent. Les équipements frigorifiques garantissent la fraîcheur et la qualité des produits, piliers de l’excellence attendue dans la tradition du sushi.\nCette réalisation illustre la capacité d’EQUINOX à intervenir sur des projets patrimoniaux et techniques, en plein cœur de Monaco, en conjuguant respect des contraintes architecturales, performance opérationnelle et élégance discrète. EQUINOX remercie l’équipe de Moshi Moshi pour sa confiance dans l’accompagnement de ce nouveau chapitre, où tradition japonaise et accueil méditerranéen continuent de s’exprimer avec justesse.`
  },
  {
    id: 6,
    title: 'LOMA',
    category: 'Hybride',
    location: 'Cannes',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920&auto=format&fit=crop&fm=webp',
    gallery: [
      'loma/EQUINOX-CUISINE_restaurant-loma.jpg',
      'loma/EQUINOX-CUISINE_giorik.jpg',
      'loma/EQUINOX-CUISINE_restaurant-loma-cannes.jpg',
      'loma/EQUINOX-CUISINE_loma-chambre-froide.jpg',
      'loma/EQUINOX-CUISINE_PRO-chambre-froide.jpg'
    ],
    challenge: `LOMA conjugue trois univers en un seul lieu : un restaurant qui célèbre une cuisine maison simple et précise, sublimée par des produits frais et de saison ; une épicerie fine qui met en lumière le savoir-faire des producteurs français à travers une sélection haut de gamme ; et un espace de privatisation pensé pour transformer chaque événement en moment d’exception.\nLe défi consistait à concevoir et installer une infrastructure technique complète, capable de soutenir cette triple activité dans un espace cohérent et fonctionnel. Il s’agissait de créer une cuisine professionnelle performante, un bar élégant et équipé, une zone de laverie optimisée, et une chambre froide adaptée aux volumes et à la diversité des produits, tout en respectant l’identité raffinée et authentique du lieu.`,
    solution: {
      intro: `Pour accompagner l’ouverture de LOMA, EQUINOX a conçu et réalisé une installation sur mesure, pensée pour répondre aux exigences techniques de chaque pôle d’activité, tout en garantissant fluidité, cohérence et esthétique.`,
      points: [
        `Chambre froide sur mesure : création d’un espace de stockage frigorifique adapté aux volumes de produits frais, aux références d’épicerie fine et aux besoins de la cuisine, avec une organisation pensée pour limiter les déplacements et optimiser la conservation.`,
        `Cuisine complète sur mesure : installation d’un ensemble d’équipements de cuisson, de préparation et de conservation, configurés pour soutenir un service restaurant exigeant, tout en permettant une flexibilité pour les prestations événementielles.`,
        `Bar sur mesure : conception d’un espace bar fonctionnel et élégant, intégrant plan de travail, machine à glaçons, osmoseur pour une qualité d’eau irréprochable, et cave à vin permettant une mise en valeur soignée des références sélectionnées.`,
        `Laverie sur mesure : aménagement d’une zone de plonge et de laverie optimisée, pensée pour absorber les flux du restaurant, de l’épicerie et des événements privés, avec une attention particulière portée à l’hygiène et à l’ergonomie.`
      ]
    },
    result: `LOMA dispose aujourd’hui d’une infrastructure technique complète, pensée comme un véritable outil au service de l’expérience client. La cuisine, le bar, la chambre froide et la laverie forment un ensemble fluide et harmonieux, permettant aux équipes de travailler avec sérénité, précision et efficacité, que ce soit pour le service quotidien du restaurant, la gestion de l’épicerie fine ou l’accueil d’événements privés.\nCette réalisation illustre la capacité d’EQUINOX à concevoir des projets sur mesure pour des lieux hybrides et exigeants, où performance technique et élégance se conjuguent au service d’une expérience gourmande authentique et raffinée. EQUINOX remercie l’équipe de LOMA pour sa confiance dans l’accompagnement de ce projet ambitieux, où chaque détail compte pour sublimer les moments partagés.`
  }
];