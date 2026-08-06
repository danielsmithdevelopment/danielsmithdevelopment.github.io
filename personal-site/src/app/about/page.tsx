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

const linkClassName =
  'font-medium text-teal-600 underline decoration-teal-500/40 underline-offset-2 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300'

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
              blockchain infrastructure, AI agents, and public interest technology
            </span>
            .
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Daniel Smith is a Senior DevOps Engineer at Validation Cloud, where
              he builds and secures institutional blockchain infrastructure —
              Node API, staking, and AI tooling — for enterprises managing
              billions in digital assets. Based in {site.location}.
            </p>
            <p>
              His blockchain work began at IBM, where he developed the transaction
              state machine for Sand Dollar, the world&apos;s first nationally
              deployed retail central bank digital currency. Issued by the
              Central Bank of The Bahamas and live since October 2020, Sand Dollar
              is the reference case every central bank in the world now studies
              when designing retail CBDC programs. Before IBM, he built blockchain
              onboarding infrastructure at Granite Solutions Group and full-stack
              web tooling at USC&apos;s Laboratory of Neuroimaging.
            </p>
            <p>
              Outside his role at Validation Cloud, Daniel builds open-source
              infrastructure at the intersection of cryptographic audit trails, AI
              agents, and government accountability.
            </p>
            <p>
              <Link href="https://docs.clawql.com" className={linkClassName}>
                ClawQL
              </Link>{' '}
              is a production TypeScript MCP server and agentic gateway that gives
              AI agents structured, auditable, token-efficient access to APIs,
              documents, and enterprise knowledge. Its security architecture — 32
              modules covering Merkle-chained WORM audit logs, Arweave immutable
              anchoring, supply chain signing, and kernel-level agent sandboxing —
              is documented at{' '}
              <Link
                href="https://docs.clawql.com/security/best-practices"
                className={linkClassName}
              >
                docs.clawql.com/security/best-practices
              </Link>
              .
            </p>
            <p>
              <Link
                href="https://challengethefootage.com"
                className={linkClassName}
              >
                Challenge the Footage
              </Link>{' '}
              is a free public interest tool that generates legal documents for
              challenging surveillance camera evidence in court. It addresses a
              structural authentication gap: no major surveillance camera vendor
              publicly documents cryptographic chain of custody for footage. The
              tool generates motions in limine under FRE 901, Daubert challenges
              under FRE 702 citing the industry&apos;s documented ~10%
              misidentification error rate, Fourth Amendment suppression motions
              using the Institute for Justice&apos;s database of officer abuse
              cases, and Section 1983 civil damages demand letters. Public
              defenders get free unlimited access.
            </p>
            <p>
              The{' '}
              <Link
                href="https://github.com/danielsmithdevelopment/surveillance-evidence-integrity/tree/main/witness"
                className={linkClassName}
              >
                Witness app
              </Link>{' '}
              records police encounters on iOS and Android, transcribes in real
              time using on-device Whisper, and uploads transcript, audio, and
              video in priority order so evidence reaches safety even on a weak
              signal. Everything is cryptographically signed and Arweave-anchored
              for independent verification.
            </p>
            <p>
              The{' '}
              <Link
                href="https://docs.clawql.com/government"
                className={linkClassName}
              >
                clawql-government
              </Link>{' '}
              specification extends the same Merkle-chaining and Arweave
              anchoring infrastructure to government program outcome
              accountability — addressing the structural gap California and other
              states face in measuring whether bond-funded programs deliver the
              outcomes voters were promised.
            </p>
            <p>
              Daniel holds the view that the same engineering discipline that
              makes financial systems trustworthy — immutable audit trails,
              cryptographic chain of custody, independent verification — should
              be applied to government programs, law enforcement evidence, and
              public records. He is based in San Gabriel, California.
            </p>
          </div>        </div>
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
