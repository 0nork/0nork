<p align="center">
  <img src="https://0nork.com/logo.svg" alt="0nORK" width="300" />
</p>

<h1 align="center">0nORK</h1>

<p align="center">
  <strong>AI Orchestration Infrastructure</strong>
</p>

<p align="center">
  <a href="https://0nork.com">Website</a> •
  <a href="https://github.com/0nork">GitHub</a> •
  <a href="https://discord.gg/0nork">Discord</a>
</p>

---

## What is 0nORK?

0nORK builds infrastructure for AI orchestration. We create tools that let AI systems connect to and control external services through natural language.

**Our mission**: Make AI orchestration as simple as flipping a switch.

---

## Products

### 🔌 0nMCP

**Universal AI API Orchestrator**

Connect Claude to 17+ services. Say what you want. AI does the rest.

```bash
npx 0nmcp init
npx 0nmcp connect
```

**Links**: [NPM](https://npmjs.com/package/0nmcp) • [GitHub](https://github.com/0nork/0nmcp) • [Docs](https://0nmcp.com/docs)

---

### 📋 The .0n Standard

**Universal configuration format for AI orchestration**

Like `.env` for environment variables, `.0n` is for AI orchestration config.

```bash
npx 0n-spec validate my-workflow.0n
```

**Links**: [NPM](https://npmjs.com/package/0n-spec) • [GitHub](https://github.com/0nork/0n-spec) • [Specification](https://github.com/0nork/0n-spec/blob/main/SPEC.md)

---

## The .0n Ecosystem

```
~/.0n/                          ← Universal config directory
├── config.json                 ← Global settings
├── connections/                ← Service credentials
│   ├── stripe.0n
│   ├── slack.0n
│   └── gohighlevel.0n
├── workflows/                  ← Automation definitions
│   └── invoice-notify.0n
├── snapshots/                  ← System state captures
│   └── crm-setup.0n
└── history/                    ← Execution logs
```

**Every 0nORK product uses `~/.0n/`** — one config to rule them all.

---

## Quick Start

### 1. Install the MCP Server

```bash
npx 0nmcp init
```

### 2. Connect Services

```bash
npx 0nmcp connect
# Follow prompts to add Stripe, Slack, etc.
```

### 3. Configure Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "0nmcp": {
      "command": "npx",
      "args": ["-y", "0nmcp"]
    }
  }
}
```

### 4. Orchestrate!

Ask Claude:
> "Invoice john@acme.com for $500 and notify #sales on Slack"

Claude handles the rest.

---

## Brand Assets

| Asset | URL |
|-------|-----|
| 0nORK Logo | https://0nork.com/logo.svg |
| 0nMCP Logo | https://0nmcp.com/logo.svg |
| Brand Guide | https://0nork.com/brand |

---

## Links

| Resource | URL |
|----------|-----|
| **0nORK Website** | https://0nork.com |
| **0nMCP Website** | https://0nmcp.com |
| **Documentation** | https://0nmcp.com/docs |
| **GitHub Org** | https://github.com/0nork |
| **Discord** | https://discord.gg/0nork |
| **Twitter** | https://twitter.com/0nork |

---

## Packages

| Package | Description | Install |
|---------|-------------|---------|
| `0nmcp` | MCP Server | `npx 0nmcp` |
| `0n-spec` | .0n Standard | `npx 0n-spec` |
| `0nork` | This package | `npm i 0nork` |

---

## License

MIT License - see individual package licenses.

**Trademarks**: "0nORK", "0nMCP", ".0n", and "The .0n Standard" are trademarks of 0nORK.

---

<p align="center">
  <strong>0nORK</strong>
  <br>
  <em>AI Orchestration Infrastructure</em>
  <br><br>
  Turn it on. It just works.
</p>
