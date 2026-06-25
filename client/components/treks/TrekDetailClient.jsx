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
import {
  TrendingUp, Clock, MountainSnow, Users, Footprints, Tent,
  Home, Map, BusFront, MapPin, Luggage, Backpack
} from 'lucide-react';
import './trek-detail.css';

function quickInfoItems(trek) {
  const iconProps = { size: 28, strokeWidth: 1.5, color: '#ff5a00' };
  
  const items = [
    { icon: <TrendingUp {...iconProps} />, label: 'Trek Difficulty', value: trek.difficulty },
    { icon: <Clock {...iconProps} />, label: 'Trek Duration', value: trek.durationLabel || `${trek.duration} Days / ${trek.duration - 1} Nights` },
    { icon: <MountainSnow {...iconProps} />, label: 'Highest Altitude', value: trek.maxAltitudeFt ? `${trek.maxAltitudeFt.toLocaleString()} feet` : `${trek.maxAltitude}m` },
    { icon: <Users {...iconProps} />, label: 'Suitable For', value: trek.suitableFor || '11 years and above' },
    { icon: <Footprints {...iconProps} />, label: 'Total Trek Distance', value: trek.distance || 'Not specified' },
    { icon: <Tent {...iconProps} />, label: 'Basecamp', value: trek.basecamp || (trek.region + ', Uttarakhand') },
    { icon: <Home {...iconProps} />, label: 'Accommodation', value: trek.accommodation || 'Gender-specific homestay/lodge' },
    { icon: <Map {...iconProps} />, label: 'Region', value: trek.region },
    { icon: <BusFront {...iconProps} />, label: 'Pickup Details', value: trek.pickup || 'Live free hostel, Rishikesh at 5:30 AM' },
    { icon: <MapPin {...iconProps} />, label: 'Dropoff Details', value: trek.dropoff || 'Live free hostel, Rishikesh at 6:00 PM' },
  ];

  if (trek.cloakroom) {
    items.push({ icon: <Luggage {...iconProps} />, label: 'Cloakroom', value: trek.cloakroom });
  }
  if (trek.offloading) {
    items.push({ icon: <Backpack {...iconProps} />, label: 'Off Loading', value: trek.offloading });
  }

  return items;
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
          <div className="sidebar-card fee-card">
            <h3 className="sidebar-card-title" style={{ marginBottom: '1rem' }}>Trek Fee</h3>
            <div className="fee-amount-wrap">
              <span className="fee-amount">₹{trek.price.toLocaleString('en-IN')}</span>
              <span className="fee-gst">+ 5% GST</span>
            </div>
            <div className="fee-package">
              {trek.inclusions?.find(i => i.toLowerCase().includes('package')) || 'Complete Package from Dehradun To Dehradun'}
            </div>
            
            <div className="fee-optional">
              <h4>Optional:</h4>
              <p>- ₹500 Backpack Offloading.</p>
              <p>- Single Tent/Hotel Room occupancy on request, extra cost.</p>
            </div>
            
            <div className="fee-links">
              <a href="#">Terms & Conditions</a>
              <a href="#">Cancellation Policy</a>
            </div>
          </div>

          <div className="sidebar-card form-card">
            <h3 className="sidebar-card-title">Guidance You Can Trust<br/>Enquire Now</h3>
            <div className="title-underline"></div>
            
            <form className="enquire-form">
              <input type="text" placeholder="Full Name *" required />
              <input type="email" placeholder="Email *" required />
              <input type="tel" placeholder="Your Phone with country code *" required />
              
              <label>Trek Date</label>
              <input type="date" required />
              
              <input type="text" placeholder="Trek Name *" defaultValue={trek.name} required />
              <textarea placeholder="Message..." rows="4"></textarea>
              
              <button type="submit" className="btn-send-enquiry">Send Enquiry</button>
            </form>
          </div>

          <div className="sidebar-card ethics-card">
            <h3 className="sidebar-card-title">Mountain Ethics & Safety</h3>
            <div className="title-underline"></div>
            
            <div className="ethics-content">
              <p><strong>Safety Over Summit:</strong> The mountain will always be there, but your safety is irreplaceable. Knowing when to turn back due to weather or health is the mark of a true trekker.</p>
              <p><strong>Respect the Altitude:</strong> Above 10,000 ft, your body follows its own rules. Prioritize acclimatization and consistent hydration; never ignore the early signs of altitude sickness.</p>
              <p><strong>Mountain Ethics (Leave No Trace):</strong> Carry your trash back. We are guests in the wilderness ensure the trails remain as pristine as you found them.</p>
              <p><strong>Trust the Experts:</strong> Local guides understand the mountain's temperament better than any map. Follow their advice—it is based on years of survival and experience.</p>
              <p><strong>Physical Readiness:</strong> A trek is a physical commitment. Arriving fit ensures that you don't just endure the trail, but actually enjoy the journey.</p>
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
