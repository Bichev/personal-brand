'use client';

import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaBrain, FaUsers } from 'react-icons/fa';
import { PERSONAL_INFO, SKILLS } from '@/lib/constants';
import { SectionProps } from '@/types';

export function AboutSection({ className, id = 'about' }: SectionProps) {
  const highlights = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: '15+ Years Experience',
      description: 'Extensive experience in full-stack development and system architecture',
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: 'AI/LLM Specialist',
      description: 'Expert in AI integration, OpenAI API, and machine learning implementations',
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Innovation Focus',
      description: 'Building cutting-edge solutions that bridge technology and business needs',
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: 'Technical Leadership',
      description: 'Leading development teams and driving technical strategy decisions',
    },
  ];

  return (
    <section id={id} className={`py-20 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about leveraging technology to solve real-world problems through innovative development and strategic leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 max-w-none">
              {PERSONAL_INFO.longBio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {SKILLS.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                viewport={{ once: true }}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 