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
  description: site.description,
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
            I&apos;m {site.name}. I build{' '}
            <span className="text-teal-600 dark:text-teal-400">
              resilient infrastructure for fintech and Web3
            </span>
            .
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Senior Backend Platform Engineer with 7+ years building resilient,
              large-scale infrastructure for fintech and Web3 platforms. Based in{' '}
              {site.location}.
            </p>
            <p>
              Most recently at Phantom I architected multi-region Kubernetes +
              CockroachDB failover systems, reduced infrastructure costs 65%, and
              shipped two production AI tools: an automated Slack → Linear ticket
              bot powered by LLMs and an official company-wide knowledge bot
              (hackathon → maintained product) that ingests Notion, Linear,
              GitHub, and Slack for natural-language queries.
            </p>
            <p>
              I care deeply about agentic AI and developer experience. I recently
              open-sourced{' '}
              <Link
                href="https://github.com/danielsmithdevelopment/ClawQL"
                className="font-medium text-teal-600 underline decoration-teal-500/40 underline-offset-2 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
              >
                ClawQL
              </Link>
              , an MCP server that slashes AI token usage by 99% on remote APIs,
              and contributed agentic web-search + MCP skills to Google&apos;s AI Edge
              Gallery. I also experiment with on-device ML and GenAI UX via my
              fork of the gallery sample.
            </p>
            <p className="font-medium text-zinc-700 dark:text-zinc-300">
              Previously:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                Led blockchain infrastructure and multi-chain indexing at
                DraftKings Marketplace
              </li>
              <li>
                Designed Progressive Deployments, Canary Testing, and Zero Trust
                security at Upgrade Inc.
              </li>
              <li>
                Built the core state machine for the Bahamian Sand Dollar CBDC at
                IBM Blockchain
              </li>
            </ul>
            <p>
              Open to conversations on platform engineering, AI agents, Kubernetes,
              and scalable AI infrastructure. Currently seeking new opportunities —
              happy to connect!
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
