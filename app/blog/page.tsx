import type { Metadata } from 'next';
import { SiteFrame, PageHero } from '@/components/site-frame';
import { BlogFeed } from '@/components/blog-feed';
export const metadata:Metadata={title:'Technology & Cybersecurity Insights',description:'Practical insights from Worldways on web development, mobile apps, cybersecurity, digital marketing and business technology.',alternates:{canonical:'/blog'}};
export const dynamic='force-dynamic';
export default function BlogPage(){return <SiteFrame><main id="main"><PageHero eyebrow="Insights" title={<>Ideas for a more <em>connected future.</em></>} lead="Practical perspectives on digital tools, safer systems and technology that helps people get more done." trail="Blog"/><section className="section section-white"><div className="shell"><BlogFeed/></div></section></main></SiteFrame>}
