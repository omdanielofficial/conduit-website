/**
 * ============================================
 * KNOWLEDGEBASE ARTICLE TEMPLATE
 * ============================================
 * 
 * HOW TO CREATE A NEW ARTICLE:
 * 
 * 1. Copy this file and rename it to your article slug (e.g., "my-article-name.ts")
 * 2. Update the article metadata (slug, title, description, etc.)
 * 3. Write your content using the blocks below
 * 4. Import your article in config/knowledgebase/index.ts
 * 5. That's it! Your article is live!
 * 
 * AVAILABLE CONTENT BLOCKS:
 * - paragraph: Regular text
 * - heading: H1, H2, H3, H4
 * - list: Bullet or numbered lists
 * - code: Code snippets with copy button (specify language)
 * - image: Images with captions
 * - youtube: Embedded YouTube videos
 * - alert: Info, Success, Warning, Error boxes
 * 
 * ============================================
 */

import { KnowledgebaseArticle } from "../types";

export const article: KnowledgebaseArticle = {
  // URL-friendly slug (e.g., "my-article-name")
  slug: "your-article-slug",
  
  // Article title (shown in search and article page)
  title: "Your Article Title",
  
  // Short description (shown in search results)
  description: "A brief description of what this article covers.",
  
  // Category: "getting-started", "game-servers", "billing", "technical", "security", "troubleshooting"
  category: "getting-started",
  
  // Your name or "Latch Team"
  author: "Your Name",
  
  // Date in YYYY-MM-DD format
  date: "2026-01-22",
  
  // Estimated reading time in minutes
  readTime: 5,
  
  // Tags for search (lowercase, no spaces)
  tags: ["tag1", "tag2", "tag3"],
  
  // Content blocks - add as many as you need!
  content: [
    // Main heading (H1) - use once at the top
    {
      type: "heading",
      level: 1,
      content: "Your Main Article Heading"
    },
    
    // Paragraph - regular text
    {
      type: "paragraph",
      content: "This is a regular paragraph. You can use **bold** text inline."
    },
    
    // Alert boxes - choose variant: "info", "success", "warning", "error"
    {
      type: "alert",
      variant: "info",
      content: "This is an informational message for your readers."
    },
    
    // Section heading (H2)
    {
      type: "heading",
      level: 2,
      content: "Section Heading"
    },
    
    // Bullet list
    {
      type: "list",
      items: [
        "First item",
        "Second item with **bold text**",
        "Third item"
      ]
    },
    
    // Numbered list
    {
      type: "list",
      ordered: true,
      items: [
        "Step one",
        "Step two",
        "Step three"
      ]
    },
    
    // Code snippet with copy button
    {
      type: "code",
      language: "bash", // or "javascript", "python", "properties", etc.
      code: `npm install package-name
npm start`,
      filename: "terminal" // Optional: shows filename above code
    },
    
    // Image with caption
    {
      type: "image",
      src: "/images/kb/your-image.png",
      alt: "Description of image for accessibility",
      caption: "Optional caption shown below image"
    },
    
    // YouTube video embed
    {
      type: "youtube",
      videoId: "dQw4w9WgXcQ", // Just the video ID from YouTube URL
      caption: "Optional caption for the video"
    },
    
    // Subsection heading (H3)
    {
      type: "heading",
      level: 3,
      content: "Subsection Heading"
    },
    
    // Another paragraph
    {
      type: "paragraph",
      content: "More content here..."
    },
    
    // Success message
    {
      type: "alert",
      variant: "success",
      content: "Great job! You've completed this section."
    },
    
    // Warning message
    {
      type: "alert",
      variant: "warning",
      content: "Caution: Make sure to backup your data first!"
    },
    
    // Error message
    {
      type: "alert",
      variant: "error",
      content: "Critical: This action cannot be undone!"
    }
  ]
};
