import { HeroSkeleton } from "@/components/skeletons/HeroSkeleton";
import { PricingSkeleton } from "@/components/skeletons/PricingSkeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSkeleton />
      <PricingSkeleton />
    </main>
  );
}
