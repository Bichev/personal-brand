'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({ 
  children, 
  className, 
  hover = true, 
  padding = 'md' 
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <motion.div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm',
        paddingClasses[padding],
        className
      )}
      whileHover={hover ? { y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
} 