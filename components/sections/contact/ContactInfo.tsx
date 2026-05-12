"use client";

import { Mail } from "lucide-react";
import { contactConfig } from "@/config/pages/contact";
import { socialLinks } from "@/config/branding.exports";
import { SocialIcon } from "@/components/ui/SocialIcon";

export default function ContactInfo() {
  return (
    <section className="relative w-full py-12 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Business Details
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/60">
            Follow us on social media and find company information
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Email & Phone */}
          <div className="space-y-4">
            {/* Email */}
            <a
              href={`mailto:${contactConfig.contactInfo.email}`}
              className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-4 backdrop-blur transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/5">
                <Mail className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <div className="text-xs font-medium text-white/40 mb-1">EMAIL</div>
                <div className="text-white font-medium">{contactConfig.contactInfo.email}</div>
              </div>
            </a>



            {/* Social Media Links - Now uses centralized config */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-all hover:border-white/20 hover:bg-white/[0.06]"
                  title={social.name}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Information */}
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <h3 className="mb-5 text-lg font-semibold text-white">
              Company Information
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-xs font-medium text-white/40 mb-1.5">COMPANY NAME</div>
                <div className="text-white font-medium">Intranex Limited (T/A Conduit)</div>
              </div>
              <div className="h-px bg-white/5" />
              <div>
                <div className="text-xs font-medium text-white/40 mb-1.5">OFFICE ADDRESS</div>
                <div className="text-sm text-white/70 leading-relaxed">
                  {contactConfig.contactInfo.address.line1}<br />
                  {contactConfig.contactInfo.address.line2}<br />
                  {contactConfig.contactInfo.address.city}<br /> 
                  {contactConfig.contactInfo.address.state} {contactConfig.contactInfo.address.zip}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
