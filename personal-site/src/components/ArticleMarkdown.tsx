import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'

const markdownComponents: Partial<Components> = {
  a: ({ href, children, ...props }) => (
    <a
      href={href}
      {...props}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="font-medium text-teal-600 underline decoration-teal-500/30 underline-offset-2 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
    >
      {children}
    </a>
  ),
}

export function ArticleMarkdown({ source }: { source: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
      {source}
    </ReactMarkdown>
  )
}
