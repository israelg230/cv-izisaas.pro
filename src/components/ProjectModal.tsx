'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { ProjectItem } from '../types/cv';
import { ProjectIcon } from './ProjectIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop active"
      id="projectModal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog">
        <button
          type="button"
          className="modal-close-btn"
          id="modalCloseBtn"
          onClick={onClose}
          aria-label="Fermer la boîte de dialogue"
        >
          <X size={18} />
        </button>

        {/* En-tête vectoriel sans image */}
        <div className="modal-project-header">
          <div className="modal-project-icon">
            <ProjectIcon iconType={project.iconType} size={30} />
          </div>
          <span className="project-category-badge">{project.categoryLabel}</span>
        </div>

        <div className="modal-body">
          <h3 className="modal-title" id="modalProjectTitle">
            {project.title}
          </h3>

          <p className="modal-description" id="modalProjectDescription">
            {project.fullDesc || project.shortDesc}
          </p>

          <div className="modal-section-title">Architecture & Technologies</div>
          <div className="project-tags" id="modalProjectTags">
            {project.tags.map((t, idx) => (
              <span className="tech-tag" key={idx}>
                {t}
              </span>
            ))}
          </div>

          <div className="modal-footer">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              id="modalProjectDemoBtn"
            >
              <ExternalLink size={15} />
              <span>Démonstration / Contact</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              id="modalProjectGithubBtn"
            >
              <Github size={15} />
              <span>Code Source GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
