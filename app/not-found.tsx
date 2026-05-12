import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <div className="border border-white/10 rounded-2xl bg-white/[0.02] p-12 text-center backdrop-blur-sm">
          {/* 404 */}
          <h1 className="text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brand to-brand/80 bg-clip-text text-transparent">
              404
            </span>
          </h1>

          {/* Message */}
          <h2 className="text-3xl font-semibold text-white mb-3">
            Page Not Found
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-7 text-sm font-medium text-brand-text transition-all hover:bg-brand/90"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/10"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
