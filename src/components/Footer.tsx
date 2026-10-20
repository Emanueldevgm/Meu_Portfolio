import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/60 dark:border-slate-800/80">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Portfolio<span className="text-sky-500">.</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              React Specialist & Full Stack Developer
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <Twitter size={16} />
              <span>Twitter / X</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-xs font-mono text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors shadow-xs"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom row: Credits & copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <span>Feito com ☕ por <strong className="text-slate-800 dark:text-slate-200 font-semibold">{PERSONAL_INFO.name}</strong></span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span className="text-slate-400 dark:text-slate-600">v2.4.0</span>
            <span>© {new Date().getFullYear()} Todos os direitos reservados.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
