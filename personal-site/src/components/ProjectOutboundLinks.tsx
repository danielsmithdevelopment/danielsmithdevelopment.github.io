import Link from 'next/link'
import clsx from 'clsx'

import { GitHubIcon, GlobeIcon, NpmIcon } from '@/components/SocialIcons'

export type ProjectOutbound = {
  github: string | null
  npm: string | null
  live: string | null
}

const base =
  'relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/80 bg-white shadow-sm transition dark:border-zinc-600 dark:bg-zinc-800'

const hoverTeal =
  'hover:border-teal-500/50 hover:text-teal-600 dark:hover:border-teal-500/50 dark:hover:text-teal-400'

/**
 * Up to three outbound links (GitHub, npm, live site) with icons — only renders anchors that are set.
 */
export function ProjectOutboundLinks({
  github,
  npm,
  live,
  className,
}: ProjectOutbound & { className?: string }) {
  return (
    <div className={clsx('flex flex-wrap items-center gap-2', className)}>
      {github ? (
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            base,
            'text-zinc-600 dark:text-zinc-300',
            hoverTeal,
            'hover:[&_path]:fill-teal-600 dark:hover:[&_path]:fill-teal-400',
          )}
          aria-label="View source on GitHub"
        >
          <GitHubIcon className="h-5 w-5 fill-current" />
        </Link>
      ) : null}
      {npm ? (
        <Link
          href={npm}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            base,
            'border-zinc-200/80 text-[#CB3837] hover:border-[#CB3837]/40 hover:text-[#a12c2c] dark:border-zinc-600',
          )}
          aria-label="View package on npm"
        >
          <NpmIcon className="h-5 w-5" />
        </Link>
      ) : null}
      {live ? (
        <Link
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(base, 'text-zinc-600 dark:text-zinc-300', hoverTeal)}
          aria-label="Open live site or docs"
        >
          <GlobeIcon className="h-5 w-5" />
        </Link>
      ) : null}
    </div>
  )
}
