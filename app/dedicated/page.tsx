import type { Metadata } from "next";
import DedicatedHero from "@/components/sections/dedicated/DedicatedHero";
import DedicatedFeatures from "@/components/sections/dedicated/DedicatedFeatures";
import DedicatedPlans from "@/components/sections/dedicated/DedicatedPlans";
import DedicatedComparison from "@/components/sections/dedicated/DedicatedComparison";
import DiscordBanner from "@/components/sections/shared/DiscordBanner";
import { generatePageMeta } from "@/config/seo";

export const metadata: Metadata = generatePageMeta("dedicated");

export default function Dedicated() {
  return (
    <main className="min-h-screen bg-black">
      <DedicatedHero />
      <DedicatedPlans />
      <DedicatedFeatures />
      <DedicatedComparison />
      <DiscordBanner />
    </main>
  );
}
