
import { Zap, ShieldCheck, Sliders, RotateCw, Headphones, Cloud } from "lucide-react";
import { homeConfig } from "@/config/home";

export default function Features() {
  const features = homeConfig.features;

  // Color mapping with fallback
  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      yellow: 'border-yellow-500/20 bg-yellow-500/5 text-yellow-500',
      green: 'border-green-500/20 bg-green-500/5 text-green-500',
      purple: 'border-purple-500/20 bg-purple-500/5 text-purple-500',
      blue: 'border-blue-500/20 bg-blue-500/5 text-blue-500',
      cyan: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-500',
      orange: 'border-orange-500/20 bg-orange-500/5 text-orange-500',
      red: 'border-red-500/20 bg-red-500/5 text-red-500',
      emerald: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-500',
      pink: 'border-pink-500/20 bg-pink-500/5 text-pink-500',
    };
    // Fallback to cyan if color not found
    return colorMap[color] || colorMap['cyan'];
  };

  return (
    <section
      id="features"
      className="relative w-full py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {features.title}
          </h2>
          <p className="max-w-2xl text-sm text-white/50">
            {features.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((feature, index) => {
            // Edge case: Skip if no title
            if (!feature.title) {
              return null;
            }

            // Fallback to Cloud if not imported
            const icons = { Zap, ShieldCheck, Sliders, RotateCw, Headphones, Cloud };
            const IconComponent = icons[feature.icon as keyof typeof icons] || Cloud;
            const colorClasses = getColorClasses(feature.color || 'cyan');
            return (
              <div
                key={index}
                className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04] flex flex-col min-h-[160px]"
              >
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border ${colorClasses} flex-shrink-0`}>
                  <IconComponent className="h-6 w-6 flex-shrink-0" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-white break-words line-clamp-2">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-sm leading-relaxed text-white/60 break-words line-clamp-3">{feature.description}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
