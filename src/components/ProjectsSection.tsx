'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FaGithub, FaExternalLinkAlt, FaRocket, FaPlane, FaRobot, 
  FaTv, FaLink, FaPiggyBank, FaBookOpen, FaWifi, FaBuilding
} from 'react-icons/fa';
import { Card } from './Card';
import { Button } from './Button';
import { ENTERPRISE_PROJECTS, PERSONAL_PROJECTS } from '@/lib/constants';
import { SectionProps, Project } from '@/types';

const enterpriseIconMap = {
  FaPlane: <FaPlane className="text-4xl mb-2 mx-auto" />,
  FaRobot: <FaRobot className="text-4xl mb-2 mx-auto" />,
  FaTv: <FaTv className="text-4xl mb-2 mx-auto" />,
  FaLink: <FaLink className="text-4xl mb-2 mx-auto" />,
  FaPiggyBank: <FaPiggyBank className="text-lg mt-1" />,
  FaBookOpen: <FaBookOpen className="text-lg mt-1" />,
  FaWifi: <FaWifi className="text-lg mt-1" />,
};

export function ProjectsSection({ className, id = 'projects' }: SectionProps) {
  const featuredEnterpriseProjects = ENTERPRISE_PROJECTS.filter(project => project.featured);
  const otherEnterpriseProjects = ENTERPRISE_PROJECTS.filter(project => !project.featured);
  const featuredPersonalProjects = PERSONAL_PROJECTS.filter(project => project.featured);
  const otherPersonalProjects = PERSONAL_PROJECTS.filter(project => !project.featured);

  const getEnterpriseIcon = (iconName: string, isFeatured: boolean = false) => {
    const icon = enterpriseIconMap[iconName as keyof typeof enterpriseIconMap];
    if (isFeatured) {
      return <div className="text-white">{icon}</div>;
    }
    return <div className="text-blue-600 dark:text-blue-400 flex-shrink-0">{icon}</div>;
  };

  return (
    <section id={id} className={`py-10 bg-gray-50 dark:bg-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From enterprise-scale AI transformations to innovative personal projects, 
            showcasing solutions that demonstrate the power of emerging technologies.
          </p>
        </motion.div>

        {/* Enterprise Projects */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaBuilding className="text-blue-600 dark:text-blue-400 text-2xl" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Enterprise Solutions
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Large-scale transformations and AI implementations for Fortune 500 companies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredEnterpriseProjects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card padding="none" className="overflow-hidden group">
                  {/* Project Image */}
                  <div className={`relative h-48 bg-gradient-to-r ${project.color || 'from-gray-500 to-gray-600'}`}>
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <div className="text-white text-center">
                        {getEnterpriseIcon(project.icon!, true)}
                        <h3 className="text-xl font-bold">{project.title}</h3>
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
                      {project.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other Enterprise Projects */}
          {otherEnterpriseProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherEnterpriseProjects.map((project: Project, index: number) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col">
                    <div className="flex-grow">
                      <div className="flex items-start gap-3 mb-3">
                        {getEnterpriseIcon(project.icon!)}
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Personal Projects */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaRocket className="text-green-600 dark:text-green-400 text-2xl" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Personal Innovations
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Side projects and AI experiments that showcase creativity and technical expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredPersonalProjects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card padding="none" className="overflow-hidden group">
                  {/* Project Image */}
                  <div className="relative h-48">
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 text-center transition-colors group-hover:bg-black/50">
                           <div className="text-white text-center">
                            <FaRocket className="text-4xl mb-2 mx-auto" />
                            <h3 className="text-xl font-bold">{project.title}</h3>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
                        <div className="text-white text-center">
                          <FaRocket className="text-4xl mb-2 mx-auto" />
                          <h3 className="text-xl font-bold">{project.title}</h3>
                        </div>
                      </div>
                    )}
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
                      {project.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm"
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

          {/* Other Personal Projects */}
          {otherPersonalProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPersonalProjects.map((project: Project, index: number) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col">
                    <div className="flex-grow">
                      <div className="flex items-start gap-3 mb-3">
                        <FaRocket className="text-green-600 dark:text-green-400 text-lg mt-1" />
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                        {project.description}
                      </p>
                    </div>
                    
                    <div>
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
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
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 