import { agenticSecurityCurriculumPillarBodies } from '@/lib/agenticSecurityCurriculumPillarBodies.generated'
import { featuredLinkedInPostBodies } from '@/lib/featuredLinkedInPostBodies'

/** Site-wide copy and links — update here to refresh resume CTAs and featured work. */
export const site = {
  name: 'Daniel Smith',
  /** Meta / document title suffix: “Daniel Smith — …” */
  tagline:
    'Blockchain Infrastructure · AI Agents · Public Interest Technology',
  /** Home hero H1 */
  headline:
    'Platform Engineer · Blockchain Infrastructure · AI Agents · Public Interest Technology',
  /** OpenGraph / meta default description */
  description:
    "Platform engineer at Validation Cloud building institutional blockchain infrastructure. Creator of the world's first CBDC transaction engine (Sand Dollar), ClawQL agentic AI platform, and challengethefootage.com — open-source tools for government accountability and civil rights.",
  /** Public site URL (set NEXT_PUBLIC_SITE_URL in CI for canonical links and RSS) */
  url:
    (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL) ||
    'https://danielsmithdevelopment.com',
  location: 'San Gabriel, CA',
  email: 'danielsmithdevelopment@gmail.com',
  phoneDisplay: '626.223.0629',
  hireable: false,
  /**
   * Plain-text summary aligned with the resume PDF summary section.
   * Prefer `homeSummaryMarkdown` for the home hero (links + paragraphs).
   */
  bioShort:
    "Platform engineer at Validation Cloud building institutional blockchain node API, staking infrastructure, and AI-powered blockchain intelligence for enterprises managing billions in digital assets. Previously at IBM Blockchain, developed the transaction state machine for Sand Dollar — the world's first nationally deployed retail CBDC, issued by the Central Bank of The Bahamas (sanddollar.bs, live since October 2020). Open-source work spans ClawQL (production agentic AI gateway), challengethefootage.com (surveillance evidence accountability tools used by public defenders), and the clawql-government specification for cryptographic government program outcome measurement. Background includes Phantom, DraftKings, and Upgrade spanning Kubernetes infrastructure, blockchain systems, and SRE.",
  /**
   * Home hero summary (markdown). Links render via ArticleMarkdown.
   */
  homeSummaryMarkdown: `Platform engineer at [Validation Cloud](https://validationcloud.io) building institutional-grade blockchain node API, staking infrastructure, and AI-powered blockchain intelligence (Mavrik) for clients including Chainlink, Consensys, and BitGo.

Previously at IBM Blockchain, I developed the transaction state machine for [Sand Dollar](https://sanddollar.bs) — the world's first nationally deployed retail central bank digital currency, issued by the Central Bank of The Bahamas and live since October 2020. Every CBDC research program currently studying retail digital currency deployment uses the Bahamas as the reference case.

Outside my day job I build open-source infrastructure at the intersection of AI agents, cryptographic audit trails, and government accountability. [ClawQL](https://docs.clawql.com) is a production TypeScript MCP server and agentic gateway used by developers and enterprises. [challengethefootage.com](https://challengethefootage.com) and the [Witness app](https://github.com/danielsmithdevelopment/surveillance-evidence-integrity) provide free legal tools and cryptographically secured civilian recording for people facing surveillance camera evidence in court.`,
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
export const linkedinProfile: string | null =
  'https://linkedin.com/in/danielsmithdev'

/** External destinations surfaced in the footer (and optionally elsewhere). */
export const footerExternalLinks = [
  {
    label: 'Challenge the Footage',
    href: 'https://challengethefootage.com',
  },
  {
    label: 'Surveillance Evidence Integrity',
    href: 'https://github.com/danielsmithdevelopment/surveillance-evidence-integrity',
  },
  {
    label: 'PragmaticVectors',
    href: 'https://pragmaticvectors.com',
  },
] as const

/** Home sidebar — current focus areas */
export const aiHighlights = [
  {
    title: 'Institutional blockchain infrastructure',
    body:
      'At Validation Cloud: Node API (ranked #1 globally by CompareNodes), SOC2 Type II staking, and Mavrik AI-powered blockchain intelligence for Chainlink, Consensys, BitGo, Anchorage, and ether.fi.',
  },
  {
    title: 'Agents & MCP',
    body:
      'ClawQL is a production TypeScript MCP server and agentic gateway — structured, auditable API access with vault memory, Merkle-chained WORM audit logs, and optional sandbox, schedules, and Slack notify. See https://docs.clawql.com.',
  },
  {
    title: 'Public interest technology',
    body:
      'Challenge the Footage and Witness bring cryptographic chain of custody to surveillance evidence and civilian encounter recording — free legal tools for public defenders and open-source standards for cities and legislatures.',
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

/** Pulled from Daniel-Smith-Resume-final.pdf + current role */
export const workRoles: WorkRole[] = [
  {
    company: 'Validation Cloud',
    title: 'Senior Platform Engineer',
    initial: 'V',
    start: { label: 'Sep 2025', dateTime: '2025-09-01' },
    end: { label: 'Present', dateTime: '2026-08-06' },
  },
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

/** Optional longer blurbs for experience entries (resume / about). */
export const workRoleDetails: Record<
  string,
  { summary: string; stack: string }
> = {
  'Validation Cloud': {
    summary:
      'Institutional blockchain infrastructure platform serving enterprises managing billions in digital assets. Building Node API (ranked #1 globally by CompareNodes), staking infrastructure (SOC2 Type II certified), and Mavrik — AI-powered blockchain data intelligence for institutional clients including Chainlink, Consensys, BitGo, Anchorage, and ether.fi.',
    stack:
      'TypeScript · Blockchain · Kubernetes · Node API · Staking · AI · Institutional Infrastructure',
  },
  'IBM Blockchain': {
    summary:
      "Developed the transaction state machine for Sand Dollar — the world's first nationally deployed retail central bank digital currency, issued by the Central Bank of The Bahamas and live since October 2020 at sanddollar.bs. Enabled asset bridging between domestic and international currency versions supporting financial inclusion across a 700-island nation. Designed high-availability, disaster recovery, and security compliance plans for payments and supply chain platforms across a multi-cloud Kubernetes setup with cloud, region, and AZ-level automatic failover. Configured observability for Stellar Lumens Validator Nodes.",
    stack:
      'Golang · TypeScript · AWS · GCP · IBM Cloud · Kubernetes · Helm · Istio · Blockchain · CBDC',
  },
}

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
  /** Full markdown body (LinkedIn mirror or long-form; see `featuredLinkedInPostBodies.ts` / generated curriculum) */
  body: string
  /** When set, article and home cards link to the original LinkedIn thread */
  linkedInUrl?: string
  /**
   * When there is no `linkedInUrl`, optional primary outbound link for cards and article footer
   * (e.g. canonical curriculum hub on ClawQL Docs).
   */
  syndicationSource?: { label: string; href: string }
  /** Optional secondary links (docs, npm, repo) */
  extraLinks?: { label: string; href: string }[]
}

export type SpeakingTopic = {
  title: string
  body: string
}

/** Suggested speaking topics for /speaking */
export const speakingTopics: SpeakingTopic[] = [
  {
    title: 'Cryptographic Chain of Custody for Surveillance Evidence',
    body:
      'The authentication gap no major ALPR or body camera vendor can currently close, and the technical architecture — hash at capture, Merkle chaining, Arweave anchoring — that closes it. For legal technology conferences, civil liberties organizations, and government technology forums.',
  },
  {
    title: 'CBDC Design and Deployment: Lessons from Sand Dollar',
    body:
      "What it actually took to ship the world's first nationally deployed retail central bank digital currency, what worked, what didn't, and what every central bank studying CBDC deployment should know. For fintech conferences, central bank working groups, and government financial modernization programs.",
  },
  {
    title:
      'Agentic AI Security: From Kernel-Level Containment to Supply Chain Verification',
    body:
      "The 32-module security architecture behind ClawQL's agentic gateway — Seatbelt sandboxing, Merkle-chained WORM audit trails, Cosign supply chain signing, and Arweave immutable anchoring. For security conferences, enterprise AI teams, and CISO audiences.",
  },
  {
    title: 'Government Outcome Accountability Infrastructure',
    body:
      "Why California can't tell voters whether $196 billion in bonds produced promised outcomes, and the cryptographic audit architecture that makes outcome measurement independently verifiable. For government technology conferences, state auditor associations, and legislative policy staff.",
  },
]

/** Home “Open to opportunities” sidebar */
export const openToOpportunities = {
  intro:
    "I'm not actively seeking employment — I'm building at Validation Cloud and on open-source public interest projects.",
  items: [
    {
      title: 'Government and policy collaboration',
      body:
        'Pilot programs for government accountability technology, cryptographic audit infrastructure for public programs, or advisory roles related to CBDC, digital public infrastructure, or surveillance policy.',
    },
    {
      title: 'Technical partnerships',
      body:
        'Integrations with ClawQL, clawql-surveillance, or the Challenge the Footage ecosystem.',
    },
    {
      title: 'Speaking',
      body:
        'On agentic AI security, blockchain infrastructure at government scale, CBDC design and deployment, or surveillance evidence accountability.',
      href: '/speaking',
      hrefLabel: 'Speaking page →',
    },
    {
      title: 'Press and research inquiries',
      body:
        'Regarding Sand Dollar, Challenge the Footage, or the surveillance evidence integrity work.',
    },
  ],
} as const

/** Home page cards + /articles — metadata here; bodies in `featuredLinkedInPostBodies.ts` or generated curriculum pillars. */
export const featuredLinkedInPosts: FeaturedLinkedInPost[] = [
  {
    slug: 'california-bond-outcome-accountability',
    date: '2026-08-01',
    title: "California Spent $196 Billion and Can't Tell You What It Got",
    description:
      "On the structural gap between spending accountability and outcome accountability in California's bond programs — and the cryptographic audit infrastructure that makes outcome measurement independently verifiable. Connects the Oak Park surveillance contract failure to the broader bond accountability problem, and introduces the clawql-government specification.",
    body: featuredLinkedInPostBodies['california-bond-outcome-accountability'],
    syndicationSource: {
      label: 'Read on PragmaticVectors →',
      href: 'https://pragmaticvectors.com',
    },
    extraLinks: [
      {
        label: 'clawql-government',
        href: 'https://docs.clawql.com/government',
      },
    ],
  },
  {
    slug: 'surveillance-footage-chain-of-custody',
    date: '2026-08-01',
    title: 'Surveillance Footage Has a Chain of Custody Problem',
    description:
      'No major surveillance camera vendor publicly documents hash at capture, Merkle-chained audit logs, or external immutable anchoring. This is an FRE 901 authentication problem that courts are beginning to recognize. Covers the full technical architecture required to make footage independently verifiable, and introduces Challenge the Footage.',
    body: featuredLinkedInPostBodies['surveillance-footage-chain-of-custody'],
    syndicationSource: {
      label: 'Read on PragmaticVectors →',
      href: 'https://pragmaticvectors.com',
    },
    extraLinks: [
      {
        label: 'Challenge the Footage',
        href: 'https://challengethefootage.com',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/danielsmithdevelopment/surveillance-evidence-integrity',
      },
    ],
  },
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
  {
    slug: 'agentic-ai-security-supply-chain-and-admission',
    date: '2026-05-06',
    title:
      'Agentic AI Security, Part 1: Supply Chain, Golden Images, and Admission Control',
    description:
      'Long-form consolidation of curriculum modules 1–3: digest pinning and private mirrors, golden images and signing in CI, and cluster admission policy for agent and MCP runtimes—with links to each module on ClawQL Docs.',
    body: agenticSecurityCurriculumPillarBodies[
      'agentic-ai-security-supply-chain-and-admission'
    ],
    syndicationSource: {
      label: 'Agentic AI Security Curriculum (ClawQL Docs)',
      href: 'https://docs.clawql.com/security/best-practices',
    },
    extraLinks: [
      {
        label: 'Series source (GitHub)',
        href: 'https://github.com/danielsmithdevelopment/ClawQL/tree/main/docs/security/security-best-practices-series',
      },
    ],
  },
  {
    slug: 'agentic-ai-security-identity-zero-trust',
    date: '2026-05-07',
    title:
      'Agentic AI Security, Part 2: Identity, Least Privilege, and Zero Trust',
    description:
      'Modules 4–6 in one guide: scoped identities for agents and tools, zero-trust fundamentals, and advanced Vault, HSM, and provenance patterns—with canonical links per module.',
    body: agenticSecurityCurriculumPillarBodies[
      'agentic-ai-security-identity-zero-trust'
    ],
    syndicationSource: {
      label: 'Agentic AI Security Curriculum (ClawQL Docs)',
      href: 'https://docs.clawql.com/security/best-practices',
    },
    extraLinks: [
      {
        label: 'Series source (GitHub)',
        href: 'https://github.com/danielsmithdevelopment/ClawQL/tree/main/docs/security/security-best-practices-series',
      },
    ],
  },
  {
    slug: 'agentic-ai-security-mesh-sandbox-mcp',
    date: '2026-05-08',
    title:
      'Agentic AI Security, Part 3: Service Mesh, Sandboxing, and MCP Runtime Protection',
    description:
      'Modules 7–9 combined: RBAC and mTLS with Istio, Kata vs gVisor sandbox tradeoffs, and MCP runtime protection—plus links to the full modules on docs.clawql.com.',
    body: agenticSecurityCurriculumPillarBodies[
      'agentic-ai-security-mesh-sandbox-mcp'
    ],
    syndicationSource: {
      label: 'Agentic AI Security Curriculum (ClawQL Docs)',
      href: 'https://docs.clawql.com/security/best-practices',
    },
    extraLinks: [
      {
        label: 'Series source (GitHub)',
        href: 'https://github.com/danielsmithdevelopment/ClawQL/tree/main/docs/security/security-best-practices-series',
      },
    ],
  },
  {
    slug: 'agentic-ai-security-data-models-observability',
    date: '2026-05-09',
    title:
      'Agentic AI Security, Part 4: Data Classification, Model Integrity, and Runtime Monitoring',
    description:
      'Modules 10–12: data classification and PII in logs, verifying model weights, and observability for agentic workloads—consolidated with outbound links to each original module.',
    body: agenticSecurityCurriculumPillarBodies[
      'agentic-ai-security-data-models-observability'
    ],
    syndicationSource: {
      label: 'Agentic AI Security Curriculum (ClawQL Docs)',
      href: 'https://docs.clawql.com/security/best-practices',
    },
    extraLinks: [
      {
        label: 'Series source (GitHub)',
        href: 'https://github.com/danielsmithdevelopment/ClawQL/tree/main/docs/security/security-best-practices-series',
      },
    ],
  },
  {
    slug: 'agentic-ai-security-operations-and-production',
    date: '2026-05-10',
    title:
      'Agentic AI Security, Part 5: Incident Response, Automation, GPU, Workstations, and Production',
    description:
      'Modules 13–17 in depth: automated containment, IR and PICERL, GPU abuse controls, secure local development, and production hardening for agent stacks—with links to every module.',
    body: agenticSecurityCurriculumPillarBodies[
      'agentic-ai-security-operations-and-production'
    ],
    syndicationSource: {
      label: 'Agentic AI Security Curriculum (ClawQL Docs)',
      href: 'https://docs.clawql.com/security/best-practices',
    },
    extraLinks: [
      {
        label: 'Series source (GitHub)',
        href: 'https://github.com/danielsmithdevelopment/ClawQL/tree/main/docs/security/security-best-practices-series',
      },
    ],
  },
  {
    slug: 'agentic-ai-security-governance-and-owasp-agentic',
    date: '2026-05-11',
    title:
      'Agentic AI Security, Part 6: Threat Modeling, OWASP Agentic Top 10, and Quarterly Review',
    description:
      'Modules 18–20: STRIDE for agentic AI, OWASP Agentic Top 10 mitigations, and a quarterly security review checklist—merged here with links to the canonical curriculum.',
    body: agenticSecurityCurriculumPillarBodies[
      'agentic-ai-security-governance-and-owasp-agentic'
    ],
    syndicationSource: {
      label: 'Agentic AI Security Curriculum (ClawQL Docs)',
      href: 'https://docs.clawql.com/security/best-practices',
    },
    extraLinks: [
      {
        label: 'Series source (GitHub)',
        href: 'https://github.com/danielsmithdevelopment/ClawQL/tree/main/docs/security/security-best-practices-series',
      },
    ],
  },
]

/** Home page spotlight projects (aligned with resume “Open Source and Projects”) */
export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Sand Dollar — World\'s First Retail CBDC',
    description:
      "Transaction state machine for the Central Bank of The Bahamas' Sand Dollar — the first nationally deployed retail central bank digital currency in the world, launched October 2020. Enabled asset bridging between domestic and international currency versions across a 700-island nation with limited traditional banking infrastructure. Built at IBM Blockchain in partnership with the Central Bank of The Bahamas and NZIA. Golang · TypeScript · Blockchain · Central Bank · Financial Inclusion.",
    github: null,
    npm: null,
    live: 'https://sanddollar.bs',
  },
  {
    name: 'Challenge the Footage — Surveillance Evidence Integrity',
    description:
      'Open-source legal and technical infrastructure for challenging surveillance camera evidence in court. Generates four legal document templates (FRE 901, FRE 702 / Daubert, Fourth Amendment suppression, Section 1983) for any major surveillance vendor. Free for public defenders. Covers ALPR, body cameras, and civilian recordings via Witness. Cloudflare Workers · ClawQL · React Native · Arweave · TypeScript.',
    github:
      'https://github.com/danielsmithdevelopment/surveillance-evidence-integrity',
    npm: null,
    live: 'https://challengethefootage.com',
  },
  {
    name: 'Witness — Civilian Encounter Recording App',
    description:
      'React Native (iOS + Android) app that activates when you are pulled over or stopped by police, records video, audio, and real-time on-device transcript, and uploads all three artifacts in priority order — transcript first, audio second, video third — so evidence reaches safety even on a weak signal. Cryptographically signed and Arweave-anchored. React Native · Expo · Whisper · Cloudflare R2 · Arweave · TypeScript.',
    github:
      'https://github.com/danielsmithdevelopment/surveillance-evidence-integrity/tree/main/witness',
    npm: null,
    live: null,
  },
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
    name: 'Sand Dollar — World\'s First Retail CBDC',
    description:
      "Transaction state machine for the Central Bank of The Bahamas' Sand Dollar — the first nationally deployed retail central bank digital currency in the world, launched October 2020. Enabled asset bridging between domestic and international currency versions across a 700-island nation. Built at IBM Blockchain with the Central Bank of The Bahamas and NZIA. Live at sanddollar.bs on iOS and Android.",
    highlight: false,
    github: null,
    npm: null,
    live: 'https://sanddollar.bs',
  },
  {
    name: 'Challenge the Footage',
    description:
      'Open-source legal and technical infrastructure for challenging surveillance camera evidence in court. Generates FRE 901, FRE 702 / Daubert, Fourth Amendment suppression, and Section 1983 templates for major surveillance vendors. Free for public defenders. Model contract language, legislation, and technical standards published as open source.',
    highlight: false,
    github:
      'https://github.com/danielsmithdevelopment/surveillance-evidence-integrity',
    npm: null,
    live: 'https://challengethefootage.com',
  },
  {
    name: 'Witness',
    description:
      'React Native (iOS + Android) civilian encounter recording app: video, audio, and real-time on-device transcript uploaded in priority order so evidence reaches safety on a weak signal. Cryptographically signed by the device and Arweave-anchored; handoff to Challenge the Footage for legal documents pre-populated with cryptographic proof.',
    highlight: false,
    github:
      'https://github.com/danielsmithdevelopment/surveillance-evidence-integrity/tree/main/witness',
    npm: null,
    live: null,
  },
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
