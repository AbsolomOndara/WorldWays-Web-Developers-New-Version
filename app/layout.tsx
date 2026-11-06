import type { Metadata } from 'next';
import { DM_Sans, Manrope, Caveat } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-signature', display: 'swap' });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://worldwayswebdevelopers.co.ke';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Worldways Web-Developers Ltd | Technology for what’s next', template: '%s | Worldways Web-Developers Ltd' },
  description: 'Worldways Web-Developers Ltd helps organisations grow through software, digital marketing, automation, cybersecurity, IT consulting and ongoing technology support.',
  applicationName: 'Worldways Web-Developers Ltd',
  openGraph: { type: 'website', locale: 'en_KE', siteName: 'Worldways Web-Developers Ltd', title: 'Worldways Web-Developers Ltd', description: 'Thoughtful technology for businesses and organisations moving forward.' },
  twitter: { card: 'summary_large_image', title: 'Worldways Web-Developers Ltd', description: 'Thoughtful technology for businesses and organisations moving forward.' },
};

const organization = {
  '@context': 'https://schema.org', '@type': 'Organization', name: 'Worldways Web-Developers Ltd', email: 'info@worldwayswebdevelopers.co.ke',
  founder: { '@type': 'Person', name: 'Absolom Ondara', jobTitle: 'CEO and Founder' },
  description: 'Technology services including software and web development, digital marketing, automation, cybersecurity, consulting, e-commerce and support.',
  url: siteUrl,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${dmSans.variable} ${manrope.variable} ${caveat.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />{children}</body></html>;
}
