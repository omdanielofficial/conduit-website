// ===========================================
// SALE BANNER CONFIGURATION
// ===========================================
// This banner appears at the top of your website

export const saleBannerConfig = {
  // When the sale ends (format: YYYY-MM-DD HH:mm:ss in UTC timezone)
  saleEndDate: "2026-06-01 00:00:00",
  
  // ===================
  // OFFER TEXT
  // ===================
  offer: {
    badge: "Limited Time Offer",        // Small badge text
    discount: "25% OFF",           // Main discount text
    duration: "First Month",       // What the discount applies to
    savings: "Minecraft & Hytale Servers",  // How much they save
  },
  
  // Text shown below the offer
  subtext: "New Customers Only • Coupon Code: CONDUIT25",
  
  // ===================
  // BUTTON
  // ===================
  cta: {
    text: "Claim Offer",
    link: "#pricing",              // Where to go when clicked
  },
  
  // ===================
  // TIMER LABELS
  // ===================
  timerLabels: {
    prefix: "Expires in:",
    days: "days",
    hours: "hrs",
    minutes: "min",
    seconds: "sec",
  },
  
  // ===================
  // VISUAL OPTIONS
  // ===================
  styling: {
    showPulsingDot: true,          // Animated dot next to badge
    showTimerDividers: true,       // Colons between time numbers
  }
};
