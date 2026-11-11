import type { Metadata } from 'next';
import { DM_Sans, Manrope, Caveat } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-signature', display: 'swap' });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://worldwayswebdevelopers.co.ke';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Web, App & Software Development | Worldways', template: '%s | Worldways Web-Developers Ltd' },
  description: 'Worldways builds business websites, custom apps and digital systems, with cybersecurity, digital growth and dependable technology support for organisations worldwide.',
  applicationName: 'Worldways Web-Developers Ltd',
  openGraph: { type: 'website', locale: 'en', siteName: 'Worldways Web-Developers Ltd', title: 'Web, App & Software Development | Worldways', description: 'Business websites, custom apps and digital systems for organisations worldwide.', url: siteUrl, images: ['/opengraph-image'] },
  twitter: { card: 'summary_large_image', title: 'Web, App & Software Development | Worldways', description: 'Business websites, custom apps and digital systems for organisations worldwide.', images: ['/opengraph-image'] },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Worldways Web-Developers Ltd', url: siteUrl,
      email: 'info@worldwayswebdevelopers.co.ke', areaServed: 'Worldwide',
      founder: { '@type': 'Person', name: 'Absolom Ondara', jobTitle: 'CEO and Founder' },
      knowsAbout: ['Web development', 'Mobile app development', 'Custom software', 'Cybersecurity', 'Search engine optimization', '24/7 IT support', 'E-commerce development'],
      contactPoint: { '@type': 'ContactPoint', contactType: 'sales and enquiries', email: 'info@worldwayswebdevelopers.co.ke', availableLanguage: ['English'] },
    },
    {
      '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: 'Worldways Web-Developers Ltd', inLanguage: 'en',
      publisher: { '@id': `${siteUrl}/#organization` },
      potentialAction: { '@type': 'SearchAction', target: `${siteUrl}/search?q={search_term_string}`, 'query-input': 'required name=search_term_string' },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${dmSans.variable} ${manrope.variable} ${caveat.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
