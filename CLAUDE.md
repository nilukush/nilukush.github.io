# Portfolio Website - AI Assistant Guide

Professional portfolio website for Nilesh Kumar, built with modern web standards and optimized for performance, accessibility, and SEO.

## Quick Start
```bash
npm install
npm run dev      # Development at localhost:3000
npm run build    # Production build
npm run preview  # Preview production build
```

## Tech Stack
- **Frontend**: Vanilla HTML/CSS/JavaScript (ES6+)
- **Build Tool**: Vite 5 with PWA
- **Deployment**: GitHub Pages
- **Form Handler**: Formspree

## Key Files
- `index.html` - Main HTML structure
- `src/styles/main.css` - Primary styles
- `src/scripts/main.js` - Form validation
- `vite.config.js` - Build config with PWA

## Features
- PWA with service worker (root only, excludes subdirectories)
- WCAG 2.1 AA accessibility
- Lighthouse: 100/100 Performance, 96/100 Accessibility, 96/100 Best Practices, 100/100 SEO
- Responsive design
- Formspree contact form
- Company metrics and funding information in experience section

## Deployment
Push to `master` → GitHub Actions → GitHub Pages

## Guidelines
1. Maintain vanilla JS approach
2. Preserve accessibility standards
3. Keep performance optimizations
4. Test mobile responsiveness
5. Verify PWA doesn't interfere with subdirectories