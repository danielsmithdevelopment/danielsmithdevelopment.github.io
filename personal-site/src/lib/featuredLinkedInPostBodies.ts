/**
 * Full text mirrored from the public LinkedIn posts (same slugs as `featuredLinkedInPosts`).
 * Update here when you revise a thread on LinkedIn and want the on-site copy to match.
 */
export const featuredLinkedInPostBodies = {
  'truenas-scale-homelab-recovery': `Yesterday I had one of those "oh no" homelab moments that makes your stomach drop. I'd just finished transferring several hundred gigabytes — over a **million files** — to my TrueNAS Scale box. Walked away for the day, came back… and both my Mac mini and MacBook couldn't reach the web UI. SMB shares in Finder dropped. Reboots didn't help. I plugged a monitor straight into the NAS, rebooted via console a few times, then made the classic mistake: hot-swapping the Thunderbolt splitter too aggressively. That completely corrupted the Thunderbolt handshake. Suddenly I had zero console access (HDMI or TB), the dashboard was still dead, and I was staring at a brick with my data inside. Worst part? I had never enabled SSH. So my only two doors in were the broken web UI and the now-dead physical console. Temporary lockout achieved.

That's when ClawQL + Cursor became the real MVP. Instead of jumping between random chat windows and losing my train of thought, I used ClawQL's \`memory_ingest\` to build a living, timestamped case study right inside Cursor. Every hypothesis, every command, every log, every decision got automatically saved and recalled. I could ask it "what did we try with the routing table?" and instantly get the full context back. Gemini gave a couple of ideas, but ClawQL kept everything organized and evidence-based so I never chased ghosts.

Within an hour I had the Mac's routing table cleaned up (hello, nine \`utun\` interfaces from Docker Desktop + dual 192.168.0.x IPs on the same subnet), web UI restored, SSH enabled, and the NAS fully debugged from the terminal. No data loss. Pools stayed ONLINE. Everything back online.

I turned the entire incident into a detailed case study that walks through the outage, every troubleshooting step, the exact ClawQL workflow I used, and the lessons learned so I never repeat them.

## Biggest takeaways I'm implementing today

- Enable SSH + auto-start on every NAS the day you set it up (not the day it breaks)
- Never trust hot-swapping Thunderbolt for console duty
- Keep client networking clean — Docker/K8s \`utun\` interfaces can silently murder connectivity
- Real-time documentation isn't optional; it's your safety net

ClawQL turned a potential multi-hour (or multi-day) panic into a structured, calm recovery and left me with a permanent, searchable record of exactly what worked. If you run homelabs, self-hosted infra, or anything where downtime hurts, you need this in your toolkit.

Would love to hear your own "I thought I was locked out forever" stories in the comments. What saved your last homelab crisis?

## Technical deep-dive

The long-form write-up with commands, timelines, and appendices lives in the ClawQL docs: use the **Case study (docs)** link below.`,

  'clawql-mcp-grpc-ecosystem': `ClawQL has friends! See how it fits into the wider MCP ecosystem and how we're helping everyone with our new mcp-grpc-transport 👀

## MCP + gRPC momentum

Google Cloud's January 2026 announcement of pluggable gRPC transports for MCP marked a turning point for enterprises already standardized on gRPC microservices. The community responded rapidly with high-quality, language-specific tools that make MCP feel truly cloud-native.

## TypeScript / Node.js

- **mcp-grpc-transport** (by the ClawQL team) — Our pluggable gRPC transport for any @modelcontextprotocol/sdk McpServer. Features: unary + bidirectional streaming, built-in health checks (\`grpc.health.v1.Health\`), optional server reflection, mTLS via env vars, and one-line integration. Perfect for long-running agent loops (memory recall, sandbox execution, multi-turn tool composition) and native mesh routing (Cloudflare Mesh, Istio, etc.). → npm | GitHub
- **ClawQL Unified Server** — Single-process MCP server with embedded in-process GraphQL proxy for 99%+ token savings in \`execute()\` calls. Fully compatible with mcp-grpc-transport for side-by-side stdio/HTTP/gRPC operation.

## Go

- **protoc-gen-go-mcp** (Redpanda Data) — A Protocol Buffers compiler plugin that auto-generates full MCP servers from any existing gRPC or ConnectRPC service. Automatically creates JSON Schema for tool inputs from your .proto definitions and wires handlers directly to your gRPC backend.
- **gRPC-buf** (by Dipjyoti Metia) — A production-ready Go reference implementation featuring dual gRPC + REST APIs (via Connect), PostgreSQL persistence, and comprehensive operational documentation (architecture, config, workflows, playbooks). Excellent blueprint for running MCP + gRPC services at scale.

## Why this matters for ClawQL users

Whether your backend team works in Go (exposing existing services via protoc-gen-go-mcp) or TypeScript (using ClawQL + mcp-grpc-transport), you get a consistent, high-performance MCP layer. ClawQL shines as the sovereign TypeScript hub:

- Keeps core inference and memory fully on-prem in your private AI lab
- Delivers massive token efficiency through its in-process GraphQL proxy
- Provides human-inspectable Obsidian knowledge graphs with Merkle-proven provenance (Pro/Enterprise)
- Supports selective hybrid Cloudflare Mesh/Artifacts usage only for high-value paths

This multi-language interoperability reduces protocol friction and lets teams reuse existing gRPC infrastructure while gaining powerful agentic capabilities. We actively collaborate with and celebrate the broader ecosystem. If you're building complementary tools (e.g., MCP clients, domain-specific connectors, or observability integrations), we'd love to feature them here or explore co-marketing.

Want to integrate? Start with mcp-grpc-transport today — it's completely generic and works with any MCP server, including ClawQL. Questions or ideas for deeper integrations? Open a discussion on GitHub or reach out via the community channels.

> Shout out to Redpanda Data and Google and Dipjyoti Metia for their contributions to gRPC + MCP ecosystem. Sincerely hope my typescript based grpc transport is a welcome addition and you all benefit from it as I have from your work. Thank you!`,

  'mcp-grpc-transport-v0-1-0': `Happy Friday everyone! Got something to share with y'all: **Announcing mcp-grpc-transport** — production-ready gRPC support for the Model Context Protocol (MCP).

After extensive community discussion (including Google Cloud's contributions toward pluggable transports), I'm excited to release **mcp-grpc-transport v0.1.0** today. This package adds a clean, pluggable gRPC transport layer on top of @modelcontextprotocol/sdk. It delivers the performance, security, and operational characteristics that enterprise teams expect when running AI agents at scale.

## Key capabilities

- Binary protobuf encoding → significantly lower latency and payload size compared to JSON-RPC over Streamable HTTP
- Full support for unary and bidirectional streaming RPCs (ideal for long-horizon agent workflows)
- Kubernetes-native: built-in \`grpc.health.v1.Health\` service for liveness/readiness probes
- mTLS + custom interceptors for Zero-Trust architectures (Cloudflare Mesh, Istio, etc.)
- Optional JSON-RPC session streaming for gradual migration
- Works with any MCP server — fully generic and framework-agnostic

Installation & basic usage is straightforward (see code snippet in comments or npm page). If you're building production MCP servers and already operate in a gRPC-heavy environment, this should feel like a natural fit. It also pairs excellently with unified MCP servers that embed optimized internal layers (like GraphQL proxies for token efficiency).

Try it out: [npm — mcp-grpc-transport](https://www.npmjs.com/package/mcp-grpc-transport)

Repo & examples: part of the ClawQL project on GitHub.

Feedback, bug reports, and PRs are very welcome. Let's make MCP even more cloud-native and production-ready together.`,
} as const

export type FeaturedLinkedInPostSlug = keyof typeof featuredLinkedInPostBodies
