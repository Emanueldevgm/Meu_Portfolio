import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { Card } from './ui/Card';
import { IMAGES } from '../assets/images';
import { WORK_EXPERIENCE, EDUCATION_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'work' | 'education'>('all');

  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Background with subtle blue dot pattern (polka dots) */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(#0EA5E9 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-sky-300/10 via-blue-400/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          prefix="My"
          highlight="Experience"
          subtitle="My professional journey and educational background in modern web engineering"
        />

        {/* Mobile Filter Tabs (Visible on small screens) */}
        <div className="flex md:hidden justify-center items-center gap-2 mb-8 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-xs mx-auto shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'all'
                ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Todos
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('work')}
            className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'work'
                ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Carreira
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('education')}
            className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'education'
                ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Educação
          </button>
        </div>

        {/* 3-Column Desktop Grid / Stacked Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Work Experience Cards */}
          <div
            className={`md:col-span-4 space-y-5 ${
              activeTab === 'education' ? 'hidden md:block' : 'block'
            }`}
          >
            <div className="hidden md:flex items-center gap-2 mb-2 pb-2 border-b border-slate-100 dark:border-slate-800">
              <Briefcase size={18} className="text-sky-500" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono">
                Trajetória Profissional
              </h3>
            </div>

            {WORK_EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="hover:border-sky-300 dark:hover:border-sky-500/50">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-medium text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded-md">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h4>
                  <div className="text-xs font-medium text-sky-600 dark:text-sky-400 mb-2">
                    {exp.company}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                      <div className="flex items-start gap-1.5">
                        <ChevronRight size={14} className="text-sky-500 shrink-0 mt-0.5" />
                        <span>{exp.highlights[0]}</span>
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Developer Persona Illustration with Badge */}
          <div className="md:col-span-4 flex flex-col items-center justify-center my-4 md:my-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col items-center"
            >
              {/* Soft background blue aura */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-b from-sky-200/50 via-blue-100/30 to-transparent dark:from-sky-900/40 dark:via-blue-950/20 blur-2xl absolute -top-4 pointer-events-none" />

              {/* Character Avatar Container with Floating Motion */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10 w-52 h-52 sm:w-64 sm:h-64 rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-white/90 to-sky-50/80 dark:from-slate-800 dark:to-slate-900 border border-sky-200/70 dark:border-slate-700 shadow-xl shadow-sky-500/10"
              >
                <img
                  src={IMAGES.avatarExperience}
                  alt="Lucas Silva - Experiência"
                  className="w-full h-full object-cover object-top rounded-2xl transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </motion.div>

              {/* "5+ Years Journey" Pill Badge under the illustration */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-20 -mt-5 bg-white dark:bg-slate-800 px-5 py-1.5 rounded-full shadow-lg shadow-sky-500/20 border border-sky-300 dark:border-sky-600 text-xs font-mono font-bold text-sky-600 dark:text-sky-300 flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
                <span>5+ Years Journey</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Education & Certification Cards */}
          <div
            className={`md:col-span-4 space-y-5 ${
              activeTab === 'work' ? 'hidden md:block' : 'block'
            }`}
          >
            <div className="hidden md:flex items-center gap-2 mb-2 pb-2 border-b border-slate-100 dark:border-slate-800">
              <GraduationCap size={18} className="text-sky-500" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono">
                Educação & Certificados
              </h3>
            </div>

            {EDUCATION_EXPERIENCE.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="hover:border-sky-300 dark:hover:border-sky-500/50">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {edu.role}
                  </h4>
                  <div className="text-xs font-medium text-sky-600 dark:text-sky-400 mb-2">
                    {edu.company}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    {edu.description}
                  </p>
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                      <div className="flex items-start gap-1.5">
                        <Award size={14} className="text-sky-500 shrink-0 mt-0.5" />
                        <span>{edu.highlights[0]}</span>
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
