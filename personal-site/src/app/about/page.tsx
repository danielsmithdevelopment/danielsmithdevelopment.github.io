import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import { linkedinProfile, site } from '@/lib/site'
import portraitImage from '@/images/portrait.jpg'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: site.bioShort,
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m {site.name}. I build platforms where{' '}
            <span className="text-teal-600 dark:text-teal-400">
              AI tooling meets production
            </span>
            .
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a backend platform engineer based in {site.location}. My
              recent work spans multi-region Kubernetes and service mesh, chaos
              engineering, and cost-efficient migrations — including moving
              workloads from Lambda to EKS with a large overall cost reduction
              after tuning node groups and tenancies.
            </p>
            <p>
              On the AI side, I ship and maintain{' '}
              <Link
                href="https://github.com/danielsmithdevelopment/ClawQL"
                className="font-medium text-teal-600 underline decoration-teal-500/40 underline-offset-2 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
              >
                ClawQL
              </Link>
              , an MCP server that helps LLM agents discover and execute API
              operations using OpenAPI-family specs and curated provider graphs —
              so agents do not need whole API definitions in context. I also
              experiment with on-device ML and GenAI UX via my fork of Google&apos;s
              gallery sample.
            </p>
            <p>
              Earlier roles included blockchain systems engineering (indexing,
              multi-chain infrastructure), SRE-style progressive delivery on
              Kubernetes (canary, Istio, zero-trust patterns), and financial
              blockchain operations (including CBDC-related state machines).
            </p>
            <p>
              I&apos;m actively looking for roles where I can combine this platform
              background with product-facing AI: agents, evals, developer tooling,
              or MCP-style integrations — with the same rigor around reliability,
              security, and observability that production systems demand.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={site.social.x} icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href={site.github.url} icon={GitHubIcon} className="mt-4">
              GitHub ({site.github.username})
            </SocialLink>
            {linkedinProfile ? (
              <SocialLink href={linkedinProfile} icon={LinkedInIcon} className="mt-4">
                LinkedIn
              </SocialLink>
            ) : null}
            <SocialLink
              href={`mailto:${site.email}`}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {site.email}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
