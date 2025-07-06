# GitHub Pages Deployment Guide for Vite Portfolio

## Current Situation Analysis

Your portfolio is currently deployed using the **traditional GitHub Pages** method:
- Repository: `nilukush.github.io` (user site)
- Branch: `master` (serves from root)
- Method: Direct HTML file serving
- URL: https://nilukush.github.io

## Required Changes for Vite Deployment

Since you now have a Vite-based build system, you need to transition to a build-and-deploy workflow. Here are **TWO APPROACHES** - choose based on your preference:

---

## APPROACH 1: GitHub Actions (Recommended - Enterprise Standard)

This is the modern, automated approach used by enterprise teams.

### Step 1: Update Vite Configuration

Since this is a user/organization site (nilukush.github.io), no base path changes needed:

```javascript
// vite.config.js already has correct base: '/'
```

### Step 2: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 3: Configure GitHub Repository

1. Go to Settings → Pages
2. Under "Build and deployment" → "Source"
3. Select "GitHub Actions" (not "Deploy from a branch")

### Step 4: Push Changes

```bash
git add .
git commit -m "Configure GitHub Actions deployment for Vite"
git push origin master
```

---

## APPROACH 2: Build Locally + Deploy Branch (Simple Alternative)

If you prefer to control the build process locally:

### Step 1: Update deployment script

Create `deploy-vite.sh`:

```bash
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if deploying to custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# push to github pages
git push -f git@github.com:nilukush/nilukush.github.io.git main:gh-pages

cd -
```

Then configure GitHub Pages to deploy from `gh-pages` branch.

---

## CRITICAL DEPLOYMENT STEPS

### Before First Deployment:

1. **Install Dependencies Locally**
   ```bash
   npm install
   ```

2. **Test Build Locally**
   ```bash
   npm run build
   npm run preview
   ```

3. **Update .gitignore** (already done ✓)
   - Ensures `node_modules/` and `dist/` aren't committed

### Path Resolution Issues to Fix:

Your current HTML has absolute paths that need updating for Vite:

1. **CSS Path**: `/src/styles/main.css` → Vite will handle this
2. **JS Path**: `/src/scripts/main.js` → Vite will handle this
3. **Favicon paths**: Need to move to `public/` directory

### Required File Structure Changes:

```
nilukush.github.io/
├── public/           # Static assets (favicons, images)
│   ├── favicon.ico
│   ├── favicon-*.png
│   └── og-image.png
├── src/
│   ├── styles/
│   │   ├── main.css
│   │   └── accessibility.css
│   └── scripts/
│       └── main.js
├── index.html        # Entry point
├── package.json
├── vite.config.js
└── .github/
    └── workflows/
        └── deploy.yml  # If using GitHub Actions
```

### Move Static Assets:

```bash
# Create public directory
mkdir -p public

# Move all image assets
mv *.png *.ico public/ 2>/dev/null || true
```

### Update index.html paths:

```html
<!-- Change favicon paths from -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">

<!-- To -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<!-- Vite serves from public/ automatically -->
```

---

## POST-DEPLOYMENT CHECKLIST

After deployment, verify:

- [ ] Site loads at https://nilukush.github.io
- [ ] CSS styles are applied
- [ ] JavaScript functionality works
- [ ] Contact form submits properly
- [ ] All images/favicons load
- [ ] No console errors
- [ ] CSP headers are active
- [ ] Mobile responsive design works

## ROLLBACK PLAN

If issues occur, you can quickly rollback:

1. **GitHub Actions**: Revert the commit that added the workflow
2. **Manual Deploy**: Switch Pages source back to "Deploy from branch" → master

## MONITORING

Set up monitoring for your deployed site:

1. **GitHub Actions**: Check Actions tab for build status
2. **Uptime**: Use GitHub Pages built-in monitoring
3. **Performance**: Run Lighthouse CI in your workflow

---

## RECOMMENDED: Use GitHub Actions

This is the enterprise-standard approach because:
- ✅ Automated deployment on every push
- ✅ Clean separation of source and build
- ✅ CI/CD best practices
- ✅ No local build required
- ✅ Team collaboration friendly
- ✅ Rollback capabilities
- ✅ Build logs and debugging

The GitHub Actions approach is what major companies use for their static sites.