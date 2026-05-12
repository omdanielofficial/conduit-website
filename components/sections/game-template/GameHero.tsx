import Image from "next/image";
import React from "react";

interface GameHeroProps {
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroImage: string;
  heroLogo?: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export default function GameHero({
  heroTitle,
  heroHighlight,
  heroSubtitle,
  heroImage,
  heroLogo,
  stats,
}: GameHeroProps) {
  return (
    <section className="relative flex min-h-[650px] w-full items-center overflow-hidden bg-black">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Game Background"
          fill
          className="object-cover object-center scale-110"
          priority
          quality={75}
        />
        {/* Layered gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-16">
          <div className="max-w-3xl flex-1">
            {/* Hero Heading */}
            <h1 className="mb-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.1]">
              {heroTitle}{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 blur-2xl bg-brand opacity-30"></span>
                <span className="relative bg-gradient-to-r from-brand/80 to-brand bg-clip-text text-transparent font-bold">
                  {heroHighlight}
                </span>
              </span>
              .
            </h1>

            {/* Hero Subtitle */}
            <p className="mb-12 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              {heroSubtitle}
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <div className="group">
                    <div className="text-2xl font-bold text-white group-hover:text-brand transition-colors">{stat.value}</div>
                    <div className="text-xs text-white/50">{stat.label}</div>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="h-8 w-px bg-white/10" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Hero Logo - Right Side */}
          {heroLogo && (
            <div className="hidden lg:block flex-shrink-0">
              <img 
                src={heroLogo} 
                alt="Game Logo" 
                className="h-56 w-auto max-w-sm rounded-2xl object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
