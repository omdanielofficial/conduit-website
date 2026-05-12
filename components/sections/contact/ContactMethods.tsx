"use client";

import { MessageSquare, Mail, Book, Briefcase } from "lucide-react";
import { contactConfig } from "@/config/pages/contact";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { MessageSquare, Mail, Book, Briefcase };

export default function ContactMethods() {
  const colorMap: Record<string, string> = {
    MessageSquare: "text-purple-400",
    Mail: "text-blue-400",
    Book: "text-green-400",
    Briefcase: "text-orange-400"
  };

  return (
    <section className="relative w-full py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Assistance & Resources
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Choose your preferred contact method or explore our resources
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactConfig.supportOptions.map((option, index) => {
            const IconComponent = iconMap[option.icon];
            const iconColor = colorMap[option.icon];
            
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04] flex flex-col"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02]">
                  {IconComponent && <IconComponent className={`h-6 w-6 ${iconColor}`} />}
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {option.title}
                </h3>
                <p className="mb-4 text-sm text-white/60 leading-relaxed">
                  {option.description}
                </p>

                {/* Availability */}
                <div className="mb-4 text-xs text-white/40">
                  {option.available}
                </div>

                {/* CTA Button */}
                <a
                  href={option.href}
                  target={option.href.startsWith('http') ? '_blank' : undefined}
                  rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="mt-auto inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/[0.04] w-fit"
                >
                  <span>{option.cta}</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
