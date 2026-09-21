'use client';

import React, { useState } from 'react';
import { ProjectItem } from '../types/cv';
import { ProjectIcon } from './ProjectIcons';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const displayedProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section-padding" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Innovations & Produits</span>
          <h2 className="section-title">Projets Majeurs & Recherche</h2>
          <p className="section-subtitle">
            Conception d'architectures logicielles complètes, solutions d'IA médicale et plateformes d'apprentissage adaptatif.
          </p>
        </div>

        {/* Filtres de catégories */}
        <div className="portfolio-filters" id="projectFilters">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tous les Projets
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'health_tech' ? 'active' : ''}`}
            onClick={() => setFilter('health_tech')}
          >
            MedTech & Santé
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'tools' ? 'active' : ''}`}
            onClick={() => setFilter('tools')}
          >
            Outils & Systèmes
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'business' ? 'active' : ''}`}
            onClick={() => setFilter('business')}
          >
            Entrepreneuriat
          </button>
        </div>

        {/* Grille de cartes de projets (100% Vectoriel) */}
        <div className="projects-grid" id="projectsGrid">
          {displayedProjects.map((p) => (
            <article className="project-card" key={p.id}>
              <div
                className="project-card-banner"
                onClick={() => setSelectedProject(p)}
                role="button"
                tabIndex={0}
                aria-label={`Ouvrir détails pour ${p.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setSelectedProject(p);
                }}
              >
                <div className="project-icon-wrapper">
                  <ProjectIcon iconType={p.iconType} size={30} />
                </div>
                <span className="project-category-badge">{p.categoryLabel}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.shortDesc}</p>

                <div className="project-tags">
                  {p.tags.map((t, tIdx) => (
                    <span className="tech-tag" key={tIdx}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => setSelectedProject(p)}
                  >
                    <span>Fiche Projet</span>
                  </button>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="En savoir plus"
                    >
                      <span>Détails</span>
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="Code GitHub"
                    >
                      <Github size={14} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modale de détails */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
