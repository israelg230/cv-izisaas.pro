import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Segnon Israël GOUDAYI | Étudiant en Médecine & Futur Médecin-Ingénieur',
  description: 'CV en ligne de Segnon Israël GOUDAYI — Médecine × IA × Ingénierie × Innovation. Développeur Python Pro & Next.js 14, créateur d’Anatomia et chercheur en MedTech.',
  keywords: [
    'Segnon Israël GOUDAYI',
    'Médecin-Ingénieur',
    'Médecine Bénin',
    'Anatomia',
    'IA Médicale',
    'Drépanocytose',
    'Python',
    'Next.js',
    'TypeScript',
    'FastAPI',
    'Neurochirurgie'
  ],
  authors: [{ name: 'Segnon Israël GOUDAYI', url: 'https://cv-izisaas.pro' }],
  creator: 'Segnon Israël GOUDAYI',
  openGraph: {
    type: 'website',
    url: 'https://cv-izisaas.pro',
    title: 'Segnon Israël GOUDAYI | Étudiant en Médecine & Futur Médecin-Ingénieur',
    description: 'Construire à l’intersection de la médecine, de l’intelligence artificielle et de l’ingénierie logicielle.',
    siteName: 'CV Segnon Israël GOUDAYI',
  },
  twitter: {
    card: 'summary',
    title: 'Segnon Israël GOUDAYI | CV en Ligne',
    description: 'Médecin en formation, futur médecin-ingénieur, passionné par l’IA médicale et l’innovation en santé.',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700;800&family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Arrière-plan Lumineux & Effets Ambient */}
        <div className="ambient-glow" aria-hidden="true">
          <div className="glow-orb-1"></div>
          <div className="glow-orb-2"></div>
          <div className="glow-orb-3"></div>
        </div>
        <div className="bg-grid-overlay" aria-hidden="true"></div>

        {children}
      </body>
    </html>
  );
}
