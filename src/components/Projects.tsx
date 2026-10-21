import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { Project, ProjectCategory } from '../types/portfolio';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedPortfolio } from '../i18n/localizedPortfolio';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [currentPage, setCurrentPage] = useState(0);
  const { language, t } = useLanguage();
  const { projects } = getLocalizedPortfolio(language);
  const itemsPerPage = 6;

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: t('projects.all') },
    { id: 'web-apps', label: t('projects.web') },
    { id: 'apis', label: t('projects.apis') },
    { id: 'front-end', label: t('projects.frontend') },
    { id: 'ai', label: t('projects.ai') },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const displayedProjects = filteredProjects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleCategoryChange = (cat: ProjectCategory) => {
    setActiveCategory(cat);
    setCurrentPage(0);
  };

  return (
    <section id="work" className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-100/30 dark:bg-sky-950/20 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-3">
          <div>
            <SectionTitle
              prefix={t('projects.titlePrefix')}
              highlight={t('projects.title')}
              subtitle={t('projects.subtitle')}
              align="left"
              className="mb-0"
            />
          </div>

          {/* Carousel / Navigation arrows */}
          {totalPages > 1 && (
            <div className="flex items-center gap-2 mt-4 md:mt-0 self-end">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                disabled={currentPage === 0}
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-500 hover:border-sky-300 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                aria-label={t('projects.previous')}
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 px-1">
                {t('projects.page')} {currentPage + 1} / {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage === totalPages - 1}
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-500 hover:border-sky-300 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                aria-label={t('projects.next')}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-start gap-2 mb-10">
          {categories.map((cat) => {
            const count = cat.id === 'all'
              ? projects.length
              : projects.filter((p) => p.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25 border border-sky-500'
                    : 'bg-white hover:bg-sky-50/50 text-slate-600 hover:text-sky-600 border border-slate-200 hover:border-sky-300 shadow-xs dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-sky-400'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] font-mono opacity-80`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* 3-Column Responsive Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${currentPage}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => onSelectProject(project)}
                className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/15 hover:border-sky-300 dark:hover:border-sky-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Glow blob on hover */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-sky-500/5 dark:bg-sky-500/15 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Project Image Preview Frame */}
                  <div className="relative w-full h-44 mb-5 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-dashed border-slate-300 dark:border-slate-700">
                    {project.image && (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <span className="text-xs font-semibold text-white flex items-center gap-1">
                            <Eye size={14} /> {t('projects.details')}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Top Metadata Row */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
                      {project.code}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sky-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-sky-500 group-hover:text-white shadow-xs">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                {project.tags.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg px-2.5 py-1 text-[11px] font-mono font-medium bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-100 dark:border-sky-900/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Carousel Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentPage(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentPage === idx
                    ? 'w-8 bg-sky-500'
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-sky-300'
                }`}
                aria-label={`${t('projects.page')} ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
