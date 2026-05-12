"use client";

import { jobsConfig } from "@/config/pages/jobs";

export default function JobsTeam() {
  const { team } = jobsConfig;

  return (
    <section id="team" className="py-12 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            {team.title}
          </h2>
          <p className="text-lg text-white/60">{team.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {team.members.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-16 h-16 rounded-full border-2 border-white/10 group-hover:border-white/20 transition-colors"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base mb-1 text-white">{member.name}</h3>
                  <p className="text-sm text-white/50">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Link to Open Positions */}
        <div className="mt-8 text-center">
          <a
            href="#openings"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
          >
            <span>View open positions</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
