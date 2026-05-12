import { Skeleton } from "@/components/ui/skeleton";

function GameCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      {/* Image Skeleton */}
      <Skeleton className="h-48 w-full rounded-none" />
      
      {/* Content Skeleton */}
      <div className="p-6">
        {/* Logo + Name */}
        <div className="flex items-center gap-4 mb-4">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <div className="flex-1">
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>

        {/* Description */}
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-4/5 mb-4" />

        {/* Stats */}
        <div className="flex flex-wrap gap-2 mb-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-8 w-24 rounded-lg" />
          ))}
        </div>

        {/* CTA */}
        <div className="pt-2 border-t border-white/5">
          <Skeleton className="h-4 w-40" />
        </div>
      </div>
    </div>
  );
}

export function GamesGridSkeleton() {
  return (
    <section className="relative w-full py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="mb-16 text-center">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <GameCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
