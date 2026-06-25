import Image from 'next/image';
import Link from 'next/link';
import TrekCard from '@/components/ui/TrekCard';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import NewsletterForm from '@/components/home/NewsletterForm';
import FaqSection from '@/components/home/FaqSection';
import FolderGrid from '@/components/home/FolderGrid';
import ArticlesSection from '@/components/home/ArticlesSection';
import ScrollReveal from '@/components/ui/ScrollReveal';
import HeroCarousel from '@/components/home/HeroCarousel';
import FeaturedAdventures from '@/components/home/FeaturedAdventures';
import FixedDepartures from '@/components/home/FixedDepartures';
import { Map, Users, ShieldCheck, Leaf } from 'lucide-react';

export const metadata = {
  title: 'IBEX — Hand-crafted Himalayan Treks Since 2014',
  description:
    'Trek Where Few Dare. IBEX offers premium guided expeditions in the Indian Himalayas — Uttarakhand, Himachal, Sikkim & Ladakh. Small groups, certified guides.',
};


const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dirsimqmr/image/upload/v1782209541/treks/neiwlde1bsonpdwmblog.jpg",
  "https://res.cloudinary.com/dirsimqmr/image/upload/v1782209543/treks/hqwjjncnv38llluh6qzq.jpg",
  "https://res.cloudinary.com/dirsimqmr/image/upload/v1782209545/treks/ax4cpza4panioa6axgeb.jpg",
  "https://res.cloudinary.com/dirsimqmr/image/upload/v1782209546/treks/lkryvlrdced02uedn5j7.jpg",
  "https://res.cloudinary.com/dirsimqmr/image/upload/v1782209548/treks/gnjaxtffpplrnhqcnbfl.jpg",
  "https://res.cloudinary.com/dirsimqmr/image/upload/v1782209550/treks/nhemf5vxrmqk0xs2ru1a.jpg",
  "https://res.cloudinary.com/dirsimqmr/image/upload/v1782209552/treks/zfn8iiytjzdjm0wnoptd.jpg",
  "https://res.cloudinary.com/dirsimqmr/image/upload/v1782209557/treks/wkpqcxwbgyjhvetr2ttu.jpg",
  "https://res.cloudinary.com/dirsimqmr/image/upload/v1782209559/treks/edpomnnqzmhqinidz9ao.jpg",
  "https://res.cloudinary.com/dirsimqmr/image/upload/v1782209560/treks/dnvlncoogw5dielhafab.jpg",
  "https://res.cloudinary.com/dirsimqmr/image/upload/v1782209562/treks/qowmac7auxoyjcqz5orm.jpg",
  "https://res.cloudinary.com/dirsimqmr/image/upload/v1782209564/treks/sqghex4kgfa74y2cw4qe.jpg"
];

const WHY_IBEX = [
  {
    image: '/assets/why ibex/first.png',
    title: 'Born in the Heart of the Himalayas',
    desc: 'Founded by Alok Rawat from Sankri, Uttarakhand, Himalayan Ibex is built on local knowledge, mountain traditions, and a deep love for the Himalayas. We don’t just operate in the mountains—we belong to them.',
  },
  {
    image: '/assets/why ibex/professional.png',
    title: 'Safety Above Everything',
    desc: 'Every trek is planned with safety as the top priority. From experienced trek leaders and first-aid preparedness to weather monitoring and route planning, we ensure every adventure is conducted responsibly and professionally.',
  },
  {
    image: '/assets/why ibex/d.png',
    title: 'Authentic Himalayan Experiences',
    desc: 'Our treks go beyond popular trails. We connect trekkers with Himalayan culture, local communities, breathtaking landscapes, and unforgettable moments that showcase the true spirit of mountain life.',
  },
  {
    image: '/assets/why ibex/walking.png',
    title: 'Supporting Local Communities',
    desc: 'We proudly work with local guides, homestays, cooks, and support staff. Every trek helps create opportunities for mountain communities while promoting sustainable and responsible tourism.',
  },
  {
    image: '/assets/why ibex/solo.png',
    title: 'Journeys That Transform You',
    desc: 'A trek is more than reaching a summit. It is about building confidence, embracing challenges, discovering inner strength, and creating memories that stay with you long after the journey ends.',
  },
];

const HERO_SLIDES = [
  {
    image: '/assets/treks/treks/WhatsApp Image 2026-06-23 at 13.23.24.jpeg',
    heading: 'Discover the Himalayas, One Trail at a Time',
    description: 'Explore handpicked Himalayan treks led by experienced trek leaders. From beginner-friendly adventures to high-altitude expeditions, experience breathtaking landscapes with safety, sustainability, and unforgettable memories at every step.',
    ctaText: 'Explore Treks',
    ctaLink: '/treks',
    trustBadge: '⭐ Trusted by 1,000+ Trekkers • Expert Trek Leaders • Safety First'
  },
  {
    image: '/assets/BANNER/KEDARKANTA.jpg',
    heading: 'Experience the Magic of Kedarkantha',
    description: 'Witness snow-covered forests, frozen lakes, and breathtaking summit views on one of India’s most loved winter treks. Perfect for beginners seeking their first Himalayan adventure.',
    ctaText: 'Explore Kedarkantha Trek',
    ctaLink: '/treks/kedarkantha',
    trustBadge: '⭐ Expert Trek Leaders • Safety First • Beginner Friendly'
  },
  {
    image: '/assets/BANNER/HARKIDUN.webp',
    heading: 'Walk Through the Valley of Gods',
    description: 'Journey through ancient Himalayan villages, alpine meadows, and pristine forests to discover the timeless beauty of Har Ki Dun.',
    ctaText: 'Explore Har Ki Dun Trek',
    ctaLink: '/treks/har-ki-dun',
    trustBadge: '⭐ Local Guides • Sustainable Trekking • Small Groups'
  },
  {
    image: '/assets/BANNER/VALLEY.jpg',
    heading: 'Where Every Trail Blooms',
    description: 'Discover the UNESCO World Heritage valley filled with thousands of vibrant alpine flowers, waterfalls, and spectacular Himalayan landscapes.',
    ctaText: 'Explore Valley of Flowers',
    ctaLink: '/treks/valley-of-flowers',
    trustBadge: '🌸 Best Monsoon Trek • Eco-Friendly • Expert Support'
  },
  {
    image: '/assets/BANNER/HAMPTAPASS.jpg',
    heading: 'Cross the Himalayas, One Pass at a Time',
    description: 'Experience the dramatic transition from lush green valleys to the rugged deserts of Spiti on one of the Himalayas’ most scenic crossover treks.',
    ctaText: 'Explore Hampta Pass Trek',
    ctaLink: '/treks/hampta-pass',
    trustBadge: '🏔️ Certified Trek Leaders • Safe Expeditions • Lifetime Memories'
  }
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroCarousel slides={HERO_SLIDES} />


      {/* FEATURED ADVENTURES */}
      <FeaturedAdventures />

      {/* FIXED DEPARTURES */}
      <FixedDepartures />

      {/* WHY IBEX */}
      <section
        id="our-story"
        className="section-padding"
        style={{ background: '#fcfaf5', borderTop: '1px solid #e5e5e5' }}
        aria-label="5 Reasons Why Himalayan Ibex"
      >
        <div className="container" style={{ maxWidth: '1400px' }}>
          <ScrollReveal>
            <h2 className="headline-display" style={{ marginBottom: '3rem', fontSize: '2.5rem', color: '#1a1a1a', borderBottom: '2px solid #e5e5e5', paddingBottom: '1rem' }}>
              5 Reasons Why Himalayan Ibex
            </h2>
          </ScrollReveal>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            {WHY_IBEX.map(({ image, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.1} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1a1a1a', lineHeight: '1.3', minHeight: '3em' }}>{title}</h3>
                <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                  <Image src={image} alt={title} fill loading="lazy" sizes="(max-width: 768px) 100vw, 20vw" style={{ objectFit: 'cover' }} />
                </div>
                <p style={{ fontSize: '0.85rem', color: '#4a4a4a', lineHeight: '1.6' }}>{desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding" style={{ background: 'var(--color-snow)' }} aria-label="Testimonials">
        <div className="container">
          <ScrollReveal>
            <span className="section-label" style={{ fontSize: '0.65rem' }}>TREKKER STORIES</span>
            <h2 className="section-heading" style={{ fontSize: '2.1rem', marginBottom: '2rem' }}>
              From the trail.
            </h2>
          </ScrollReveal>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* FAQ SECTION */}
      <FaqSection />

      {/* FOLDER SECTION */}
      <section className="section-padding" style={{ background: 'var(--color-snow)', textAlign: 'center' }} aria-label="Trek Resources">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">RESOURCES</span>
            <h2 className="section-heading" style={{ fontSize: 'var(--text-4xl)', marginBottom: '1rem' }}>
              Uncover The Magic
            </h2>
            <p className="headline-intro" style={{ marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
              Click the folder below to reveal some of our best captured moments from the Himalayas.
            </p>
          </ScrollReveal>
          
          <FolderGrid galleryImages={GALLERY_IMAGES} />
        </div>
      </section>

      {/* ARTICLES SECTION */}
      <ArticlesSection />

      {/* NEWSLETTER */}
      <section className="newsletter" aria-label="Newsletter subscription">
        <div className="container">
          <ScrollReveal>
            <h2 className="headline-display newsletter-heading">
              Get trek updates &amp; early access
            </h2>
            <p className="newsletter-sub">
              New routes, limited slots, and seasonal guides — straight to your inbox.
            </p>
          </ScrollReveal>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
