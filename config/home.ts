export const homeConfig = {
  // ===================
  // HERO SECTION
  // ===================
  hero: {
    backgroundImage: "/assets/games/minecraft_banner.png",
    
    // Title format: "Game server hosting built to [highlight], not impress."
    title: "Game server hosting built to",
    highlight: "scale",                    // The colored/highlighted word
    titleSuffix: ".",
    
    subtitle: "Spin up game servers in seconds on fast, reliable, and affordable infrastructure.",
    
    // Main button
    primaryCta: {
      text: "Get Started",
      href: "#pricing",                  // Use "#section" for same page, "/page" for other pages
    },
    
    // Stats shown in hero (max 3 recommended)
    stats: [
      { value: "99.95%", label: "Uptime" },
      { value: "100+", label: "Servers" },
      { value: "24/7", label: "Support" },
    ],
  },
  
  // ===================
  // FEATURES SECTION
  // ===================
  features: {
    title: "Why Choose Conduit?",
    description: "Everything you need to launch and scale with our game hosting",
    
    // Feature cards (6 recommended for best layout)
    // Colors: yellow, green, purple, blue, orange, cyan, brand
    // Icons: Find names at https://lucide.dev/icons
    items: [
      {
        title: "High Performance",
        description: "Enjoy lag-free gaming with our powerful servers. Optimised for performance, speed, and reliability.",
        color: "yellow",
        icon: "Zap",
      },
      {
        title: "Refund Guarantee",
        description: "Get a full refund within 48 hours of purchase if you change your mind. No questions asked.",
        color: "green",
        icon: "ShieldCheck",
      },
      {
        title: "Full Control",
        description: "Complete access to server files, modpacks, and configurations via our control panel.",
        color: "purple",
        icon: "Sliders",
      },
      {
        title: "Instant Setup",
        description: "Start hosting within a few moments after purchasing your game server with us.",
        color: "blue",
        icon: "RotateCw",
      },
      {
        title: "Human Support",
        description: "Our expert support team available around the clock to help you with all kinds of queries.",
        color: "orange",
        icon: "Headphones",
      },
      {
        title: "Global Network",
        description: "Deploy servers in multiple regions worldwide for optimal performance.",
        color: "cyan",
        icon: "Cloud",
      },
    ],
  },

  // ===================
  // PRODUCTS SECTION
  // ===================
  products: {
    title: "Need More Resources?",
    description: "High-performance hybrid dedicated servers for growing communities",
    
    // Product cards
    // Icons: Server, Globe, HardDrive (find more at lucide.dev/icons)
    items: [
      {
        icon: "Server",
        title: "Ryzen 9 9950X - 64GB",
        description: "Deliver ultra-smooth gameplay and low latency for growing gaming communities.",
        href: "/dedicated",
        iconColor: "text-cyan-400",
        iconBg: "bg-cyan-500/5",
        iconBorder: "border-cyan-500/20",
        startingPrice: "100",
      },
      {
        icon: "Server",
        title: "Ryzen 9 9950X - 128GB",
        description: "Run multiple high-performance game servers with ease, even under heavy player loads.",
        href: "/dedicated",
        iconColor: "text-purple-400",
        iconBg: "bg-purple-500/5",
        iconBorder: "border-purple-500/20",
        startingPrice: "130",
      },
      {
        icon: "Server",
        title: "Ryzen 9 9950X - 256GB",
        description: "Built for the most demanding workloads, with the capacity to support large-scale deployments.",
        href: "/dedicated",
        iconColor: "text-red-400",
        iconBg: "bg-purple-500/5",
        iconBorder: "border-purple-500/20",
        startingPrice: "220",
      },
    ],
  },
};
