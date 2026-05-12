"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import Globe from "@/components/ui/Globe";
import { Cpu, MemoryStick, Globe as GlobeIcon, Zap, Activity, Network } from "lucide-react";
import { hardwareConfig } from "@/config/hardware";

export default function Hardware() {
  // Get all processor keys and validate
  const processorKeys = Object.keys(hardwareConfig.processors) as Array<keyof typeof hardwareConfig.processors>;
  
  // Edge case: If no processors configured, return null or show error
  if (processorKeys.length === 0) {
    console.error("Hardware Component: No processors configured in PROCESSORS object");
    return null;
  }
  
  const hasMultipleProcessors = processorKeys.length > 1;
  
  // Set default processor to the first one available
  const [selectedProcessor, setSelectedProcessor] = useState<keyof typeof hardwareConfig.processors>(processorKeys[0]);
  const currentProcessor = hardwareConfig.processors[selectedProcessor];
  
  // Helper function to safely split speed values
  const getSpeedParts = (speedString: string) => {
    if (!speedString) return { value: "", unit: "" };
    const parts = speedString.split(' ');
    return {
      value: parts[0] || speedString,
      unit: parts[1] || ""
    };
  };

  // Helper function to get color classes
  const getColorClasses = (color: string = "emerald") => ({
    icon: `text-${color}-400`,
    iconBg: `bg-${color}-500/5`,
    iconBorder: `border-${color}-500/20`,
    cardHover: `hover:border-${color}-500/30 hover:shadow-${color}-500/5`,
    metricBorder: `border-${color}-500/30`,
    metricBg: `bg-${color}-500/5`,
    metricText: `text-${color}-400`,
    metricSubtext: `text-${color}-400/80`,
    buttonActive: `bg-${color}-500/10 border-${color}-500/30`,
  });

  return (
    <section className="relative w-full py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {hardwareConfig.section.title}
          </h2>
          <p className="max-w-2xl text-sm text-white/50">
            {hardwareConfig.section.description}
          </p>
        </div>

        {/* Hardware Grid */}
        <div className="grid gap-4 md:grid-cols-6 lg:grid-cols-12">
          {/* Processor Card */}
          <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-5 backdrop-blur-sm transition-all ${getColorClasses(currentProcessor.color).cardHover} hover:shadow-lg md:col-span-6 lg:col-span-4`}>
            <div className="relative z-10 flex flex-col h-full">
              {/* Header with Icon & Optional Selector */}
              <div className="mb-4 flex items-center justify-between">
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border ${getColorClasses(currentProcessor.color).iconBorder} ${getColorClasses(currentProcessor.color).iconBg}`}>
                  <Cpu className={`h-5 w-5 ${getColorClasses(currentProcessor.color).icon}`} />
                </div>
                
                {/* Only show processor toggle if multiple processors exist */}
                {hasMultipleProcessors && (
                  <div className="flex gap-1 rounded-lg bg-black/30 border border-white/10 p-1">
                    {processorKeys.map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedProcessor(key)}
                        className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-all uppercase ${
                          selectedProcessor === key
                            ? `${getColorClasses(hardwareConfig.processors[key].color).buttonActive} text-white border`
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        {key}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Brand Logo */}
              {currentProcessor.logo && (
                <div className="mb-3">
                  <Image
                    src={currentProcessor.logo}
                    alt={currentProcessor.name || "Processor"}
                    width={90}
                    height={36}
                    className="h-7 w-auto object-contain brightness-0 invert"
                  />
                </div>
              )}
              
              {/* Processor Name */}
              <h3 className="mb-2 text-xl font-bold text-white">
                {currentProcessor.name || "Processor"}
              </h3>
              <div className="mb-4 flex items-center gap-2 text-sm text-white/60">
                {currentProcessor.cores && <span>{currentProcessor.cores}</span>}
                {currentProcessor.cores && currentProcessor.threads && <span className="text-white/30">•</span>}
                {currentProcessor.threads && <span>{currentProcessor.threads}</span>}
              </div>
              
              {/* Performance Metrics */}
              {currentProcessor.boostClock && (
                <div className="mt-auto">
                  <div className={`rounded-lg border ${getColorClasses(currentProcessor.color).metricBorder} ${getColorClasses(currentProcessor.color).metricBg} p-3`}>
                    <div className="text-xs text-white/70 mb-1">Speeds up to</div>
                    <div className={`text-2xl font-bold ${getColorClasses(currentProcessor.color).metricText}`}>
                      {getSpeedParts(currentProcessor.boostClock).value}
                      {getSpeedParts(currentProcessor.boostClock).unit && (
                        <span className="text-sm text-white/60 ml-1">
                          {getSpeedParts(currentProcessor.boostClock).unit}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RAM Card */}
          <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-5 backdrop-blur-sm transition-all ${getColorClasses(hardwareConfig.ram.color).cardHover} hover:shadow-lg md:col-span-3 lg:col-span-3`}>
            <div className="relative z-10 flex flex-col h-full">
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border ${getColorClasses(hardwareConfig.ram.color).iconBorder} ${getColorClasses(hardwareConfig.ram.color).iconBg}`}>
                <MemoryStick className={`h-5 w-5 ${getColorClasses(hardwareConfig.ram.color).icon}`} />
              </div>
              <h3 className="mb-1 text-xl font-bold text-white">{hardwareConfig.ram.title || "RAM"}</h3>
              {hardwareConfig.ram.description && (
                <p className="text-xs text-white/60 mb-4">{hardwareConfig.ram.description}</p>
              )}
              
              <div className="mt-auto">
                <div className={`rounded-lg border ${getColorClasses(hardwareConfig.ram.color).metricBorder} ${getColorClasses(hardwareConfig.ram.color).metricBg} p-3.5`}>
                  <div className="text-xs text-white/70 mb-1">Transfer Speed</div>
                  <div className={`text-2xl font-bold ${getColorClasses(hardwareConfig.ram.color).metricText}`}>
                    {hardwareConfig.ram.speed || "0"}
                    {hardwareConfig.ram.speedUnit && (
                      <span className="text-sm text-white/60 ml-1">{hardwareConfig.ram.speedUnit}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Network Card */}
          <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-5 backdrop-blur-sm transition-all ${getColorClasses(hardwareConfig.network.color).cardHover} hover:shadow-lg md:col-span-6 lg:col-span-5 md:row-span-2`}>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border ${getColorClasses(hardwareConfig.network.color).iconBorder} ${getColorClasses(hardwareConfig.network.color).iconBg}`}>
                  <GlobeIcon className={`h-5 w-5 ${getColorClasses(hardwareConfig.network.color).icon}`} />
                </div>
                {hardwareConfig.network.regionsCount && hardwareConfig.network.regionsText && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/5">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </div>
                    <span className="text-xs font-bold text-green-400">
                      {hardwareConfig.network.regionsCount} {hardwareConfig.network.regionsText}
                    </span>
                  </div>
                )}
              </div>
              
              <h3 className="mb-1 text-xl font-bold text-white">{hardwareConfig.network.title || "Network"}</h3>
              {hardwareConfig.network.description && (
                <p className="mb-4 text-xs text-white/60">{hardwareConfig.network.description}</p>
              )}
              
              {/* Globe with custom coordinates (memoized to prevent reset) */}
              <div className="flex-1 min-h-[200px] -mx-2">
                {useMemo(() => (
                  <Globe 
                    dotColor={hardwareConfig.network.globeDotColor}
                    markers={hardwareConfig.network.globeCoordinates.map(coord => ({
                      location: [coord.lat, coord.lng] as [number, number],
                      size: 0.1
                    }))}
                  />
                ), [])}
              </div>
            </div>
          </div>

          {/* NVMe Storage Card */}
          <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-5 backdrop-blur-sm transition-all ${getColorClasses(hardwareConfig.nvme.color).cardHover} hover:shadow-lg md:col-span-3 lg:col-span-3`}>
            <div className="relative z-10 flex flex-col h-full">
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border ${getColorClasses(hardwareConfig.nvme.color).iconBorder} ${getColorClasses(hardwareConfig.nvme.color).iconBg}`}>
                <Zap className={`h-5 w-5 ${getColorClasses(hardwareConfig.nvme.color).icon}`} />
              </div>
              <h3 className="mb-1 text-xl font-bold text-white">{hardwareConfig.nvme.title || "Storage"}</h3>
              {hardwareConfig.nvme.description && (
                <p className="text-xs text-white/60 mb-4">{hardwareConfig.nvme.description}</p>
              )}
              
              <div className="mt-auto">
                <div className={`rounded-lg border ${getColorClasses(hardwareConfig.nvme.color).metricBorder} ${getColorClasses(hardwareConfig.nvme.color).metricBg} p-3`}>
                  <div className="text-xs text-white/70 mb-1">Speeds up to</div>
                  <div className={`text-2xl font-bold ${getColorClasses(hardwareConfig.nvme.color).metricText}`}>
                    {hardwareConfig.nvme.speed || "0"}
                    {hardwareConfig.nvme.speedUnit && (
                      <span className="text-sm text-white/60 ml-1">{hardwareConfig.nvme.speedUnit}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Uptime SLA Card */}
          <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-5 backdrop-blur-sm transition-all ${getColorClasses(hardwareConfig.uptime.color).cardHover} hover:shadow-lg md:col-span-1.5 lg:col-span-2`}>
            <div className="relative z-10 flex flex-col h-full">
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border ${getColorClasses(hardwareConfig.uptime.color).iconBorder} ${getColorClasses(hardwareConfig.uptime.color).iconBg}`}>
                <Activity className={`h-5 w-5 ${getColorClasses(hardwareConfig.uptime.color).icon}`} />
              </div>
              <h3 className="mb-1 text-base font-bold text-white">{hardwareConfig.uptime.title || "Uptime"}</h3>
              {hardwareConfig.uptime.description && (
                <p className="text-xs text-white/60 mb-4">{hardwareConfig.uptime.description}</p>
              )}
              <div className="mt-auto">
                <div className={`rounded-lg border ${getColorClasses(hardwareConfig.uptime.color).metricBorder} ${getColorClasses(hardwareConfig.uptime.color).metricBg} p-3`}>
                  <div className="text-xs text-white/70 mb-1">Guaranteed</div>
                  <div className={`text-2xl font-bold ${getColorClasses(hardwareConfig.uptime.color).metricText}`}>
                    {hardwareConfig.uptime.percentage || "0"}
                    <span className="text-sm text-white/60 ml-1">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DDoS Protection Card */}
          <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-5 backdrop-blur-sm transition-all ${getColorClasses(hardwareConfig.ddos.color).cardHover} hover:shadow-lg md:col-span-1.5 lg:col-span-2`}>
            <div className="relative z-10 flex flex-col h-full">
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border ${getColorClasses(hardwareConfig.ddos.color).iconBorder} ${getColorClasses(hardwareConfig.ddos.color).iconBg}`}>
                <Network className={`h-5 w-5 ${getColorClasses(hardwareConfig.ddos.color).icon}`} />
              </div>
              <h3 className="mb-1 text-base font-bold text-white">{hardwareConfig.ddos.title || "Protection"}</h3>
              {hardwareConfig.ddos.description && (
                <p className="text-xs text-white/60 mb-4">{hardwareConfig.ddos.description}</p>
              )}
              <div className="mt-auto">
                <div className={`rounded-lg border ${getColorClasses(hardwareConfig.ddos.color).metricBorder} ${getColorClasses(hardwareConfig.ddos.color).metricBg} p-3`}>
                  <div className="text-xs text-white/70 mb-1">Capacity</div>
                  <div className={`text-2xl font-bold ${getColorClasses(hardwareConfig.ddos.color).metricText}`}>
                    {hardwareConfig.ddos.capacity || "0"}
                    {hardwareConfig.ddos.capacityUnit && (
                      <span className="text-sm text-white/60 ml-1">{hardwareConfig.ddos.capacityUnit}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}