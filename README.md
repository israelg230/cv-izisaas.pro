# CV en Ligne Haute Fidélité — Segnon Israël GOUDAYI
> **« Médecine × IA × Ingénierie × Innovation »**

Site web CV en ligne et plateforme de présentation des travaux et projets de **Segnon Israël GOUDAYI**, étudiant en 3e année de médecine générale (Bénin) et futur médecin-ingénieur (axe Neurochirurgie, IA médicale, génie logiciel).

---

## 🛠️ Stack Technologique (Conforme au Cadrage)

- **Frontend :** **Next.js 14** + **TypeScript** (App Router, Server & Client Components, typage strict)
- **Design System :** Thème sombre `#121212`, typographie **Inter** & **Outfit**, accents **Orange signature `#ff7a1a`** et **Or `#f59e0b`**, design 100% vectoriel (zéro photo, monogramme SIG rotatif)
- **Backend API :** **Python 3.13** + **FastAPI** + **Pydantic v2** (Validation des schémas de données médicales et formulaires)
- **Icônes :** **Lucide React** (icônes vectorielles adaptées à chaque spécialité)

---

## 🚀 Démarrage Rapide

### 1. Frontend (Next.js 14 + TypeScript)

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement (port 3000)
npm run dev

# Vérification du typage TypeScript
npm run type-check

# Construction du bundle de production optimisé
npm run build
```

Le site est accessible à l'adresse : **http://localhost:3000**

### 2. Backend (Python FastAPI + Pydantic v2)

```bash
# Installation des dépendances backend
pip install -r backend/requirements.txt

# Lancement de l'API FastAPI avec rechargement automatique (port 8000)
python -m uvicorn backend.main:app --reload --port 8000
# ou
npm run backend
```

- Documentation interactive Swagger UI : **http://localhost:8000/docs**
- Documentation alternative ReDoc : **http://localhost:8000/redoc**
- Endpoint CV complet : **http://localhost:8000/api/cv**

---

## 📂 Architecture du Projet

```
cv-izisaas.pro/
├── backend/                  # Module Backend Python FastAPI
│   ├── main.py               # Application FastAPI, routes & CORS
│   ├── models.py             # Modèles Pydantic v2 validant les données
│   ├── requirements.txt      # Dépendances Python (fastapi, uvicorn, pydantic)
│   └── test_backend.py       # Suite de tests automatisés des endpoints
├── src/
│   ├── app/
│   │   ├── globals.css       # Design System sombre #121212 & orange #ff7a1a
│   │   ├── layout.tsx        # Layout racine, SEO, métadonnées & polices
│   │   └── page.tsx          # Page principale assemblant tous les composants
│   ├── components/           # Composants React/TypeScript réutilisables
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── IdentityCard.tsx  # Carte d'identité vectorielle avec blason SIG
│   │   ├── Navbar.tsx        # Navigation, dark/light mode, export PDF
│   │   ├── ProjectIcons.tsx  # Mappeur d'icônes vectorielles par domaine
│   │   ├── ProjectModal.tsx  # Modale de spécifications des projets
│   │   ├── ProjectsSection.tsx # Portfolio filtrable par domaine
│   │   ├── SkillsSection.tsx # Barres de compétences par catégories
│   │   ├── StatsSection.tsx  # Chiffres clés du profil
│   │   ├── TestimonialsSection.tsx
│   │   └── TimelineSection.tsx # Bascule Expériences / Formations
│   ├── data/
│   │   └── cvData.ts         # Données canoniques typées
│   └── types/
│       └── cv.ts             # Schémas d'interfaces TypeScript stricts
├── GEMINI.md                 # Directives, conventions et profil de Segnon Israël GOUDAYI
├── next.config.js            # Configuration Next.js
├── package.json              # Dépendances et scripts Node.js
└── tsconfig.json             # Configuration du compilateur TypeScript
```

---

## 📄 Licence & Droits
© Segnon Israël GOUDAYI — Tous droits réservés.
