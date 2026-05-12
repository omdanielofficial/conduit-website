"use client";

import Link from "next/link";
import Image from "next/image";
import { getGames, getStartingPrice, type GameConfig } from "@/config/games/index";
import { gamesPageConfig } from "@/config/pages/games";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { currencyConfig } from "@/config/shared/currency";




export default function GamesGrid() {
  // Automatically load all games from config/games
  const games = getGames();
  const { requestGame } = gamesPageConfig;

  return (
    <section className="relative w-full py-12 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {gamesPageConfig.grid.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            {gamesPageConfig.grid.description}
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game: GameConfig) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all hover:border-white/20 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-brand/10"
            >
              {/* Game Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={game.heroImage}
                  alt={game.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Game Info */}
              <div className="p-6">
                {/* Logo + Name + Price */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden bg-white/5 border border-white/10 p-2">
                    <Image
                      src={game.logo}
                      alt={`${game.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-white truncate">
                        {game.name}
                      </h3>
                      <div className="inline-flex items-baseline gap-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5" title={currencyConfig.code}>
                        {currencyConfig.position === "before" && (
                          <span className="text-xs font-bold text-emerald-400">{currencyConfig.symbol}</span>
                        )}
                        <span className="text-xs font-bold text-emerald-400">{getStartingPrice(game.slug).toFixed(2)}</span>
                        {currencyConfig.position === "after" && (
                          <span className="text-xs font-bold text-emerald-400">{currencyConfig.symbol}</span>
                        )}
                        <span className="text-[10px] font-medium text-emerald-400/80">/mo</span>
                      </div>
                    </div>
                    <p className="text-xs text-white/50 truncate">
                      {game.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-4 text-sm text-white/60 leading-relaxed line-clamp-2">
                  {game.description}
                </p>

                {/* Features */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {game.stats.slice(0, 3).map((stat: any, index: number) => (
                    <div
                      key={index}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                    >
                      {index === 0 && <Zap className="h-3 w-3" />}
                      {index === 1 && <Clock className="h-3 w-3" />}
                      {index === 2 && <Shield className="h-3 w-3" />}
                      <span className="font-medium">{stat.value}</span>
                      <span className="text-white/50">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between text-sm pt-2 border-t border-white/5">
                  <span className="font-medium text-brand group-hover:text-brand/80 transition-colors">
                    View Plans & Pricing
                  </span>
                  <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Don't See Your Game CTA */}
        <div className="mt-16">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] px-6 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <h3 className="text-lg font-semibold text-white">
                  {requestGame.title}
                </h3>
                <span className="hidden sm:block text-white/40">•</span>
                <p className="text-sm text-white/50">
                  {requestGame.description}
                </p>
              </div>
              <Link
                href={requestGame.buttonLink}
                className="inline-flex items-center gap-2 rounded-full bg-brand hover:bg-brand/90 px-5 py-2 text-sm font-semibold text-brand-text transition-all cursor-pointer whitespace-nowrap"
              >
                {requestGame.buttonText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Highlights Section */}

      </div>
    </section>
  );
}
