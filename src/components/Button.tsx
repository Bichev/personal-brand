'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  external = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a12]';
  
  const variants = {
    primary: 'bg-[#c9a84c] hover:bg-[#d4b65e] text-[#0a0a12] focus:ring-[#c9a84c]',
    secondary: 'bg-[#1a1a28] hover:bg-[#252536] text-[#e8e6e3] dark:bg-[#1a1a28] dark:hover:bg-[#252536] focus:ring-[#c9a84c]',
    outline: 'border border-[#c9a84c]/40 hover:border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c]/10 focus:ring-[#c9a84c]',
    ghost: 'text-[#8a8780] hover:text-[#c9a84c] hover:bg-white/5 focus:ring-[#c9a84c]',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
  };

  const buttonClass = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={buttonClass}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClass}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
    >
      {children}
    </motion.button>
  );
}
