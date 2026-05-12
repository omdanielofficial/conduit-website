"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, BookOpen, Rocket, Gamepad2, CreditCard, Code, Shield, Wrench, Grid3x3, Clock, ArrowRight, User } from "lucide-react";
import { articles, categories, searchArticles } from "@/config/blog/index";
import { brandConfig } from "@/config/branding";
import { knowledgebasePageConfig } from "@/config/pages/knowledgebase";

export default function KnowledgebasePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getCategoryIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Grid: <Grid3x3 className="h-5 w-5" />,
      Rocket: <Rocket className="h-5 w-5" />,
      Gamepad: <Gamepad2 className="h-5 w-5" />,
      CreditCard: <CreditCard className="h-5 w-5" />,
      Code: <Code className="h-5 w-5" />,
      Shield: <Shield className="h-5 w-5" />,
      Wrench: <Wrench className="h-5 w-5" />,
    };
    return icons[iconName] || <BookOpen className="h-5 w-5" />;
  };

  const filteredArticles = useMemo(() => {
    let results = articles;

    // Filter by category
    if (selectedCategory !== "all") {
      results = results.filter(article => article.category === selectedCategory);
    }

    // Filter by search
    if (searchQuery.trim()) {
      results = searchArticles(searchQuery);
      // Also apply category filter to search results
      if (selectedCategory !== "all") {
        results = results.filter(article => article.category === selectedCategory);
      }
    }

    return results;
  }, [selectedCategory, searchQuery]);

  const popularArticles = useMemo(() => {
    return articles.slice(0, knowledgebasePageConfig.popularArticles.count);
  }, []);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section with Image */}
      <section className="relative w-full pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
          <Image
            src={knowledgebasePageConfig.hero.backgroundImage}
            alt="Knowledge Base Hero"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {knowledgebasePageConfig.hero.title} <span className="font-bold" style={{ color: brandConfig.color }}>{knowledgebasePageConfig.hero.highlight}</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-white/60">
              {knowledgebasePageConfig.hero.subtitle}
            </p>
          </div>

          {/* Search Bar */}
          <div className="mx-auto max-w-3xl">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40 transition-colors" />
              <input
                type="text"
                placeholder={knowledgebasePageConfig.hero.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.02] py-4 pl-12 pr-12 text-base text-white placeholder:text-white/40 focus:border-white/20 focus:bg-white/[0.04] focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center h-6 w-6 rounded-md bg-white/[0.05] text-white/60 hover:bg-white/[0.08] hover:text-white transition-all"
                  aria-label="Clear search"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      {knowledgebasePageConfig.categories.enabled && (
        <section className="relative w-full py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-lg border px-4 py-2 text-sm transition-all ${
                    selectedCategory === category.id
                      ? ""
                      : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                  }`}
                  style={selectedCategory === category.id ? {
                    borderColor: `${brandConfig.color}30`,
                    backgroundColor: `${brandConfig.color}10`,
                    color: brandConfig.color
                  } : {}}
                >
                  {getCategoryIcon(category.icon)}
                  <span>{category.name}</span>
                  {selectedCategory === category.id && (
                    <span className="rounded-full px-2 py-0.5 text-xs" style={{ backgroundColor: `${brandConfig.color}20` }}>
                      {category.id === "all" ? articles.length : articles.filter(a => a.category === category.id).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular Articles (shown when no search) */}
      {!searchQuery && selectedCategory === "all" && knowledgebasePageConfig.popularArticles.enabled && (
        <section className="relative w-full py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {knowledgebasePageConfig.popularArticles.title}
              </h2>
              <p className="text-sm text-white/50">
                {knowledgebasePageConfig.popularArticles.subtitle}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {popularArticles.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group relative overflow-hidden rounded-xl border p-6 transition-all"
                  style={{
                    borderColor: `${brandConfig.color}20`,
                    background: `linear-gradient(to bottom right, ${brandConfig.color}05, ${brandConfig.color}05)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${brandConfig.color}30`;
                    e.currentTarget.style.background = `linear-gradient(to bottom right, ${brandConfig.color}10, ${brandConfig.color}10)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${brandConfig.color}20`;
                    e.currentTarget.style.background = `linear-gradient(to bottom right, ${brandConfig.color}05, ${brandConfig.color}05)`;
                  }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border" style={{ borderColor: `${brandConfig.color}20`, backgroundColor: `${brandConfig.color}05`, color: brandConfig.color }}>
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white transition-colors group-hover:text-[var(--brand)]">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-xs text-white/50 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-white/40">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime} min read</span>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="relative w-full py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="mb-2 text-xl font-bold text-white">
              {searchQuery
                ? `${knowledgebasePageConfig.articles.titleSearchResults} (${filteredArticles.length})`
                : selectedCategory === "all"
                ? knowledgebasePageConfig.articles.titleAllArticles
                : `${categories.find(c => c.id === selectedCategory)?.name} (${filteredArticles.length})`}
            </h2>
            {searchQuery && (
              <p className="text-sm text-white/50">
                {knowledgebasePageConfig.articles.showingResultsText} "{searchQuery}"
              </p>
            )}
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-4">
                    <span className="inline-block rounded-lg border border-white/20 bg-white/[0.05] px-2.5 py-1 text-xs text-white/70">
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white transition-colors group-hover:text-[var(--brand)]">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-xs text-white/50 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-white/40">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                  {article.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-white/[0.05] px-2 py-0.5 text-xs text-white/40"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-12 text-center">
              <BookOpen className="mx-auto mb-4 h-12 w-12 text-white/20" />
              <h3 className="mb-2 text-lg font-semibold text-white">{knowledgebasePageConfig.articles.noArticlesTitle}</h3>
              <p className="text-sm text-white/50 mb-4">
                {searchQuery
                  ? knowledgebasePageConfig.articles.noArticlesDescription.replace("{query}", searchQuery)
                  : knowledgebasePageConfig.articles.noArticlesCategoryDescription}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white transition-all hover:border-white/20 hover:bg-white/[0.04]"
              >
                <Grid3x3 className="h-4 w-4" />
                {knowledgebasePageConfig.articles.viewAllButton}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Help CTA */}
      {knowledgebasePageConfig.helpCta.enabled && (
        <section className="relative w-full py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                {knowledgebasePageConfig.helpCta.title}
              </h2>
              <p className="mb-6 text-sm text-white/60">
                {knowledgebasePageConfig.helpCta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {knowledgebasePageConfig.helpCta.buttons.map((button, index) => (
                  button.primary ? (
                    <Link
                      key={index}
                      href={button.href}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all"
                      style={{
                        borderColor: `${brandConfig.color}30`,
                        backgroundColor: `${brandConfig.color}10`,
                        color: brandConfig.color
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${brandConfig.color}40`;
                        e.currentTarget.style.backgroundColor = `${brandConfig.color}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${brandConfig.color}30`;
                        e.currentTarget.style.backgroundColor = `${brandConfig.color}10`;
                      }}
                    >
                      <span>{button.text}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <a
                      key={index}
                      href={button.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-white/80 transition-all hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                    >
                      <span>{button.text}</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
