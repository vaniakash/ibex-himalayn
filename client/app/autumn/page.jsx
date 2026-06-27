import { Suspense } from 'react';
import { TREKS } from '@/lib/treks-data';
import TreksExplorer from '@/components/treks/TreksExplorer';

const AUTUMN_SLUGS = [
  'rupin-pass',
  'phulara-ridge'
];

export const metadata = {
  title: 'Autumn Season Treks — Himalayan Ibex',
  description: 'Explore our carefully curated autumn season treks like Rupin Pass and Phulara Ridge.',
};

export default function AutumnPage() {
  const filteredTreks = TREKS.filter(t => AUTUMN_SLUGS.includes(t.slug));
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
