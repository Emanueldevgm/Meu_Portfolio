import React from 'react';
import { Download, Printer, Mail, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedPortfolio } from '../i18n/localizedPortfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const { personalInfo, workExperience, educationExperience, languages } = getLocalizedPortfolio(language);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const isPT = language === 'pt';

    const cvPath = isPT
      ? '/Curriculum/Curriculo_Manuel_Garcia PT.pdf'
      : '/Curriculum/Curriculo_Manuel_Garcia EN.pdf';

    const downloadName = isPT
      ? 'Curriculo_Manuel_Garcia_PT.pdf'
      : 'Curriculo_Manuel_Garcia_EN.pdf';

    const link = document.createElement('a');
    link.href = encodeURI(cvPath);
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('resume.title')} maxWidth="2xl">
      <div className="space-y-6 text-slate-700 dark:text-slate-300">
        
        {/* Header Profile Summary */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {personalInfo.name}
            </h2>
            <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
              {personalInfo.role}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2">
              <span className="flex items-center gap-1">
                <MapPin size={12} /> {personalInfo.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail size={12} /> {personalInfo.email}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
            >
              <Printer size={14} />
              <span>{t('resume.print')}</span>
            </button>
            <Button
              variant="primary"
              size="sm"
              icon={<Download size={14} />}
              onClick={handleDownload}
            >
              {t('resume.download')}
            </Button>
          </div>
        </div>

        {/* Professional Summary */}
        <div>
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            {t('resume.summary')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {t('resume.summaryText')}
          </p>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-3 flex items-center gap-1.5">
            <Briefcase size={14} />
            <span>{t('resume.experience')}</span>
          </h3>
          <div className="space-y-4">
            {workExperience.map((exp) => (
              <div key={exp.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {exp.role} · <span className="text-sky-600 dark:text-sky-400">{exp.company}</span>
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                  {exp.description}
                </p>
                {exp.highlights && (
                  <ul className="list-disc list-inside text-[11px] text-slate-500 dark:text-slate-400 space-y-0.5">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div>
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-3 flex items-center gap-1.5">
            <GraduationCap size={14} />
            <span>{t('resume.education')}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {educationExperience.map((edu) => (
              <div key={edu.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {edu.role}
                </div>
                <div className="text-[11px] text-sky-600 dark:text-sky-400 font-medium">
                  {edu.company} ({edu.period})
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Matrix */}
        <div>
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            {t('resume.languages')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <span
                key={l.code}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-100 dark:border-sky-800"
              >
                {l.name}: {l.percentage}% ({l.level})
              </span>
            ))}
          </div>
        </div>

      </div>
    </Modal>
  );
};