import React from 'react';
import { TestimonialItem } from '../types/cv';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="section-padding bg-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Évaluations & Confiance</span>
          <h2 className="section-title">Avis de Confrères & Mentors</h2>
          <p className="section-subtitle">
            Témoignages sur la rigueur d'apprentissage, la discipline personnelle et la vision interdisciplinaire.
          </p>
        </div>

        <div className="testimonials-grid" id="testimonialsGrid">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="quote-icon">“</div>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.avatarLetter || 'U'}</div>
                <div>
                  <div className="author-name">{t.author}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
