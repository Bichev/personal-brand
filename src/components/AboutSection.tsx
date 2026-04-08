'use client';

import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/lib/constants';
import { SectionProps } from '@/types';

const stats = [
  { value: '15+', label: 'Years in Engineering' },
  { value: '$15M+', label: 'Revenue Delivered' },
  { value: '150+', label: 'Engineers Scaled' },
  { value: '4B+', label: 'Documents Processed Daily' },
];

const credentials = [
  'Harvard Business School',
  'Wharton',
  'AWS Solution Architect',
  'EPAM CEO Award',
];

export function AboutSection({ className, id = 'about' }: SectionProps) {
  return (
    <section id={id} className={`py-20 bg-white dark:bg-[#0a0a12] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-gray-900 dark:text-white mb-4">
            About
          </h2>
          <div className="w-12 h-px bg-[#c9a84c]/40 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="text-gray-600 dark:text-[#9d9a95] leading-relaxed space-y-5 text-[15px]">
              {PERSONAL_INFO.longBio.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {credentials.map((cred) => (
                <span
                  key={cred}
                  className="font-mono text-[11px] text-[#c9a84c]/70 border border-[#c9a84c]/15 px-3 py-1.5 rounded-full"
                >
                  {cred}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#13131f] p-5 text-center"
                >
                  <div className="font-serif text-3xl font-light text-[#b8941f] dark:text-[#c9a84c] mb-1">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] text-gray-400 dark:text-[#6b6860] uppercase tracking-wider leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
