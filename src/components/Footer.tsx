'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, MessageCircle } from 'lucide-react';
import { PersonalInfo } from '../types/cv';

interface FooterProps {
  personal: PersonalInfo;
}

export const Footer: React.FC<FooterProps> = ({ personal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-col">
          <div className="footer-brand">
            <span className="logo-badge">SIG</span>
            <span className="footer-brand-title">{personal.fullName}</span>
          </div>
          <p className="footer-tagline">
            Médecin en formation • Futur Médecin-Ingénieur • Développeur Full-Stack Python & TypeScript.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Navigation Rapide</h4>
          <ul className="footer-nav-list">
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#about">Vision & À Propos</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#timeline">Parcours</a></li>
            <li><a href="#projects">Projets MedTech</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Réseaux & Plateformes</h4>
          <div className="footer-social-links">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`https://wa.me/${personal.phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>© {new Date().getFullYear()} Segnon Israël GOUDAYI. Tous droits réservés.</p>
          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            title="Revenir en haut"
            aria-label="Revenir en haut de la page"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
