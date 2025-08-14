#!/bin/bash

# KYC Dashboard Static Export Script
# This script builds the application for static hosting (Netlify, Vercel, etc.)

set -e

echo "🚀 Starting KYC Dashboard Static Build..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

print_success "Node.js version check passed: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm."
    exit 1
fi

# Clean previous builds
print_status "Cleaning previous builds..."
npm run clean

# Install dependencies
print_status "Installing dependencies..."
npm ci

# Run linting (if available)
if npm run lint --silent 2>/dev/null; then
    print_status "Running linter..."
    npm run lint
    print_success "Linting completed successfully"
else
    print_warning "Linting not available, skipping..."
fi

# Build the application for static export
print_status "Building static application..."
npm run build:static

if [ $? -eq 0 ]; then
    print_success "Static build completed successfully"
else
    print_error "Static build failed"
    exit 1
fi

# Check deployment method
DEPLOYMENT_METHOD=${1:-"netlify"}

case $DEPLOYMENT_METHOD in
    "netlify")
        print_success "Static files ready for Netlify deployment!"
        print_status "📁 Upload the 'out/' folder to Netlify"
        print_status "🌐 Or drag and drop the 'out/' folder to Netlify dashboard"
        print_status "📋 Build command: npm run build:static"
        print_status "📋 Publish directory: out"
        ;;
    
    "vercel")
        if ! command -v vercel &> /dev/null; then
            print_error "Vercel CLI is not installed. Install it with: npm i -g vercel"
            exit 1
        fi
        
        print_status "Deploying to Vercel..."
        vercel --prod
        ;;
    
    "preview")
        print_status "Starting local preview server..."
        if ! command -v serve &> /dev/null; then
            print_status "Installing serve globally..."
            npm install -g serve
        fi
        
        print_success "Preview server starting..."
        print_status "The application will be available at: http://localhost:3000"
        serve out -p 3000
        ;;
    
    "github-pages")
        print_success "Static files ready for GitHub Pages!"
        print_status "📁 Upload the 'out/' folder contents to your gh-pages branch"
        print_status "🔧 Or use GitHub Actions for automatic deployment"
        ;;
    
    *)
        print_error "Unknown deployment method: $DEPLOYMENT_METHOD"
        print_status "Available methods: netlify, vercel, preview, github-pages"
        exit 1
        ;;
esac

print_success "🎉 Static build completed successfully!"

# Display useful information
echo ""
echo "📋 Build Summary:"
echo "================="
echo "Method: Static Export"
echo "Output: out/ folder"
echo "Build: ✅ Success"
echo "Status: 🟢 Ready for deployment"
echo ""
echo "📁 Files generated in 'out/' folder:"
ls -la out/ 2>/dev/null || echo "out/ folder not found"
echo ""
echo "📖 Deployment Options:"
echo "======================"
echo "🌐 Netlify: Drag & drop 'out/' folder to Netlify dashboard"
echo "⚡ Vercel: Run 'npm run deploy:vercel' or use Vercel dashboard"
echo "🐙 GitHub Pages: Push 'out/' contents to gh-pages branch"
echo "🔍 Preview: Run 'npm run preview' to test locally"
echo ""
echo "🔧 Useful Commands:"
echo "- Preview locally: npm run preview"
echo "- Clean build: npm run clean && npm run build:static"
echo "- Rebuild: npm run build:static"
echo ""

exit 0