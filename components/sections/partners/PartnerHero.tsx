import Link from "next/link";
import Image from "next/image";
import { partnersConfig } from "@/config/pages/partners";

export default function PartnerHero() {
  return (
    <section className="relative flex h-[650px] w-full items-center overflow-hidden">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={partnersConfig.hero.backgroundImage}
          alt="Partner Background"
          fill
          className="object-cover object-[center_20%] scale-110"
          priority
          quality={75}
        />
        {/* Layered gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12">
        <div className="max-w-3xl mt-12">
          {/* Hero Heading */}
          <h1 className="mb-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.1]">
            {partnersConfig.hero.title}{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-2xl bg-brand opacity-30"></span>
              <span className="relative bg-gradient-to-r from-brand/80 to-brand bg-clip-text text-transparent font-bold">
                {partnersConfig.hero.highlight}
              </span>
            </span>
            
          </h1>

          {/* Hero Description */}
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            {partnersConfig.hero.subtitle}
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`https://discord.gg/conduit`}
              className="group inline-flex h-11 items-center justify-center rounded-lg bg-brand px-6 text-sm font-medium text-brand-text transition-all hover:bg-brand/90 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                Partner Applications
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
