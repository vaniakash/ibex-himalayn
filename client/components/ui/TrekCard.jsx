import Link from 'next/link';
import Image from 'next/image';
import { Clock, Mountain } from 'lucide-react';

const DIFFICULTY_LABELS = {
  Easy: 'Easy',
  Moderate: 'Moderate',
  Hard: 'Hard',
  Extreme: 'Extreme',
};

const DIFFICULTY_CLASS = {
  Easy: 'pill-easy',
  Moderate: 'pill-moderate',
  Hard: 'pill-hard',
  Extreme: 'pill-extreme',
};

export default function TrekCard({ trek, priority = false }) {
  const {
    slug,
    name,
    region,
    difficulty,
    duration,
    maxAltitudeFt,
    price,
    shortDesc,
    images,
  } = trek;

  const imgSrc = images?.[0]?.url || '/images/treks/kedarkantha.jpg';

  return (
    <Link href={`/treks/${slug}`} className="trek-card" title={name}>
      <div className="trek-card__image-wrap">
        <Image
          src={imgSrc}
          alt={`${name} — ${region}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          style={{ objectFit: 'cover' }}
        />
        <span className={`pill ${DIFFICULTY_CLASS[difficulty]}`} style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2 }}>
          {DIFFICULTY_LABELS[difficulty]}
        </span>
      </div>
      <div className="trek-card__body">
        <span className="trek-card__region">{region}</span>
        <h3 className="trek-card__title">{name}</h3>
        <p className="trek-card__desc">{shortDesc}</p>
        
        <div className="trek-card__stats">
          <div className="trek-card__stat-item">
            <Clock size={14} className="stat-icon" />
            <span>{duration} Days</span>
          </div>
          <div className="trek-card__stat-item">
            <Mountain size={14} className="stat-icon" />
            <span>{maxAltitudeFt?.toLocaleString() || '—'} ft</span>
          </div>
        </div>

        <div className="trek-card__footer">
          <div className="trek-card__price">
            <span className="price-label">From</span>
            <span className="price-value">₹{price?.toLocaleString()}</span>
          </div>
          <span className="btn btn-amber btn-sm trek-card__action">
            View Trek
          </span>
        </div>
      </div>
    </Link>
  );
}
