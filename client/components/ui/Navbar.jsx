'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, Menu, X, Search, Phone, ShieldCheck, MapPin, HelpCircle, Calendar, Mail } from 'lucide-react';
import styles from './Navbar.module.css';
import { TREKS } from '@/lib/treks-data';


function MobileAccordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.mobileAccordion}>
      <button 
        className={styles.mobileAccordionHeader} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown 
          size={18} 
          className={`${styles.mobileAccordionIcon} ${isOpen ? styles.iconOpen : ''}`} 
        />
      </button>
      <div className={`${styles.mobileAccordionContent} ${isOpen ? styles.contentOpen : ''}`}>
        <div className={styles.mobileAccordionInner}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchQuery('');
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value || searchQuery;
    if (query) {
      router.push(`/treks?search=${encodeURIComponent(query)}`);
      setSearchQuery('');
    }
  };

  const searchResults = searchQuery.trim() === '' ? [] : TREKS.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
        {/* Top White Bar */}
        <div className={styles.topBar}>
          <div className={styles.topInner}>
            <Link href="/" className={styles.logo} aria-label="IBEX Trekking — Home">
              <img
                src="/assets/image.png"
                alt="Himalayan Ibex Logo"
                style={{ height: '48px', width: 'auto' }}
              />
            </Link>

            <div className={styles.quickLinks}>
              <Link href="/contact" className={styles.quickLink}><Phone size={14} /> Contact Us</Link>
              <Link href="/safety" className={styles.quickLink}><ShieldCheck size={14} /> Safety Standards</Link>
              <Link href="/how-to-reach" className={styles.quickLink}><MapPin size={14} /> How to Reach</Link>
              <Link href="/faqs" className={styles.quickLink}><HelpCircle size={14} /> FAQs</Link>
              <Link href="/treks" className={`${styles.quickLink} ${styles.bookLink}`}><Calendar size={14} /> Book a Trek</Link>
            </div>
            
            <div className={styles.topRight}>
              <form onSubmit={handleSearch} className={styles.searchContainer}>
                <input 
                  name="search" 
                  type="text" 
                  placeholder="Search Trek By Name, region" 
                  className={styles.searchInput}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onBlur={() => setTimeout(() => setSearchQuery(''), 200)}
                />
                <button type="submit" aria-label="Search" className={styles.searchBtn}>
                  <Search size={18} />
                </button>
                {searchResults.length > 0 && (
                  <div className={styles.searchResultsDropdown}>
                    {searchResults.map((trek) => (
                      <Link 
                        key={trek.slug} 
                        href={`/treks/${trek.slug}`}
                        className={styles.searchResultItem}
                        onClick={() => setSearchQuery('')}
                      >
                        <span className={styles.searchResultName}>{trek.name} Trek</span>
                        <span className={styles.searchResultRegion}>({trek.region})</span>
                      </Link>
                    ))}
                  </div>
                )}
              </form>
              <button
                className={styles.hamburger}
                onClick={() => setMenuOpen(v => !v)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Orange Bar */}
        <div className={styles.orangeBar}>
          <div className={styles.orangeInner}>
            <nav className={styles.nav} aria-label="Main navigation">
              
              {/* Dropdown for Scheduled Treks */}
              <div className={styles.dropdownContainer}>
                <button className={`${styles.navLink} ${styles.dropdownTrigger}`}>
                  TREKS BY SEASON <ChevronDown size={14} className={styles.dropdownArrow} />
                </button>
                <div className={styles.dropdownMenu}>
                  <Link href="/winter" className={styles.dropdownItem}>❄️ Winter Season Treks</Link>
                  <Link href="/spring" className={styles.dropdownItem}>🌸 Spring Season Treks</Link>
                  <Link href="/summer" className={styles.dropdownItem}>☀️ Summer Season Treks</Link>
                  <Link href="/monsoon" className={styles.dropdownItem}>🌧️ Monsoon Season Treks</Link>
                  <Link href="/autumn" className={styles.dropdownItem}>🍂 Autumn Season Treks</Link>
                </div>
              </div>

              {/* Dropdown for About Us */}
              <div className={styles.dropdownContainer}>
                <button className={`${styles.navLink} ${styles.dropdownTrigger}`}>
                  ABOUT US <ChevronDown size={14} className={styles.dropdownArrow} />
                </button>
                <div className={styles.dropdownMenu}>
                  <Link href="/about" className={styles.dropdownItem}>About Us</Link>
                  <Link href="/about/mission" className={styles.dropdownItem}>Our Mission</Link>
                </div>
              </div>

              <Link href="/outdoor-learning" className={`${styles.navLink} ${pathname === '/outdoor-learning' ? styles.active : ''}`}>
                OUTDOOR LEARNING
              </Link>
              
              <div className={styles.dropdownContainer}>
                <button className={`${styles.navLink} ${styles.dropdownTrigger}`}>
                  HIGH-ALTITUDE EXPEDITIONS <ChevronDown size={14} className={styles.dropdownArrow} />
                </button>
                <div className={styles.dropdownMenu}>
                  {TREKS.filter(t => t.categories?.includes("Peak Expeditions")).map(trek => (
                    <Link key={trek.slug} href={`/treks/${trek.slug}`} className={styles.dropdownItem}>{trek.name}</Link>
                  ))}
                </div>
              </div>

              <Link href="/trail-journal" className={`${styles.navLink} ${pathname === '/trail-journal' ? styles.active : ''}`}>
                TRAIL JOURNAL
              </Link>

              <Link href="/pilgrimages" className={`${styles.navLink} ${pathname === '/pilgrimages' ? styles.active : ''}`}>
                PILGRIMAGES
              </Link>

              {/* Dropdown for Custom Adventures */}
              <div className={styles.dropdownContainer}>
                <button className={`${styles.navLink} ${styles.dropdownTrigger}`}>
                  CUSTOM ADVENTURES <ChevronDown size={14} className={styles.dropdownArrow} />
                </button>
                <div className={styles.dropdownMenu}>
                  <Link href="/custom-adventures?type=Private" className={styles.dropdownItem}>Private Trek</Link>
                  <Link href="/custom-adventures?type=Corporate" className={styles.dropdownItem}>Corporate Trek</Link>
                  <Link href="/custom-adventures?type=Family" className={styles.dropdownItem}>Family Trek</Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.drawerNav} aria-label="Mobile navigation">
          
          <form onSubmit={handleSearch} className={styles.drawerSearchContainer}>
            <input 
              name="search" 
              type="text" 
              placeholder="Search Trek By Name, region" 
              className={styles.drawerSearchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={() => setTimeout(() => setSearchQuery(''), 200)}
            />
            <button type="submit" aria-label="Search" className={styles.drawerSearchBtn}>
              <Search size={18} />
            </button>
            {searchResults.length > 0 && (
              <div className={styles.searchResultsDropdown}>
                {searchResults.map((trek) => (
                  <Link 
                    key={trek.slug} 
                    href={`/treks/${trek.slug}`}
                    className={styles.searchResultItem}
                    onClick={() => {
                      setSearchQuery('');
                      setMenuOpen(false);
                    }}
                  >
                    <span className={styles.searchResultName}>{trek.name} Trek</span>
                    <span className={styles.searchResultRegion}>({trek.region})</span>
                  </Link>
                ))}
              </div>
            )}
          </form>

          <div className={styles.mobileAccordionGroup}>
            <MobileAccordion title="TREKS BY SEASON">
              <Link href="/winter" className={styles.drawerSubLink}>❄️ Winter Season Treks</Link>
              <Link href="/spring" className={styles.drawerSubLink}>🌸 Spring Season Treks</Link>
              <Link href="/summer" className={styles.drawerSubLink}>☀️ Summer Season Treks</Link>
              <Link href="/monsoon" className={styles.drawerSubLink}>🌧️ Monsoon Season Treks</Link>
              <Link href="/autumn" className={styles.drawerSubLink}>🍂 Autumn Season Treks</Link>
            </MobileAccordion>

            <MobileAccordion title="ABOUT US">
              <Link href="/about" className={styles.drawerSubLink}>About Us</Link>
              <Link href="/about/mission" className={styles.drawerSubLink}>Our Mission</Link>
            </MobileAccordion>

            <Link href="/outdoor-learning" className={styles.drawerStandaloneLink}>
              OUTDOOR LEARNING
            </Link>

            <MobileAccordion title="HIGH-ALTITUDE EXPEDITIONS">
              {TREKS.filter(t => t.categories?.includes("Peak Expeditions")).map(trek => (
                <Link key={trek.slug} href={`/treks/${trek.slug}`} className={styles.drawerSubLink}>
                  {trek.name}
                </Link>
              ))}
            </MobileAccordion>

            <Link href="/trail-journal" className={styles.drawerStandaloneLink}>
              TRAIL JOURNAL
            </Link>

            <Link href="/pilgrimages" className={styles.drawerStandaloneLink}>
              PILGRIMAGES
            </Link>

            <MobileAccordion title="CUSTOM ADVENTURES">
              <Link href="/custom-adventures?type=Private" className={styles.drawerSubLink}>Private Trek</Link>
              <Link href="/custom-adventures?type=Corporate" className={styles.drawerSubLink}>Corporate Trek</Link>
              <Link href="/custom-adventures?type=Family" className={styles.drawerSubLink}>Family Trek</Link>
            </MobileAccordion>
          </div>

          <div className={styles.drawerContact}>
            <a href="tel:+916398978309" className={styles.drawerContactItem}>
              <Phone size={18} />
              +91 6398 978 309
            </a>
            <a href="mailto:himalayanibexofficial@gmail.com" className={styles.drawerContactItem}>
              <Mail size={18} />
              himalayanibexofficial@gmail.com
            </a>
          </div>
        </div>
      </div>
      
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
