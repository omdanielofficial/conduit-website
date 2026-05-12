"use client";

import Link from "next/link";
import { Server, Globe, HardDrive, ArrowRight } from "lucide-react";
import { currencyConfig } from "@/config/shared/currency";
import { homeConfig } from "@/config/home";

const iconMap = { Server, Globe, HardDrive };

export default function Products() {
  const { products } = homeConfig;

  return (
    <section className="relative w-full py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {products.title}
          </h2>
          <p className="max-w-2xl text-sm text-white/50">
            {products.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {products.items.map((product, index) => {
            const Icon = iconMap[product.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20"
              >
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with subtle animation */}
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${product.iconBorder} ${product.iconBg} ${product.iconColor}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {product.title}
                  </h3>
                  
                  {/* Price Badge */}
                  <div className="mb-4 inline-flex items-baseline gap-1.5">
                    <span className="text-xs text-white/50">Starting at</span>
                    {currencyConfig.position === "before" ? (
                      <span className={`text-xl font-bold ${product.iconColor}`} title={currencyConfig.code}>
                        {currencyConfig.symbol}{product.startingPrice}
                      </span>
                    ) : (
                      <span className={`text-xl font-bold ${product.iconColor}`} title={currencyConfig.code}>
                        {product.startingPrice}{currencyConfig.symbol}
                      </span>
                    )}
                    <span className="text-xs text-white/40">/mo</span>
                  </div>
                  
                  <p className="mb-6 text-sm text-white/60 leading-relaxed">
                    {product.description}
                  </p>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/10 text-sm font-semibold text-white hover:bg-white/[0.1] hover:border-white/25 transition-all cursor-pointer"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
