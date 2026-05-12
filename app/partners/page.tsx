import type { Metadata } from "next";
import PartnerHero from "@/components/sections/partners/PartnerHero";
import PartnerBenefits from "@/components/sections/partners/PartnerBenefits";
import PartnerRequirements from "@/components/sections/partners/PartnerRequirements";
import PartnerShowcase from "@/components/sections/partners/PartnerShowcase";
import PartnerFAQ from "@/components/sections/partners/PartnerFAQ";
import DiscordBanner from "@/components/sections/shared/DiscordBanner";
import { generatePageMeta } from "@/config/seo";
import { partnersConfig } from "@/config/pages/partners";

export const metadata: Metadata = generatePageMeta("partners");

export default function Partners() {
  return (
    <main className="min-h-screen bg-black">
      <PartnerHero />
      <PartnerBenefits />
      <PartnerRequirements />
      <PartnerShowcase partners={partnersConfig.partners} />
      <PartnerFAQ />
      <DiscordBanner />
    </main>
  );
}
