import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, Clock } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedPortfolio } from '../i18n/localizedPortfolio';

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const { personalInfo } = getLocalizedPortfolio(language);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-sky-200/20 dark:bg-sky-900/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-100/30 dark:bg-blue-950/20 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <SectionTitle
          prefix={t('contact.titlePrefix')}
          highlight={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        {/* Card único, centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl mx-auto"
        >
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-7 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center">
              {t('contact.info')}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-center">
              {t('contact.description')}
            </p>

            <div className="space-y-4">
              {/* Email item with 1-click copy */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase text-slate-400 dark:text-slate-500 block">
                      {t('contact.email')}
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate block">
                      {personalInfo.email}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 shrink-0 text-slate-400 hover:text-sky-500 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors"
                  title={language === 'pt' ? 'Copiar e-mail' : 'Copy email'}
                  aria-label={language === 'pt' ? 'Copiar e-mail' : 'Copy email'}
                >
                  {copiedEmail ? (
                    <Check size={16} className="text-emerald-500" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Location item */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono uppercase text-slate-400 dark:text-slate-500 block">
                    {t('contact.location')}
                  </span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Response SLA */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Clock size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono uppercase text-slate-400 dark:text-slate-500 block">
                    {t('contact.response')}
                  </span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {t('contact.responseTime')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};