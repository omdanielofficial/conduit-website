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
      version: "2.4.0",
      date: "January 15, 2026",
      type: "major",
      changes: [
        {
          category: "New Features",
          icon: "Sparkles", 
          color: "blue",
          items: [
            "Introduced real-time server analytics dashboard with CPU, RAM, and network monitoring",
            "Added automated DDoS protection for all game servers",
            "Launched custom domain support for game servers",
            "New one-click modpack installer for Minecraft servers",
          ],
        },
        {
          category: "Improvements",
          icon: "TrendingUp",
          color: "green",
          items: [
            "Reduced server startup time by 40% across all regions",
            "Enhanced file manager with drag-and-drop upload support",
            "Improved backup compression reducing storage costs by 30%",
            "Updated control panel UI with better mobile responsiveness",
          ],
        },
        {
          category: "Bug Fixes",
          icon: "Wrench",
          color: "orange",
          items: [
            "Fixed issue where scheduled tasks wouldn't execute during high load",
            "Resolved FTP connection timeouts in EU regions",
            "Fixed console output display lag for rapidly updating logs",
          ],
        },
      ],
    },
    {
      version: "2.3.0",
      date: "December 20, 2025",
      type: "minor",
      changes: [
        {
          category: "New Features",
          icon: "Sparkles", 
          color: "blue",
          items: [
            "Added support for Palworld dedicated servers",
            "Introduced server cloning feature for easy testing",
            "New API endpoints for server management automation",
          ],
        },
        {
          category: "Improvements",
          icon: "TrendingUp",
          color: "green",
          items: [
            "Upgraded network infrastructure in Asia-Pacific region",
            "Enhanced database performance for faster queries",
            "Improved notification system with Discord webhooks",
          ],
        },
        {
          category: "Bug Fixes",
          icon: "Wrench",
          color: "orange",
          items: [
            "Fixed billing calculation error for prorated upgrades",
            "Resolved issue with automatic backups not triggering at scheduled times",
          ],
        },
      ],
    },
    {
      version: "2.2.0",
      date: "November 10, 2025",
      type: "minor",
      changes: [
        {
          category: "New Features",
          icon: "Sparkles", 
          color: "blue",
          items: [
            "Launched instant server migration between regions",
            "Added support for custom startup parameters",
            "New team collaboration features with role-based permissions",
          ],
        },
        {
          category: "Improvements",
          icon: "TrendingUp",
          color: "green",
          items: [
            "Optimized plugin management for Minecraft servers",
            "Enhanced security with two-factor authentication",
            "Improved server list filtering and search",
          ],
        },
        {
          category: "Bug Fixes",
          icon: "Wrench",
          color: "orange",
          items: [
            "Fixed rare crash during server restarts",
            "Resolved UI glitches in dark mode",
          ],
        },
      ],
    },
    {
      version: "2.1.0",
      date: "October 5, 2025",
      type: "minor",
      changes: [
        {
          category: "New Features",
          icon: "Sparkles", 
          color: "blue",
          items: [
            "Added dedicated Rust server hosting",
            "New scheduler for automated server restarts and backups",
            "Integrated server performance recommendations",
          ],
        },
        {
          category: "Improvements",
          icon: "TrendingUp",
          color: "green",
          items: [
            "Reduced latency in US-West region by 15%",
            "Enhanced crash detection and automatic recovery",
            "Improved customer support ticket system",
          ],
        },
        {
          category: "Bug Fixes",
          icon: "Wrench",
          color: "orange",
          items: [
            "Fixed memory leak in server monitoring service",
            "Resolved intermittent connection issues during peak hours",
          ],
        },
      ],
    },
    {
      version: "2.0.0",
      date: "September 1, 2025",
      type: "major",
      changes: [
        {
          category: "New Features",
          icon: "Sparkles", 
          color: "blue",
          items: [
            "Complete control panel redesign with modern UI/UX",
            "Launched new pricing tiers with better value",
            "Added support for 5 new game types",
            "Introduced referral program and rewards system",
          ],
        },
        {
          category: "Improvements",
          icon: "TrendingUp",
          color: "green",
          items: [
            "Migrated to new infrastructure with 50% better performance",
            "Enhanced security measures and compliance certifications",
            "Improved onboarding experience for new users",
          ],
        },
        {
          category: "Breaking Changes",
          icon: "AlertTriangle",
          color: "red",
          items: [
            "Legacy API v1 deprecated - migrate to API v2 by December 2025",
            "Old control panel will be sunset on October 1, 2025",
          ],
        },
      ],
    },
  ],
};
