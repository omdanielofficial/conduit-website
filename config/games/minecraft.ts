// ===========================================
// MINECRAFT GAME CONFIGURATION
// ===========================================
// To add a new game, copy this file and change the values
// See config/games/README.md for full documentation

import type { GameConfig } from "./types";

export const minecraftConfig: GameConfig = {
  // ===================
  // BASIC INFO
  // ===================
  id: "minecraft",                    // Unique ID (used internally)
  name: "Minecraft",                  // Display name
  slug: "minecraft",                  // URL slug (yoursite.com/games/minecraft)
  tagline: "Minecraft Hosting",
  description: "Premium Minecraft hosting with mod support, instant setup, and DDoS protection",
  logo: "/assets/games/minecraft_logo.webp",  // Path to logo (in /public folder)
  
  // ===================
  // HERO SECTION
  // ===================
  heroImage: "/assets/games/minecraft_banner.png", // Path to hero image (in /public folder)
  heroTitle: "Minecraft hosting",
  heroHighlight: "made simple",            // This word will be highlighted
  heroSubtitle: "Build your dream world with our powerful Minecraft server hosting. Enjoy uninterrupted adventures with full modpack support, powerful hardware, and instant setup.",
  heroLogo: "default",                // "default" uses the logo above, or provide a different URL
  stats: [
    { label: "Uptime", value: "99.95%" },
    { label: "Servers", value: "100+" },
    { label: "Support", value: "24/7" },
  ],
  
  // ===================
  // SERVER REGIONS
  // ===================
  // Flags: https://hatscripts.github.io/circle-flags/
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
  
  // ===================
  // BILLING PERIODS
  // ===================
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
  
  // ===================
  // PLAN SPECS (Table Headers)
  // ===================
  // Icons: MemoryStick, Cpu, HardDrive, Wifi, Users (find more at lucide.dev/icons)
  planSpecs: [
    { id: "cpu", label: "CPU", icon: "Cpu" },
    { id: "ram", label: "Memory", icon: "MemoryStick" },
    { id: "storage", label: "Storage", icon: "HardDrive" },
  ],
  
  // ===================
  // PRICING PLANS
  // ===================
  // popular: true - Highlights the plan
  // lifetime: price for lifetime purchase (null if not available)
  plans: [
    {
      id: "iron",
      name: "Iron",
      description: "Perfect for playing with friends",
      usp: "4GB",
      specs: {
        ram: "4GB DDR5",
        cpu: "Ryzen 9 9950X",
        storage: "40GB NVMe",
      },
      pricing: {
        mode: "manual",
        prices: {
          "nyc": {
            monthly: 6.00,
            quarterly: 5.40,
            annual: 5.10,
          },
          "fra": {
            monthly: 6.00,
            quarterly: 5.40,
            annual: 5.10,
          },
        }
      },
      
      features: [
        "Unlimited Player Slots",
        "3 Offsite Backups",
        "3 MySQL Databases",
        "DDoS Protection",
        "Java & Bedrock Editions",
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
      id: "gold",
      name: "Gold",
      description: "Great for small communities",
      popular: true,  // Mark as "Most Popular"
      badge: "MOST POPULAR",
      usp: "8GB",
      
      specs: {
        ram: "8GB DDR5",
        cpu: "Ryzen 9 9950X",
        storage: "80GB NVMe",
      },
      
      pricing: {
        mode: "manual",
        prices: {
          "nyc": {
            monthly: 12.00,
            quarterly: 10.80,
            annual: 10.20,
          },
          "fra": {
            monthly: 12.00,
            quarterly: 10.80,
            annual: 10.20,
          },
        }
      },
      
      features: [
        "Unlimited Player Slots",
        "3 Offsite Backups",
        "3 MySQL Databases",
        "DDoS Protection",
        "Java & Bedrock Editions",
      ],
      
      purchaseUrls: {
        "nyc": {
          monthly: "https://billing.latch.gg/cart.php?a=add&pid=901",
          quarterly: "https://billing.latch.gg/cart.php?a=add&pid=902",
          annual: "https://billing.latch.gg/cart.php?a=add&pid=903",
        },
        "fra": {
          monthly: "https://billing.latch.gg/cart.php?a=add&pid=909",
          quarterly: "https://billing.latch.gg/cart.php?a=add&pid=910",
          annual: "https://billing.latch.gg/cart.php?a=add&pid=911",
        },
      },
    },
    
    {
      id: "diamond",
      name: "Diamond",
      description: "For growing servers",
      usp: "12GB",
      specs: {
        ram: "12GB DDR5",
        cpu: "Ryzen 9 9950X",
        storage: "120GB NVMe",
      },
      
      pricing: {
        mode: "manual",
        prices: {
          "nyc": {
            monthly: 18.00,
            quarterly: 16.20,
            annual: 15.30,
          },
          "fra": {
            monthly: 18.00,
            quarterly: 16.20,
            annual: 15.30,
          },
        }
      },
      
      features: [
        "Unlimited Player Slots",
        "5 Offsite Backups",
        "5 MySQL Databases",
        "DDoS Protection",
        "Java & Bedrock Editions",
      ],
      
      purchaseUrls: {
        "nyc": {
          monthly: "https://billing.latch.gg/cart.php?a=add&pid=1001",
          quarterly: "https://billing.latch.gg/cart.php?a=add&pid=1002",
          annual: "https://billing.latch.gg/cart.php?a=add&pid=1003",
        },
        "fra": {
          monthly: "https://billing.latch.gg/cart.php?a=add&pid=1009",
          quarterly: "https://billing.latch.gg/cart.php?a=add&pid=1010",
          annual: "https://billing.latch.gg/cart.php?a=add&pid=1011",
        },
      },
    },
    
    {
      id: "netherite",
      name: "Netherite",
      description: "For established networks",
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
        "5 MySQL Databases",
        "DDoS Protection",
        "Java & Bedrock Editions",
      ],
      
      purchaseUrls: {
        "nyc": {
          monthly: "https://billing.latch.gg/cart.php?a=add&pid=1101",
          quarterly: "https://billing.latch.gg/cart.php?a=add&pid=1102",
          annual: "https://billing.latch.gg/cart.php?a=add&pid=1103",
        },
        "fra": {
          monthly: "https://billing.latch.gg/cart.php?a=add&pid=1109",
          quarterly: "https://billing.latch.gg/cart.php?a=add&pid=1110",
          annual: "https://billing.latch.gg/cart.php?a=add&pid=1111",
        },
      },
    },
  ],
  features: [
    {
      icon: "Zap",
      title: "Instant Setup",
      description: "Launch your Minecraft server in seconds with quick installation for all Java & Bedrock softwares.",
      color: "yellow" as const
    },
    {
      icon: "Shield",
      title: "DDoS Protection",
      description: "Enterprise-grade protection keeps your server online. Automatic attack mitigation with zero downtime.",
      color: "green" as const
    },
    {
      icon: "Download",
      title: "Modpack Support",
      description: "Install modpacks from CurseForge and Modrinth, or upload custom mods.",
      color: "blue" as const
    },
    {
      icon: "Database",
      title: "Offsite Backups",
      description: "Secure offsite backups with one-click restore. Never lose your builds or player data again.",
      color: "purple" as const
    },
    {
      icon: "Users",
      title: "Unlimited Slots",
      description: "No player limits. Host as many players as your server resources can handle with no hidden fees.",
      color: "cyan" as const
    },
    {
      icon: "Users",
      title: "Full SFTP Access",
      description: "Complete file access via SFTP and our web file manager. Full control over your server configuration.",
      color: "orange" as const
    },
  ],
  faqs: [
    {
      question: "Can you help me if I get stuck?",
      answer: "Our support team is available around the clock to assist you with whatever you may be struggling with on your Minecraft Server, whether it's installing a new mod that just won't work or if your server is crashing. You can rest easy knowing that no matter the time or day, we'll be here to help!"
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade or downgrade your game server plan at any time through your client account. We understand that circumstances change, and sometimes you might need a little bit more or a little bit less. Alternatively, you can also reach out to our support team to create a custom plan for any of our game servers to fit your needs."
    },
    {
      question: "Do you support mods and plugins?",
      answer: "Of course we do! All of our Minecraft hosting plans have fully-functioning mod, modpack and plugin support, allowing you to craft the Minecraft server of your dreams."
    },
    {
      question: "How long does setup take?",
      answer: "As soon as you purchase a server with us, you will receive an email with your login information to access your control panel. Just login, install a server version, and connect to your server!"
    },
    {
      question: "Will my server be online 24/7?",
      answer: "Yes, our Minecraft servers run day and night, without going offline. Our Minecraft servers are designed to operate 24/7 with maximum performance and reliability, ensuring a smooth gaming experience."
    },
  ],
};
