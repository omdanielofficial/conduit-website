export const hardwareConfig = {
  // ===================
  // SECTION HEADER
  // ===================
  section: {
    title: "Hardware Specifications",
    description: "Powered by cutting-edge processors, ultra-fast storage, and global infrastructure",
  },
  
  // ===================
  // PROCESSORS
  // ===================
  // You can have one or both (AMD/Intel). Delete one to show only the other.
  processors: {
    amd: {
      name: "Ryzen 9 9950X",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg",
      boostClock: "5.7 GHz",
      cores: "16 Cores",
      threads: "32 Threads",
      color: "emerald",  // emerald, blue, purple, yellow, green, cyan, orange
    },
//    intel: {
//      name: "Xeon Skylake",
//      logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg",
//      boostClock: "4.8 GHz",
//      cores: "12 Cores",
//      threads: "24 Threads",
//      color: "emerald",
//    },
  },
  
  // ===================
  // RAM
  // ===================
  ram: {
    title: "DDR5 RAM",
    description: "The modern standard for high-performance hosting, efficiency, and capacity.",
    speed: "6400",
    speedUnit: "MT/s",
    color: "yellow",
  },
  
  // ===================
  // GLOBAL NETWORK
  // ===================
  network: {
    title: "Global Network",
    description: "Choose the best region for you and your players. Our flagship location in New York City provides excellent connectivity across North & South America and Europe. We also have a new location launching soon in Germany.",
    regionsCount: 2,
    regionsText: "Regions Active",
    color: "cyan",
    
    // Globe dot color [Red, Green, Blue] - values from 0 to 1
    // Examples: Cyan [0.3, 0.8, 1], Green [0.16, 0.82, 0.45], Orange [1, 0.6, 0.2]
    globeDotColor: [0.3, 0.8, 1] as [number, number, number],
    
    // Datacenter locations (shown as dots on globe)
    // Find coordinates at: https://www.latlong.net/
    globeCoordinates: [
      { lat: 40.712776, lng: -74.005974 },
      { lat: 50.110924, lng: 8.682127 },
    ],
  },
  
  // ===================
  // STORAGE
  // ===================
  nvme: {
    title: "NVMe Storage",
    description: "Providing unparalleled speed and responsiveness.",
    speed: "7000",
    speedUnit: "MB/s",
    color: "orange",
  },
  
  // ===================
  // UPTIME
  // ===================
  uptime: {
    title: "Network Uptime",
    description: "Guaranteed ratio in any calendar month.",
    percentage: "99.95",
    color: "emerald",
  },
  
  // ===================
  // DDOS PROTECTION
  // ===================
  ddos: {
    title: "DDoS Protection",
    description: "Attack filtering and mitigation from NeoProtect.",
    capacity: "5-12",
    capacityUnit: "Tbps",
    color: "green",
  },
};
