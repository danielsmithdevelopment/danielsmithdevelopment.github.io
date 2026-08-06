import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { ProjectOutboundLinks } from '@/components/ProjectOutboundLinks'
import { SimpleLayout } from '@/components/SimpleLayout'
import { featuredRepos } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Sand Dollar CBDC infrastructure, Challenge the Footage, Witness, ClawQL, and related open-source work.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects"
      intro="Featured work across institutional blockchain infrastructure, public interest technology, and the ClawQL agentic stack — plus related open-source libraries and product PWAs. Each card links to GitHub, npm, and/or a live site when available."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2"
      >
        {featuredRepos.map((project) => (
          <Card as="li" key={project.name}>
            {project.highlight ? (
              <p className="relative z-10 mt-1 text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                AI / agents
              </p>
            ) : null}
            <h2 className="relative z-10 mt-3 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              {project.name}
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <ProjectOutboundLinks
              github={project.github}
              npm={project.npm}
              live={project.live}
              className="mt-6"
            />
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
