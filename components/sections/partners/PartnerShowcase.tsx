"use client";

import Image from "next/image";

interface Partner {
  name: string;
  description: string;
  avatar: string;
  socials: {
    website?: string;
    youtube?: string;
    twitter?: string;
    twitch?: string;
  };
}

interface PartnerShowcaseProps {
  partners: Partner[];
}

export default function PartnerShowcase({ partners }: PartnerShowcaseProps) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Our Partners
          </h2>
          <p className="text-white/60 text-lg">
            Content creators, developers, and other partners who we work with
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
            >
              <div className="relative flex flex-col items-center">
                {/* Avatar */}
                <div className="mb-4">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-white/10">
                    <Image
                      src={partner.avatar}
                      alt={partner.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="mb-4 text-center w-full">
                  <h3 className="text-base font-semibold text-white mb-1 line-clamp-1">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-white/50 line-clamp-1">{partner.description}</p>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-2">
                {partner.socials.website && (
                  <a
                    href={partner.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                    aria-label="Website"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </a>
                )}
                {partner.socials.youtube && (
                  <a
                    href={partner.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                    aria-label="YouTube"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                )}
                {partner.socials.twitch && (
                  <a
                    href={partner.socials.twitch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400 hover:scale-110"
                    aria-label="Twitch"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                    </svg>
                  </a>
                )}
                {partner.socials.twitter && (
                  <a
                    href={partner.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all hover:border-sky-500/30 hover:bg-sky-500/10 hover:text-sky-400 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
