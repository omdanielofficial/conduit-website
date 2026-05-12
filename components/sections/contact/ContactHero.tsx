"use client";

import Image from "next/image";
import { contactConfig } from "@/config/pages/contact";

export default function ContactHero() {
  const hero = contactConfig.hero;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.backgroundImage}
          alt="Contact Hero Background"
          fill
          className="object-cover"
          quality={75}
          priority
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 sm:py-36 lg:py-40">
        <div className="text-center">
          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.title}{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-2xl bg-brand opacity-30"></span>
              <span className="relative bg-gradient-to-r from-brand/80 to-brand bg-clip-text text-transparent">
                {hero.highlight}
              </span>
            </span>
          </h1>
          
          {/* Description */}
          <p className="mx-auto mb-12 max-w-2xl text-lg text-white/70 sm:text-xl">
            {hero.subtitle}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {hero.stats.map((stat, index, array) => (
              <div key={index} className="flex items-center gap-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
                {index < array.length - 1 && (
                  <div className="h-12 w-px bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
