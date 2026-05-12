"use client";

import { Cpu, MemoryStick, HardDrive, Network, Zap, Lock, ArrowUpCircle, Clock, DollarSign, Target } from "lucide-react";
import { dedicatedConfig } from "@/config/hosting/dedicated";

export default function DedicatedComparison() {
  const { comparison } = dedicatedConfig;
  
  const iconMap = { Cpu, MemoryStick, HardDrive, Network, Zap, Lock, ArrowUpCircle, Clock, DollarSign, Target };

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-3">
            {comparison.title}
          </h2>
          <p className="max-w-2xl text-sm text-white/50">
            {comparison.description}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                    Dedicated Servers
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/60">
                    Shared Game Hosting
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparison.data.map((row, index) => {
                  const Icon = iconMap[row.icon as keyof typeof iconMap];
                  return (
                  <tr key={index} className="transition-colors hover:bg-white/[0.02]">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Icon className={`h-4 w-4 ${row.iconColor}`} />
                        <span className="text-sm font-medium text-white/80">{row.feature}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm ${row.dedicatedBetter ? 'text-white font-medium' : 'text-white/60'}`}>
                        {row.dedicated}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm ${!row.dedicatedBetter ? 'text-white font-medium' : 'text-white/60'}`}>
                        {row.vps}
                      </span>
                    </td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
