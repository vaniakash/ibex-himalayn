import { Suspense } from 'react';
import { TREKS } from '@/lib/treks-data';
import TreksExplorer from '@/components/treks/TreksExplorer';

const MONSOON_SLUGS = [
  'valley-of-flowers',
  'kashmir-great-lakes',
  'tarsar-marsar',
  'pin-bhaba',
  'buran-ghati',
  'hampta-pass',
  'goechala'
];

export const metadata = {
  title: 'Monsoon Season Treks — Himalayan Ibex',
  description: 'Explore our carefully curated monsoon season treks like Valley of Flowers and Kashmir Great Lakes.',
  alternates: { canonical: 'https://himalayanibex.com/monsoon' },
  openGraph: {
    title: 'Monsoon Season Treks | Himalayan Ibex',
    description: 'Explore our carefully curated monsoon season treks like Valley of Flowers and Kashmir Great Lakes.',
    url: 'https://himalayanibex.com/monsoon',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monsoon Season Treks | Himalayan Ibex',
    description: 'Explore our carefully curated monsoon season treks.',
  },
};

export default function MonsoonPage() {
  const filteredTreks = TREKS.filter(t => MONSOON_SLUGS.includes(t.slug));
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
