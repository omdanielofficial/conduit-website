"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar, Tag, Share2, BookOpen, ChevronRight, Check } from "lucide-react";
import { categories } from "@/config/blog/index";
import type { KnowledgebaseArticle } from "@/config/blog/types";
import { ContentRenderer } from "@/components/knowledgebase/ContentRenderer";
import { brandConfig } from "@/config/branding";

interface ArticleClientProps {
  article: KnowledgebaseArticle | undefined;
}

export default function ArticleClient({ article }: ArticleClientProps) {
  const [copied, setCopied] = useState(false);

  if (!article) {
    return (
      <main className="min-h-screen bg-black">
        <section className="pt-32 pb-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <BookOpen className="mx-auto mb-4 h-16 w-16 text-white/20" />
            <h1 className="mb-4 text-3xl font-bold text-white">Article Not Found</h1>
            <p className="mb-8 text-white/50">
              The article you're looking for doesn't exist.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-6 py-3 text-sm text-white transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const category = categories.find(c => c.id === article.category);
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: window.location.href,
        });
      } catch {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Article Header */}
      <section className="relative border-b border-white/5 pt-32 pb-16 overflow-hidden">
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Category Badge */}
          <div className="mb-6 flex items-center gap-3">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>
            <span className="text-white/20">•</span>
            <span className="inline-block rounded-lg border px-3 py-1.5 text-sm font-medium" style={{ borderColor: `${brandConfig.color}30`, backgroundColor: `${brandConfig.color}10`, color: brandConfig.color }}>
              {category?.name}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
            {article.title}
          </h1>

          {/* Description */}
          <p className="mb-8 text-xl text-white/70 max-w-4xl leading-relaxed">
            {article.description}
          </p>
          
          {/* Meta Info Bar */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-white/50">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10">
                <User className="h-4 w-4" />
              </div>
              <span className="font-medium">{article.author}</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-2 text-white/50">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-2 text-white/50">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} min read</span>
            </div>
            <button
              onClick={handleShare}
              className="ml-auto flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white/80 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              {copied ? <Check className="h-4 w-4 text-green-400" /> : <Share2 className="h-4 w-4" />}
              <span className="font-medium">{copied ? 'Copied!' : 'Share'}</span>
            </button>
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white/80"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert prose-sm sm:prose-base max-w-none">
            <ContentRenderer blocks={article.content} />
          </article>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Was this article helpful?
            </h3>
            <div className="flex gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white transition-all hover:border-white/20 hover:bg-white/[0.04]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-all"
                style={{ borderColor: `${brandConfig.color}20`, backgroundColor: `${brandConfig.color}10`, color: brandConfig.color }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${brandConfig.color}30`;
                  e.currentTarget.style.backgroundColor = `${brandConfig.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${brandConfig.color}20`;
                  e.currentTarget.style.backgroundColor = `${brandConfig.color}10`;
                }}
              >
                <span>Looking to contact us?</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
