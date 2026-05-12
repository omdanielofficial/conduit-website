import { Headphones, Link, Gift, Coins } from "lucide-react";
import { partnersConfig } from "@/config/pages/partners";

const iconMap = { Headphones, Link, Gift, Coins };

export default function PartnerBenefits() {
  const benefits = partnersConfig.benefits;

  return (
    <section className="py-12 relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Partner Perks
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Unlock exclusive perks and rewards designed to help you thrive
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            
            const colorClasses: Record<string, { border: string; bg: string; icon: string }> = {
              blue: { border: "border-blue-500/20", bg: "bg-blue-500/5", icon: "text-blue-500" },
              purple: { border: "border-purple-500/20", bg: "bg-purple-500/5", icon: "text-purple-500" },
              green: { border: "border-green-500/20", bg: "bg-green-500/5", icon: "text-green-500" },
              yellow: { border: "border-yellow-500/20", bg: "bg-yellow-500/5", icon: "text-yellow-500" },
            };
            const colors = colorClasses[benefit.color];
            
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
              >
                {/* Icon */}
                <div className={`mb-4 inline-flex items-center justify-center rounded-xl border ${colors.border} ${colors.bg} p-3 ${colors.icon}`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
