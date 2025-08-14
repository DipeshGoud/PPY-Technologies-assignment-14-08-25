#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying static build...\n');

const outDir = path.join(__dirname, 'out');
const requiredFiles = [
  'index.html',
  '_next/static',
];

const optionalFiles = [
  '404.html',
  'favicon.ico',
];

let allGood = true;

// Check if out directory exists
if (!fs.existsSync(outDir)) {
  console.error('❌ Error: out/ directory not found');
  console.log('💡 Run: npm run build:static');
  process.exit(1);
}

console.log('✅ out/ directory found');

// Check required files
requiredFiles.forEach(file => {
  const filePath = path.join(outDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} found`);
  } else {
    console.error(`❌ ${file} missing`);
    allGood = false;
  }
});

// Check optional files
optionalFiles.forEach(file => {
  const filePath = path.join(outDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} found`);
  } else {
    console.log(`⚠️  ${file} not found (optional)`);
  }
});

// Check file sizes
const indexPath = path.join(outDir, 'index.html');
if (fs.existsSync(indexPath)) {
  const stats = fs.statSync(indexPath);
  const sizeKB = Math.round(stats.size / 1024);
  console.log(`📊 index.html size: ${sizeKB}KB`);
  
  if (sizeKB < 1) {
    console.error('❌ index.html seems too small, build might have failed');
    allGood = false;
  }
}

// List all files in out directory
console.log('\n📁 Files in out/ directory:');
try {
  const files = fs.readdirSync(outDir);
  files.forEach(file => {
    const filePath = path.join(outDir, file);
    const stats = fs.statSync(filePath);
    const type = stats.isDirectory() ? 'DIR' : 'FILE';
    const size = stats.isDirectory() ? '' : `(${Math.round(stats.size / 1024)}KB)`;
    console.log(`  ${type}: ${file} ${size}`);
  });
} catch (error) {
  console.error('❌ Error reading out/ directory:', error.message);
  allGood = false;
}

console.log('\n' + '='.repeat(50));

if (allGood) {
  console.log('🎉 Build verification passed!');
  console.log('📤 Ready for deployment to Netlify, Vercel, or any static host');
  console.log('💡 Upload the entire out/ folder to your hosting service');
} else {
  console.error('❌ Build verification failed!');
  console.log('💡 Try running: npm run clean && npm run build:static');
  process.exit(1);
}

console.log('\n🚀 Deployment commands:');
console.log('  Netlify: Drag out/ folder to netlify.com/drop');
console.log('  Preview: npm run preview');
console.log('  Vercel:  npx vercel --prod');