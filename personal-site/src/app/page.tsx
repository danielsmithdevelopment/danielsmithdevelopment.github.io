import Link from 'next/link'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import {
  aiHighlights,
  featuredLinkedInPosts,
  linkedinProfile,
  site,
  type FeaturedLinkedInPost,
  type WorkRole,
  workRoles,
} from '@/lib/site'
import { formatDate } from '@/lib/formatDate'

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SparklesIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        className="stroke-zinc-400 dark:stroke-zinc-500"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LinkedInFeaturedPost({ post }: { post: FeaturedLinkedInPost }) {
  return (
    <Card as="article">
      <Card.Eyebrow decorate>LinkedIn</Card.Eyebrow>
      <Card.Title as="h3">{post.title}</Card.Title>
      <Card.Description>{post.description}</Card.Description>
      <div className="relative z-10 mt-4 flex flex-col gap-2 text-sm">
        <Link
          href={post.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit font-medium text-teal-600 underline decoration-teal-500/30 underline-offset-2 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
        >
          View post on LinkedIn
        </Link>
        {post.extraLinks?.length ? (
          <p className="text-zinc-500 dark:text-zinc-400">
            {post.extraLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? ' · ' : null}
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal-600 underline decoration-teal-500/30 underline-offset-2 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </Card>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function HiringCta() {
  return (
    <div className="rounded-2xl border border-teal-500/20 bg-teal-50/80 p-6 dark:border-teal-500/30 dark:bg-teal-950/20">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-teal-100">
        <SparklesIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Open to opportunities</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        I’m particularly interested in roles blending{' '}
        <strong className="font-medium text-zinc-800 dark:text-zinc-200">
          AI agents, LLM tooling, or MCP
        </strong>{' '}
        with{' '}
        <strong className="font-medium text-zinc-800 dark:text-zinc-200">
          production platform engineering
        </strong>{' '}
        (Kubernetes, observability, reliability). Reach out if that sounds like
        your team.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          href={`mailto:${site.email}?subject=Hello%20Daniel`}
          variant="primary"
          className="flex-none"
        >
          Email me
        </Button>
        <Button href={site.github.url} variant="secondary" className="flex-none">
          GitHub profile
        </Button>
      </div>
    </div>
  )
}

function Role({ role }: { role: WorkRole }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold text-zinc-600 shadow-md ring-1 ring-zinc-900/5 dark:bg-zinc-700/50 dark:text-zinc-300 dark:ring-zinc-700/50">
        {role.initial}
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function AiAgentsSection() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <SparklesIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">AI &amp; agents</span>
      </h2>
      <ul className="mt-6 space-y-5">
        {aiHighlights.map((item) => (
          <li key={item.title}>
            <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
              {item.title}
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
        More repositories and activity on{' '}
        <Link
          href={site.github.url}
          className="font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
        >
          GitHub
        </Link>
        .
      </p>
    </div>
  )
}

function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {workRoles.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href={site.resumePdfPath}
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download résumé (PDF)
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <p className="text-base font-medium text-teal-600 dark:text-teal-400">
            {site.location}
            {site.hireable ? ' · Open to work' : ''}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {site.tagline}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {site.bioShort}{' '}
            <Link
              href="/about"
              className="font-medium text-teal-600 underline decoration-teal-500/30 underline-offset-2 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
            >
              Read more
            </Link>
          </p>
          <div className="mt-6 flex flex-wrap gap-6">
            <SocialLink
              href={site.social.x}
              aria-label="Follow on X"
              icon={XIcon}
            />
            <SocialLink
              href={site.github.url}
              aria-label={`${site.name} on GitHub`}
              icon={GitHubIcon}
            />
            {linkedinProfile ? (
              <SocialLink
                href={linkedinProfile}
                aria-label="LinkedIn profile"
                icon={LinkedInIcon}
              />
            ) : null}
          </div>
        </div>
      </Container>
      <Container className="mt-20 md:mt-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            Featured on LinkedIn
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Recent posts on homelab recovery, MCP + gRPC, and shipping{' '}
            <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">
              mcp-grpc-transport
            </code>
            .
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {featuredLinkedInPosts.map((post) => (
            <LinkedInFeaturedPost key={post.linkedInUrl} post={post} />
          ))}
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <HiringCta />
            <AiAgentsSection />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
