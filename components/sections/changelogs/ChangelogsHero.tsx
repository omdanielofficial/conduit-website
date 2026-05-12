"use client";

import Image from "next/image";
import { changelogsConfig } from "@/config/changelogs";

export default function ChangelogsHero() {
  const { hero } = changelogsConfig;

  return (
    <section className="relative flex h-[650px] w-full items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.backgroundImage}
          alt="Changelogs Background"
          fill
          className="object-cover object-[center_20%] scale-110"
          quality={75}
          priority
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12">
        <div className="max-w-3xl mt-12">
          {/* Title */}
          <h1 className="mb-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.1]">
            {hero.title}{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-2xl bg-brand opacity-30"></span>
              <span className="relative bg-gradient-to-r from-brand/80 to-brand bg-clip-text text-transparent font-bold">
                {hero.highlight}
              </span>
            </span>
            
          </h1>
          
          {/* Description */}
          <p className="mb-12 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
            {hero.subtitle}
          </p>

          {/* Stats Row */}

        </div>
      </div>
    </section>
  );
}
