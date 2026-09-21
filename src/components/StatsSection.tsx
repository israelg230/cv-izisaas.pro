import React from 'react';
import { StatItem } from '../types/cv';

interface StatsSectionProps {
  stats: StatItem[];
}

export const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <div className="stats-grid" id="statsGrid">
      {stats.map((s, index) => (
        <div className="stat-box" key={index}>
          <div className="stat-number">{s.number}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
};
