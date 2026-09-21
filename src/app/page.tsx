import React from 'react';
import { cvData } from '../data/cvData';
import { Navbar } from '../components/Navbar';
import { IdentityCard } from '../components/IdentityCard';
import { StatsSection } from '../components/StatsSection';
import { SkillsSection } from '../components/SkillsSection';
import { TimelineSection } from '../components/TimelineSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { Github, MessageCircle, Mail, Play, MessageSquare } from 'lucide-react';

export default function Home() {
  const { personal, skills, experiences, education, projects, testimonials } = cvData;

  return (
    <>
      <Navbar />

      <main>
        {/* SECTION HERO */}
        <section className="hero-section" id="hero">
          <div className="container">
            <div className="hero-grid">
              {/* Présentation Texte */}
              <div className="hero-content">
                <div className="status-badge">
                  <span className="pulse-dot"></span>
                  <span id="heroStatusBadge">{personal.statusBadge}</span>
                </div>

                <h1 className="hero-title">
                  Bonjour, je suis <br />
                  <span className="hero-name-gradient" id="heroFullName">
                    {personal.fullName}
                  </span>
                </h1>

                <h2 className="hero-subtitle" id="heroSubtitle">
                  {personal.title}
                </h2>

                <p className="hero-pitch" id="heroPitch">
                  {personal.subtitle}
                </p>

                {/* Boutons d'Action Rapide */}
                <div className="hero-cta-group">
                  <a href="#projects" className="btn btn-primary">
                    <Play size={17} fill="currentColor" />
                    <span>Projets & Recherche</span>
                  </a>

                  <a href="#contact" className="btn btn-outline">
                    <MessageSquare size={17} />
                    <span>Échanger avec moi</span>
                  </a>
                </div>

                {/* Réseaux Sociaux & Accès Directs */}
                <div className="hero-socials">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    title="GitHub Code"
                  >
                    <Github size={20} />
                  </a>

                  <a
                    href={`https://wa.me/${personal.phoneClean}?text=Bonjour%20Israel,%20j'ai%20consulte%20votre%20profil...`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    title="WhatsApp Direct"
                  >
                    <MessageCircle size={20} />
                  </a>

                  <a
                    href={`mailto:${personal.email}`}
                    className="social-icon-btn"
                    title="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>

                {/* Coordonnées visibles lors de l'impression PDF */}
                <div className="print-contact-bar" style={{ display: 'none' }}>
                  <span><strong>Email :</strong> {personal.email}</span>
                  <span><strong>Tél / WhatsApp :</strong> {personal.phone}</span>
                  <span><strong>Localisation :</strong> {personal.location}</span>
                  <span><strong>Statut :</strong> Étudiant en 3e année de Médecine (Futur Médecin-Ingénieur)</span>
                  <span><strong>GitHub :</strong> {personal.github}</span>
                </div>
              </div>

              {/* Carte Visuelle & Identité Vectorielle */}
              <IdentityCard personal={personal} />
            </div>

            {/* Statistiques Clés */}
            <StatsSection stats={personal.stats} />
          </div>
        </section>

        {/* SECTION VISION & À PROPOS */}
        <section className="section-padding bg-alt" id="about">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Philosophie & Vision</span>
              <h2 className="section-title">Comprendre la Médecine, Façonner la Technologie</h2>
              <p className="section-subtitle">
                Le refus de séparer la rigueur clinique de l’ingénierie : concevoir des instruments précis pour résoudre des défis médicaux concrets.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-card">
                <div className="card-top-icon">🩺</div>
                <h3 className="card-title">Socle Clinique Solide</h3>
                <p className="card-text">
                  Formation médicale approfondie en sémiologie, hématologie biologique, neurophysiologie sensorielle et urgences. Projection résolue vers la neurochirurgie pour intervenir aux frontières de la clinique et des technologies de pointe.
                </p>
              </div>

              <div className="about-card">
                <div className="card-top-icon">⚡</div>
                <h3 className="card-title">Génie Logiciel & Prototypage</h3>
                <p className="card-text">
                  Développeur Python professionnel et architecte full-stack (Next.js 14, TypeScript, FastAPI, PostgreSQL). Adepte du vibe coding maîtrisé : l'IA pour accélérer, la compréhension humaine et l'algorithmique pour contrôler.
                </p>
              </div>

              <div className="about-card">
                <div className="card-top-icon">🌍</div>
                <h3 className="card-title">Impact Africain & Mondial</h3>
                <p className="card-text">
                  Conception de solutions adaptées aux contraintes des pays émergents : plateformes médicales offline-first, prise en compte des infrastructures locales et intégration du Mobile Money (Anatomia, suivi drépanocytose).
                </p>
              </div>
            </div>

            {/* Bio Détaillée & Citation */}
            <div className="about-bio-container">
              <div className="about-bio-quote">
                <p className="quote-text">{personal.philosophy}</p>
                <div className="quote-author">— Devise & Règle de Conduite Personnelle</div>
              </div>

              <div className="about-bio-body">
                <p className="bio-lead">{personal.bio}</p>
                <div className="bio-highlights">
                  <div className="highlight-pill">
                    <span className="highlight-title">Médecine Générale :</span>
                    <span className="highlight-desc">3e Année FSS (Bénin)</span>
                  </div>
                  <div className="highlight-pill">
                    <span className="highlight-title">Cap Spécialité :</span>
                    <span className="highlight-desc">Neurochirurgie & Neuro-technologies</span>
                  </div>
                  <div className="highlight-pill">
                    <span className="highlight-title">Langages :</span>
                    <span className="highlight-desc">Python • TypeScript • JavaScript • SQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION COMPÉTENCES */}
        <SkillsSection categories={skills.categories} />

        {/* SECTION TIMELINE / PARCOURS */}
        <TimelineSection experiences={experiences} education={education} />

        {/* SECTION PROJETS MEDTECH & RECHERCHE */}
        <ProjectsSection projects={projects} />

        {/* SECTION TÉMOIGNAGES */}
        <TestimonialsSection testimonials={testimonials} />

        {/* SECTION CONTACT */}
        <ContactSection personal={personal} />
      </main>

      <Footer personal={personal} />
    </>
  );
}
