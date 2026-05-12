import { Mail, ExternalLink, FileText } from "lucide-react";
import { partnersConfig } from "@/config/pages/partners";
import { brandingConfig } from "@/config/branding.exports";

const iconMap = { Mail, ExternalLink, FileText };

export default function PartnerCTA() {
  const { cta } = partnersConfig;
  const Icon = iconMap[cta.button.icon as keyof typeof iconMap] || Mail;
  const action = cta.button.action as { type: string; url?: string; openInNewTab?: boolean; email?: string; subject?: string; body?: string };
  
  // Build href based on action type
  const href = action.type === "link" 
    ? action.url! 
    : `mailto:${action.email}?subject=${action.subject}&body=${action.body}`;
  
  const linkProps = action.type === "link" && action.openInNewTab
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <section id="apply" className="py-12 scroll-mt-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              {cta.title}
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {cta.subtitle.replace(/us\./g, `${brandingConfig.name}.`)}
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href={href}
              {...linkProps}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black hover:bg-white/90 px-8 py-3.5 text-base font-semibold transition-all"
            >
              <Icon className="w-5 h-5" />
              {cta.button.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
