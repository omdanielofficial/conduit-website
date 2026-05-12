"use client";

import { useState, useEffect } from "react";
import { saleBannerConfig } from "@/config/promotions/sale-banner";

const calculateTimeLeft = () => {
  const now = new Date().getTime();
  // Parse date in cross-browser compatible format (Safari doesn't like "YYYY-MM-DD HH:mm:ss UTC")
  const dateStr = saleBannerConfig.saleEndDate.replace(' ', 'T') + 'Z';
  const saleEnd = new Date(dateStr).getTime();
  
  // Handle invalid date (NaN)
  if (isNaN(saleEnd)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
  }
  
  const difference = saleEnd - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    ended: false,
  };
};

export default function SaleBanner() {
  // Use null initial state to prevent hydration mismatch
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number; ended: boolean } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Show loading skeleton until mounted to prevent hydration mismatch
  if (!mounted || !timeLeft) {
    return (
      <section className="relative w-full py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl bg-gradient-to-r from-white/5 via-white/[0.02] to-white/5 border border-white/10 p-4 sm:p-5 h-16 animate-pulse" />
        </div>
      </section>
    );
  }

  // If sale has ended or values are invalid, show ended message
  if (timeLeft.ended || isNaN(timeLeft.hours) || isNaN(timeLeft.minutes) || isNaN(timeLeft.seconds)) {
    return (
      <section className="relative w-full py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl bg-gradient-to-r from-white/5 via-white/[0.02] to-white/5 border border-white/10 p-4 sm:p-5">
            <div className="flex items-center justify-center gap-3">
              <span className="flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white/30"></span>
              </span>
              <p className="text-sm font-semibold text-white/60">
                Sale Ended • Thanks for your interest!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl bg-gradient-to-r from-brand/10 via-brand/5 to-brand/10 border border-brand/20 p-4 sm:p-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left: Main offer */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {saleBannerConfig.styling.showPulsingDot && (
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                  </span>
                )}
                <span className="text-xs font-bold text-brand uppercase tracking-wider">{saleBannerConfig.offer.badge}</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <p className="text-sm font-semibold text-white">
                  <span className="text-brand font-bold">{saleBannerConfig.offer.discount}</span> {saleBannerConfig.offer.duration} • {saleBannerConfig.offer.savings}
                </p>
                <p className="text-xs text-white/50">
                  {saleBannerConfig.subtext}
                </p>
              </div>
            </div>

            {/* Center: Timer */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/50 hidden sm:block">{saleBannerConfig.timerLabels.prefix}</span>
              <div className="flex items-center gap-2">
                {timeLeft.days > 0 && (
                  <>
                    <div className="flex flex-col items-center justify-center bg-black/30 border border-white/10 rounded px-2 py-1 min-w-[40px]">
                      <span className="text-sm font-bold text-white tabular-nums" suppressHydrationWarning>{String(timeLeft.days).padStart(2, '0')}</span>
                      <span className="text-[10px] text-white/40 uppercase">{saleBannerConfig.timerLabels.days}</span>
                    </div>
                    {saleBannerConfig.styling.showTimerDividers && <span className="text-white/30">:</span>}
                  </>
                )}
                <div className="flex flex-col items-center justify-center bg-black/30 border border-white/10 rounded px-2 py-1 min-w-[40px]">
                  <span className="text-sm font-bold text-white tabular-nums" suppressHydrationWarning>{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-[10px] text-white/40 uppercase">{saleBannerConfig.timerLabels.hours}</span>
                </div>
                {saleBannerConfig.styling.showTimerDividers && <span className="text-white/30">:</span>}
                <div className="flex flex-col items-center justify-center bg-black/30 border border-white/10 rounded px-2 py-1 min-w-[40px]">
                  <span className="text-sm font-bold text-white tabular-nums" suppressHydrationWarning>{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-[10px] text-white/40 uppercase">{saleBannerConfig.timerLabels.minutes}</span>
                </div>
                {saleBannerConfig.styling.showTimerDividers && <span className="text-white/30">:</span>}
                <div className="flex flex-col items-center justify-center bg-black/30 border border-white/10 rounded px-2 py-1 min-w-[40px]">
                  <span className="text-sm font-bold text-white tabular-nums" suppressHydrationWarning>{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-[10px] text-white/40 uppercase">{saleBannerConfig.timerLabels.seconds}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={saleBannerConfig.cta.link}
              className="group flex items-center gap-2 rounded-lg bg-brand px-6 py-2.5 text-sm font-bold text-brand-text transition-all hover:bg-brand/90"
            >
              {saleBannerConfig.cta.text}
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
