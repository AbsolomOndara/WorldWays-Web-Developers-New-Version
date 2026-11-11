import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SiteFrame } from '@/components/site-frame';
import { HeroVideoCarousel } from '@/components/hero-video-carousel';

export const metadata:Metadata={title:{absolute:'Web Developers in Kenya | Websites, Apps & IT Support'},description:'Need web developers in Kenya? Worldways builds business websites, custom apps and digital systems, with 24/7 IT support and clear project enquiries.',alternates:{canonical:'/'}};

export default function HomePage(){
  return <SiteFrame><main id="main" className="home-page">
    <HeroVideoCarousel />
    <section className="home-intro"><div className="shell home-intro-inner"><p className="eyebrow"><i/> One connected technology partner</p><h2>From your first idea to the systems that keep it moving.</h2><p>Comparing web developers or app developers in Kenya? Tell us what you need to build, improve or maintain. We will discuss the scope and a practical next step with you.</p><Link className="inline-link" href="/about">Discover our approach <ArrowRight size={16}/></Link></div></section>
    <section className="home-photo-strip" aria-label="Technology and development at WorldWays"><div className="shell"><div className="home-photo-heading"><p className="eyebrow"><i/> The work behind the screen</p><h2>Good technology is built <em>together.</em></h2></div><div className="home-photo-grid"><figure><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=82" alt="Developers collaborating around a laptop" loading="lazy"/><figcaption>People first, from the first conversation</figcaption></figure><figure><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=82" alt="Electronic components and digital connections" loading="lazy"/><figcaption>Thoughtful systems, built to connect</figcaption></figure><figure><img src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&w=1200&q=82" alt="Artificial intelligence processor on a circuit board" loading="lazy"/><figcaption>New tools, used with care</figcaption></figure></div></div></section>
  </main></SiteFrame>
}
