import Link from "next/link";
import Image from "next/image";
import { brandingConfig } from "@/config/branding.exports";

interface BrandLogoProps {
  variant?: "navbar" | "footer";
  className?: string;
}

export const BrandLogo = ({ variant = "navbar", className = "" }: BrandLogoProps) => {
  const config = variant === "navbar" ? brandingConfig.navbar : brandingConfig.footer;
  
  // Custom logo takes precedence
  if (config.customLogo) {
    return <Link href="/" className={className}>{config.customLogo}</Link>;
  }
  
  // Logo only
  if (config.logoType === "logo-only") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`} aria-label={brandingConfig.name}>
        <Image
          src={config.logoImage}
          alt={brandingConfig.name}
          width={config.logoWidth}
          height={config.logoHeight}
          className="object-contain"
        />
      </Link>
    );
  }
  
  // Text only
  if (config.logoType === "text-only") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`}>
        <span className={config.textClassName}>
          {config.text}
        </span>
      </Link>
    );
  }
  
  // Logo + Text
  if (config.logoType === "logo-text") {
    return (
      <Link href="/" className={`inline-flex items-center ${config.logoTextGap} ${className}`}>
        <Image
          src={config.logoImage}
          alt={brandingConfig.name}
          width={config.logoWidth}
          height={config.logoHeight}
          className="object-contain"
        />
        <span className={config.textClassName}>
          {config.text}
        </span>
      </Link>
    );
  }
  
  // None (for footer)
  if (variant === "footer" && config.logoType === "none") {
    return null;
  }
  
  // Default fallback
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <span className={config.textClassName}>
        {config.text}
      </span>
    </Link>
  );
};
