'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { Card } from './Card';
import { Button } from './Button';
import { PROJECTS } from '@/lib/constants';
import { SectionProps } from '@/types';

export function ProjectsSection({ className, id = 'projects' }: SectionProps) {
  const featuredProjects = PROJECTS.filter(project => project.featured);
  const otherProjects = PROJECTS.filter(project => !project.featured);

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
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions that bridge AI capabilities with real-world applications
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card padding="none" className="overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <div className="flex justify-center">
                        <FaStar className="text-yellow-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        href={project.githubUrl}
                        external
                      >
                        <FaGithub className="mr-2" size={16} />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        href={project.liveUrl}
                        external
                      >
                        <FaExternalLinkAlt className="mr-2" size={14} />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            >
              Other Notable Projects
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-gray-500 dark:text-gray-400 text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          href={project.githubUrl}
                          external
                        >
                          <FaGithub size={16} />
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          href={project.liveUrl}
                          external
                        >
                          <FaExternalLinkAlt size={14} />
                        </Button>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 