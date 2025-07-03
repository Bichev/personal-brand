export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  published: boolean;
  url?: string;
  source?: 'internal' | 'linkedin' | 'external';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  socialLinks: SocialLink[];
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface SectionProps {
  className?: string;
  id?: string;
} 