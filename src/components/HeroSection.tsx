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
      case 'FaLinkedin': return <FaLinkedin size={22} />;
      case 'FaGithub': return <FaGithub size={22} />;
      case 'FaTwitter': return <FaTwitter size={22} />;
      case 'FaEnvelope': return <FaEnvelope size={22} />;
      default: return null;
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#0a0a12] dark:via-[#0a0a12] dark:to-[#0a0a12]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,_rgba(201,168,76,0.06)_0%,_transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-8">
              <Image
                src={PERSONAL_INFO.photoUrl}
                alt={PERSONAL_INFO.name}
                fill
                className="rounded-full object-cover ring-2 ring-[#c9a84c]/30 ring-offset-4 ring-offset-white dark:ring-offset-[#0a0a12] shadow-lg"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 dark:text-white mb-5">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-[#8a8780] mb-5 tracking-wide">
              {PERSONAL_INFO.tagline}
            </p>
            <p className="text-base text-gray-500 dark:text-[#6b6860] max-w-2xl mx-auto leading-relaxed">
              {PERSONAL_INFO.shortBio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="md"
                onClick={() => scrollToSection('projects')}
                className="w-48"
              >
                View My Projects
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => scrollToSection('contact')}
                className="w-48"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>

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
                  className="text-gray-400 dark:text-[#6b6860] hover:text-[#b8941f] dark:hover:text-[#c9a84c] transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  {getSocialIcon(social.icon)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 dark:text-[#6b6860] hover:text-[#c9a84c] transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              <FaArrowDown size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
