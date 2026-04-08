'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';
import { NAVIGATION_ITEMS } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';
import { useActiveSection } from '@/hooks/useActiveSection';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#f5f0e8]/80 dark:bg-[#0a0a12]/80 backdrop-blur-md border-b border-[#d4cfc4]/40 dark:border-[#c9a84c]/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-serif text-2xl font-light tracking-wide text-gray-900 dark:text-[#e8e6e3] hover:text-[#b8941f] dark:hover:text-[#c9a84c] cursor-pointer transition-colors"
            onClick={() => scrollToSection('hero')}
          >
            VB
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => {
              const isExternal = 'external' in item && item.external;
              const isActive = !isExternal && activeSection === item.href.substring(1);

              if (isExternal) {
                return (
                  <motion.a
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={item.href}
                    style={{ outline: 'none', boxShadow: 'none' }}
                    className="text-gray-600 hover:text-gray-900 dark:text-[#8a8780] dark:hover:text-[#e8e6e3] text-sm font-medium transition-colors focus:outline-none"
                  >
                    {item.name}
                  </motion.a>
                );
              }

              return (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.href)}
                  style={{ outline: 'none', boxShadow: 'none' }}
                  className={`text-sm transition-colors focus:outline-none ${
                    isActive
                      ? 'text-[#b8941f] dark:text-[#c9a84c] font-semibold'
                      : 'text-gray-600 hover:text-gray-900 dark:text-[#8a8780] dark:hover:text-[#e8e6e3] font-medium'
                  }`}
                >
                  {item.name}
                </motion.button>
              );
            })}
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-[#8a8780] hover:text-[#b8941f] dark:hover:text-[#c9a84c] transition-colors"
            >
              {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-[#8a8780] hover:text-[#c9a84c] transition-colors"
            >
              {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-gray-500 dark:text-[#8a8780] hover:text-[#c9a84c] transition-colors"
            >
              {isMobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </motion.button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-[#d4cfc4]/30 dark:border-white/[0.06]"
          >
            {NAVIGATION_ITEMS.map((item) => {
              const isExternal = 'external' in item && item.external;
              const isActive = !isExternal && activeSection === item.href.substring(1);

              if (isExternal) {
                return (
                  <motion.a
                    key={item.name}
                    whileHover={{ scale: 1.01 }}
                    href={item.href}
                    style={{ outline: 'none', boxShadow: 'none' }}
                    className="block w-full text-left px-4 py-3 text-gray-600 dark:text-[#8a8780] hover:text-[#c9a84c] text-sm font-medium transition-colors focus:outline-none"
                  >
                    {item.name}
                  </motion.a>
                );
              }

              return (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => handleNavClick(item.href)}
                  style={{ outline: 'none', boxShadow: 'none' }}
                  className={`block w-full text-left px-4 py-3 text-sm transition-colors focus:outline-none ${
                    isActive
                      ? 'text-[#c9a84c] font-semibold'
                      : 'text-gray-600 dark:text-[#8a8780] hover:text-[#c9a84c] font-medium'
                  }`}
                >
                  {item.name}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
