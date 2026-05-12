import type { Metadata } from "next";
import ChangelogsHero from "@/components/sections/changelogs/ChangelogsHero";
import ChangelogsTimeline from "@/components/sections/changelogs/ChangelogsTimeline";
import DiscordBanner from "@/components/sections/shared/DiscordBanner";
import { generatePageMeta } from "@/config/seo";

export const metadata: Metadata = generatePageMeta("changelogs");

export default function ChangelogsPage() {
  return (
    <main className="min-h-screen">
      <ChangelogsHero />
      <ChangelogsTimeline />
      <DiscordBanner />
    </main>
  );
}
