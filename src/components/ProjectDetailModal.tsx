import React from 'react';
import { ExternalLink, Github, Star, Zap, CheckCircle2 } from 'lucide-react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { Project } from '../types/portfolio';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedPortfolio } from '../i18n/localizedPortfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();
  const { projects } = getLocalizedPortfolio(language);
  if (!project) return null;
  const displayProject = projects.find((item) => item.id === project.id) ?? project;
  const categoryLabels = {
    all: t('projects.all'),
    'web-apps': t('projects.web'),
    apis: t('projects.apis'),
    'front-end': t('projects.frontend'),
    ai: t('projects.ai'),
  };

  return (
    <Modal isOpen={!!project} onClose={onClose} title={displayProject.title} maxWidth="2xl">
      <div className="space-y-6">
        
        {/* Cover Image Preview */}
        {displayProject.image && (
          <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
            <img
              src={displayProject.image}
              alt={displayProject.title}
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Code & Title */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded-md">
              {displayProject.code}
            </span>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase">
              {categoryLabels[displayProject.category]}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {displayProject.title}
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {displayProject.longDescription}
          </p>
        </div>

        {/* Performance Metrics */}
        {displayProject.metrics && displayProject.metrics.length > 0 && (
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              {t('project.metrics')}
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {displayProject.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center">
                  <div className="text-lg font-bold font-mono text-sky-500 dark:text-sky-400">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {displayProject.tags.length > 0 && (
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
              {t('project.technologies')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {displayProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-100 dark:border-sky-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          {displayProject.demoUrl && (
            <Button
              variant="primary"
              size="md"
              icon={<ExternalLink size={16} />}
              href={displayProject.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none font-semibold"
            >
              {t('project.demo')}
            </Button>
          )}
          {displayProject.githubUrl && (
            <Button
              variant="outline"
              size="md"
              icon={<Github size={16} />}
              href={displayProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none font-semibold"
            >
              {t('project.github')}
            </Button>
          )}
        </div>

      </div>
    </Modal>
  );
};
