// ===========================================
// SEO CONFIGURATION
// ===========================================

export const seoConfig = {
  // Your website's base URL (no trailing slash)
  // Example: "https://latch.gg" or "https://yourcompany.com"
  // ⚠️ IMPORTANT: This is used for canonical URLs and Open Graph
  siteUrl: "https://conduithost.com",
  
  // Default site name (appears in titles)
  siteName: "Conduit",
  
  // Homepage title - What shows in browser tab for homepage
  // Example: "Latch - Premium Game Server Hosting" or just "Latch"
  homeTitle: "Conduit - Premium Game Server Hosting",
  
  // Title separator: "Page Title | Site Name" or "Page Title - Site Name"
  titleSeparator: " | ",
  
  // Default language
  locale: "en_US",
  
  // Twitter handle (without @)
  twitterHandle: "conduithosting",
  
  // Default Open Graph image (shows when shared on social media)
  // Recommended size: 1200x630 pixels
  // Place image in /public folder and reference as "/og-image.jpg"
  // Or use external URL: "https://yoursite.com/og-image.jpg"
  defaultOgImage: "/og.png",
  
  // ===========================================
  // ROBOTS & INDEXING
  // ===========================================
  // Control how search engines index your site
  robots: {
    index: true,      // Allow search engines to index pages
    follow: true,     // Allow search engines to follow links
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  
  // ===========================================
  // VERIFICATION CODES
  // ===========================================
  // Add your verification codes here (leave empty if not needed)
  verification: {
    google: "",       // Google Search Console: "xxxxxxxxxx"
    bing: "",         // Bing Webmaster: "xxxxxxxxxx"
    yandex: "",       // Yandex Webmaster: "xxxxxxxxxx"
  },
};

// ===========================================
// PAGE-SPECIFIC SEO
// ===========================================
// Define SEO for each page of your website
// 
// Fields explained:
// - title: What appears in browser tab and Google results (50-60 characters ideal)
// - description: Summary shown in Google results (150-160 characters ideal)
// - keywords: Comma-separated keywords (optional, less important for modern SEO)
// - ogImage: Custom social media image for THIS page (optional - uses default if not set)
// - path: URL path for canonical URL (optional - auto-generated if not set)


export const pageSeo: Record<string, { 
  title: string; 
  description: string; 
  keywords: string;
  ogImage?: string;  // Optional: page-specific social image
  path?: string;     // Optional: URL path for canonical (e.g., "/about")
}> = {
  // ===========================================
  // HOMEPAGE
  // ===========================================
  home: {
    title: "Scalable & Reliable Game Hosting",
    description: "Lightning-fast game server hosting with instant deployment, DDoS protection, and 24/7 support. Start your Minecraft or Hytale server in minutes.",
    keywords: "game server hosting, minecraft hosting, hytale hosting, game hosting, server hosting, ryzen 9 9950X game hosting",
    path: "/",
  },
  
  // ===========================================
  // GAME SERVERS
  // ===========================================
  games: {
    title: "Game Hosting",
    description: "Browse all available game server hosting options. Premium servers with instant setup, DDoS protection, and 24/7 support for all popular games.",
    keywords: "game servers, minecraft server, hytale server, game hosting",
    path: "/games",
  },
  
  // ===========================================
  // HOSTING PAGES
  // ===========================================
  
  dedicated: {
    title: "Dedicated Servers",
    description: "Enterprise-grade dedicated servers with powerful hardware, full control, and a 99.95% uptime guarantee. Perfect for high-traffic applications.",
    keywords: "dedicated servers, dedicated hosting, bare metal servers, enterprise hosting, server rental, vds, hybrid dedicated",
    path: "/dedicated",
  },
  
  // ===========================================
  // COMPANY PAGES
  // ===========================================

  
  contact: {
    title: "Contact",
    description: "Get in touch with our support team. We're available 24/7 via tickets and email to help with any questions.",
    keywords: "contact us, support, help, customer service, live chat",
    path: "/contact",
  },
  
  jobs: {
    title: "About",
    description: "Learn about our mission, values, and the passionate team behind the future of game server hosting. Discover what makes us different.",
    keywords: "about us, our story, game hosting company, hosting team, jobs, conduit jobs",
    path: "/about",
  },
  
  partners: {
    title: "Partner Program",
    description: "Join our partner program and earn rewards for promoting our services. Perfect for content creators, streamers, and communities.",
    keywords: "partner program, affiliate, content creator, streamer partnership, referral program",
    path: "/partners",
  },
  
  // ===========================================
  // SUPPORT PAGES
  // ===========================================
  
  knowledgebase: {
    title: "Blog",
    description: "Browse guides, news updates, and tutorials to get the most out of your hosting services.",
    keywords: "knowledge base, blog, tutorials, guides, documentation, help articles, how to",
    path: "/blog",
  },
  
  changelogs: {
    title: "Changelogs",
    description: "Stay updated with our latest features, improvements, and bug fixes. See what's new and what we're working on next.",
    keywords: "changelogs, updates, new features, release notes, version history",
    path: "/changelogs",
  },
  
  // ===========================================
  // LEGAL PAGES
  // ===========================================
  privacy: {
    title: "Privacy Policy",
    description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
    keywords: "privacy policy, data protection, personal information, gdpr, privacy",
    path: "/privacy",
  },
  
  terms: {
    title: "Terms of Service",
    description: "Read our terms of service to understand the rules and guidelines for using our services.",
    keywords: "terms of service, terms and conditions, tos, user agreement, service terms",
    path: "/terms",
  },
};

// ===========================================
// GAME-SPECIFIC SEO
// ===========================================
// SEO for individual game pages (/games/minecraft, /games/fivem, etc.)
// If a game isn't listed here, it will use the game config's name and description


export const gameSeo: Record<string, { 
  title?: string; 
  description?: string; 
  keywords?: string;
  ogImage?: string;  // Optional: game-specific social image
}> = {
  minecraft: {
    title: "Minecraft Server Hosting",
    description: "Premium Minecraft hosting with mod support, instant setup, and DDoS protection. Create your Minecraft server in seconds with unlimited player slots.",
    keywords: "minecraft server hosting, minecraft hosting, minecraft server, java minecraft, bedrock server, 9950x minecraft hosting",
  },
  
  hytale: {
    title: "Hytale Server Hosting",
    description: "Premium Hytale hosting with mod support, instant setup, and DDoS protection. Create your Hytale server in seconds with unlimited player slots.",
    keywords: "hytale server hosting, hytale hosting, hytale server, hytale game server, 9950x hytale hosting",
  },
  
  // Add more games here as needed:
  // valheim: {
  //   title: "Valheim Server Hosting",
  //   description: "...",
  //   keywords: "...",
  //   ogImage: "/og-valheim.jpg",
  // },
};

// ===========================================
// HELPER FUNCTIONS
// ===========================================
// These generate metadata for Next.js pages
// You don't need to edit these

// Generate canonical URL
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${seoConfig.siteUrl}${cleanPath}`;
}

// Generate metadata object for Next.js pages
// Note: Title is just the page title - the layout template adds "| Latch" automatically
export function generatePageMeta(page: keyof typeof pageSeo) {
  const seo = pageSeo[page];
  const fullTitle = `${seo.title}${seoConfig.titleSeparator}${seoConfig.siteName}`;
  const ogImage = seo.ogImage || seoConfig.defaultOgImage;
  const canonicalUrl = seo.path ? getCanonicalUrl(seo.path) : undefined;
  
  return {
    title: seo.title,  // Layout template adds "| Latch"
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: seo.description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: seo.description,
      creator: `@${seoConfig.twitterHandle}`,
      images: [ogImage],
    },
  };
}

// Generate metadata for game pages
// Note: Title is just the page title - the layout template adds "| Latch" automatically
export function generateGameMeta(gameSlug: string, gameName: string, gameDescription: string) {
  const seo = gameSeo[gameSlug] || {
    title: `${gameName} Hosting`,
    description: gameDescription,
    keywords: `${gameName.toLowerCase()} hosting, ${gameName.toLowerCase()} server`,
  };
  
  const pageTitle = seo.title || `${gameName} Hosting`;
  const fullTitle = `${pageTitle}${seoConfig.titleSeparator}${seoConfig.siteName}`;
  const ogImage = seo.ogImage || seoConfig.defaultOgImage;
  const canonicalUrl = getCanonicalUrl(`/games/${gameSlug}`);
  
  return {
    title: pageTitle,  // Layout template adds "| Latch"
    description: seo.description || gameDescription,
    keywords: seo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: seo.description || gameDescription,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: seo.description || gameDescription,
      creator: `@${seoConfig.twitterHandle}`,
      images: [ogImage],
    },
  };
}
