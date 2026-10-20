import React from 'react';
import { motion } from 'framer-motion';

export interface SectionTitleProps {
  prefix?: string;
  highlight: string;
  suffix?: string;
  subtitle?: string;
  tag?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  prefix,
  highlight,
  suffix,
  subtitle,
  tag,
  align = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex flex-col mb-12 ${alignmentClasses[align]} ${className}`}
    >
      {tag && (
        <span className="text-xs font-mono font-semibold tracking-wider text-sky-600 dark:text-sky-400 uppercase mb-2">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {prefix && <span>{prefix} </span>}
        <span className="text-sky-500 dark:text-sky-400">{highlight}</span>
        {suffix && <span> {suffix}</span>}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
