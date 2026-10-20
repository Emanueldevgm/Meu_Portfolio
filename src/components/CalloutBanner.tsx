import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, CodeXml, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';
import { PERSONAL_INFO } from '../data/portfolioData';

export const CalloutBanner: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:border-sky-300 dark:hover:border-sky-600 transition-colors"
        >
          {/* Left: Icon & Text */}
          <div className="flex items-center gap-4 sm:gap-5 text-center md:text-left flex-col md:flex-row">
            <div className="w-14 h-14 rounded-2xl bg-sky-100/80 dark:bg-sky-950/80 border border-sky-200/80 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0 shadow-xs">
              <CodeXml size={28} />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Buscando código-fonte ou arquiteturas detalhadas?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
                Confira meus repositórios abertos, boilerplates modulares e experimentos no ecossistema open-source.
              </p>
            </div>
          </div>

          {/* Right: GitHub Button */}
          <Button
            variant="secondary"
            size="md"
            icon={<Terminal size={18} />}
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-semibold px-6 shadow-md shadow-blue-600/20"
          >
            Acessar GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
