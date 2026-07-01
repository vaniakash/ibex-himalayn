import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Pilgrimages | Himalayan Ibex',
  description: 'Sacred journeys through the Himalayas. Guided pilgrimages to Char Dham, Kedarnath, Badrinath, and more.',
  alternates: { canonical: 'https://himalayanibex.com/pilgrimages' },
  openGraph: {
    title: 'Pilgrimages | Himalayan Ibex',
    description: 'Sacred journeys through the Himalayas. Guided pilgrimages to Char Dham, Kedarnath, Badrinath, and more.',
    url: 'https://himalayanibex.com/pilgrimages',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pilgrimages | Himalayan Ibex',
    description: 'Sacred journeys through the Himalayas.',
  },
};

export default function PilgrimagesPage() {
  return (
    <main className="section-padding" style={{ background: 'var(--color-snow)', minHeight: '100vh', paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="headline-italic" style={{ marginBottom: '1rem', textAlign: 'center' }}>Pilgrimages</h1>
        <p className="body-text" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-slate)', fontSize: '1.2rem', fontWeight: 500 }}>
          Sacred Journeys Through the Himalayas
        </p>

        <div className="body-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <p>The Himalayas are more than towering peaks and scenic trails—they are the spiritual heart of India. For thousands of years, pilgrims have travelled through these mountains seeking peace, devotion, and a deeper connection with nature and faith.</p>
          <p>At Himalayan Ibex, we organize well-planned pilgrimage journeys that combine spiritual significance with comfortable travel, experienced local support, and responsible tourism. Whether you’re visiting ancient temples, sacred rivers, or high-altitude shrines, we ensure every journey is safe, organized, and memorable.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Our Pilgrimage Experiences</h2>
          <p>We offer guided pilgrimages to some of the most revered destinations in the Indian Himalayas, including:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Char Dham Yatra</li>
            <li>Kedarnath</li>
            <li>Badrinath</li>
            <li>Gangotri</li>
            <li>Yamunotri</li>
            <li>Hemkund Sahib</li>
            <li>Tungnath Temple</li>
            <li>Adi Kailash</li>
            <li>Om Parvat</li>
            <li>Panch Kedar (Selected Routes)</li>
          </ul>
          <p>Each pilgrimage is carefully planned with comfortable stays, reliable transportation, and knowledgeable local support.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Why Travel With Himalayan Ibex?</h2>
          
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-pine)', marginTop: '1rem' }}>Experienced Team</h3>
          <p>Our team has extensive experience organizing Himalayan journeys, ensuring smooth logistics from arrival to departure.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-pine)', marginTop: '1rem' }}>Comfortable Travel</h3>
          <p>We arrange reliable transportation, comfortable accommodations, and well-planned itineraries to minimize travel stress.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-pine)', marginTop: '1rem' }}>Safety First</h3>
          <p>Your safety remains our highest priority. We monitor weather conditions, road updates, and participant well-being throughout the journey.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-pine)', marginTop: '1rem' }}>Local Expertise</h3>
          <p>Our local guides provide valuable insights into the history, traditions, and cultural significance of each destination.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>What to Expect</h2>
          <p>Every pilgrimage package may include:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Pickup & Drop Services</li>
            <li>Comfortable Hotel Accommodation</li>
            <li>Daily Meals (as per itinerary)</li>
            <li>Local Transportation</li>
            <li>Experienced Tour Coordinator</li>
            <li>Temple Visit Assistance</li>
            <li>Emergency Support Throughout the Journey</li>
          </ul>
          <p>Inclusions may vary depending on the pilgrimage.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Best Time for Pilgrimages</h2>
          <p>Most Himalayan pilgrimage routes are open between May and October, depending on weather conditions and official temple opening schedules.</p>
          <p>The ideal months are:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li><strong>May – June:</strong> Pleasant weather and temple opening season</li>
            <li><strong>September – October:</strong> Clear skies, fewer crowds, and beautiful mountain views</li>
          </ul>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Travel Responsibly</h2>
          <p>The Himalayan pilgrimage routes pass through fragile mountain ecosystems and culturally significant regions. We encourage every traveler to:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Respect local customs and traditions.</li>
            <li>Dress appropriately at religious sites.</li>
            <li>Avoid littering.</li>
            <li>Use reusable water bottles.</li>
            <li>Help preserve the sanctity of these sacred places.</li>
          </ul>
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--color-pine)', color: 'white', borderRadius: '12px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Begin Your Sacred Journey</h2>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
            Whether you’re seeking spiritual fulfillment, cultural exploration, or a peaceful escape into the Himalayas, Himalayan Ibex is committed to making your pilgrimage safe, meaningful, and unforgettable.
          </p>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9, fontStyle: 'italic', fontSize: '1.1rem' }}>
            Walk the ancient paths. Experience timeless traditions. Discover the spiritual soul of the Himalayas with Himalayan Ibex.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', background: 'var(--color-rust)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}>
            Plan Your Pilgrimage
          </Link>
        </div>
      </div>
    </main>
  );
}
