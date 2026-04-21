import { type Metadata } from 'next'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Conference talks, panels, and podcasts — especially on AI agents, platform engineering, and reliability.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Speaking & media"
      intro="I don’t have a canned list of public recordings on this page yet — but I care a lot about clear technical communication, whether that’s workshops, incident reviews, or architecture deep dives. If you’re planning a podcast, meetup, or panel on AI agents, MCP, Kubernetes/SRE, or blockchain infrastructure, I’d love to hear from you."
    >
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <p>
          For speaking inquiries or panel invitations, email me at{' '}
          <Link
            href={`mailto:${site.email}`}
            className="font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
          >
            {site.email}
          </Link>
          . I’m especially interested in topics that sit at the intersection of{' '}
          <strong>LLM tooling</strong>, <strong>production platforms</strong>, and{' '}
          <strong>developer experience</strong>.
        </p>
      </div>
    </SimpleLayout>
  )
}
