#!/bin/bash

echo "Building and deploying Vite portfolio to GitHub Pages..."
echo "======================================================="

# Exit on error
set -e

# Build the project
echo "Building project with Vite..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed! dist directory not found."
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "📝 Build output:"
ls -la dist/

echo ""
echo "Next steps to deploy:"
echo "1. Commit and push all changes to master branch"
echo "2. GitHub Actions will automatically build and deploy"
echo "3. Go to Settings → Pages → Build and deployment"
echo "4. Select 'GitHub Actions' as the source"
echo "5. Your site will be live at https://nilukush.github.io"
echo ""
echo "To deploy manually now:"
echo "git add ."
echo "git commit -m 'Deploy Vite portfolio with GitHub Actions'"
echo "git push origin master"