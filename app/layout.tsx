import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { seoConfig, pageSeo } from "@/config/seo";
import { brandConfig } from "@/config/branding.exports";
// Generated: abf66e8a2ff069c619152a59560a28d7

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Global metadata from config/seo.ts
export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: seoConfig.homeTitle,  
    template: `%s${seoConfig.titleSeparator}${seoConfig.siteName}`,
  },
  description: pageSeo.home.description,
  keywords: pageSeo.home.keywords,
  authors: [{ name: seoConfig.siteName }],
  creator: seoConfig.siteName,
  publisher: seoConfig.siteName,
  robots: seoConfig.robots,
  alternates: {
    canonical: seoConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: seoConfig.locale,
    url: seoConfig.siteUrl,
    siteName: seoConfig.siteName,
    title: seoConfig.homeTitle,
    description: pageSeo.home.description,
    images: [
      {
        url: pageSeo.home.ogImage || seoConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: seoConfig.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.homeTitle,
    description: pageSeo.home.description,
    creator: `@${seoConfig.twitterHandle}`,
    images: [pageSeo.home.ogImage || seoConfig.defaultOgImage],
  },
  verification: {
    google: seoConfig.verification.google || undefined,
    yandex: seoConfig.verification.yandex || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Define brand colors as inline styles to prevent hydration mismatch
  const brandStyles = {
    '--brand': brandConfig.color,
    '--brand-text': brandConfig.text,
  } as React.CSSProperties;

  return (
    <html lang="en" className="dark" style={brandStyles}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
