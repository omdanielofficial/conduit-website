import type { Metadata } from "next";
import JobsHero from "@/components/sections/jobs/JobsHero";
import AboutStory from "@/components/sections/jobs/AboutStory";
import JobsTeam from "@/components/sections/jobs/JobsTeam";
import JobsCulture from "@/components/sections/jobs/JobsCulture";
import JobsOpenings from "@/components/sections/jobs/JobsOpenings";
import DiscordBanner from "@/components/sections/shared/DiscordBanner";
import { generatePageMeta } from "@/config/seo";

export const metadata: Metadata = generatePageMeta("jobs");

export default function JobsPage() {
  return (
    <main className="min-h-screen">
      <JobsHero />
      <AboutStory/>
      <JobsTeam />
      <JobsCulture />
      <JobsOpenings />
      <DiscordBanner />
    </main>
  );
}
