// ===========================================
// COMPARISON TABLE CONFIGURATION
// ===========================================
// This shows a feature comparison table (You vs Competitors)

export const comparisonConfig = {
  // ===================
  // SECTION HEADER
  // ===================
  section: {
    title: "Compare & Decide",
    description: "See how we stack up against the competition",
  },
  
  // ===================
  // CTA MESSAGE
  // ===================
  cta: {
    message: "Change your mind after ordering from us?",
    highlight: "Get a full refund within 48 hours!",     // This part will be highlighted
  },
  
  // ===================
  // PROVIDERS
  // ===================
  // First provider (with highlight: true) is shown as "You"
  // Add up to 4 providers total
  providers: [
    { id: "conduit", name: "Conduit", highlight: true },      // Your company
    { id: "apex", name: "Apex Hosting" },
    { id: "bisect", name: "Bisect Hosting" },
    { id: "shockbyte", name: "Shockbyte" }
  ],
  
  // ===================
  // FEATURE COMPARISON
  // ===================
  // true = has feature (green checkmark)
  // false = doesn't have feature (red X)
  features: [
    {
      category: "Key Features",
      items: [
        { name: "Ryzen 9 9950X CPUs", latch: true, competitor1: false, competitor2: false, competitor3: false },
        { name: "NeoProtect DDoS Protection", latch: true, competitor1: false, competitor2: false, competitor3: true },
        { name: "Affordable Pricing", latch: true, competitor1: false, competitor2: true, competitor3: false },
        { name: "Free Migration Service", latch: true, competitor1: false, competitor2: false, competitor3: false },
        { name: "Will Make You Smile 😊", latch: true, competitor1: false, competitor2: false, competitor3: false }
      ]
    }
  ]
};
