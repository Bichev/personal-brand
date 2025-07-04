# Vladimir Bichev - Personal Brand Website

A modern, responsive personal website built with Next.js 15, TypeScript, and Tailwind CSS, showcasing AI/LLM development expertise and thought leadership.

## ✨ Features

- **Modern Design**: Clean, professional UI with dark/light mode toggle
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations and transitions
- **Accessible**: Built with semantic HTML and ARIA labels
- **SEO Optimized**: Comprehensive meta tags and structured data
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized for Core Web Vitals

## 🚀 Sections

1. **Hero Section**: Name, tagline, photo, and social links
2. **About Me**: Career story, highlights, and technical skills
3. **Featured Projects**: Showcase of AI/LLM projects with live demos
4. **Blog/Insights**: Latest articles and thought leadership content
5. **Contact**: Multiple ways to connect and collaborate

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
personal-brand/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Main page
│   ├── components/             # React components
│   │   ├── ThemeProvider.tsx   # Dark/light mode context
│   │   ├── Navigation.tsx      # Navigation component
│   │   ├── HeroSection.tsx     # Hero section
│   │   ├── AboutSection.tsx    # About section
│   │   ├── ProjectsSection.tsx # Projects showcase
│   │   ├── BlogSection.tsx     # Blog/insights section
│   │   ├── ContactSection.tsx  # Contact section
│   │   ├── Button.tsx          # Reusable button component
│   │   └── Card.tsx            # Reusable card component
│   ├── lib/                    # Utility functions
│   │   ├── constants.ts        # App constants and data
│   │   └── utils.ts            # Helper functions
│   └── types/                  # TypeScript types
│       └── index.ts            # Type definitions
├── public/                     # Static assets
│   └── profile-photo.jpg       # Profile photo
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎨 Design Features

- **Color Scheme**: Professional blue and gray palette
- **Typography**: Inter font with improved readability
- **Components**: Reusable, accessible UI components
- **Animations**: Smooth hover effects and scroll animations
- **Responsive**: Mobile-first approach with breakpoints
- **Theme Support**: System preference detection with manual toggle

## 📊 Content Highlights

### Featured Projects
- **AssetRadars.com**: Cryptocurrency market analysis platform
- **Ask Reddit AI**: AI-powered Reddit discussion analyzer
- **Coinbase MCP**: Model Context Protocol integration
- **AI Automation Suite**: Productivity automation tools

### Technical Skills
- JavaScript/TypeScript, React/Next.js, Node.js
- AI/LLM Integration, OpenAI API
- Database technologies (MongoDB, PostgreSQL)
- Cloud platforms and DevOps
- Technical leadership and architecture

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/vladimirbi/personal-brand.git
cd personal-brand
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open in browser**
Visit [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Edit `src/lib/constants.ts` to update:
- Personal details and bio
- Project information
- Blog posts and articles
- Social media links
- Contact information

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in components
- Customize color scheme in CSS variables

### Content
- Replace `public/profile-photo.jpg` with your photo
- Update project descriptions and links
- Add your own blog posts and articles
- Modify social media profiles

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Performance

- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component
- **Font Loading**: Optimized Google Fonts integration
- **Bundle Size**: Minimized with tree shaking

## 🌐 SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card support
- Structured data for rich snippets
- Sitemap and robots.txt ready
- Semantic HTML structure

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface
- Optimized for all screen sizes

## 🔒 Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus indicators

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Other Platforms
- Build: `npm run build`
- Deploy the `out` folder to your hosting provider

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/vladimirbi/personal-brand/issues).

## 📧 Contact

- **Email**: vl.bichev@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/vladimir-bichev-383b1525/](https://www.linkedin.com/in/vladimir-bichev-383b1525/)
- **GitHub**: [https://github.com/Bichev](https://github.com/Bichev)
- **Twitter**: [https://x.com/_bichevhttps://x.com/_bichev)

---

**Built with ❤️ by Vladimir Bichev**
