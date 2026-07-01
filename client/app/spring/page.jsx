import { Suspense } from 'react';
import { TREKS } from '@/lib/treks-data';
import TreksExplorer from '@/components/treks/TreksExplorer';

const SPRING_SLUGS = [
  'kuari-pass',
  'pangarchulla',
  'har-ki-dun',
  'ali-bedni-bugyal'
];

export const metadata = {
  title: 'Spring Season Treks — Himalayan Ibex',
  description: 'Explore our carefully curated spring season treks like Kuari Pass, Pangarchulla, and Har Ki Dun.',
  alternates: { canonical: 'https://himalayanibex.com/spring' },
  openGraph: {
    title: 'Spring Season Treks | Himalayan Ibex',
    description: 'Explore our carefully curated spring season treks like Kuari Pass, Pangarchulla, and Har Ki Dun.',
    url: 'https://himalayanibex.com/spring',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spring Season Treks | Himalayan Ibex',
    description: 'Explore our carefully curated spring season treks.',
  },
};

export default function SpringPage() {
  const filteredTreks = TREKS.filter(t => SPRING_SLUGS.includes(t.slug));
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
