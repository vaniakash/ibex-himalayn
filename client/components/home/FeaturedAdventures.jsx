'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './FeaturedAdventures.module.css';
import FeaturedAdventureCard from './FeaturedAdventureCard';

const TRENDING_TREKS = [
  { name: 'Kedarkantha Trek', subtitle: 'Ultimate Winter Summit Trek', image: '/assets/BANNER/KEDARKANTA.jpg', link: '/treks/kedarkantha' },
  { name: 'Valley of Flowers Trek', subtitle: 'UNESCO World Heritage', image: '/assets/BANNER/VALLEY.jpg', link: '/treks/valley-of-flowers' },
  { name: 'Kashmir Great Lakes Trek', subtitle: 'India’s Most Beautiful Lake Trek', image: '/assets/BANNER/KASMIR .webp', link: '/treks/kashmir-great-lakes' },
  { name: 'Hampta Pass Trek', subtitle: 'Ultimate Crossover Adventure', image: '/assets/BANNER/hampta-pass-1.jpg', link: '/treks/hampta-pass' },
  { name: 'Har Ki Dun Trek', subtitle: 'Valley of Gods', image: '/assets/BANNER/HARKIDUNTRE.webp', link: '/treks/har-ki-dun' },
  { name: 'Gaumukh Tapovan Trek', subtitle: 'Spiritual Glacier Adventure', image: '/assets/BANNER/GOMUKH.webp', link: '/treks/gaumukh-tapovan' },
  { name: 'Goechala Trek', subtitle: 'Gateway to Kanchenjunga', image: '/assets/BANNER/Goechala.jpeg', link: '/treks/goechala' },
  { name: 'Deoriatal Chandrashila Trek', subtitle: 'Best Sunrise Summit Trek', image: '/assets/BANNER/Deoriatal Chandrashil.webp', link: '/treks/deoriatal-chandrashila' },
  { name: 'Ali Bedni Bugyal Trek', subtitle: 'India’s Largest Twin Meadows', image: '/assets/BANNER/Ali Bedni Bugyal .jpg', link: '/treks/ali-bedni-bugyal' },
];

const SEASON_TREKS = [
  { name: 'Winter Season Treks', subtitle: 'Snow & Frost', image: '/assets/BANNER/WINTER/WINTER.webp', link: '/winter' },
  { name: 'Spring Season Treks', subtitle: 'Blooming Flowers', image: '/assets/BANNER/WINTER/Himalayan rhododendron forest.webp', link: '/spring' },
  { name: 'Summer Season Treks', subtitle: 'High-Altitude Trails', image: '/assets/BANNER/WINTER/High altitude Himalayan trek .webp', link: '/summer' },
  { name: 'Monsoon Season Treks', subtitle: 'Lush Greenery', image: '/assets/BANNER/WINTER/Valley of Flowers monsoon .webp', link: '/monsoon' },
  { name: 'Autumn Season Treks', subtitle: 'Clear Skies & Views', image: '/assets/BANNER/WINTER/Autumn Himalayas landscape.jpeg', link: '/autumn' },
];

const SPIRITUAL_TREKS = [
  { name: 'Gaumukh Tapovan Trek', subtitle: 'The Source of the Ganga', image: '/assets/BANNER/PILGRIM/Gaumukh Tapovan.webp', link: '/treks/gaumukh-tapovan' },
  { name: 'Har Ki Dun Trek', subtitle: 'Valley of Gods', image: '/assets/BANNER/HARKIDUNTRE.webp', link: '/treks/har-ki-dun' },
  { name: 'Kedarnath Trek', subtitle: 'One of Hinduism’s Holiest Pilgrimages', image: '/assets/BANNER/PILGRIM/Kedarnath .jpg', link: '/treks/kedarnath' },

  { name: 'Hemkund Sahib Trek', subtitle: 'Sacred Sikh Pilgrimage', image: '/assets/BANNER/PILGRIM/Hemkund Sahib.jpg', link: '/treks/hemkund-sahib' },
  { name: 'Tungnath & Chandrashila', subtitle: 'Home to the Highest Shiva Temple', image: '/assets/BANNER/PILGRIM/Tungnath.jpeg', link: '/treks/tungnath' },

  { name: 'Panch Kedar Trek', subtitle: 'The Sacred Journey of Lord Shiva', image: '/assets/BANNER/PILGRIM/ Panch Kedar .webp', link: '/treks/panch-kedar' },
  { name: 'Kedartal Trek', subtitle: 'Shiva’s Emerald Lake', image: '/assets/BANNER/PILGRIM/Kedartal lake.webp', link: '/treks/kedartal' },
];

export default function FeaturedAdventures() {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState('trending');

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getActiveData = () => {
    if (activeTab === 'season') return SEASON_TREKS;
    if (activeTab === 'spiritual') return SPIRITUAL_TREKS;
    return TRENDING_TREKS;
  };
  
  const currentData = getActiveData();

  return (
    <section style={{ padding: '4rem 0', background: '#fff' }} aria-label="Featured Adventures">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Adventures</h2>
        <div className={styles.redLine}></div>

        <div className={styles.filterContainer}>
          <button 
            className={`${styles.filterPill} ${activeTab === 'trending' ? styles.active : ''}`}
            onClick={() => setActiveTab('trending')}
          >
            🔥 Trending Treks
          </button>
          <button 
            className={`${styles.filterPill} ${activeTab === 'season' ? styles.active : ''}`}
            onClick={() => setActiveTab('season')}
          >
            🏔️ Treks by Season
          </button>
          <button 
            className={`${styles.filterPill} ${activeTab === 'spiritual' ? styles.active : ''}`}
            onClick={() => setActiveTab('spiritual')}
          >
            🛕 Spiritual Treks
          </button>
        </div>

        <div className={styles.carouselWrapper}>
          <button 
            className={`${styles.navButton} ${styles.navPrev}`}
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          <div className={styles.carousel} ref={scrollRef}>
            {currentData.map((adventure, i) => (
              <FeaturedAdventureCard key={`${activeTab}-${i}`} adventure={adventure} />
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

