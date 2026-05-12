import { Suspense } from "react";
import type { Metadata } from "next";
import Hero from "@/components/sections/home/Hero";
import Features from "@/components/sections/home/Features";
import Hardware from "@/components/sections/home/Hardware";
import Pricing from "@/components/sections/home/Pricing";
import Products from "@/components/sections/home/Products";
import Comparison from "@/components/sections/home/Comparison";
import Testimonials from "@/components/sections/home/Testimonials";
import DiscordBanner from "@/components/sections/shared/DiscordBanner";
import SaleBanner from "@/components/sections/shared/SaleBanner";
import { PricingSkeleton } from "@/components/skeletons/PricingSkeleton";
import { FeaturesSkeleton } from "@/components/skeletons/FeaturesSkeleton";
import { TestimonialsSkeleton } from "@/components/skeletons/TestimonialsSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { generatePageMeta } from "@/config/seo";

// Homepage SEO - uses the home config from config/seo.ts
export const metadata: Metadata = generatePageMeta("home");

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SaleBanner />
      <Suspense fallback={<PricingSkeleton />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<div className="py-20"><Skeleton className="h-64 mx-auto max-w-7xl" /></div>}>
        <Products />
      </Suspense>
      <Suspense fallback={<div className="py-20"><Skeleton className="h-96 mx-auto max-w-7xl" /></div>}>
        <Hardware />
      </Suspense>
      <Suspense fallback={<FeaturesSkeleton />}>
        <Features />
      </Suspense>
      <Suspense fallback={<div className="py-20"><Skeleton className="h-96 mx-auto max-w-7xl" /></div>}>
        <Comparison />
      </Suspense>
      <Suspense fallback={<TestimonialsSkeleton />}>
        <Testimonials />
      </Suspense>
      <DiscordBanner />
    </main>
  );
}
