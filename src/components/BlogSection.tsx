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
            Latest Insights
          </h2>
          <div className="w-12 h-px bg-[#c9a84c]/40 mx-auto" />
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
                  <Card className={`h-full flex flex-col group ${post.featured ? 'ring-1 ring-[#c9a84c]/20' : ''}`}>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-xs text-gray-400 dark:text-[#6b6860] font-mono">
                          <FaClock className="mr-1.5" size={10} />
                          {formatDate(post.date)} &bull; {post.readTime}
                        </div>
                        {isLocal && (
                          <span className="bg-[#c9a84c]/10 text-[#c9a84c] px-2 py-0.5 rounded text-[10px] font-mono font-medium tracking-wider uppercase">
                            Article
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-[#8a8780] mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] text-gray-400 dark:text-[#6b6860] bg-gray-100 dark:bg-white/[0.04] px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <a 
                      href={href} 
                      {...(isLocal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                      className="flex items-center text-[#b8941f] dark:text-[#c9a84c] font-medium text-sm cursor-pointer hover:text-[#d4b65e] transition-colors"
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-white/[0.08] text-gray-500 dark:text-[#8a8780] hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-colors text-sm font-medium"
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
          <div className="rounded-2xl p-8 border border-white/[0.06] bg-gray-50 dark:bg-[#13131f]">
            <h3 className="font-serif text-2xl font-light text-gray-900 dark:text-white mb-3">
              Want to stay updated?
            </h3>
            <p className="text-gray-500 dark:text-[#8a8780] mb-6 max-w-2xl mx-auto text-sm">
              Connect with me on LinkedIn for exclusive content from Fortune 500 engagements.
            </p>
            <Button
              variant="outline"
              size="md"
              href="https://www.linkedin.com/in/vladimir-bichev-383b1525/"
              external
            >
              <FaExternalLinkAlt className="mr-2" size={14} />
              Follow on LinkedIn
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
