'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaExternalLinkAlt, FaArrowRight, FaBookOpen, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Card } from './Card';
import { Button } from './Button';
import { BLOG_POSTS } from '@/lib/constants';
import { SectionProps } from '@/types';
import { formatDate } from '@/lib/utils';

const PAGE_SIZE = 9;

export function BlogSection({ className, id = 'blog' }: SectionProps) {
  const allPosts = BLOG_POSTS.filter(post => post.published);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visiblePosts = allPosts.slice(0, visibleCount);
  const hasMore = visibleCount < allPosts.length;
  const isExpanded = visibleCount > PAGE_SIZE;

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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {visiblePosts.map((post, index) => {
              const isLocal = !!post.localPath;
              const href = isLocal ? post.localPath : post.url;

              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index >= visibleCount - PAGE_SIZE ? (index % PAGE_SIZE) * 0.08 : 0 }}
                  className="h-full"
                >
                  <Card className={`h-full flex flex-col ${post.featured ? 'ring-1 ring-blue-200 dark:ring-blue-800' : ''}`}>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <FaClock className="mr-2" size={14} />
                          {formatDate(post.date)} &bull; {post.readTime}
                        </div>
                        {isLocal && (
                          <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full text-xs font-medium">
                            Article
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>

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
                    
                    <a 
                      href={href} 
                      {...(isLocal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                      className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <span>{isLocal ? 'Read Article' : 'Read More'}</span>
                      {isLocal ? (
                        <FaBookOpen className="ml-2" size={12} />
                      ) : (
                        <FaArrowRight className="ml-2" size={12} />
                      )}
                    </a>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {(hasMore || isExpanded) && (
          <div className="text-center mb-12">
            <button
              onClick={() => setVisibleCount(prev => hasMore ? prev + PAGE_SIZE : PAGE_SIZE)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              {hasMore ? (
                <>Show More ({allPosts.length - visibleCount} remaining) <FaChevronDown size={12} /></>
              ) : (
                <>Show Less <FaChevronUp size={12} /></>
              )}
            </button>
          </div>
        )}

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
