export type ProjectCategory = 'all' | 'web-apps' | 'apis' | 'front-end' | 'ai';

export interface Project {
  id: string;
  code: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  image?: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  stars?: number;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
  type: 'work' | 'education' | 'certification';
}

export interface LanguageSkill {
  code: string;
  name: string;
  level: string;
  percentage: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}
