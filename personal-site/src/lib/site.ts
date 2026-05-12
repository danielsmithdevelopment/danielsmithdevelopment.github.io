import { featuredLinkedInPostBodies } from '@/lib/featuredLinkedInPostBodies'

/** Site-wide copy and links — update here to refresh resume CTAs and featured work. */
export const site = {
  name: 'Daniel Smith',
  tagline:
    'Senior Backend Platform Engineer | AI Agents & MCP | Kubernetes & Cloud Infrastructure',
  /** OpenGraph / meta default description */
  description:
    'Senior Backend Platform Engineer with 7+ years architecting resilient Kubernetes platforms, AI-powered tools, and multi-cloud DevOps solutions. Actively seeking new opportunities.',
  /** Public site URL (set NEXT_PUBLIC_SITE_URL in CI for canonical links and RSS) */
  url:
    (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL) ||
    'https://danielsmithdevelopment.com',
  location: 'San Gabriel, CA',
  email: 'danielsmithdevelopment@gmail.com',
  phoneDisplay: '626.223.0629',
  hireable: true,
  bioShort:
    'Senior Backend Platform Engineer with 7+ years architecting resilient Kubernetes platforms, AI-powered tools, and multi-cloud DevOps solutions. Delivered large-scale migrations that cut costs 65%, boosted developer experience 125%+, and enabled zero-downtime operations. Recently shipped production AI integrations at Phantom and open-sourced MCP/agentic contributions. Passionate about scalable, intelligent infrastructure and actively seeking new opportunities.',
  github: {
    username: 'danielsmithdevelopment',
    url: 'https://github.com/danielsmithdevelopment',
    bio: 'Developer passionate about automating all the things and changing the world for the better while at it.',
  },
  social: {
    x: 'https://twitter.com/danielsmithdev',
  },
  resumePdfPath: '/Daniel-Smith-Resume-final.pdf',
} as const

/** Set to your profile URL to show LinkedIn on the home hero; leave null to hide. */
export const linkedinProfile: string | null = "https://linkedin.com/in/danielsmithdev"

/** Home page — AI / agents angle for recruiting */
export const aiHighlights = [
  {
    title: 'Agents & APIs',
    body:
      'Shipped ClawQL, an open-source MCP server: agents search and execute over OpenAPI/Swagger/Google Discovery (optional GraphQL/gRPC upstreams) with lean responses; bundled multi-provider graphs; vault memory (memory_ingest / memory_recall), audit, and cache; plus optional sandbox, schedules, Slack notify, Label Studio HITL, Onyx search, and more — stdio, HTTP, and gRPC. See https://docs.clawql.com.',
  },
  {
    title: 'On-device ML & GenAI',
    body:
      'Forked and extended the Android “gallery” sample to explore local inference and GenAI UX — practical experimentation beyond pure backend work.',
  },
  {
    title: 'Platform at scale',
    body:
      'Most recently at Phantom I architected multi-region Kubernetes, Istio, and CockroachDB failover systems; chaos engineering and K6 load testing; developer-experience scores up 125%+ and 133% on key CoreDX measures; and a 65% infra cost reduction after a Lambda-to-K8s migration.',
  },
] as const

export type WorkRole = {
  company: string
  title: string
  /** Single letter or two for logo fallback */
  initial: string
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

/** Pulled from Daniel-Smith-Resume-final.pdf */
export const workRoles: WorkRole[] = [
  {
    company: 'Phantom',
    title: 'Senior Backend Platform Engineer',
    initial: 'P',
    start: { label: 'Jul 2024', dateTime: '2024-07-01' },
    end: { label: 'Aug 2025', dateTime: '2025-08-31' },
  },
  {
    company: 'DraftKings',
    title: 'Senior Blockchain Systems Engineer',
    initial: 'D',
    start: { label: 'Jan 2022', dateTime: '2022-01-01' },
    end: { label: 'Mar 2023', dateTime: '2023-03-31' },
  },
  {
    company: 'Upgrade',
    title: 'DevOps Engineer (SRE)',
    initial: 'U',
    start: { label: 'Sep 2020', dateTime: '2020-09-01' },
    end: { label: 'Dec 2021', dateTime: '2021-12-31' },
  },
  {
    company: 'IBM Blockchain',
    title: 'Financial Blockchain Operations Engineer',
    initial: 'I',
    start: { label: 'May 2018', dateTime: '2018-05-01' },
    end: { label: 'Aug 2020', dateTime: '2020-08-31' },
  },
]

export type FeaturedRepo = {
  name: string
  description: string
  /** Highlight for recruiters (AI / agents / platform) */
  highlight: boolean
  /** Repository or path on GitHub — omit if none */
  github: string | null
  /** npm package page — omit if not published */
  npm: string | null
  /** Production app, marketing site, or public docs — omit if none */
  live: string | null
}

export type FeaturedProject = {
  name: string
  description: string
  github: string | null
  npm: string | null
  live: string | null
}

export type FeaturedLinkedInPost = {
  /** Stable path under /articles/<slug> (must stay URL-safe) */
  slug: string
  /** ISO date for the articles index (edit to match the LinkedIn post if you like) */
  date: string
  /** Card headline */
  title: string
  /** Short excerpt for cards and meta (full narrative is in `body`) */
  description: string
  /** Full post text mirrored from LinkedIn for reading on this site (see `featuredLinkedInPostBodies.ts`) */
  body: string
  linkedInUrl: string
  /** Optional secondary links (docs, npm, repo) */
  extraLinks?: { label: string; href: string }[]
}

/** Home page cards + /articles — metadata here; full post copy in `featuredLinkedInPostBodies.ts`. */
export const featuredLinkedInPosts: FeaturedLinkedInPost[] = [
  {
    slug: 'truenas-scale-homelab-recovery',
    date: '2026-01-20',
    title: 'TrueNAS Scale homelab: recovery without SSH or console',
    description:
      'After a large transfer, the web UI and SMB dropped; an aggressive Thunderbolt hot-swap killed console access too. ClawQL memory_ingest in editor agent kept every hypothesis, command, and log in one place — routing table cleanup (Docker utun + duplicate LAN IPs), UI back, SSH enabled, pools still ONLINE.',
    body: featuredLinkedInPostBodies['truenas-scale-homelab-recovery'],
    linkedInUrl:
      'https://www.linkedin.com/posts/danielsmithdev_truenas-homelab-clawql-share-7452436561679491073-H1Jr',
    extraLinks: [
      {
        label: 'Case study (docs)',
        href: 'https://docs.clawql.com/case-studies/truenas-scale-corgicave-homelab',
      },
    ],
  },
  {
    slug: 'clawql-mcp-grpc-ecosystem',
    date: '2026-01-10',
    title: 'ClawQL has friends — MCP + gRPC ecosystem',
    description:
      'How pluggable gRPC transports for MCP fit enterprises on microservices: mcp-grpc-transport, ClawQL unified server, protoc-gen-go-mcp, gRPC-buf — and why a sovereign TypeScript hub plus multi-language tooling reduces protocol friction for agentic workloads.',
    body: featuredLinkedInPostBodies['clawql-mcp-grpc-ecosystem'],
    linkedInUrl:
      'https://www.linkedin.com/posts/danielsmithdev_clawql-has-friends-see-how-it-fits-into-share-7450927468938444800-eXMK',
  },
  {
    slug: 'mcp-grpc-transport-v0-1-0',
    date: '2026-01-05',
    title: 'Announcing mcp-grpc-transport v0.1.0',
    description:
      'Production-ready gRPC for the Model Context Protocol on @modelcontextprotocol/sdk: protobuf payloads, unary + bidirectional streaming, grpc.health.v1 probes, mTLS, optional JSON-RPC migration — generic for any MCP server.',
    body: featuredLinkedInPostBodies['mcp-grpc-transport-v0-1-0'],
    linkedInUrl:
      'https://www.linkedin.com/posts/danielsmithdev_mcp-grpc-ai-share-7450910808965844992-u7Zm',
    extraLinks: [
      {
        label: 'npm',
        href: 'https://www.npmjs.com/package/mcp-grpc-transport',
      },
      {
        label: 'ClawQL repo',
        href: 'https://github.com/danielsmithdevelopment/ClawQL',
      },
    ],
  },
]

/** Home page spotlight projects (aligned with resume “Open Source and Projects”) */
export const featuredProjects: FeaturedProject[] = [
  {
    name: 'ClawQL',
    description:
      'Open-source MCP server: multi-protocol API supergraph (OpenAPI/Swagger/Discovery, optional GraphQL/gRPC), vault memory and bulk ingest, audit/cache, and optional sandbox, scheduling, Slack, HITL, and enterprise search — https://docs.clawql.com.',
    github: 'https://github.com/danielsmithdevelopment/ClawQL',
    npm: 'https://www.npmjs.com/package/clawql-mcp',
    live: 'https://docs.clawql.com',
  },
  {
    name: 'CoachellaPlus',
    description:
      'Full-stack festival-planning PWA with hybrid retrieval (SQLite + embeddings + reranking), OpenRouter LLM integration, Tavily fallback, and group coordination — Lighthouse 90+ and deployed via ClawQL to Cloudflare and GitHub APIs.',
    github: 'https://github.com/danielsmithdevelopment/CoachellaPlus',
    npm: null,
    live: 'https://coachellaplus.com',
  },
  {
    name: 'mcp-grpc-transport',
    description:
      'TypeScript gRPC transport for MCP: protobuf payloads, unary and bidirectional streaming, grpc.health.v1 probes, mTLS, and Kubernetes-friendly deployment — extends the official MCP SDK beyond stdio and Streamable HTTP.',
    github:
      'https://github.com/danielsmithdevelopment/ClawQL/tree/main/packages/mcp-grpc-transport',
    npm: 'https://www.npmjs.com/package/mcp-grpc-transport',
    live: null,
  },
  {
    name: 'clawql-ouroboros',
    description:
      'Pluggable evolutionary-loop library: typed Executor / Evaluator / Wonder / Reflect phases, ontology convergence gates, Postgres-backed lineage, MCP-shaped hooks, and an optional background seed poller.',
    github:
      'https://github.com/danielsmithdevelopment/ClawQL/tree/main/packages/clawql-ouroboros',
    npm: 'https://www.npmjs.com/package/clawql-ouroboros',
    live: null,
  },
  {
    name: 'panguard-mcp-bridge',
    description:
      'Streamable HTTP MCP gateway (optional gRPC) for /mcp at the edge: Panguard on stdio, upstream clawql-mcp-http, optional JWT (JWKS / Bearer on HTTP and gRPC), Helm mcpProxy integration.',
    github:
      'https://github.com/danielsmithdevelopment/ClawQL/tree/main/packages/panguard-mcp-bridge',
    npm: null,
    live: null,
  },
]

/**
 * /projects — resume “Open Source and Projects” plus other public repos you still want featured.
 * Reorder here; `highlight` drives the “AI / agents” eyebrow on the projects page.
 */
export const featuredRepos: FeaturedRepo[] = [
  {
    name: 'ClawQL',
    description:
      'MCP server: search/execute across OpenAPI 3, Swagger 2, and Google Discovery, with optional GraphQL/gRPC upstreams and bundled multi-provider merges (GCP, Cloudflare, GitHub, Slack, document APIs, Onyx, and more). Core tools include vault memory_ingest / memory_recall, audit, cache, and bulk markdown ingest; optional sandbox_exec, schedule, notify (Slack), HITL (Label Studio), Onyx knowledge search, and Ouroboros lineage. stdio, Streamable HTTP, and MCP over gRPC.',
    highlight: true,
    github: 'https://github.com/danielsmithdevelopment/ClawQL',
    npm: 'https://www.npmjs.com/package/clawql-mcp',
    live: 'https://docs.clawql.com',
  },
  {
    name: 'CoachellaPlus',
    description:
      'Full-stack festival-planning PWA: hybrid retrieval (structured JSON + SQLite embeddings + reranking), OpenRouter LLM, Tavily agentic search with a quality-gated self-improving knowledge base, group chat and live location, set builder with conflict detection, PWA with Lighthouse 90+ including WCAG — deployed via ClawQL to Cloudflare and GitHub APIs.',
    highlight: true,
    github: 'https://github.com/danielsmithdevelopment/CoachellaPlus',
    npm: null,
    live: 'https://coachellaplus.com',
  },
  {
    name: 'mcp-grpc-transport',
    description:
      'First TypeScript/Node.js gRPC transport for the Model Context Protocol: protobuf payloads, unary and bidirectional streaming, grpc.health.v1 probes, mTLS, and enterprise Kubernetes deployment patterns — alongside the official SDK’s stdio and Streamable HTTP.',
    highlight: true,
    github:
      'https://github.com/danielsmithdevelopment/ClawQL/tree/main/packages/mcp-grpc-transport',
    npm: 'https://www.npmjs.com/package/mcp-grpc-transport',
    live: null,
  },
  {
    name: 'clawql-ouroboros',
    description:
      'Evolutionary loop library: typed Executor, Evaluator, Wonder, and Reflect phases; ontology convergence with stagnation, oscillation, and regression gates; Postgres-backed append-only lineage; InMemoryEventStore for tests; MCP-shaped hooks (createSeedFromDocument, runEvolutionaryLoop, getLineageStatus); optional background seed poller.',
    highlight: true,
    github:
      'https://github.com/danielsmithdevelopment/ClawQL/tree/main/packages/clawql-ouroboros',
    npm: 'https://www.npmjs.com/package/clawql-ouroboros',
    live: null,
  },
  {
    name: 'panguard-mcp-bridge',
    description:
      'Streamable HTTP MCP gateway (optional gRPC via mcp-grpc-transport): /mcp for clients or a service mesh while Panguard stays on stdio and terminates on remote clawql-mcp-http. Optional JWT (JWKS RS256, Bearer on HTTP and gRPC) and Helm mcpProxy.mode: custom on the clawql-mcp chart.',
    highlight: true,
    github:
      'https://github.com/danielsmithdevelopment/ClawQL/tree/main/packages/panguard-mcp-bridge',
    npm: null,
    live: null,
  },
  {
    name: 'gallery (fork)',
    description:
      'Exploring on-device ML and GenAI use cases — a gallery to try models locally. Forked to experiment with device-side inference and UX.',
    highlight: true,
    github: 'https://github.com/danielsmithdevelopment/gallery',
    npm: null,
    live: null,
  },
  {
    name: 'DevSecOps-boilerplate',
    description:
      'Golden images, Ansible, Terraform, and GitHub Actions patterns for secure, repeatable infrastructure automation.',
    highlight: false,
    github: 'https://github.com/danielsmithdevelopment/DevSecOps-boilerplate',
    npm: null,
    live: null,
  },
]
