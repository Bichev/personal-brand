'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { Button } from './Button';
import { PERSONAL_INFO, CONTACT_INFO } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';

export function HeroSection() {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaLinkedin':
        return <FaLinkedin size={24} />;
      case 'FaGithub':
        return <FaGithub size={24} />;
      case 'FaTwitter':
        return <FaTwitter size={24} />;
      case 'FaEnvelope':
        return <FaEnvelope size={24} />;
      default:
        return null;
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8">
              <Image
                src={PERSONAL_INFO.photoUrl}
                alt={PERSONAL_INFO.name}
                fill
                className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                priority
              />
            </div>
          </motion.div>

          {/* Name and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              {PERSONAL_INFO.tagline}
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              {PERSONAL_INFO.shortBio}
            </p>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                View My Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="flex justify-center space-x-6">
              {CONTACT_INFO.socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  {getSocialIcon(social.icon)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 