'use client';

import React, { useState } from 'react';
import { ExperienceItem, EducationItem } from '../types/cv';

interface TimelineSectionProps {
  experiences: ExperienceItem[];
  education: EducationItem[];
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ experiences, education }) => {
  const [tab, setTab] = useState<'experiences' | 'education'>('experiences');

  return (
    <section className="section-padding bg-alt" id="timeline">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Trajectoire & Jalons</span>
          <h2 className="section-title">Parcours Académique & Projets Réalisés</h2>
          <p className="section-subtitle">
            Une construction progressive et sans compromis alliant apprentissage hospitalier rigoureux et développements technologiques concrets.
          </p>
        </div>

        {/* Boutons de bascule */}
        <div className="timeline-toggle-group">
          <button
            type="button"
            className={`btn-toggle ${tab === 'experiences' ? 'active' : ''}`}
            onClick={() => setTab('experiences')}
          >
            Expériences & Réalisations
          </button>
          <button
            type="button"
            className={`btn-toggle ${tab === 'education' ? 'active' : ''}`}
            onClick={() => setTab('education')}
          >
            Formations Académiques
          </button>
        </div>

        {/* Contenu Timeline */}
        <div className="timeline-container">
          <div className="timeline-line" aria-hidden="true"></div>

          <div className="timeline-items" id="timelineItems">
            {tab === 'experiences'
              ? experiences.map((exp, idx) => (
                  <div className="timeline-item" key={idx}>
                    <div className="timeline-marker" aria-hidden="true"></div>
                    <div className="timeline-content-card">
                      <div className="timeline-header">
                        <h3 className="timeline-role">{exp.role}</h3>
                        <span className="timeline-period">{exp.period}</span>
                      </div>
                      <div className="timeline-company">{exp.company}</div>
                      <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                        {exp.details}
                      </p>
                      {exp.badges && exp.badges.length > 0 && (
                        <div className="timeline-tags">
                          {exp.badges.map((b, bIdx) => (
                            <span className="tech-tag" key={bIdx}>
                              {b}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              : education.map((edu, idx) => (
                  <div className="timeline-item" key={idx}>
                    <div className="timeline-marker" aria-hidden="true"></div>
                    <div className="timeline-content-card">
                      <div className="timeline-header">
                        <h3 className="timeline-role">{edu.degree}</h3>
                        <span className="timeline-period">{edu.period}</span>
                      </div>
                      <div className="timeline-company">{edu.institution}</div>
                      <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                        {edu.details}
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};
