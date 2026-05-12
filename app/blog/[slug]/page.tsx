import type { Metadata } from "next";
import { getArticleBySlug, articles } from "@/config/blog/index";
import { seoConfig, getCanonicalUrl } from "@/config/seo";
import ArticleClient from "./ArticleClient";

// Generate metadata for each article dynamically
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: "Article Not Found",
      description: "The article you're looking for doesn't exist.",
    };
  }

  const canonical = getCanonicalUrl(`/blog/${slug}`);

  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    authors: [{ name: article.author }],
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${article.title} | ${seoConfig.siteName}`,
      description: article.description,
      url: canonical,
      siteName: seoConfig.siteName,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${seoConfig.siteName}`,
      description: article.description,
    },
  };
}

// Generate static params for all articles (for static generation)
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  return <ArticleClient article={article} />;
}

