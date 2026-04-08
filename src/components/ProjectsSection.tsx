'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FaGithub, FaExternalLinkAlt, FaRocket, FaPlane, FaRobot, 
  FaTv, FaLink, FaPiggyBank, FaBookOpen, FaWifi, FaBuilding,
  FaChartLine, FaNewspaper, FaExchangeAlt, FaRedditAlien
} from 'react-icons/fa';
import { Card } from './Card';
import { Button } from './Button';
import { ENTERPRISE_PROJECTS, PERSONAL_PROJECTS } from '@/lib/constants';
import { SectionProps, Project } from '@/types';

const iconMap = {
  FaPlane: <FaPlane className="text-4xl mb-2 mx-auto" />,
  FaRobot: <FaRobot className="text-4xl mb-2 mx-auto" />,
  FaTv: <FaTv className="text-4xl mb-2 mx-auto" />,
  FaLink: <FaLink className="text-4xl mb-2 mx-auto" />,
  FaPiggyBank: <FaPiggyBank className="text-lg mt-1" />,
  FaBookOpen: <FaBookOpen className="text-lg mt-1" />,
  FaWifi: <FaWifi className="text-lg mt-1" />,
  FaChartLine: <FaChartLine className="text-4xl mb-2 mx-auto" />,
  FaNewspaper: <FaNewspaper className="text-4xl mb-2 mx-auto" />,
  FaExchangeAlt: <FaExchangeAlt className="text-4xl mb-2 mx-auto" />,
  FaRedditAlien: <FaRedditAlien className="text-4xl mb-2 mx-auto" />,
  FaRocket: <FaRocket className="text-4xl mb-2 mx-auto" />,
};

export function ProjectsSection({ className, id = 'projects' }: SectionProps) {
  const featuredEnterpriseProjects = ENTERPRISE_PROJECTS.filter(project => project.featured);
  const otherEnterpriseProjects = ENTERPRISE_PROJECTS.filter(project => !project.featured);
  const featuredPersonalProjects = PERSONAL_PROJECTS.filter(project => project.featured);
  const otherPersonalProjects = PERSONAL_PROJECTS.filter(project => !project.featured);

  const getIcon = (iconName: string, isFeatured: boolean = false) => {
    const icon = iconMap[iconName as keyof typeof iconMap];
    if (isFeatured) {
      return <div className="text-white">{icon}</div>;
    }
    return <div className="text-[#b8941f] dark:text-[#c9a84c] flex-shrink-0">{icon}</div>;
  };

  const getSmallIcon = (iconName: string) => {
    const iconKey = iconName || 'FaRocket';
    const icon = iconMap[iconKey as keyof typeof iconMap];
    const smallIcon = {
      ...icon,
      props: { ...icon.props, className: 'text-lg mt-1' }
    };
    return <div className="text-[#b8941f] dark:text-[#c9a84c] flex-shrink-0">{smallIcon}</div>;
  };

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
            Portfolio
          </h2>
          <div className="w-12 h-px bg-[#c9a84c]/40 mx-auto mb-6" />
          <p className="text-gray-500 dark:text-[#8a8780] max-w-2xl mx-auto">
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
            <div className="flex items-center justify-center gap-3 mb-3">
              <FaBuilding className="text-[#c9a84c] text-xl" />
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-gray-900 dark:text-white">
                Enterprise Solutions
              </h3>
            </div>
            <p className="text-gray-500 dark:text-[#6b6860] text-sm max-w-xl mx-auto">
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
                  <div className={`relative h-48 bg-gradient-to-r ${project.color || 'from-gray-700 to-gray-800'}`}>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="text-white text-center">
                        {getIcon(project.icon!, true)}
                        <h3 className="text-xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-[#8a8780] mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] text-gray-400 dark:text-[#6b6860] bg-gray-100 dark:bg-white/[0.04] px-2 py-0.5 rounded"
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
                  <Card className="h-full flex flex-col group">
                    <div className="flex-grow">
                      <div className="flex items-start gap-3 mb-3">
                        {getSmallIcon(project.icon!)}
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-[#8a8780] mb-4">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] text-gray-400 dark:text-[#6b6860] bg-gray-100 dark:bg-white/[0.04] px-2 py-0.5 rounded"
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
            <div className="flex items-center justify-center gap-3 mb-3">
              <FaRocket className="text-[#c9a84c] text-xl" />
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-gray-900 dark:text-white">
                Personal Innovations
              </h3>
            </div>
            <p className="text-gray-500 dark:text-[#6b6860] text-sm max-w-xl mx-auto">
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
                            {getIcon(project.icon!, true)}
                            <h3 className="text-xl font-bold">{project.title}</h3>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a28] to-[#252536] flex items-center justify-center">
                        <div className="text-white text-center">
                          {getIcon(project.icon!, true)}
                          <h3 className="text-xl font-bold">{project.title}</h3>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-[#8a8780] mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] text-gray-400 dark:text-[#6b6860] bg-gray-100 dark:bg-white/[0.04] px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" href={project.githubUrl} external>
                          <FaGithub className="mr-2" size={14} />
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" href={project.liveUrl} external>
                          <FaExternalLinkAlt className="mr-2" size={12} />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

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
                  <Card className="h-full flex flex-col group">
                    <div className="flex-grow">
                      <div className="flex items-start gap-3 mb-3">
                        {getSmallIcon(project.icon!)}
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-[#8a8780] mb-4">
                        {project.description}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex flex-wrap gap-1 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] text-gray-400 dark:text-[#6b6860] bg-gray-100 dark:bg-white/[0.04] px-2 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <Button variant="ghost" size="sm" href={project.githubUrl} external>
                            <FaGithub size={16} />
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button variant="ghost" size="sm" href={project.liveUrl} external>
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
