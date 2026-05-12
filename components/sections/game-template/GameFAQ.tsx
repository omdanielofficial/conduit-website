"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface GameFAQProps {
  gameName: string;
  faqs: FAQItem[];
}

export default function GameFAQ({ gameName, faqs }: GameFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-12 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[400px_1fr]">
          {/* Left Column - Header & CTA */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-white/60 leading-relaxed">
                Find answers to the most common questions about {gameName} server hosting
              </p>
            </div>

            {/* Help Links */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <p className="mb-4 text-sm font-semibold text-white">
                Still need help?
              </p>
              <div className="space-y-3">
                <a
                  href="/contact"
                  className="group flex items-center gap-3 rounded-lg bg-white/[0.03] border border-white/10 p-3 text-sm font-medium text-white hover:bg-white/[0.08] hover:border-white/20 transition-all"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/60 group-hover:bg-white/10 group-hover:text-white/80 transition-colors">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group rounded-xl border transition-all duration-200 ${
                  openIndex === index
                    ? "border-brand/40 bg-gradient-to-br from-brand/[0.08] to-brand/[0.02] shadow-lg shadow-brand/10"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className={`pr-8 text-base font-semibold transition-colors ${
                    openIndex === index ? "text-white" : "text-white/90 group-hover:text-white"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-all ${
                    openIndex === index 
                      ? "bg-brand/20 text-brand rotate-180" 
                      : "bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white/60"
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-white/5 px-5 pb-5 pt-4">
                    <p className="text-sm leading-relaxed text-white/70">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
