import { Project, ExperienceItem, LanguageSkill, Testimonial } from '../types/portfolio';

interface Technology {
  name: string;
  category: string;
  color: string;
  image?: string;
  mobile?: boolean;
}

export const PERSONAL_INFO = {
  name: 'Manuel Garcia Muanza',
  role: 'Desenvolvedor Fullstack | Estudante de Engenharia Informática',
  headline: "Olá, sou Manuel Garcia",
  subheadline: 'Desenvolvedor Fullstack com foco em sistemas web robustos, APIs REST, bancos de dados, automação e integração de IA para soluções reais.',
  bio: 'Sou um desenvolvedor Fullstack com experiência prática em PHP, Node.js, PostgreSQL, JavaScript/TypeScript e Python. Desenvolvo aplicações web completas, dashboards, integrações de APIs, automação de processos e soluções orientadas a dados. Atualmente sou estudante de Engenharia Informática e continuo a evoluir em arquitetura de software, IA e sistemas distribuídos.',
  location: 'Uíge, Negage, Angola · Disponível para projetos remotos e freelance',
  status: 'Disponível para projetos, trabalho freelance e colaboração técnica',
  email: 'eminenciaemanuel4@gmail.com',
  github: 'https://github.com/Emanueldevgm',
  linkedin: 'https://www.linkedin.com',
  twitter: 'https://x.com',
  telegram: 'https://t.me',
};

export const TECH_STACK: Technology[] = [
  { name: 'Next.js', category: 'Framework', color: '#000000', image: '372874_brand_nextjs_v5f52099efc.png' },
  { name: 'Bootstrap', category: 'Styling', color: '#7952B3', image: 'bootstrap_plain_logo_icon_146619.png', mobile: true },
  { name: 'C', category: 'Language', color: '#A8B9CC', image: 'c_icon_132529.png' },
  { name: 'C++', category: 'Language', color: '#00599C', image: 'c_original_logo_icon_146611.png' },
  { name: 'DeepSeek', category: 'IA', color: '#1D70F5', image: 'deep_seek_logo_icon_267565.png' },
  { name: 'Electron', category: 'Framework', color: '#47848F', image: 'electron_browser_logo_icon_152997.png' },
  { name: 'CSS', category: 'Styling', color: '#1572B6', image: 'file_type_css_icon_130661.png', mobile: true },
  { name: 'Docker', category: 'DevOps', color: '#2496ED', image: 'file_type_docker_icon_130643.png' },
  { name: 'Git', category: 'DevOps', color: '#F05032', image: 'file_type_git_icon_130581.png' },
  { name: 'HTML', category: 'Frontend', color: '#E44D26', image: 'file_type_html_icon_130541.png' },
  { name: 'JavaScript', category: 'Language', color: '#F7DF1E', image: 'file_type_js_official_icon_130509.png' },
  { name: 'MongoDB', category: 'Database', color: '#47A248', image: 'file_type_mongo_icon_130383.png' },
  { name: 'NestJS', category: 'Framework', color: '#E0234E', image: 'file_type_nest_middleware_js_icon_130363.png' },
  { name: 'Nginx', category: 'DevOps', color: '#009639', image: 'file_type_nginx_icon_130305.png' },
  { name: 'Node.js', category: 'Backend', color: '#339933', image: 'file_type_node_icon_130301.png' },
  { name: 'Python', category: 'Backend', color: '#3776AB', image: 'file_type_python_icon_130221.png' },
  { name: 'Tailwind CSS', category: 'Styling', color: '#06B6D4', image: 'file_type_tailwind_icon_130128.png', mobile: true },
  { name: 'Visual Studio Code', category: 'Design', color: '#007ACC', image: 'file_type_vscode_icon_130084.png' },
  { name: 'GitHub', category: 'DevOps', color: '#181717', image: 'github_git_icon_145985.png' },
  { name: 'Java', category: 'Language', color: '#007396', image: 'java_original_logo_icon_146458.png' },
  { name: 'MySQL', category: 'Database', color: '#4479A1', image: 'mysql_original_wordmark_logo_icon_146417.png' },
  { name: 'PHP', category: 'Backend', color: '#777BB4', image: 'php_icon_130857.png' },
  { name: 'PostgreSQL', category: 'Database', color: '#4169E1', image: 'postgresql_plain_logo_icon_146389.png', mobile: true },
  { name: 'React.js', category: 'Frontend', color: '#61DAFB', image: 'reactjs_logo_icon_168875.png' },
  { name: 'Tauri', category: 'Framework', color: '#FFC131', image: 'tauri_logo_icon_249441.png' },
  { name: 'TypeScript', category: 'Language', color: '#3178C6', image: 'typescript_original_logo_icon_146317.png' },
  { name: 'React Native', category: 'Mobile', color: '#61DAFB', image: 'reactjs_logo_icon_168875.png' },
  { name: 'Expo', category: 'Mobile', color: '#000020', image: 'expo_icon_132404.png' },
  { name: 'SQLite', category: 'Mobile', color: '#003B57', image: 'brand_sqllite_icon_157793.png' },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Desenvolvedor Fullstack',
    company: 'Projetos próprios e acadêmicos',
    period: '2023 — Presente',
    location: 'Angola · Remoto',
    description: 'Desenvolvimento de sistemas web completos com PHP, Node.js, Express e bancos de dados relacionais, incluindo dashboards, APIs REST e integrações com fluxos de negócio reais.',
    highlights: [
      'Criação de aplicações web completas com backend, banco de dados e interface responsiva',
      'Implementação de dashboards com relatórios e visualização de dados em tempo real',
      'Integração de APIs, upload de ficheiros e validações em processos de negócios',
    ],
    type: 'work',
  },
  {
    id: 'exp-2',
    role: 'Arquitetura de Sistemas e Backend',
    company: 'Projetos de desenvolvimento',
    period: '2022 — Presente',
    location: 'Uíge, Negage, Angola',
    description: 'Estruturação de aplicações com boas práticas de organização modular, modelização de dados e otimização de consultas SQL para melhorar a escalabilidade e a manutenção.',
    highlights: [
      'Modelagem e otimização de bases de dados em PostgreSQL e MySQL',
      'Automatização de tarefas com Node.js e Cron',
      'Escrita de queries avançadas com JOINs, filtros e agregações',
    ],
    type: 'work',
  },
  {
    id: 'exp-3',
    role: 'Freelancer & Iniciativas Técnicas',
    company: 'Desenvolvimento Independente',
    period: '2021 — Presente',
    location: 'Angola',
    description: 'Implementação de soluções sob medida para clientes e projetos pessoais, com foco em desenvolvimento backend, customização de aplicações e resolução de problemas técnicos.',
    highlights: [
      'Participação na estruturação de uma comunidade de desenvolvedores na província do Uíge',
      'Exploração de IA e automação com agentes inteligentes e integração de LLMs',
      'Desenvolvimento de projetos práticos com foco em problemas reais da comunidade',
    ],
    type: 'work',
  },
];

export const EDUCATION_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'edu-1',
    role: 'Engenharia Informática',
    company: 'Instituto Politécnico da Universidade Kimpa Vita',
    period: 'Em curso · 3º ano',
    location: 'Bacharelado',
    description: 'Formação focada em desenvolvimento de software, bases de dados, redes de computadores, engenharia de sistemas e trabalho em projetos práticos com aplicação em contextos reais.',
    highlights: ['Desenvolvimento backend e frontend', 'Trabalhos acadêmicos com foco em soluções reais'],
    type: 'education',
  },
  {
    id: 'cert-1',
    role: 'Técnico Médio em Ciências Físicas e Biológicas',
    company: 'Complexo Escolar São Francisco de Assis (Negage)',
    period: '2019 — 2022',
    location: 'Ensino Médio',
    description: 'Base formativa com desenvolvimento de competências analíticas, resolução de problemas, comunicação e estruturação de conhecimento.',
    highlights: ['Aprendizagem sólida em ciências e lógica', 'Fortalecimento da capacidade de análise e raciocínio'],
    type: 'education',
  },
  {
    id: 'cert-2',
    role: 'Cursos Complementares',
    company: 'Centro de Formação e plataformas online',
    period: '2020 — 2024',
    location: 'Certificações e formação prática',
    description: 'Formação em informática aplicada, desenvolvimento web, HTML/CSS, backend, frontend, IA e comunicação assertiva.',
    highlights: ['HTML/CSS · Backend · Frontend · IA · Gestão de projetos'],
    type: 'certification',
  },
];

export const LANGUAGES: LanguageSkill[] = [
  {
    code: 'PT',
    name: 'Português',
    level: 'Fluente',
    percentage: 100,
  },
  {
    code: 'GB',
    name: 'Inglês',
    level: 'Intermédio (leitura técnica e documentação)',
    percentage: 60,
  },
  {
    code: 'ES',
    name: 'Espanhol',
    level: 'Básico',
    percentage: 30,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    code: 'WEB.01',
    title: 'KudiBook',
    category: 'web-apps',
    description: 'Plataforma para apoiar negócios na gestão financeira, com dashboard e envelopes automáticos.',
    longDescription: 'O KudiBook apresenta ferramentas de gestão financeira para negócios, incluindo um dashboard e envelopes automáticos. Visite o projeto para conhecer os planos e funcionalidades disponíveis.',
    tags: [],
    demoUrl: 'https://kudibook-ao.vercel.app/',
    featured: true,
  },
  {
    id: 'proj-2',
    code: 'WEB.02',
    title: 'Oftalmologia — Hospital Geral do Uíge',
    category: 'web-apps',
    description: 'Página de atendimento oftalmológico com informações e acesso ao agendamento de consultas.',
    longDescription: 'Uma página dedicada ao atendimento oftalmológico do Hospital Geral do Uíge. Apresenta informações para pacientes e permite iniciar o agendamento de uma consulta.',
    tags: [],
    demoUrl: 'https://oftalmologia-seven.vercel.app/',
  },
  {
    id: 'proj-3',
    code: 'WEB.03',
    title: 'MINSA Angola',
    category: 'web-apps',
    description: 'Projeto de resposta a crises de saúde com encaminhamento de recursos apoiado por inteligência visual.',
    longDescription: 'Uma proposta digital para apoiar a resposta a crises de saúde. O projeto descreve a identificação rápida de situações e o encaminhamento de logística, ambulâncias e vacinas com apoio de inteligência visual.',
    tags: [],
    demoUrl: 'https://minsa-angola.vercel.app/',
  },
  {
    id: 'proj-4',
    code: 'WEB.04',
    title: 'Restaurante GHU',
    category: 'web-apps',
    description: 'Presença online do Restaurante GHU.',
    longDescription: 'Website do Restaurante GHU. Aceda à página para conhecer a apresentação e os conteúdos publicados pelo restaurante.',
    tags: [],
    demoUrl: 'https://restaurante-ghu.vercel.app/',
  },
  {
    id: 'proj-5',
    code: 'WEB.05',
    title: 'Óptica Focos Negage',
    category: 'web-apps',
    description: 'Website de uma óptica local, com informações sobre os serviços e atendimento.',
    longDescription: 'Página da Óptica Focos em Negage. Consulte o website para conhecer os serviços, informações de atendimento e conteúdos publicados.',
    tags: [],
    demoUrl: 'https://opticafocos-negage.vercel.app/',
  },
  {
    id: 'proj-6',
    code: 'WEB.06',
    title: 'Infoprest — Comércio & Serviços',
    category: 'web-apps',
    description: 'Website de comércio e serviços com foco em óptica e saúde.',
    longDescription: 'Página da Infoprest, uma empresa de comércio e serviços com foco em óptica e saúde. Consulte o website para conhecer a sua apresentação e os serviços disponíveis.',
    tags: [],
    demoUrl: 'https://infoprest-negage.vercel.app/',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Colega de estudo',
    role: 'Desenvolvedor em formação',
    company: 'Comunidade técnica',
    content: 'Manuel é disciplinado, curioso e muito persistente. Sempre busca aplicar os conhecimentos de forma prática, com atenção à qualidade do código e ao impacto real da solução.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'test-2',
    name: 'Parceiro de projeto',
    role: 'Colaborador acadêmico',
    company: 'Projetos práticos',
    content: 'Ele combina criatividade, lógica e foco em resolver problemas reais. O compromisso com a organização, documentação e boas práticas torna o trabalho muito mais robusto.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'test-3',
    name: 'Mentor técnico',
    role: 'Apoio em aprendizagem',
    company: 'Comunidade de tecnologia',
    content: 'Manuel demonstra vontade constante de aprender e evoluir. Sua abordagem prática, com atenção aos detalhes e boa comunicação, é um grande diferencial.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
];
