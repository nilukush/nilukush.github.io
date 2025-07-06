# Quick Favicon Fix - Step by Step

## Option 1: Use the HTML Generator (Recommended)

1. **Open the generator in your browser:**
   ```bash
   cd ~/gh/nilukush.github.io
   open generate-favicon.html
   ```

2. **Save the favicon files:**
   - The page shows 5 different favicon sizes
   - Click each green download button
   - Save all files to the `nilukush.github.io` folder

3. **Deploy everything:**
   ```bash
   ./deploy-portfolio.sh
   ```

## Option 2: Quick Terminal Solution

Run these commands to create a simple text favicon:

```bash
cd ~/gh/nilukush.github.io

# Create a simple 32x32 favicon using ImageMagick (if installed)
convert -size 32x32 xc:'#2563eb' -fill white -font Arial-Bold -pointsize 18 \
  -gravity center -annotate +0+0 'NK' favicon-32x32.png

# Or use this one-liner to create a base64 favicon
echo 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKJSURBVFiFtZfPaxNBFMc/M5tNNtkmTdM0TWJtKkWKUEQPIoJ48uLBg4IH/4HePHjy5sGTeFDw4MWLeCiIKFSwiBYVRKRQpbRgtWmapk2TJrubZHdmPGyyTbLZ3W1SPjDMzrz3vu/7zbx582YFpRRbCWkrDx8DbgHXAQfQCmSBJPAJeA68Wm/wgD8InATGgSlgHggBMSAHmIA2oB04AOwBTgGDwJKu5+8BrwN3gC/rBF8aqvINuArsBpqr6XjA5UAQeFgFeC2IAA+BgGEOdAPPNhB8NXwBLgKtxQkt8B5YqJNRG8LAdaCpmOgCZraBqCiyQP/Kr0MvUaSBsVXJT/4A0OE00mI1oAK5vEpSSJJCUhQs0AUMr2pVRzx1WHiz5EMNOvCOBHHnLJzsGaElE8OdXiCXz5PKq9hMEs8K+D9DvA8nme8dhNQ7VkL6ARMmk4TLKGnL5eit9KDBF8ReqOiYU/B7OE3k2yNu5A6XcMsBm0ni0pFOBnpsxIsEhQKmXBpzNoU5m0TKpQEQisKaS2POJjGnF7Dk0iU6r72N3LQaaPDZ6Wux8ivlxXbuB5RCKQUoCCzrfUCJILHKvvM5yGaJCMnZJgG9dmEKOCwUBWs9UksopbA6jOzoauKTrQvfyRuohUhV3ax2T1oIRNKZygaDNgNNLgNWI2SFRBj0MayQiP8rOGJtJKQsLvVgCnDgZ8rJa8+P0vO6LYJfCzzIHawiIS7mXLitlQQ8wEsguGELdcIc0Cf1+sEisL8OZHqwD9inrwgcsJhQDxwCNO3dE/eEhyHXRkIBqRTCbkbYzCRtFmhzFbJKBQiL7vKHU8Aj4EVF7xqgA3D2l4BDwBFgEGjWsAilmBYSu1EiXqCkJjQNs+r/P2gLOb5VQ/4DRg7M6vy7BI8AAAAASUVORK5CYII=' | base64 -d > favicon-32x32.png

# Deploy
./deploy-portfolio.sh
```

## Option 3: Use Online Generator

1. Go to https://favicon.io/favicon-generator/
2. Enter text: **NK**
3. Choose:
   - Background: Circle
   - Background Color: #2563eb
   - Text Color: #FFFFFF
   - Font Family: Roboto
   - Font Size: 110
4. Download the ZIP file
5. Extract and copy these files to your repo:
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png
   - android-chrome-192x192.png
   - android-chrome-512x512.png

## Verification

After deploying, check if favicon appears:
1. Visit https://nilukush.github.io
2. Hard refresh: Cmd+Shift+R
3. Look for "NK" icon in browser tab

The favicon meta tags are already added to your index.html, so you just need to add the image files!