# Portfolio Website - Technical Guide

This guide provides technical context for AI assistants when working with this codebase.

## Tech Stack

- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Build Tool**: Vite 5
- **Deployment**: GitHub Pages with Actions
- **Form Handler**: Formspree
- **CSS Processing**: PostCSS with autoprefixer
- **Code Quality**: ESLint + Prettier

## Project Structure

```
├── index.html          # Main entry point
├── src/
│   ├── styles/        # CSS modules
│   └── scripts/       # JavaScript modules
├── public/            # Static assets (favicons, images)
├── .github/workflows/ # Automated deployment
└── vite.config.js     # Build configuration
```

## Development Commands

```bash
npm install    # Install dependencies
npm run dev    # Start dev server (localhost:3000)
npm run build  # Build for production
npm run lint   # Check code quality
npm run format # Auto-format code
```

## Deployment

Push to `master` branch triggers automatic deployment via GitHub Actions.

## Key Features

- PWA-enabled with offline support
- WCAG 2.1 AA compliant
- CSP headers for security
- Optimized performance (100/100 Lighthouse)
- Responsive design

## Important Notes

- Contact form endpoint: https://formspree.io/f/xpwreoaq
- PWA configured to exclude subdirectories (for other GitHub Pages projects)
- Service worker scope limited to root domain