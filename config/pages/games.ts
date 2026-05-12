export const gamesPageConfig = {
  hero: {
    title: "Game server hosting",
    titleHighlight: "that works",
    description: "Premium game server hosting with instant setup, DDoS protection, and enterprise-grade hardware. Deploy in seconds.",
    backgroundImage: "/assets/hero_home.png",
    stats: [
      { label: "Uptime", value: "99.95%" },
      { label: "Servers", value: "100+" },
      { label: "Support", value: "24/7" },
    ],
  },

  // 📋 Games Grid Section
  grid: {
    title: "Available Games",
    description: "Select your favourite game from our collection",
  },

  // 📋 Don't See Your Game CTA
  requestGame: {
    title: "Don't see your game?",
    description: "Reach out to our team to request a custom configuration",
    buttonText: "Get in Touch",
    buttonLink: "/contact",
  },

  // 📋 Features Section
  featuresSection: {

  },

  // 📋 Feature Cards
  // Icons: Zap, Shield, Users, Clock (from lucide-react)
  // Colors: yellow, purple, blue, green, cyan, orange
  features: [

  ],
} as const;
