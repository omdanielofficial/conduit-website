"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

interface GlobeProps {
  dotColor?: [number, number, number]; // RGB values between 0-1
  markers?: Array<{ location: [number, number]; size: number }>;
}

// Default fallback if no props provided
const DEFAULT_DOT_COLOR: [number, number, number] = [0.3, 0.8, 1]; // Cyan
const DEFAULT_MARKERS: Array<{ location: [number, number]; size: number }> = [
  { location: [40.7128, -74.006], size: 0.1 },      // US East - New York
  { location: [34.0522, -118.2437], size: 0.1 },    // US West - Los Angeles
  { location: [50.1109, 8.6821], size: 0.1 },       // EU Central - Frankfurt
  { location: [1.3521, 103.8198], size: 0.1 },      // Asia Pacific - Singapore
];

export default function Globe({ 
  dotColor = DEFAULT_DOT_COLOR,
  markers = DEFAULT_MARKERS
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 2.5,
      mapSamples: 20000,
      mapBrightness: 3,
      baseColor: [0.2, 0.2, 0.25],
      markerColor: dotColor,
      glowColor: [0.15, 0.2, 0.35],
      markers: markers,
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 100);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [dotColor, markers]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glow effect behind globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/4 h-3/4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          aspectRatio: "1",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
}
