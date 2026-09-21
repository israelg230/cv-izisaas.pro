'use client';

import React, { useState } from 'react';
import { SkillCategory } from '../types/cv';

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ categories }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const allSkills = categories.flatMap((cat) =>
    cat.items.map((item) => ({
      ...item,
      categoryId: cat.id,
      categoryName: cat.name,
    }))
  );

  const displayedSkills =
    activeFilter === 'all'
      ? allSkills
      : allSkills.filter((s) => s.categoryId === activeFilter);

  return (
    <section className="section-padding" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Expertise Hybride</span>
          <h2 className="section-title">Compétences & Maîtrises Techniques</h2>
          <p className="section-subtitle">
            Une synergie méthodique entre connaissances biomédicales approfondies, génie logiciel moderne et intelligence artificielle.
          </p>
        </div>

        {/* Onglets de filtrage */}
        <div className="skills-tabs" id="skillsTabs">
          <button
            type="button"
            className={`skill-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Toutes les compétences
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`skill-tab-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grille de barres de compétences */}
        <div className="skills-grid" id="skillsGrid">
          {displayedSkills.map((skill, index) => (
            <div className="skill-card" key={`${skill.categoryId}-${skill.name}-${index}`}>
              <div className="skill-card-top">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-tag">{skill.tag}</span>
              </div>
              <div className="skill-bar-bg" aria-hidden="true">
                <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
