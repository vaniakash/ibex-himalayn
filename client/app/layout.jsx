import './globals.css';
import './pages.css';
import './components.css';
import { Playfair_Display, DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import GoogleAnalytics from '@/components/ui/GoogleAnalytics';
import { organizationSchema, websiteSchema, localBusinessSchema, JsonLd } from '@/lib/schemas';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const ibmPlex = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata = {
  metadataBase: new URL('https://himalayanibex.com'),
  title: {
    default: 'IBEX — Hand-crafted Himalayan Treks Since 2014',
    template: '%s | IBEX Trekking',
  },
  description:
    'IBEX offers premium guided treks in the Indian Himalayas — Uttarakhand, Himachal Pradesh, Sikkim & Ladakh. Small groups, certified guides, leave-no-trace ethics.',
  keywords: ['himalayan treks', 'india trekking', 'kedarkantha', 'roopkund', 'chadar trek', 'IBEX trekking'],
  authors: [{ name: 'Himalayan Ibex', url: 'https://himalayanibex.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://himalayanibex.com',
    siteName: 'IBEX Trekking',
    title: 'IBEX — Hand-crafted Himalayan Treks Since 2014',
    description: 'Premium guided treks in the Indian Himalayas. Small groups, certified guides.',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Himalayan ridge at golden hour' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IBEX Trekking',
    description: 'Premium guided treks in the Indian Himalayas.',
    images: ['/images/hero.jpg'],
  },
  alternates: {
    canonical: 'https://himalayanibex.com',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_ID || '',
  },
  other: {
    'theme-color': '#2d5016',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'manifest', url: '/assets/favicon/site.webmanifest' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${ibmPlex.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body suppressHydrationWarning>
        <GoogleAnalytics />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
