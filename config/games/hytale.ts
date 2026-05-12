import type { GameConfig } from "./types";

export const hytaleConfig: GameConfig = {
  id: "hytale",
  name: "Hytale",
  slug: "hytale",
  tagline: "Hytale Hosting",
  description: "High-performance Hytale server hosting with unlimited player slots, NVMe storage, modding support, and more.",
  logo: "/assets/games/hytale_logo.webp",
  heroImage: "/assets/hero_home.png", //sample image
  heroTitle: "Hytale hosting",
  heroHighlight: "made simple",
  heroSubtitle: "Start your hytale adventure today. Enjoy seamless co-op gameplay, instant setup, full mod support, and 24/7 uptime with Hytale server hosting built for performance.",
  heroLogo: "",
  stats: [
    { label: "Uptime", value: "99.95%" },
    { label: "Servers", value: "100+" },
    { label: "Support", value: "24/7" },
  ],
  regions: [
    {
      id: "nyc",
      name: "New York City",
      location: "United States",
      flag: "https://hatscripts.github.io/circle-flags/flags/us.svg",
    },
    {
      id: "fra",
      name: "Frankfurt",
      location: "Germany",
      flag: "https://hatscripts.github.io/circle-flags/flags/de.svg",
    },
  ],
  billingPeriods: [
    {
      id: "monthly",
      label: "Monthly",
    },
    {
      id: "quarterly",
      label: "Quarterly",
      badge: "SAVE 10%"
    },
    {
      id: "annual",
      label: "Annually",
      badge: "SAVE 15%"
    },
  ],
  
  // ============================================
  // Plan Specification Fields
  // Define ONCE - applies to ALL plans for consistency!
  // ============================================
  planSpecs: [
    { id: "cpu", label: "CPU", icon: "Cpu" },
    { id: "ram", label: "Memory", icon: "MemoryStick" },
    { id: "storage", label: "Storage", icon: "HardDrive" },
  ],
  
  // ============================================
  // HOSTING PLANS - FULLY CUSTOMIZABLE!
  // Add/remove/modify fields as needed!
  // ============================================
  plans: [
    {
      id: "tessa",
      name: "Tessa",
      description: "Perfect for a few friends",
      popular: false,
      usp: "8GB",
      
      // Spec values - matches planSpecs defined above
      specs: {
        ram: "8GB DDR5",
        cpu: "Ryzen 9 9950X",
        storage: "80GB NVMe",
      },
      pricing: {
        mode: "manual",
        prices: {
          "nyc": {
            monthly: 16.00,
            quarterly: 14.40,
            annual: 13.60,
          },
          "fra": {
            monthly: 16.00,
            quarterly: 14.40,
            annual: 13.60,
          },
        }
      },
      
      features: [
        "Unlimited Player Slots",
        "3 Offsite Backups",
        "DDoS Protection",
      ],
      
      // UNIQUE PURCHASE URLs - Each region + period combo has its own URL!
      purchaseUrls: {
        "nyc": {
          monthly: "https://billing.latch.gg/cart.php?a=add&pid=801",
          quarterly: "https://billing.latch.gg/cart.php?a=add&pid=802",
          annual: "https://billing.latch.gg/cart.php?a=add&pid=803",
        },
        "fra": {
          monthly: "https://billing.latch.gg/cart.php?a=add&pid=809",
          quarterly: "https://billing.latch.gg/cart.php?a=add&pid=810",
          annual: "https://billing.latch.gg/cart.php?a=add&pid=811",
        },
      },
    },
    
    {
      id: "kyros",
      name: "Kyros",
      description: "Built for communities",
      usp: "12GB",
      
      specs: {
        ram: "12GB DDR5",
        cpu: "Ryzen 9 9950X",
        storage: "120GB NVMe",
      },
      
      // Pricing: MANUAL mode (set exact prices per region/period)
      pricing: {
        mode: "manual",
        prices: {
          "nyc": {
            monthly: 24.00,
            quarterly: 21.60,
            annual: 20.40,
          },
          "fra": {
            monthly: 24.00,
            quarterly: 21.60,
            annual: 20.40,
          },
        }
      },
      
      features: [
        "Unlimited Player Slots",
        "5 Offsite Backups",
        "DDoS Protection",
      ],
      
      purchaseUrls: {
        "nyc": {
          monthly: "https://billing.latch.gg/cart.php?a=add&pid=801",
          quarterly: "https://billing.latch.gg/cart.php?a=add&pid=802",
          annual: "https://billing.latch.gg/cart.php?a=add&pid=803",
        },
        "fra": {
          monthly: "https://billing.latch.gg/cart.php?a=add&pid=809",
          quarterly: "https://billing.latch.gg/cart.php?a=add&pid=810",
          annual: "https://billing.latch.gg/cart.php?a=add&pid=811",
        },
      },
    },
    
    {
      id: "varyn",
      name: "Varyn",
      description: "Ideal for larger servers",  
      popular: true,  // Mark as "Most Popular"
      badge: "MOST POPULAR",  
      usp: "16GB",      
      specs: {
        ram: "16GB DDR5",
        cpu: "Ryzen 9 9950X",
        storage: "160GB NVMe",
      },
      
      pricing: {
        mode: "manual",
        prices: {
          "nyc": {
            monthly: 32.00,
            quarterly: 28.80,
            annual: 27.20,
          },
          "fra": {
            monthly: 32.00,
            quarterly: 28.80,
            annual: 27.20,
          },
        }
      },
      
      features: [
        "Unlimited Player Slots",
        "5 Offsite Backups",
        "DDoS Protection",
      ],
      
      purchaseUrls: {
        "nyc": {
          monthly: "https://billing.latch.gg/cart.php?a=add&pid=801",
          quarterly: "https://billing.latch.gg/cart.php?a=add&pid=802",
          annual: "https://billing.latch.gg/cart.php?a=add&pid=803",
        },
        "fra": {
          monthly: "https://billing.latch.gg/cart.php?a=add&pid=809",
          quarterly: "https://billing.latch.gg/cart.php?a=add&pid=810",
          annual: "https://billing.latch.gg/cart.php?a=add&pid=811",
        },
      },
    },
  ],
  features: [
    {
      icon: "Zap",
      title: "Optimised Performance",
      description: "Custom-tuned servers specifically optimised for Hytale's engine. Maximum performance from day one.",
      color: "green" as const
    },
    {
      icon: "Shield",
      title: "Full Mod Support",
      description: "Complete modding capabilities built-in. Create custom adventures, mini-games, and unique experiences.",
      color: "purple" as const
    },
    {
      icon: "Users",
      title: "Community Tools",
      description: "Built-in Discord integration, web panel, and community management tools designed for Hytale servers.",
      color: "orange" as const
    },
  ],
  faqs: [
    {
      question: "When will Hytale be released?",
      answer: "Hytale's official release date hasn't been announced yet. By pre-ordering now, you lock in exclusive pricing and will be ready the moment the game launches."
    },
    {
      question: "Do I pay now or when Hytale launches?",
      answer: "You only pay when Hytale officially releases. Pre-ordering simply reserves your spot and locks in your early bird pricing."
    },
    {
      question: "Can I cancel my pre-order?",
      answer: "Absolutely! You can cancel your pre-order at any time before Hytale launches with no penalty or fees."
    },
    {
      question: "Is the price really locked for life?",
      answer: "Yes! Your early bird pricing is guaranteed for life. Even if we raise prices in the future, your rate stays the same as long as you remain a customer."
    },
    {
      question: "Will I have access to beta servers?",
      answer: "If Hytale releases beta servers, pre-order customers will receive priority access to test and configure their servers before the official launch."
    },
  ],
  note: "Hytale is currently in early access after releasing in January 2026.",
};
