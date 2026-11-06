import type { Metadata } from 'next';
import { DM_Sans, Manrope, Caveat } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-signature', display: 'swap' });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://worldwayswebdevelopers.co.ke';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Web Developers in Kenya | Websites, Apps & IT Support', template: '%s | Worldways Web-Developers Ltd' },
  description: 'Need web developers in Kenya? Worldways builds business websites, custom apps and digital systems, with 24/7 IT support and clear project enquiries.',
  applicationName: 'Worldways Web-Developers Ltd',
  openGraph: { type: 'website', locale: 'en_KE', siteName: 'Worldways Web-Developers Ltd', title: 'Web Developers in Kenya | Worldways', description: 'Business websites, custom apps and digital systems for organisations in Kenya.', url: siteUrl, images: ['/opengraph-image'] },
  twitter: { card: 'summary_large_image', title: 'Web Developers in Kenya | Worldways', description: 'Business websites, custom apps and digital systems for organisations in Kenya.', images: ['/opengraph-image'] },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Worldways Web-Developers Ltd', url: siteUrl,
      email: 'info@worldwayswebdevelopers.co.ke', areaServed: { '@type': 'Country', name: 'Kenya' },
      founder: { '@type': 'Person', name: 'Absolom Ondara', jobTitle: 'CEO and Founder' },
      knowsAbout: ['Web development', 'Mobile app development', 'Custom software', 'Cybersecurity', 'Search engine optimization', '24/7 IT support', 'E-commerce development'],
      contactPoint: { '@type': 'ContactPoint', contactType: 'sales and enquiries', email: 'info@worldwayswebdevelopers.co.ke', availableLanguage: ['English'] },
    },
    {
      '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: 'Worldways Web-Developers Ltd', inLanguage: 'en-KE',
      publisher: { '@id': `${siteUrl}/#organization` },
      potentialAction: { '@type': 'SearchAction', target: `${siteUrl}/search?q={search_term_string}`, 'query-input': 'required name=search_term_string' },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-KE"><body className={`${dmSans.variable} ${manrope.variable} ${caveat.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
