import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SiteFrame } from '@/components/site-frame';
import { HeroVideoCarousel } from '@/components/hero-video-carousel';

export const metadata:Metadata={title:{absolute:'Web, App & Software Development | Worldways'},description:'Worldways builds business websites, custom apps and digital systems, with cybersecurity, digital growth and dependable technology support worldwide.',alternates:{canonical:'/'}};

export default function HomePage(){
  return <SiteFrame><main id="main" className="home-page">
    <HeroVideoCarousel />
    <section className="home-intro"><div className="shell home-intro-inner"><p className="eyebrow"><i/> One connected technology partner</p><h2>From your first idea to the systems that keep it moving.</h2><p>Tell us what you need to build, improve or maintain. We will discuss the scope and a practical next step with you.</p><Link className="inline-link" href="/about">Discover our approach <ArrowRight size={16}/></Link></div></section>

  </main></SiteFrame>
}
