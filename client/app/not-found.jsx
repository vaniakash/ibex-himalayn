import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found | Himalayan Ibex',
  description: 'The page you are looking for does not exist. Explore our Himalayan treks or return to the homepage.',
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-snow, #fcfaf5)',
        paddingTop: '120px',
        paddingBottom: '4rem',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '600px', padding: '0 1.5rem' }}>
        {/* Big 404 */}
        <h1
          style={{
            fontSize: 'clamp(5rem, 15vw, 10rem)',
            fontFamily: 'var(--font-display, serif)',
            fontWeight: 700,
            color: 'var(--color-forest, #2d5016)',
            lineHeight: 1,
            marginBottom: '0.5rem',
            opacity: 0.15,
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            fontFamily: 'var(--font-display, serif)',
            fontWeight: 600,
            color: 'var(--color-night, #1a1a1a)',
            marginTop: '-2rem',
            marginBottom: '1rem',
          }}
        >
          Trail Not Found
        </h2>

        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--color-stone, #6b6b6b)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          Looks like this path doesn't lead anywhere. The page you're looking for may have been
          moved or no longer exists. Let's get you back on the trail.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              background: 'var(--color-forest, #2d5016)',
              color: '#fff',
              padding: '0.85rem 2rem',
              borderRadius: '4px',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'opacity 0.2s',
            }}
          >
            Return Home
          </Link>
          <Link
            href="/treks"
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: 'var(--color-forest, #2d5016)',
              padding: '0.85rem 2rem',
              borderRadius: '4px',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              border: '2px solid var(--color-forest, #2d5016)',
              transition: 'opacity 0.2s',
            }}
          >
            Explore Treks
          </Link>
        </div>

        {/* Popular treks */}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e5e5e5' }}>
          <p
            style={{
              fontSize: '0.7rem',
              fontFamily: 'var(--font-mono, monospace)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-stone, #6b6b6b)',
              marginBottom: '1rem',
            }}
          >
            Popular Treks
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { name: 'Kedarkantha', href: '/treks/kedarkantha' },
              { name: 'Valley of Flowers', href: '/treks/valley-of-flowers' },
              { name: 'Hampta Pass', href: '/treks/hampta-pass' },
              { name: 'Har Ki Dun', href: '/treks/har-ki-dun' },
            ].map((trek) => (
              <Link
                key={trek.href}
                href={trek.href}
                style={{
                  padding: '0.4rem 0.9rem',
                  background: '#fff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  color: 'var(--color-forest, #2d5016)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'border-color 0.2s',
                }}
              >
                {trek.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
