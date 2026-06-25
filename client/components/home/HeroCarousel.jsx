"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroCarousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="hero-image-wrap">
        {slides.map((slide, index) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt={`Hero background ${index + 1}`}
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center 40%",
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 1.5s ease-in-out",
              zIndex: index === currentIndex ? 1 : 0
            }}
          />
        ))}
        <div className="hero-overlay" aria-hidden="true" />
      </div>

      <div className="hero-content container">
        <div className="hero-text" key={currentIndex}>
          <h1 className="hero-headline">
            {slides[currentIndex].headline}
          </h1>
          <p className="hero-sub" style={{ color: '#FCD34D', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            {slides[currentIndex].sub}
          </p>
          <div className="hero-ctas">
            <Link href="/treks" className="btn btn-amber btn-lg" id="hero-explore-btn" style={{ fontWeight: 'bold' }}>
              {slides[currentIndex].ctaText}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
