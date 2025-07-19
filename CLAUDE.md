# Portfolio Website - AI Assistant Guide

This guide helps AI assistants understand and work with this codebase effectively.

## Overview

Professional portfolio website for Nilesh Kumar, built with modern web standards and optimized for performance, accessibility, and SEO.

## Tech Stack

- **Frontend**: Vanilla HTML/CSS/JavaScript (ES6+)
- **Build Tool**: Vite 5 with PWA support
- **Deployment**: GitHub Pages via GitHub Actions
- **Styling**: PostCSS with autoprefixer, CSS custom properties
- **Form Handler**: Formspree
- **Code Quality**: ESLint + Prettier

## Project Structure

```
nilukush.github.io/
├── index.html              # Main HTML entry point
├── src/
│   ├── styles/
│   │   ├── main.css       # Primary styles with CSS variables
│   │   └── accessibility.css # WCAG compliance styles
│   └── scripts/
│       └── main.js        # Form validation and interactions
├── public/                 # Static assets
│   ├── *.png              # Favicons and images
│   ├── robots.txt         # SEO directives
│   └── site.webmanifest   # PWA manifest
├── .github/
│   └── workflows/
│       └── deploy.yml     # Automated deployment workflow
├── vite.config.js         # Build configuration with PWA
├── package.json           # Dependencies and scripts
└── .claude/               # Claude Code configuration
```

## Development Workflow

```bash
# Initial setup
npm install

# Development (hot reload at localhost:3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Code quality
npm run lint     # Check for issues
npm run format   # Auto-format code
```

## Key Configurations

### Vite Config Highlights
- PWA with service worker excluding subdirectories
- Compression (gzip & brotli)
- Legacy browser support
- CSP headers for security
- Optimized asset handling

### Accessibility Features
- WCAG 2.1 AA compliant colors
- Skip navigation link
- ARIA labels and landmarks
- Keyboard navigation support
- Screen reader optimizations
- Reduced motion support

### Performance Optimizations
- Minified and hashed assets
- Lazy loading considerations
- Optimized images
- CSS/JS code splitting
- Service worker caching

## Deployment Process

1. Push to `master` branch
2. GitHub Actions workflow triggers automatically
3. Builds with Vite
4. Deploys to GitHub Pages
5. Live at https://nilukush.github.io

## Important Details

### PWA Configuration
- Service worker scope: root domain only
- Excludes subdirectories (e.g., /article_saver/)
- Offline support for main site
- Icons configured for all platforms

### Form Integration
- Endpoint: https://formspree.io/f/xpwreoaq
- Client-side validation
- Honeypot spam protection
- Accessible error messages

### Browser Support
- Modern browsers (last 2 versions)
- Legacy support via @vitejs/plugin-legacy
- Progressive enhancement approach

## Common Tasks

### Update Content
- Edit `index.html` directly
- Styles in `src/styles/main.css`
- Scripts in `src/scripts/main.js`

### Add New Section
1. Add HTML structure in `index.html`
2. Add styles following existing patterns
3. Ensure accessibility compliance
4. Test responsive design

### Modify Theme
- Update CSS variables in `:root`
- Maintain WCAG color contrast ratios
- Test in different color modes

## Lighthouse Scores
- Performance: 100/100
- Accessibility: 96/100
- Best Practices: 96/100
- SEO: 100/100

## Guidelines

1. Maintain vanilla JS approach (no frameworks)
2. Preserve accessibility standards
3. Keep performance optimizations
4. Follow existing code patterns
5. Test on mobile devices
6. Verify PWA functionality doesn't interfere with subdirectories