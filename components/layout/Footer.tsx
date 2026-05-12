import { BrandLogo } from "@/components/layout/BrandLogo";
import { brandingConfig, footerColumns, socialLinks, footerBottomBar, siteConfig } from "@/config/branding.exports";
import { SocialIcon } from "@/components/ui/SocialIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black">
      {/* Subtle gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Content */}
        <div className="py-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-5">
                <BrandLogo variant="footer" />
                <p className="text-base text-white/50 leading-relaxed max-w-md">
                  {brandingConfig.footer.description}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="h-4 w-4 text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a href={`mailto:${brandingConfig.footer.email}`} className="text-white/50 hover:text-white transition-colors cursor-pointer">
                    {brandingConfig.footer.email}
                  </a>
                </div>
              </div>
              
              {/* Social Links - Now uses centralized config */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group relative flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:border-white/20 cursor-pointer"
                  >
                    <SocialIcon icon={social.icon} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-6">
              {footerColumns.map((column, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.href}
                          className="text-sm text-white/50 hover:text-white transition-colors inline-block cursor-pointer"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-3">
              <p className="text-sm text-white/40">
                {siteConfig.copyright}
              </p>

            </div>
            {footerBottomBar.disclaimers.map((disclaimer, index) => (
              <p key={index} className="text-xs text-white/30 text-center">
                {disclaimer}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
