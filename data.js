/**
 * Fichier de configuration des données du CV en ligne
 * Segnon Israël GOUDAYI — cv-izisaas.pro
 * Profil : Étudiant en 3e année de Médecine (Bénin) & Futur Médecin-Ingénieur
 * Positionnement : « Médecine × IA × Ingénierie × Innovation »
 */

const cvData = {
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
        id: "ai_health",
        name: "IA Médicale & Santé Digitale",
        description: "Intelligence artificielle, aide au diagnostic et exploitation des données de santé.",
        items: [
          { name: "Aide au diagnostic médical & Machine Learning", level: 86, tag: "Recherche appliquée" },
          { name: "Système de suivi intelligent de la Drépanocytose", level: 92, tag: "Projet HealthTech" },
          { name: "Analyse de littérature biomédicale & Base de connaissances", level: 90, tag: "Synthèse scientifique" },
          { name: "Imagerie médicale & Vision par ordinateur", level: 80, tag: "En exploration" },
          { name: "Médecine personnalisée adaptée aux réalités africaines", level: 88, tag: "Vision continentale" }
        ]
      },
      {
        id: "transversal",
        name: "Méthodes, Génie en Herbe & Culture",
        description: "Rappel actif, répétition espacée (SM-2), agilité mémorielle et entrepreneuriat.",
        items: [
          { name: "Algorithmes de répétition espacée (Logique SM-2)", level: 92, tag: "Intégré dans Anatomia" },
          { name: "Génie en Herbe (Quiz interactifs, 42Q, mémoire rapide)", level: 96, tag: "Club Faculté FSS" },
          { name: "Recherche documentaire & Synthèse sur l'Afrique / Bénin", level: 94, tag: "Supports d'étude" },
          { name: "Résolution systématique de problèmes (Définir → Construire → Tester)", level: 95, tag: "Méthodologie" },
          { name: "Anglais scientifique et médical", level: 86, tag: "Opérationnel" }
        ]
      }
    ]
  },

  experiences: [
    {
      role: "Étudiant Hospitalo-Universitaire en 3e Année de Médecine",
      company: "Faculté des Sciences de la Santé (Bénin)",
      period: "2022 — Présent",
      location: "Bénin",
      badge: "Formation Principale",
      description: "Apprentissage clinique approfondi et études de pathologies à haut registre d'exigence.",
      highlights: [
        "Étude poussée de l'hématologie (hémogrammes, pancytopénie, LMC) et de l'hémostase (cascade de coagulation, fibrinolyse).",
        "Maîtrise de la neurophysiologie (voies lemniscales vs spinothalamiques) orientée vers la neurochirurgie.",
        "Observation sémiologique et prise en charge des urgences chirurgicales (occlusion intestinale aiguë).",
        "Travaux avancés en biologie moléculaire de niveau agrégation (transcription, réplication de l'ADN)."
      ],
      techStack: ["Hématologie", "Neurophysiologie", "Anatomie", "Sémiologie", "Biologie Moléculaire"]
    },
    {
      role: "Concepteur & Architecte Logiciel — Projet Anatomia",
      company: "Plateforme d'Apprentissage Médicale Adaptative",
      period: "2023 — Présent",
      location: "Bénin & Espace Francophone",
      badge: "Projet Phare",
      description: "Conception complète d'une plateforme d'apprentissage adaptatif pour étudiants en anatomie médicale.",
      highlights: [
        "Cycle de conception complet : analyse des besoins, diagrammes UML (classes, rôles, logique de progression), schémas PostgreSQL.",
        "Intégration de l'algorithme de répétition espacée SM-2 pour maximiser la rétention mémorielle sur 9 domaines d'anatomie.",
        "Évolution du concept pionnier AnatoMED-Afrique (pensé offline-first, mobile money et programmes adaptés au contexte africain).",
        "Architecture backend robuste en FastAPI + Pydantic v2 et interface Next.js 14 TypeScript, avec mentorat d'un ami expert frontend."
      ],
      techStack: ["Next.js 14", "FastAPI", "TypeScript", "PostgreSQL 16", "Celery / Redis", "Algorithme SM-2"]
    },
    {
      role: "Responsable Conception Digitale & Concepteur de Quiz",
      company: "Club Génie en Herbe — Faculté de Médecine (FSS)",
      period: "2022 — Présent",
      location: "Faculté de Médecine, Bénin",
      badge: "Culture & Émulation",
      description: "Création de l'identité de marque, des supports de formation et d'applications de quiz compétitifs.",
      highlights: [
        "Définition de l'identité complète du club (devise 'Scientia et Fraternitas Vincunt', univers visuel et charte).",
        "Conception d'applications de quiz interactives (formats 42 questions, gestion du minuteur, scoring et répartition thématique).",
        "Rédaction de supports d'études complets : littérature africaine (quiz 100 questions), sélection Bokklubben, guide sur l'histoire et le patrimoine du Bénin (2 volumes)."
      ],
      techStack: ["Applications Quiz", "UI Interactive", "Rédaction Scientifique", "Culture Générale", "Branding"]
    },
    {
      role: "Fondateur & Stratège de Marque",
      company: "Sènan Essence & Initiatives Numériques (LivrExpress)",
      period: "2023 — Présent",
      location: "Cotonou & Dakar",
      badge: "Entrepreneuriat",
      description: "Création d'une marque de parfumerie minimaliste à identité africaine et projets numériques e-logistique.",
      highlights: [
        "Sènan Essence : création de la marque (flacon rectangulaire, monogramme SE), palette de luxe minimaliste, canaux WhatsApp Business et Mobile Money.",
        "LivrExpress : élaboration de l'expérience utilisateur et de la landing page pour la livraison express à Dakar et Cotonou.",
        "Développement d'une compréhension pragmatique du commerce, de l'acquisition client et de l'adaptation aux marchés CEDEAO."
      ],
      techStack: ["Branding", "E-Commerce", "Stratégie Digitale", "Expérience Client", "Mobile Money"]
    }
  ],

  education: [
    {
      degree: "Diplôme d'État de Docteur en Médecine (3e année en cours)",
      institution: "Faculté des Sciences de la Santé (Bénin)",
      period: "2022 — Présent",
      details: "Formation clinique et hospitalière rigoureuse. Projection à long terme vers l'internat et la spécialisation en Neurochirurgie, couplée à la recherche en technologies médicales et robotique."
    },
    {
      degree: "Formation Avancée en Ingénierie Logicielle & Python Professionnel",
      institution: "Harvard CS50x & Cursus Autonome en Génie Logiciel",
      period: "2022 — Présent",
      details: "Maîtrise approfondie des algorithmes, structures de données, Python avancé, architectures Next.js/FastAPI, bases relationnelles PostgreSQL et modélisation logicielle."
    },
    {
      degree: "Baccalauréat Scientifique",
      institution: "Enseignement Général Secondaire",
      period: "Mention d'Excellence",
      details: "Excellence académique en mathématiques, sciences physiques et biologie / SVT."
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
      tags: ["JavaScript", "Quiz Engine", "Culture Générale", "FSS Bénin"],
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

if (typeof window !== "undefined") {
  window.cvData = cvData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
