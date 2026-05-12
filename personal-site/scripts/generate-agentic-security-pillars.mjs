/**
 * Concatenates ClawQL security-best-practices-series modules into six long-form
 * bodies for the personal site. Run from repo root or personal-site:
 *
 *   CLAWQL_ROOT=/path/to/ClawQL node personal-site/scripts/generate-agentic-security-pillars.mjs
 *
 * Default CLAWQL_ROOT: ../../ClawQL relative to personal-site (sibling repo).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const personalSiteRoot = path.resolve(__dirname, '..')
const defaultClawql = path.resolve(personalSiteRoot, '../../ClawQL')
const CLAWQL_ROOT = process.env.CLAWQL_ROOT || defaultClawql
const seriesDir = path.join(
  CLAWQL_ROOT,
  'docs/security/security-best-practices-series',
)

const DOCS_HUB = 'https://docs.clawql.com/security/best-practices'

const pillars = [
  {
    slug: 'agentic-ai-security-supply-chain-and-admission',
    title:
      'Agentic AI Security, Part 1: Supply Chain, Golden Images, and Admission Control',
    intro: `This long-form article merges **modules 1–3** of the [Agentic AI Security Curriculum](${DOCS_HUB}) into one place: why digest pinning and private mirrors matter for agent and MCP platforms, how golden images and CI signing reduce drift, and how admission controllers enforce policy before workloads run. Each section links to the original module on ClawQL Docs for deeper diagrams and commands.`,
    modules: [
      '01-supply-chain-pinning-mirror-registry.md',
      '02-golden-images-distroless-pipelines.md',
      '03-cluster-admission-control-signing-policy.md',
    ],
  },
  {
    slug: 'agentic-ai-security-identity-zero-trust',
    title:
      'Agentic AI Security, Part 2: Identity, Least Privilege, and Zero Trust',
    intro: `**Modules 4–6** cover scoped identities for agents and tools, zero-trust networking and policy basics, and advanced patterns (Vault, HSMs, provenance) that matter when LLMs orchestrate sensitive APIs. Consolidated here with links to each canonical module.`,
    modules: [
      '04-least-privilege-scoped-identities.md',
      '05-zero-trust-fundamentals.md',
      '06-advanced-zero-trust-vault-hsm-provenance.md',
    ],
  },
  {
    slug: 'agentic-ai-security-mesh-sandbox-mcp',
    title:
      'Agentic AI Security, Part 3: Service Mesh, Sandboxing, and MCP Runtime Protection',
    intro: `**Modules 7–9** address enforcing identity and policy in the mesh (RBAC, mTLS, Istio), choosing sandbox boundaries (Kata, gVisor, and tradeoffs), and hardening MCP-style runtimes with gateways and runtime protection. Read end-to-end here, then open any module on docs for the full detail.`,
    modules: [
      '07-rbac-mtls-istio-service-mesh.md',
      '08-sandboxing-kata-gvisor-tradeoffs.md',
      '09-mcp-runtime-protection-panguard-atr.md',
    ],
  },
  {
    slug: 'agentic-ai-security-data-models-observability',
    title:
      'Agentic AI Security, Part 4: Data Classification, Model Integrity, and Runtime Monitoring',
    intro: `**Modules 10–12** tie data handling (classification, PII, logs), model supply chain and weight verification, and runtime monitoring together—the stack teams need when agents read documents, call tools, and leave rich audit trails.`,
    modules: [
      '10-data-classification-pii-redaction-logs.md',
      '11-model-integrity-verifying-weights.md',
      '12-runtime-monitoring-observability.md',
    ],
  },
  {
    slug: 'agentic-ai-security-operations-and-production',
    title:
      'Agentic AI Security, Part 5: Incident Response, Automation, GPU, Workstations, and Production',
    intro: `**Modules 13–17** span automated containment, IR and recovery (PICERL), GPU abuse controls, secure workstation and local development practices, and production deployment patterns for full agent stacks.`,
    modules: [
      '13-automated-response-containment.md',
      '14-incident-response-recovery-picerl.md',
      '15-gpu-resource-protection.md',
      '16-workstation-local-development-security.md',
      '17-production-deployment-secure-full-stack.md',
    ],
  },
  {
    slug: 'agentic-ai-security-governance-and-owasp-agentic',
    title:
      'Agentic AI Security, Part 6: Threat Modeling, OWASP Agentic Top 10, and Quarterly Review',
    intro: `**Modules 18–20** focus on STRIDE-style threat modeling for agentic systems, mitigations aligned with the OWASP Agentic Top 10, and a practical quarterly security review checklist you can adapt to your org.`,
    modules: [
      '18-threat-modeling-stride-agentic-ai.md',
      '19-owasp-agentic-top-10-mitigations.md',
      '20-quarterly-security-review-checklist.md',
    ],
  },
]

function stripFrontmatter(md) {
  if (!md.startsWith('---')) {
    return md.trimStart()
  }
  const end = md.indexOf('\n---\n', 3)
  if (end === -1) {
    return md.trimStart()
  }
  return md.slice(end + 5).trimStart()
}

function moduleDocUrl(filename) {
  const base = filename.replace(/^\d+-/, '').replace(/\.md$/, '')
  return `${DOCS_HUB}/${base}`
}

function parseModule(filePath, filename) {
  const raw = fs.readFileSync(filePath, 'utf8')
  const body = stripFrontmatter(raw)
  const lines = body.split('\n')
  let title = 'Section'
  if (lines[0]?.startsWith('# ')) {
    title = lines[0].slice(2).trim()
    lines.shift()
    while (lines[0] === '') {
      lines.shift()
    }
  }
  const rest = lines.join('\n').trim()
  const docUrl = moduleDocUrl(filename)
  return { title, body: rest, docUrl }
}

function buildPillarBody(pillar) {
  const sections = pillar.modules.map((fn) => {
    const fp = path.join(seriesDir, fn)
    if (!fs.existsSync(fp)) {
      throw new Error(`Missing module file: ${fp}`)
    }
    const { title, body, docUrl } = parseModule(fp, fn)
    return [
      `## ${title}`,
      '',
      `*Original module on ClawQL Docs: [${title}](${docUrl}).*`,
      '',
      body,
    ].join('\n')
  })
  return [
    pillar.intro,
    '',
    sections.join('\n\n---\n\n'),
  ].join('\n')
}

function main() {
  if (!fs.existsSync(seriesDir)) {
    console.error(
      `Series directory not found:\n  ${seriesDir}\nSet CLAWQL_ROOT to your ClawQL checkout.`,
    )
    process.exit(1)
  }

  const entries = pillars.map((p) => {
    const body = buildPillarBody(p)
    return `  ${JSON.stringify(p.slug)}: ${JSON.stringify(body)},`
  })

  const out = `/* eslint-disable */
/**
 * Generated by scripts/generate-agentic-security-pillars.mjs — do not edit by hand.
 * Regenerate after curriculum updates: CLAWQL_ROOT=… node scripts/generate-agentic-security-pillars.mjs
 */

export const agenticSecurityCurriculumPillarBodies = {
${entries.join('\n')}
} as const

export type AgenticSecurityCurriculumPillarSlug =
  keyof typeof agenticSecurityCurriculumPillarBodies
`

  const outPath = path.join(
    personalSiteRoot,
    'src/lib/agenticSecurityCurriculumPillarBodies.generated.ts',
  )
  fs.writeFileSync(outPath, out, 'utf8')
  console.log(`Wrote ${outPath} (${pillars.length} pillars)`)
}

main()
