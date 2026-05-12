// Knowledgebase Configuration
// Import your articles here and add them to the articles array

import { KnowledgebaseArticle } from "./types";

// Import articles
import { article as gettingStarted } from "./articles/getting-started-with-conduit";

// Categories
export const categories = [
  { id: "all", name: "All Articles", icon: "Grid" },
  { id: "getting-started", name: "Getting Started", icon: "Rocket" },
  { id: "game-servers", name: "Game Servers", icon: "Gamepad" },
  { id: "dedicated-servers", name: "Dedicated Servers", icon: "Code" },
];

// Articles
export const articles: KnowledgebaseArticle[] = [
  gettingStarted,

];

// Helper functions
export function getArticleBySlug(slug: string): KnowledgebaseArticle | undefined {
  return articles.find(article => article.slug === slug);
}


export function searchArticles(query: string): KnowledgebaseArticle[] {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.description.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

// Export types
export type { KnowledgebaseArticle } from "./types";
