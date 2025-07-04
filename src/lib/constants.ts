import { Project, BlogPost, ContactInfo } from '@/types';

export const SITE_CONFIG = {
  name: 'Vladimir Bichev',
  title: 'Vladimir Bichev - Technical Program Manager & AI Engineering Leader',
  description: 'Technical Program Manager and AI Engineering Leader with 15+ years of experience driving digital transformation at scale. Currently at EPAM Systems, delivering cutting-edge solutions for Fortune 500 companies.',
  url: 'https://vladimirbichev.com',
  ogImage: '/og-image.jpg',
  tagline: 'Technical Program Manager & AI Engineering Leader',
  shortBio: 'Bridging AI capabilities with real-world applications through innovative development and strategic leadership.',
};

export const PERSONAL_INFO = {
  name: 'Vladimir Bichev',
  tagline: 'Technical Program Manager & AI Engineering Leader',
  shortBio: 'Technical Program Manager and AI Engineering Leader with 15+ years of experience driving digital transformation at scale. Currently at EPAM Systems, delivering cutting-edge solutions for Fortune 500 companies.',
  longBio: `My journey in technology has been focused on one core principle: <strong>building solutions that create meaningful business impact.</strong>

Over 10 years at EPAM Systems, I've had the privilege of growing from an individual contributor to a Technical Program Manager, scaling teams from 10 to 200+ engineers and driving over $15M in revenue growth. What excites me most is working with Fortune 500 clients across diverse industries - from streaming platforms and travel companies to financial services and publishing houses.

<strong>Current Focus:</strong> Leading AI-powered transformations for major travel and media companies, where I'm building systems that serve millions of users daily through personalized recommendations and intelligent content delivery.

<strong>Career Milestones:</strong> I've led digital transformation processing 4B+ documents daily, drove AI forecasting system architecture for streaming platforms serving 70M+ devices, built blockchain solutions for major financial institutions, and developed generative AI agents that went from concept to production in months. Along the way, I've earned recognition including the EPAM CEO Showcase Award and have shared insights at 10+ European conferences.

<strong>Continuous Learning:</strong> I believe in staying ahead of the curve through education - from Harvard Business School and Wharton to hands-on certifications like AWS Solution Architect.

<strong>Beyond Work:</strong> I channel my passion for innovation into personal AI projects - some have even been acquired by private investors, proving that good ideas can come from anywhere.

What drives me is the intersection of cutting-edge technology and practical business impact. Every line of code, every architectural decision, every team I build - it's all aimed at creating solutions that make a real difference in how people work and live.`,
  email: 'vladimir.bichev@gmail.com',
  location: 'Jacksonville Beach, FL',
  resumeUrl: '/Vladimir_Bichev_CV.pdf',
  photoUrl: '/profile-photo.jpg',
};

// Enterprise Projects (EPAM Client Work)
export const ENTERPRISE_PROJECTS: Project[] = [
  {
    id: 'travel-ai-platform',
    title: 'AI Travel Intelligence Platform',
    description: 'Leading AI-powered CMS migration and mobile app delivery for major travel media company, supporting 5M+ user interactions monthly with hyper-personalized recommendations and 1M+ Points of Interest.',
    technologies: ['AI/ML Personalization', 'React Native', 'AWS EKS', 'Contentful CMS', 'Terraform', 'Databricks'],
    featured: true,
    image: '/projects/travel-ai.jpg',
  },
  {
    id: 'generative-ai-agent',
    title: 'Generative AI Virtual Assistant',
    description: 'Developed and deployed enterprise generative AI agent in 5 months, delivering personalized assistance and real-time recommendations using AWS Bedrock and LangChain for major travel brand.',
    technologies: ['AWS Bedrock', 'LangChain', 'Claude AI', 'Vector Search', 'Python', 'Pinecone'],
    featured: true,
    image: '/projects/ai-agent.jpg',
  },
  {
    id: 'streaming-ai-forecasting',
    title: 'AI Ad Forecasting for Streaming Platform',
    description: 'Led AI-driven advertisement forecasting for 70M+ streaming devices, processing millions of ad transactions per second with sub-100ms latency, improving targeting accuracy by 30%.',
    technologies: ['Apache Spark MLlib', 'AWS EMR', 'Real-time Bidding', 'Machine Learning', 'DynamoDB', 'PostgreSQL'],
    featured: true,
    image: '/projects/streaming-ai.jpg',
  },
  {
    id: 'fintech-transformation',
    title: 'Financial Services Digital Transformation',
    description: 'Led large-scale digital transformation for major US financial services provider, managing 50+ engineers across BI analytics, microservices migration, and frontend modernization.',
    technologies: ['Power BI', 'AWS Redshift', 'Microservices', 'Angular', 'Java Spring Boot', 'Kubernetes'],
    image: '/projects/fintech.jpg',
  },
  {
    id: 'publishing-cloud-migration',
    title: 'Publishing Platform AWS Migration',
    description: 'Scaled engineering team from 10 to 150+ members, delivered cloud-native content processing pipeline handling 4B documents daily and 100M search queries for major publisher.',
    technologies: ['AWS EKS', 'Apache Flink', 'ElasticSearch', 'React', 'Terraform', 'Jenkins'],
    image: '/projects/publishing.jpg',
  },
  {
    id: 'banking-blockchain',
    title: 'Enterprise Blockchain Identity System',
    description: 'Architected and implemented major European bank\'s first blockchain-based identity management solution using IBM Hyperledger Fabric, improving processing efficiency by 70%.',
    technologies: ['IBM Hyperledger Fabric', 'Smart Contracts', 'Go SDK', 'CouchDB', 'Spring Boot'],
    image: '/projects/blockchain.jpg',
  },
];

// Personal Projects & Innovations
export const PERSONAL_PROJECTS: Project[] = [
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
    id: 'ai-stock-news',
    title: 'AI Stock Market News Summarizer',
    description: 'Automated system that aggregates information from multiple financial news sources and provides condensed, AI-generated market overviews with sentiment analysis and key insights.',
    technologies: ['Python', 'OpenAI API', 'News APIs', 'NLP', 'Sentiment Analysis', 'Telegram Bot'],
    featured: true,
    image: '/projects/stock-news.jpg',
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
    id: 'reddit-ai',
    title: 'Ask Reddit AI',
    description: 'AI-powered platform that analyzes Reddit discussions and provides intelligent answers using OpenAI GPT-4o-mini and Reddit API integration.',
    technologies: ['Next.js', 'TypeScript', 'OpenAI GPT-4', 'Reddit API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/vladimirbi/ask-reddit-ai',
    liveUrl: 'https://ask-reddit-ai.vercel.app',
    image: '/projects/reddit-ai.jpg',
  },
  {
    id: 'crypto-trading-ai',
    title: 'AI-Powered Crypto Trading System (Sold)',
    description: 'Built and sold to private investor: AI-powered crypto scanner analyzing 270+ trading pairs across 25+ technical indicators every 5 minutes with LLM-driven trading insights.',
    technologies: ['OpenAI API', 'LangChain', 'Python', 'Coinbase API', 'Technical Analysis', 'Telegram API'],
    image: '/projects/crypto-ai.jpg',
  },
  {
    id: 'real-estate-ai',
    title: 'Real Estate AI Description Generator',
    description: 'LLM-powered platform that generates and fine-tunes property descriptions tailored to target buyer demographics. Gifted to local real estate agency.',
    technologies: ['OpenAI API', 'Node.js', 'React.js', 'NLP', 'Demographic Analysis'],
    image: '/projects/real-estate.jpg',
  },
];

export const PROJECTS: Project[] = [...ENTERPRISE_PROJECTS, ...PERSONAL_PROJECTS];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'scaling-ai-enterprise',
    title: 'Scaling AI to Enterprise: From Voya to Lonely Planet\'s 5M+ Users',
    excerpt: 'How I led the development and deployment of production AI systems that serve millions of users daily, sharing lessons from AWS Bedrock, LangChain, and vector search implementations.',
    content: '',
    date: '2024-12-15',
    readTime: '12 min read',
    tags: ['AI/ML', 'AWS Bedrock', 'Enterprise Scale', 'LangChain', 'Production AI'],
    published: true,
    source: 'internal',
  },
  {
    id: 'team-scaling-playbook',
    title: 'The $15M Playbook: Scaling Engineering Teams from 10 to 150+',
    excerpt: 'Strategic insights from growing EPAM delivery teams across Fortune 500 engagements, including team structure, hiring, and revenue optimization.',
    content: '',
    date: '2024-11-20',
    readTime: '10 min read',
    tags: ['Leadership', 'Team Scaling', 'EPAM', 'Revenue Growth', 'Engineering Management'],
    published: true,
    source: 'internal',
  },
  {
    id: 'real-time-ai-roku',
    title: 'Building Real-Time AI at Roku Scale: 70M+ Devices, Sub-100ms Latency',
    excerpt: 'Technical deep-dive into architecting AI-powered ad forecasting systems that process millions of transactions per second with Apache Spark MLlib and AWS EMR.',
    content: '',
    date: '2024-10-10',
    readTime: '15 min read',
    tags: ['Apache Spark', 'Real-time AI', 'AWS EMR', 'Machine Learning', 'Scale'],
    published: true,
    source: 'internal',
  },
  {
    id: 'blockchain-banking',
    title: 'Implementing Blockchain in Banking: From PoC to Production',
    excerpt: 'Case study of architecting Eastern Europe\'s largest bank\'s first blockchain identity management solution using IBM Hyperledger Fabric.',
    content: '',
    date: '2024-09-05',
    readTime: '8 min read',
    tags: ['Blockchain', 'IBM Hyperledger', 'Banking', 'Smart Contracts', 'Identity Management'],
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

export const INTERESTS = [
  {
    title: 'Angler & Outdoorsman',
    description: 'When I\'m not architecting code, you can find me by the water, fishing rod in hand. It\'s my favorite way to disconnect, recharge, and enjoy the challenges of the outdoors.',
    icon: 'FaFish',
    image: '/interests/fishing.jpg',
  },
  {
    title: 'Endurance Runner',
    description: 'From 5K sprints to full marathons, I\'m passionate about the discipline and resilience of long-distance running. It\'s a powerful metaphor for tackling complex, long-term projects.',
    icon: 'FaRunning',
    image: '/interests/running.jpg',
  },
  {
    title: 'Sourdough Baker',
    description: 'I bake and sell sourdough bread at local farmers markets. The blend of science, patience, and craft is a perfect complement to my work in technology.',
    icon: 'FaBreadSlice',
    image: '/interests/baking.jpg',
  },
];

export const SKILLS = [
  'AI/ML Leadership',
  'AWS Bedrock/Claude AI',
  'LangChain/Vector Search',
  'Apache Spark MLlib',
  'Real-time Data Processing',
  'Enterprise Architecture',
  'Team Scaling (10→150+ engineers)',
  'Revenue Generation ($15M+)',
  'AWS/Azure/GCP',
  'Kubernetes/Terraform',
  'React/Angular/Node.js',
  'Python/Java/.NET',
  'Blockchain/Smart Contracts',
  'Technical Program Management',
  'Digital Transformation',
  'Agile/SAFe Methodologies',
  'C-Level Stakeholder Management',
  'Conference Speaking',
  'Team Mentoring',
  'Cost Optimization',
];

export const NAVIGATION_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
]; 