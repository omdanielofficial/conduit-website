export const knowledgebasePageConfig = {
  hero: {
    title: "",
    highlight: "Blog",
    subtitle: "Search our blog for guides, tutorials, and the latest news.",
    backgroundImage: "/assets/hero_home.png",
    searchPlaceholder: "Search for articles..."
  },
  popularArticles: {
    enabled: true,
    title: "Popular Articles",
    subtitle: "Explore the most viewed articles this month",
    count: 3
  },
  articles: {
    titleAllArticles: "All Articles",
    titleSearchResults: "Search Results",
    showingResultsText: "Showing {count} results for",
    noArticlesTitle: "No articles found",
    noArticlesDescription: "We couldn't find any articles matching your search.",
    noArticlesCategoryDescription: "No articles in this category yet. Check back soon!",
    viewAllButton: "View All Articles"
  },
  categories: {
    enabled: true
  },
  helpCta: {
    enabled: true,
    title: "Have Questions?",
    description: "Our team is on hand to assist 24/7 with all kinds of enquiries.",
    buttons: [
      {
        text: "Contact Us",
        href: "/contact",
        primary: true
      },
      {
        text: "Join Discord",
        href: "https://discord.gg/latch",
        primary: false
      }
    ]
  }
};
