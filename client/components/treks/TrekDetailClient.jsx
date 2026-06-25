'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FiBarChart2, FiClock, FiFlag, FiUsers, FiMapPin, FiHome,
  FiActivity, FiTruck, FiLogOut, FiPackage,
  FiChevronDown, FiCheck, FiX, FiStar, FiShare2, FiImage,
  FiPhone, FiMessageSquare, FiSunrise, FiHeart, FiShield,
  FiChevronRight
} from 'react-icons/fi';
import {
  MdForest, MdSelfImprovement, MdGroupWork, MdDirectionsRun
} from 'react-icons/md';
import { GiMountainClimbing } from 'react-icons/gi';
import './trek-detail.css';

// ─── Quick Info configuration ───────────────────────────────────
function quickInfoItems(trek) {
  return [
    { icon: <FiBarChart2 size={22} />, label: 'Trek Difficulty', value: trek.difficulty },
    { icon: <FiClock size={22} />, label: 'Trek Duration', value: `${trek.duration} days` },
    { icon: <FiFlag size={22} />, label: 'Highest Altitude', value: trek.maxAltitudeFt ? `${trek.maxAltitudeFt.toLocaleString()} ft` : `${trek.maxAltitude}m` },
    { icon: <FiUsers size={22} />, label: 'Suitable For', value: '11 years and above' },
    { icon: <FiMapPin size={22} />, label: 'Basecamp', value: trek.region + ', Uttarakhand' },
    { icon: <FiHome size={22} />, label: 'Accommodation Type', value: 'Gender-specific homestay/lodge' },
    { icon: <FiActivity size={22} />, label: 'Fitness Criteria', value: '5 km in 40 mins' },
    { icon: <FiTruck size={22} />, label: 'Pickup Details', value: 'Live free hostel, Rishikesh at 5:30 AM' },
    { icon: <FiLogOut size={22} />, label: 'Dropoff Details', value: 'Live free hostel, Rishikesh at 6:00 PM' },
  ];
}

// ─── Accordion Item ──────────────────────────────────────────────
function AccordionItem({ icon, title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setOpen(o => !o)} role="button" tabIndex={0}>
        <div className="accordion-header-left">
          {icon}
          <span>{title}</span>
        </div>
        <FiChevronDown size={18} className={`accordion-toggle ${open ? 'open' : ''}`} />
      </div>
      {open && <div className="accordion-body">{children}</div>}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────
export default function TrekDetailClient({ trek }) {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [activeMonth, setActiveMonth] = useState(trek.bestSeason?.[0] || null);
  const [groupSize, setGroupSize] = useState(1);

  const desc = trek.description || '';
  const shortDesc = desc.slice(0, 300);
  const isLong = desc.length > 300;

  const spiritItems = [
    { icon: <MdSelfImprovement size={28} />, title: 'We\'re always ready for adventure', desc: 'Trekking comes with uncertainty. Weather, terrain, and setbacks are part of the journey. We embrace them with resilience and openness.' },
    { icon: <GiMountainClimbing size={28} />, title: 'We embrace low-noise trekking', desc: 'We blend into nature, not the other way around. We avoid shouting, loud music, and noisy games. In silence, we hear birdsong, streams, and the wind.' },
    { icon: <MdForest size={28} />, title: 'We protect the environment', desc: 'We minimise waste, reuse resources, and pick up litter. We carry eco-bags, segregate waste, and inspire others to preserve trails.' },
    { icon: <FiPackage size={24} />, title: 'We are self-sufficient', desc: 'We carry our load as much as possible, manage our gear, and stay prepared for all situations.' },
    { icon: <MdGroupWork size={28} />, title: 'We support each other', desc: 'We wait for each other, share burdens, and uplift teammates. By putting the group first, we build strong bonds.' },
    { icon: <MdDirectionsRun size={28} />, title: 'We are fit and prepared', desc: 'We train well before our treks. This helps us walk longer, handle emergencies, and contribute to the team.' },
  ];

  return (
    <>
      {/* ── QUICK INFO GRID ── */}
      <div className="trek-quick-info">
        <div className="trek-quick-info-grid">
          {quickInfoItems(trek).map((item, i) => (
            <div key={i} className="tqi-item">
              <div className="tqi-icon">{item.icon}</div>
              <div className="tqi-content">
                <span className="tqi-label">{item.label}</span>
                <span className="tqi-value">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN BODY ── */}
      <div className="detail-body">
        {/* LEFT */}
        <div className="detail-left">

          {/* Announcement Box */}
          <div className="detail-announcement">
            📢 We have announced dates for 2026. Please scroll down to find the dates. Register soon as this is one of the fastest treks to fill.{' '}
            <a href="#booking" style={{ color: '#c8602a', fontWeight: 600 }}>Click here to get personal help in planning this trek.</a>
          </div>

          {/* Highlights */}
          <div className="detail-highlights">
            <h2>Highlights</h2>
            <ul>
              {trek.highlights.map((h, i) => (
                <li key={i}>
                  <FiChevronRight size={16} style={{ color: '#f0c030', marginTop: 3 }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Overview */}
          <div className="detail-overview">
            <h2>{trek.name} — Overview</h2>
            <p className="detail-overview-text">
              {showFullDesc || !isLong ? desc : shortDesc + '…'}
            </p>
            {isLong && (
              <button className="detail-read-more-btn" onClick={() => setShowFullDesc(v => !v)}>
                {showFullDesc ? 'Read less ↑' : 'Read more ↓'}
              </button>
            )}
          </div>

          {/* Itinerary Accordion */}
          <div className="detail-accordions">
            <h2>{trek.name} — Complete Trek Information</h2>

            <AccordionItem icon={<FiClock size={18} />} title="Quick Itinerary" defaultOpen>
              <div>
                {trek.mapImage && (
                  <div style={{ marginBottom: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e0d8' }}>
                    <img src={trek.mapImage} alt={`${trek.name} Route Map`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                )}
                {trek.itinerary.map((day, i) => (
                  <div key={i} className="acc-itinerary-day">
                    <div className="acc-day-header">Day {day.day}</div>
                    <h4 className="acc-day-title">{day.title}</h4>
                    <p className="acc-day-desc">{day.description}</p>
                    {day.campAltitude > 0 && (
                      <p style={{ fontSize: '0.75rem', color: '#c8602a', marginTop: '0.3rem' }}>⛺ Camp Altitude: {day.campAltitude}m</p>
                    )}
                  </div>
                ))}
              </div>
            </AccordionItem>

            <AccordionItem icon={<FiBarChart2 size={18} />} title={`How Difficult Is the ${trek.name} Trek`}>
              <p>
                <strong>Difficulty:</strong> {trek.difficulty} — Suitable for fit beginners.<br /><br />
                You will cover a total distance over {trek.duration} trekking days, gaining significant altitude. The terrain includes steep ascents and rocky paths. Weather can change rapidly at altitude — rain, snow, and mist are common. Our Trek Leaders monitor conditions and make safety decisions accordingly.
              </p>
              <p style={{ marginTop: '1rem' }}>
                <strong>Altitude:</strong> You will reach {trek.maxAltitudeFt ? `${trek.maxAltitudeFt.toLocaleString()} ft` : `${trek.maxAltitude}m`}. At altitudes above 10,000 ft, the chances of Acute Mountain Sickness are real. Fitness helps, but even experienced trekkers can be affected.
              </p>
            </AccordionItem>

            <AccordionItem icon={<FiSunrise size={18} />} title={`Best Time To Do ${trek.name} Trek`}>
              <p>Best months to visit:</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                {trek.bestSeason.map(m => (
                  <span key={m} style={{ background: '#f0ece6', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, color: '#3a3028' }}>{m}</span>
                ))}
              </div>
            </AccordionItem>

            <AccordionItem icon={<FiMapPin size={18} />} title={`How to Plan Your Travel for ${trek.name} Trek`}>
              <p>The base camp is accessible by road from Rishikesh or Haridwar. Nearest railway station is Haridwar; nearest airport is Jolly Grant Airport, Dehradun. We arrange pickup from Rishikesh.</p>
            </AccordionItem>

            <AccordionItem icon={<FiPackage size={18} />} title={`What To Pack For Your ${trek.name} Trek`}>
              <ul style={{ paddingLeft: '1rem', lineHeight: 1.9 }}>
                <li>Layered woollen clothing (thermal base + mid-layer + rain jacket)</li>
                <li>Trekking poles</li>
                <li>Good quality trekking shoes (waterproof)</li>
                <li>Sunscreen SPF 50+, sunglasses</li>
                <li>Headlamp with spare batteries</li>
                <li>Personal first aid kit and any prescription medicine</li>
                <li>Water bottle (2L minimum)</li>
                <li>Light snacks (nuts, dry fruits, energy bars)</li>
              </ul>
            </AccordionItem>

            <AccordionItem icon={<FiActivity size={18} />} title={`How to Get Fit for the ${trek.name} Trek`}>
              <p>Start training 6 weeks before the trek. Focus on:</p>
              <ul style={{ paddingLeft: '1rem', lineHeight: 1.9, marginTop: '0.5rem' }}>
                <li>Cardio — 45 minutes of jogging/cycling, 5 days a week</li>
                <li>Stair climbing — builds leg and lung capacity</li>
                <li>Squats and lunges — strengthen knees for steep descents</li>
                <li>Weekend hikes — practice with a loaded backpack</li>
              </ul>
              <p style={{ marginTop: '0.75rem' }}>Fitness Benchmark: Complete 5 km in under 40 minutes before the trek.</p>
            </AccordionItem>

            <AccordionItem icon={<FiHeart size={18} />} title="Frequently Asked Questions">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <strong>Is {trek.name} suitable for beginners?</strong>
                  <p style={{ marginTop: '0.3rem' }}>Yes, with proper fitness preparation. The difficulty is rated {trek.difficulty}.</p>
                </div>
                <div>
                  <strong>What is included in the trek fee?</strong>
                  <p style={{ marginTop: '0.3rem' }}>{trek.inclusions.join(', ')}.</p>
                </div>
                <div>
                  <strong>What is not included?</strong>
                  <p style={{ marginTop: '0.3rem' }}>{trek.exclusions.join(', ')}.</p>
                </div>
              </div>
            </AccordionItem>
          </div>

          {/* Inclusions/Exclusions */}
          <div className="detail-inclusions">
            <h2>Inclusions & Exclusions</h2>
            <div className="inc-grid">
              <div>
                <div className="inc-title" style={{ color: '#2d7a4f' }}>
                  <FiCheck size={16} /> What's Included
                </div>
                <ul className="inc-list">
                  {trek.inclusions.map((item, i) => (
                    <li key={i} className="inc-item">
                      <FiCheck size={14} style={{ color: '#2d7a4f', flexShrink: 0, marginTop: 2 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="inc-title" style={{ color: '#b82020' }}>
                  <FiX size={16} /> Not Included
                </div>
                <ul className="inc-list">
                  {trek.exclusions.map((item, i) => (
                    <li key={i} className="inc-item">
                      <FiX size={14} style={{ color: '#b82020', flexShrink: 0, marginTop: 2 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div id="photos" className="detail-gallery" style={{ scrollMarginTop: '100px' }}>
            <h2>
              <span>Photo Gallery</span>
              <span style={{ fontSize: '0.75rem', color: '#9a8f82', fontFamily: 'var(--font-mono, monospace)', fontWeight: 400 }}>
                <FiImage size={14} style={{ marginRight: 4 }} />
                {trek.images.length} Photos
              </span>
            </h2>
            <div className="gallery-grid-detail">
              {[...trek.images, ...trek.images, ...trek.images].slice(0, 6).map((img, i) => (
                <div key={i} className="g-item">
                  <Image
                    src={img.url}
                    alt={img.caption || trek.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT — Booking Card */}
        <aside className="detail-right" id="booking">
          <div className="booking-card-new">
            <div className="booking-card-top">
              <div className="booking-price-from">Trek Fee · From</div>
              <div className="booking-price-val">₹{trek.price.toLocaleString('en-IN')}</div>
              <div className="booking-price-sub">per person · all inclusive</div>
              <div className="booking-gst-note">+ 5% GST &nbsp;·&nbsp; + ₹180 Trek Insurance &nbsp;·&nbsp; + Transport extra</div>
            </div>
            <div className="booking-card-body">
              <div className="booking-stats-grid">
                <div className="booking-stat-item">
                  <span className="booking-stat-label">Duration</span>
                  <span className="booking-stat-val">{trek.duration} Days</span>
                </div>
                <div className="booking-stat-item">
                  <span className="booking-stat-label">Max Altitude</span>
                  <span className="booking-stat-val">{trek.maxAltitudeFt ? `${trek.maxAltitudeFt.toLocaleString()} ft` : `${trek.maxAltitude}m`}</span>
                </div>
                <div className="booking-stat-item">
                  <span className="booking-stat-label">Difficulty</span>
                  <span className="booking-stat-val">{trek.difficulty}</span>
                </div>
                <div className="booking-stat-item">
                  <span className="booking-stat-label">Rating</span>
                  <span className="booking-stat-val">★ {trek.avgRating}</span>
                </div>
              </div>

              {/* Month selector */}
              <div className="date-section">
                <div className="date-section-title">Select Month — 2026</div>
                <div className="month-tabs">
                  {trek.bestSeason?.map(m => (
                    <button
                      key={m}
                      className={`month-tab ${activeMonth === m ? 'active' : ''}`}
                      onClick={() => setActiveMonth(m)}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="booking-form-new">
                <div>
                  <label className="booking-form-label" htmlFor={`trek-date-${trek.slug}`}>Preferred Date</label>
                  <input type="date" id={`trek-date-${trek.slug}`} className="booking-form-input" />
                </div>
                <div>
                  <label className="booking-form-label" htmlFor={`group-${trek.slug}`}>Group Size</label>
                  <select id={`group-${trek.slug}`} className="booking-form-input" value={groupSize} onChange={e => setGroupSize(+e.target.value)}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>
                <button className="booking-cta-green" id={`book-now-${trek.slug}`}>
                  Book Now →
                </button>
                <button className="booking-cta-yellow">
                  <FiMessageSquare size={15} /> Request a Callback
                </button>
              </div>
            </div>
            <div className="booking-card-footer">
              <a href="https://wa.me/916398978309" target="_blank" rel="noopener noreferrer" className="booking-contact-link">
                <svg width="16" height="16" fill="#25d366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Ask on WhatsApp
              </a>
              <a href="tel:+916398978309" className="booking-contact-link">
                <FiPhone size={15} style={{ color: '#c8602a' }} />
                Call us — 6398 978 309
              </a>
            </div>

            {/* Safety & Sustainability badges */}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <div style={{ flex: 1, background: '#f7f4ef', border: '1px solid #e5e0d8', borderRadius: 6, padding: '0.75rem', fontSize: '0.72rem', color: '#5a5048', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <FiShield size={14} style={{ color: '#2d7a4f', flexShrink: 0 }} />
                No-Compromise Safety Promise
              </div>
              <div style={{ flex: 1, background: '#f7f4ef', border: '1px solid #e5e0d8', borderRadius: 6, padding: '0.75rem', fontSize: '0.72rem', color: '#5a5048', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MdForest size={14} style={{ color: '#2d7a4f', flexShrink: 0 }} />
                Sustainability Promise
              </div>
            </div>
          </div>
          </aside>
        </div>

      {/* ── THE INDIAHIKES SPIRIT SECTION ── */}
      <div className="detail-spirit">
        <div className="detail-spirit-inner">
          <h2>The IBEX Spirit of Trekking</h2>
          <p className="detail-spirit-sub">Our values on and off the trail</p>
          <div className="spirit-grid">
            {spiritItems.map((item, i) => (
              <div key={i} className="spirit-item">
                <div className="spirit-icon">{item.icon}</div>
                <div className="spirit-title">{item.title}</div>
                <div className="spirit-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
