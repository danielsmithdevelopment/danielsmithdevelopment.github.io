/** Site-wide copy and links — update here to refresh resume CTAs and featured work. */
export const site = {
  name: 'Daniel Smith',
  tagline: 'Platform & AI tooling engineer.',
  /** OpenGraph / meta default description */
  description:
    'Senior backend platform engineer focused on production Kubernetes, AI agents, and MCP tooling. Open to roles where AI meets reliable infrastructure.',
  /** Public site URL (set NEXT_PUBLIC_SITE_URL in CI for canonical links and RSS) */
  url:
    (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL) ||
    'https://danielsmithdevelopment.com',
  location: 'San Gabriel, CA',
  email: 'danielsmithdevelopment@gmail.com',
  phoneDisplay: '626.223.0629',
  hireable: true,
  bioShort:
    'I build production platforms and AI agent infrastructure — from multi-region Kubernetes and service mesh to MCP servers that let agents search and execute against APIs without bloating context.',
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
      'Shipped ClawQL, an open-source MCP server so LLM agents can search OpenAPI/Swagger/Discovery specs and run operations with lean responses — bundled graphs for GCP, Cloudflare, GitHub, Slack, and more.',
  },
  {
    title: 'On-device ML & GenAI',
    body:
      'Forked and extended the Android “gallery” sample to explore local inference and GenAI UX — practical experimentation beyond pure backend work.',
  },
  {
    title: 'Platform at scale',
    body:
      'At Phantom: multi-region Kubernetes, Istio, and CockroachDB; chaos engineering and K6 load testing; developer-experience scores up 125%+ and 133% on key CoreDX measures; 65% infra cost reduction after a Lambda-to-K8s migration.',
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
  href: string
  label: string
  /** Highlight for recruiters (AI / agents / platform) */
  highlight: boolean
}

export type FeaturedLinkedInPost = {
  /** Card headline */
  title: string
  /** Short excerpt for the site (full story on LinkedIn) */
  description: string
  linkedInUrl: string
  /** Optional secondary links (docs, npm, repo) */
  extraLinks?: { label: string; href: string }[]
}

/** Long-form posts to highlight on the home page — keep descriptions short; full text lives on LinkedIn. */
export const featuredLinkedInPosts: FeaturedLinkedInPost[] = [
  {
    title: 'TrueNAS Scale homelab: recovery without SSH or console',
    description:
      'After a large transfer, the web UI and SMB dropped; an aggressive Thunderbolt hot-swap killed console access too. ClawQL memory_ingest in Cursor kept every hypothesis, command, and log in one place — routing table cleanup (Docker utun + duplicate LAN IPs), UI back, SSH enabled, pools still ONLINE.',
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
    title: 'ClawQL has friends — MCP + gRPC ecosystem',
    description:
      'How pluggable gRPC transports for MCP fit enterprises on microservices: mcp-grpc-transport, ClawQL unified server, protoc-gen-go-mcp, gRPC-buf — and why a sovereign TypeScript hub plus multi-language tooling reduces protocol friction for agentic workloads.',
    linkedInUrl:
      'https://www.linkedin.com/posts/danielsmithdev_clawql-has-friends-see-how-it-fits-into-share-7450927468938444800-eXMK',
  },
  {
    title: 'Announcing mcp-grpc-transport v0.1.0',
    description:
      'Production-ready gRPC for the Model Context Protocol on @modelcontextprotocol/sdk: protobuf payloads, unary + bidirectional streaming, grpc.health.v1 probes, mTLS, optional JSON-RPC migration — generic for any MCP server.',
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

/** Curated from github.com/danielsmithdevelopment — edit to reorder or swap */
export const featuredRepos: FeaturedRepo[] = [
  {
    name: 'ClawQL',
    description:
      'MCP server: search and execute over OpenAPI 3, Swagger 2, or Google Discovery, with optional GraphQL for lean API responses. Bundled specs (GCP, Cloudflare, Jira, GitHub, Slack, Sentry, n8n) so agents discover operations without loading full API definitions into context.',
    href: 'https://github.com/danielsmithdevelopment/ClawQL',
    label: 'github.com · TypeScript',
    highlight: true,
  },
  {
    name: 'gallery (fork)',
    description:
      'Exploring on-device ML and GenAI use cases — a gallery to try models locally. Forked to experiment with device-side inference and UX.',
    href: 'https://github.com/danielsmithdevelopment/gallery',
    label: 'github.com · Kotlin',
    highlight: true,
  },
  {
    name: 'CoachellaPlus',
    description:
      'Full-stack TypeScript site and product work — example of shipping end-to-end web experiences alongside infrastructure work.',
    href: 'https://github.com/danielsmithdevelopment/CoachellaPlus',
    label: 'github.com',
    highlight: false,
  },
  {
    name: 'DevSecOps-boilerplate',
    description:
      'Golden images, Ansible, Terraform, and GitHub Actions patterns for secure, repeatable infrastructure automation.',
    href: 'https://github.com/danielsmithdevelopment/DevSecOps-boilerplate',
    label: 'github.com · Go',
    highlight: false,
  },
]
