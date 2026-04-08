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
        'bg-white dark:bg-[#13131f] rounded-xl border border-gray-200/60 dark:border-white/[0.06] shadow-sm dark:shadow-none',
        paddingClasses[padding],
        className
      )}
      whileHover={hover ? {
        y: -3,
        borderColor: 'rgba(201, 168, 76, 0.25)',
        transition: { duration: 0.25 }
      } : {}}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
