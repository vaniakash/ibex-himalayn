import { Suspense } from 'react';
import { TREKS } from '@/lib/treks-data';
import TreksExplorer from '@/components/treks/TreksExplorer';

const SUMMER_SLUGS = [
  'bali-pass',
  'gaumukh',
  'gaumukh-tapovan',
  'sar-pass',
  'pindari-glacier',
  'kedartal',
  'bhrigu-lake'
];

export const metadata = {
  title: 'Summer Season Treks — Himalayan Ibex',
  description: 'Explore our carefully curated summer season treks like Bali Pass, Gaumukh Tapovan, and Sar Pass.',
  alternates: { canonical: 'https://himalayanibex.com/summer' },
  openGraph: {
    title: 'Summer Season Treks | Himalayan Ibex',
    description: 'Explore our carefully curated summer season treks like Bali Pass, Gaumukh Tapovan, and Sar Pass.',
    url: 'https://himalayanibex.com/summer',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summer Season Treks | Himalayan Ibex',
    description: 'Explore our carefully curated summer season treks.',
  },
};

export default function SummerPage() {
  const filteredTreks = TREKS.filter(t => SUMMER_SLUGS.includes(t.slug));
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', background: '#fcfaf5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1a1a', paddingTop: '80px' }}>
        <p style={{ fontFamily: 'monospace', letterSpacing: '0.1em', opacity: 0.6 }}>LOADING TREKS…</p>
      </div>
    }>
      <TreksExplorer allTreks={filteredTreks} />
    </Suspense>
  );
}
