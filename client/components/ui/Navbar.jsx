'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, Menu, X, Search, Phone, ShieldCheck, MapPin, HelpCircle, Calendar, Mail } from 'lucide-react';
import styles from './Navbar.module.css';

const MAIN_LINKS = [
  { href: '/outdoor-learning', label: 'Outdoor Learning' },
  { href: '/expeditions', label: 'High-Altitude Expeditions' },
  { href: '/trail-journal', label: 'Trail Journal' },
  { href: '/pilgrimages', label: 'Pilgrimages' },
];

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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    if (query) {
      router.push(`/treks?search=${encodeURIComponent(query)}`);
    }
  };

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
                <input name="search" type="text" placeholder="Search Trek By Name, region" className={styles.searchInput} />
                <button type="submit" aria-label="Search" className={styles.searchBtn}>
                  <Search size={18} />
                </button>
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
                  <Link href="/treks?season=Winter" className={styles.dropdownItem}>❄️ Winter Season Treks</Link>
                  <Link href="/treks?season=Spring" className={styles.dropdownItem}>🌸 Spring Season Treks</Link>
                  <Link href="/treks?season=Summer" className={styles.dropdownItem}>☀️ Summer Season Treks</Link>
                  <Link href="/treks?season=Monsoon" className={styles.dropdownItem}>🌧️ Monsoon Season Treks</Link>
                  <Link href="/treks?season=Autumn" className={styles.dropdownItem}>🍂 Autumn Season Treks</Link>
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

              {MAIN_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
                >
                  {label.toUpperCase()}
                </Link>
              ))}

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
            <input name="search" type="text" placeholder="Search Trek By Name, region" className={styles.drawerSearchInput} />
            <button type="submit" aria-label="Search" className={styles.drawerSearchBtn}>
              <Search size={18} />
            </button>
          </form>

          <div className={styles.mobileAccordionGroup}>
            <MobileAccordion title="TREKS BY SEASON">
              <Link href="/treks?season=Winter" className={styles.drawerSubLink}>❄️ Winter Season Treks</Link>
              <Link href="/treks?season=Spring" className={styles.drawerSubLink}>🌸 Spring Season Treks</Link>
              <Link href="/treks?season=Summer" className={styles.drawerSubLink}>☀️ Summer Season Treks</Link>
              <Link href="/treks?season=Monsoon" className={styles.drawerSubLink}>🌧️ Monsoon Season Treks</Link>
              <Link href="/treks?season=Autumn" className={styles.drawerSubLink}>🍂 Autumn Season Treks</Link>
            </MobileAccordion>

            <MobileAccordion title="ABOUT US">
              <Link href="/about" className={styles.drawerSubLink}>About Us</Link>
              <Link href="/about/mission" className={styles.drawerSubLink}>Our Mission</Link>
            </MobileAccordion>

            {MAIN_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={styles.drawerStandaloneLink}
              >
                {label.toUpperCase()}
              </Link>
            ))}

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
