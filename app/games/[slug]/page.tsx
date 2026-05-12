import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGameBySlug, getGameSlugs } from "@/config/games/index";
import GameHero from "@/components/sections/game-template/GameHero";
import GameFeatures from "@/components/sections/game-template/GameFeatures";
import GameFAQ from "@/components/sections/game-template/GameFAQ";
import GamePricing from "@/components/sections/game-template/GamePricing";
import CommonIncludes from "@/components/sections/shared/CommonIncludes";
import DiscordBanner from "@/components/sections/shared/DiscordBanner";
import { generateGameMeta } from "@/config/seo";

export async function generateStaticParams() {
  return getGameSlugs().map((slug) => ({
    slug,
  }));
}

// Generate SEO metadata for each game page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  
  if (!game) {
    return { title: "Game Not Found" };
  }
  
  return generateGameMeta(game.slug, game.name, game.description);
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      <GameHero
        heroTitle={game.heroTitle}
        heroHighlight={game.heroHighlight}
        heroSubtitle={game.heroSubtitle}
        heroImage={game.heroImage}
        heroLogo={game.heroLogo === "default" ? game.logo : game.heroLogo === false ? undefined : game.heroLogo}
        stats={game.stats}
      />
      <GamePricing game={game} />
      <CommonIncludes />
      <GameFeatures gameName={game.name} logo={game.logo} features={game.features} />
      <GameFAQ gameName={game.name} faqs={game.faqs} />
      <DiscordBanner />
    </main>
  );
}
