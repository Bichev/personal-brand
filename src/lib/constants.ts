import { Project, BlogPost, ContactInfo } from '@/types';

export const SITE_CONFIG = {
  name: 'Vladimir Bichev',
  title: 'Vladimir Bichev - Technical Program Manager & AI Engineering Leader',
  description: 'Technical Program Manager and AI Engineering Leader with 15+ years of experience driving digital transformation at scale. Currently at EPAM Systems, delivering cutting-edge solutions for Fortune 500 companies.',
  url: 'https://vladbichev.com',
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

<strong>Career Milestones:</strong> I've led digital transformation processing 4B+ documents daily, drove AI forecasting system architecture for streaming platforms serving 5M+ devices, built blockchain solutions for major financial institutions, and developed generative AI agents that went from concept to production in months. Along the way, I've earned recognition including the EPAM CEO Showcase Award and have shared insights at Europe and USA tech conferences in AI, Blockchain, and Data Architecture.

<strong>Continuous Learning:</strong> I believe in staying ahead of the curve through education - from Harvard Business School and Wharton to hands-on certifications like AWS Solution Architect.

<strong>Beyond Work:</strong> I channel my passion for innovation into personal AI projects - some have even been acquired by private investors, proving that good ideas can come from anywhere.

What drives me is the intersection of cutting-edge technology and practical business impact. Every line of code, every architectural decision, every team I build - it's all aimed at creating solutions that make a real difference in how people work and live.`,
  email: 'vl.bichev@gmail.com',
  location: 'Jacksonville, FL',
  resumeUrl: '/Vladimir_Bichev_CV.pdf',
  photoUrl: '/profile-photo.jpg',
};

// Enterprise Projects (EPAM Client Work)
export const ENTERPRISE_PROJECTS: Project[] = [
  {
    id: 'travel-ai-platform',
    title: 'AI Travel Intelligence Platform',
    description: 'Leading AI-powered CMS migration and AI agent delivery for major travel media company, supporting 100k+ user interactions monthly.',
    technologies: ['AI/ML Personalization', 'React Native', 'AWS EKS', 'Contentful CMS', 'Terraform', 'AWS Bedrock', 'Python'],
    featured: true,
    icon: 'FaPlane',
    color: 'from-sky-400 to-blue-500',
  },
  {
    id: 'generative-ai-agent',
    title: 'Generative AI Virtual Assistant',
    description: 'Developed and deployed enterprise generative AI agent in 5 months, delivering personalized assistance for a major travel brand.',
    technologies: ['AWS Bedrock', 'LangChain', 'Claude AI', 'Vector Search', 'Python', 'Pinecone'],
    featured: true,
    icon: 'FaRobot',
    color: 'from-purple-400 to-indigo-500',
  },
  {
    id: 'streaming-ai-forecasting',
    title: 'AI Ad Forecasting for Streaming Platform',
    description: 'Led AI-driven advertisement forecasting for 5M+ streaming devices, processing millions of ad transactions for Real-Time Bidding system.',
    technologies: ['Apache Spark MLlib', 'AWS EMR', 'Real-time Bidding', 'Machine Learning', 'DynamoDB', 'PostgreSQL'],
    featured: true,
    icon: 'FaTv',
    color: 'from-red-400 to-orange-500',
  },
  {
    id: 'banking-blockchain',
    title: 'Enterprise Blockchain Identity System',
    description: 'Architected and implemented a major European bank\'s first blockchain identity solution, improving efficiency by 70%.',
    technologies: ['IBM Hyperledger Fabric', 'Smart Contracts', 'Go SDK', 'CouchDB', 'Spring Boot', 'Ethereum'],
    featured: true,
    icon: 'FaLink',
    color: 'from-emerald-400 to-green-500',
  },
  {
    id: 'fintech-transformation',
    title: 'Financial Services Digital Transformation',
    description: 'Led digital transformation for a major US financial services provider, managing 50+ engineers across multiple streams.',
    technologies: ['Power BI', 'AWS Redshift', 'Microservices', 'Angular', 'Java Spring Boot', 'Kubernetes'],
    icon: 'FaPiggyBank',
  },
  {
    id: 'publishing-cloud-migration',
    title: 'Publishing Platform AWS Migration',
    description: 'Scaled team from 10 to 200+, delivering a cloud-native pipeline handling 4B+ documents daily for a major publisher.',
    technologies: ['AWS EKS', 'Apache Flink', 'ElasticSearch', 'React', 'Terraform', 'Jenkins', 'Streamsets', 'MongoDB'],
    icon: 'FaBookOpen',
  },
  {
    id: 'telecom-recommendation-engine',
    title: 'AI Recommendation Engine for Telecom',
    description: 'Led development of an AI recommendation engine for a major telecom, increasing ad revenue by $2M in the first year.',
    technologies: ['Apache Spark', 'Apache Ignite', 'Real-time Analytics', 'Machine Learning', 'Docker', 'Kubernetes'],
    icon: 'FaWifi',
  }
];

// Personal Projects & Innovations
export const PERSONAL_PROJECTS: Project[] = [
  {
    id: 'assetradars',
    title: 'AssetRadars.com',
    description: 'Revolutionary cryptocurrency market analysis platform with real-time data processing, advanced 50+ indicators calculations, global trends, correlations, alerts engine and AI-powered analytics.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Node.js', 'Coinbase API', 'Technical Analysis', 'OpenAI API'],
    liveUrl: 'https://assetradars.com',
    // githubUrl: 'https://github.com/vladimirbi/assetradars',
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
    liveUrl: 'https://t.me/wsb_sum',
  },
  {
    id: 'coinbase-mcp',
    title: 'Coinbase MCP Integration',
    description: 'Advanced Model Context Protocol implementation for Coinbase integration, enabling seamless AI-powered cryptocurrency operations and analysis.',
    technologies: ['Node.js', 'TypeScript', 'MCP', 'Coinbase API', 'AI Integration'],
    featured: true,
    liveUrl: 'http://54.81.70.175:3005',
    githubUrl: 'https://github.com/Bichev/coinbase-chat-mcp',
    image: '/projects/coinbase-mcp.jpg',
  },
  {
    id: 'reddit-ai',
    title: 'Ask Reddit AI',
    description: 'AI-powered platform that analyzes Reddit discussions and provides intelligent answers using OpenAI GPT-4o-mini and Reddit API integration.',
    technologies: ['Next.js', 'TypeScript', 'OpenAI GPT-4', 'Reddit API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Bichev/ask-reddit-ai',
    liveUrl: 'https://ask-reddit-ai.vercel.app',
    image: '/projects/reddit-ai.jpg',
    featured: true,
  },
  // {
  //   id: 'crypto-trading-ai',
  //   title: 'AI-Powered Crypto Trading System (Sold)',
  //   description: 'Built and sold to private investor: AI-powered crypto scanner analyzing 270+ trading pairs across 25+ technical indicators every 5 minutes with LLM-driven trading insights.',
  //   technologies: ['OpenAI API', 'LangChain', 'Python', 'Coinbase API', 'Technical Analysis', 'Telegram API'],
  //   image: '/projects/crypto-ai.jpg',
  // },
  // {
  //   id: 'real-estate-ai',
  //   title: 'Real Estate AI Description Generator',
  //   description: 'LLM-powered platform that generates and fine-tunes property descriptions tailored to target buyer demographics. Gifted to local real estate agency.',
  //   technologies: ['OpenAI API', 'Node.js', 'React.js', 'NLP', 'Demographic Analysis'],
  //   image: '/projects/real-estate.jpg',
  // },
];

export const PROJECTS: Project[] = [...ENTERPRISE_PROJECTS, ...PERSONAL_PROJECTS];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'building-coinbase-mcp',
    title: 'I Built a Coinbase Chat Agent to Understand Model Context Protocol',
    excerpt: 'An open-source agent that turns the Coinbase API into a conversational tool using MCP, allowing natural language queries for real-time crypto data.',
    content: '',
    date: '2025-06-17',
    readTime: '5 min read',
    tags: ['MCP', 'AI Agents', 'Coinbase API', 'Open Source', 'Node.js'],
    published: true,
    source: 'internal',
    url: 'https://www.linkedin.com/posts/vladimir-bichev-383b1525_ai-mcp-llm-activity-7343039557728165888-xCKn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAVTiNMBpNDP79bxfn3OMmbW2Ppul0IwRww',
  },
  {
    id: 'vector-db-guide-aws',
    title: 'Choosing the Right Vector Database on AWS: A 30-Second Guide',
    excerpt: 'A visual decision tree and comparison to help teams evaluate vector databases on AWS: RDS/pgvector vs. OpenSearch vs. Pinecone for use cases like RAG and hybrid search.',
    content: '',
    date: '2025-06-10',
    readTime: '3 min read',
    tags: ['Vector Database', 'AWS', 'GenAI', 'RAG', 'Architecture'],
    published: true,
    source: 'internal',
    url: 'https://www.linkedin.com/posts/vladimir-bichev-383b1525_vectordatabase-aws-genai-activity-7341653719274385410-ftTE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAVTiNMBpNDP79bxfn3OMmbW2Ppul0IwRww',
  },
  {
    id: 'one-shot-coding-cursor',
    title: 'From Idea to AI Product in Under an Hour with Cursor and Claude',
    excerpt: 'A case study on building \'Ask Reddit AI\' in under an hour, showcasing a one-shot AI development workflow with Next.js, Tailwind, and GPT-4o-mini.',
    content: '',
    date: '2025-06-3',
    readTime: '5 min read',
    tags: ['AI Development', 'Cursor', 'Claude', 'Next.js', 'Productivity'],
    published: true,
    source: 'internal',
    url: 'https://www.linkedin.com/posts/vladimir-bichev-383b1525_one-shot-coding-with-cursor-and-claude-from-activity-7340189319359283200-q5x7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAVTiNMBpNDP79bxfn3OMmbW2Ppul0IwRww',
  },
  {
    id: 'hoa-buddy-gpt',
    title: 'Launching HOA Buddy: A Custom GPT for Navigating HOA Rules',
    excerpt: 'A custom GPT trained on local HOA documents and Florida law to provide homeowners with fast, accurate answers to their questions about rules, dues, and regulations.',
    content: '',
    date: '2025-05-22',
    readTime: '2 min read',
    tags: ['Custom GPT', 'GenAI', 'No-Code', 'Local AI', 'Real Estate'],
    published: true,
    source: 'internal',
    url: 'https://www.linkedin.com/posts/vladimir-bichev-383b1525_ai-customgpt-genai-activity-7337656023568015360-twiN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAVTiNMBpNDP79bxfn3OMmbW2Ppul0IwRww',
  },
  {
    id: 'shipping-gen-ai-product',
    title: 'What It Actually Takes to Ship a Gen-AI Product',
    excerpt: 'A practical case study on delivering a generative AI travel assistant using Claude, GPT-4o, Pinecone, and LangChain, covering architecture, prompt engineering, and governance at scale.',
    content: '',
    date: '2025-03-8',
    readTime: '5 min read',
    tags: ['GenAI', 'Product Management', 'Architecture', 'LangChain', 'LLM'],
    published: true,
    source: 'internal',
    url: 'https://www.linkedin.com/posts/vladimir-bichev-383b1525_epam-genai-llm-activity-7333683792634658817-urWW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAVTiNMBpNDP79bxfn3OMmbW2Ppul0IwRww',
  },
  // {
  //   id: 'scaling-ai-enterprise',
  //   title: 'Scaling AI to Enterprise: From Voya to Lonely Planet\'s 5M+ Users',
  //   excerpt: 'How I led the development and deployment of production AI systems that serve millions of users daily, sharing lessons from AWS Bedrock, LangChain, and vector search implementations.',
  //   content: '',
  //   date: '2024-12-15',
  //   readTime: '12 min read',
  //   tags: ['AI/ML', 'AWS Bedrock', 'Enterprise Scale', 'LangChain', 'Production AI'],
  //   published: true,
  //   source: 'internal',
  //   url: '#',
  // },

  {
    id: 'ai-market-summarizer',
    title: 'Automated Market Analysis: 1 Cent a Day to Save Hours of Searching',
    excerpt: 'How I built an automated system using OpenAI and Telegram to summarize stock/crypto trends from Reddit and X, delivering daily insights for less than a cent a day.',
    content: '',
    date: '2025-02-25',
    readTime: '2 min read',
    tags: ['OpenAI', 'Automation', 'Python', 'Stock Market', 'Crypto'],
    published: true,
    source: 'internal',
    url: 'https://www.linkedin.com/posts/vladimir-bichev-383b1525_stock-market-summit-activity-7288614390365343744-d1M3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAVTiNMBpNDP79bxfn3OMmbW2Ppul0IwRww',
  },

  // {
  //   id: 'agent-to-agent-interface',
  //   title: 'Beyond the UI: Designing Agent-to-Agent Interfaces',
  //   excerpt: 'Exploring the shift from human-facing UIs to machine-native interfaces for AI agents, covering CUAs vs. A2A, the Model Context Protocol (MCP), and predictions for Web 4.0.',
  //   content: '',
  //   date: '2025-04-10',
  //   readTime: '3 min read',
  //   tags: ['AI Agents', 'MCP', 'Web 4.0', 'Architecture', 'Future of Tech'],
  //   published: true,
  //   source: 'internal',
  //   url: 'https://www.linkedin.com/posts/vladimir-bichev-383b1525_epam-a2a-agenticai-activity-7335418567124832256-qwPO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAVTiNMBpNDP79bxfn3OMmbW2Ppul0IwRww',
  // },



  // {
  //   id: 'real-time-ai-roku',
  //   title: 'Building Real-Time AI at Roku Scale: 5M+ Devices, Sub-100ms Latency',
  //   excerpt: 'Technical deep-dive into architecting AI-powered ad forecasting systems that process millions of transactions per second with Apache Spark MLlib and AWS EMR.',
  //   content: '',
  //   date: '2024-10-10',
  //   readTime: '15 min read',
  //   tags: ['Apache Spark', 'Real-time AI', 'AWS EMR', 'Machine Learning', 'Scale'],
  //   published: true,
  //   source: 'internal',
  //   url: '#',
  // },
  // {
  //   id: 'blockchain-banking',
  //   title: 'Implementing Blockchain in Banking: From PoC to Production',
  //   excerpt: 'Case study of architecting Eastern Europe\'s largest bank\'s first blockchain identity management solution using IBM Hyperledger Fabric.',
  //   content: '',
  //   date: '2024-09-05',
  //   readTime: '8 min read',
  //   tags: ['Blockchain', 'IBM Hyperledger', 'Banking', 'Smart Contracts', 'Identity Management'],
  //   published: true,
  //   source: 'internal',
  //   url: '#',
  // },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'vl.bichev@gmail.com',
  location: 'Jacksonville, FL',
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vladimir-bichev-383b1525/',
      icon: 'FaLinkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Bichev',
      icon: 'FaGithub',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/_bichev',
      icon: 'FaTwitter',
    },
    {
      name: 'Email',
      url: 'mailto:vl.bichev@gmail.com',
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
    title: 'Sourdough Baker',
    description: 'I bake and sell sourdough bread at local farmers markets. The blend of science, patience, and craft is a perfect complement to my work in technology.',
    icon: 'FaBreadSlice',
    image: '/interests/baking.jpg',
  },
  {
    title: 'Endurance Runner',
    description: 'From 5K sprints to full marathons, I\'m passionate about the discipline and resilience of long-distance running. It\'s a powerful metaphor for tackling complex, long-term projects.',
    icon: 'FaRunning',
    image: '/interests/running.jpg',
  },
];

export const SKILLS = [
  'AI/ML Leadership',
  'AWS Bedrock/Claude AI',
  'LangChain/Vector Search',
  'Apache Spark MLlib',
  'Real-time Data Processing',
  'Enterprise Architecture',
  //'Team Scaling (10→150+ engineers)',
  // 'Revenue Generation ($15M+)',
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
  { name: 'Interests', href: '#interests' },
  { name: 'Contact', href: '#contact' },
]; 