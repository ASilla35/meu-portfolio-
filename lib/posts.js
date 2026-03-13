import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content/posts')

export function getAllPosts() {
  const files = fs.readdirSync(postsDir)
  return files
    .filter(f => f.endsWith('.mdx'))
    .map(filename => {
      const slug = filename.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf-8')
      const { data } = matter(raw)
      return { slug, ...data, date: data.date?.toString() ?? '' }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  const filepath = path.join(postsDir, `${slug}.mdx`)
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)
  return { meta: { ...data, date: data.date?.toString() ?? '' }, content }
}