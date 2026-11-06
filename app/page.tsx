import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SiteFrame } from '@/components/site-frame';

export default function HomePage(){
  return <SiteFrame><main id="main" className="home-page">
    <section className="hero hero-network">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><i/> WorldWays Web-Developers Ltd</p>
          <h1>Technology for a business that’s <em>going places.</em></h1>
          <p>We build useful digital experiences, reliable systems and stronger online presence for organisations ready to move forward.</p>
          <div className="hero-actions"><Link href="/contact" className="button button-lime">Talk to our team <ArrowUpRight size={17}/></Link><Link href="/services" className="button button-outline">Explore our services <ArrowRight size={16}/></Link></div>
          <div className="home-service-links"><span>Web &amp; software</span><span>Cybersecurity</span><span>Digital growth</span><span>IT support</span></div>
        </div>
        <div className="hero-visual hero-visual-network" aria-label="Connected network illustration"><div className="network-caption"><span>CONNECTED BY DESIGN</span><strong>Ideas into systems.<br/>Systems into progress.</strong><Link href="/company">Meet WorldWays <ArrowRight size={15}/></Link></div></div>
      </div>
    </section>
    <section className="home-intro"><div className="shell home-intro-inner"><p className="eyebrow"><i/> One connected technology partner</p><h2>From your first idea to the systems that keep it moving.</h2><p>Explore each part of WorldWays in its own space: who we are, what we do, the partners we value and how to get in touch.</p><Link className="inline-link" href="/about">Discover our approach <ArrowRight size={16}/></Link></div></section>
  </main></SiteFrame>
}
