import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fitness & Nutrition Guide",
  description: "Complete workout and nutrition plan for fat loss and sports performance",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Nutrition', link: '/nutrition/meal-plan' },
      { text: 'Fitness', link: '/fitness/workout-plan' },
      { text: 'Guides', link: '/guides/equipment' }
    ],

    sidebar: [
      {
        text: 'Nutrition',
        collapsed: false,
        items: [
          { text: 'Meal Plan', link: '/nutrition/meal-plan' }
        ]
      },
      {
        text: 'Fitness',
        collapsed: false,
        items: [
          { text: 'Workout Plan', link: '/fitness/workout-plan' }
        ]
      },
      {
        text: 'Guides & Resources',
        collapsed: false,
        items: [
          { text: 'Equipment Guide', link: '/guides/equipment' },
          { text: 'Progress Tracking', link: '/guides/tracking' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
