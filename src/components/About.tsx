import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from './ui/Button';
import { SectionTitle } from './ui/SectionTitle';
import { IMAGES } from '../assets/images';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';

interface AboutProps {
  onHireMeClick?: () => void;
}

export const About: React.FC<AboutProps> = ({ onHireMeClick }) => {
  const triggerConfettiAndScroll = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0EA5E9', '#38BDF8', '#2563EB', '#60A5FA'],
    });

    if (onHireMeClick) {
      onHireMeClick();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const keyStrengths = [
    'Arquitetura escalável com Next.js & React',
    'Componentes acessíveis com Tailwind & Motion',
    'APIs resilientes em Node.js & TypeScript',
    'Otimização extrema de Core Web Vitals',
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sky-200/20 dark:bg-sky-900/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-100/30 dark:bg-blue-950/20 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Avatar within Dotted / Dashed Blue Circular Rings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px]">
              
              {/* Outer decorative dashed ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-400/70 dark:border-sky-500/50 animate-spin-slow pointer-events-none" />
              
              {/* Secondary subtle concentric ring */}
              <div className="absolute -inset-4 rounded-full border border-sky-200/50 dark:border-sky-800/40 pointer-events-none" />
              
              {/* Floating ambient dots */}
              <div className="absolute -top-3 left-1/4 w-3.5 h-3.5 rounded-full bg-sky-400 shadow-md shadow-sky-400/50 animate-float" />
              <div className="absolute bottom-6 -right-2 w-4 h-4 rounded-full bg-blue-500 shadow-md shadow-blue-500/50 animate-float-reverse" />
              <div className="absolute top-1/2 -left-4 w-3 h-3 rounded-full bg-indigo-400 animate-pulse" />

              {/* Main Avatar Container with smooth floating motion */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-full h-full rounded-full p-2.5 bg-gradient-to-tr from-sky-400/30 to-blue-600/30 dark:from-sky-500/30 dark:to-blue-800/30 shadow-xl overflow-hidden"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800 relative">
                  <img
                    src={IMAGES.avatarAbout}
                    alt="About Lucas Silva"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Narrative, Stats & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Section Title */}
            <div className="mb-4">
              <span className="text-xs font-mono font-semibold tracking-wider text-sky-600 dark:text-sky-400 uppercase">
                Discover My Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
                About <span className="text-sky-500 dark:text-sky-400">Me</span>
              </h2>
            </div>

            {/* Prose description */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {PERSONAL_INFO.bio}
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Meu foco é criar pontes entre a visão de produto, design intuitivo e arquiteturas de código sustentáveis. Acredito que excelência técnica e experiência do usuário andam de mãos dadas em cada linha de código que escrevo.
            </p>

            {/* Strengths checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 w-full text-left">
              {keyStrengths.map((strength) => (
                <div key={strength} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-sky-500 shrink-0" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>

            {/* Stats Row with Blue Highlight */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 py-4 px-4 sm:px-6 mb-8 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-sm w-full">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-sky-500 dark:text-sky-400 font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Hire Me CTA Button */}
            <Button
              variant="primary"
              size="lg"
              icon={<Briefcase size={18} />}
              onClick={triggerConfettiAndScroll}
              className="font-semibold px-8"
            >
              Hire Me
            </Button>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
