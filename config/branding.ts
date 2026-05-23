// =====================================================================
// BRAND COLORS
// =====================================================================
// These colors are used throughout the site for buttons, accents, etc.
// Use hex color codes (e.g., #a855f7)
// cfg:abf66e8a2ff069c619152a59560a28d7

export const brandConfig = {
  color: "#75c4be",     // Your brand color (used for buttons, accents, highlights)
  text: "#ffffff",      // Text color on brand surfaces (use #ffffff for dark brands, #000000 for light brands)
};

// =====================================================================
// SITE INFO
// =====================================================================
// Basic info about your company
// 
// For SEO (page titles, descriptions, keywords), edit config/seo.ts

export const siteConfig = {
  name: "Conduit",
  copyright: `© ${new Date().getFullYear()} Conduit. All rights reserved.`,

  // Email addresses (used in footer, jobs, and partners pages)
  emails: {
    contact: "contact@conduithost.com",      // Footer contact email
    careers: "jobs@intranex.org",      // Jobs page email
    partners: "contact@conduithost.com",    // Partners page email
  },
};

// =====================================================================
// SOCIAL MEDIA
// =====================================================================
// Add your social media platforms here - used across the entire site
// (footer, contact page, etc.)
//
// Icon options:
// - Use a URL to PNG/SVG: "/icons/discord.svg" or "https://example.com/icon.png"
// - Or use built-in names: "discord", "twitter", "github", "facebook", 
//   "instagram", "youtube", "linkedin", "tiktok", "twitch"

export const socialLinks = [
  {
    name: "Discord",
    url: "https://discord.gg/conduit",
    icon: "discord",  // Built-in icon OR custom URL like "/icons/discord.svg"
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@conduithosting",
    icon: "youtube",
  },
  {
    name: "Twitter",
    url: "https://x.com/conduithosting",
    icon: "twitter",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/showcase/conduit-host",
    icon: "linkedin",
  },
  // Add more platforms as needed:
  // { name: "YouTube", url: "https://youtube.com/@latch", icon: "youtube" },
  // { name: "TikTok", url: "https://tiktok.com/@latch", icon: "tiktok" },
  // { name: "Instagram", url: "https://instagram.com/latch", icon: "instagram" },
  // { name: "LinkedIn", url: "https://linkedin.com/company/latch", icon: "linkedin" },
  // { name: "Twitch", url: "https://twitch.tv/latch", icon: "twitch" },
  // { name: "Facebook", url: "https://facebook.com/latch", icon: "facebook" },
  // { name: "Custom", url: "https://example.com", icon: "/icons/custom.svg" },
];

// =====================================================================
// NAVBAR
// =====================================================================
// Super simple navbar config - just add/remove items!

export const navbarConfig = {
  // Logo - Choose how your brand appears
  logo: {
    type: "image" as "text" | "image" | "both",  // "text" = just name, "image" = just logo, "both" = logo + name
    text: "Latch",                               // Your brand name
    image: "/logo.svg",                          // Path to logo (put in /public folder)
    imageSize: 120,                               // Logo size in pixels
  },

  // Navigation Links - Add as many as you want!
  // Each can be a simple link OR a dropdown with sub-items
  // 
  // Simple link:     { name: "About", href: "/about" }
  // With dropdown:   { name: "Games", href: "/games", dropdown: [...] }
  // Popular badge:   { name: "FiveM", href: "/games/fivem", popular: true }
  links: [
    { name: "Minecraft Hosting", href: "/games/minecraft" },
    { 
      name: "More Games", 
      href: "/games",
      dropdown: [
        { name: "Minecraft", href: "/games/minecraft", popular: true },
        { name: "Hytale", href: "/games/hytale" },
        { name: "Browse all games", href: "/games/" },
      ],
    },
    { 
      name: "Other Services", 
      dropdown: [
        { name: "Dedicated Servers", href: "/dedicated" },
      ],
    },
  ],

  // Right Side Buttons - Add as many as you need (or none!)
  // 
  // EXAMPLES:
  // 
  // Single login button (no dropdown):
  //   buttons: [
  //     { name: "Login", href: "https://billing.example.com", style: "primary" },
  //   ]
  // 
  // Two buttons:
  //   buttons: [
  //     { name: "Docs", href: "/docs", style: "ghost" },
  //     { name: "Login", href: "/login", style: "primary" },
  //   ]
  // 
  // Button with dropdown:
  //   buttons: [
  //     { name: "Login", style: "primary", dropdown: [
  //         { name: "Billing", href: "https://billing.example.com" },
  //         { name: "Panel", href: "https://panel.example.com" },
  //     ]},
  //   ]
  // 
  // Icon button:
  //   buttons: [
  //     { name: "Docs", href: "/docs", style: "icon", icon: "BookOpen" },
  //   ]
  // 
  // STYLES:
  //   "primary" = colored button (your brand color)
  //   "ghost"   = transparent button
  //   "icon"    = just an icon (icons: BookOpen, User, Settings, CreditCard, Server)
  buttons: [
    { 
      name: "Contact", 
      href: "/contact", 
      style: "icon" as const, 
      icon: "User" as const,
    },
    { 
      name: "Login", 
      style: "primary" as const,
      dropdown: [
        { name: "Billing Portal", href: "https://billing.conduithost.com", icon: "CreditCard" },
        { name: "Control Panel", href: "https://panel.conduithost.com", icon: "Settings" },
      ],
    },
  ],
};

// =====================================================================
// MOBILE MENU
// =====================================================================
// Simple sections for mobile navigation

export const mobileMenuConfig = {
  // Add as many sections as you want
  // featured: true = highlights the item
  sections: [
    {
      title: "Game Hosting",
      links: [
        { name: "Minecraft", href: "/games/minecraft" },
        { name: "Hytale", href: "/games/hytale" },
        { name: "Browse All Games", href: "/games", featured: true },
      ],
    },
    {
      title: "Other Services",
      links: [
        { name: "Dedicated Servers", href: "/dedicated" },
      ],
    },
  ],

  // Action buttons at bottom of mobile menu
  // Add 1, 2, or 3 - or none!
  buttons: [
    { name: "Billing Portal", href: "https://billing.conduithost.com" },
    { name: "Control Panel", href: "https://panel.conduithost.com" },
  ],
};

// =====================================================================
// FOOTER
// =====================================================================
// Simple footer configuration

export const footerConfig = {
  // Logo - same options as navbar
  logo: {
    type: "image" as "text" | "image" | "both" | "none",  // "none" = hide logo
    text: "Conduit",
    image: "/logo.svg",
    imageSize: 120,
    gradient: true,  // true = gradient text, false = solid color
  },

  description: "Spin up game servers in seconds on fast, reliable, and affordable infrastructure.",

  // Link columns - add as many columns as you want
  columns: [
    {
      title: "Services",
      links: [
        { name: "Minecraft Hosting", href: "/games/minecraft" },
        { name: "Hytale Hosting", href: "/games/hytale" },
        { name: "Game Hosting", href: "/games" },
        { name: "Dedicated Servers", href: "/dedicated" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Partner Program", href: "/partners" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Network Status", href: "https://status.conduithost.com" },
        { name: "Changelogs", href: "/changelogs" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
  ],

  // Bottom bar
  bottomLinks: [
//    { name: "Terms", href: "/terms" },
//    { name: "Privacy", href: "/privacy" },
//    { name: "Status", href: "https://status.latch.gg" },
  ],
  disclaimer: "Conduit is a trading name of Intranex Limited. Registered in England & Wales under CRN 16068461.",
};
