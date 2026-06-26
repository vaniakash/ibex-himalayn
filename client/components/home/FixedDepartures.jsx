'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './FixedDepartures.module.css';
import FixedDepartureCard from './FixedDepartureCard';

const FIXED_DEPARTURES = [
  { name: 'Kedarkantha Trek', days: 6, difficulty: 'Easy to Moderate', link: '/treks/kedarkantha', image: '/assets/BANNER/KEDARKANTA.jpg' },
  { name: 'Hampta Pass Trek', days: 5, difficulty: 'Moderate', link: '/treks/hampta-pass', image: '/assets/BANNER/hampta-pass-1.jpg' },
  { name: 'Har Ki Dun Trek', days: 7, difficulty: 'Moderate', link: '/treks/har-ki-dun', image: '/assets/BANNER/HARKIDUNTRE.webp' },
  { name: 'Bali Pass Trek', days: 8, difficulty: 'Difficult', link: '/treks/bali-pass', image: '/assets/treks/mountain pass Himalayas.jpg' },
  { name: 'Buran Ghati Trek', days: 7, difficulty: 'Moderate to Difficult', link: '/treks/buran-ghati', image: '/assets/treks/Ultimate Challenges.avif' },
  { name: 'Kashmir Great Lakes Trek', days: 7, difficulty: 'Moderate', link: '/treks/kashmir-great-lakes', image: '/assets/BANNER/KASMIR .webp' },
  { name: 'Valley of Flowers Trek', days: 6, difficulty: 'Easy to Moderate', link: '/treks/valley-of-flowers', image: '/assets/BANNER/VALLEY.jpg' },
  { name: 'Bhrigu Lake Trek', days: 3, difficulty: 'Moderate', link: '/treks/bhrigu-lake', image: '/assets/treks/high altitude himalayan peaks.jpg' },
  { name: 'Chopta Chandrashila Trek', days: 3, difficulty: 'Easy to Moderate', link: '/treks/chopta-chandrashila', image: '/assets/BANNER/Deoriatal Chandrashil.webp' },
  { name: 'Gaumukh Tapovan Trek', days: 8, difficulty: 'Moderate to Difficult', link: '/treks/gaumukh-tapovan', image: '/assets/BANNER/GOMUKH.webp' },
  { name: 'Nag Tibba Trek', days: 2, difficulty: 'Easy to Moderate', link: '/treks/nag-tibba', image: '/assets/treks/snow covered himalayan trekking trail.webp' },
  { name: 'Ali Bedni Bugyal Trek', days: 6, difficulty: 'Moderate', link: '/treks/ali-bedni-bugyal', image: '/assets/BANNER/Ali Bedni Bugyal .jpg' },
];

export default function FixedDepartures() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Card width (300px) + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section style={{ padding: '3rem 0 5rem', background: '#f9f9f9' }} aria-label="Fixed Departures">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Recommended Fixed Departure Treks</h2>
        <div className={styles.redLine}></div>

        <div className={styles.carouselWrapper}>
          <button 
            className={`${styles.navButton} ${styles.navPrev}`}
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          <div className={styles.carousel} ref={scrollRef}>
            {FIXED_DEPARTURES.map((trek, i) => (
              <FixedDepartureCard key={i} trek={trek} />
            ))}
          </div>

          <button 
            className={`${styles.navButton} ${styles.navNext}`}
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
