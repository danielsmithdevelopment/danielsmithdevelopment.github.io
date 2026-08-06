import { type Metadata } from 'next'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { site, speakingTopics } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Talks on agentic AI security, CBDC design and deployment, blockchain infrastructure at government scale, and surveillance evidence accountability.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Speaking & media"
      intro="I’m available for conference talks, panels, workshops, and podcasts on agentic AI security, blockchain infrastructure at government scale, CBDC design and deployment, and surveillance evidence accountability."
    >
      <div className="space-y-12">
        <ul className="space-y-10">
          {speakingTopics.map((topic) => (
            <li key={topic.title}>
              <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                {topic.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {topic.body}
              </p>
            </li>
          ))}
        </ul>
        <div className="border-t border-zinc-100 pt-10 dark:border-zinc-700/40">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            For speaking inquiries or panel invitations, email me at{' '}
            <Link
              href={`mailto:${site.email}`}
              className="font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
            >
              {site.email}
            </Link>
            .
          </p>
        </div>
      </div>
    </SimpleLayout>
  )
}
