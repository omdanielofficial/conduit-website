import { currencyConfig } from "@/config/shared/currency";

/**
 * Format a price display component with separate symbol and amount
 * Useful for styled pricing displays
 */
export function formatPriceComponents(amount: number): {
  symbol: string;
  amount: string;
  position: "before" | "after";
  code: string;
} {
  return {
    symbol: currencyConfig.symbol,
    amount: amount.toFixed(2),
    position: currencyConfig.position,
    code: currencyConfig.code,
  };
}
