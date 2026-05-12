// =====================================================================
// GAME CONFIGURATION TYPES
// =====================================================================
// These TypeScript interfaces define the structure for all game server
// configurations. Used by minecraft.ts, fivem.ts, hytale.ts, etc.

// =====================================================================
// BILLING PERIODS
// =====================================================================
/**
 * Supported billing periods for game server plans.
 * Common periods: monthly, quarterly, annual
 * Flexible periods: hourly, daily, weekly for short-term hosting
 * Special: lifetime for one-time payment plans
 */
export type BillingPeriod = 
  | "hourly"
  | "daily" 
  | "weekly"
  | "monthly"
  | "quarterly"
  | "semi-annual"
  | "annual"
  | "lifetime"
  | string;  // Allows custom periods if needed

// =====================================================================
// GAME REGION
// =====================================================================
/**
 * Defines a server location/region where game servers can be deployed.
 * Each region can have different pricing via regionMultipliers.
 */
export interface GameRegion {
  id: string;                 // Unique identifier (e.g., "us-east", "eu-west")
  name: string;               // Display name (e.g., "US East")
  location: string;           // Specific location (e.g., "New York, USA")
  flag: string;               // Country/region flag emoji (e.g., "🇺🇸")
}

// =====================================================================
// PLAN PRICING
// =====================================================================
/**
 * Flexible pricing system that supports two modes:
 * 
 * 1. MANUAL MODE: Define exact prices for each region/period combination
 *    - Use 'prices' object with nested region and period prices
 *    - Example: prices["us-east"]["monthly"] = 9.99
 * 
 * 2. AUTO MODE: Define base price and apply multipliers
 *    - Set 'basePrice' as the starting point (usually monthly)
 *    - Apply 'regionMultipliers' for location-based pricing
 *    - Apply 'periodMultipliers' for billing period discounts
 *    - Final price = basePrice * regionMultiplier * periodMultiplier
 *    - Example: $10 base * 1.2 (EU) * 0.9 (annual) = $10.80
 */
export interface PlanPricing {
  mode: "manual" | "auto";    // Pricing calculation mode
  
  // --- MANUAL MODE ONLY ---
  prices?: {
    [regionId: string]: {
      [period in BillingPeriod]?: number;
    };
  };
  
  // --- AUTO MODE ONLY ---
  basePrice?: number;         // Base monthly price before multipliers
  regionMultipliers?: {       // Per-region price adjustments
    [regionId: string]: number;  // e.g., { "eu-west": 1.15, "asia": 1.25 }
  };
  periodMultipliers?: {       // Per-period price adjustments (discounts)
    hourly?: number;          // e.g., 1.5 (50% more expensive than base)
    daily?: number;           // e.g., 1.2
    weekly?: number;          // e.g., 1.1
    monthly?: number;         // e.g., 1.0 (base price)
    quarterly?: number;       // e.g., 0.95 (5% discount)
    "semi-annual"?: number;   // e.g., 0.90 (10% discount)
    annual?: number;          // e.g., 0.80 (20% discount)
    lifetime?: number;        // e.g., 12.0 (equivalent to 12 months)
  };
}

// =====================================================================
// GAME PLAN
// =====================================================================
/**
 * Represents a single hosting plan (e.g., "Starter", "Pro", "Enterprise").
 * Each plan has specifications, pricing, features, and purchase links.
 */
export interface GamePlan {
  id: string;                 // Unique identifier (e.g., "starter", "pro")
  name: string;               // Display name (e.g., "Minecraft Starter")
  description?: string;       // Short description of the plan
  
  specs: {                    // Plan specifications (RAM, CPU, slots, etc.)
    [specId: string]: string | number;  // e.g., { ram: "8GB", cpu: "4 Cores" }
  };
  
  pricing: PlanPricing;       // Pricing configuration (see PlanPricing interface)
  
  features: string[];         // List of included features
                              // e.g., ["DDoS Protection", "24/7 Support", "Automatic Backups"]
  
  purchaseUrls: {             // Direct purchase/order links per region and period
    [regionId: string]: {
      [period in BillingPeriod]?: string;
    };
  };
  
  popular?: boolean;          // Show "Most Popular" badge
  badge?: string;             // Custom badge text (e.g., "Best Value", "New")
  usp?: string;               // Unique selling point for this plan
}

// =====================================================================
// GAME FAQ
// =====================================================================
/**
 * Single FAQ item for the game-specific FAQ section.
 */
export interface GameFAQ {
  question: string;           // The question
  answer: string;             // The answer (supports basic markdown)
}

// =====================================================================
// GAME FEATURE
// =====================================================================
/**
 * Represents a feature/benefit of hosting this specific game.
 * Displayed in the "Why Choose [Game]?" section.
 */
export interface GameFeature {
  icon: string;               // Lucide icon name (e.g., "Zap", "Shield", "Database")
  title: string;              // Feature title (e.g., "DDoS Protection")
  description: string;        // Feature description
  color?: string;             // Icon color theme: yellow, green, blue, purple, cyan, orange, brand
}

// =====================================================================
// GAME STAT
// =====================================================================
/**
 * Quick stat displayed in the hero section.
 * Shows key metrics like uptime, player count, or speed.
 */
export interface GameStat {
  label: string;              // Stat label (e.g., "Uptime", "Players")
  value: string;              // Stat value (e.g., "99.9%", "10K+")
}

// =====================================================================
// GAME CONFIG (Main Configuration)
// =====================================================================
/**
 * Complete configuration for a single game server type.
 * This is the main configuration object that ties everything together.
 * 
 * Each game file (minecraft.ts, fivem.ts, etc.) exports one of these.
 */
export interface GameConfig {
  // --- BASIC INFO ---
  id: string;                 // Unique game ID (e.g., "minecraft", "fivem")
  name: string;               // Display name (e.g., "Minecraft", "FiveM")
  slug: string;               // URL slug (e.g., "minecraft" → /games/minecraft)
  tagline: string;            // Short marketing tagline
  description: string;        // Full description for SEO and cards
  
  // --- IMAGES & BRANDING ---
  logo: string;               // Game logo image path
  heroImage: string;          // Large hero background image
  
  // --- HERO SECTION ---
  heroTitle: string;          // First part of hero title (e.g., "Minecraft hosting built to")
  heroHighlight: string;      // Highlighted word (e.g., "perform")
  heroSubtitle: string;       // Hero subtitle text
  heroLogo?: string | "default" | false;  // Hero logo display option
                              // - "default": Use game logo
                              // - string path: Custom logo
                              // - false: No logo
  
  stats: GameStat[];          // Quick stats in hero (3-4 recommended)
  
  // --- LOCATIONS & BILLING ---
  regions: GameRegion[];      // Available server regions
  billingPeriods: {           // Available billing periods for this game
    id: BillingPeriod;        // Period ID (must match BillingPeriod type)
    label: string;            // Display label (e.g., "Monthly", "Annual")
    badge?: string;           // Badge text (e.g., "Best Value", "Most Popular")
  }[];
  
  // --- PLAN SPECIFICATIONS ---
  planSpecs: {                // Defines what specs are shown for plans
    id: string;               // Spec ID that matches GamePlan.specs keys
    label: string;            // Display label (e.g., "RAM", "CPU Cores")
    icon?: string;            // Lucide icon name (optional)
  }[];
  
  // --- PLANS & FEATURES ---
  plans: GamePlan[];          // All hosting plans for this game
  features: GameFeature[];    // Game-specific features (6 recommended)
  faqs: GameFAQ[];            // Frequently asked questions
  
  // --- OPTIONAL FLAGS ---
  note?: string;              // Special note/announcement about this game
}

// =====================================================================
// GAMES COLLECTION
// =====================================================================
/**
 * Collection of all game configurations indexed by slug.
 * Used by getGames() function to retrieve all games.
 */
export type GamesCollection = {
  [slug: string]: GameConfig;
};
