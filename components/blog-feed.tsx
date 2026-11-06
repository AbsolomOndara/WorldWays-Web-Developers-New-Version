'use client';
import Link from 'next/link';
import { useEffect,useState } from 'react';
import { publicRequest } from '@/lib/api';
type Post={id?:string|number;title:string;slug?:string;excerpt?:string;published_at?:string;category?:string};
export function BlogFeed(){const[posts,setPosts]=useState<Post[]>([]);const[ready,setReady]=useState(false);useEffect(()=>{publicRequest<Post[]>('/api/public/blog-posts').then(data=>setPosts(Array.isArray(data)?data:[])).catch(()=>{}).finally(()=>setReady(true));},[]);if(!posts.length)return <div className="site-notice">{ready?'New articles are being prepared. Check back soon or contact us with your topic.':'Loading insights…'}</div>;return <div className="project-grid">{posts.map(post=><article className="project-card" key={post.id||post.slug}><div className="project-art"><span>WW</span></div><div className="project-content"><small>{post.category||'Worldways insights'}{post.published_at?` · ${new Date(post.published_at).toLocaleDateString()}`:''}</small><h3>{post.title}</h3><p>{post.excerpt}</p>{post.slug&&<Link className="inline-link" href={`/blog/${post.slug}`}>Read article ↗</Link>}</div></article>)}</div>}
