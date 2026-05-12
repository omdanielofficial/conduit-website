"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Check, MemoryStick, HardDrive, Cpu, Zap, Users, Package } from "lucide-react";
import { getGames, calculatePlanPrice, type GameConfig } from "@/config/games/index";
import { currencyConfig } from "@/config/shared/currency";

interface PricingProps {
  preselectedGame?: string;
}

export default function Pricing({ preselectedGame }: PricingProps = {}) {
  const allGames = getGames();
  const [selectedGame, setSelectedGame] = useState<GameConfig | null>(
    preselectedGame 
      ? allGames.find(g => g.slug === preselectedGame) || allGames[0] || null
      : allGames[0] || null
  );
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState<string>("monthly");
  const [expandedPlans, setExpandedPlans] = useState(false);
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Icon mapping for plan specs
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { MemoryStick, HardDrive, Cpu, Zap, Users, Package };

  const getIcon = (iconName: string) => {
    return iconMap[iconName] || Cpu;
  };

  // Auto-select first region when game is selected
  useEffect(() => {
    if (selectedGame && selectedGame.regions.length > 0 && !selectedRegion) {
      setSelectedRegion(selectedGame.regions[0].id);
    }
  }, [selectedGame]);

  // Auto-select first billing period when game is selected
  useEffect(() => {
    if (selectedGame && selectedGame.billingPeriods.length > 0) {
      setSelectedBillingPeriod(selectedGame.billingPeriods[0].id);
    }
  }, [selectedGame]);



  const plansToShow = !preselectedGame 
    ? Math.min(4, selectedGame?.plans.length || 0)
    : (expandedPlans ? selectedGame?.plans.length || 0 : Math.min(6, selectedGame?.plans.length || 0));

  return (
    <section
      id="pricing"
      className="relative w-full py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {preselectedGame ? 'Select Your Plan' : 'Transparent Pricing'}
          </h2>
          <p className="max-w-2xl text-sm text-white/50">
            {preselectedGame 
              ? 'Choose the perfect plan for your server and scale anytime' 
              : 'Select your game and region to see pricing with no hidden fees'}
          </p>
          
          {/* Selection Summary - Only show when game is selected */}
          {selectedGame && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-brand/30 bg-gradient-to-r from-brand/10 via-brand/5 to-transparent px-4 py-2.5 text-sm shadow-lg shadow-brand/5" role="status" aria-live="polite">
              <span className="text-white/60">Showing prices for:</span>
              <span className="font-semibold text-brand">
                {selectedGame.name}
              </span>
              {selectedRegion && (
                <>
                  <span className="text-white/30">•</span>
                  <span className="font-semibold text-white">
                    {selectedGame.regions.find(r => r.id === selectedRegion)?.name}
                  </span>
                </>
              )}
              {!preselectedGame && (
                <button
                  onClick={() => {
                    setSelectedGame(null);
                    setSelectedRegion(null);
                  }}
                  className="ml-2 text-white/40 hover:text-brand/70 transition-colors"
                  aria-label="Clear selection"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Game Icons - Only show on homepage */}
        {!preselectedGame && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-white mb-3">
            Select Game {!selectedGame && <span className="text-brand ml-1">*</span>}
          </h3>
          <div className="flex gap-4 flex-wrap">
            {allGames.length > 0 ? allGames.map((game) => (
              <button
                key={game.id}
                onClick={() => {
                  if (selectedGame?.id !== game.id) {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setSelectedGame(game);
                      setSelectedRegion(null);
                      setTimeout(() => setIsTransitioning(false), 50);
                    }, 150);
                  }
                }}
                className="group relative transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                aria-label={`Select ${game.name}`}
                aria-pressed={selectedGame?.id === game.id}
              >
                <div className={`h-20 w-20 rounded-lg overflow-hidden transition-all duration-200 ${
                  selectedGame?.id === game.id
                    ? "ring-2 ring-brand ring-offset-2 ring-offset-background shadow-lg shadow-brand/30 opacity-100"
                    : "opacity-70 hover:opacity-90"
                }`}>
                  <Image
                    src={game.logo}
                    alt={game.name}
                    width={80}
                    height={80}
                    className="object-contain"
                    priority={selectedGame?.id === game.id}
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  <div className="bg-background/95 border border-white/10 rounded-lg px-3 py-1.5 shadow-xl">
                    <span className="text-xs font-semibold text-white">{game.name}</span>
                  </div>
                </div>
              </button>
            )) : (
              <p className="text-sm text-white/50">No games available</p>
            )}
          </div>
        </div>
        )}

        {/* Regions */}
        <div className={`mb-6 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}>
          <h3 className="text-sm font-semibold text-white mb-3">
            Select Region {selectedGame && !selectedRegion && <span className="text-brand">*</span>}
          </h3>
          {!selectedGame ? (
            <div className="mb-6 rounded-lg border border-blue-400/20 bg-blue-400/5 p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-sm font-medium text-blue-300 mb-1">Select a Game First</h4>
                  <p className="text-sm text-blue-200/70">
                    Choose a game above to see available server regions and pricing.
                  </p>
                </div>
              </div>
            </div>
          ) : selectedGame && selectedGame.regions.length === 0 ? (
            <div className="mb-6 rounded-lg border border-yellow-400/20 bg-yellow-400/5 p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="text-sm font-medium text-yellow-300 mb-1">No Regions Available</h4>
                  <p className="text-sm text-yellow-200/70">
                    This game doesn't have any server regions configured yet.
                  </p>
                </div>
              </div>
            </div>
          ) : (
          <div className="flex flex-wrap gap-2">
            {selectedGame?.regions.map((region) => {
              const isActive = selectedRegion === region.id;
              
              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`relative flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200 ${
                    isActive
                      ? "bg-brand/10 border-brand text-white"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/[0.08] hover:border-white/20 hover:text-white"
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
              );
            })}
          </div>
          )}
        </div>

        {/* Billing Period - Mobile Responsive Grid */}
        {(preselectedGame || selectedGame) && (
          <div className={`mb-6 transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white">
                Billing Cycle
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
              {selectedGame?.billingPeriods.map((period) => (
                <button
                  key={period.id}
                  onClick={() => setSelectedBillingPeriod(period.id)}
                  className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none border ${
                    selectedBillingPeriod === period.id
                      ? "bg-brand/15 text-white border-brand/50 shadow-md shadow-brand/10"
                      : "text-white/60 hover:text-white hover:bg-white/[0.08] border-white/10 hover:border-white/20"
                  }`}
                >
                  <span className="relative z-10">{period.label}</span>
                  {period.badge && (
                    <span className="ml-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-green-500/20 text-green-400">
                      {period.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Plans Grid */}
        <div className={`mt-8 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-1">
              Available Plans
            </h3>
            {selectedGame && (
              <p className="text-xs text-white/40">
                {selectedGame.plans.length} {selectedGame.plans.length === 1 ? 'plan' : 'plans'} available for {selectedGame.name}
              </p>
            )}
          </div>
          
          {/* Show info message if selections are incomplete */}
          {(!selectedGame || !selectedRegion) && !preselectedGame && (
            <div className="mb-6 rounded-lg border border-blue-400/20 bg-blue-400/5 p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-sm font-medium text-blue-300 mb-1">Get Started</h4>
                  <p className="text-sm text-blue-200/70">
                    {!selectedGame 
                      ? "Choose a game above to see available plans and pricing for different regions."
                      : "Select a region to view pricing for your chosen game."}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {!selectedGame || selectedGame.plans.length === 0 ? (
              <div className="col-span-full flex items-center justify-center p-12 rounded-lg border border-white/5 bg-white/[0.01]">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-3 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <p className="text-white/50 text-sm">No plans available at the moment.</p>
                </div>
              </div>
            ) : selectedGame.plans.slice(0, plansToShow).map((plan) => {
              const rawPrice = selectedRegion 
                ? calculatePlanPrice(plan, selectedRegion, selectedBillingPeriod)
                : null;
              const price = rawPrice !== null ? Number(rawPrice.toFixed(2)) : null;
              const isPriceAvailable = price !== null;
              
              // Get purchase URL
              const purchaseUrl = selectedRegion 
                ? plan.purchaseUrls?.[selectedRegion]?.[selectedBillingPeriod] || "#"
                : "#";
              
              return (
                <div
                  key={plan.id}
                  className={`group relative flex flex-col rounded-xl transition-all duration-200 overflow-hidden ${
                    plan.popular
                      ? "border-2 border-brand/50 bg-brand/5"
                      : "bg-white/[0.02] border border-white/10 hover:border-white/20"
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
                      <div className="mb-5">
                        <div className="flex items-baseline">
                          {price === 0 ? (
                            <span className="text-3xl font-bold text-brand">Free</span>
                          ) : (
                            <>
                              {currencyConfig.position === "before" && (
                                <span className="text-2xl text-white font-bold" title={currencyConfig.code}>
                                  {currencyConfig.symbol}
                                </span>
                              )}
                              <span className="text-2xl font-bold text-white">
                                {price}
                              </span>
                              {currencyConfig.position === "after" && (
                                <span className="text-2xl text-white font-bold" title={currencyConfig.code}>
                                  {currencyConfig.symbol}
                                </span>
                              )}
                              <span className="text-white/50 text-sm">
                                /{selectedBillingPeriod === "lifetime" ? "lifetime" : selectedBillingPeriod}
                              </span>
                            </>
                          )}
                        </div>
                        {selectedGame.billingPeriods.find(p => p.id === selectedBillingPeriod)?.badge && price > 0 && (
                          <div className="mt-1.5">
                            <span className="inline-block text-[10px] font-bold px-2 py-1 rounded-md bg-green-500/20 text-green-400">
                              {selectedGame.billingPeriods.find(p => p.id === selectedBillingPeriod)?.badge}
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="mb-4 h-9 flex items-center">
                        <span className="text-white/30 text-xs">
                          {!selectedRegion ? "Select region" : "Not available"}
                        </span>
                      </div>
                    )}

                    {/* Specs */}
                    <div className="mb-4 p-3 rounded-lg bg-white/[0.03] border border-white/10 space-y-2.5">
                      {selectedGame?.planSpecs.map((specDef, idx) => {
                        const Icon = getIcon(specDef.icon || "Cpu");
                        const value = plan.specs[specDef.id];
                        return (
                          <div key={specDef.id} className="flex items-center gap-2">
                            <Icon className={`h-3.5 w-3.5 flex-shrink-0 ${
                              idx === 0 ? "text-blue-400" :
                              idx === 1 ? "text-purple-400" :
                              idx === 2 ? "text-emerald-400" :
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

                    {/* Features */}
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

                    {/* CTA */}
                    {isPriceAvailable ? (
                      <Link
                        href={purchaseUrl}
                        className={`w-full py-2.5 rounded-md text-sm font-medium text-center transition-colors cursor-pointer ${
                          plan.popular
                            ? "bg-brand hover:bg-brand/90 text-white"
                            : "bg-white/10 hover:bg-white/15 text-white border border-white/20"
                        }`}
                      >
                        Configure Plan
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

        {/* Expand/Redirect Buttons */}
        {!preselectedGame && selectedGame ? (
          <div className="mt-10 text-center">
            <Link
              href={`/games/${selectedGame.slug}`}
              className="group inline-flex items-center gap-2.5 px-6 py-3 bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 hover:border-white/30 text-white rounded-lg transition-all duration-200 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span>View All {selectedGame.name} Plans</span>
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="text-xs text-white/40 mt-3">Explore detailed specs, features, and pricing options</p>
          </div>
        ) : preselectedGame && selectedGame && selectedGame.plans.length > 6 ? (
          <div className="mt-10 text-center">
            <button
              onClick={() => setExpandedPlans(!expandedPlans)}
              className="group inline-flex items-center gap-2.5 px-6 py-3 bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 hover:border-white/30 rounded-lg transition-all duration-200 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-expanded={expandedPlans}
              aria-label={expandedPlans ? "Show fewer plans" : `Show ${selectedGame.plans.length - 6} more plans`}
            >
              {expandedPlans ? (
                <>
                  <span>Show Less</span>
                  <svg className="w-4 h-4 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  <span>Show {selectedGame.plans.length - 6} More Plans</span>
                  <svg className="w-4 h-4 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
            <p className="text-xs text-white/40 mt-3">{expandedPlans ? "Viewing all plans" : "More options available"}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
