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
        "3 Backup Slots",
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
        "5 Backup Slots",
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
        "5 Backup Slots",
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
      question: "Can you help me if I get stuck?",
      answer: "Our support team is available around the clock to assist you with whatever you may be struggling with on your Hytale server, whether it's installing a new mod that just won't work or if your server is crashing. You can rest easy knowing that no matter the time or day, we'll be here to help!"
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade or downgrade your game server plan at any time through your client account. We understand that circumstances change, and sometimes you might need a little bit more or a little bit less. Alternatively, you can also reach out to our support team to create a custom plan for any of our game servers to fit your needs."
    },
    {
      question: "Do you support mods and plugins?",
      answer: "Of course we do! All of our Hytale hosting plans have fully-functioning mod, modpack and plugin support, allowing you to craft the Hytale server of your dreams."
    },
    {
      question: "How long does setup take?",
      answer: "As soon as you purchase a server with us, you will receive an email with your login information to access your control panel. Just login, install a server version, and connect to your server!"
    },
    {
      question: "Will my server be online 24/7?",
      answer: "Yes, our Hytale servers run day and night, without going offline. Our Hytale servers are designed to operate 24/7 with maximum performance and reliability, ensuring a smooth gaming experience."
    },
  ],
  note: "Hytale is currently in early access - bugs and errors are common!",
};
