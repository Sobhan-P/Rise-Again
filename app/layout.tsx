import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://www.riseagaintech.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Rise Again Web Technologies | Custom Software Development Company Tamil Nadu',
    template: '%s | Rise Again Web Technologies',
  },
  description:
    'Rise Again Web Technologies — Tamil Nadu\'s premier custom software development company. We build Finance Software, POS Systems, Hospital Management, Billing Software, Gym Software & custom web apps using React, Next.js, Node.js & MongoDB.',
  keywords: [
    'software development company Tamil Nadu',
    'web development company Tamil Nadu',
    'custom software development Tamil Nadu',
    'software company Chennai',
    'React Next.js developers Tamil Nadu',
    'hospital management software Tamil Nadu',
    'POS system Tamil Nadu',
    'billing software Tamil Nadu',
    'finance software development India',
    'gym management software Tamil Nadu',
    'custom web application development Tamil Nadu',
    'Node.js development Tamil Nadu',
    'MongoDB developers Tamil Nadu',
    'IT company Tamil Nadu',
    'Rise Again Web Technologies',
  ],
  authors: [{ name: 'Rise Again Web Technologies' }],
  creator: 'Rise Again Web Technologies',
  publisher: 'Rise Again Web Technologies',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Rise Again Web Technologies',
    title: 'Rise Again Web Technologies | Custom Software Development Tamil Nadu',
    description:
      'Build world-class custom software with Tamil Nadu\'s trusted development team. Finance, POS, Hospital, Gym, Billing & more.',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: 'Rise Again Web Technologies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rise Again Web Technologies | Custom Software Development Tamil Nadu',
    description: 'Build world-class custom software with Tamil Nadu\'s trusted development team.',
    images: [`${siteUrl}/og-image.png`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteUrl,
  name: 'Rise Again Web Technologies',
  description:
    'Custom software development company in Tamil Nadu specializing in Finance Software, POS Systems, Hospital Management, Gym Software, and custom web applications.',
  url: siteUrl,
  telephone: '+917530058236',
  email: 'contact@riseagaintech.com',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  areaServed: [
    'Tamil Nadu', 'Chennai', 'Coimbatore', 'Madurai', 'Salem',
    'Tirunelveli', 'Trichy', 'Tiruchirappalli', 'Vellore', 'Erode',
  ],
  serviceType: [
    'Custom Software Development',
    'Web Application Development',
    'POS System Development',
    'Hospital Management Software',
    'Finance Software',
    'Billing Software',
    'Gym Management Software',
  ],
  founder: { '@type': 'Person', name: 'Rise Again Web Technologies' },
  sameAs: [],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.country" content="India" />
        <meta name="language" content="English" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
