import Link from 'next/link';

type Post = { id?: string | number; title: string; slug?: string; excerpt?: string; published_at?: string; category?: string };

async function getPosts(): Promise<{ posts: Post[]; available: boolean }> {
  const base = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/$/, '');
  if (!base) return { posts: [], available: false };
  try {
    const response = await fetch(`${base}/api/public/blog-posts`, { cache: 'no-store', signal: AbortSignal.timeout(7000) });
    if (!response.ok) return { posts: [], available: false };
    const payload = await response.json();
    const rows = payload.data ?? payload;
    return { posts: Array.isArray(rows) ? rows.filter((post: Post) => Boolean(post.title && post.slug)) : [], available: true };
  } catch {
    return { posts: [], available: false };
  }
}

export async function BlogFeed() {
  const { posts, available } = await getPosts();
  if (!posts.length) return <div className="site-notice">{available ? 'There are no published articles yet. Please check back soon or contact us with your topic.' : 'Insights could not load just now. Please refresh the page in a moment.'}</div>;
  return <div className="project-grid">{posts.map((post) => <article className="project-card blog-card" key={post.id || post.slug}>
    <div className="project-art blog-art"><span>WORLDWAYS INSIGHTS</span><b>{(post.category || 'Technology').slice(0, 1).toUpperCase()}</b></div>
    <div className="project-content"><small>{post.category || 'WorldWays insights'}{post.published_at ? ` · ${new Date(post.published_at).toLocaleDateString()}` : ''}</small><h2>{post.title}</h2>{post.excerpt && <p>{post.excerpt}</p>}<Link className="inline-link" href={`/blog/${post.slug}`}>Read article ↗</Link></div>
  </article>)}</div>;
}
