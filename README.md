# KYC Dashboard

A modern, responsive KYC (Know Your Customer) management dashboard built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Dashboard**: Real-time data visualization with charts and metrics
- **Modern UI**: Clean, professional interface with rounded design elements
- **Functional Components**: Working tabs, date picker, and interactive elements
- **Data Visualization**: Bar charts, circular progress charts, and status cards
- **Mobile-First**: Optimized navigation and layout for mobile devices

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd kyc-dashboard
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Run Development Server
```bash
npm run dev
# or
yarn dev
```

### 4. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 📦 Build for Production

### Build for Static Deployment
```bash
npm run build:static
# or
yarn build:static
```

### Preview Static Build Locally
```bash
npm run preview
# or
yarn preview
```

## 🚀 Deployment

### Netlify (Recommended)
1. Build the static files: `npm run build:static`
2. Upload the `out/` folder to [Netlify](https://netlify.com)
3. Or use automatic deployment by connecting your Git repository

**Netlify Settings:**
- Build command: `npm run build:static`
- Publish directory: `out`
- Node version: 18

### Vercel
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### GitHub Pages
1. Build the static files: `npm run build:static`
2. Push the `out/` folder contents to your `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Manual Static Hosting
1. Run: `npm run build:static`
2. Upload the entire `out/` folder to any static hosting service
3. The `out/` folder contains all necessary files (like React's `dist` folder)

## 📁 Project Structure

```
kyc-dashboard/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Main dashboard page
│   ├── components/            # React components
│   │   ├── dashboard/         # Dashboard-specific components
│   │   │   ├── KYCStats.tsx
│   │   │   ├── KYCBarChart.tsx
│   │   │   ├── SolicitedChart.tsx
│   │   │   ├── CategoriesSection.tsx
│   │   │   ├── KYCStatusCards.tsx
│   │   │   ├── PANDataStats.tsx
│   │   │   ├── TimeRangeTabs.tsx
│   │   │   └── DatePicker.tsx
│   │   ├── Sidebar.tsx        # Navigation sidebar
│   │   └── TopNavbar.tsx      # Top navigation bar
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## 🎨 Technologies Used

- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Chart library for React
- **Heroicons** - Beautiful SVG icons
- **Lucide React** - Icon library

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=your_api_url_here
NEXT_PUBLIC_APP_NAME=KYC Dashboard
```

### Static Export Configuration
The project is configured for static export in `next.config.js`:
- Output: Static HTML/CSS/JS files
- Images: Unoptimized for static hosting
- Export directory: `out/` (similar to React's `dist/`)

### Tailwind Configuration
The project uses Tailwind CSS v4 with custom configurations in `tailwind.config.js`.

## 📊 Dashboard Components

### Main Features:
1. **KYC Statistics**: Overview of total KYCs with trend indicators
2. **Bar Chart**: Comparative analysis of Individual vs Non-Individual data
3. **Status Cards**: Real-time status tracking with interactive tabs
4. **Categories Progress**: Visual progress bars for different categories
5. **Circular Chart**: Multi-ring visualization for solicited data
6. **PAN Data Stats**: Detailed statistics with breakdowns

### Interactive Elements:
- **Time Range Tabs**: Today, This Month, Custom
- **Date Picker**: Full calendar interface
- **Category Filters**: Individual/Non-Individual toggles
- **Status Filters**: Today/Yesterday comparisons

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Next.js Image component
- **CSS Optimization**: Tailwind CSS purging
- **Bundle Analysis**: Built-in bundle analyzer
- **Responsive Images**: Optimized for all screen sizes

## 🐛 Troubleshooting

### Common Issues:

1. **Port Already in Use**
   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   # Or use different port
   npm run dev -- -p 3001
   ```

2. **Build Errors**
   ```bash
   # Clear cache and rebuild
   npm run clean
   npm run build:static
   ```

3. **Static Export Issues**
   ```bash
   # Check for dynamic routes or server-side features
   # Ensure all components are client-side compatible
   npm run build:static
   ```

4. **Netlify Deployment Issues**
   ```bash
   # Verify build settings:
   # Build command: npm run build:static
   # Publish directory: out
   # Node version: 18
   ```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Version History

- **v1.0.0** - Initial release with full dashboard functionality
- **v1.1.0** - Added mobile responsiveness
- **v1.2.0** - Enhanced UI with rounded design elements

---

**Built with ❤️ using Next.js and Tailwind CSS**