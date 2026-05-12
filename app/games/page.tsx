import { Suspense } from "react";
import type { Metadata } from "next";
import GamesHero from "@/components/sections/games/GamesHero";
import GamesGrid from "@/components/sections/games/GamesGrid";
import DiscordBanner from "@/components/sections/shared/DiscordBanner";
import { GamesGridSkeleton } from "@/components/skeletons/GameCardSkeleton";
import { generatePageMeta } from "@/config/seo";

export const metadata: Metadata = generatePageMeta("games");

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-black">
      <GamesHero />
      <Suspense fallback={<GamesGridSkeleton />}>
        <GamesGrid />
      </Suspense>
      <DiscordBanner />
    </main>
  );
}
