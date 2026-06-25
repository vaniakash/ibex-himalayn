import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/treks', label: 'All Treks' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const POPULAR_TREKS = [
  { href: '/treks/kedarkantha', label: 'Kedarkantha' },
  { href: '/treks/valley-of-flowers', label: 'Valley of Flowers' },
  { href: '/treks/hampta-pass', label: 'Hampta Pass' },
  { href: '/treks/roopkund', label: 'Roopkund' },
  { href: '/treks/chadar-trek', label: 'Chadar Trek' },
  { href: '/treks/goechala', label: 'Goechala' },
];

export default function Footer() {
  return (
    <footer className="footer topo-bg" aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1 — Brand */}
          <div className="footer-col footer-brand">
            <Link href="/" className="footer-logo" aria-label="IBEX Trekking">
              <img
                src="/assets/image.png"
                alt="Himalayan Ibex Logo"
                className="footer-logo-icon"
              />
            </Link>
            <p className="footer-tagline">
              Hand-crafted expeditions in the Indian Himalayas — since 2014.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com/ibextrekking" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              </a>
              <a href="https://facebook.com/ibextrekking" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-link">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="https://youtube.com/@ibextrekking" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-link">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">{label}</Link>
                </li>
              ))}
              <li>
                <Link href="/dashboard" className="footer-link">My Bookings</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Popular Treks */}
          <div className="footer-col">
            <h3 className="footer-col-title">Popular Treks</h3>
            <ul className="footer-links">
              {POPULAR_TREKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="footer-col">
            <h3 className="footer-col-title">Get in Touch</h3>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <span className="footer-contact-icon">📞</span>
                <a href="tel:+916398978309" className="footer-contact-link">+91 6398 978 309</a>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">✉️</span>
                <a href="mailto:himalayanibexofficial@gmail.com" className="footer-contact-link">himalayanibexofficial@gmail.com</a>
              </li>
              <li className="footer-contact-item align-top">
                <span className="footer-contact-icon">📍</span>
                <span>Sankri Base Camp<br />Uttarakhand (31.078206, 78.183056)</span>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                <span className="mono-label" style={{ fontSize: '0.7rem', letterSpacing: '0.08em' }}>MON–SAT · 9AM–7PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom">
          <span className="footer-copyright mono-label">
            © {new Date().getFullYear()} IBEX Trekking Pvt. Ltd. — All rights reserved
            <span style={{ display: 'inline-block', marginLeft: '0.75rem' }}>
              Made with <span style={{ color: '#e25555' }}>♥</span> by <a href="https://instagram.com/im.akashrana" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-amber)', textDecoration: 'none' }}>@im.akashrana</a>
            </span>
          </span>
          <div className="footer-legal">
            <a href="/assets/Himalayan_Ibex_Privacy_Policy%20(1).pdf" target="_blank" rel="noopener noreferrer" className="footer-legal-link">Privacy Policy</a>
            <Link href="/terms" className="footer-legal-link">Terms</Link>
            <Link href="/refund" className="footer-legal-link">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
