"use client";

import { jobsConfig } from "@/config/pages/jobs";
import { Code, Users, Target, Shield, Zap, Heart } from "lucide-react";

const iconMap: Record<string, any> = { Code, Users, Target, Shield, Zap, Heart };

export default function JobsCulture() {
  const { culture } = jobsConfig;

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            {culture.title}
          </h2>
          <p className="text-lg text-white/60">{culture.subtitle}</p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {culture.values.map((value, index) => {
            const Icon = iconMap[value.icon];
            const colors = [
              { border: "border-blue-500/20", bg: "bg-blue-500/5", icon: "text-blue-500" },
              { border: "border-purple-500/20", bg: "bg-purple-500/5", icon: "text-purple-500" },
              { border: "border-cyan-500/20", bg: "bg-cyan-500/5", icon: "text-cyan-500" },
              { border: "border-green-500/20", bg: "bg-green-500/5", icon: "text-green-500" },
              { border: "border-pink-500/20", bg: "bg-pink-500/5", icon: "text-pink-500" },
              { border: "border-orange-500/20", bg: "bg-orange-500/5", icon: "text-orange-500" },
            ];
            const color = colors[index % colors.length];
            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className={`inline-flex rounded-xl border ${color.border} ${color.bg} p-3`}>
                    <Icon className={`w-6 h-6 ${color.icon}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-white">{value.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
