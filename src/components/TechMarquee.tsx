import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../data/portfolioData';

export const TechMarquee: React.FC = () => {
  // Duplicate list to achieve continuous infinite looping
  const marqueeItems = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="w-full py-8 border-y border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-950 relative overflow-hidden backdrop-blur-xs">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee">
        {marqueeItems.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="group flex items-center gap-2.5 mx-4 sm:mx-6 px-4 py-2 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 shadow-xs hover:border-sky-400 dark:hover:border-sky-500 hover:shadow-md hover:shadow-sky-500/10 transition-all duration-300 cursor-pointer shrink-0"
          >
            <div
              className="w-2.5 h-2.5 rounded-full transition-transform duration-300 group-hover:scale-125"
              style={{ backgroundColor: tech.color }}
            />
            <span className="text-sm font-semibold text-slate-500 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white transition-colors duration-200 whitespace-nowrap">
              {tech.name}
            </span>
            <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors duration-200">
              {tech.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
