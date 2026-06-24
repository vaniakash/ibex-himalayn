import Image from 'next/image';
import { notFound } from 'next/navigation';
import { TREKS, TREKS_MAP } from '@/lib/treks-data';
import TrekDetailClient from '@/components/treks/TrekDetailClient';
import Link from 'next/link';

export const revalidate = 3600;

export async function generateStaticParams() {
  return TREKS.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const trek = TREKS_MAP[slug];
  if (!trek) return {};
  return {
    title: `${trek.name} Trek 2026 | IBEX Himalayan`,
    description: trek.shortDesc,
    openGraph: {
      title: `${trek.name} Trek | IBEX`,
      description: trek.shortDesc,
      images: [{ url: trek.images[0]?.url, width: 1200, height: 800 }],
    },
  };
}

export default async function TrekDetailPage({ params }) {
  const { slug } = await params;
  const trek = TREKS_MAP[slug];
  if (!trek) notFound();

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* ── HERO ── */}
      <div className="detail-hero">
        <div className="detail-hero-img-wrap">
          <Image
            src={trek.images[0]?.url || '/assets/hikers.png'}
            alt={trek.name}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          {/* Breadcrumb */}
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.65)', marginBottom: '0.5rem', display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/treks" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Treks</Link>
            <span>›</span>
            <span style={{ color: '#fff' }}>{trek.name}</span>
          </div>
          <div className="detail-hero-region">{trek.region} · {trek.state}</div>
          <h1 className="detail-hero-title">{trek.name}</h1>
          <p className="detail-hero-subtitle">{trek.shortDesc}</p>
        </div>
        <div className="detail-hero-actions">
          <a href="#photos" className="detail-hero-btn">
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
            Photos
          </a>
          <a href="#booking" className="detail-hero-btn">
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            Request Callback
          </a>
        </div>
      </div>

      {/* ── CLIENT COMPONENT (quick info + body + spirit) ── */}
      <TrekDetailClient trek={trek} />
    </div>
  );
}
