"use client";

import { useState } from "react";
import { jobsConfig } from "@/config/pages/jobs";
import { brandingConfig } from "@/config/branding.exports";
import { MapPin, Clock, Briefcase, ChevronDown, CheckCircle2, Mail } from "lucide-react";

export default function JobsOpenings() {
  const { openings } = jobsConfig;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="openings" className="py-12 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Join Our Team
          </h2>
          <p className="text-lg text-white/60">
            Apply for an open position and join the future of game hosting
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {openings.map((job) => {
            const isExpanded = expandedId === job.id;

            return (
              <div
                key={job.id}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                {/* Job Header - Always visible */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : job.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 rounded border border-white/10 bg-white/[0.02] text-white/60">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-white/90 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-white/60 mb-3">{job.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        {job.department}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-white/40 transition-transform duration-300 flex-shrink-0 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Job Details - Expandable */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? "max-h-[2000px]" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 space-y-6 border-t border-white/5">
                    {/* Responsibilities */}
                    <div className="pt-6">
                      <h4 className="text-sm font-semibold mb-3">
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-white/60"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3">
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-white/60"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Nice to have */}
                    {job.bonus && job.bonus.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-3">
                          Additional Information
                        </h4>
                        <ul className="space-y-2">
                          {job.bonus.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm text-white/60"
                            >
                              <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Apply button */}
                    <div className="pt-4">
                      <a
                        href={`mailto:jobs@intranex.org`}
                        className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-lg bg-brand text-brand-text hover:bg-brand/90 transition-colors text-sm font-semibold cursor-pointer"
                      >
                        Start Application
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Edge Case: No positions available */}
          {openings.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/10 bg-white/5 mb-4">
                <Briefcase className="w-8 h-8 text-white/50" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">No Open Positions</h3>
              <p className="text-sm text-white/60 mb-6 max-w-md mx-auto">
                We don't have any open positions at the moment, but we're always looking for exceptional talent.
              </p>
              <a
                href={`mailto:${brandingConfig.emails.careers}?subject=General Application`}
                className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                Email us your resume
              </a>
            </div>
          )}

          {/* Don't see your role - Only show when there ARE positions */}
          {openings.length > 0 && (
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 rounded border border-white/10 bg-white/[0.02] text-white/60">
                      Open Application
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Don't see your desired role?
                  </h3>
                  <p className="text-sm text-white/60 mb-3">
                    We're always looking for exceptional people. Email us your resume and tell us why you should work with us.
                  </p>
                  <a
                    href={`mailto:${brandingConfig.emails.careers}?subject=Open Application`}
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {brandingConfig.emails.careers}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
