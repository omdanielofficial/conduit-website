/**
 * ============================================
 * KNOWLEDGEBASE ARTICLE
 * ============================================
 */

import { KnowledgebaseArticle } from "../types";

export const article: KnowledgebaseArticle = {
  slug: "how-to-join-minecraft-server",

  title: "How to Join a Minecraft Server",

  description:
    "Learn how to join a Minecraft server on Java and Bedrock editions using an IP address.",

  category: "game-servers",

  author: "Latch Team",

  date: "2026-01-22",

  readTime: 4,

  tags: ["minecraft", "servers", "multiplayer", "getting-started"],

  content: [
    {
      type: "heading",
      level: 1,
      content: "How to Join a Minecraft Server"
    },

    {
      type: "paragraph",
      content:
        "Playing on a Minecraft server lets you explore custom worlds, play with friends, and enjoy multiplayer game modes. This guide explains how to join a Minecraft server using both **Java Edition** and **Bedrock Edition**."
    },

    {
      type: "alert",
      variant: "info",
      content:
        "Before joining a server, make sure your Minecraft version matches the server version."
    },

    {
      type: "heading",
      level: 2,
      content: "Joining a Server on Minecraft Java Edition"
    },

    {
      type: "list",
      ordered: true,
      items: [
        "Open **Minecraft Java Edition**",
        "Click **Multiplayer** from the main menu",
        "Select **Add Server**",
        "Enter the server name and **Server Address (IP)**",
        "Click **Done**, then double-click the server to join"
      ]
    },

    {
      type: "image",
      src: "/images/kb/minecraft-java-add-server.png",
      alt: "Add Server screen in Minecraft Java Edition",
      caption: "Add the server IP in the Multiplayer menu"
    },

    {
      type: "heading",
      level: 2,
      content: "Joining a Server on Minecraft Bedrock Edition"
    },

    {
      type: "list",
      ordered: true,
      items: [
        "Open **Minecraft Bedrock Edition**",
        "Click **Play** → **Servers** tab",
        "Scroll down and select **Add Server**",
        "Enter the server name, IP address, and port",
        "Tap **Save**, then join the server"
      ]
    },

    {
      type: "alert",
      variant: "warning",
      content:
        "Most Bedrock servers require a port number (commonly `19132`). Make sure it’s entered correctly."
    },

    {
      type: "heading",
      level: 3,
      content: "Common Connection Issues"
    },

    {
      type: "list",
      items: [
        "Incorrect server IP or port",
        "Minecraft version mismatch",
        "Server is offline or restarting",
        "Firewall or network restrictions"
      ]
    },

    {
      type: "alert",
      variant: "error",
      content:
        "If you see a “Connection timed out” error, the server may be offline or blocking your IP."
    },

    {
      type: "heading",
      level: 3,
      content: "Need Help?"
    },

    {
      type: "paragraph",
      content:
        "If you still can’t connect, reach out to the server owner or check our troubleshooting guides for Minecraft servers."
    },

{
  type: "alert",
  variant: "success",
  content: "You’re ready to play! Enjoy exploring and building with other players."
}
  ]
};
