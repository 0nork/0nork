<div align="center">

<img src="https://raw.githubusercontent.com/0nork/0nMCP/main/.well-known/0n-icon-green.png" alt="0n" width="72" height="72" />

<h1>0nork</h1>

<p><strong>AI Orchestration Infrastructure</strong><br/>
The open-source org behind 0nMCP, the .0n Standard, and the 0n Marketplace.</p>

[![npm](https://img.shields.io/npm/v/0nmcp?color=6EE05A&label=0nmcp&style=flat-square)](https://npmjs.com/package/0nmcp)
[![npm downloads](https://img.shields.io/npm/dm/0nmcp?color=6EE05A&style=flat-square)](https://npmjs.com/package/0nmcp)
[![GitHub stars](https://img.shields.io/github/stars/0nork/0nMCP?color=6EE05A&style=flat-square)](https://github.com/0nork/0nMCP/stargazers)
[![License](https://img.shields.io/github/license/0nork/0nMCP?color=6EE05A&style=flat-square)](https://github.com/0nork/0nMCP/blob/main/LICENSE)
[![Discord](https://img.shields.io/badge/discord-0nmcp-6EE05A?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/0nmcp)
[![Patent Pending](https://img.shields.io/badge/USPTO-%2363%2F990%2C046-6EE05A?style=flat-square)](https://0nmcp.com)

</div>

---

## What we build

**0nMCP** is a Universal AI API Orchestrator — a single MCP server that gives any AI model (Claude, GPT, Gemini) access to 850 tools across 53 services. No subscriptions. No monthly fees. $0.10/execution.

```bash
npx 0nmcp
```

Connect your AI to Stripe, Slack, GitHub, LinkedIn, Cloudflare, Shopify, Twilio, HubSpot, Airtable, GoDaddy, Resend, SendGrid, and 41 more — through one interface, with one install.

---

## Platform stats

| Metric | Count |
|--------|-------|
| 🔧 Tools | **850+** |
| 🔌 Services | **53** |
| ⚡ Capabilities | **1,385+** |
| 💰 Price per execution | **$0.10** |
| 🤖 Compatible AI models | Claude · GPT · Gemini · Any MCP client |

---

## The .0n Ecosystem

```
~/.0n/                          ← Universal config directory
├── config.json                 ← Global settings
├── connections/                ← Service credentials  
│   ├── stripe.0n
│   ├── slack.0n
│   └── github.0n
├── workflows/                  ← Automation definitions
│   └── invoice-notify.0n
└── history/                    ← Execution logs
```

Every 0nork product reads from `~/.0n/` — one config directory for your entire AI stack.

---

## Repositories

| Repo | Description |
|------|-------------|
| [**0nMCP**](https://github.com/0nork/0nMCP) | Universal AI API Orchestrator — the core platform |
| [**0n-spec**](https://github.com/0nork/0n-spec) | The `.0n` Standard — universal config format for AI orchestration |
| [**cr0n-engine**](https://github.com/0nork/cr0n-engine) | Federated AI closed learning loop — multi-model optimization engine |
| [**0nmcp-website**](https://github.com/0nork/0nmcp-website) | Official 0nmcp.com site (Next.js + Vercel) |

---

## Quick start

**Claude Desktop / Cursor / Windsurf / any MCP client:**

```json
{
  "mcpServers": {
    "0nmcp": {
      "command": "npx",
      "args": ["0nmcp"]
    }
  }
}
```

All 850 tools load instantly. No API key required to start.

---

## Links

<div align="center">

[**0nmcp.com**](https://0nmcp.com) · [**npm**](https://npmjs.com/package/0nmcp) · [**Discord**](https://discord.gg/0nmcp) · [**Releases**](https://github.com/0nork/0nMCP/releases)

<sub>Patent Pending · USPTO #63/990,046 · RocketOpp LLC · New Alexandria, PA</sub>

</div>
