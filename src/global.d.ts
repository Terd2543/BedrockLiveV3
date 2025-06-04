// Global type declarations for BedrockLive

// Import and re-export types from our local type definitions
/// <reference types="./src/@types/tiktok/index.d.ts" />
/// <reference types="./src/@types/minecraft/Events.d.ts" />

// Make types globally available
declare global {
  // TikTok related types
  interface TikTokLiveServerConfig {
    tiktokUsername: string;
    port?: number;
    waitUntilLive?: boolean;
    enableGiftInfo?: boolean;
    maxReconnectAttempts?: number;
  }

  interface PluginModule {
    manifest: PluginManifest;
    mainFile: string;
  }

  interface PluginManifest {
    name: string;
    description: string;
    version: string;
    author: string;
  }

  // Minecraft related types
  type MinecraftEvent = 
    | "PlayerMessage"
    | "BlockBroken"
    | "BlockPlaced"
    | "PlayerJoin"
    | "PlayerLeave"
    | "PlayerDied"
    | "MobKilled"
    | "ItemUsed"
    | "ItemCrafted"
    | "ItemDropped";
}

export {};
