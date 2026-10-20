import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, ArrowRight, Sparkles, Code2, Layers, Cpu, Database } from 'lucide-react';
import { Button } from './ui/Button';
import { IMAGES } from '../assets/images';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Floating badges around the avatar
  const floatingBadges = [
    {
      name: 'React',
      icon: '⚛️',
      position: 'top-2 right-4 sm:-top-2 sm:right-6',
      delay: 0,
      duration: 5,
    },
    {
      name: 'TypeScript',
      icon: 'TS',
      position: 'top-1/4 -right-3 sm:top-1/3 sm:-right-6',
      delay: 0.8,
      duration: 6,
      isText: true,
    },
    {
      name: 'Tailwind',
      icon: '🌊',
      position: 'bottom-8 -right-2 sm:bottom-12 sm:-right-4',
      delay: 1.2,
      duration: 5.5,
    },
    {
      name: 'Node.js',
      icon: '🟢',
      position: 'bottom-2 left-6 sm:-bottom-2 sm:left-10',
      delay: 0.4,
      duration: 6.2,
    },
    {
      name: 'Figma',
      icon: '🎨',
      position: 'top-1/3 -left-3 sm:top-1/3 sm:-left-6',
      delay: 1.5,
      duration: 5.8,
    },
    {
      name: 'Next.js',
      icon: '▲',
      position: 'top-3 left-6 sm:-top-2 sm:left-12',
      delay: 0.2,
      duration: 6.5,
      isText: true,
    },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient background blurred shapes (cyan / blue) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-400/15 via-blue-500/10 to-indigo-400/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-sky-200/30 dark:bg-sky-900/20 rounded-full blur-[80px] pointer-events-none -z-10 animate-ambient-1" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/40 dark:bg-blue-950/30 rounded-full blur-[90px] pointer-events-none -z-10 animate-ambient-2" />

      {/* Floating subtle geometric circles */}
      <div className="absolute top-36 left-12 w-4 h-4 rounded-full bg-sky-300/40 dark:bg-sky-600/30 blur-[1px] animate-pulse" />
      <div className="absolute top-48 right-1/4 w-6 h-6 rounded-full bg-blue-400/30 dark:bg-blue-500/20 blur-[1px] animate-float" />
      <div className="absolute bottom-24 right-16 w-5 h-5 rounded-full bg-sky-200/50 dark:bg-sky-700/20 blur-[1px] animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-200/80 dark:border-sky-800 px-3.5 py-1.5 shadow-xs mb-6 text-xs sm:text-sm font-medium text-sky-700 dark:text-sky-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5"
            >
              Hi, I'm <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                React Specialist
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-8"
            >
              {PERSONAL_INFO.subheadline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                icon={<FileText size={18} />}
                onClick={onOpenResume}
                className="w-full sm:w-auto font-semibold px-7"
              >
                Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Mail size={18} />}
                href="#contact"
                className="w-full sm:w-auto font-semibold px-7"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Quick Skills highlights row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Code2 size={16} className="text-sky-500" />
                <span>Pixel-Perfect UI</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers size={16} className="text-sky-500" />
                <span>Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu size={16} className="text-sky-500" />
                <span>Ultra-Fast Performance</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Character Portrait & Orbiting Tech Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-[290px] h-[290px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px]">
              
              {/* Outer Decorative Concentric Rings */}
              <div className="absolute inset-0 rounded-full border border-sky-200/70 dark:border-sky-800/60 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-3 rounded-full border border-dashed border-sky-300/60 dark:border-sky-700/50 pointer-events-none" />
              <div className="absolute -inset-6 rounded-full border border-sky-100/50 dark:border-sky-900/30 pointer-events-none" />

              {/* Glowing Aura Behind Avatar */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-sky-400/25 via-blue-500/20 to-cyan-300/25 blur-xl pointer-events-none" />

              {/* Main Avatar Circular Frame with Floating Animation */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-sky-300/40 to-blue-500/30 dark:from-sky-500/30 dark:to-blue-700/30 shadow-2xl shadow-sky-500/20 overflow-hidden"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                  <img
                    src={IMAGES.avatarHero}
                    alt="Lucas Silva - React Specialist"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {/* Decorative badge inside avatar */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-sky-200/80 dark:border-sky-800 text-[11px] font-mono font-medium text-slate-800 dark:text-slate-200 shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Frontend Architect</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Orbiting Technology Badges */}
              {floatingBadges.map((badge, idx) => (
                <motion.div
                  key={badge.name}
                  animate={{
                    y: [0, -8, 0],
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: badge.duration,
                    delay: badge.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`absolute ${badge.position} z-20 flex items-center gap-1.5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg shadow-slate-900/5 dark:shadow-black/20 border border-slate-200/80 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:scale-110 transition-transform duration-200 cursor-default`}
                >
                  <span className={`text-sm ${badge.isText ? 'text-sky-500 font-mono font-bold' : ''}`}>
                    {badge.icon}
                  </span>
                  <span>{badge.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
