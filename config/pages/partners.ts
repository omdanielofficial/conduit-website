export const partnersConfig = {
  hero: {
    title: "",
    highlight: "Partner Program",
    subtitle: "Join our partner program and start earning. When someone purchases a server from us using your affiliate link, you'll earn commission.",
    backgroundImage: "/assets/hero_home.png"
  },
  benefits: [
    {
      icon: "Headphones",
      title: "Priority Support",
      description: "Get dedicated 24/7 priority support from our team with faster response times than usual.",
      color: "blue" as const
    },
    {
      icon: "Link",
      title: "Affiliate Link",
      description: "Receive a custom affiliate link with an incredible 20% commission rate on every sale you make.",
      color: "purple" as const
    },
    {
      icon: "Gift",
      title: "Free Services",
      description: "Access complimentary game servers to test, review, and create content for your audience.",
      color: "green" as const
    },
    {
      icon: "Coins",
      title: "Real Payouts",
      description: "Withdraw your earnings as account credit or through PayPal. No catch or unnecessary fees.",
      color: "yellow" as const
    },
  ],
  requirements: {
    title: "Who Can Apply?",
    subtitle: "Anyone can apply but we recommend meeting these requirements",
    items: [
      {
        platform: "YouTube Creator",
        metric: "5,000+",
        label: "Subscribers",
        icon: "Youtube",
        color: "red"
      },
      {
        platform: "Twitch Streamer",
        metric: "1,000+",
        label: "Followers",
        icon: "Twitch",
        color: "purple"
      },
      {
        platform: "Game Server",
        metric: "100+",
        label: "Average Players",
        icon: "Globe",
        color: "blue"
      },
      {
        platform: "Mod Developer",
        metric: "500+",
        label: "Total Downloads",
        icon: "Code",
        color: "green"
      },
      {
        platform: "Blog Website",
        metric: "10,000+",
        label: "Monthly Traffic",
        icon: "MessageCircle",
        color: "indigo"
      },
      {
        platform: "Other Partner",
        metric: "",
        label: "Don't see your industry listed? Please contact us to enquire about a partnership.",
        icon: "CircleQuestionMark",
        color: "sky"
      }
    ]
  },
  faq: [
    {
      question: "How do I apply to become a partner?",
      answer: "Please submit an application through our official Discord server, filling out all the required information. Our team reviews applications frequently and will reach out if you're a good fit for our program."
    },
    {
      question: "What commission rates do you offer?",
      answer: "We offer competitive commission rates starting at 20% for all referred sales. High-performing partners can earn up to 60% commission based on volume and performance."
    },
    {
      question: "When and how do I get paid?",
      answer: "Commissions are paid when you request a withdrawal via PayPal or account credit. There is no minimum payout threshold for account credit, and a $20 threshold for PayPal."
    },
    {
      question: "What free services do partners get?",
      answer: "Partners receive free access to select game servers and hosting services based on their tier level. This allows you to test, review, and create content authentically. Please note that we very rarely give out complimentary services to game server owners."
    },
  ],
  cta: {
    title: "Ready to Join Us?",
    subtitle: "Send us an email with your platform details, audience size, and why you'd like to partner with us. We'll get back to you within 24-48 hours.",
    button: {
      text: "Apply Now",
      icon: "Mail",  // Mail, ExternalLink, FileText, etc.
      
      // ACTION OPTIONS:
      // Option 1: Direct Link (Google Form, Typeform, custom page, etc.)
      // action: {
      //   type: "link",
      //   url: "https://forms.google.com/your-form-id",
      //   openInNewTab: true,
      // },
      
      // Option 2: Email (mailto)
      action: {
        type: "mailto",
        email: "contact@conduithost.com",
        subject: "Partner Program Application",
        body: "Hi Team,%0D%0A%0D%0AI'd like to apply for the partner program.%0D%0A%0D%0AName:%0D%0APlatform:%0D%0AChannel/Profile URL:%0D%0AFollowers/Subscribers:%0D%0A%0D%0AWhy I want to partner:%0D%0A"
      }
    }
  },
  
  // Current Partners Showcase
  // Generate avatars: https://api.dicebear.com/7.x/adventurer/svg?seed=YourName
  partners: [
    {
      name: "Icynutella",
      description: "YouTube Creator",
      avatar: "https://cdn.intranex.org/avatars/conduit-partners/icynutella.jpg",
      socials: {
        youtube: "https://www.youtube.com/@Icynutella",
      },
    },
    {
      name: "Macery",
      description: "YouTube Creator",
      avatar: "https://cdn.intranex.org/avatars/conduit-partners/macery.jpg",
      socials: {
        youtube: "https://www.youtube.com/@macerymc",
      },
    },
    {
      name: "Pqtrick",
      description: "YouTube Creator",
      avatar: "https://cdn.intranex.org/avatars/conduit-partners/pqtrick.jpg",
      socials: {
        youtube: "https://www.youtube.com/@Pqtrick",
      },
    },
    {
      name: "StellarNet",
      description: "Game Server",
      avatar: "https://cdn.intranex.org/avatars/conduit-partners/stellarnet.jpg",
      socials: {
      },
    },
  ],
};
