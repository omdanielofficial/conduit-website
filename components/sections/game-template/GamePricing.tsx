"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Package, MemoryStick, Cpu, HardDrive } from "lucide-react";
import type { GameConfig } from "@/config/games/types";
import { calculatePlanPrice } from "@/config/games/index";
import { formatPriceComponents } from "@/lib/currency";

interface GamePricingProps {
  game: GameConfig;
}

export default function GamePricing({ game }: GamePricingProps) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    MemoryStick,
    Cpu,
    HardDrive,
    Package,
  };
  const [selectedRegion, setSelectedRegion] = useState(game.regions[0]?.id || "");
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState(
    game.billingPeriods[0]?.id || "monthly"
  );
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({});

  // Get the dynamic icon component from Lucide
  const getIcon = (iconName: string) => {
    return iconMap[iconName] || Package;
  };

  // Get billing period display info
  const selectedPeriodInfo = game.billingPeriods.find(
    (p) => p.id === selectedBillingPeriod
  );

  return (
    <section className="relative w-full py-12 bg-black" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Select Your Plan
          </h2>
          <p className="max-w-2xl text-base text-white/50">
            Select your region and plan to see pricing with no hidden fees
          </p>
        </div>

        {/* Region Selection */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-white mb-4">
            Select Region
          </h3>
          <div className="flex flex-wrap gap-3">
            {game.regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`relative flex items-center gap-3 px-5 py-3.5 rounded-xl border transition-all ${
                  selectedRegion === region.id
                    ? "bg-brand/10 border-brand text-white shadow-lg shadow-brand/10"
                    : "bg-white/[0.03] border-white/10 text-white/70 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                <Image
                  src={region.flag}
                  alt={region.name}
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">{region.name}</span>
                  <span className="text-xs text-white/40">{region.location}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Billing Period Selection */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white">
              Billing Cycle
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
            {game.billingPeriods.map((period) => (
              <button
                key={period.id}
                onClick={() => setSelectedBillingPeriod(period.id)}
                className={`relative px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none border ${
                  selectedBillingPeriod === period.id
                    ? "bg-brand/15 text-white border-brand/50 shadow-lg shadow-brand/10"
                    : "text-white/60 hover:text-white hover:bg-white/[0.08] border-white/10 hover:border-white/20"
                }`}
              >
                <span className="relative z-10">{period.label}</span>
                {period.badge && (
                  <span className="ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-green-500/20 text-green-400">
                    {period.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Note */}
        {game.note && (
          <div className="mb-10 text-center">
            <div className="inline-block rounded-xl border border-brand/20 bg-brand/5 px-5 py-2.5">
              <p className="text-sm text-brand">{game.note}</p>
            </div>
          </div>
        )}

        {/* Plans Grid */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xs font-medium text-white/50 uppercase tracking-wider">
              Available Plans
            </h3>
            <span className="text-xs text-white/30">{game.plans.length} plans available</span>
          </div>
          
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {game.plans.map((plan) => {
              const price = calculatePlanPrice(plan, selectedRegion, selectedBillingPeriod);
              const purchaseUrl = plan.purchaseUrls[selectedRegion]?.[selectedBillingPeriod];
              const isPriceAvailable = price !== null && price !== undefined && price >= 0;
              
              return (
                <div
                  key={plan.id}
                  className={`group relative flex flex-col rounded-xl transition-all duration-200 overflow-hidden ${
                    plan.popular
                      ? "border-2 border-brand/50 bg-brand/5"
                      : "bg-white/[0.02] border border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-white/5"
                  }`}
                >
                  {/* Diagonal Badge - Top Right */}
                  {plan.badge && (
                    <div className="absolute top-0 right-0 overflow-hidden w-20 h-20 pointer-events-none z-10">
                      <div className="absolute top-4 -right-6 w-28 bg-brand text-white text-[10px] font-semibold text-center py-1 rotate-45 shadow-md">
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  <div className="p-5 flex flex-col h-full">
                    {/* Plan Name */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {plan.name}
                        </h3>
                        <span className="inline-block text-[10px] font-bold px-2 py-1 rounded-md bg-green-500/20 text-green-400">
                          {plan.usp || 'PRO'}
                        </span>
                      </div>
                      {plan.description && (
                        <p className="text-xs text-white/50 mt-2 leading-relaxed">{plan.description}</p>
                      )}
                    </div>

                    {/* Price */}
                    {isPriceAvailable ? (
                      <div className="mb-5" role="status" aria-live="polite">
                        <div className="flex items-baseline">
                          {price === 0 ? (
                            <span className="text-3xl font-bold text-brand">Free</span>
                          ) : (
                            <>
                              {(() => {
                                const priceComponents = formatPriceComponents(price);
                                return (
                                  <>
                                    {priceComponents.position === "before" && (
                                      <span className="text-2xl text-white font-bold" title={priceComponents.code}>
                                        {priceComponents.symbol}
                                      </span>
                                    )}
                                    <span className="text-2xl font-bold text-white">
                                      {priceComponents.amount}
                                    </span>
                                    {priceComponents.position === "after" && (
                                      <span className="text-2xl text-white font-bold" title={priceComponents.code}>
                                        {priceComponents.symbol}
                                      </span>
                                    )}
                                  </>
                                );
                              })()}
                              <span className="text-white/50 text-sm">
                                /{selectedBillingPeriod === "lifetime" ? "lifetime" : selectedBillingPeriod}
                              </span>
                            </>
                          )}
                        </div>
                        {selectedPeriodInfo?.badge && price > 0 && (
                          <div className="mt-1.5">
                            <span className="inline-block text-[10px] font-bold px-2 py-1 rounded-md bg-green-500/20 text-green-400">
                              {selectedPeriodInfo.badge}
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="mb-4 h-9 flex items-center">
                        <span className="text-white/30 text-xs">
                          Not available
                        </span>
                      </div>
                    )}

                    {/* Key Specs */}
                    <div className="mb-4 p-3 rounded-lg bg-white/[0.03] border border-white/10 space-y-2.5">
                      {game.planSpecs.map((specDef, index) => {
                        const Icon = getIcon(specDef.icon || "Package");
                        const value = plan.specs[specDef.id];
                        return (
                          <div key={specDef.id} className="flex items-center gap-2">
                            <Icon className={`h-3.5 w-3.5 flex-shrink-0 ${
                              index === 0 ? "text-blue-400" :
                              index === 1 ? "text-purple-400" :
                              index === 2 ? "text-emerald-400" :
                              "text-cyan-400"
                            }`} />
                            <div className="flex items-center justify-between flex-1 min-w-0">
                              <span className="text-xs text-white/50">{specDef.label}</span>
                              <span className="text-xs font-medium text-white">
                                {value}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="h-px bg-white/5 my-3" />

                    {/* Features List */}
                    <div className="mb-4 flex-grow">
                      <ul className="space-y-1.5">
                        {(expandedFeatures[plan.id] ? plan.features : plan.features.slice(0, 3)).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2.5">
                            <Check className="h-4 w-4 text-brand flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span className="text-sm text-white/70 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {plan.features.length > 3 && (
                        <button
                          onClick={() => setExpandedFeatures(prev => ({ ...prev, [plan.id]: !prev[plan.id] }))}
                          className="group/more mt-2 text-xs text-white/40 hover:text-brand transition-colors flex items-center gap-1"
                        >
                          <span>{expandedFeatures[plan.id] ? 'Show less' : `+${plan.features.length - 3} more features`}</span>
                          <svg className={`w-3 h-3 transition-transform ${expandedFeatures[plan.id] ? 'rotate-180' : 'group-hover/more:translate-y-0.5'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* CTA Button with Unique URL */}
                    {isPriceAvailable && purchaseUrl ? (
                      <Link
                        href={purchaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-2.5 rounded-md text-sm font-medium text-center transition-colors cursor-pointer ${
                          plan.popular
                            ? "bg-brand hover:bg-brand/90 text-white"
                            : "bg-white/10 hover:bg-white/15 text-white border border-white/20"
                        }`}
                      >
                        Get Started
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="w-full py-2.5 rounded-lg text-sm font-medium text-center bg-white/[0.02] border border-white/10 text-white/30 cursor-not-allowed"
                      >
                        Unavailable
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-base text-white/50">
            Need a custom configuration?{" "}
            <Link href="/contact" className="text-brand hover:text-brand/80 underline underline-offset-4">
              Contact our team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
