import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
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
    default: 'Rise Again Web Technologies | Software & Web Development Company Nagercoil, Kanyakumari',
    template: '%s | Rise Again Web Technologies',
  },
  description:
    'Rise Again Web Technologies — Nagercoil & Kanyakumari\'s #1 software development company. We build Finance Software, eCommerce Websites, POS Systems, Portfolio Websites, Hospital Management & Billing Software for businesses across Kanyakumari district and Tamil Nadu.',
  keywords: [
    // Hyper-local — Kanyakumari district
    'software company Nagercoil',
    'web development Nagercoil',
    'website design Nagercoil',
    'software development Kanyakumari',
    'web development Kanyakumari',
    'website design Kanyakumari',
    'IT company Nagercoil',
    'software company Marthandam',
    'web design Marthandam',
    'software development Colachel',
    'website Thuckalay',
    'software Padmanabhapuram',
    'web development Kuzhithurai',
    'ecommerce website Kanyakumari',
    'ecommerce website Nagercoil',
    'portfolio website Nagercoil',
    'finance software Nagercoil',
    'billing software Nagercoil',
    'POS system Nagercoil',
    'hospital management software Nagercoil',
    // Tamil Nadu level
    'software development company Tamil Nadu',
    'web development company Tamil Nadu',
    'ecommerce website Tamil Nadu',
    'custom software development Tamil Nadu',
    // India level
    'software development company India',
    'web development company India',
    'Rise Again Web Technologies',
    'riseagaintech',
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
    'Software & web development company in Nagercoil, Kanyakumari district, Tamil Nadu. Specializing in Finance Software, eCommerce Websites, POS Systems, Hospital Management, and custom web applications.',
  url: siteUrl,
  telephone: '+917530058236',
  email: 'contact@riseagaintech.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nagercoil',
    addressLocality: 'Nagercoil',
    addressRegion: 'Tamil Nadu',
    postalCode: '629001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '8.1833',
    longitude: '77.4119',
  },
  areaServed: [
    // Hyper-local first
    { '@type': 'City', name: 'Nagercoil' },
    { '@type': 'City', name: 'Kanyakumari' },
    { '@type': 'City', name: 'Marthandam' },
    { '@type': 'City', name: 'Colachel' },
    { '@type': 'City', name: 'Thuckalay' },
    { '@type': 'City', name: 'Padmanabhapuram' },
    { '@type': 'City', name: 'Kuzhithurai' },
    { '@type': 'City', name: 'Eraniel' },
    { '@type': 'City', name: 'Killiyoor' },
    // Tamil Nadu
    { '@type': 'State', name: 'Tamil Nadu' },
    { '@type': 'City', name: 'Chennai' },
    { '@type': 'City', name: 'Coimbatore' },
    { '@type': 'City', name: 'Madurai' },
    { '@type': 'City', name: 'Tirunelveli' },
    // India
    { '@type': 'Country', name: 'India' },
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
  sameAs: [
    'https://www.facebook.com/profile.php?id=61586668778273',
  ],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="google-site-verification" content="VhwZTY8iYO0BFmSUOMK7rqZs4rlWWM7PQlyoNXUZEg4" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.country" content="India" />
        <meta name="language" content="English" />
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K664BKJM');`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K664BKJM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
