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
      case 'FaLinkedin': return <FaLinkedin size={22} />;
      case 'FaGithub': return <FaGithub size={22} />;
      case 'FaTwitter': return <FaTwitter size={22} />;
      case 'FaEnvelope': return <FaEnvelope size={22} />;
      default: return null;
    }
  };

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
            Let&apos;s Connect
          </h2>
          <div className="w-12 h-px bg-[#c9a84c]/40 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex"
          >
            <Card className="w-full">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-center">
                  <FaEnvelope className="text-[#c9a84c] mr-4" size={18} />
                  <div>
                    <p className="text-xs text-gray-400 dark:text-[#6b6860] font-mono uppercase tracking-wider">Email</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-gray-900 dark:text-white text-sm font-medium hover:text-[#c9a84c] transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-[#c9a84c] mr-4" size={18} />
                  <div>
                    <p className="text-xs text-gray-400 dark:text-[#6b6860] font-mono uppercase tracking-wider">Location</p>
                    <p className="text-gray-900 dark:text-white text-sm font-medium">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {CONTACT_INFO.socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 dark:text-[#6b6860] hover:text-[#c9a84c] transition-colors"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {getSocialIcon(social.icon)}
                    </motion.a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              <Card className="flex flex-col">
                <div className="text-center flex-grow">
                  <div className="w-14 h-14 bg-[#c9a84c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaLinkedin className="text-[#c9a84c]" size={22} />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                    Networking
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-[#8a8780] mb-4">
                    Let&apos;s connect and discuss technology trends, AI developments, or industry insights.
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

              <Card className="flex flex-col">
                <div className="text-center flex-grow">
                  <div className="w-14 h-14 bg-[#c9a84c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaGithub className="text-[#c9a84c]" size={22} />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                    Open Source
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-[#8a8780] mb-4">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
