import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <section className="relative flex h-[650px] w-full items-center overflow-hidden bg-black">
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12">
        <div className="max-w-3xl mt-12">
          {/* Title Skeleton */}
          <Skeleton className="h-16 w-full max-w-2xl mb-5" />
          <Skeleton className="h-16 w-3/4 mb-8" />
          
          {/* Description Skeleton */}
          <Skeleton className="h-6 w-full max-w-xl mb-3" />
          <Skeleton className="h-6 w-4/5 max-w-xl mb-12" />
          
          {/* Stats Skeleton */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-8">
                <div>
                  <Skeleton className="h-8 w-20 mb-2" />
                  <Skeleton className="h-4 w-16" />
                </div>
                {i < 3 && <Skeleton className="h-8 w-px" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
