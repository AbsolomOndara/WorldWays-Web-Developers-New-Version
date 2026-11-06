import type { MetadataRoute } from 'next';
import {services} from '@/lib/content';
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
 const base=process.env.NEXT_PUBLIC_SITE_URL||'https://worldwayswebdevelopers.co.ke';
 const paths=['','/about','/company','/services','/projects','/pricing','/faqs','/blog','/contact','/search',...services.map(s=>`/services/${s.slug}`)];
 const pages=paths.map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:path===''?'weekly' as const:'monthly' as const,priority:path===''?1:.7}));
 const api=(process.env.NEXT_PUBLIC_API_BASE_URL||'').replace(/\/$/,'');
 if(api){try{const response=await fetch(`${api}/api/public/blog-posts`,{cache:'no-store'});if(response.ok){const raw=await response.json();const posts=raw.data||raw;for(const post of(Array.isArray(posts)?posts:[])){if(post.slug)pages.push({url:`${base}/blog/${post.slug}`,lastModified:post.published_at?new Date(post.published_at):new Date(),changeFrequency:'monthly',priority:.55});}}}catch{}}
 return pages;
}
