"use client";

import { currencyConfig } from "@/config/shared/currency";
import { dedicatedConfig } from "@/config/hosting/dedicated";
import { Check, Cpu, Server, HardDrive, MemoryStick, Network } from "lucide-react";
import { useState } from "react";

export default function DedicatedPlans() {
  const [expandedFeatures, setExpandedFeatures] = useState<{ [key: number]: boolean }>({});
  const [showAllPlans, setShowAllPlans] = useState(false);

  const plans = dedicatedConfig.plans;

  const plansToShow = showAllPlans ? plans.length : Math.min(3, plans.length);

  const toggleFeatures = (index: number) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="plans" className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-3">
            {dedicatedConfig.plansSection.title}
          </h2>
          <p className="max-w-2xl text-sm text-white/50">
            {dedicatedConfig.plansSection.description} starting from {currencyConfig.position === "before" ? `${currencyConfig.symbol}${plans[0].price.monthly}` : `${plans[0].price.monthly}${currencyConfig.symbol}`}/mo
          </p>
        </div>

        {/* Plans List */}
        <div className="space-y-4">
          {plans.slice(0, plansToShow).map((plan, index) => {
            const isExpanded = expandedFeatures[index] || false;
            const visibleFeatures = isExpanded ? plan.features : plan.features.slice(0, 4);
            const hasMoreFeatures = plan.features.length > 4;

            return (
            <div
              key={index}
              className={`group relative rounded-lg transition-all ${
                plan.popular
                  ? "border-2 border-brand/50 bg-brand/5"
                  : "bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-2 right-6">
                  <div className="px-3 py-0.5 rounded-full bg-brand text-brand-text text-xs font-medium">
                    Recommended
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="grid gap-6 lg:grid-cols-[240px_1fr_200px] items-center">
                  {/* Plan Info & Price */}
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-white">
                        {plan.name}
                      </h3>
                    </div>
                    <div className="flex items-baseline gap-1 mt-3">
                      {currencyConfig.position === "before" ? (
                        <span className="text-3xl font-bold text-white" title={currencyConfig.code}>
                          {currencyConfig.symbol}{plan.price.monthly}
                        </span>
                      ) : (
                        <span className="text-3xl font-bold text-white" title={currencyConfig.code}>
                          {plan.price.monthly}{currencyConfig.symbol}
                        </span>
                      )}
                      <span className="text-white/40 text-sm">/mo</span>
                    </div>
                    <div className="mt-2 text-xs text-white/50">
                      {plan.price.setup === 0 ? (
                        <span className="text-green-400">No Setup Fees</span>
                      ) : (
                        <span>
                          {currencyConfig.position === "before" 
                            ? `${currencyConfig.symbol}${plan.price.setup}` 
                            : `${plan.price.setup}${currencyConfig.symbol}`} setup fee
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Specs & Features */}
                  <div className="grid sm:grid-cols-2 gap-6 lg:border-l lg:border-white/10 lg:pl-6">
                    {/* Key Specs */}
                    <div>
                      <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
                        Hardware
                      </div>
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2.5">
                          <Server className="h-4 w-4 text-brand flex-shrink-0" />
                          <span className="text-sm text-white/80">{plan.processor}</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Cpu className="h-4 w-4 text-brand flex-shrink-0" />
                          <span className="text-sm text-white/80">{plan.cores}</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <MemoryStick className="h-4 w-4 text-brand flex-shrink-0" />
                          <span className="text-sm text-white/80">{plan.ram}</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <HardDrive className="h-4 w-4 text-brand flex-shrink-0" />
                          <span className="text-sm text-white/80">{plan.storage}</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Network className="h-4 w-4 text-brand flex-shrink-0" />
                          <span className="text-sm text-white/80">{plan.bandwidth}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
                        Features
                      </div>
                      <ul className="space-y-2.5">
                        {visibleFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2.5">
                            <Check className="h-4 w-4 text-brand flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span className="text-sm text-white/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {hasMoreFeatures && (
                        <button 
                          onClick={() => toggleFeatures(index)}
                          className="group/more mt-2.5 text-xs text-white/40 hover:text-brand transition-colors flex items-center gap-1"
                        >
                          <span>{isExpanded ? 'Show less' : `+${plan.features.length - 4} more features`}</span>
                          <svg 
                            className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : 'group-hover/more:translate-y-0.5'}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="lg:text-center">
                    <a
                      href={plan.orderUrl}
                      className={`w-full py-3 rounded-lg text-sm font-semibold text-center transition-all flex items-center justify-center gap-2 ${
                        plan.popular
                          ? "bg-brand text-brand-text hover:bg-brand/90 cursor-pointer"
                          : "bg-white/[0.05] border border-white/20 text-white hover:bg-white/[0.08] hover:border-white/30"
                      }`}
                    >
                      Configure Server
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                    <p className="text-xs text-white/30 mt-2">Deployed within 12-24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          );})}
        </div>

        {/* Show More Plans Button */}
        {plans.length > 3 && !showAllPlans && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAllPlans(true)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-white/20 bg-white/[0.02] text-white text-sm font-medium hover:bg-white/[0.05] hover:border-white/30 transition-all"
            >
              <span>View All Plans</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Custom Configuration */}
        <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all p-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_200px] items-center">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-1.5">
                {dedicatedConfig.customConfig.title}
              </h3>
              <p className="text-sm text-white/60">
                {dedicatedConfig.customConfig.description}
              </p>
            </div>
            <div className="lg:text-center">
              <a href={dedicatedConfig.customConfig.buttonUrl} className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand hover:bg-brand/90 rounded-lg transition-all text-sm font-semibold text-brand-text cursor-pointer">
                {dedicatedConfig.customConfig.buttonText}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
