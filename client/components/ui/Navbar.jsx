'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Mail } from 'lucide-react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/treks', label: 'Treks' },
  { href: '/about', label: 'About' },
  { href: '/trail-moments', label: 'Trail Moments' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="banner">
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="IBEX Trekking — Home">
            <img
              src="/assets/image.png"
              alt="Himalayan Ibex Logo"
              style={{ height: '48px', width: 'auto' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.nav} aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${styles.link} ${pathname === href ? styles.active : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className={styles.actions}>
            <Link href="/treks" className={`btn btn-amber btn-sm ${styles.ctaBtn}`}>
              Book a Trek
            </Link>
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(v => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.drawerNav} aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.drawerLink} ${pathname === href ? styles.drawerLinkActive : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/treks" className={`btn btn-amber btn-full ${styles.drawerCta}`}>
            Book a Trek
          </Link>
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
        </nav>
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
