import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  ...props
}) => {
  const hoverStyles = hoverEffect
    ? 'hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-300 dark:hover:border-sky-500/50 dark:hover:shadow-sky-500/5 transition-all duration-300'
    : '';

  const glowStyles = glow ? 'relative overflow-hidden' : '';

  return (
    <motion.div
      className={`bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 shadow-sm ${hoverStyles} ${glowStyles} ${className}`}
      {...props}
    >
      {glow && (
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
};
