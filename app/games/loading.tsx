import { HeroSkeleton } from "@/components/skeletons/HeroSkeleton";
import { GamesGridSkeleton } from "@/components/skeletons/GameCardSkeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSkeleton />
      <GamesGridSkeleton />
    </main>
  );
}
