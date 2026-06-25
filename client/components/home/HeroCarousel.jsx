'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './HeroCarousel.module.css';

export default function HeroCarousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // Slightly longer for readability
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <>
      <section className={styles.heroSection} aria-label="Hero section">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={styles.heroBackground}
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: index === currentIndex ? 1 : 0
          }}
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            priority={index === 0}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 40%',
            }}
          />
        </div>
      ))}

      {/* Dark Overlay for Readability */}
      <div className={styles.overlay} aria-hidden="true"></div>

      {/* Content Block */}
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroTextWrapper} key={currentIndex}>
          <h1 className={styles.headline}>
            {currentSlide.heading}
          </h1>
          <p className={styles.description}>
            {currentSlide.description}
          </p>
          
          <div className={styles.ctaWrapper}>
            <Link href={currentSlide.ctaLink || "/treks"} className={styles.ctaButton}>
              {currentSlide.ctaText}
            </Link>
            <div className={styles.trustBadge}>
              {currentSlide.trustBadge}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className={styles.navigation}>
        <button className={styles.navButton} onClick={prevSlide} aria-label="Previous Slide">
          <ChevronLeft size={28} />
        </button>
        <button className={styles.navButton} onClick={nextSlide} aria-label="Next Slide">
          <ChevronRight size={28} />
        </button>
      </div>

      </section>

      {/* Bottom Announcement Bar */}
      <div className={styles.announcementBar}>
        <p className={styles.announcementText}>
          <strong>📍 Trending This Season:</strong> Kedarkantha Trek | Har Ki Dun Trek | Valley of Flowers Trek | Hampta Pass Trek
        </p>
      </div>
    </>
  );
}
