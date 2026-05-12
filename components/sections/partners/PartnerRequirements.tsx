import { Youtube, Twitch, Globe, Code, MessageCircle, CircleQuestionMark } from "lucide-react";
import { partnersConfig } from "@/config/pages/partners";

const iconMap = { Youtube, Twitch, Globe, Code, MessageCircle, CircleQuestionMark };

export default function PartnerRequirements() {
  const { requirements } = partnersConfig;

  return (
    <section id="requirements" className="py-12 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            {requirements.title}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {requirements.subtitle}
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {requirements.items.map((req, index) => {
            const Icon = iconMap[req.icon as keyof typeof iconMap];
            
            const colorClasses: Record<string, { text: string; bg: string; border: string }> = {
              red: { text: "text-red-500", bg: "bg-red-500/5", border: "border-red-500/20" },
              purple: { text: "text-purple-500", bg: "bg-purple-500/5", border: "border-purple-500/20" },
              blue: { text: "text-blue-500", bg: "bg-blue-500/5", border: "border-blue-500/20" },
              green: { text: "text-green-500", bg: "bg-green-500/5", border: "border-green-500/20" },
              indigo: { text: "text-indigo-500", bg: "bg-indigo-500/5", border: "border-indigo-500/20" },
              sky: { text: "text-sky-500", bg: "bg-sky-500/5", border: "border-sky-500/20" }
            };
            const colors = colorClasses[req.color];
            
            return (
              <div
                key={index}
                className={`relative rounded-2xl border ${colors.border} ${colors.bg} p-8 backdrop-blur-sm`}
              >
                {/* Icon */}
                <div className={`mb-6 ${colors.text}`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Platform Name */}
                <div className="text-sm font-medium text-white/50 uppercase tracking-wide mb-3">
                  {req.platform}
                </div>

                {/* Metric */}
                <div className="text-3xl font-bold text-white mb-1">
                  {req.metric}
                </div>
                
                {/* Label */}
                <div className="text-sm text-white/60">
                  {req.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
