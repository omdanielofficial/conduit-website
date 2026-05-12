import { Activity, Server, Headphones, Zap, Shield, Download, Database, Settings, Globe, Users, MemoryStick, Cpu, HardDrive, Package } from "lucide-react";

interface GameFeaturesProps {
  gameName: string;
  logo: string;
  features: {
    icon: string;
    title: string;
    description: string;
    color?: string;
  }[];
}

export default function GameFeatures({ gameName, features }: GameFeaturesProps) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = 
    { Activity, Server, Headphones, Zap, Shield, Download, Database, Settings, Globe, Users, MemoryStick, Cpu, HardDrive, Package };
  const colorClasses = {
    yellow: "border-yellow-500/20 bg-yellow-500/5 text-yellow-500",
    green: "border-green-500/20 bg-green-500/5 text-green-500",
    blue: "border-blue-500/20 bg-blue-500/5 text-blue-500",
    purple: "border-purple-500/20 bg-purple-500/5 text-purple-500",
    cyan: "border-cyan-500/20 bg-cyan-500/5 text-cyan-500",
    orange: "border-orange-500/20 bg-orange-500/5 text-orange-500",
    brand: "border-brand/20 bg-brand/5 text-brand",
  };

  return (
    <section className="py-12 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-3">
            {gameName} Features
          </h2>
          <p className="max-w-2xl text-sm text-white/50">
            Everything you need to launch and scale a {gameName} server with us
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]"
              >
                {/* Icon */}
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${colorClasses[(feature.color || 'brand') as keyof typeof colorClasses]}`}>
                  {IconComponent && <IconComponent className="h-6 w-6" />}
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-white">
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
