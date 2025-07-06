# Favicon Setup Instructions

## Quick Setup

1. **Open the favicon generator** in your browser:
   ```bash
   open generate-favicon.html
   ```

2. **Download the generated favicons**:
   - The page will automatically generate 5 different favicon sizes
   - Click each download link to save the files to your repository root

3. **Required files**:
   - `favicon-16x16.png` - Standard browser favicon
   - `favicon-32x32.png` - High DPI browser favicon
   - `apple-touch-icon.png` - iOS home screen icon
   - `android-chrome-192x192.png` - Android icon
   - `android-chrome-512x512.png` - Android splash screen

4. **Verify the files are in place**:
   ```bash
   ls -la *.png
   ```

5. **Commit and deploy**:
   ```bash
   git add *.png index.html
   git commit -m "Add favicon and social media meta tags"
   git push origin master
   ```

## Alternative: Create Favicons Online

If you prefer, you can use these online tools:
1. **favicon.io**: https://favicon.io/favicon-generator/
   - Text: "NK"
   - Font: Roboto
   - Font size: 110
   - Background: Circle
   - Background color: #2563eb
   - Text color: #FFFFFF

2. **realfavicongenerator.net**: https://realfavicongenerator.net/
   - Upload a 512x512 PNG with "NK" logo
   - Generates all required sizes and meta tags

## Testing Your Favicon

After deployment, test your favicon:
1. Clear browser cache (Cmd+Shift+R on Mac)
2. Visit https://nilukush.github.io
3. Check browser tab for favicon
4. Add to home screen on mobile to test touch icons

## Troubleshooting

If favicon doesn't appear:
1. Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Check Network tab in DevTools for 404 errors
3. Ensure files are in repository root (not in subdirectory)
4. Wait 5-10 minutes for GitHub Pages cache to update

## Social Media Preview

The meta tags also enable rich previews when sharing on:
- LinkedIn
- Twitter
- Facebook
- Slack
- WhatsApp

For the social media image (og-image.png), create a 1200x630px image with your name and title.