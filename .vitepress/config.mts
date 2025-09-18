import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Fitness & Nutrition Guide",
  description: "Complete workout and nutrition plan for your fat loss goals",
  base: "/workout-md/",

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      { text: "Home", link: "/" },
      { text: "Nutrition", link: "/nutrition/meal-plan" },
      { text: "Fitness", link: "/fitness/workout-plan" },
      { text: "Guides", link: "/guides/equipment" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [{ text: "Overview", link: "/" }],
      },
      {
        text: "Fitness",
        items: [
          { text: "Workout Plan", link: "/fitness/workout-plan" },
          { text: "Baseline Assessment", link: "/fitness/baseline-assessment" },
          { text: "Exercise Guides", link: "/fitness/exercise-guides" },
        ],
      },
      {
        text: "Nutrition",
        items: [
          { text: "Meal Plan", link: "/nutrition/meal-plan" },
          { text: "Meal Ideas", link: "/nutrition/meal-ideas" },
        ],
      },
      {
        text: "Guides",
        items: [
          { text: "Progress Tracking", link: "/guides/tracking" },
          { text: "Equipment Guide", link: "/guides/equipment" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/hbarnett99/workout-md" },
    ],

    footer: {
      message: "Built with VitePress",
      copyright: "Copyright © 2025",
    },
  },
});
