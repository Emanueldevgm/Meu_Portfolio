import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedPortfolio } from '../i18n/localizedPortfolio';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language, t } = useLanguage();
  const { testimonials } = getLocalizedPortfolio(language);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-200/30 via-blue-200/20 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          prefix={t('testimonials.titlePrefix')}
          highlight={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
        />

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prev}
            className="absolute -left-3 sm:-left-6 md:-left-12 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-sky-500 hover:border-sky-300 dark:hover:border-sky-500 transition-all cursor-pointer"
            aria-label={t('testimonials.previous')}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Testimonial Card */}
          <div className="w-full max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-sky-500/5 relative"
              >
                {/* Blue Quotation Icon */}
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-500 border border-sky-100 dark:border-sky-900/60">
                  <Quote size={28} className="fill-sky-500/20" />
                </div>

                {/* Testimonial Text */}
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic mb-8">
                  "{current.content}"
                </p>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-sky-200 dark:border-sky-800 shadow-xs"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80';
                    }}
                  />
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {current.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-sky-600 dark:text-sky-400 font-medium">
                      {current.role} · <span className="text-slate-500 dark:text-slate-400">{current.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={next}
            className="absolute -right-3 sm:-right-6 md:-right-12 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-sky-500 hover:border-sky-300 dark:hover:border-sky-500 transition-all cursor-pointer"
            aria-label={t('testimonials.next')}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-7 bg-sky-500'
                  : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-sky-300'
              }`}
              aria-label={`${t('testimonials.item')} ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
