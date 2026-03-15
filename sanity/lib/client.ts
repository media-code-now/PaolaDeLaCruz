import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

if (!projectId || !dataset) {
  throw new Error('Missing Sanity environment variables')
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export async function sanityFetch<T>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: Record<string, any>
  tags?: string[]
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: 3600, // 1 hour
      tags: tags || ['sanity'],
    },
  })
}

// Get all published blog posts
export async function getAllBlogPosts() {
  const query = `*[_type == "blog" && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    author,
    mainImage {
      asset -> {
        url,
        _id,
      },
      alt,
    },
  }`
  return sanityFetch({ query, tags: ['blog'] })
}

// Get single blog post by slug
export async function getBlogPostBySlug(slug: string) {
  const query = `*[_type == "blog" && slug.current == $slug && status == "published"][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    author,
    mainImage {
      asset -> {
        url,
        _id,
      },
      alt,
    },
    body,
  }`
  return sanityFetch({ query, params: { slug }, tags: [`blog-${slug}`] })
}

// Get blog posts by category
export async function getBlogPostsByCategory(category: string) {
  const query = `*[_type == "blog" && category == $category && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    author,
    mainImage {
      asset -> {
        url,
        _id,
      },
      alt,
    },
  }`
  return sanityFetch({ query, params: { category }, tags: [`blog-${category}`] })
}

// Get featured blog posts (limit 3)
export async function getFeaturedBlogPosts() {
  const query = `*[_type == "blog" && status == "published"] | order(publishedAt desc)[0..2] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    author,
    mainImage {
      asset -> {
        url,
        _id,
      },
      alt,
    },
  }`
  return sanityFetch({ query, tags: ['blog-featured'] })
}
