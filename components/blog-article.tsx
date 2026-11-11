import Link from 'next/link';

type Post = { title: string; body?: string; excerpt?: string; published_at?: string; category?: string };
async function getPost(slug: string): Promise<Post | null> {
  const base = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/$/, '');
  if (!base) return null;
  try {
    const response = await fetch(`${base}/api/public/blog-posts/${encodeURIComponent(slug)}`, { cache: 'no-store', signal: AbortSignal.timeout(7000) });
    if (!response.ok) return null;
    const payload = await response.json();
    const post = payload.data ?? payload;
    return post?.title ? post : null;
  } catch {
    return null;
  }
}

export async function BlogArticle({ slug }: { slug: string }) {
  const post = await getPost(slug);
  if (!post) return <div className="site-notice">This article is not available yet. <Link href="/blog">Return to Insights</Link>.</div>;
  return <article className="blog-article"><p className="eyebrow"><i/>{post.category || 'WorldWays insights'}{post.published_at ? ` · ${new Date(post.published_at).toLocaleDateString()}` : ''}</p><h1 className="section-title">{post.title}</h1>{post.excerpt && <p className="section-description blog-excerpt">{post.excerpt}</p>}<div className="blog-body">{post.body}</div><Link href="/blog" className="inline-link">← Back to Insights</Link></article>;
}
