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
  Home, Map, BusFront, MapPin, Luggage, Backpack,
  ListTree, Activity, Calendar, Bus, Dumbbell, ShieldCheck, CheckCircle, MessageCircleQuestion
} from 'lucide-react';
import './trek-detail.css';

function quickInfoItems(trek) {
  const SvgIcon = ({ src, alt }) => (
    <Image 
      src={`/assets/icons/${src}`} 
      width={28} 
      height={28} 
      alt={alt}
      className="tqi-custom-icon"
    />
  );
  
  const items = [
    { icon: <SvgIcon src="graph2-svgrepo-com.svg" alt="Difficulty" />, label: 'Trek Difficulty', value: trek.difficulty },
    { icon: <SvgIcon src="timer-close-svgrepo-com.svg" alt="Duration" />, label: 'Trek Duration', value: trek.durationLabel || `${trek.duration} Days / ${trek.duration - 1} Nights` },
    { icon: <SvgIcon src="mountain-svgrepo-com.svg" alt="Altitude" />, label: 'Highest Altitude', value: trek.maxAltitudeFt ? `${trek.maxAltitudeFt.toLocaleString()} feet` : `${trek.maxAltitude}m` },
    { icon: <SvgIcon src="user-svgrepo-com.svg" alt="Suitable For" />, label: 'Suitable For', value: trek.suitableFor || '11 years and above' },
    { icon: <SvgIcon src="route-svgrepo-com.svg" alt="Distance" />, label: 'Total Trek Distance', value: trek.distance || 'Not specified' },
    { icon: <SvgIcon src="tent-5-svgrepo-com.svg" alt="Basecamp" />, label: 'Basecamp', value: trek.basecamp || (trek.region + ', Uttarakhand') },
    { icon: <SvgIcon src="camping-svgrepo-com.svg" alt="Accommodation" />, label: 'Accommodation', value: trek.accommodation || 'Gender-specific homestay/lodge' },
    { icon: <SvgIcon src="map-book-svgrepo-com.svg" alt="Region" />, label: 'Region', value: trek.region },
    { icon: <SvgIcon src="bus-svgrepo-com.svg" alt="Pickup" />, label: 'Pickup Details', value: trek.pickup || 'Live free hostel, Rishikesh at 5:30 AM' },
    { icon: <SvgIcon src="destination-4-svgrepo-com.svg" alt="Dropoff" />, label: 'Dropoff Details', value: trek.dropoff || 'Live free hostel, Rishikesh at 6:00 PM' },
  ];

  if (trek.cloakroom) {
    items.push({ icon: <SvgIcon src="luggage-svgrepo-com.svg" alt="Cloakroom" />, label: 'Cloakroom', value: trek.cloakroom });
  }
  if (trek.offloading) {
    items.push({ icon: <SvgIcon src="backpack-hike-outdoor-svgrepo-com.svg" alt="Off Loading" />, label: 'Off Loading', value: trek.offloading });
  }

  return items;
}

// ─── Accordion Item ──────────────────────────────────────────────
function AccordionItem({ icon, title, subtitle, children, isOpen, onToggle }) {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div 
        className="accordion-header" 
        onClick={onToggle} 
        role="button" 
        tabIndex={0} 
        onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(); } }}
      >
        <div className="accordion-header-left">
          <div className="acc-icon">{icon}</div>
          <div className="acc-title-group">
            <div className="acc-title">{title}</div>
            {subtitle && <div className="acc-subtitle">{subtitle}</div>}
          </div>
        </div>
        <FiChevronDown size={22} className={`accordion-toggle ${isOpen ? 'open' : ''}`} />
      </div>
      <div className="accordion-body-wrap">
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}
// ─── Daywise Itinerary Tabs ──────────────────────────────────────
function DaywiseItineraryTabs({ itinerary }) {
  const [activeDay, setActiveDay] = useState(itinerary?.[0]?.day || 1);

  if (!itinerary || itinerary.length === 0) return null;

  const activeItem = itinerary.find((d) => d.day === activeDay) || itinerary[0];

  // Parse description: "Stats | Narrative"
  let stats = [];
  let narrative = activeItem.description;

  if (activeItem.description.includes('|')) {
    const parts = activeItem.description.split('|').map(s => s.trim());
    narrative = parts.pop(); // The last part is the narrative
    stats = parts; // The rest are stats
  }

  return (
    <div className="itinerary-tabs-container">
      <div className="itinerary-tabs-header">
        {itinerary.map((day) => (
          <button
            key={day.day}
            className={`itinerary-tab-btn ${activeDay === day.day ? 'active' : ''}`}
            onClick={() => setActiveDay(day.day)}
          >
            Day {day.day}
          </button>
        ))}
      </div>
      <div className="itinerary-tab-content-wrap">
        <div key={activeDay} className="itinerary-tab-content">
          <h3 className="itinerary-day-title">
            Day {activeItem.day}: {activeItem.title}
          </h3>
          
          {(stats.length > 0 || activeItem.campAltitude > 0) && (
            <ul className="itinerary-day-stats">
              {stats.map((stat, i) => (
                <li key={i}>{stat}</li>
              ))}
              {activeItem.campAltitude > 0 && (
                <li>Altitude: {activeItem.campAltitude}m</li>
              )}
            </ul>
          )}

          <div className="itinerary-day-narrative" dangerouslySetInnerHTML={{ __html: narrative }}></div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────
export default function TrekDetailClient({ trek }) {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [activeMonth, setActiveMonth] = useState(trek.bestSeason?.[0] || null);
  const [groupSize, setGroupSize] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

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

          {/* Trek Complete Guide Accordion */}
          <div className="detail-accordions">
            <h2>{trek.name} — Complete Guide</h2>
            <div className="detail-guide-intro">
              <p>Our mission has always been to ensure that no trekker steps into the Himalayas without the right perspective. A trek is not just a checklist of summits; it is a serious commitment to the outdoors. Having the right information is what separates a reckless climb from a soulful journey.</p>
              <p>This section serves as your definitive manual for the <strong>{trek.name}</strong>. We have distilled years of mountain experience and real-time feedback into this guide to give you a clear, honest picture of the trail.</p>
              <p>We provide this depth of information because we want you to be more than just a visitor—we want you to be a prepared, responsible trekker who respects the mountains as much as we do.</p>
            </div>

            <div className="accordion-container">
              {/* 1. Short Itinerary */}
              <AccordionItem 
                icon={<ListTree size={28} strokeWidth={1.5} color="#ff5a00" />} 
                title="Short Itinerary" 
                subtitle="Trek Summary at a Glance"
                isOpen={openAccordion === 0}
                onToggle={() => setOpenAccordion(openAccordion === 0 ? null : 0)}
              >
                <div style={{ padding: '0 0.5rem' }}>
                  {trek.itinerary.map((day, i) => (
                    <div key={i} className="acc-itinerary-day" style={{ padding: '0.5rem 0', borderBottom: i !== trek.itinerary.length - 1 ? '1px solid #e5e0d8' : 'none' }}>
                      <div className="acc-day-header" style={{ fontWeight: 600 }}>Day {day.day}: {day.title}</div>
                      <div className="acc-day-desc" style={{ fontSize: '0.9rem', color: '#555', marginTop: '0.2rem' }} dangerouslySetInnerHTML={{ __html: day.description }}></div>
                    </div>
                  ))}
                </div>
              </AccordionItem>

              {/* 2. Detailed Day-wise Itinerary */}
              <AccordionItem 
                icon={<Map size={28} strokeWidth={1.5} color="#ff5a00" />} 
                title="Detailed Day-wise Itinerary" 
                subtitle="A Complete Route & Campsite Breakdown"
                isOpen={openAccordion === 1}
                onToggle={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
              >
                <DaywiseItineraryTabs itinerary={trek.itinerary} />
              </AccordionItem>

              {/* 3. Trek Difficulty & Experience */}
              <AccordionItem 
                icon={<Activity size={28} strokeWidth={1.5} color="#ff5a00" />} 
                title={`${trek.name} Difficulty & Experience`} 
                subtitle="What to Expect: Terrain, Weather & Challenges"
                isOpen={openAccordion === 2}
                onToggle={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
              >
                <p>
                  <strong>Difficulty:</strong> {trek.difficulty} — Suitable for fit beginners.<br /><br />
                  You will cover a total distance over {trek.duration} trekking days, gaining significant altitude. The terrain includes steep ascents and rocky paths. Weather can change rapidly at altitude — rain, snow, and mist are common. Our Trek Leaders monitor conditions and make safety decisions accordingly.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <strong>Altitude:</strong> You will reach {trek.maxAltitudeFt ? `${trek.maxAltitudeFt.toLocaleString()} ft` : `${trek.maxAltitude}m`}. At altitudes above 10,000 ft, the chances of Acute Mountain Sickness are real. Fitness helps, but even experienced trekkers can be affected.
                </p>
              </AccordionItem>

              {/* 4. Best Time to Visit */}
              <AccordionItem 
                icon={<Calendar size={28} strokeWidth={1.5} color="#ff5a00" />} 
                title={`Best Time to Visit ${trek.name}`} 
                subtitle="Seasonal Weather & Temperature Guide"
                isOpen={openAccordion === 3}
                onToggle={() => setOpenAccordion(openAccordion === 3 ? null : 3)}
              >
                <p>Best months to visit:</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  {trek.bestSeason.map(m => (
                    <span key={m} style={{ background: '#f0ece6', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, color: '#3a3028' }}>{m}</span>
                  ))}
                </div>
              </AccordionItem>

              {/* 5. How to Reach the Base Camp */}
              <AccordionItem 
                icon={<Bus size={28} strokeWidth={1.5} color="#ff5a00" />} 
                title="How to Reach the Base Camp" 
                subtitle="Your Detailed Travel & Connectivity Guide"
                isOpen={openAccordion === 4}
                onToggle={() => setOpenAccordion(openAccordion === 4 ? null : 4)}
              >
                <p>The base camp is accessible by road from Rishikesh or Haridwar. Nearest railway station is Haridwar; nearest airport is Jolly Grant Airport, Dehradun. We arrange pickup from Rishikesh.</p>
              </AccordionItem>

              {/* 6. Packing and Gear List */}
              <AccordionItem 
                icon={<Backpack size={28} strokeWidth={1.5} color="#ff5a00" />} 
                title="Packing and Gear List" 
                subtitle="Your Complete Trekking Checklist"
                isOpen={openAccordion === 5}
                onToggle={() => setOpenAccordion(openAccordion === 5 ? null : 5)}
              >
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

              {/* 7. Preparation & Fitness Tips */}
              <AccordionItem 
                icon={<Dumbbell size={28} strokeWidth={1.5} color="#ff5a00" />} 
                title="Preparation & Fitness Tips" 
                subtitle="Train. Trek. Triumph: Your Complete Fitness Plan"
                isOpen={openAccordion === 6}
                onToggle={() => setOpenAccordion(openAccordion === 6 ? null : 6)}
              >
                <p>Start training 6 weeks before the trek. Focus on:</p>
                <ul style={{ paddingLeft: '1rem', lineHeight: 1.9, marginTop: '0.5rem' }}>
                  <li>Cardio — 45 minutes of jogging/cycling, 5 days a week</li>
                  <li>Stair climbing — builds leg and lung capacity</li>
                  <li>Squats and lunges — strengthen knees for steep descents</li>
                  <li>Weekend hikes — practice with a loaded backpack</li>
                </ul>
                <p style={{ marginTop: '0.75rem' }}>Fitness Benchmark: Complete 5 km in under 40 minutes before the trek.</p>
              </AccordionItem>

              {/* 8. Safety Standards & Expertise */}
              <AccordionItem 
                icon={<ShieldCheck size={28} strokeWidth={1.5} color="#ff5a00" />} 
                title="Himalayan Ibex Safety Standards & Expertise" 
                subtitle="Our Expertise Why We Are India's Trusted Trekking Community"
                isOpen={openAccordion === 7}
                onToggle={() => setOpenAccordion(openAccordion === 7 ? null : 7)}
              >
                <p>Your safety is our priority. We bring oxygen cylinders, high altitude medical kits, and certified Trek Leaders who are trained as Wilderness First Responders.</p>
              </AccordionItem>

              {/* 9. What is Included & Excluded */}
              <AccordionItem 
                icon={<CheckCircle size={28} strokeWidth={1.5} color="#ff5a00" />} 
                title={`What is Included & Excluded in ${trek.name}`} 
                subtitle="What is Covered & NOT Covered in the Package"
                isOpen={openAccordion === 8}
                onToggle={() => setOpenAccordion(openAccordion === 8 ? null : 8)}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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

              {/* 10. Map of Route */}
              <AccordionItem 
                icon={<MapPin size={28} strokeWidth={1.5} color="#ff5a00" />} 
                title={`Map of ${trek.name} Route`} 
                subtitle="Complete Journey Pickup Point to the Peak"
                isOpen={openAccordion === 9}
                onToggle={() => setOpenAccordion(openAccordion === 9 ? null : 9)}
              >
                <p>Detailed maps and GPS coordinates will be provided in your pre-trek briefing document.</p>
              </AccordionItem>

              {/* 11. Frequently Asked Questions (FAQs) */}
              <AccordionItem 
                icon={<MessageCircleQuestion size={28} strokeWidth={1.5} color="#ff5a00" />} 
                title="Frequently Asked Questions (FAQs)" 
                subtitle="Your Curiosity, Our Commitment"
                isOpen={openAccordion === 10}
                onToggle={() => setOpenAccordion(openAccordion === 10 ? null : 10)}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <strong>Is {trek.name} suitable for beginners?</strong>
                    <p style={{ marginTop: '0.3rem' }}>Yes, with proper fitness preparation. The difficulty is rated {trek.difficulty}.</p>
                  </div>
                </div>
              </AccordionItem>

              {/* 12. Booking Notes */}
              {trek.bookingNotes && trek.bookingNotes.length > 0 && (
                <AccordionItem 
                  icon={<ShieldCheck size={28} strokeWidth={1.5} color="#ff5a00" />} 
                  title="Important Booking Notes" 
                  subtitle="How to book and payment information"
                  isOpen={openAccordion === 11}
                  onToggle={() => setOpenAccordion(openAccordion === 11 ? null : 11)}
                >
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {trek.bookingNotes.map((note, idx) => (
                      <li key={idx} style={{ lineHeight: 1.5 }}>{note}</li>
                    ))}
                  </ul>
                </AccordionItem>
              )}
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
              <p>- ₹{trek.offloadingCharge || 500} Backpack Offloading.</p>
              <p>- Single Tent/Hotel Room occupancy on request, extra cost.</p>
            </div>
            <div className="fee-links">
              <Link href="/terms-conditions">Terms & Conditions</Link>
              <Link href="/cancellation-policy">Cancellation Policy</Link>
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
