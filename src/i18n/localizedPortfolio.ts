import { ExperienceItem, LanguageSkill, Project, Testimonial } from '../types/portfolio';
import { PERSONAL_INFO, WORK_EXPERIENCE, EDUCATION_EXPERIENCE, LANGUAGES, PROJECTS, TESTIMONIALS } from '../data/portfolioData';
import { Language } from './LanguageContext';

const englishWork: Record<string, Partial<ExperienceItem>> = {
  'exp-1': {
    role: 'Full-Stack Developer',
    company: 'Personal and academic projects',
    period: '2023 — Present',
    location: 'Angola · Remote',
    description: 'Building complete web systems with PHP, Node.js, Express, and relational databases, including dashboards, REST APIs, and integrations for real-world workflows.',
    highlights: [
      'Building complete web applications with backend, database, and responsive interfaces',
      'Creating dashboards with reports and data visualizations',
      'Integrating APIs, file uploads, and validations into business processes',
    ],
  },
  'exp-2': {
    role: 'Systems Architecture & Backend',
    company: 'Software development projects',
    period: '2022 — Present',
    location: 'Negage, Angola',
    description: 'Structuring applications with modular organization, data modeling, and optimized SQL queries to improve scalability and maintainability.',
    highlights: [
      'Modeling and optimizing PostgreSQL and MySQL databases',
      'Automating tasks with Node.js and Cron',
      'Writing advanced queries with JOINs, filters, and aggregations',
    ],
  },
  'exp-3': {
    role: 'Freelancer & Technical Initiatives',
    company: 'Independent Development',
    period: '2021 — Present',
    location: 'Angola',
    description: 'Building tailored solutions for clients and personal projects, focusing on backend development, application customization, and technical problem-solving.',
    highlights: [
      'Helping build a developer community in Uíge Province',
      'Exploring AI and automation with intelligent agents and LLM integrations',
      'Developing practical projects focused on real-world problems',
    ],
  },
};

const englishEducation: Record<string, Partial<ExperienceItem>> = {
  'edu-1': {
    role: 'Computer Engineering',
    period: 'In progress · 3rd year',
    location: 'Undergraduate degree',
    description: 'Studies focused on software development, databases, computer networks, systems engineering, and practical projects applied to real-world contexts.',
    highlights: ['Backend and frontend development', 'Academic projects focused on practical solutions'],
  },
  'cert-1': {
    role: 'High School Technician in Physical and Biological Sciences',
    company: 'São Francisco de Assis School (Negage)',
    period: '2019 — 2022',
    location: 'Secondary education',
    description: 'A foundation that developed analytical skills, problem-solving, communication, and structured thinking.',
    highlights: ['Strong foundation in science and logic', 'Developed analytical and reasoning skills'],
  },
  'cert-2': {
    role: 'Additional Courses',
    company: 'Training center and online platforms',
    period: '2020 — 2024',
    location: 'Courses and practical training',
    description: 'Training in computer applications, web development, HTML/CSS, backend, frontend, AI, and assertive communication.',
    highlights: ['HTML/CSS · Backend · Frontend · AI · Project Management'],
  },
};

const englishProjects: Record<string, Partial<Project>> = {
  'proj-1': {
    title: 'KudiBook',
    description: 'A platform that supports businesses with financial management, a dashboard, and automatic envelopes.',
    longDescription: 'KudiBook presents financial management tools for businesses, including a dashboard and automatic envelopes. Visit the project to explore its available plans and features.',
  },
  'proj-2': {
    title: 'Ophthalmology — Uíge General Hospital',
    description: 'An ophthalmology service page with information and access to appointment scheduling.',
    longDescription: 'A page dedicated to the ophthalmology service at Uíge General Hospital. It provides information for patients and lets them start booking an appointment.',
  },
  'proj-3': {
    title: 'MINSA Angola',
    description: 'A health-crisis response project that routes resources with support from visual intelligence.',
    longDescription: 'A digital proposal to support responses to health crises. The project describes rapid situation detection and routing logistics, ambulances, and vaccines with support from visual intelligence.',
  },
  'proj-4': {
    title: 'GHU Restaurant',
    description: 'Online presence for GHU Restaurant.',
    longDescription: 'Website for GHU Restaurant. Visit the page to see its presentation and published content.',
  },
  'proj-5': {
    title: 'Focos Optics Negage',
    description: 'A local optical store website with information about its services and customer care.',
    longDescription: 'Website for Óptica Focos in Negage. Visit the page to learn about its services, customer care information, and published content.',
  },
  'proj-6': {
    title: 'Infoprest — Trade & Services',
    description: 'A trade and services website focused on optics and healthcare.',
    longDescription: 'Website for Infoprest, a trade and services company focused on optics and healthcare. Visit the page to learn about the company and its available services.',
  },
};

const englishTestimonials: Record<string, Partial<Testimonial>> = {
  'test-1': {
    name: 'Study colleague',
    role: 'Developer in training',
    company: 'Tech community',
    content: 'Manuel is disciplined, curious, and persistent. He always looks for practical ways to apply what he learns, with attention to code quality and the real impact of a solution.',
  },
  'test-2': {
    name: 'Project partner',
    role: 'Academic collaborator',
    company: 'Practical projects',
    content: 'He combines creativity, logic, and a focus on solving real problems. His commitment to organization, documentation, and good practices makes the work more robust.',
  },
  'test-3': {
    name: 'Technical mentor',
    role: 'Learning support',
    company: 'Technology community',
    content: 'Manuel shows a continuous desire to learn and grow. His practical approach, attention to detail, and communication skills are great strengths.',
  },
};

const englishLanguages: LanguageSkill[] = [
  { code: 'PT', name: 'Portuguese', level: 'Fluent', percentage: 100 },
  { code: 'GB', name: 'English', level: 'Intermediate (technical reading and documentation)', percentage: 60 },
  { code: 'ES', name: 'Spanish', level: 'Basic', percentage: 30 },
];

export const getLocalizedPortfolio = (language: Language) => {
  if (language === 'pt') {
    return {
      personalInfo: PERSONAL_INFO,
      workExperience: WORK_EXPERIENCE,
      educationExperience: EDUCATION_EXPERIENCE,
      languages: LANGUAGES,
      projects: PROJECTS,
      testimonials: TESTIMONIALS,
    };
  }

  return {
    personalInfo: {
      ...PERSONAL_INFO,
      role: 'Full-Stack Developer | Computer Engineering Student',
      headline: "Hi, I'm Manuel Garcia",
      subheadline: 'Full-stack developer focused on robust web systems, REST APIs, databases, automation, and AI integrations for real-world solutions.',
      bio: 'I am a full-stack developer with hands-on experience in PHP, Node.js, PostgreSQL, JavaScript/TypeScript, and Python. I build complete web applications, dashboards, API integrations, process automation, and data-driven solutions. I am currently studying Computer Engineering and continuing to grow in software architecture, AI, and distributed systems.',
      location: 'Negage, Angola · Available for remote projects and freelance work',
      status: 'Available for projects, freelance work, and technical collaboration',
    },
    workExperience: WORK_EXPERIENCE.map((item) => ({ ...item, ...englishWork[item.id] })),
    educationExperience: EDUCATION_EXPERIENCE.map((item) => ({ ...item, ...englishEducation[item.id] })),
    languages: englishLanguages,
    projects: PROJECTS.map((item) => ({ ...item, ...englishProjects[item.id] })),
    testimonials: TESTIMONIALS.map((item) => ({ ...item, ...englishTestimonials[item.id] })),
  };
};
