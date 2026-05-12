"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function GlobalError({
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
    <html>
      <body className="bg-black">
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-md text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
              <AlertTriangle className="h-10 w-10 text-red-500" />
            </div>
            
            <h2 className="mb-3 text-2xl font-bold text-white">
              Application Error
            </h2>
            
            <p className="mb-6 text-white/60">
              A critical error occurred. Please refresh the page or contact support if the problem persists.
            </p>
            
            <button
              onClick={() => reset()}
              className="px-6 py-2.5 text-sm font-medium text-brand-text bg-brand hover:bg-brand/90 rounded-lg transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
