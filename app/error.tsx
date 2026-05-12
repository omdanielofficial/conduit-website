"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
          <AlertCircle className="h-10 w-10 text-red-500" />
        </div>
        
        <h2 className="mb-3 text-2xl font-bold text-white">
          Something went wrong!
        </h2>
        
        <p className="mb-6 text-white/60">
          We encountered an error while loading this page. Please try again.
        </p>
        
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 text-sm font-medium text-brand-text bg-brand hover:bg-brand/90 rounded-lg transition-colors"
          >
            Try again
          </button>
          
          <button
            onClick={() => window.location.href = "/"}
            className="px-6 py-2.5 text-sm font-medium text-white border border-white/10 hover:bg-white/5 rounded-lg transition-colors"
          >
            Go home
          </button>
        </div>
      </div>
    </div>
  );
}
