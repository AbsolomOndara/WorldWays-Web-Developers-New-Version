import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { title: 'Web Design', label: 'Digital experiences that make your work clear.', href: '/services/custom-web-mobile-app-development', image: 'web-design', alt: 'A designer sketching a responsive website layout' },
  { title: 'Graphics Design', label: 'Visual identities and practical brand assets.', href: '/services/brand-identity-design', image: 'graphics-design', alt: 'A graphic designer shaping a visual identity on a tablet' },
  { title: 'Digital Marketing', label: 'Find and connect with the right audience.', href: '/services/seo-content-marketing', image: 'digital-marketing', alt: 'A marketing team reviewing campaign results' },
  { title: 'Web Hosting', label: 'Reliable foundations for your online presence.', href: '/services/cloud-strategy-migration', image: 'web-hosting', alt: 'An engineer checking secure web hosting infrastructure' },
];

export function ServiceHighlights() {
  return <section className="service-highlights" aria-labelledby="service-highlights-title">
    <div className="shell">
      <div className="service-highlights-heading"><div><p className="eyebrow"><i/> Where we can help</p><h2 id="service-highlights-title">A capable team for the <em>whole digital picture.</em></h2></div><p>From a first website to the systems that keep your organisation moving, we bring the right people and skills around the work.</p></div>
      <div className="service-highlight-grid">{categories.map((category) => <Link className="service-highlight-card" key={category.title} href={category.href}>
        <span className="service-highlight-art"><img src={`/illustrations/services/${category.image}.webp`} alt={category.alt} loading="lazy"/></span>
        <span className="service-highlight-copy"><strong>{category.title}</strong><small>{category.label}</small><span className="inline-link">Explore service <ArrowUpRight size={15}/></span></span>
      </Link>)}</div>
    </div>
  </section>;
}
