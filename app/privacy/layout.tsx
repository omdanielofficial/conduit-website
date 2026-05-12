import type { Metadata } from "next";
import { generatePageMeta } from "@/config/seo";

// Privacy Policy SEO - uses the privacy config from config/seo.ts
export const metadata: Metadata = generatePageMeta("privacy");

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
