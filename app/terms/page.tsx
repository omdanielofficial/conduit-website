"use client";

import Link from "next/link";
import { useState } from "react";
import { termsConfig } from "@/config/legal/terms";

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = termsConfig.sections;
  const { lastUpdated } = termsConfig;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-brand transition-colors mb-12 group"
          >
            <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extralight tracking-tight text-white sm:text-5xl mb-3">
              Terms of Service
            </h1>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content with Sidebar */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Table of Contents - Sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-1">
                <div className="text-xs font-semibold text-white/40 mb-3 uppercase tracking-wider">Contents</div>
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveSection(index);
                      document.getElementById(`section-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-xs transition-all ${
                      activeSection === index
                        ? 'bg-brand/10 text-brand border-l-2 border-brand'
                        : 'text-white/50 hover:text-white/80 hover:bg-white/5 border-l-2 border-transparent'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-9">
              <div className="prose prose-invert max-w-none">
                <div className="space-y-12">
                  {sections.map((section, index) => (
                    <div 
                      key={index} 
                      id={`section-${index}`}
                      className="scroll-mt-24"
                    >
                      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-md bg-brand/10 border border-brand/20 text-brand text-xs flex items-center justify-center">
                          {index + 1}
                        </span>
                        {section.title.replace(/^\d+\.\s*/, '')}
                      </h2>
                      <div className="space-y-3">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-sm text-white/50 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Agreement Note */}
                <div className="mt-16 p-5 rounded-lg border border-brand/30 bg-gradient-to-br from-brand/10 to-brand/5">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1.5">
                        Agreement Acknowledgment
                      </h3>
                      <p className="text-xs text-white/60 leading-relaxed">
                        By creating an account and using Conduit's services, you acknowledge that you have read, 
                        understood, and agree to be bound by these terms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-lg border border-white/10 bg-white/[0.02]">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-0.5">Have questions?</h3>
                    <p className="text-xs text-white/50">We strive to respond to all legal enquiries within five business days.</p>
                  </div>
                  <Link
                    href="mailto:legal@intranex.org"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-brand hover:bg-brand/90 rounded-lg transition-all text-xs font-medium text-brand-text whitespace-nowrap"
                  >
                    Email Us
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
