/**
 * ═══════════════════════════════════════════════════════════════════════════
 * 0nORK - AI Orchestration Infrastructure
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * This is the parent package for the 0nORK ecosystem.
 * 
 * Products:
 *   - 0nmcp: Universal AI API Orchestrator
 *   - 0n-spec: The .0n Standard
 * 
 * Install the MCP server:
 *   npx 0nmcp init
 * 
 * Learn more:
 *   https://0nork.com
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const VERSION = '1.0.0';

export const PRODUCTS = {
  '0nmcp': {
    name: '0nMCP',
    description: 'Universal AI API Orchestrator',
    npm: 'https://npmjs.com/package/0nmcp',
    github: 'https://github.com/0nork/0nmcp',
    website: 'https://0nmcp.com',
    install: 'npx 0nmcp init',
  },
  '0n-spec': {
    name: 'The .0n Standard',
    description: 'Universal configuration format for AI orchestration',
    npm: 'https://npmjs.com/package/0n-spec',
    github: 'https://github.com/0nork/0n-spec',
    website: 'https://0nork.com/spec',
    install: 'npx 0n-spec validate',
  },
};

export const LINKS = {
  website: 'https://0nork.com',
  github: 'https://github.com/0nork',
  discord: 'https://discord.gg/0nork',
  twitter: 'https://twitter.com/0nork',
};

export default {
  VERSION,
  PRODUCTS,
  LINKS,
};
