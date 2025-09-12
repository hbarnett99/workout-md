# Fitness & Nutrition Guide

A comprehensive VitePress documentation site containing a complete workout and nutrition plan designed for wham af.

## 🎯 Features

- **Complete Meal Plan**: 2,100 calorie daily plan targeting 30% → 17% body fat reduction
- **Enhanced Workout Plan**: 6-day hybrid routine for strength, conditioning, and sports performance  
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
│   └── workout-plan.md        # Enhanced 6-day workout routine
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
- **6-Day Routine**: Strength training + conditioning
- **Progressive Overload**: Systematic progression guidelines
- **Sports Integration**: Tennis, golf, and climbing optimization

### Guides & Resources
- **Equipment**: Kitchen and gym equipment maximization
- **Tracking**: Apps and monitoring protocols
- **Safety**: Health guidelines and injury prevention

## 📈 Goals & Timeline

- **Primary Goal**: 30% → 17% body fat (13% reduction)
- **Timeline**: 4 months (September → January)  
- **Approach**: Caloric deficit + increased training volume
- **Sports Focus**: Tennis, golf, and climbing performance

## 🤝 Contributing

This is a personal fitness plan, but feel free to fork and adapt for your own goals!

## 📄 License

MIT License - Feel free to use and modify for personal use.
