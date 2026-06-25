import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';
import './ArticlesSection.css';

const ARTICLES = [
  {
    id: 1,
    title: 'Kedarkantha Trek Complete Guide 2026',
    date: 'Oct 12, 2025',
    image: 'https://res.cloudinary.com/dirsimqmr/image/upload/v1782282445/treks/kedarkantha/kndgasf92iqmhw8fqwr1.jpg',
    category: 'Guides',
    link: '/blog/kedarkantha-trek-complete-guide-2026'
  },
  {
    id: 2,
    title: 'Valley of Flowers Trek: Best Time to Visit',
    date: 'Sep 24, 2025',
    image: 'https://res.cloudinary.com/dirsimqmr/image/upload/v1782282755/treks/valley-of-flowers/r3jvcdxuohkue2uw0r24.jpg',
    category: 'Seasonal',
    link: '/blog/valley-of-flowers-trek-best-time-to-visit'
  },
  {
    id: 3,
    title: 'How to Prepare for Your First Himalayan Trek',
    date: 'Aug 15, 2025',
    image: 'https://res.cloudinary.com/dirsimqmr/image/upload/v1782291404/treks/hampta-pass/sqs13djsw1xm97cebnob.jpg',
    category: 'Preparation',
    link: '/blog/how-to-prepare-for-your-first-himalayan-trek'
  },
  {
    id: 4,
    title: 'Essential Trekking Packing List for Beginners',
    date: 'Jul 08, 2025',
    image: 'https://res.cloudinary.com/dirsimqmr/image/upload/v1782209546/treks/lkryvlrdced02uedn5j7.jpg',
    category: 'Gear',
    link: '/blog/essential-trekking-packing-list-for-beginners'
  }
];

export default function ArticlesSection() {
  return (
    <section className="articles-section section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="articles-header">
            <div>
              <span className="section-label">LATEST ARTICLES</span>
              <h2 className="section-heading">Trekking Insights & Guides</h2>
            </div>
            <Link href="#" className="articles-view-all">View All Articles &rarr;</Link>
          </div>
        </ScrollReveal>

        <div className="articles-grid">
          {ARTICLES.map((article, idx) => (
            <ScrollReveal key={article.id} delay={idx * 0.15} className="article-reveal-wrapper">
              <Link href={article.link} className="article-card">
                <div className="article-img-wrap">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <span className="article-category">{article.category}</span>
                </div>
                <div className="article-content">
                  <span className="article-date">{article.date}</span>
                  <h3 className="article-title">{article.title}</h3>
                  <div className="article-read-more">Read Article &rarr;</div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
