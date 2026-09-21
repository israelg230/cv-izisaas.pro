'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { PersonalInfo } from '../types/cv';

interface ContactSectionProps {
  personal: PersonalInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ personal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Tentative d'envoi vers le backend FastAPI s'il est actif sur le port 8000
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).catch(() => null);

      if (response && response.ok) {
        const data = await response.json();
        setStatus('success');
        setStatusMessage(data.message || 'Votre message a été transmis avec succès.');
      } else {
        // En mode client autonome, redirection directe ou feedback positif
        setStatus('success');
        setStatusMessage(`Merci ${formData.name} ! Votre message a été préparé. Vous pouvez aussi m'écrire directement sur WhatsApp ou par email.`);
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setStatusMessage("Une erreur est survenue lors de l'envoi. Veuillez utiliser WhatsApp ou l'email direct.");
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <section className="section-padding" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Échange & Collaboration</span>
          <h2 className="section-title">Prendre Contact</h2>
          <p className="section-subtitle">
            Disponible pour discuter de projets MedTech, d'architectures d'IA en santé, de recherche biomédicale ou de collaborations technologiques.
          </p>
        </div>

        <div className="contact-grid">
          {/* Informations Directes */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Canaux Directs</h3>
            <p className="contact-info-desc">
              Privilégiez WhatsApp ou l'email pour une réponse rapide et un échange direct.
            </p>

            <div className="contact-items-list">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-item-label">Email Personnel</div>
                  <div className="contact-item-value">
                    <a href={`mailto:${personal.email}`}>{personal.email}</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-item-label">Téléphone & WhatsApp</div>
                  <div className="contact-item-value">
                    <a
                      href={`https://wa.me/${personal.phoneClean}?text=Bonjour%20Israel,%20j'ai%20consulte%20votre%20CV%20en%20ligne...`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-item-label">Localisation</div>
                  <div className="contact-item-value">{personal.location}</div>
                </div>
              </div>
            </div>

            {/* Bouton d'action directe WhatsApp */}
            <a
              href={`https://wa.me/${personal.phoneClean}?text=Bonjour%20Israel,%20j'aimerais%20discuter%20d'un%20projet...`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '14px' }}
            >
              <MessageSquare size={18} />
              <span>Démarrer une conversation WhatsApp</span>
            </a>
          </div>

          {/* Formulaire de Contact */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} id="contactForm">
              <div className="form-group">
                <label className="form-label" htmlFor="contactName">
                  Votre Nom ou Organisation *
                </label>
                <input
                  type="text"
                  id="contactName"
                  className="form-input"
                  required
                  placeholder="Ex: Dr. Martin / Équipe MedTech"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contactEmail">
                  Votre Adresse Email *
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  className="form-input"
                  required
                  placeholder="nom@domaine.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contactSubject">
                  Objet du Message *
                </label>
                <input
                  type="text"
                  id="contactSubject"
                  className="form-input"
                  required
                  placeholder="Ex: Collaboration recherche, projet Anatomia, échange..."
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contactMessage">
                  Votre Message *
                </label>
                <textarea
                  id="contactMessage"
                  className="form-textarea"
                  required
                  rows={4}
                  placeholder="Détaillez votre proposition ou question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={status === 'submitting'}
              >
                <Send size={18} />
                <span>{status === 'submitting' ? 'Envoi en cours...' : 'Envoyer le Message'}</span>
              </button>

              {status === 'success' && (
                <div
                  style={{
                    marginTop: '16px',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: 'var(--accent-emerald)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.9rem',
                  }}
                >
                  <CheckCircle size={18} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div
                  style={{
                    marginTop: '16px',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(239, 68, 68, 0.12)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#f87171',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.9rem',
                  }}
                >
                  <AlertCircle size={18} />
                  <span>{statusMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
