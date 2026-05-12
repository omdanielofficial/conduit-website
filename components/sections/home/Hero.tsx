
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { homeConfig } from "@/config/home";

export default function Hero() {
  const hero = homeConfig.hero;

  // Edge case: No config or missing required fields
  if (!hero || !hero.backgroundImage || !hero.title || !hero.highlight || !hero.primaryCta || !hero.primaryCta.text || !hero.primaryCta.href) {
    return null;
  }

  return (
    <section className="relative flex h-[650px] w-full items-center overflow-hidden">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero.backgroundImage}
          alt="Game Background"
          fill
          className="object-cover object-[center_20%] scale-110"
          priority
          quality={75}
        />
        {/* Layered gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12">
        <div className="max-w-3xl mt-12">
          {/* Hero Heading */}
          <h1 className="mb-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.1] break-words">
            {hero.title}{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-2xl bg-brand opacity-30"></span>
              <span className="relative bg-gradient-to-r from-brand/80 to-brand bg-clip-text text-transparent font-bold">
                {hero.highlight}
              </span>
            </span>
            {hero.titleSuffix || ""}
          </h1>

          {/* Hero Description */}
          {hero.subtitle && (
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl break-words">
              {hero.subtitle}
            </p>
          )}

          {/* CTA Button */}
          {hero.primaryCta && hero.primaryCta.text && hero.primaryCta.href && (
            <div className="mb-12">
              <Link
                href={hero.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold text-brand-text transition-all hover:bg-brand/90 cursor-pointer"
              >
                {hero.primaryCta.text}
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          )}

          {/* Stats Row */}
          {Array.isArray(hero.stats) && hero.stats.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
              {hero.stats.map((stat, index) => (
                stat && stat.value && stat.label ? (
                  <React.Fragment key={index}>
                    <div>
                      <div className="text-2xl font-bold text-white break-words">{stat.value}</div>
                      <div className="text-xs text-white/50 break-words">{stat.label}</div>
                    </div>
                    {index < hero.stats.length - 1 && (
                      <div className="h-8 w-px bg-white/10" />
                    )}
                  </React.Fragment>
                ) : null
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
