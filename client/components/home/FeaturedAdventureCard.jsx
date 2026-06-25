import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedAdventureCard({ adventure }) {
  // Using a fallback placeholder if images aren't present
  const imgSrc = adventure.image || '/images/treks/kedarkantha.jpg';

  return (
    <Link href={adventure.link} style={{ display: 'block', minWidth: '300px', width: '300px', height: '220px', scrollSnapAlign: 'start', position: 'relative', borderRadius: '16px', overflow: 'hidden' }}>
      <Image
        src={imgSrc}
        alt={adventure.name}
        fill
        sizes="300px"
        style={{ objectFit: 'cover' }}
      />
      
      {/* Title Label */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, background: 'var(--color-amber)', color: '#fff', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.95rem', fontWeight: 600, whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(214, 31, 38, 0.3)' }}>
        {adventure.name}
      </div>

      {/* Subtitle bottom banner */}
      <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '0.75rem', textAlign: 'center', zIndex: 2, fontSize: '0.8rem', fontWeight: 500 }}>
        {adventure.subtitle}
      </div>
    </Link>
  );
}
