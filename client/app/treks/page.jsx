import { Suspense } from 'react';
import { TREKS } from '@/lib/treks-data';
import TreksExplorer from '@/components/treks/TreksExplorer';

export const metadata = {
  title: 'Find Your Trek — Himalayan Ibex',
  description:
    'Browse all 8 IBEX treks across Uttarakhand, Himachal Pradesh, Sikkim and Ladakh. Filter by region, difficulty, and duration.',
};

export default function TreksPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', background: '#fcfaf5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1a1a', paddingTop: '80px' }}>
        <p style={{ fontFamily: 'monospace', letterSpacing: '0.1em', opacity: 0.6 }}>LOADING TREKS…</p>
      </div>
    }>
      <TreksExplorer allTreks={TREKS} />
    </Suspense>
  );
}
