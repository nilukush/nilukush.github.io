#!/bin/bash

echo "Deploying enhanced portfolio to nilukush.github.io..."
echo "=============================================="

cd /Users/nileshkumar/gh/nilukush.github.io

# Show current status
echo -e "\nCurrent status:"
git status

# Stage the changes
echo -e "\nStaging changes..."
git add index.html
# Add any favicon files if they exist
git add *.png 2>/dev/null || true
git add *.ico 2>/dev/null || true
git add generate-favicon.html 2>/dev/null || true

# Commit with descriptive message
echo -e "\nCommitting changes..."
git commit -m "Add favicon support and social media meta tags"

# Push to GitHub
echo -e "\nPushing to GitHub..."
git push origin master

echo -e "\n✅ Portfolio deployed successfully!"
echo "Visit https://nilukush.github.io in a few minutes to see your updated portfolio."
echo ""
echo "✅ Contact form is now integrated with Formspree!"
echo "Form endpoint: https://formspree.io/f/xpwreoaq"
echo ""
echo "Form features implemented:"
echo "- ✅ Spam protection with honeypot field"
echo "- ✅ Real-time form validation"
echo "- ✅ Bot protection (minimum 3-second submission time)"
echo "- ✅ Accessibility compliance (ARIA labels)"
echo "- ✅ Success/error feedback messages"
echo "- ✅ Progressive enhancement (works without JavaScript)"