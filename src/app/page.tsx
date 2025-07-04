import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';
import { InterestsSection } from '@/components/InterestsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <InterestsSection />
      
      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-black text-gray-600 dark:text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Vladimir Bichev. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
