// ===========================================
// MINIMAL GAME TEMPLATE - BARE MINIMUM!
// ===========================================
// This is the absolute minimum needed to create a game page.
// Copy this file, fill in the blanks, and you're done!

import type { GameConfig } from "./types";

export const YOUR_GAME_NAMEConfig: GameConfig = {
  // ===== BASIC INFO =====
  id: "YOUR_GAME_ID",                          // Example: "rust"
  name: "YOUR_GAME_NAME",                      // Example: "Rust"
  slug: "YOUR_GAME_SLUG",                      // Example: "rust"
  tagline: "YOUR TAGLINE",
  description: "YOUR DESCRIPTION",
  
  // ===== IMAGES =====
  logo: "/assets/games/hytale_logo.webp",//sample image
  heroImage: "/assets/hero_home.png", //sample image
  heroLogo: "default",
  
  // ===== HERO =====
  heroTitle: "YOUR_GAME_NAME hosting built to",
  heroHighlight: "perform",                    // This word gets highlighted
  heroSubtitle: "Your subtitle here",
  
  stats: [
    { label: "Uptime", value: "99.9%" },
  ],
  
  // ===== LOCATIONS =====
  regions: [
    {
      id: "us-east",
      name: "United States - East",
      location: "New York",
      flag: "https://hatscripts.github.io/circle-flags/flags/us.svg",
    },
  ],
  
  // ===== BILLING =====
  billingPeriods: [
    { id: "monthly", label: "Monthly" },
  ],
  
  // ===== SPECS =====
  planSpecs: [
    { id: "ram", label: "RAM", icon: "MemoryStick" },
  ],
  
  // ===== PLANS =====
  plans: [
    {
      id: "starter",
      name: "Starter",
      usp: "4GB",
      
      specs: {
        ram: "4GB",
      },
      
      pricing: {
        mode: "manual",
        prices: {
          "us-east": {
            monthly: 9.99,
          },
        }
      },
      
      features: [
        "DDoS Protection",
        "24/7 Support",
      ],
      
      purchaseUrls: {
        "us-east": {
          monthly: "https://billing.latch.gg/cart.php?a=add&pid=YOUR_PID",
        },
      },
    },
  ],
  
  // ===== FEATURES =====
  features: [
    {
      icon: "Zap",
      title: "Instant Setup",
      description: "Your server deploys in under 60 seconds",
      color: "yellow"
    },
  ],
  
  // ===== FAQS =====
  faqs: [
    {
      question: "How long does setup take?",
      answer: "Your server is deployed within 60 seconds."
    },
  ],
};
