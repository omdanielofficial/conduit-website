// ===========================================
// ABOUT PAGE CONFIGURATION
// ===========================================

export const aboutConfig = {
  // ===================
  // PAGE HEADER
  // ===================
  hero: {
    title: "Building the Future of",
    highlight: "Game Hosting",           // This word will be highlighted
    subtitle: "We're gamers who got tired of unreliable servers, confusing panels, and slow support. So we built Latch, the hosting platform we always wanted.",
    backgroundImage: "/assets/hero_home.png",
    stats: [
      { label: "Active Servers", value: "50K+" },
      { label: "Global Locations", value: "12" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  
  // ===================
  // STORY SECTION
  // ===================
  story: {
    title: "Our Story",
    subtitle: "How we became the trusted choice for gaming communities worldwide",
    paragraphs: [
      "We have gone through various hosting providers over the years and saw that there was always something missing in every provider, whether it be reliability, performance, support, or just morals as a whole. Many providers use outdated hardware and the ones who do in fact use higher-end hardware consume lots of power and other resources, leaving behind a huge carbon footprint. Conduit was created as an all-in-one solution.",
      "Highest quality out there, treating customers like human beings instead of a number, no matter how large we get. These are the very baseline of core values that drive our success here at Conduit. We believe that if you do good for the world, the world does good for you - which is why we are committed to contributing 1% of our profits towards carbon removal and tree planting for a greener future.",
      "Our latest-gen Ryzen hardware, optimised specifically for Minecraft servers, has been deployed in optimal locations around the globe to keep your players' lag complaints at bay. Paired with the industry's leading DDoS protection along with our friendly and experienced support team, this is the way Minecraft servers were meant to be.",
      "This journey started with a passion for hosting and a desire to create something special. Here, it's not just about servers and bandwidth; it's about understanding your unique needs and goals. So, let's kickstart this adventure together. With us by your side, your dreams are in good hands.",
    ]
  },
  
  // ===================
  // VALUES SECTION
  // ===================
  // Icons: Rocket, Shield, Heart, Zap, Users, TrendingUp, Star, Check
  // Colors: blue, purple, pink, yellow, green, cyan, orange, red
  values: {
    title: "Our Values",
    subtitle: "The principles that guide everything we do",
    items: [
      { icon: "Rocket", title: "Performance First", description: "AMD Ryzen 9 7950X processors and DDR5 RAM ensure your server runs at peak performance 24/7.", color: "blue" },
      { icon: "Shield", title: "Security Always", description: "Enterprise-grade DDoS protection and daily backups keep your community safe and protected.", color: "purple" },
      { icon: "Heart", title: "Customer Obsessed", description: "Real humans providing real support. We're here for you every step of the way, anytime.", color: "pink" },
      { icon: "Zap", title: "Lightning Fast", description: "NVMe storage and premium network infrastructure ensure sub-second response times worldwide.", color: "yellow" },
      { icon: "Users", title: "Community Driven", description: "Built by gamers who understand what you need. Your feedback directly shapes our roadmap.", color: "green" },
      { icon: "TrendingUp", title: "Always Improving", description: "Continuous updates and new features. We're never satisfied with 'good enough'.", color: "cyan" }
    ]
  },
  
  // ===================
  // STATS SECTION
  // ===================
  // Icons: Server, Globe, Award, Clock, Users, Heart, Star
  // Colors: blue, purple, green, cyan, orange, pink, yellow
  stats: {
    title: "By the Numbers",
    subtitle: "Real stats from real servers",
    items: [
      { icon: "Server", value: "50,000+", label: "Active Servers", description: "Game servers running worldwide", color: "blue" },
      { icon: "Globe", value: "120+", label: "Countries", description: "Communities we serve globally", color: "purple" },
      { icon: "Award", value: "99.9%", label: "Uptime SLA", description: "Guaranteed reliability", color: "green" },
      { icon: "Clock", value: "24/7", label: "Support", description: "Always here when you need us", color: "cyan" }
    ]
  }
};
