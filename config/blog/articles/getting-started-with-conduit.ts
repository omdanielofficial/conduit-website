import { KnowledgebaseArticle } from "../types";
import { brandingConfig } from "@/config/branding.exports";

export const article: KnowledgebaseArticle = {
  slug: "getting-started-with-conduit",
  title: `Getting Started with ${brandingConfig.name}`,
  description: "Learn how to set up your first server and get started with Latch in minutes.",
  category: "getting-started",
  author: "Daniel M.",
  date: "2026-01-15",
  readTime: 5,
  tags: ["beginner", "setup", "tutorial"],
  content: [
    {
      type: "heading",
      level: 1,
      content: `Getting Started with ${brandingConfig.name}`
    },
    {
      type: "paragraph",
      content: "Welcome to Conduit! This guide will help you get your first server up and running in minutes."
    },
    {
      type: "alert",
      variant: "info",
      content: "New to game hosting? Don't worry! This guide is designed for complete beginners."
    },
    {
      type: "heading",
      level: 2,
      content: "Step 1: Create Your Account"
    },
    {
      type: "paragraph",
      content: "Visit our website and click 'Get Started' to create your account. You'll need:"
    },
    {
      type: "list",
      items: [
        "A valid email address",
        "A secure password",
        "Payment information"
      ]
    },
    {
      type: "heading",
      level: 2,
      content: "Step 2: Choose Your Server"
    },
    {
      type: "paragraph",
      content: "Navigate to our pricing page and select the plan that fits your needs:"
    },
    {
      type: "list",
      items: [
        "**Game Servers**: Perfect for Minecraft and Hytale",
        "**Dedicated Servers**: Maximum performance for large communities"
      ]
    },
    {
      type: "image",
      src: "/images/kb/dashboard-preview.png",
      alt: "Latch Control Panel Dashboard",
      caption: "Your intuitive control panel after purchase"
    },
    {
      type: "heading",
      level: 2,
      content: "Step 3: Configure Your Server"
    },
    {
      type: "paragraph",
      content: "After purchase, you'll receive:"
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Server IP address and port",
        "Control panel login credentials",
        "FTP/SFTP access details"
      ]
    },
    {
      type: "alert",
      variant: "success",
      content: "Check your email! All login details are sent within 5-10 minutes of purchase."
    },
    {
      type: "heading",
      level: 2,
      content: "Step 4: Connect and Play"
    },
    {
      type: "paragraph",
      content: "Use the provided connection details to:"
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Access your control panel",
        "Upload your game files",
        "Configure server settings",
        "Share the IP with your players"
      ]
    },
    {
      type: "heading",
      level: 2,
      content: "Quick Start Video"
    },
    {
      type: "youtube",
      videoId: "YOUR_VIDEO_ID",
      caption: "Watch our quick start guide"
    },
    {
      type: "heading",
      level: 2,
      content: "Need Help?"
    },
    {
      type: "paragraph",
      content: "Our support team is available around the clock via:"
    },
    {
      type: "list",
      items: [
        "Discord tickets (fastest response)",
        "Email support",
      ]
    },
    {
      type: "code",
      language: "url",
      code: "https://panel.conduithost.com/"
    },
    {
      type: "alert",
      variant: "warning",
      content: "Pro Tip: Join our Discord community for instant help from both staff and experienced users."
    },
    {
      type: "paragraph",
      content: "Happy hosting! 🚀"
    }
  ]
};
