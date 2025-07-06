'use client';

import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaBrain, FaUsers, FaUserFriends, FaChalkboardTeacher } from 'react-icons/fa';
import { PERSONAL_INFO, SKILLS } from '@/lib/constants';
import { SectionProps } from '@/types';

export function AboutSection({ className, id = 'about' }: SectionProps) {
  const highlights = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: '$15M+ Revenue Driver',
      description: 'Delivered over $15M in revenue growth at EPAM, scaling teams from 10 to 150+ engineers across Fortune 500 engagements',
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: 'AI/ML Pioneer',
      description: 'Built production AI systems for major streaming, travel, and media companies serving millions of users.',
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Enterprise Scale Expert',
      description: 'Led digital transformations processing 4B+ documents daily, 100M+ search queries, and millions of real-time transactions',
    },
    {
      icon: <FaUserFriends className="w-8 h-8" />,
      title: 'Team Scaler & Mentor',
      description: 'Grew and Lead engineering organizations up to 50+ members and mentored 10 managers into leadership roles.',
    },
    {
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
      title: 'Public Speaker & Trainer',
      description: 'Speaker at European and USA conferences and trained over 350 professionals in AI, Blockchain, and Data Architecture.',
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: 'Industry Recognition',
      description: 'EPAM CEO Award recipient, Harvard & Wharton educated, and an AWS Certified Solution Architect.',
    },
  ];

  return (
    <section id={id} className={`py-10 bg-white dark:bg-gray-900 ${className}`}>
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
          {/* <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A Technical Program Manager and AI Engineering Leader driving digital transformation at enterprise scale, delivering cutting-edge solutions for Fortune 500 companies.
          </p> */}
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
                <p
                  key={index}
                  className="mb-4"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
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