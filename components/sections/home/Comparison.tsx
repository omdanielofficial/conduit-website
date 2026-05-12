"use client";

import { Check, X } from "lucide-react";
import { brandingConfig } from "@/config/branding.exports";
import { comparisonConfig } from "@/config/shared/comparison";

export default function Comparison() {
  // Providers Configuration - Edit in config file
  const PROVIDERS_CONFIG = [
    { id: "primary", name: brandingConfig.name, highlight: true },
    ...comparisonConfig.providers.slice(1), // Use rest of providers from config
  ];

  // Features Configuration - From config file
  const FEATURES_CONFIG = comparisonConfig.features[0].items.map(item => ({
    name: item.name,
    values: { 
      primary: item.latch, 
      competitor1: item.competitor1, 
      competitor2: item.competitor2, 
      competitor3: item.competitor3 
    }
  }));

  // Edge case: No providers configured
  if (!PROVIDERS_CONFIG || PROVIDERS_CONFIG.length === 0) {
    return null;
  }

  // Edge case: No features configured
  if (!FEATURES_CONFIG || FEATURES_CONFIG.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full py-12 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {comparisonConfig.section.title}
          </h2>
          <p className="max-w-2xl text-sm text-white/50">
            {comparisonConfig.section.description}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="relative w-full overflow-auto rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
          <table className="w-full caption-bottom text-sm border-collapse">
            <thead className="border-b border-white/10 bg-white/[0.02]">
              <tr>
                <th className="h-14 px-6 text-left align-middle font-semibold text-white/60 text-xs uppercase tracking-wider">
                  Feature
                </th>
                {PROVIDERS_CONFIG.map((provider) => (
                  <th
                    key={provider.id}
                    className={`h-14 px-6 text-center align-middle font-semibold ${
                      provider.highlight ? "text-white" : "text-white/60"
                    }`}
                  >
                    <span className="text-sm">{provider.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {FEATURES_CONFIG.map((feature, index) => (
                <tr
                  key={index}
                  className="hover:bg-white/[0.03] transition-colors group"
                >
                  <td className="p-4 px-6 align-middle text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">{feature.name}</span>
                  </td>
                  {PROVIDERS_CONFIG.map((provider) => {
                    const hasFeature = feature.values[provider.id as keyof typeof feature.values];
                    const isHighlighted = provider.highlight && hasFeature;
                    
                    return (
                      <td 
                        key={provider.id}
                        className={`p-4 px-6 align-middle text-center ${
                          isHighlighted ? "bg-brand/[0.03]" : ""
                        }`}
                      >
                        {hasFeature ? (
                          <Check 
                            className={`h-4 w-4 inline-block ${
                              provider.highlight ? "text-brand" : "text-white/30"
                            }`} 
                            strokeWidth={provider.highlight ? 2.5 : 2} 
                          />
                        ) : (
                          <X className="h-4 w-4 text-white/20 inline-block" strokeWidth={2} />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-white/60">
            {comparisonConfig.cta.message} <span className="text-white font-medium">{comparisonConfig.cta.highlight}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
