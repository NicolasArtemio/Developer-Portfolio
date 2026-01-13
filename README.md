# Nicolás Dume - Fullstack Developer Portfolio

A modern, responsive portfolio website showcasing fullstack development skills with a focus on clean architecture, exceptional user experiences, and performance optimization.

## 🚀 Project Overview

This portfolio serves as a professional showcase for Nicolás Dume, highlighting expertise in React, TypeScript, and NestJS. The site features a bilingual interface (English/Spanish), dark/light theme support, and smooth animations to create an engaging user experience. Built with modern web technologies, it demonstrates best practices in frontend development, accessibility, and SEO optimization.

## ✨ Key Features & Highlights

- **Multilingual Support**: Full internationalization with English and Spanish translations using react-i18next
- **Theme System**: Seamless dark/light mode toggle with system preference detection
- **Responsive Design**: Mobile-first approach ensuring optimal experience across all devices
- **Smooth Animations**: Framer Motion powered animations with scroll-triggered reveals
- **Contact Integration**: Functional contact form powered by EmailJS
- **Skill Showcase**: Interactive skill cards displaying technical competencies
- **Project Gallery**: Showcase of development projects with detailed descriptions
- **References Section**: Professional testimonials and endorsements
- **Performance Optimized**: Lazy loading, code splitting, and optimized asset delivery

## 🛠 Tech Stack

### Frontend Framework
- **React 19** - Modern React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **CSS Custom Properties** - Dynamic theming system
- **Framer Motion** - Declarative animations and gestures
- **Lucide React** - Modern icon library
- **FontAwesome** - Additional iconography

### Functionality
- **react-i18next** - Internationalization framework
- **EmailJS** - Client-side email sending
- **Lenis** - Smooth scrolling library

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - Type-aware linting rules

## ⚡ Performance, SEO & Accessibility

### Performance Optimizations
- **Vite Build System**: Fast development and optimized production builds
- **Lazy Image Loading**: Progressive image loading with intersection observer
- **Code Splitting**: Automatic route-based and component-based splitting
- **Asset Optimization**: Compressed images and optimized fonts
- **Smooth Scrolling**: Hardware-accelerated scrolling with Lenis

### SEO Features
- **Meta Tags**: Comprehensive title, description, and keyword optimization
- **Open Graph**: Social media sharing optimization for Facebook/LinkedIn
- **Twitter Cards**: Enhanced Twitter sharing with large image previews
- **Structured Data**: JSON-LD schema markup for search engines
- **Sitemap Ready**: Clean URL structure optimized for crawlers

### Accessibility (A11Y)
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **ARIA Labels**: Screen reader friendly navigation and forms
- **Keyboard Navigation**: Full keyboard accessibility with focus management
- **Color Contrast**: WCAG compliant color schemes
- **Skip Links**: Quick navigation for screen readers
- **Theme Support**: Respects user's color scheme preferences

## 🏗 Setup & Local Development

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/NicolasArtemio/Developer-Portfolio.git
cd Developer-Portfolio

# Install dependencies
npm install
```

### Development
```bash
# Start development server with hot reload
npm run dev

# Open http://localhost:5173 in your browser
```

### Code Quality
```bash
# Run linting
npm run lint

# Type checking (included in build)
npm run build
```

## 📦 Build & Deployment

### Production Build
```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Deployment Options

**Static Site Hosting** (Recommended):
- **GitHub Pages**: Deploy directly from repository
- **Netlify**: Automated deployments with preview builds
- **Vercel**: Serverless deployment with edge functions

**Build Output**:
- Optimized static files in `dist/` directory
- Minified CSS and JavaScript
- Compressed images and assets
- Service worker ready for PWA features

## 📁 Folder Structure

```
Developer-Portfolio/
├── public/                    # Static assets
│   ├── perfil.png            # Profile image
│   └── *.svg                 # Icons and graphics
├── src/
│   ├── assets/               # Imported assets
│   ├── components/           # React components
│   │   ├── AboutMe.tsx       # About section
│   │   ├── Contact.tsx       # Contact form
│   │   ├── HeroSection.tsx   # Landing section
│   │   ├── Navbar.tsx        # Navigation
│   │   ├── ProjectsSection.tsx # Projects showcase
│   │   ├── SkillsSection.tsx # Skills display
│   │   └── ...
│   ├── locales/              # Translation files
│   │   ├── en/
│   │   └── es/
│   ├── theme/                # Theme system
│   │   ├── context.ts        # Theme context
│   │   ├── ThemeProvider.tsx # Theme provider
│   │   └── useTheme.ts       # Theme hook
│   ├── i18n.ts               # i18n configuration
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # App entry point
│   └── index.css             # Global styles
├── index.html                # HTML template with SEO meta tags
├── package.json              # Dependencies and scripts
├── vite.config.ts            # Vite configuration
└── tailwind.config.js        # Tailwind CSS configuration
```

## 🤝 Contributing

While this is a personal portfolio project, suggestions and improvements are welcome through GitHub issues.

## 📄 License

This project is private and proprietary.

## 📞 Contact

**Nicolás Dume**
- **Email**: nicolasartemiodume@gmail.com
- **LinkedIn**: [linkedin.com/in/nicolas-artemio-dume-626223371](https://www.linkedin.com/in/nicolas-artemio-dume-626223371/)
- **GitHub**: [github.com/NicolasArtemio](https://github.com/NicolasArtemio)
- **Portfolio**: [nicolasdume.dev](https://nicolasdume.dev)

---

*Built with ❤️ using React, TypeScript, and modern web technologies*
