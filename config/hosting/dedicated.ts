// ===========================================
// DEDICATED SERVERS PAGE CONFIGURATION
// ===========================================

export const dedicatedConfig = {
  // ===================
  // PAGE HEADER
  // ===================
  hero: {
    title: "Dedicated servers built",
    highlight: "to perform",           // This word will be highlighted
    subtitle: "Hybrid dedicated servers with isolated resources running on the latest AMD Ryzen 9 9950X series processors for ultimate performance and control.",
    backgroundImage: "/assets/hero_home.png",
    stats: [
      { label: "Uptime", value: "99.95%" },
      { label: "Servers", value: "100+" },
      { label: "Support", value: "24/7" },
    ]
  },
  
  // ===================
  // PLANS SECTION
  // ===================
  plansSection: {
    title: "Dedicated Servers",
    description: "Secure and scalable server configurations",
  },
  
  // ===================
  // CUSTOM CONFIGURATION
  // ===================
  customConfig: {
    title: "Need a custom configuration?",
    description: "Our team will build a dedicated server tailored to your exact specifications",
    buttonText: "Contact Us",
    buttonUrl: "/contact"
  },
  
  // ===================
  // FEATURES
  // ===================
  featuresSection: {
    title: "Why Choose Dedicated Servers?",
    description: "Unmatched performance and control for demanding workloads",
  },

  // Icons: Zap, Lock, Shield, HardDrive, Globe, Settings (find more at lucide.dev/icons)
  // Colors: yellow, green, blue, purple, cyan, orange
  // Note: Keep "as const" after color - it's required for TypeScript
  features: [
    { icon: "Zap", title: "Excellent Performance", description: "We only use the latest Ryzen 9 9950X processors for unparalleled server performance.", color: "yellow" as const },
    { icon: "Lock", title: "Full Root Access", description: "Complete control over your server. Install any software, configure any service, customise everything.", color: "green" as const },
    { icon: "Shield", title: "DDoS Protection", description: "Enterprise-grade DDoS mitigation with automatic detection and multi-layered filtering.", color: "blue" as const },
    { icon: "HardDrive", title: "NVMe Storage", description: "Ultra-fast NVMe SSD storage delivers ultimate speed compared to traditional SATA SSDs.", color: "purple" as const },
    { icon: "Globe", title: "Global Network", description: "Premium bandwidth with multiple 10 Gbps uplinks for low-latency global connectivity.", color: "cyan" as const },
    { icon: "Settings", title: "Isolated Resources", description: "All resources are isolated within a virtualised environment to ensure stability and scalability.", color: "orange" as const },
  ],
  
  // ===================
  // PRICING PLANS
  // ===================
  // popular: true - Highlights the plan with a "Most Popular" badge
  plans: [
    {
      name: "Ryzen 9 9950X - 64GB",
      processor: "AMD Ryzen 9 9950X",
      cores: "4.3 GHz - 5.7 GHz",
      ram: "64GB DDR5 ECC",
      storage: "1TB NVMe SSD",
      bandwidth: "Unmetered @ 10 Gbps",
      price: {
        monthly: 100,
        setup: 0
      },
      orderUrl: "#",
      features: [
        "Located in New York City, US",
        "DDoS Protection",
        "Linux & Windows",
        "Self-Managed Service",
        "99.95% Uptime",
        "Built for Game Hosting"
      ],
      popular: false
    },
    {
      name: "Ryzen 9 9950X - 128GB",
      processor: "AMD Ryzen 9 9950X",
      cores: "4.3 GHz - 5.7 GHz",
      ram: "128GB DDR5 ECC",
      storage: "2TB NVMe SSD",
      bandwidth: "Unmetered @ 10 Gbps",
      price: {
        monthly: 130,
        setup: 0
      },
      orderUrl: "#",
      features: [
        "Located in New York City, US",
        "DDoS Protection",
        "Linux & Windows",
        "Self-Managed Service",
        "99.95% Uptime",
        "Built for Game Hosting"
      ],
      popular: true
    }
  ],
  comparison: {
    title: "Dedicated Server Comparison",
    description: "See how our dedicated servers compare to shared game hosting",
    data: [
      {
        icon: "Cpu",
        iconColor: "text-blue-400",
        feature: "CPU Performance",
        dedicated: "Dedicated CPU cores for your server",
        vps: "Shared CPU usage with other users",
        dedicatedBetter: true
      },
      {
        icon: "MemoryStick",
        iconColor: "text-purple-400",
        feature: "RAM Allocation",
        dedicated: "Guaranteed ECC memory",
        vps: "Shared memory pool",
        dedicatedBetter: true
      },
      {
        icon: "HardDrive",
        iconColor: "text-green-400",
        feature: "Storage Type",
        dedicated: "NVMe Gen4 with RAID options",
        vps: "NVMe (shared I/O)",
        dedicatedBetter: true
      },
      {
        icon: "Network",
        iconColor: "text-cyan-400",
        feature: "Network",
        dedicated: "10 Gbps port speeds",
        vps: "Shared bandwidth",
        dedicatedBetter: true
      },
      {
        icon: "Lock",
        iconColor: "text-red-400",
        feature: "Root Access",
        dedicated: "Full operating system access",
        vps: "No root access",
        dedicatedBetter: true
      },
      {
        icon: "Target",
        iconColor: "text-pink-400",
        feature: "Purpose",
        dedicated: "Large game server networks & much more",
        vps: "Smaller game servers and communities",
        dedicatedBetter: true
      }
    ]
  }
};
