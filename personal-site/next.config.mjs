import path from 'node:path'
import { fileURLToPath } from 'node:url'

import nextMDX from '@next/mdx'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  /** GitHub Pages and other static hosts */
  output: 'export',
  images: {
    unoptimized: true,
  },
  /** Prefer this app directory as Turbopack root when the repo has multiple packages */
  turbopack: {
    root: __dirname,
  },
  outputFileTracingIncludes: {
    '/articles/*': ['./src/app/articles/**/*.tsx'],
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['@mapbox/rehype-prism'],
  },
})

export default withMDX(nextConfig)
