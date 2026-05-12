"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, X, ArrowRight, ExternalLink, ChevronRight } from "lucide-react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { mobileNavSections, mobileNavButtons } from "@/config/branding.exports";
import Link from "next/link";
import { useState, useEffect } from "react";


export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right"
        className="flex flex-col p-0 bg-gradient-to-b from-black via-black/98 to-black border-l border-white/5 w-full sm:w-full max-w-full overflow-hidden"
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          <BrandLogo variant="navbar" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-5 py-6 space-y-8">
            {/* Render all sections from config */}
            {mobileNavSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3 px-1">
                  {section.title}
                </h3>
                <div className="space-y-1.5">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between px-4 py-3 rounded-lg transition-all cursor-pointer ${
                        link.featured
                          ? "bg-brand/10 border border-brand/20 text-white hover:bg-brand/15 hover:border-brand/40"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="text-sm font-medium">{link.name}</span>
                      <ChevronRight className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${
                        link.featured ? "text-brand" : "text-white/30"
                      }`} />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions - Fixed Bottom */}
        <div className="p-5 space-y-3 border-t border-white/5 bg-black/80 backdrop-blur-xl">
          {/* Action Buttons from Config */}
          {mobileNavButtons.length > 0 && (
            <div className={`grid gap-2 ${mobileNavButtons.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
              {mobileNavButtons.map((button) => {
                const isExternal = button.href.startsWith('http');
                return (
                  <a
                    key={button.name}
                    href={button.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => !isExternal && setIsOpen(false)}
                    className="group flex flex-col items-center gap-1.5 px-3 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <span className="text-xs font-medium text-white/70 group-hover:text-white">{button.name}</span>
                    {isExternal && <ExternalLink className="h-2.5 w-2.5 text-white/30" />}
                  </a>
                );
              })}
            </div>
          )}

          {/* Primary CTA */}
          <Button
            asChild
            size="lg"
            className="w-full rounded-lg bg-brand hover:bg-brand/90 text-brand-text font-bold shadow-md hover:shadow-lg transition-all"
          >
            <Link href="/#pricing" onClick={() => setIsOpen(false)}>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
