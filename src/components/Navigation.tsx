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
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl text-gray-900 dark:text-white cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            VB
          </motion.div>

          {/* Desktop Navigation */}
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
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors focus:outline-none focus-visible:ring-0"
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
                  className={`transition-colors focus:outline-none focus-visible:ring-0 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-bold'
                      : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium'
                  }`}
                >
                  {item.name}
                </motion.button>
              );
            })}
            
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isMobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700"
          >
            {NAVIGATION_ITEMS.map((item) => {
              const isExternal = 'external' in item && item.external;
              const isActive = !isExternal && activeSection === item.href.substring(1);

              if (isExternal) {
                return (
                  <motion.a
                    key={item.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={item.href}
                    style={{ outline: 'none', boxShadow: 'none' }}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors focus:outline-none focus-visible:ring-0"
                  >
                    {item.name}
                  </motion.a>
                );
              }

              return (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavClick(item.href)}
                  style={{ outline: 'none', boxShadow: 'none' }}
                  className={`block w-full text-left px-4 py-3 transition-colors focus:outline-none focus-visible:ring-0 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-gray-800'
                      : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium'
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