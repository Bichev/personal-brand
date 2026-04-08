import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';
import { InterestsSection } from '@/components/InterestsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a12] transition-colors">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <InterestsSection />
      <ContactSection />
      
      <footer className="border-t border-gray-200/50 dark:border-white/[0.04] bg-gray-50 dark:bg-[#08080f] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs text-gray-400 dark:text-[#6b6860] font-mono tracking-wider">
              © {new Date().getFullYear()} Vladimir Bichev
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
