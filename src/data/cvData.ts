import { CvData } from '../types/cv';

export const cvData: CvData = {
  personal: {
    fullName: "Segnon Israël GOUDAYI",
    firstName: "Segnon Israël",
    lastName: "GOUDAYI",
    title: "Étudiant en 3e Année de Médecine & Futur Médecin-Ingénieur",
    subtitle: "« Médecine × IA × Ingénierie × Innovation » — Comprendre les problématiques cliniques, concevoir des architectures technologiques et contribuer à des systèmes de santé plus performants.",
    statusBadge: "🧬 3e Année de Médecine (Bénin) • Cap Neurochirurgie & IA",
    location: "Cotonou, Bénin • Perspective Internationale",
    email: "segnonisraelg@gmail.com",
    phone: "+229 91 84 56 27",
    phoneClean: "22991845627",
    github: "https://github.com/isro007",
    githubUsername: "isro007",
    linkedin: "https://www.linkedin.com/in/israel-goudayi",
    website: "https://cv-izisaas.pro",
    philosophy: "« La connaissance est le pouvoir, mais la discipline est la clé. »",
    bio: "Étudiant en 3e année de médecine générale au Bénin avec une projection vers la neurochirurgie, je bâtis un profil d'exception à l'intersection de la clinique, de l'intelligence artificielle et de l'ingénierie logicielle. Développeur Python de niveau professionnel et concepteur de solutions numériques (Anatomia, Carnet Médecin-Ingénieur), je refuse de séparer la technique de la médecine : la technologie est l'instrument de précision permettant de résoudre les défis réels de santé en Afrique et dans le monde.",
    stats: [
      { number: "3e Année", label: "Médecine Générale (Bénin)" },
      { number: "Neurochirurgie", label: "Spécialisation visée" },
      { number: "Python Pro", label: "Niveau de programmation" },
      { number: "Anatomia", label: "Projet adaptatif phare" }
    ]
  },

  skills: {
    categories: [
      {
        id: "medecine",
        name: "Sciences Médicales & Clinique",
        description: "Socle clinique avancé, raisonnement diagnostique et physiopathologie.",
        items: [
          { name: "Hématologie (hémogramme, pancytopénie, diagnostic LMC)", level: 90, tag: "Approfondi" },
          { name: "Hémostase (cascade de coagulation, fibrinolyse, exploration)", level: 88, tag: "Approfondi" },
          { name: "Neurophysiologie (voies lemniscale vs spinothalamique, sensoriel)", level: 90, tag: "Axe Neurochirurgie" },
          { name: "Anatomie (voies visuelles, patterns lésionnels, surrénales)", level: 92, tag: "Expertise Anatomia" },
          { name: "Biologie moléculaire (transcription, traduction, réplication)", level: 88, tag: "Niveau agrégation" },
          { name: "Chirurgie & Urgences (occlusion intestinale aiguë, sémiologie)", level: 86, tag: "Pratique clinique" }
        ]
      },
      {
        id: "engineering_saas",
        name: "Programmation & Génie Logiciel",
        description: "Développement logiciel complet, architectures robustes et prototypes MVP.",
        items: [
          { name: "Python (Niveau professionnel, Scripts, FastAPI, Pydantic v2)", level: 94, tag: "Langage de référence" },
          { name: "Next.js 14, TypeScript & React", level: 90, tag: "Stack moderne" },
          { name: "PostgreSQL 16, Schémas relationnels & SQL", level: 88, tag: "Bases de données" },
          { name: "Celery, Redis & Tâches asynchrones", level: 82, tag: "Backend distribué" },
          { name: "Algorithmique, Structures de données & CS50x", level: 90, tag: "Fondations théoriques" },
          { name: "Git, GitHub Workflows & Environnements Linux", level: 92, tag: "DevOps & Collaboration" },
          { name: "Vibe Coding & Prototypage rapide de SaaS", level: 95, tag: "Productivité augmentée" }
        ]
      },
      {
        id: "ai_med",
        name: "Intelligence Artificielle Médicale",
        description: "Applications concrètes du Machine Learning à l'analyse clinique et au suivi patient.",
        items: [
          { name: "IA Médicale & Systèmes d'aide au diagnostic", level: 85, tag: "Recherche active" },
          { name: "Suivi intelligent de la Drépanocytose (prévention crises)", level: 88, tag: "Projet en cours" },
          { name: "Analyse automatisée de littérature biomédicale", level: 86, tag: "Veille scientifique" },
          { name: "Modélisation de données de santé & Imagerie médicale", level: 80, tag: "Exploration" }
        ]
      },
      {
        id: "research_langs",
        name: "Recherche, Culture & Langues",
        description: "Méthode scientifique rigoureuse, culture générale compétitive et multilinguisme.",
        items: [
          { name: "Méthode scientifique & Fiches de synthèse biomédicales", level: 92, tag: "Structuré" },
          { name: "Culture Générale & Club Génie en Herbe FSS", level: 95, tag: "Compétition & Quiz" },
          { name: "Anglais scientifique & technique", level: 82, tag: "Priorité absolue" },
          { name: "Français (langue maternelle, rédaction académique)", level: 98, tag: "Natif" },
          { name: "Japonais, Espagnol, Allemand", level: 35, tag: "Vision Polyglotte" }
        ]
      }
    ]
  },

  experiences: [
    {
      role: "Concepteur & Développeur Principal",
      company: "Projet Anatomia — Plateforme Adaptative MedTech",
      period: "2023 - Présent",
      details: "Conception intégrale de l'architecture logicielle : diagrammes UML (classes Utilisateur à plat avec rôle, logique SM-2 dans Progression), schéma PostgreSQL 16, backend FastAPI + Pydantic v2 et interface Next.js 14 avec TypeScript. Élaboration de la feuille de route de 9 domaines de compétences avec mentorat frontend.",
      badges: ["Next.js 14", "TypeScript", "FastAPI", "PostgreSQL", "SM-2"]
    },
    {
      role: "Étudiant Hospitalier & Pratique Clinique",
      company: "Faculté des Sciences de la Santé (FSS) — Bénin",
      period: "2022 - Présent",
      details: "Apprentissage clinique intensif : sémiologie médicale et chirurgicale, urgences, stages en hématologie, neurophysiologie, raisonnement diagnostique et prise en charge des urgences occlusives. Cap fixé sur la spécialisation en neurochirurgie.",
      badges: ["Sémiologie", "Hématologie", "Neurophysiologie", "Urgences"]
    },
    {
      role: "Créateur de Contenus Académiques & Quiz Engine",
      company: "Club Génie en Herbe — FSS Cotonou",
      period: "2023 - Présent",
      details: "Définition de l'identité de marque du club (Scientia et Fraternitas Vincunt). Rédaction de guides de référence : littérature africaine (100 questions), 100 plus grands livres Bokklubben, guide du patrimoine et histoire du Bénin en 2 volumes. Conception d'une application web de quiz compétitif à 42 questions avec minuterie et calcul de score dynamique.",
      badges: ["Génie Logiciel", "Quiz Engine", "Culture Générale", "Branding"]
    },
    {
      role: "Fondateur & Stratège Produit",
      company: "Projets SaaS & E-Commerce (Sènan Essence, LivrExpress)",
      period: "2023 - Présent",
      details: "Création et lancement de prototypes à fort impact : Sènan Essence (parfumerie de luxe minimaliste, flacon sobre monogrammé SE, intégration WhatsApp Business et Mobile Money) et LivrExpress (landing page optimisée pour la livraison urbaine à Dakar et Cotonou).",
      badges: ["SaaS", "E-Commerce", "UX Design", "Mobile Money"]
    }
  ],

  education: [
    {
      degree: "3e Année de Médecine Générale",
      institution: "Faculté des Sciences de la Santé (FSS) — Bénin",
      period: "2022 - En cours",
      details: "Formation médicale complète avec approfondissement personnel en neurochirurgie, neurophysiologie, cascade de coagulation et diagnostic de la Leucémie Myéloïde Chronique."
    },
    {
      degree: "Fondations en Informatique & Algorithmique (CS50x)",
      institution: "Harvard Online / Étude Autonome",
      period: "2023",
      details: "Algorithmique avancée, structures de données fondamentales, gestion de la mémoire, complexité temporelle et résolution méthodique de problèmes logiciels."
    },
    {
      degree: "Baccalauréat Scientifique (Série C / D)",
      institution: "Enseignement Secondaire Général — Bénin",
      period: "Diplômé avec Mention",
      details: "Bases solides en mathématiques, sciences physiques, chimie et biologie cellulaire."
    }
  ],

  projects: [
    {
      id: "anatomia",
      title: "Anatomia — Plateforme Adaptative d'Anatomie",
      category: "health_tech",
      categoryLabel: "Projet Phare • MedTech",
      iconType: "anatomy",
      featured: true,
      shortDesc: "Plateforme francophone d'apprentissage adaptatif de l'anatomie médicale basée sur la répétition espacée (SM-2).",
      fullDesc: "Anatomia est conçu pour révolutionner l'apprentissage de l'anatomie pour les étudiants en médecine. Reposant sur une stack Next.js 14, FastAPI, PostgreSQL 16 et Celery/Redis, le système implémente l'algorithme SM-2 pour adapter les révisions en fonction des patterns d'oubli de chaque apprenant. Issu de la réflexion AnatoMED-Afrique, le projet prévoit un mode offline-first et une intégration mobile money adaptée aux réalités locales.",
      tags: ["Next.js 14", "FastAPI", "TypeScript", "PostgreSQL", "Celery", "Algorithme SM-2"],
      demoUrl: "https://cv-izisaas.pro/#contact",
      githubUrl: "https://github.com/isro007"
    },
    {
      id: "drepa-ia",
      title: "Système IA — Suivi de la Drépanocytose",
      category: "health_tech",
      categoryLabel: "IA Médicale",
      iconType: "dna",
      featured: true,
      shortDesc: "Dispositif intelligent de suivi personnalisé et automatisé pour patients atteints de drépanocytose en Afrique.",
      fullDesc: "Projet d'innovation médicale visant à anticiper les crises vaso-occlusives et complications de la drépanocytose. Le système va au-delà d'un simple dossier médical informatisé : il analyse les données cliniques déclaratives et environnementales pour assister le patient dans sa continuité de soins et alerter l'équipe soignante.",
      tags: ["IA Médicale", "Drépanocytose", "Python", "Data Santé", "Santé Africaine"],
      demoUrl: "https://cv-izisaas.pro/#contact",
      githubUrl: "https://github.com/isro007"
    },
    {
      id: "carnet-medecin-ingenieur",
      title: "Carnet Médecin-Ingénieur",
      category: "tools",
      categoryLabel: "Outil de Suivi Personnel",
      iconType: "notebook",
      featured: true,
      shortDesc: "Application de monitoring et validation de compétences interdisciplinaires (Médecine, Dev, IA, Robotique).",
      fullDesc: "Outil conçu pour piloter de façon méthodique la double trajectoire de médecin-ingénieur. Permet le suivi par domaine (médecine générale, génie logiciel, IA médicale, robotique), avec statuts d'acquisition (À faire / En cours / Acquis), notes détaillées et sauvegarde automatique locale.",
      tags: ["Python", "Productivité", "Checklist Médicale", "Médecin-Ingénieur"],
      demoUrl: "https://cv-izisaas.pro/#contact",
      githubUrl: "https://github.com/isro007"
    },
    {
      id: "genie-en-herbe-app",
      title: "Plateforme Interactive Génie en Herbe",
      category: "tools",
      categoryLabel: "Culture & Émulation",
      iconType: "trophy",
      featured: false,
      shortDesc: "Application de compétition de quiz (42 questions, chronométrage, scoring par catégorie) pour le club FSS.",
      fullDesc: "Outil d'entraînement rapide conçu pour le club Génie en Herbe de la faculté de médecine. Gère le flux complet d'un match (minuteur de buzz, attribution dynamique de points, questions croisées en littérature africaine, sciences, histoire et culture du Bénin).",
      tags: ["TypeScript", "Quiz Engine", "Culture Générale", "FSS Bénin"],
      demoUrl: "https://cv-izisaas.pro/#contact",
      githubUrl: "https://github.com/isro007"
    },
    {
      id: "senan-essence",
      title: "Sènan Essence — Parfumerie Minimaliste",
      category: "business",
      categoryLabel: "Entrepreneuriat",
      iconType: "sparkles",
      featured: false,
      shortDesc: "Marque de parfumerie de luxe minimaliste à identité africaine (monogramme SE, packaging épuré).",
      fullDesc: "Projet entrepreneurial complet : création de l'univers de marque, stratégie de distribution via WhatsApp Business et Mobile Money, packaging premium inspiré de flacons rectangulaires sobres avec monogramme doré SE.",
      tags: ["Branding", "Luxe Minimaliste", "E-Commerce", "Mobile Money"],
      demoUrl: "https://cv-izisaas.pro/#contact",
      githubUrl: "https://github.com/isro007"
    },
    {
      id: "livrexpress",
      title: "LivrExpress — Logistique Dakar & Cotonou",
      category: "business",
      categoryLabel: "Logistique Urbaine",
      iconType: "truck",
      featured: false,
      shortDesc: "Conception de l'expérience utilisateur et de la landing page pour un service de livraison urbaine en 2h.",
      fullDesc: "Interface de commande simplifiée pour expédier et recevoir des colis à Cotonou et Dakar. Parcours centré sur la réassurance client, la clarté tarifaire et l'adaptation aux usages mobiles locaux.",
      tags: ["UX/UI Design", "Landing Page", "Logistique", "Cotonou & Dakar"],
      demoUrl: "https://cv-izisaas.pro/#demo-livrexpress",
      githubUrl: "https://github.com/isro007"
    }
  ],

  testimonials: [
    {
      quote: "Une rigueur scientifique impressionnante et une capacité rare à concevoir des architectures logicielles complètes comme Anatomia. Le profil parfait du futur médecin-ingénieur.",
      author: "Mentor & Spécialiste Frontend",
      role: "Collaborateur Technique",
      avatarLetter: "M"
    },
    {
      quote: "Israël allie une curiosité intellectuelle sans limites à une profonde discipline d'apprentissage. Ses contributions au club Génie en Herbe et en médecine témoignent d'une grande maturité.",
      author: "Confrère Faculté FSS",
      role: "Étudiant en Médecine",
      avatarLetter: "C"
    }
  ]
};
