<div align="center">

<img src="https://github.com/rqinix/BedrockLive/blob/main/docs/images/bedrocklive.png?raw=true" alt="BedrockLive Logo" width="200">

# BedrockLive

[![npm version](https://img.shields.io/npm/v/bedrocklive.svg)](https://www.npmjs.com/package/bedrocklive)
[![npm downloads](https://img.shields.io/npm/dm/bedrocklive.svg)](https://www.npmjs.com/package/bedrocklive)
![GitHub Downloads](https://img.shields.io/github/downloads/rqinix/BedrockLive/total?color=brightgreen&logo=github)
[![GitHub stars](https://img.shields.io/github/stars/rqinix/bedrocklive.svg)](https://github.com/rqinix/BedrockLive/stargazers)
[![GitHub license](https://img.shields.io/github/license/rqinix/bedrocklive.svg)](https://github.com/rqinix/BedrockLive/blob/main/LICENSE)
[![Discord](https://img.shields.io/discord/1280028960129941584?logo=discord&label=Discord)](https://discord.gg/U474DVQ8)

**Turn your Minecraft streams into interactive TikTok experiences. Connect live stream events directly to your game world.**
</div>

BedrockLive transforms your Minecraft Bedrock streams into fully interactive experiences where your TikTok audience becomes part of the gameplay. Through real-time event binding, viewer actions like sending gifts, following, sharing, or chatting trigger immediate responses in your Minecraft world.

Built specifically for Minecraft Bedrock/Pocket Edition, The system operates through a local server that captures TikTok events and translates them into Minecraft commands, allowing for unlimited creative possibilities in viewer engagement.

Whether you're running building challenges, survival scenarios, or custom game modes, BedrockLive gives you the tools to create interactive content that keeps viewers engaged and encourages participation through the platform's gifting and social features.

## 🚀 Quick Start

### Global Installation (Recommended)

```bash
npm install -g bedrocklive
bedrocklive
```

### Local Installation

```bash
npx bedrocklive
```

### From Source

```bash
git clone https://github.com/rqinix/BedrockLive.git
cd bedrocklive
npm install
npm start
```

## ✨ Features

- 🎮 **Real-time TikTok Live to Minecraft Bridge** - Connect your stream instantly
- 🔌 **Plugin System** - Extensible with custom plugins
- 📱 **Mobile-First** - Designed for Minecraft Bedrock/Pocket Edition
- 🛠️ **Easy Setup** - No complex configuration required
- 🔥 [Free TNT Game (Bedrock Box)](https://github.com/rqinix/TNTCoin)

## 🎯 Use Cases


## 📋 Requirements

- [Node.js (LTS recommended)](https://nodejs.org/en/download) (For Desktop)
- **Minecraft Bedrock Edition** (Mobile, Windows 10+, Xbox, etc.)
- **TikTok Account** with live streaming capability
- **Local Network Access** for WebSocket connection

## 🔧 Setup Guide

### 1. Install BedrockLive

```bash
npm install -g bedrocklive
```

### 2. Run BedrockLive

```bash
bedrocklive
```

Follow the interactive prompts:
- Enter your TikTok username
- Set the port (default: 3000)
- Choose whether to wait until you're live
- Select plugins to activate

### 3. Connect Minecraft

In your Minecraft Bedrock Edition:

Open Minecraft chat and type:
```
/connect localhost:3000
```

### 4. Start Your TikTok Live Stream

Your Minecraft world is now connected to your TikTok Live stream! 🎉

## 🔌 Plugin System

BedrockLive uses an embedded plugin system. Plugins are defined directly in TypeScript files without separate manifest files.

### Creating a Plugin

Create a file in `plugins/my-plugin/main.ts`:

```typescript
import { BedrockLive } from "../../core/bedrocklive.js";
import { WebcastEvent } from "tiktok-live-connector";

export const manifest = {
    name: "My Awesome Plugin",
    description: "Does amazing things with TikTok events",
    version: "1.0.0",
    author: "Your Name"
};

export function plugin(bedrockLive: BedrockLive): void {
    const { tiktok, minecraft } = bedrockLive;
    
    // React to TikTok chat messages
    tiktok.events.onEvent(WebcastEvent.CHAT, (data) => {
        minecraft.requestCommand(`say ${data.user.uniqueId}: ${data.comment}`);
    });
    
    // React to gifts
    tiktok.events.onEvent(WebcastEvent.GIFT, (data) => {
        if (data.giftId === 5655) { // Rose gift
            minecraft.requestCommand(`summon tnt ~ ~5 ~`);
        }
    });
}
```

### Built-in Plugins

- [TNT Coin](https://github.com/rqinix/TNTCoin) - Full TikTok TNT Game support

## 🌐 Events

BedrockLive handles these TikTok Live events:

| Event | Description | Minecraft Integration |
|-------|-------------|---------------------|
| `CHAT` | Chat messages | Display in game chat |
| `GIFT` | Gifts sent to streamer | Trigger TNT, effects, or commands |
| `LIKE` | Likes on the stream | Particle effects, sounds |
| `FOLLOW` | New followers | Welcome messages, rewards |
| `SHARE` | Stream shares | Special announcements |
| `MEMBER` | Viewers joining | Join notifications |

## 🚨 Troubleshooting

### Connection Issues

**Minecraft says "Could not connect":**

1. Make sure websocket is enabled in your Minecraft settings
2. Check if BedrockLive is running and shows the correct port
3. Try using your computer's IP address instead of `localhost`
4. Ensure firewall isn't blocking the connection
5. On mobile, make sure you're on the same WiFi network

**TikTok connection fails:**

1. Verify your TikTok username is correct
2. Make sure you're currently live streaming
3. Check your internet connection
4. Try restarting BedrockLive

### Finding Your IP Address

**Windows:**
```cmd
ipconfig
```

**Mac/Linux:**
```bash
ifconfig
```

Look for your local IP (usually starts with 192.168.x.x)

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Setup

```bash
git clone https://github.com/rqinix/BedrockLive.git
cd bedrocklive
npm install
npm run dev
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TikTok Live Connector](https://github.com/zerodytrash/TikTok-Live-Connector) - The awesome library that makes TikTok integration possible
- [Minecraft Bedrock WSS](https://www.s-anand.net/blog/programming-minecraft-with-websockets/) - Minecraft Bedrock WebSocket reference
- Community contributors and content creators using BedrockLive

## 📞 Support

- **Discord:** [BedrockLive](https://discord.gg/U474DVQ8)
- **Issues:** [GitHub Issues](https://github.com/rqinix/bedrockBedrockLive)
- **Email:** rqinix.io@gmail.com

---

<div align="center">

**⭐ Star this repository if BedrockLive helped your stream! ⭐**

</div>