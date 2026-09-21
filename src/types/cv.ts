/**
 * Types TypeScript stricts pour le CV de Segnon Israël GOUDAYI
 * « Médecine × IA × Ingénierie × Innovation »
 */

export interface PersonalInfo {
  fullName: string;
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  statusBadge: string;
  location: string;
  email: string;
  phone: string;
  phoneClean: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  website: string;
  philosophy: string;
  bio: string;
  stats: StatItem[];
}

export interface StatItem {
  number: string;
  label: string;
}

export interface SkillItem {
  name: string;
  level: number;
  tag: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  items: SkillItem[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  details: string;
  badges: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export type ProjectCategory = 'health_tech' | 'tools' | 'business';
export type ProjectIconType = 'anatomy' | 'dna' | 'notebook' | 'trophy' | 'sparkles' | 'truck';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  iconType: ProjectIconType;
  featured: boolean;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatarLetter: string;
}

export interface CvData {
  personal: PersonalInfo;
  skills: SkillsData;
  experiences: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  testimonials: TestimonialItem[];
}
