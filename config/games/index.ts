import { hytaleConfig } from "./hytale";
import { minecraftConfig } from "./minecraft";
//import more game configs here
import type { GameConfig, GamesCollection } from "./types";

export const allGames: GamesCollection = {
  minecraft: minecraftConfig,
  hytale: hytaleConfig,
  // Add more games here as needed
};

export const getGames = (): GameConfig[] => {
  return Object.values(allGames);
};

export const getGameBySlug = (slug: string): GameConfig | undefined => {
  return allGames[slug];
};

/**
 * Get all game slugs (for static path generation)
 */
export const getGameSlugs = (): string[] => {
  return Object.keys(allGames);
};


/**
 * Calculate price for a plan
 * Handles both auto and manual pricing modes
 */
export const calculatePlanPrice = (
  plan: GameConfig['plans'][0],
  regionId: string,
  billingPeriod: string
): number | null => {
  const pricing = plan.pricing;
  
  if (pricing.mode === "manual") {
    // Manual pricing - direct lookup
    return pricing.prices?.[regionId]?.[billingPeriod as any] ?? null;
  } else {
    // Auto pricing - calculate from base price and multipliers
    const basePrice = pricing.basePrice ?? 0;
    const regionMultiplier = pricing.regionMultipliers?.[regionId] ?? 1;
    const periodMultiplier = (pricing.periodMultipliers as any)?.[billingPeriod] ?? 1;
    
    return basePrice * regionMultiplier * periodMultiplier;
  }
};

/**
 * Get starting price for a game (lowest price across all plans/regions)
 */
export const getStartingPrice = (gameSlug: string): number => {
  const game = allGames[gameSlug];
  if (!game) return 0;
  
  let lowestPrice = Infinity;
  
  game.plans.forEach(plan => {
    game.regions.forEach(region => {
      // Check first billing period (usually monthly)
      const billingPeriod = game.billingPeriods[0]?.id ?? "monthly";
      const price = calculatePlanPrice(plan, region.id, billingPeriod);
      
      if (price !== null && price < lowestPrice) {
        lowestPrice = price;
      }
    });
  });
  
  return lowestPrice === Infinity ? 0 : lowestPrice;
};

/**
 * Re-export types for convenience
 */
export type { GameConfig, GamesCollection } from "./types";
