import type { Metadata } from "next";
import { generatePageMeta } from "@/config/seo";

// Knowledgebase SEO - uses the knowledgebase config from config/seo.ts
export const metadata: Metadata = generatePageMeta("knowledgebase");

export default function KnowledgebaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
