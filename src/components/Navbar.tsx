'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="container nav-container">
        <a href="#hero" className="brand-logo" aria-label="Accueil Segnon Israël Goudayi">
          <span className="logo-badge">SIG</span>
          <span className="brand-name">
            <span className="brand-name-full">Segnon Israël GOUDAYI</span>
            <span className="brand-name-compact">S. I. GOUDAYI</span>
          </span>
        </a>

        {/* Navigation Bureau */}
        <nav aria-label="Menu principal">
          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} id="navLinks">
            <li>
              <a href="#hero" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>
                Accueil
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Vision & À Propos
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Compétences
              </a>
            </li>
            <li>
              <a href="#timeline" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Parcours
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Projets & Recherche
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Actions rapides */}
        <div className="nav-actions">
          <button
            id="themeToggleBtn"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Basculer entre mode sombre et clair"
            title="Mode Sombre / Clair"
          >
            {theme === 'dark' ? <Moon size={19} /> : <Sun size={19} />}
          </button>

          <button
            id="printCvBtn"
            className="btn btn-primary btn-sm"
            onClick={handlePrint}
            title="Imprimer ou enregistrer le CV en PDF"
          >
            <Download size={16} />
            <span className="btn-text">CV PDF</span>
          </button>

          <button
            id="mobileMenuBtn"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};
