import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'TAYAC',
    category: 'Pâtisserie',
    location: 'Monaco',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=800&auto=format&fit=crop'
    ],
    challenge: 'Implanté au cœur du Carré d’Or de Monaco, le nouveau salon-boutique du Chef Pâtissier Philippe Tayac devait incarner l’aboutissement d’un parcours d’excellence. L’enjeu était double : concevoir un espace parfaitement fonctionnel dans un environnement contraint, tout en offrant une mise en scène spectaculaire des créations pâtissières, à la hauteur d’une adresse pensée comme une bijouterie.',
    solution: {
      intro: 'Pour répondre aux attentes du Chef Philippe Tayac et de son équipe, EQUINOX ha conçu une solution sur mesure, en étroite collaboration avec les partenaires techniques de la pâtisserie.',
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
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800&auto=format&fit=crop'
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
    location: 'Provence',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?q=80&w=800&auto=format&fit=crop'
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
  }
];