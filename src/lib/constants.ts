import { Project, BlogPost, ContactInfo } from '@/types';

export const SITE_CONFIG = {
  name: 'Vladimir Bichev',
  title: 'Vladimir Bichev - AI/LLM Developer & Engineering Leader',
  description: 'Experienced developer specializing in AI/LLM integration, automation, and scalable web applications. 15+ years building innovative solutions.',
  url: 'https://vladimirbichev.com',
  ogImage: '/og-image.jpg',
  tagline: 'AI/LLM Developer & Engineering Leader',
  shortBio: 'Bridging AI capabilities with real-world applications through innovative development and strategic leadership.',
};

export const PERSONAL_INFO = {
  name: 'Vladimir Bichev',
  tagline: 'AI/LLM Developer & Engineering Leader',
  shortBio: 'Experienced developer with 15+ years specializing in AI/LLM integration, automation, and scalable web applications.',
  longBio: `With over 15 years of experience in software development, I specialize in AI/LLM integration, automation, and building scalable web applications. 

I'm passionate about bridging the gap between cutting-edge AI technologies and practical business solutions. My recent work includes developing AI-powered market analysis platforms, Reddit discussion analyzers, and innovative blockchain integration tools.

Currently exploring the intersection of AI, financial technology, and developer productivity through projects like AssetRadars.com and advanced MCP (Model Context Protocol) implementations.`,
  email: 'vladimir.bichev@gmail.com',
  location: 'Jacksonville Beach, FL',
  resumeUrl: '/Vladimir_Bichev_CV.pdf',
  photoUrl: '/profile-photo.jpg',
};

export const PROJECTS: Project[] = [
  {
    id: 'assetradars',
    title: 'AssetRadars.com',
    description: 'Revolutionary cryptocurrency market analysis platform with real-time technical analysis, advanced indicators, and professional-grade trading intelligence.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Node.js', 'Coinbase API', 'Technical Analysis'],
    liveUrl: 'https://assetradars.com',
    githubUrl: 'https://github.com/vladimirbi/assetradars',
    featured: true,
    image: '/projects/assetradars.jpg',
  },
  {
    id: 'reddit-ai',
    title: 'Ask Reddit AI',
    description: 'AI-powered platform that analyzes Reddit discussions and provides intelligent answers using OpenAI GPT-4o-mini and Reddit API integration.',
    technologies: ['Next.js', 'TypeScript', 'OpenAI GPT-4', 'Reddit API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/vladimirbi/ask-reddit-ai',
    liveUrl: 'https://ask-reddit-ai.vercel.app',
    featured: true,
    image: '/projects/reddit-ai.jpg',
  },
  {
    id: 'coinbase-mcp',
    title: 'Coinbase MCP Integration',
    description: 'Advanced Model Context Protocol implementation for Coinbase integration, enabling seamless AI-powered cryptocurrency operations and analysis.',
    technologies: ['Node.js', 'TypeScript', 'MCP', 'Coinbase API', 'AI Integration'],
    githubUrl: 'https://github.com/vladimirbi/coinbase-mcp',
    featured: true,
    image: '/projects/coinbase-mcp.jpg',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Suite',
    description: 'Collection of AI-powered automation tools and workflows for productivity enhancement and business process optimization.',
    technologies: ['Python', 'OpenAI API', 'Automation', 'Webhooks', 'API Integration'],
    githubUrl: 'https://github.com/vladimirbi/ai-automation',
    image: '/projects/ai-automation.jpg',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-market-analysis',
    title: 'Building AI-Powered Market Analysis: Lessons from AssetRadars.com',
    excerpt: 'Deep dive into the technical challenges and solutions in building a real-time cryptocurrency analysis platform.',
    content: '',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['AI', 'FinTech', 'Technical Analysis', 'Next.js'],
    published: true,
    source: 'internal',
  },
  {
    id: 'reddit-api-integration',
    title: 'Integrating Reddit API with AI: A Complete Guide',
    excerpt: 'How to build intelligent Reddit analysis tools using OpenAI and Reddit API with proper rate limiting and OAuth2.',
    content: '',
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['Reddit API', 'OpenAI', 'AI Integration', 'OAuth2'],
    published: true,
    source: 'internal',
  },
  {
    id: 'mcp-coinbase',
    title: 'Model Context Protocol: The Future of AI-Crypto Integration',
    excerpt: 'Exploring the potential of MCP for building sophisticated cryptocurrency AI applications.',
    content: '',
    date: '2024-01-05',
    readTime: '5 min read',
    tags: ['MCP', 'Crypto', 'AI', 'Integration'],
    published: true,
    source: 'internal',
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'vladimir.bichev@gmail.com',
  location: 'Jacksonville Beach, FL',
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vladimirbi',
      icon: 'FaLinkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/vladimirbi',
      icon: 'FaGithub',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/vladimirbi',
      icon: 'FaTwitter',
    },
    {
      name: 'Email',
      url: 'mailto:vladimir.bichev@gmail.com',
      icon: 'FaEnvelope',
    },
  ],
};

export const SKILLS = [
  'JavaScript/TypeScript',
  'React/Next.js',
  'Node.js',
  'Python',
  'AI/LLM Integration',
  'OpenAI API',
  'MongoDB',
  'PostgreSQL',
  'Redis',
  'Docker',
  'AWS',
  'API Design',
  'Microservices',
  'Technical Leadership',
  'Agile/Scrum',
];

export const NAVIGATION_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
]; 