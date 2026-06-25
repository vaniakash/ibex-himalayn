import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Sun } from 'lucide-react';
import styles from './FixedDepartureCard.module.css';

export default function FixedDepartureCard({ trek }) {
  const imgSrc = trek.image || '/images/treks/kedarkantha.jpg';

  // Determine badge color class based on difficulty text
  let badgeClass = styles.badgeModerate;
  const diffLower = (trek.difficulty || '').toLowerCase();
  if (diffLower.includes('easy')) badgeClass = styles.badgeEasy;
  if (diffLower.includes('difficult') && !diffLower.includes('easy')) badgeClass = styles.badgeDifficult;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imgSrc}
          alt={trek.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: 'cover' }}
        />
        
        <div className={styles.badgeContainer}>
          <span className={`${styles.badge} ${badgeClass}`}>
            {trek.difficulty}
          </span>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.duration}>
          <Sun size={14} color="#f59e0b" /> {trek.days} Days
        </div>
        
        <h3 className={styles.title}>
          {trek.name}
        </h3>
        
        <div className={styles.actionRow}>
          <a href="tel:+919876543210" className={styles.secondaryBtn} aria-label="Call us">
            <Phone size={14} /> Call
          </a>
          <a href="https://wa.me/919876543210" className={`${styles.secondaryBtn} ${styles.whatsappBtn}`} target="_blank" rel="noreferrer" aria-label="WhatsApp us">
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
        
        <Link href={trek.link} className={styles.primaryCta}>
          View Trek Details
        </Link>
      </div>
    </div>
  );
}
