import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { SectionTitle } from './ui/SectionTitle';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedPortfolio } from '../i18n/localizedPortfolio';

export const Languages: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [animatedPercentages, setAnimatedPercentages] = useState<Record<string, number>>({});
  const { language, t } = useLanguage();
  const { languages } = getLocalizedPortfolio(language);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedPercentages(Object.fromEntries(
          languages.map((item) => [item.code, item.percentage])
        ));
      }, 150);
      return () => clearTimeout(timer);
    } else {
      setAnimatedPercentages({});
    }
  }, [isInView]);

  return (
    <section id="languages" className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-sky-200/25 dark:bg-sky-900/15 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Floating small bokeh circles */}
      <div className="absolute top-12 left-1/3 w-3 h-3 rounded-full bg-sky-300/40 dark:bg-sky-700/30 animate-pulse" />
      <div className="absolute bottom-16 right-1/3 w-4 h-4 rounded-full bg-blue-300/30 dark:bg-blue-600/20 animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          prefix={t('languages.titlePrefix')}
          highlight={t('languages.title')}
          subtitle={t('languages.subtitle')}
        />

        {/* 4 Circular Progress Bars */}
        <motion.div
          onViewportEnter={() => setIsInView(true)}
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-4xl mx-auto items-center"
        >
          {languages.map((lang, index) => {
            const currentPercent = animatedPercentages[lang.code] || 0;

            return (
              <motion.div
                key={lang.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center group cursor-default"
              >
                {/* Circular Container with hover lift */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 p-2 rounded-full bg-white dark:bg-slate-800 shadow-lg shadow-sky-500/10 border border-slate-100 dark:border-slate-700/70 group-hover:scale-105 group-hover:shadow-sky-500/20 transition-all duration-300">
                  
                  {/* React Circular Progressbar */}
                  <CircularProgressbar
                    value={currentPercent}
                    strokeWidth={7}
                    styles={buildStyles({
                      pathColor: '#0EA5E9',
                      trailColor: 'currentColor',
                      strokeLinecap: 'round',
                      pathTransitionDuration: 1.4,
                    })}
                    className="text-sky-100 dark:text-slate-700"
                  />

                  {/* Centered Content: Country code & percentage */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                      {lang.code}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 font-mono mt-0.5">
                      {currentPercent}%
                    </span>
                  </div>
                </div>

                {/* Language Name & Proficiency Description */}
                <h4 className="mt-4 text-base font-bold text-slate-800 dark:text-slate-200 tracking-tight">
                  {lang.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5 text-center">
                  {lang.level}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
