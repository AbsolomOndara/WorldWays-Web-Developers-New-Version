import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Globe2, CloudCog, ShieldCheck, Newspaper, BriefcaseBusiness } from 'lucide-react';
import { SiteFrame } from '@/components/site-frame';
import { HeroVideoCarousel } from '@/components/hero-video-carousel';
import { HomeSearch } from '@/components/home-search';

export const metadata:Metadata={title:{absolute:'Web, App & Software Development | Worldways'},description:'Worldways builds business websites, custom apps and digital systems, with cybersecurity, digital growth and dependable technology support worldwide.',alternates:{canonical:'/'}};

export default function HomePage(){
  return <SiteFrame><main id="main" className="home-page">
    <HeroVideoCarousel />
    <section className="home-intro"><div className="shell home-intro-inner"><p className="eyebrow"><i/> WorldWays Web-Developers Ltd</p><h2>Digital work built around the people who use it.</h2><p>We design and develop websites, software and digital services, then help organisations keep them useful, secure and growing.</p><Link className="inline-link" href="/about">How we work <ArrowRight size={16}/></Link></div></section>
    <section className="home-capabilities" aria-labelledby="home-capabilities-title"><div className="shell"><div className="home-section-heading"><div><p className="eyebrow"><i/> What we do</p><h2 id="home-capabilities-title">Three ways we help your organisation <em>move forward.</em></h2></div><Link className="inline-link" href="/services">All services <ArrowUpRight size={16}/></Link></div><div className="home-capability-grid">
      <Link className="home-capability-card" href="/services"><span className="home-capability-icon"><Globe2 size={24}/></span><span className="home-capability-kicker">01 / Digital products</span><h3>Websites, apps and software</h3><p>Build a clear online presence, launch a mobile product or make a business process work better with software shaped to fit.</p><span className="home-capability-link">Explore digital development <ArrowUpRight size={15}/></span></Link>
      <Link className="home-capability-card" href="/services"><span className="home-capability-icon"><CloudCog size={24}/></span><span className="home-capability-kicker">02 / Business technology</span><h3>Systems, cloud and support</h3><p>Connect the tools your team relies on, plan for dependable hosting and get practical help when technology needs attention.</p><span className="home-capability-link">Explore technology services <ArrowUpRight size={15}/></span></Link>
      <Link className="home-capability-card" href="/services"><span className="home-capability-icon"><ShieldCheck size={24}/></span><span className="home-capability-kicker">03 / Security and growth</span><h3>Cybersecurity and digital growth</h3><p>Strengthen your security posture and help the right people find, understand and engage with your organisation online.</p><span className="home-capability-link">Explore security and growth <ArrowUpRight size={15}/></span></Link>
    </div></div></section>
    <HomeSearch />
    <section className="home-next-steps"><div className="shell home-next-grid"><Link className="home-next-card" href="/blog"><span className="home-next-icon"><Newspaper size={22}/></span><span className="home-capability-kicker">Ideas and practical guidance</span><h2>Insights for the work ahead.</h2><p>Read perspectives on websites, software, cybersecurity and the choices behind useful technology.</p><span className="home-capability-link">Visit Insights <ArrowUpRight size={15}/></span></Link><Link className="home-next-card" href="/careers"><span className="home-next-icon"><BriefcaseBusiness size={22}/></span><span className="home-capability-kicker">Work with WorldWays</span><h2>Bring your skills to the table.</h2><p>We welcome conversations with developers, designers and technology specialists interested in thoughtful work.</p><span className="home-capability-link">Explore Careers <ArrowUpRight size={15}/></span></Link></div></section>
    <section className="home-closing-cta"><div className="shell home-closing-inner"><div><p className="eyebrow"><i/> Start a conversation</p><h2>Have a project that needs a <em>clear next step?</em></h2><p>Tell us what you are planning. We will listen, ask the right questions and help you map a sensible way forward.</p></div><Link className="button" href="/contact">Work with us <ArrowUpRight size={17}/></Link></div></section>
  </main></SiteFrame>
}
