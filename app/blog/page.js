import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: 'Blog — João Silva',
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Blog</p>
      <h1 className="text-4xl font-semibold text-gray-900 mb-12">Artigos</h1>

      <div className="divide-y divide-gray-100">
        {posts.map(post => (
          <article key={post.slug} className="py-8">
            <Link href={`/blog/${post.slug}`} className="group">
              <p className="text-sm text-gray-400 mb-2">{post.date}</p>
              <h2 className="text-xl font-medium text-gray-900 mb-2 group-hover:underline underline-offset-4">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm">{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}