import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description:
    'Editors, infra tooling, and workflow — platform engineering and AI-assisted development.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="What I use"
      intro="A snapshot of the tools that show up most often when I’m shipping infra, reviewing code, or building agent-oriented tooling. This isn’t sponsorship — just what works for me day to day."
    >
      <div className="space-y-20">
        <ToolsSection title="Development">
          <Tool title="Editor and terminal hygiene">
            A modern IDE with inline AI assistance for fast iteration across
            TypeScript, Rust, and Go; paired with ripgrep, git worktrees, and
            scripted workflows for repeatable builds.
          </Tool>
          <Tool title="Kubernetes & GitOps">
            Daily familiarity with EKS-style clusters, Istio-style routing,
            Argo CD / progressive delivery, and treating manifests and policy as
            code.
          </Tool>
          <Tool title="Observability stack">
            Datadog, Prometheus/Grafana-style metrics, tracing (Jaeger/Honeycomb
            patterns), and structured logging for debugging distributed systems.
          </Tool>
        </ToolsSection>
        <ToolsSection title="AI & agents">
          <Tool title="MCP and API ergonomics">
            Building and dogfooding MCP servers (like ClawQL) where the goal is
            lean context: discover operations from specs and graphs instead of
            pasting giant OpenAPI blobs into prompts.
          </Tool>
          <Tool title="Local experimentation">
            On-device ML / GenAI samples and forks (e.g. gallery-style apps) to
            understand inference constraints and UX outside of pure cloud APIs.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Hardware">
          <Tool title="MacBook Pro + external display">
            Primary driver for builds, container workflows, and long incident
            sessions — nothing exotic; reliability of the toolchain matters more
            than the logo on the lid.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
