"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MobileNavbar } from "@/components/layout/MobileNavbar";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { useState, useEffect } from "react";
import { ChevronDown, BookOpen, CreditCard, Server, User, Settings, ExternalLink } from "lucide-react";
import { brandConfig } from "@/config/branding.exports";
import { navbarConfig } from "@/config/branding";

// Icon map - add more icons here as needed
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { 
  BookOpen, CreditCard, Server, User, Settings, ExternalLink 
};

// Get directly from config for proper typing
const navbarLinks = navbarConfig.links;
const navbarButtons = navbarConfig.buttons;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <nav className="fixed top-6 inset-x-4 z-50 h-16 border max-w-7xl mx-auto rounded-full shadow-lg backdrop-blur-md bg-transparent border-white/5">
        <div className="h-full flex items-center justify-between mx-auto px-6">
          <BrandLogo variant="navbar" />
          <div className="flex items-center gap-3">
            <Button className="hidden sm:inline-flex rounded-full bg-brand hover:bg-brand/90 text-brand-text">
              Login
            </Button>
            <div className="md:hidden">
              <MobileNavbar />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`fixed top-6 inset-x-4 z-50 h-16 border max-w-7xl mx-auto rounded-full shadow-lg backdrop-blur-md transition-all duration-300 ${
      scrolled ? "bg-black/80 border-white/20 shadow-xl shadow-black/20" : "bg-black/50 border-white/10"
    }`}>
      <div className="h-full flex items-center justify-between mx-auto px-6">
        {/* Brand Logo */}
        <BrandLogo variant="navbar" />
        
        {/* Desktop Navigation - Center Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navbarLinks.map((link, index) => {
            // Simple link without dropdown
            if (!link.dropdown) {
              return (
                <Link key={index} href={link.href || "#"} className="cursor-pointer">
                  <Button 
                    variant="ghost" 
                    className="rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all font-medium cursor-pointer"
                  >
                    {link.name}
                  </Button>
                </Link>
              );
            }
            
            // Link with dropdown
            return (
              <div 
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(`link-${index}`)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href ? (
                  <Link href={link.href} className="cursor-pointer">
                    <Button 
                      variant="ghost" 
                      className="rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1 font-medium cursor-pointer"
                    >
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === `link-${index}` ? 'rotate-180' : ''}`} />
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    variant="ghost" 
                    className="rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1 font-medium cursor-pointer"
                  >
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === `link-${index}` ? 'rotate-180' : ''}`} />
                  </Button>
                )}
                
                {/* Dropdown Menu */}
                {activeDropdown === `link-${index}` && link.dropdown && (
                  <div className="absolute top-full left-0 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="w-56 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/50 py-2 overflow-hidden">
                      {link.dropdown.map((item, subIndex) => (
                        <Link
                          key={subIndex}
                          href={item.href}
                          className="group flex items-center justify-between px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                        >
                          <span>{item.name}</span>
                          {'popular' in item && item.popular && (
                            <span className="inline-flex items-center rounded-md bg-brand/20 border border-brand/40 px-2 py-0.5 text-xs text-brand font-medium">
                              Popular
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          {navbarButtons.map((button, index) => {
            const btn = button as { name: string; href?: string; style?: string; icon?: string; dropdown?: { name: string; href: string; icon?: string }[] };
            
            // Icon button
            if (btn.style === "icon") {
              const IconComponent = btn.icon ? iconMap[btn.icon] : null;
              return (
                <Link 
                  key={index}
                  href={btn.href || "#"}
                  className="hidden lg:flex h-10 w-10 items-center justify-center rounded-full border transition-all cursor-pointer"
                  style={{
                    borderColor: brandConfig.color + '33',
                    background: `linear-gradient(135deg, ${brandConfig.color}33 0%, ${brandConfig.color}14 100%)`,
                    color: brandConfig.color,
                  }}
                  aria-label={btn.name}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = brandConfig.color + '88';
                    e.currentTarget.style.background = `linear-gradient(135deg, ${brandConfig.color}55 0%, ${brandConfig.color}28 100%)`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = brandConfig.color + '33';
                    e.currentTarget.style.background = `linear-gradient(135deg, ${brandConfig.color}33 0%, ${brandConfig.color}14 100%)`;
                  }}
                >
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                </Link>
              );
            }
            
            // Primary or ghost button
            const buttonClass = btn.style === "primary"
              ? "rounded-full bg-brand hover:bg-brand/90 text-brand-text px-7 py-2 font-semibold transition-all cursor-pointer"
              : "rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all font-medium cursor-pointer";
            
            // Button without dropdown
            if (!btn.dropdown) {
              return (
                <Link key={index} href={btn.href || "#"} className="hidden sm:block cursor-pointer">
                  <Button className={buttonClass}>
                    {btn.name}
                  </Button>
                </Link>
              );
            }
            
            // Button with dropdown
            return (
              <div 
                key={index}
                className="hidden sm:block relative"
                onMouseEnter={() => setActiveDropdown(`button-${index}`)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Button className={buttonClass + " flex items-center gap-1.5"}>
                  {btn.name}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === `button-${index}` ? 'rotate-180' : ''}`} />
                </Button>
                
                {activeDropdown === `button-${index}` && (
                  <div className="absolute top-full right-0 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="w-52 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/50 py-2 overflow-hidden">
                      {btn.dropdown.map((item, subIndex) => {
                        const SubIcon = item.icon ? iconMap[item.icon] : null;
                        const isExternal = item.href.startsWith('http');
                        return (
                          <a
                            key={subIndex}
                            href={item.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                          >
                            {SubIcon && <SubIcon className="w-4 h-4" />}
                            <span>{item.name}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;