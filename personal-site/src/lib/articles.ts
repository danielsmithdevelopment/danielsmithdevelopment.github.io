import { featuredLinkedInPosts, site } from '@/lib/site'

export interface Article {
  title: string
  description: string
  author: string
  date: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

/** Articles list and /articles/<slug> pages — sourced only from `featuredLinkedInPosts` in site.ts */
export async function getAllArticles(): Promise<ArticleWithSlug[]> {
  return featuredLinkedInPosts
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      author: site.name,
      date: post.date,
    }))
    .sort((a, z) => +new Date(z.date) - +new Date(a.date))
}

export function getArticleBySlug(slug: string): ArticleWithSlug | undefined {
  let post = featuredLinkedInPosts.find((p) => p.slug === slug)
  if (!post) {
    return undefined
  }
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    author: site.name,
    date: post.date,
  }
}
