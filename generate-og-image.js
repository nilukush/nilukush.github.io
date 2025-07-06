// Simple script to create a placeholder OG image
// For production, you'd want to create a proper 1200x630 image

const fs = require('fs');
const { createCanvas } = require('canvas');

// Check if canvas is installed
try {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');

  // Background
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, '#667eea');
  gradient.addColorStop(1, '#764ba2');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);

  // Text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 72px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Nilesh Kumar', 600, 200);
  
  ctx.font = '48px Arial';
  ctx.fillText('CEO & Technology Leader', 600, 280);
  
  ctx.font = '36px Arial';
  ctx.fillText('Building AI-Powered Solutions', 600, 380);
  ctx.fillText('15+ Years Enterprise Experience', 600, 440);

  // Save
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('./public/og-image.png', buffer);
  console.log('✅ OG image created successfully!');
} catch (error) {
  console.log('Canvas not installed. Creating placeholder instructions...');
  
  // Create a placeholder file with instructions
  const instructions = `# OG Image Required

Please create an image with these specifications:
- Size: 1200x630 pixels
- Format: PNG
- Content: Your name and title
- Save as: public/og-image.png

You can use:
1. Canva.com (free)
2. Figma (free)
3. Any image editor

Recommended design:
- Gradient background (#667eea to #764ba2)
- White text with your name and title
- Clean, professional layout
`;
  
  fs.writeFileSync('./public/og-image-instructions.txt', instructions);
  console.log('📝 Instructions created at public/og-image-instructions.txt');
  console.log('Please create your OG image manually.');
}