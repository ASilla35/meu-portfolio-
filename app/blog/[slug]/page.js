import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const { meta, content } = getPostBySlug(slug)

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8 inline-block">
        ← Voltar ao blog
      </Link>
      <p className="text-sm text-gray-400 mb-2">{meta.date}</p>
      <h1 className="text-4xl font-semibold text-gray-900 mb-12">{meta.title}</h1>
      <article className="prose prose-gray max-w-none">
        <MDXRemote source={content} />
      </article>
    </main>
  )
}