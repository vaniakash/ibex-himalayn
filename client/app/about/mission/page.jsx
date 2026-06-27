import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Our Mission | Himalayan Ibex',
  description: 'Inspiring responsible adventures in the Himalayas through safe, professional, and unforgettable trekking experiences.',
};

export default function MissionPage() {
  return (
    <main className="section-padding" style={{ background: 'var(--color-snow)', minHeight: '100vh', paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="headline-italic" style={{ marginBottom: '1rem', textAlign: 'center' }}>Our Mission</h1>
        <p className="body-text" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-slate)', fontSize: '1.2rem', fontWeight: 500 }}>
          Inspiring Responsible Adventures in the Himalayas
        </p>

        <div className="body-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <p>At Himalayan Ibex, our mission is to make the Himalayas accessible through safe, responsible, and unforgettable trekking experiences. We believe that every journey into the mountains should inspire confidence, deepen respect for nature, and create memories that last a lifetime.</p>
          <p>We are committed to introducing people of all experience levels to the beauty of the Himalayas while maintaining the highest standards of safety, professionalism, and environmental responsibility.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Our Purpose</h2>
          <p>Our purpose is simple—to help people discover the mountains in the right way.</p>
          <p>Every trek is designed to encourage personal growth, build confidence, and create meaningful connections with nature, local communities, and fellow adventurers.</p>
          <p>We believe trekking is more than reaching a summit. It is about the journey, the lessons learned on the trail, and the appreciation developed for the natural world.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Safety Above Everything</h2>
          <p>Nothing is more important than the well-being of our trekkers.</p>
          <p>Every Himalayan Ibex adventure is led by experienced trek leaders following carefully planned itineraries, daily health monitoring, and established mountain safety protocols. We continuously assess weather, trail conditions, and participant health to ensure every decision prioritizes safety.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Responsible Tourism</h2>
          <p>We believe the Himalayas should be preserved for future generations.</p>
          <p>Our commitment includes:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Following Leave No Trace principles</li>
            <li>Minimizing environmental impact</li>
            <li>Supporting local communities</li>
            <li>Respecting wildlife and mountain ecosystems</li>
            <li>Promoting sustainable trekking practices</li>
          </ul>
          <p>Every trekker becomes a partner in protecting these fragile landscapes.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Creating Meaningful Experiences</h2>
          <p>We don’t just organize treks—we create journeys that inspire.</p>
          <p>Whether it is watching the first sunrise over snow-covered peaks, crossing alpine meadows, camping beneath star-filled skies, or sharing stories around a warm meal, every experience is thoughtfully crafted to leave a lasting impression.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Building a Community</h2>
          <p>Himalayan Ibex is more than a trekking company.</p>
          <p>We are building a community of explorers who value adventure, teamwork, resilience, and respect for nature. Every trek brings together people from different backgrounds with one shared passion—the mountains.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Our Promise</h2>
          <p>When you trek with Himalayan Ibex, you can expect:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Professionally planned itineraries</li>
            <li>Safety-first operations</li>
            <li>Experienced trek leaders</li>
            <li>High-quality trekking experiences</li>
            <li>Honest guidance and transparent communication</li>
            <li>Respect for nature and local culture</li>
          </ul>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Our Vision</h2>
          <p>To become one of India’s most trusted trekking organizations by delivering exceptional mountain experiences while promoting sustainable tourism, responsible exploration, and a lifelong love for the Himalayas.</p>
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--color-pine)', color: 'white', borderRadius: '12px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Explore Beyond. Trek Responsibly. Return Inspired.</h2>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
            Every trail tells a story. Our mission is to help you experience it safely, responsibly, and with a deeper connection to the mountains than ever before.
          </p>
          <Link href="/treks" style={{ display: 'inline-block', background: 'var(--color-rust)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}>
            Find Your Next Adventure
          </Link>
        </div>
      </div>
    </main>
  );
}
