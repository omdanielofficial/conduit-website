// ===========================================
// JOBS/CAREERS PAGE CONFIGURATION
// ===========================================

export const jobsConfig = {
  // ===================
  // PAGE HEADER
  // ===================
  hero: {
    title: "",
    highlight: "About Us",           // This word will be highlighted
    subtitle: "Whether you're hosting a game server for a few friends or a large community, you can trust us to maintain excellent performance and uptime.",
    backgroundImage: "/assets/hero_home.png",
    stats: [
      { value: "100+", label: "Servers" },
      { value: "5+", label: "Years Experience" },
      { value: "2", label: "Global Locations" },
    ],
  },
  
  // ===================
  // TEAM SECTION
  // ===================
  // Avatar generator: Change the seed to change the avatar
  // Format: https://api.dicebear.com/9.x/adventurer/svg?seed=NAME&backgroundColor=COLOR
  // Background colors: 3b82f6 (blue), 10b981 (green), 8b5cf6 (purple), f59e0b (amber), ef4444 (red), ec4899 (pink), 06b6d4 (cyan), a855f7 (purple)
  team: {
    title: "Our Team",
    subtitle: "Meet the people who help to make Conduit so good",
    members: [
      { name: "Daniel M.", role: "Managing Director", avatar: "https://cdn.intranex.org/avatars/conduit-team/daniel-m.webp", bio: "Daniel leads strategic direction and overall vision, shaping both operational efficiency and long-term growth. With more than half a decade of experience in server hosting, he brings a deep understanding of leadership and client relations." },
      { name: "Rahul B.", role: "Head of Operations", avatar: "https://cdn.intranex.org/avatars/conduit-team/rahul-b.webp ", bio: "Rahul oversees all day-to-day operations, ensuring every system and service runs at peak performance. With a background in hosting and client services, he bridges the gap between technology, support, and customers." },
    ],
  },
  
  // ===================
  // CULTURE/VALUES
  // ===================
  // Icons: Code, Users, Target, Shield, Zap, Heart (find more at lucide.dev/icons)
  culture: {
    title: "Core Values",
    subtitle: "The principles that guide everything we build and ship",
    values: [
      { icon: "Code", title: "Innovation and iteration", description: "We come up with new innovative ideas daily. Quick feedback loops matter more than perfect launches." },
      { icon: "Users", title: "Team communication", description: "No gatekeepers. All of our team members interact with customers regardless of their role. " },
      { icon: "Target", title: "Performance is a feature", description: "Every millisecond counts. We benchmark everything and optimise relentlessly." },
      { icon: "Shield", title: "Uptime above all", description: "99.95% isn't marketing. It's a promise we measure in real-time and never compromise." },
      { icon: "Zap", title: "Customer experience", description: "Our customers come first above all else. Everyone is viewed as a partner in shared success." },
      { icon: "Heart", title: "No corporate nonsense", description: "Flat hierarchy. Direct feedback without layers of unnecessary management." },
    ],
  },
  
  // ===================
  // PERKS/BENEFITS
  // ===================
  // Icons: DollarSign, Heart, Globe, Calendar, Laptop, Book (find more at lucide.dev/icons)
  perks: {
    title: "Benefits & perks",
    subtitle: "We take care of the people who take care of our servers.",
    items: [
      { icon: "DollarSign", title: "Competitive salary + equity", description: "Top-tier compensation with meaningful ownership stake in the company." },
      { icon: "Heart", title: "Health & wellness", description: "Premium health, dental, and vision coverage. Mental health support included." },
      { icon: "Globe", title: "Fully remote", description: "Work from anywhere. We have team members across 8 countries and counting." },
      { icon: "Calendar", title: "Unlimited PTO", description: "Take the time you need. We trust you to manage your schedule responsibly." },
      { icon: "Laptop", title: "Top-tier equipment", description: "Latest MacBook Pro or custom PC build. Whatever you need to do your best work." },
      { icon: "Book", title: "Learning budget", description: "$2,000/year for courses, conferences, books, or certifications." },
    ],
  },
  
  // ===================
  // JOB OPENINGS
  // ===================
  // id: URL-friendly identifier (e.g., "senior-backend")
  // department: Engineering, Operations, Support, Marketing, etc.
  // type: Full-time, Part-time, Contract
  openings: [
    {
      id: "systems-administrator",
      title: "Systems Administrator",
      department: "Engineering",
      location: "Remote",
      type: "Contract",
      description: "You will ensure that our core infrastructure remains online and operational at all times.",
      responsibilities: [
        "Maintain, monitor, and optimise servers across multiple locations.",
        "Troubleshoot system, network, and hardware issues with accuracy and urgency.",
        "Manage virtualisation environments, including provisioning and migrations.",
        "Perform system updates, patching, hardening, and routine security checks.",
        "Document configurations, troubleshooting procedures, and incident reports.",
        "Deploy and maintain production software and automation scripts.",
      ],
      requirements: [
        "Must be at least 18 years old at the time of application.",
        "Must be fluent in written and spoken English.",
        "Must have extensive experience in a systems-based or similar operational role.",
        "Must have strong communication and interpersonal skills.",
        "Must be able to work both individually and as part of a team.",
        "Must have previous experience working in the game hosting industry.",
        "Must have strong proficiency in Linux with solid command-line skills.",
        "Must have a basic understanding of networking concepts.",
        "Must be familar with system security, intrusion prevention, and patching.",
        "Must have experience with containerisation technologies, e.g. Docker.",
        "Must have experience with the Pterodactyl game panel software.",
        "Must have an understanding of DDoS mitigation and performance tuning.",
      ],
      bonus: [
        "You will report directly to the Head of Operations and work within the wider Engineering Team.",
        "You will engage with and resolve complex customer queries escalated by the Support Team.",
        "This role is paid at an hourly rate of £20.00-£30.00 GBP depending on experience.",
      ],
    },
    {
      id: "content-writer",
      title: "Content Writer",
      department: "Marketing",
      location: "Remote",
      type: "Contract",
      description: "Research and write engaging blog articles that educate our audience and grow organic traffic.",
      responsibilities: [
        "Research industry-related topics and keywords to plan and outline blog articles.",
        "Write original and well-structured blog posts that match brand identity.",
        "Optimise articles for SEO, including keyword placement and internal links.",
        "Assist with social media management and content planning.",
      ],
      requirements: [
        "Must be at least 18 years old at the time of application.",
        "Must be fluent in written and spoken English.",
        "Must have previous experience in a content writing role.",
        "Must have strong communication and interpersonal skills.",
        "Must be able to work both individually and as part of a team.",
        "Must have a basic understanding of SEO optimisation and marketing funnels.",
        "Must have the ability to adapt writing tone for different audiences.",
      ],
      bonus: [
        "You will report directly to the Head of Commercial and work within the wider Marketing Team.",
        "This role is paid at an hourly rate of £15.00-£20.00 GBP depending on experience.",
      ],
    },
    {
      id: "support-agent",
      title: "Support Agent",
      department: "Support",
      location: "Remote",
      type: "Contract",
      description: "Help our clients launch and troubleshoot their services while delivering an exceptional experience.",
      responsibilities: [
        "Respond to incoming support enquiries through our ticketing system.",
        "Effectively prioritise and categorise support requests for a swift resolution.",
        "Offer top-notch customer service in a professional and timely manner.",
        "Escalate tickets to appropriate teams and specialists as required.",
        "Ensure customer satisfaction through feedback monitoring.",
        "Provide entry-level technical support for client game servers",
      ],
      requirements: [
        "Must be at least 18 years old at the time of application.",
        "Must be fluent in written and spoken English.",
        "Must have previous experience in a customer support role.",
        "Must have strong communication and interpersonal skills.",
        "Must be able to work both individually and as part of a team.",
        "Must have previous experience working in the game hosting industry.",
        "Must be familar with the inner-workings and technical side of the services we provide.",
      ],
      bonus: [
        "You will report directly to the Head of Operations and work within the wider Support Team.",
        "You will engage with the Engineering Team to solve complex issues.",
        "This role is on a voluntary basis with no monetary compensation.",
      ],
    },
    {
      id: "sales-representative",
      title: "Sales Representative",
      department: "Sales",
      location: "Remote",
      type: "Contract",
      description: "Expand our customer base by engaging creators, communities, and organisations that need reliable game hosting.",
      responsibilities: [
        "Research potential clients and undertake outreach work across various platforms.",
        "Qualify leads and understand their hosting needs, budget, and timelines.",
        "Identify market opportunities through a data-driven approach.",
        "Work to build long-term client relationships through cross-team collaboration.",
        "Track conversations, outcomes, and feedback to help refine our approach.",
      ],
      requirements: [
        "Must be at least 18 years old at the time of application.",
        "Must be fluent in written and spoken English.",
        "Must have previous experience in a sales or outreach-based role.",
        "Must have strong communication and interpersonal skills.",
        "Must be able to work both individually and as part of a team.",
        "Must have a satisfactory understanding of CSQLs and CRM tools.",
      ],
      bonus: [
        "You will report directly to the Head of Commercial and work within the wider Sales Team.",
        "The compensation for this role is sale commission at a 35% rate.",
      ],
    },
  ],
  cta: {
    title: "Don't see your role?",
    subtitle: "We're always looking for exceptional people. Send us your resume and tell us what you'd build at Conduit.",
    email: "jobs@conduithost.com",
  },
};
