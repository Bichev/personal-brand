'use client';

import { motion } from 'framer-motion';
import { FaClock, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { Card } from './Card';
import { Button } from './Button';
import { BLOG_POSTS } from '@/lib/constants';
import { SectionProps } from '@/types';
import { formatDate } from '@/lib/utils';

export function BlogSection({ className, id = 'blog' }: SectionProps) {
  const featuredPosts = BLOG_POSTS.filter(post => post.published).slice(0, 6);

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
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enterprise AI insights from conferences, Harvard & Wharton education, and real-world implementations at Fortune 500 scale
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full flex flex-col">
                <div className="flex-grow">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <FaClock className="mr-2" size={14} />
                    {formatDate(post.date)} • {post.readTime}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Read More */}
                <a 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span>Read More</span>
                  <FaArrowRight className="ml-2" size={12} />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Blog CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want to stay updated?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {/* Join 350+ professionals who've attended my training sessions (4.55/5 rating) and follow my insights on scaling AI at enterprise level.  */}
              Connect with me on LinkedIn for exclusive content from Fortune 500 engagements.
            </p>
            <Button
              variant="outline"
              size="lg"
              href="https://www.linkedin.com/in/vladimir-bichev-383b1525/"
              external
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <FaExternalLinkAlt className="mr-2" size={16} />
              Follow on LinkedIn
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 