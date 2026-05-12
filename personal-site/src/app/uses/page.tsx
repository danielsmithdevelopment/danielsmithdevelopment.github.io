import Link from 'next/link'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { resumeSkillGroups } from '@/lib/resumeSkills'
import { site } from '@/lib/site'

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

function SkillGroup({
  title,
  items,
}: {
  title: string
  items: readonly string[]
}) {
  return (
    <div>
      <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
        {title}
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2" role="list">
        {items.map((item) => (
          <li key={item}>
            <span className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800/60 dark:text-zinc-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
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
        <Section title="Skills & stack">
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Grouped tags are aligned with{' '}
              <Link
                href={site.resumePdfPath}
                className="font-medium text-teal-600 underline decoration-teal-500/30 underline-offset-2 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
              >
                the public resume PDF
              </Link>{' '}
              (languages, platforms, and named tools across roles and open-source
              work). The sections below are narrative context, not a second list.
            </p>
            <div className="grid gap-10 sm:grid-cols-2">
              {resumeSkillGroups.map((group) => (
                <SkillGroup
                  key={group.title}
                  title={group.title}
                  items={group.items}
                />
              ))}
            </div>
          </div>
        </Section>
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
            lean context: discover operations from bundled graphs instead of
            pasting giant OpenAPI blobs into prompts, with durable vault memory
            and optional add-ons (sandbox runs, schedules, Slack) when agent loops
            need more than read-only API calls.
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
