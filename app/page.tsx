import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SiteFrame } from '@/components/site-frame';

export const metadata:Metadata={title:{absolute:'Web Developers in Kenya | Websites, Apps & IT Support'},description:'Need web developers in Kenya? Worldways builds business websites, custom apps and digital systems, with 24/7 IT support and clear project enquiries.',alternates:{canonical:'/'}};

export default function HomePage(){
  return <SiteFrame><main id="main" className="home-page">
    <section className="hero hero-network">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><i/> WorldWays Web-Developers Ltd</p>
          <h1>Web and app developers in Kenya, ready for your next idea.</h1>
          <p>Worldways builds business websites, custom mobile apps and digital systems for organisations in Kenya, alongside cybersecurity, online marketing and 24/7 IT support.</p>
          <div className="hero-actions"><Link href="/contact" className="button button-lime">Talk to our team <ArrowUpRight size={17}/></Link><Link href="/services" className="button button-outline">Explore our services <ArrowRight size={16}/></Link></div>
          <div className="home-service-links"><span>Web &amp; software</span><span>Cybersecurity</span><span>Digital growth</span><span>IT support</span></div>
        </div>
        <div className="hero-visual hero-visual-network" aria-label="Connected network illustration"><div className="network-caption"><span>CONNECTED BY DESIGN</span><strong>Ideas into systems.<br/>Systems into progress.</strong><Link href="/company">Meet WorldWays <ArrowRight size={15}/></Link></div></div>
      </div>
    </section>
    <section className="home-intro"><div className="shell home-intro-inner"><p className="eyebrow"><i/> One connected technology partner</p><h2>From your first idea to the systems that keep it moving.</h2><p>Comparing web developers or app developers in Kenya? Tell us what you need to build, improve or maintain. We’ll discuss the scope and a practical next step with you.</p><Link className="inline-link" href="/about">Discover our approach <ArrowRight size={16}/></Link></div></section>
  </main></SiteFrame>
}
