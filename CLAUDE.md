# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a static portfolio website hosted on GitHub Pages. Built with Vite, using vanilla HTML/CSS/JavaScript with modern build optimization.

## Common Commands

```bash
# Install dependencies (required first time)
npm install

# Local development with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages (automatic via GitHub Actions)
git push origin master

# Run linting
npm run lint

# Format code
npm run format
```

## Architecture

**Technology Stack:**
- Pure HTML/CSS/JavaScript (no frameworks)
- Vite for build optimization and dev server
- GitHub Actions for CI/CD deployment
- Formspree for contact form handling
- GitHub Pages for hosting
- CSS custom properties for theming
- PostCSS for CSS processing
- ESLint + Prettier for code quality

**Key Files:**
- `index.html` - Main portfolio page entry point
- `src/styles/main.css` - Main styles with imports
- `src/scripts/main.js` - JavaScript functionality as ES6 module
- `vite.config.js` - Build configuration
- `.github/workflows/deploy.yml` - GitHub Actions deployment
- `public/` - Static assets served directly

**Content Sections:**
1. Hero/Header with social links
2. About section with skills grid
3. Current role highlight (Zenith AI)
4. Experience timeline
5. Projects showcase (commercial & open source)
6. Contact form with Formspree integration

## Development Guidelines

**CSS Architecture:**
- CSS variables defined in `:root` for colors and spacing
- Mobile-first responsive design
- Utility classes for common patterns

**JavaScript Patterns:**
- IIFE for form validation to avoid global scope
- Client-side validation with server-side fallback
- Anti-bot measures (honeypot, submission timing)

**Deployment:**
- Push to master branch triggers GitHub Actions workflow
- Automatic build and deployment to GitHub Pages
- Site available at https://nilukush.github.io
- No manual build steps required

**Form Configuration:**
- Formspree endpoint: https://formspree.io/f/xpwreoaq
- Honeypot field: `_gotcha`
- Reply-to field: `_replyto`