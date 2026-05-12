import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactMethods from "@/components/sections/contact/ContactMethods";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import DiscordBanner from "@/components/sections/shared/DiscordBanner";
import { generatePageMeta } from "@/config/seo";

export const metadata: Metadata = generatePageMeta("contact");

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <ContactHero />
      <ContactMethods />
      <ContactInfo />
      <DiscordBanner />
    </main>
  );
}
