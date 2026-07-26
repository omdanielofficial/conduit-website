export const changelogsConfig = {
  // ===================
  // PAGE HEADER
  // ===================
  hero: {
    title: "",
    highlight: "Changelogs",                 // This word will be highlighted
    subtitle: "Track our latest features, improvements, and bug fixes. We're constantly evolving to make your hosting experience better.",
    backgroundImage: "/assets/hero_home.png",
    stats: [
//      { label: "Total Updates", value: "50+" },
//      { label: "This Month", value: "4" },
//      { label: "Features Added", value: "120+" },
    ],
  },
  
  // ===================
  // BADGE STYLES
  // ===================
  // These control the colors for each version type
  // major = big releases (2.0.0), minor = new features (2.1.0), patch = bug fixes (2.1.1)
  typeStyles: {
    major: { badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", card: "border-purple-500/20 bg-purple-500/5" },
    minor: { badge: "bg-blue-500/10 text-blue-400 border-blue-500/20", card: "border-blue-500/20 bg-blue-500/5" },
    patch: { badge: "bg-green-500/10 text-green-400 border-green-500/20", card: "border-green-500/20 bg-green-500/5" },
  },
  
  // ===================
  // VERSION HISTORY
  // ===================
  // Add newest versions at the top
  // Icons: Sparkles, TrendingUp, Wrench, Shield, Zap (find more at lucide.dev/icons)
  // Colors: blue, green, orange, purple, red, cyan
  versions: [


    {
      version: "Control Panel v1.0 Release",
      date: "15th May 2026",
      type: "major",
      changes: [
        {
          category: "New Features",
          icon: "Sparkles", 
          color: "blue",
          items: [
            "Added a variety of configuration features for Hytale servers.",
            "Implemented a subdomain management system in beta for a small number of servers.",
            "New API endpoints for server management automation.",
          ],
        },
        {
          category: "Improvements",
          icon: "TrendingUp",
          color: "green",
          items: [
            "Improved the panel UI for a better user experience.",
            "Backup creation speeds have been increased.",
          ],
        },
        {
          category: "Bug Fixes",
          icon: "Wrench",
          color: "orange",
          items: [
            "No bug fixes in this changelog.",
          ],
        },
        {
          category: "Discontinuations",
          icon: "AlertTriangle",
          color: "red",
          items: [
            "No discontinuations in this changelog.",
          ],
        },
      ],
    },

  ],
};
