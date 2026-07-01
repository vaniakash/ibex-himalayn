import fs from 'fs';
import path from 'path';
import TrailMomentsClient from './TrailMomentsClient';

export const metadata = {
  title: 'Trail Moments | Himalayan Ibex',
  description: 'A visual journey through the majestic Himalayas. See moments captured by our trekkers and guides.',
  alternates: { canonical: 'https://himalayanibex.com/trail-moments' },
  openGraph: {
    title: 'Trail Moments | Himalayan Ibex',
    description: 'A visual journey through the majestic Himalayas. See moments captured by our trekkers and guides.',
    url: 'https://himalayanibex.com/trail-moments',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trail Moments | Himalayan Ibex',
    description: 'A visual journey through the majestic Himalayas.',
  },
};

export default function TrailMomentsPage() {
  const directoryPath = path.join(process.cwd(), 'public', 'assets', 'treks', 'treks');
  const files = fs.readdirSync(directoryPath);

  // Filter for valid image formats
  const imageFiles = files.filter(file => /\.(jpe?g|png|webp|gif)$/i.test(file));

  const items = imageFiles.map((file, index) => {
    // Generate pseudo-random deterministic heights for the masonry layout
    // We want heights between 400 and 800 to look natural
    const height = 400 + Math.floor(Math.abs(Math.sin(index * 12.5)) * 400);

    return {
      id: index.toString(),
      img: `/assets/treks/treks/${file}`,
      url: `/assets/treks/treks/${file}`,
      height: height,
    };
  });

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--color-sand)', paddingBottom: '4rem' }}>
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '3rem', fontFamily: 'var(--font-serif)', color: 'var(--color-forest)' }}>
          Trail Moments
        </h1>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem auto', color: 'var(--color-stone)', fontSize: '1.1rem', lineHeight: '1.6' }}>
          A glimpse into the raw beauty of the Himalayas. Every step on the trail is a memory captured. Browse our collection of handpicked moments.
        </p>
        <TrailMomentsClient items={items} />
      </div>
    </div>
  );
}
