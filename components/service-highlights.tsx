import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CartoonIllustration } from '@/components/cartoon-illustration';

const categories = [
  { title: 'Web Design', label: 'Digital experiences that make your work clear.', href: '/services/custom-web-mobile-app-development', scene: 'services' },
  { title: 'Graphics Design', label: 'Visual identities and practical brand assets.', href: '/services/brand-identity-design', scene: 'blog' },
  { title: 'Digital Marketing', label: 'Find and connect with the right audience.', href: '/services/seo-content-marketing', scene: 'projects' },
  { title: 'Web Hosting', label: 'Reliable foundations for your online presence.', href: '/services/cloud-strategy-migration', scene: 'company' },
];

export function ServiceHighlights() {
  return <section className="service-highlights" aria-labelledby="service-highlights-title">
    <div className="shell">
      <div className="service-highlights-heading"><div><p className="eyebrow"><i/> Where we can help</p><h2 id="service-highlights-title">A capable team for the <em>whole digital picture.</em></h2></div><p>From a first website to the systems that keep your organisation moving, we bring the right people and skills around the work.</p></div>
      <div className="service-highlight-grid">{categories.map((category) => <Link className="service-highlight-card" key={category.title} href={category.href}>
        <span className="service-highlight-art"><CartoonIllustration type={category.scene}/></span>
        <span className="service-highlight-copy"><strong>{category.title}</strong><small>{category.label}</small><span className="inline-link">Explore service <ArrowUpRight size={15}/></span></span>
      </Link>)}</div>
    </div>
  </section>;
}
