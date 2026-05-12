import { Zap, Lock, Shield, HardDrive, Globe, Settings } from "lucide-react";
import { dedicatedConfig } from "@/config/hosting/dedicated";

const iconMap = { Zap, Lock, Shield, HardDrive, Globe, Settings };

export default function DedicatedFeatures() {
  const features = dedicatedConfig.features;
  const { featuresSection } = dedicatedConfig;

  const colorClasses = {
    yellow: 'border-yellow-500/20 bg-yellow-500/5 text-yellow-500',
    green: 'border-green-500/20 bg-green-500/5 text-green-500',
    blue: 'border-blue-500/20 bg-blue-500/5 text-blue-500',
    purple: 'border-purple-500/20 bg-purple-500/5 text-purple-500',
    cyan: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-500',
    orange: 'border-orange-500/20 bg-orange-500/5 text-orange-500',
  };

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-3">
            {featuresSection.title}
          </h2>
          <p className="max-w-2xl text-sm text-white/50">
            {featuresSection.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] as React.ComponentType<{ className?: string }>;
            return (
              <div
                key={index}
                className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]"
              >
                {/* Icon */}
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                  {IconComponent && <IconComponent className="h-5 w-5" />}
                </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
