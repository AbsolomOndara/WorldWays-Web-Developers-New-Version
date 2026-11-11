'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';
import { EmailContactLink } from '@/components/email-contact-link';

const links = [
  ['Services', '/services'], ['Projects', '/projects'], ['About', '/about'], ['Company', '/company'],
  ['Pricing', '/pricing'], ['Reviews', '/reviews'], ['FAQs', '/faqs'], ['Blog', '/blog'],
];
export function Brand() {
  return <Link href="/" className="brand" aria-label="Worldways Web-Developers home"><span className="brand-symbol" aria-hidden="true">WW</span><span className="brand-words">WORLDWAYS<small>WEB-DEVELOPERS LTD</small></span></Link>;
}
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  useEffect(() => { setOpen(false); setSearchOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.classList.toggle('navigation-open', open);
    return () => document.body.classList.remove('navigation-open');
  }, [open]);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); setSearchOpen(false); } };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);
  return <><div className="topbar"><div className="shell topbar-inner"><p>Thoughtful technology for organisations moving forward.</p><EmailContactLink/></div></div><header className="site-header"><nav className="shell nav" aria-label="Main navigation"><Brand/><button className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-links" onClick={() => setOpen(!open)}>{open ? <X size={21}/> : <Menu size={21}/>}</button><div id="primary-links" className={`nav-links${open ? ' open' : ''}`}><div className="mobile-menu-head"><Brand/><button className="mobile-menu-close" type="button" aria-label="Close navigation" onClick={() => setOpen(false)}><X size={22}/></button></div>{links.map(([label, href]) => <Link key={href} href={href} className={pathname === href || pathname.startsWith(href + '/') ? 'active' : ''} onClick={() => setOpen(false)}>{label}</Link>)}<button className="search-button" aria-label="Search the website" aria-expanded={searchOpen} onClick={() => { setOpen(false); setSearchOpen(!searchOpen); }}><Search size={18}/><span>Search</span></button><Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>Contact us <ArrowUpRight size={15}/></Link></div>{searchOpen&&<form className="site-search" action="/search"><input autoFocus name="q" placeholder="Search services, pages…" aria-label="Search website"/><button className="button">Search ↗</button></form>}</nav></header></>;
}
export function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-top"><div className="footer-brand"><Brand/><p>Technology made useful for people and organisations moving forward.</p></div><div className="footer-col"><strong>Explore</strong><Link href="/services">Our services</Link><Link href="/projects">Clients &amp; projects</Link><Link href="/company">Our company</Link><Link href="/about">About WorldWays</Link><Link href="/reviews">Client reviews</Link><Link href="/pricing">Pricing</Link></div><div className="footer-col"><strong>Useful links</strong><Link href="/faqs">Frequently asked questions</Link><Link href="/blog">Insights</Link><Link href="/contact">Contact us</Link><Link href="/admin/login">Admin</Link></div><div className="footer-contact"><strong>Have a project in mind?</strong><p>Let us talk about what technology can do for you.</p><EmailContactLink className="footer-email"/></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Worldways Web-Developers Ltd.</span><span>Built thoughtfully by Worldways Web-Developers.</span><a href="#top">Back to top ↑</a></div></footer>;
}
