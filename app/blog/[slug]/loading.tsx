export default function Loading() {
  return (
    <main className="min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <div className="h-4 w-20 bg-white/[0.05] rounded animate-pulse" />
          <div className="h-4 w-4 bg-white/[0.05] rounded animate-pulse" />
          <div className="h-4 w-32 bg-white/[0.05] rounded animate-pulse" />
        </div>
        {/* Title */}
        <div className="h-12 bg-white/[0.05] rounded w-3/4 mb-4 animate-pulse" />
        {/* Metadata */}
        <div className="flex items-center gap-6 mb-12">
          <div className="h-4 w-24 bg-white/[0.05] rounded animate-pulse" />
          <div className="h-4 w-32 bg-white/[0.05] rounded animate-pulse" />
          <div className="h-4 w-28 bg-white/[0.05] rounded animate-pulse" />
        </div>
        {/* Content */}
        <div className="space-y-4">
          {[100, 85, 92, 78, 95, 88, 72, 90, 83, 97, 75, 89].map((width, i) => (
            <div key={i} className="h-4 bg-white/[0.05] rounded w-full animate-pulse" style={{ width: `${width}%` }} />
          ))}
        </div>
      </article>
    </main>
  );
}
