"use client";

import { gamesCommonConfig } from "@/config/games/common";
import { Shield, Zap, HardDrive, LifeBuoy, Database, Lock, Globe, Gauge } from "lucide-react";

const iconMap = { Shield, Zap, HardDrive, LifeBuoy, Database, Lock, Globe, Gauge };

export default function CommonIncludes() {
  return (
    <section className="relative w-full pt-2 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/5">
          <h3 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4 text-center">
            {gamesCommonConfig.title}
          </h3>
          
          <div className="flex justify-center">
            <div className="inline-grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-3">
              {gamesCommonConfig.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors whitespace-nowrap"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                      <IconComponent className={`h-4 w-4 text-${feature.color} flex-shrink-0`} />
                    </div>
                    <span className="font-medium">{feature.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
