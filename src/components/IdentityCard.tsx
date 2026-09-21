'use client';

import React from 'react';
import { MapPin } from 'lucide-react';
import { PersonalInfo } from '../types/cv';

interface IdentityCardProps {
  personal: PersonalInfo;
}

export const IdentityCard: React.FC<IdentityCardProps> = ({ personal }) => {
  return (
    <div className="hero-visual">
      <div className="profile-card-wrapper">
        <div className="profile-card-glow" aria-hidden="true"></div>

        {/* Badges Technologiques Flottants */}
        <div className="floating-pill floating-pill-1">
          <span>🩺 Anatomia • MedTech & SM-2</span>
        </div>
        <div className="floating-pill floating-pill-2">
          <span>🧠 Neurochirurgie × IA</span>
        </div>

        {/* Carte d'Identité Vectorielle Pure (Sans photo) */}
        <div className="profile-card identity-card">
          <div className="identity-card-inner">
            {/* Monogramme & Blason SIG */}
            <div className="identity-emblem">
              <div className="emblem-hex">
                <span className="emblem-sig">SIG</span>
              </div>
            </div>

            <div className="identity-meta">
              <h3 className="identity-name">{personal.fullName}</h3>
              <div className="identity-role">Futur Médecin-Ingénieur</div>
              <div className="identity-location">
                <MapPin size={14} />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Matrice interdisciplinaire */}
            <div className="identity-matrix">
              <div className="matrix-item">
                <span className="matrix-label">Formation Clinique</span>
                <span className="matrix-val">3e Année Médecine (FSS)</span>
              </div>
              <div className="matrix-item">
                <span className="matrix-label">Génie Logiciel</span>
                <span className="matrix-val">Python Pro • Next.js 14</span>
              </div>
              <div className="matrix-item">
                <span className="matrix-label">Axe de Recherche</span>
                <span className="matrix-val">Neurochirurgie & IA</span>
              </div>
              <div className="matrix-item">
                <span className="matrix-label">Projet Phare</span>
                <span className="matrix-val">Anatomia (SM-2)</span>
              </div>
            </div>

            {/* Devise personnelle gravée */}
            <div className="identity-creed">
              {personal.philosophy}
            </div>

            {/* Statut d'activité */}
            <div className="identity-footer-badge">
              <span className="badge-pulse"></span>
              <span>Disponible pour Projets MedTech & Recherche</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
