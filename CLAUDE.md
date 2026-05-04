# Nilesh Kumar - Portfolio Website

Single-page scroll site. Emerald #059669. Inter font. Mobile-first. WCAG 2.1 AA.

## Quick Start
```
npm install && npm run dev
npm run build && npm run preview
```

## Tech Stack
Vanilla HTML/CSS/JS (ES6+) | Vite 5.4.19 | GitHub Pages

## Architecture
7 sections: Hero, Executive Profile, Featured Work (4 case studies), Experience, Skills, Contact, Sticky Nav
Resume download via Dropbox link (nav CTA + hero CTA + contact download card)
"View All Roles" expandable for earlier roles (Paytm, Snapdeal, PayPal, BoA)

## Key Files
`index.html` — source of truth (never edit `dist/`)
`src/styles/main.css` — emerald theme, responsive
`src/styles/accessibility.css` — WCAG 2.1 AA
`src/scripts/main.js` — sticky nav, smooth scroll, expand/collapse (`type="module"`)
`public/NileshKumar.pdf` — resume download

## Deploy
Push to `master` → GitHub Actions → GitHub Pages. Remote: SSH

## Rules
1. Edit only `index.html` — `dist/` is auto-generated
2. Verify factual changes against PDF (not self-referencing HTML — see circular verification pitfall)
3. Scripts must use `type="module"` for Vite bundling
4. Resume data authority: `Nilesh_Kumar_Executive_Resume.md` in resume workspace
