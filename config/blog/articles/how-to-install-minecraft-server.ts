import { KnowledgebaseArticle } from "../types";

export const article: KnowledgebaseArticle = {
  slug: "how-to-install-minecraft-server",
  title: "How to Install a Minecraft Server",
  description: "Step-by-step guide to installing and configuring your Minecraft server.",
  category: "game-servers",
  author: "Alex Chen",
  date: "2026-01-18",
  readTime: 8,
  tags: ["minecraft", "installation", "java"],
  content: [
    {
      type: "heading",
      level: 1,
      content: "How to Install a Minecraft Server"
    },
    {
      type: "paragraph",
      content: "Setting up a Minecraft server on Latch is incredibly easy. Follow this guide to get your world online."
    },
    {
      type: "heading",
      level: 2,
      content: "Prerequisites"
    },
    {
      type: "paragraph",
      content: "Before you begin, make sure you have:"
    },
    {
      type: "list",
      items: [
        "An active Latch game server plan",
        "Access to your control panel",
        "Minecraft server files (we'll help you get these)"
      ]
    },
    {
      type: "alert",
      variant: "info",
      content: "Recommended: At least 2GB RAM for vanilla servers, 4GB+ for modded servers."
    },
    {
      type: "heading",
      level: 2,
      content: "Installation Steps"
    },
    {
      type: "heading",
      level: 3,
      content: "1. Access Your Control Panel"
    },
    {
      type: "paragraph",
      content: "Log into your Latch control panel:"
    },
    {
      type: "code",
      language: "text",
      code: "https://panel.latch.gg"
    },
    {
      type: "heading",
      level: 3,
      content: "2. Select Minecraft from Game List"
    },
    {
      type: "paragraph",
      content: "Click 'Create New Server' and select:"
    },
    {
      type: "list",
      items: [
        "Minecraft Java Edition, or",
        "Minecraft Bedrock Edition"
      ]
    },
    {
      type: "image",
      src: "/images/kb/minecraft-selection.png",
      alt: "Minecraft Server Selection",
      caption: "Choose between Java or Bedrock edition"
    },
    {
      type: "heading",
      level: 3,
      content: "3. Configure Server Settings"
    },
    {
      type: "paragraph",
      content: "Edit your server.properties file with these recommended settings:"
    },
    {
      type: "code",
      language: "properties",
      code: `# Server Settings
server-name=My Awesome Server
max-players=20
gamemode=survival
difficulty=normal
pvp=true
enable-command-block=false
view-distance=10`,
      filename: "server.properties"
    },
    {
      type: "alert",
      variant: "warning",
      content: "Lower view-distance (6-8) if you experience lag. This is the most common performance tweak!"
    },
    {
      type: "heading",
      level: 3,
      content: "4. Install Mods (Optional)"
    },
    {
      type: "paragraph",
      content: "For modded servers, use our one-click installers:"
    },
    {
      type: "list",
      items: [
        "**Forge**: Best for tech/adventure mods",
        "**Fabric**: Lightweight, great performance",
        "**Paper**: Optimized vanilla with plugins"
      ]
    },
    {
      type: "code",
      language: "bash",
      code: `# Upload mods via FTP to:
/mods/

# Or use our automatic installer:
1. Select mod loader in panel
2. Click "Install"
3. Upload .jar files`,
      filename: "Installation Guide"
    },
    {
      type: "heading",
      level: 2,
      content: "Connecting to Your Server"
    },
    {
      type: "paragraph",
      content: "Share this connection info with your players:"
    },
    {
      type: "code",
      language: "text",
      code: "Server IP: play.yourserver.com:25565\n\nOr use the direct IP from your panel"
    },
    {
      type: "heading",
      level: 2,
      content: "Video Tutorial"
    },
    {
      type: "youtube",
      videoId: "YOUR_VIDEO_ID",
      caption: "Watch our Minecraft server setup tutorial"
    },
    {
      type: "heading",
      level: 2,
      content: "Optimization Tips"
    },
    {
      type: "list",
      items: [
        "Use Paper or Purpur for 30-50% better performance",
        "Pre-generate chunks with Chunky plugin",
        "Limit entities with server plugins",
        "Regular restarts keep performance smooth"
      ]
    },
    {
      type: "alert",
      variant: "success",
      content: "Pro tip: Install Spark for performance profiling - it's free and shows exactly what's causing lag!"
    },
    {
      type: "heading",
      level: 2,
      content: "Common Issues"
    },
    {
      type: "paragraph",
      content: "**Server won't start?**"
    },
    {
      type: "list",
      items: [
        "Check RAM allocation (min 2GB)",
        "Verify Java version matches server",
        "Review logs in control panel"
      ]
    },
    {
      type: "paragraph",
      content: "**Players can't connect?**"
    },
    {
      type: "list",
      items: [
        "Verify server is running (green status)",
        "Check firewall settings",
        "Confirm correct IP and port"
      ]
    },
    {
      type: "alert",
      variant: "error",
      content: "Still having issues? Contact support with your server logs - we'll fix it fast!"
    }
  ]
};
