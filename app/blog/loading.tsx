import { ArticleListSkeleton } from "@/components/skeletons/CommonSkeletons";

export default function Loading() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 px-4 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="h-10 bg-white/[0.05] rounded w-1/3 mx-auto animate-pulse" />
          <div className="h-5 bg-white/[0.05] rounded w-2/3 mx-auto animate-pulse" />
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="h-14 bg-white/[0.03] rounded-lg border border-white/[0.05] animate-pulse" />
          </div>
        </div>
      </section>
      {/* Categories */}
      <section className="py-8 px-4 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-10 w-32 bg-white/[0.03] rounded-lg animate-pulse flex-shrink-0" />
            ))}
          </div>
        </div>
      </section>
      {/* Articles Grid */}
      <ArticleListSkeleton />
    </main>
  );
}
