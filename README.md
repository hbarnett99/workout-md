# Fitness & Nutrition Guide

A comprehensive VitePress documentation site containing a complete workout and nutrition plan designed for wham af.

## 🎯 Features

- **BMR-Optimized Meal Plan**: Progressive calorie plan (2,400 → 2,200) targeting 20.3% → 15% body fat reduction
- **Enhanced Push/Pull/Legs Split**: Comprehensive routine with gym buddy integration and home backup options for accelerated fat loss  
- **Equipment Guides**: Maximize your kitchen and gym equipment
- **Progress Tracking**: Apps and tools for monitoring success
- **Sports-Specific Training**: Optimized for tennis, golf, and climbing

## 🚀 Live Site

Visit the deployed site: **https://hbarnett99.github.io/workout-md/**

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
workout-md/
├── nutrition/
│   └── meal-plan.md           # Complete meal planning guide
├── fitness/
│   └── workout-plan.md        # Enhanced Push/Pull/Legs workout routine
├── guides/
│   ├── equipment.md           # Equipment usage guide
│   └── tracking.md            # Progress tracking guide
├── .vitepress/
│   └── config.mts             # VitePress configuration
└── index.md                   # Homepage
```

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions:

1. **Push to main branch** triggers automatic deployment
2. **GitHub Actions** builds the VitePress site
3. **GitHub Pages** serves the built site

### Manual Deployment Steps

If you need to deploy manually:

1. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: "GitHub Actions"

2. **Push changes** to trigger deployment:
   ```bash
   git push origin main
   ```

3. **Monitor deployment** in the Actions tab

## 🔧 Configuration

### VitePress Config

Key configuration in `.vitepress/config.mts`:
- `base: "/workout-md/"` - GitHub Pages base path
- Navigation and sidebar structure
- Site metadata and theme settings

### GitHub Actions

The deployment workflow (`.github/workflows/deploy.yml`) handles:
- Node.js setup and dependency installation
- VitePress build process
- GitHub Pages deployment

## 📝 Content Organization

### Nutrition Section
- **Meal Plan**: Daily meal options with calorie breakdowns
- **Prep Strategy**: Weekly meal preparation guide
- **Shopping Lists**: Essential ingredients and tools

### Fitness Section
- **Push/Pull/Legs Split**: Strength training + conditioning with flexible scheduling
- **Progressive Overload**: Systematic progression guidelines
- **Sports Integration**: Tennis, golf, and climbing optimization

### Guides & Resources
- **Equipment**: Kitchen and gym equipment maximization
- **Tracking**: Apps and monitoring protocols
- **Safety**: Health guidelines and injury prevention

## 📈 Goals & Timeline

- **Primary Goal**: 20.3% → 15% body fat (5.3% reduction)
- **Timeline**: 3.5 months (September 2025 → January 2026)  
- **Approach**: Caloric deficit + increased training volume
- **Sports Focus**: Tennis, golf, and climbing performance

## 🤝 Contributing

This is a personal fitness plan, but feel free to fork and adapt for your own goals!

## 📄 License

MIT License - Feel free to use and modify for personal use.
