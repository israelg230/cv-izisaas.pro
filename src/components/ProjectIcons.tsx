import React from 'react';
import { ProjectIconType } from '../types/cv';
import { Activity, Dna, BookOpen, Trophy, Sparkles, Truck } from 'lucide-react';

interface ProjectIconProps {
  iconType: ProjectIconType;
  size?: number;
  className?: string;
}

export const ProjectIcon: React.FC<ProjectIconProps> = ({ iconType, size = 30, className = "" }) => {
  switch (iconType) {
    case 'anatomy':
      return <Activity size={size} className={className} />;
    case 'dna':
      return <Dna size={size} className={className} />;
    case 'notebook':
      return <BookOpen size={size} className={className} />;
    case 'trophy':
      return <Trophy size={size} className={className} />;
    case 'sparkles':
      return <Sparkles size={size} className={className} />;
    case 'truck':
    default:
      return <Truck size={size} className={className} />;
  }
};
