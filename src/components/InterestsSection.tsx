'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFish, FaRunning, FaBreadSlice } from 'react-icons/fa';
import { INTERESTS } from '@/lib/constants';
import { SectionProps } from '@/types';
import { Card } from './Card';

const iconMap = {
  FaFish: <FaFish className="w-8 h-8" />,
  FaRunning: <FaRunning className="w-8 h-8" />,
  FaBreadSlice: <FaBreadSlice className="w-8 h-8" />,
};

export function InterestsSection({ className, id = 'interests' }: SectionProps) {
  return (
    <section id={id} className={`py-20 bg-gray-50 dark:bg-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Beyond the Keyboard
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
              <Card padding="none" className="overflow-hidden h-full">
                <div className="relative h-56 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
                  <Image
                    src={interest.image}
                    alt={interest.title}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="text-white text-center p-4 bg-black bg-opacity-30 rounded-lg">
                      <div className="mb-2 flex justify-center">
                        {iconMap[interest.icon as keyof typeof iconMap]}
                      </div>
                      <h3 className="text-xl font-bold">{interest.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300">
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