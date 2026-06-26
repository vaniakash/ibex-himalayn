'use client';

import { useState, useCallback, useTransition } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import './treks-page.css';

const REGIONS = [
  'All', 
  'Uttarakhand', 
  'Himachal Pradesh', 
  'Lahaul and Spiti', 
  'Jammu & Kashmir', 
  'Sikkim', 
  'West Bengal', 
  'Chhattisgarh', 
  'Madhya Pradesh', 
  'Nepal', 
  'Georgia'
];

const DIFFICULTIES = ['All', 'Easy', 'Easy - Moderate', 'Moderate', 'Moderate - Difficult', 'Difficult'];
const DURATIONS = ['All', '4 days', '5 days', '6 days', '7+ days'];
const SEASONS = ['All', 'Spring', 'Summer', 'Monsoon', 'Autumn', 'Winter'];
const EXPERIENCES = ['All', 'Family Treks', 'Stargazing Treks', 'Senior Treks', 'Adventure Therapy', 'Summer Camps'];

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const CATEGORIES = [
  { label: 'All Treks',          img: 'https://res.cloudinary.com/dirsimqmr/image/upload/v1782457729/treks/categories/use5dkrovxnnvyjyaqci.jpg' },
  { label: 'Winter Treks',       img: 'https://res.cloudinary.com/dirsimqmr/image/upload/v1782457735/treks/categories/mta9ign2cwg7ly2n6hlr.webp' },
  { label: 'Flower Trails',      img: 'https://res.cloudinary.com/dirsimqmr/image/upload/v1782457738/treks/categories/xaw8noatpohj8xu1tqkw.avif' },
  { label: 'Pass Crossings',     img: 'https://res.cloudinary.com/dirsimqmr/image/upload/v1782457731/treks/categories/zsznevbelhdqnj1emvgo.jpg' },
  { label: 'High Altitude Treks',img: 'https://res.cloudinary.com/dirsimqmr/image/upload/v1782457729/treks/categories/use5dkrovxnnvyjyaqci.jpg' },
  { label: 'Himalayan Gems',     img: 'https://res.cloudinary.com/dirsimqmr/image/upload/v1782457727/treks/categories/xuubl3o53b0n76dhlzbi.webp' },
  { label: 'Peak Expeditions',   img: 'https://res.cloudinary.com/dirsimqmr/image/upload/v1782457733/treks/categories/pkrtz8gmoy3tggpbwuex.jpg' },
  { label: 'Pilgrimage Treks',   img: 'https://res.cloudinary.com/dirsimqmr/image/upload/v1782209550/treks/nhemf5vxrmqk0xs2ru1a.jpg' },
  { label: 'Summer Camping',     img: 'https://res.cloudinary.com/dirsimqmr/image/upload/v1782209543/treks/hqwjjncnv38llluh6qzq.jpg' },
  { label: 'Ultimate Challenges',img: 'https://res.cloudinary.com/dirsimqmr/image/upload/v1782457736/treks/categories/xlujrjfja3kqpmrgev0d.avif' },
];

const difficultyClass = { 
  'Easy': 'easy', 
  'Easy - Moderate': 'easy', 
  'Moderate': 'moderate', 
  'Moderate - Difficult': 'hard', 
  'Difficult': 'hard',
  'Hard': 'hard',
  'Extreme': 'extreme'
};

const seasonMonthsMap = {
  'Spring': ['March', 'April', 'May'],
  'Summer': ['June', 'July', 'August'],
  'Monsoon': ['July', 'August', 'September'],
  'Autumn': ['September', 'October', 'November'],
  'Winter': ['December', 'January', 'February']
};

export default function TreksExplorer({ allTreks }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [region, setRegion] = useState(searchParams.get('region') || 'All');
  const [difficulty, setDifficulty] = useState(searchParams.get('difficulty') || 'All');
  const [duration, setDuration] = useState(searchParams.get('duration') || 'All');
  const [season, setSeason] = useState(searchParams.get('season') || 'All');
  const [experience, setExperience] = useState(searchParams.get('experience') || 'All');
  
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [activeMonth, setActiveMonth] = useState(null);
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All Treks');
  const [, startTransition] = useTransition();

  const updateURL = useCallback((r, d, dur, s, exp, q) => {
    const params = new URLSearchParams();
    if (r && r !== 'All') params.set('region', r);
    if (d && d !== 'All') params.set('difficulty', d);
    if (dur && dur !== 'All') params.set('duration', dur);
    if (s && s !== 'All') params.set('season', s);
    if (exp && exp !== 'All') params.set('experience', exp);
    if (q) params.set('q', q);
    
    startTransition(() => router.push(`${pathname}?${params.toString()}`, { scroll: false }));
  }, [pathname, router]);

  const handleRegion = (r) => { setRegion(r); setActiveCategory(null); updateURL(r, difficulty, duration, season, experience, search); };
  const handleDifficulty = (d) => { setDifficulty(d); setActiveCategory(null); updateURL(region, d, duration, season, experience, search); };
  const handleDuration = (dur) => { setDuration(dur); setActiveCategory(null); updateURL(region, difficulty, dur, season, experience, search); };
  const handleSeason = (s) => { setSeason(s); setActiveCategory(null); updateURL(region, difficulty, duration, s, experience, search); };
  const handleExperience = (exp) => { setExperience(exp); setActiveCategory(null); updateURL(region, difficulty, duration, season, exp, search); };
  
  const handleSearch = (q) => { setSearch(q); updateURL(region, difficulty, duration, season, experience, q); };

  const handleCategory = (label) => {
    setActiveCategory(label);
    
    const params = new URLSearchParams(searchParams.toString());
    if (label !== 'All Treks') {
      params.set('category', label);
    } else {
      params.delete('category');
    }
    startTransition(() => router.push(`${pathname}?${params.toString()}`, { scroll: false }));
  };

  const handleMonth = (month) => {
    if (activeMonth === month) { setActiveMonth(null); }
    else { setActiveMonth(month); }
  };

  const clearAll = (doUpdate = true) => {
    setRegion('All'); setDifficulty('All'); setDuration('All'); setSeason('All'); setExperience('All'); setSearch(''); setActiveMonth(null); setActiveCategory('All Treks');
    if (doUpdate) startTransition(() => router.push(pathname, { scroll: false }));
  };

  const filtered = allTreks.filter(t => {
    // 0. Category
    if (activeCategory !== 'All Treks') {
      if (!t.categories || !t.categories.includes(activeCategory)) return false;
    }

    // 1. Region
    if (region !== 'All' && t.region !== region) return false;
    
    // 2. Difficulty
    if (difficulty !== 'All' && t.difficulty !== difficulty) return false;
    
    // 3. Duration
    if (duration !== 'All') {
      const dVal = parseInt(t.duration, 10);
      if (duration === '4 days' && dVal !== 4) return false;
      if (duration === '5 days' && dVal !== 5) return false;
      if (duration === '6 days' && dVal !== 6) return false;
      if (duration === '7+ days' && dVal < 7) return false;
    }
    
    // 4. Season
    if (season !== 'All') {
      const mappedMonths = seasonMonthsMap[season] || [];
      const hasOverlap = t.bestSeason && t.bestSeason.some(m => mappedMonths.includes(m));
      if (!hasOverlap) return false;
    }
    
    // 5. Experience
    if (experience !== 'All') {
      if (!t.tags || !t.tags.includes(experience)) return false;
    }

    // 6. Search Query
    if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.region.toLowerCase().includes(search.toLowerCase())) return false;
    
    // 7. Active Month
    if (activeMonth && (!t.bestSeason || !t.bestSeason.includes(activeMonth))) return false;
    
    return true;
  });

  const hasFilters = region !== 'All' || difficulty !== 'All' || duration !== 'All' || season !== 'All' || experience !== 'All' || search || activeMonth || activeCategory !== 'All Treks';

  return (
    <div className="treks-page">
      {/* ── SEARCH HERO ── */}
      <div className="treks-search-hero">
        <h2>Looking for a specific trek?</h2>
        <div className="treks-search-bar">
          <input
            type="search"
            className="treks-search-input"
            placeholder="Type a trek's name here"
            value={search}
            onChange={e => handleSearch(e.target.value)}
            autoComplete="off"
          />
          <button className="treks-search-btn" aria-label="Search">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── CATEGORIES ── */}
      <div className="treks-categories">
        <h3>Explore Our Top Categories</h3>
        <div className="categories-divider" />
        <div className="categories-scroll">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className={`category-card ${activeCategory === cat.label ? 'active' : ''}`}
              onClick={() => handleCategory(cat.label)}
              role="button"
              tabIndex={0}
            >
              <img src={cat.img} alt={cat.label} loading="lazy" />
              <div className="category-card-label">{cat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="treks-body">
        {/* ── SIDEBAR ── */}
        <aside className="treks-sidebar">
          
          {/* Season filter */}
          <div className="sidebar-filter-section">
            <div className="sidebar-filter-title">By Season</div>
            <div className="sidebar-region-list">
              {SEASONS.filter(s => s !== 'All').map(s => (
                <div
                  key={s}
                  className={`sidebar-region-item ${season === s ? 'active' : ''}`}
                  onClick={() => handleSeason(season === s ? 'All' : s)}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Month filter */}
          <div className="sidebar-filter-section">
            <div className="sidebar-filter-title">Treks by Month</div>
            <ul className="sidebar-month-list">
              {MONTHS.map(m => (
                <li
                  key={m}
                  className={`sidebar-month-item ${activeMonth === m ? 'active' : ''}`}
                  onClick={() => handleMonth(m)}
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Region filter */}
          <div className="sidebar-filter-section">
            <div className="sidebar-filter-title">By Region</div>
            <div className="sidebar-region-list">
              {REGIONS.filter(r => r !== 'All').map(r => (
                <div
                  key={r}
                  className={`sidebar-region-item ${region === r ? 'active' : ''}`}
                  onClick={() => handleRegion(region === r ? 'All' : r)}
                >
                  {r}
                </div>
              ))}
            </div>
          </div>
          
          {/* Duration filter */}
          <div className="sidebar-filter-section">
            <div className="sidebar-filter-title">By Duration</div>
            <div className="sidebar-region-list">
              {DURATIONS.filter(dur => dur !== 'All').map(dur => (
                <div
                  key={dur}
                  className={`sidebar-region-item ${duration === dur ? 'active' : ''}`}
                  onClick={() => handleDuration(duration === dur ? 'All' : dur)}
                >
                  {dur}
                </div>
              ))}
            </div>
          </div>

          {/* Difficulty filter */}
          <div className="sidebar-filter-section">
            <div className="sidebar-filter-title">By Difficulty</div>
            <div className="sidebar-region-list">
              {DIFFICULTIES.filter(d => d !== 'All').map(d => (
                <div
                  key={d}
                  className={`sidebar-region-item ${difficulty === d ? 'active' : ''}`}
                  onClick={() => handleDifficulty(difficulty === d ? 'All' : d)}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience filter */}
          <div className="sidebar-filter-section">
            <div className="sidebar-filter-title">By Experience</div>
            <div className="sidebar-region-list">
              {EXPERIENCES.filter(exp => exp !== 'All').map(exp => (
                <div
                  key={exp}
                  className={`sidebar-region-item ${experience === exp ? 'active' : ''}`}
                  onClick={() => handleExperience(experience === exp ? 'All' : exp)}
                >
                  {exp}
                </div>
              ))}
            </div>
          </div>

          {hasFilters && (
            <button onClick={() => clearAll(true)} className="clear-btn-dark" style={{ width: '100%', marginTop: '0.5rem' }}>
              ✕ Clear all filters
            </button>
          )}
        </aside>

        {/* ── MAIN ── */}
        <main className="treks-main">
          <div className="treks-main-header" style={{ marginBottom: '1rem', borderBottom: 'none' }}>
            <div>
              <div className="treks-main-title">
                {activeMonth ? `Top Treks in ${activeMonth}` : region !== 'All' ? `Treks in ${region}` : 'All Himalayan Treks'}
              </div>
            </div>
            <p className="treks-result-count">
              <strong>{filtered.length}</strong> {filtered.length === 1 ? 'trek' : 'treks'} found
            </p>
          </div>

          {/* Dynamic Curated Row (Indiahikes Style) */}
          {(!hasFilters || season === 'Monsoon' || ['July', 'August', 'September'].includes(activeMonth)) && (
            <>
              <div className="curated-section">
                <div className="curated-header-split">
                  <h2>Best Treks in July, August & September</h2>
                  <p>
                    Monsoon transforms the Himalayas into a vibrant paradise of lush green meadows, flowing streams, misty forests, and blooming alpine landscapes. These treks are perfect for experiencing the raw beauty of Uttarakhand during the rainy season. Expect refreshing weather, dramatic mountain views, and unforgettable camping experiences.
                  </p>
                </div>
                
                <div className="curated-cards-row">
                  {allTreks.filter(t => [
                    'Valley of Flowers Trek', 'Har Ki Dun Trek', 'Dayara Bugyal Trek', 
                    'Phulara Ridge Trek', 'Kedarkantha (Monsoon Edition)', 'Chopta Chandrashila Trek', 'Valley of Flowers'
                  ].includes(t.name) || (t.bestSeason && t.bestSeason.some(m => ['July','August','September'].includes(m)))).slice(0, 6).map(trek => (
                    <Link key={trek._id} href={`/treks/${trek.slug}`} className="curated-card">
                      <div className="curated-card-img">
                        <Image
                          src={trek.images[0]?.url || '/assets/hikers.png'}
                          alt={trek.name}
                          fill
                          sizes="270px"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="curated-card-stats">
                        <span>{trek.duration} Days</span>
                        <span>{trek.difficulty}</span>
                        <span>{trek.maxAltitude}m</span>
                      </div>
                      <div className="curated-card-body">
                        <h3 className="curated-card-title">{trek.name}</h3>
                        <p className="curated-card-desc">{trek.shortDesc}</p>
                        <div className="curated-card-actions">
                          <div className="curated-btn-green">Get Trek Info</div>
                          <div className="curated-btn-yellow">View Dates</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="curated-section" style={{ marginTop: '3rem' }}>
                <div className="curated-header-split">
                  <h2>Best Treks for Beginners</h2>
                  <p>
                    These treks are perfect if you’re stepping into the world of trekking for the very first time. With well-paced trails, gentle climbs, and great support, they’re ideal for children, seniors, and anyone looking for an easy introduction to the outdoors.
                  </p>
                </div>
                
                <div className="curated-cards-row">
                  {allTreks.filter(t => ['Easy', 'Easy - Moderate', 'Easy-Moderate'].includes(t.difficulty)).slice(0, 6).map(trek => (
                    <Link key={trek._id} href={`/treks/${trek.slug}`} className="curated-card">
                      <div className="curated-card-img">
                        <Image
                          src={trek.images[0]?.url || '/assets/hikers.png'}
                          alt={trek.name}
                          fill
                          sizes="270px"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="curated-card-stats">
                        <span>{trek.duration} Days</span>
                        <span>{trek.difficulty}</span>
                        <span>{trek.maxAltitude}m</span>
                      </div>
                      <div className="curated-card-body">
                        <h3 className="curated-card-title">{trek.name}</h3>
                        <p className="curated-card-desc">{trek.shortDesc}</p>
                        <div className="curated-card-actions">
                          <div className="curated-btn-green">Get Trek Info</div>
                          <div className="curated-btn-yellow">View Dates</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
          {(hasFilters && season !== 'Monsoon' && !['July', 'August', 'September'].includes(activeMonth)) && (
            <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid #1a1a1a' }} />
          )}

          {filtered.length === 0 ? (
            <div className="no-results-dark">
              <h3>No treks match your filters.</h3>
              <p>Try adjusting your selection or clear all filters.</p>
              <button onClick={() => clearAll(true)} className="sidebar-diff-btn" style={{ marginTop: '1rem' }}>Clear all filters</button>
            </div>
          ) : (
            <div className="trek-list">
              {filtered.map((trek, i) => (
                <Link key={trek._id} href={`/treks/${trek.slug}`} className="trek-list-item">
                  <div className="trek-item-img">
                    <Image
                      src={trek.images[0]?.url || '/assets/hikers.png'}
                      alt={trek.name}
                      fill
                      sizes="260px"
                      loading={i < 3 ? 'eager' : 'lazy'}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="trek-item-body">
                    <div>
                      <div className="trek-item-meta">
                        <span className="trek-item-region">{trek.region}</span>
                        <span className={`trek-item-difficulty ${difficultyClass[trek.difficulty] || 'moderate'}`}>{trek.difficulty}</span>
                      </div>
                      <h2 className="trek-item-name">{trek.name}</h2>
                      <p className="trek-item-desc">{trek.shortDesc}</p>
                    </div>
                    <div className="trek-item-footer">
                      <div className="trek-item-stats-row">
                        <div className="trek-stat-chip">
                          <span className="trek-stat-chip-label">Duration</span>
                          <span className="trek-stat-chip-value">{trek.duration} Days</span>
                        </div>
                        <div className="trek-stat-chip">
                          <span className="trek-stat-chip-label">Max Alt.</span>
                          <span className="trek-stat-chip-value">{trek.maxAltitude}m</span>
                        </div>
                        <div className="trek-stat-chip">
                          <span className="trek-stat-chip-label">Rating</span>
                          <span className="trek-stat-chip-value">★ {trek.avgRating}</span>
                        </div>
                        <div className="trek-stat-chip">
                          <span className="trek-stat-chip-label">Best Season</span>
                          <span className="trek-stat-chip-value">{trek.bestSeason && trek.bestSeason.length > 0 ? trek.bestSeason.slice(0, 2).join(', ') : 'All Year'}</span>
                        </div>
                      </div>
                      <div className="trek-item-price-cta">
                        <div className="trek-item-price-block">
                          <div className="trek-item-price-from">From</div>
                          <div className="trek-item-price-amount">₹{trek.price.toLocaleString('en-IN')}</div>
                        </div>
                        <span className="trek-item-cta-btn">View Trek →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
