// ===========================================
// CONTACT PAGE CONFIGURATION
// ===========================================

export const contactConfig = {
  // ===================
  // PAGE HEADER
  // ===================
  hero: {
    title: "",
    highlight: "Contact",     // This part will be highlighted
    subtitle: "Have a question? Need support? Want to learn more about our services? Our team is ready to assist you 24/7.",
    backgroundImage: "/assets/hero_home.png",
    stats: [
      { value: "<30min", label: "Response Time" },
      { value: "24/7", label: "Support Availability" },
      { value: "98%", label: "Satisfaction Rate" },
    ],
  },
  
  // ===================
  // CONTACT INFO
  // ===================
  contactInfo: {
    email: "contact@conduithost.com",
    address: {
      line1: "82A James Carter Road",
      line2: "Mildenhall",
      city: "IP28 7DE",
      state: "United Kingdom",
      zip: "",
    },
  },
  
  // Note: Social links are now centralized in config/branding.ts (socialLinks)
  // They appear automatically on this page from that central config
  
  // ===================
  // SUPPORT OPTIONS
  // ===================
  // Icons: MessageSquare, Mail, Book, Briefcase, Phone, Headphones
  supportOptions: [
    {
      title: "Support Tickets",
      description: "Create a ticket through our Discord server for general enquiries, technical support, or billing assistance.",
      icon: "MessageSquare",
      available: "Available 24/7",
      cta: "Join Discord",
      href: "https://discord.gg/conduit",
    },
    {
      title: "Email Us",
      description: "Send us an email for all kinds of assistance, including sponsorships and business enquiries.",
      icon: "Mail",
      available: "Available Mon-Fri (10:00-17:00 UTC)",
      cta: "Send Email",
      href: "mailto:contact@conduithost.com",
    },
    {
      title: "Our Blog",
      description: "Read articles to gain a more in-depth understanding of our services.",
      icon: "Book",
      available: "",
      cta: "Visit Blog",
      href: "/blog",
    },
    {
      title: "Network Status",
      description: "Visit our status website to see if your service is experiencing downtime.",
      icon: "Briefcase",
      available: "",
      cta: "Contact Sales",
      href: "https://status.conduithost.com",
    },
  ],
};
