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
