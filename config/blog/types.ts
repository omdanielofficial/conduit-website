export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | ListBlock
  | CodeBlock
  | ImageBlock
  | YouTubeBlock
  | AlertBlock;

export interface ParagraphBlock {
  type: "paragraph";
  content: string;
}

export interface HeadingBlock {
  type: "heading";
  level: 1 | 2 | 3 | 4;
  content: string;
}

export interface ListBlock {
  type: "list";
  ordered?: boolean;
  items: string[];
}

export interface CodeBlock {
  type: "code";
  language: string;
  code: string;
  filename?: string;
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export interface YouTubeBlock {
  type: "youtube";
  videoId: string;
  caption?: string;
}

export interface AlertBlock {
  type: "alert";
  variant: "info" | "success" | "warning" | "error";
  content: string;
}

export interface KnowledgebaseArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  content: ContentBlock[];
  author: string;
  date: string;
  readTime: number;
  tags: string[];
}
