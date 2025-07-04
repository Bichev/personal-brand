'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Card } from './Card';
import { Button } from './Button';
import { CONTACT_INFO, PERSONAL_INFO } from '@/lib/constants';
import { SectionProps } from '@/types';

export function ContactSection({ className, id = 'contact' }: SectionProps) {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaLinkedin':
        return <FaLinkedin size={24} />;
      case 'FaGithub':
        return <FaGithub size={24} />;
      case 'FaTwitter':
        return <FaTwitter size={24} />;
      case 'FaEnvelope':
        return <FaEnvelope size={24} />;
      default:
        return null;
    }
  };

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
            Let's Connect
          </h2>
          {/* <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Available for C-level consulting, enterprise AI transformations, conference speaking, and strategic technology partnerships. Harvard & Wharton educated, $15M+ revenue track record.
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex"
          >
            <Card className="w-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-600 dark:text-blue-400 mr-4" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 mr-4" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {CONTACT_INFO.socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {getSocialIcon(social.icon)}
                    </motion.a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {/* Collaboration Card */}
              {/* <Card>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaEnvelope className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Enterprise Consulting
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    C-level AI strategy consulting, digital transformation leadership, and Fortune 500 technical advisory services.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    href={`mailto:${CONTACT_INFO.email}?subject=Enterprise AI Consulting Inquiry`}
                    external
                  >
                    Contact for Consulting
                  </Button>
                </div>
              </Card> */}

              {/* Networking Card */}
              <Card className="flex flex-col">
                <div className="text-center flex-grow">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaLinkedin className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Networking
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Let's connect and discuss technology trends, AI developments, or industry insights.
                  </p>
                </div>
                <div className="text-center mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    href="https://www.linkedin.com/in/vladimir-bichev-383b1525/"
                    external
                  >
                    Connect on LinkedIn
                  </Button>
                </div>
              </Card>

              {/* Open Source Card */}
              <Card className="flex flex-col">
                <div className="text-center flex-grow">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaGithub className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Open Source
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Check out my open-source projects and contributions on GitHub.
                  </p>
                </div>
                <div className="text-center mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    href="https://github.com/Bichev"
                    external
                  >
                    View GitHub
                  </Button>
                </div>
              </Card>

              {/* Speaking Card */}
              {/* <Card>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaTwitter className="text-orange-600 dark:text-orange-400" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Conference Speaking
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    10+ European conferences speaker on enterprise AI, machine learning, and blockchain technologies.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    href={`mailto:${CONTACT_INFO.email}?subject=Conference Speaking Engagement`}
                    external
                  >
                    Book Speaking
                  </Button>
                </div>
              </Card> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 