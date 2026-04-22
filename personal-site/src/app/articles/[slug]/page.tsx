import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ArticleLayout } from '@/components/ArticleLayout'
import { ArticleMarkdown } from '@/components/ArticleMarkdown'
import { getArticleBySlug } from '@/lib/articles'
import { featuredLinkedInPosts } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return featuredLinkedInPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let { slug } = await params
  let post = featuredLinkedInPosts.find((p) => p.slug === slug)
  if (!post) {
    return { title: 'Article' }
  }
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function LinkedInArticlePage({ params }: Props) {
  let { slug } = await params
  let post = featuredLinkedInPosts.find((p) => p.slug === slug)
  if (!post) {
    notFound()
  }

  let article = getArticleBySlug(slug)
  if (!article) {
    notFound()
  }

  return (
    <ArticleLayout article={article}>
      <ArticleMarkdown source={post.body} />
      <p className="mt-12 border-t border-zinc-100 pt-8 text-sm text-zinc-600 dark:border-zinc-700/40 dark:text-zinc-400">
        Original thread (comments, reactions, and any media):{' '}
        <Link
          href={post.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-teal-600 underline decoration-teal-500/30 underline-offset-2 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
        >
          View on LinkedIn
        </Link>
      </p>
      {post.extraLinks?.length ? (
        <div className="mt-8">
          <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Related links
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
            {post.extraLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal-600 underline decoration-teal-500/30 underline-offset-2 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </ArticleLayout>
  )
}
