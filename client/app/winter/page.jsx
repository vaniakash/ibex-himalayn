import { Suspense } from 'react';
import { TREKS } from '@/lib/treks-data';
import TreksExplorer from '@/components/treks/TreksExplorer';

const WINTER_SLUGS = [
  'kedarkantha',
  'brahmatal',
  'dayara-bugyal',
  'sandakphu',
  'tungnath-chandrashila'
];

export const metadata = {
  title: 'Winter Season Treks — Himalayan Ibex',
  description: 'Explore our carefully curated winter season treks like Kedarkantha, Brahmatal, and Dayara Bugyal.',
};

export default function WinterPage() {
  const filteredTreks = TREKS.filter(t => WINTER_SLUGS.includes(t.slug));
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
