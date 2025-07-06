#!/usr/bin/env node

// This script creates a basic favicon.ico file
// Run with: node create-basic-favicon.js

const fs = require('fs');
const { createCanvas } = require('canvas');

// Function to create a simple NK favicon
function createFavicon() {
    const size = 32;
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Blue background
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(0, 0, size, size);
    
    // White text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('NK', size / 2, size / 2);
    
    // Save as PNG
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('favicon-32x32.png', buffer);
    console.log('✅ Created favicon-32x32.png');
    
    // Also create 16x16
    const canvas16 = createCanvas(16, 16);
    const ctx16 = canvas16.getContext('2d');
    ctx16.fillStyle = '#2563eb';
    ctx16.fillRect(0, 0, 16, 16);
    ctx16.fillStyle = 'white';
    ctx16.font = 'bold 10px Arial';
    ctx16.textAlign = 'center';
    ctx16.textBaseline = 'middle';
    ctx16.fillText('N', 8, 8);
    
    const buffer16 = canvas16.toBuffer('image/png');
    fs.writeFileSync('favicon-16x16.png', buffer16);
    console.log('✅ Created favicon-16x16.png');
}

// Check if canvas module is available
try {
    createFavicon();
} catch (error) {
    console.log('❌ Canvas module not installed.');
    console.log('To use this script, run: npm install canvas');
    console.log('\nAlternatively, use the generate-favicon.html file in your browser.');
}