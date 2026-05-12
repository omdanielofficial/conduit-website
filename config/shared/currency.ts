// ===========================================
// CURRENCY CONFIGURATION
// ===========================================
// This controls how prices are displayed across your entire website

export const currencyConfig: {
  symbol: string;
  code: string;
  position: "before" | "after";
} = {
  symbol: "$",             // Currency symbol ($ € £ ¥ ₹)
  code: "USD",             // Currency code (USD, EUR, GBP, etc.)
  position: "before",      // "before" = $99.99, "after" = 99.99€
};
