import { Skeleton } from "@/components/ui/skeleton";

export function PricingSkeleton() {
  return (
    <section className="relative w-full py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="mb-10">
          <Skeleton className="h-10 w-64 mb-3" />
          <Skeleton className="h-5 w-96" />
        </div>

        {/* Game Icons Skeleton */}
        <div className="mb-6">
          <Skeleton className="h-4 w-24 mb-3" />
          <div className="flex gap-4 flex-wrap">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-20 w-20 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Region Selector Skeleton */}
        <div className="mb-6">
          <Skeleton className="h-4 w-24 mb-3" />
          <div className="flex gap-2 flex-wrap">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-10 w-32 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Plans Grid Skeleton */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-96 rounded-2xl" />
          ))}
        </div>
      </div>
    </section>
  );
}
