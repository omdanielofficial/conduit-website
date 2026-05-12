import type { Metadata } from "next";
import { generatePageMeta } from "@/config/seo";

// Terms of Service SEO - uses the terms config from config/seo.ts
export const metadata: Metadata = generatePageMeta("terms");

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
