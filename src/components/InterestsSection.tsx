'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFish, FaRunning, FaBreadSlice } from 'react-icons/fa';
import { INTERESTS } from '@/lib/constants';
import { SectionProps } from '@/types';
import { Card } from './Card';

const iconMap = {
  FaFish: <FaFish className="w-7 h-7" />,
  FaRunning: <FaRunning className="w-7 h-7" />,
  FaBreadSlice: <FaBreadSlice className="w-7 h-7" />,
};

export function InterestsSection({ className, id = 'interests' }: SectionProps) {
  return (
    <section id={id} className={`py-20 bg-gray-50/50 dark:bg-[#0e0e18] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-gray-900 dark:text-white mb-4">
            Beyond the Keyboard
          </h2>
          <div className="w-12 h-px bg-[#c9a84c]/40 mx-auto mb-6" />
          <p className="text-gray-500 dark:text-[#8a8780] max-w-2xl mx-auto">
            A few of the passions that keep me balanced, creative, and inspired.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INTERESTS.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card padding="none" className="overflow-hidden h-full group flex flex-col">
                <div className="relative h-56 flex-shrink-0">
                  <Image
                    src={interest.image}
                    alt={interest.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center transition-colors group-hover:bg-black/50">
                    <div className="text-white/80 mb-3">
                      {iconMap[interest.icon as keyof typeof iconMap]}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{interest.title}</h3>
                  </div>
                </div>
                <div className="p-6 bg-white dark:bg-[#13131f] flex-grow">
                  <p className="text-sm text-gray-500 dark:text-[#8a8780] leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
