'use client';

import Link from 'next/link';
import { FormEvent, useMemo, useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';
import { services, faqs } from '@/lib/content';

type SearchItem = { title: string; detail: string; href: string; type: string };
const serviceItems: SearchItem[] = services.map((item) => ({
  title: item.title,
  detail: item.summary,
  href: `/services/${item.slug}`,
  type: item.label,
}));
const companyItems: SearchItem[] = [
  { title: 'About WorldWays', detail: 'Our story, values and the way we approach digital work.', href: '/about', type: 'Our company' },
  { title: 'Company profile', detail: 'Learn about WorldWays Web-Developers Ltd and our work.', href: '/company', type: 'Our company' },
  { title: 'Meet Absolom Ondara', detail: 'CEO and Founder of WorldWays Web-Developers Ltd.', href: '/company', type: 'Leadership' },
  { title: 'Pricing and project estimates', detail: 'Explore pricing information and request a tailored quote.', href: '/pricing', type: 'Getting started' },
  { title: 'Contact our team', detail: 'Tell us what you are planning and get a clear next step.', href: '/contact', type: 'Getting started' },
  ...faqs.map((item) => ({ title: item.question, detail: item.answer, href: '/faqs', type: 'Frequently asked question' })),
];
const alphabet = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

export function HomeSearch() {
  const [tab, setTab] = useState<'services' | 'company'>('services');
  const [query, setQuery] = useState('');
  const [letter, setLetter] = useState('All');
  const [submitted, setSubmitted] = useState(false);
  const items = tab === 'services' ? serviceItems : companyItems;
  const results = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    return items.filter((item) => {
      const matchesTerm = !term || `${item.title} ${item.detail} ${item.type}`.toLocaleLowerCase().includes(term);
      const matchesLetter = term.length > 0 || letter === 'All' || item.title.toLocaleUpperCase().startsWith(letter);
      return matchesTerm && matchesLetter;
    });
  }, [items, letter, query]);
  const shown = results.slice(0, 6);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return <section className="home-directory" aria-labelledby="home-directory-title">
    <div className="shell">
      <div className="directory-heading">
        <div>
          <p className="eyebrow"><i/> Find your way</p>
          <h2 id="home-directory-title">The right expertise for <em>what comes next.</em></h2>
        </div>
        <p>Search our services or browse practical information about working with WorldWays.</p>
      </div>
      <div className="directory-tabs" role="tablist" aria-label="Search category">
        <button type="button" role="tab" aria-selected={tab === 'services'} className={tab === 'services' ? 'active' : ''} onClick={() => { setTab('services'); setLetter('All'); setSubmitted(false); }}>Our services</button>
        <button type="button" role="tab" aria-selected={tab === 'company'} className={tab === 'company' ? 'active' : ''} onClick={() => { setTab('company'); setLetter('All'); setSubmitted(false); }}>Company information</button>
      </div>
      <form className="directory-search" onSubmit={submit} role="search">
        <label className="visually-hidden" htmlFor="home-directory-query">Search by service, technology or keyword</label>
        <input id="home-directory-query" value={query} onChange={(event) => { setQuery(event.target.value); setSubmitted(false); }} placeholder={tab === 'services' ? 'Search by service, technology or keyword' : 'Search company information or a common question'} />
        <button type="submit" aria-label="Search WorldWays"><Search size={21}/><span>Search</span></button>
      </form>
      {tab === 'services' && <nav className="directory-alphabet" aria-label="Filter services by first letter">{alphabet.map((item) => <button type="button" key={item} className={letter === item ? 'active' : ''} onClick={() => { setLetter(item); setQuery(''); setSubmitted(false); }} aria-pressed={letter === item}>{item}</button>)}</nav>}
      <div className="directory-results" aria-live="polite">
        <div className="directory-results-head"><span>{query.trim() ? `${results.length} matching result${results.length === 1 ? '' : 's'}` : tab === 'services' ? `${results.length} services available` : 'Explore WorldWays'}</span>{results.length > 6 && <span>Showing 6</span>}</div>
        {shown.length ? <div className="directory-result-list">{shown.map((item) => <Link href={item.href} className="directory-result" key={`${item.href}-${item.title}`}><span><small>{item.type}</small><strong>{item.title}</strong><span className="directory-result-detail">{item.detail}</span></span><ArrowUpRight size={18} aria-hidden="true"/></Link>)}</div> : <p className="directory-empty">No matches yet. Try a different word, or <Link href="/contact">tell us what you need</Link>.</p>}
      </div>
      <div className="directory-footer">{results.length > 6 && <span>{submitted ? 'Refine your search to narrow these results.' : 'Use the search field or alphabet to narrow the list.'}</span>}<Link href={tab === 'services' ? '/services' : '/about'}>Browse {tab === 'services' ? 'all services' : 'more about us'} <ArrowUpRight size={16}/></Link></div>
    </div>
  </section>;
}
