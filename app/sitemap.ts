import type { MetadataRoute } from 'next';
import { services } from '@/lib/content';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || 'https://worldwayswebdevelopers.co.ke').replace(/\/+$/, '');
  const paths = [
    '/', '/about', '/company', '/services', '/projects', '/reviews', '/pricing', '/faqs', '/blog', '/careers', '/contact',
    ...services.map(service => `/services/${service.slug}`),
  ];
  const pages: MetadataRoute.Sitemap = paths.map(path => ({
    url: `${base}${path === '/' ? '/' : path}`,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/services' ? 0.9 : 0.7,
  }));

  const api = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/$/, '');
  if (api) {
    try {
      const response = await fetch(`${api}/api/public/blog-posts`, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(5000) });
      if (response.ok) {
        const raw = await response.json();
        const posts = raw.data || raw;
        for (const post of Array.isArray(posts) ? posts : []) {
          if (typeof post.slug === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(post.slug)) {
            pages.push({
              url: `${base}/blog/${post.slug}`,
              ...(post.published_at && !Number.isNaN(Date.parse(post.published_at)) ? { lastModified: new Date(post.published_at) } : {}),
              changeFrequency: 'monthly',
              priority: 0.55,
            });
          }
        }
      }
    } catch {
      // The static public routes still form a complete sitemap if the API is unavailable.
    }
  }
  return pages;
}
