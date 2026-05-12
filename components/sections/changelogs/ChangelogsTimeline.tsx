"use client";

import { changelogsConfig } from "@/config/changelogs";
import { Sparkles, TrendingUp, Wrench, AlertTriangle, CheckCircle2 } from "lucide-react";

const iconMap = { Sparkles, TrendingUp, Wrench, AlertTriangle, CheckCircle2 };

export default function ChangelogsTimeline() {
  const { versions, typeStyles } = changelogsConfig;

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      blue: "text-purple-400 border-purple-500/20 bg-purple-500/10",
      green: "text-blue-400 border-blue-500/20 bg-blue-500/10",
      orange: "text-orange-400 border-orange-500/20 bg-orange-500/10",
      red: "text-red-400 border-red-500/20 bg-red-500/10",
      purple: "text-purple-400 border-purple-500/20 bg-purple-500/10",
      yellow: "text-yellow-400 border-yellow-500/20 bg-yellow-500/10",
    };
    return colors[color] || "text-white/40 border-white/10 bg-white/5";
  };

  return (
    <section className="bg-black py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {versions.map((version, versionIndex) => (
            <article 
              key={versionIndex} 
              className={`relative rounded-2xl border ${typeStyles[version.type as keyof typeof typeStyles].card} p-8 transition-all hover:border-white/20`}
            >
              {/* Header */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className={`rounded-lg border px-3 py-1.5 text-sm font-semibold ${typeStyles[version.type as keyof typeof typeStyles].badge}`}>
                  v{version.version}
                </div>
                <time className="text-sm text-white/40">{version.date}</time>
              </div>

              {/* Changes */}
              <div className="space-y-6">
                {version.changes.map((changeGroup, groupIndex) => {
                  const IconComponent = iconMap[changeGroup.icon as keyof typeof iconMap] as React.ComponentType<{ className?: string }>;
                  return (
                  <div key={groupIndex}>
                    {/* Category Header */}
                    <div className={`mb-3 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-semibold ${getColorClass(changeGroup.color)}`}>
                      <IconComponent className="h-4 w-4" />
                      {changeGroup.category}
                    </div>
                    
                    {/* Items */}
                    <ul className="ml-1 space-y-2.5 pl-2">
                      {changeGroup.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="relative flex gap-3 text-sm text-white/70 leading-relaxed">
                          <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        {/* End Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white/50">
            <CheckCircle2 className="h-4 w-4" />
            <span>You're all caught up!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
