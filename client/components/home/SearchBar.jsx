'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TREKS } from '@/lib/treks-data';

const DIFF_COLOR = {
  Easy:    { bg: 'rgba(74,122,58,0.12)',  color: '#3a6e2a', border: 'rgba(74,122,58,0.25)'  },
  Moderate:{ bg: 'rgba(200,96,42,0.12)',  color: '#c8602a', border: 'rgba(200,96,42,0.25)'  },
  Hard:    { bg: 'rgba(139,37,0,0.10)',   color: '#8b2500', border: 'rgba(139,37,0,0.20)'   },
  Extreme: { bg: 'rgba(10,25,47,0.08)',   color: '#0a192f', border: 'rgba(10,25,47,0.20)'   },
};

function highlightMatch(text, query) {
  if (!query.trim()) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark style={{ background: 'rgba(200,96,42,0.18)', color: '#c8602a', borderRadius: 2, padding: '0 1px' }}>
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function SearchBar() {
  const [query, setQuery]     = useState('');
  const [open, setOpen]       = useState(false);
  const [active, setActive]   = useState(-1);
  const router                = useRouter();
  const wrapRef               = useRef(null);
  const inputRef              = useRef(null);
  const listRef               = useRef(null);

  const results = query.trim().length > 0
    ? TREKS.filter(t =>
        t.name.toLowerCase().includes(query.toLowerCase())     ||
        t.region.toLowerCase().includes(query.toLowerCase())   ||
        t.difficulty.toLowerCase().includes(query.toLowerCase())||
        t.shortDesc.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  /* close on outside click */
  useEffect(() => {
    function handle(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
        setActive(-1);
      }
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  /* keyboard navigation */
  function handleKeyDown(e) {
    if (!open || results.length === 0) {
      if (e.key === 'Enter' && query.trim()) {
        router.push(`/treks?q=${encodeURIComponent(query.trim())}`);
      }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(v => Math.min(v + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(v => Math.max(v - 1, -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (active >= 0) {
        router.push(`/treks/${results[active].slug}`);
        setOpen(false);
        setQuery('');
      } else if (query.trim()) {
        router.push(`/treks?q=${encodeURIComponent(query.trim())}`);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
      setActive(-1);
    }
  }

  /* scroll active item into view */
  useEffect(() => {
    if (active >= 0 && listRef.current) {
      const item = listRef.current.children[active];
      item?.scrollIntoView({ block: 'nearest' });
    }
  }, [active]);

  function handleChange(e) {
    setQuery(e.target.value);
    setOpen(true);
    setActive(-1);
  }

  function handleSearchBtn() {
    if (query.trim()) {
      router.push(`/treks?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/treks');
    }
    setOpen(false);
  }

  return (
    <div className="search-bar-wrapper container" ref={wrapRef}>
      <div className="search-bar" style={{ position: 'relative' }}>

        {/* Input field */}
        <div className="search-field" style={{ flex: 1 }}>
          <div className="search-icon">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleChange}
            onFocus={() => query.trim() && setOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search for treks, destinations..."
            autoComplete="off"
            aria-label="Search treks"
            aria-expanded={open && results.length > 0}
            aria-autocomplete="list"
            aria-controls="search-results-list"
            style={{
              border: 'none', outline: 'none',
              background: 'transparent',
              width: '100%',
              fontSize: '1rem',
              color: 'var(--color-forest)',
              fontFamily: 'var(--font-body)',
            }}
          />
          {/* Clear button */}
          {query && (
            <button
              onClick={() => { setQuery(''); setOpen(false); inputRef.current?.focus(); }}
              aria-label="Clear search"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 22, height: 22, borderRadius: '50%',
                background: 'rgba(138,122,101,0.15)',
                color: 'var(--color-stone)',
                flexShrink: 0,
                transition: 'background 0.15s',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          )}
        </div>

        <button
          className="btn btn-amber search-btn"
          style={{ padding: '0.75rem 2rem' }}
          onClick={handleSearchBtn}
          aria-label="Search"
        >
          Search
        </button>

        {/* ── Dropdown popup ── */}
        {open && results.length > 0 && (
          <div
            id="search-results-list"
            role="listbox"
            ref={listRef}
            style={{
              position: 'absolute',
              top: 'calc(100% + 10px)',
              left: 0,
              right: 0,
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 20px 60px rgba(10,25,47,0.18), 0 4px 16px rgba(10,25,47,0.08)',
              border: '1px solid rgba(138,122,101,0.12)',
              overflow: 'hidden',
              animation: 'searchDropIn 0.18s ease',
              maxHeight: 420,
              overflowY: 'auto',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '12px 20px 8px',
              borderBottom: '1px solid rgba(138,122,101,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: 'var(--color-amber)', flexShrink: 0 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-stone)' }}>
                {results.length} trek{results.length !== 1 ? 's' : ''} found
              </span>
            </div>

            {/* Results */}
            {results.map((trek, i) => {
              const dc = DIFF_COLOR[trek.difficulty] || DIFF_COLOR.Easy;
              const img = trek.images?.[0]?.url;
              return (
                <Link
                  key={trek._id}
                  href={`/treks/${trek.slug}`}
                  role="option"
                  aria-selected={i === active}
                  onClick={() => { setOpen(false); setQuery(''); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '12px 20px',
                    textDecoration: 'none',
                    color: 'inherit',
                    background: i === active ? 'rgba(200,96,42,0.06)' : 'transparent',
                    borderBottom: i < results.length - 1 ? '1px solid rgba(138,122,101,0.06)' : 'none',
                    transition: 'background 0.12s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setActive(i)}
                >
                  {/* Thumbnail */}
                  <div style={{
                    width: 52, height: 52,
                    borderRadius: 10,
                    overflow: 'hidden',
                    flexShrink: 0,
                    background: 'var(--color-snow-dark)',
                    position: 'relative',
                  }}>
                    {img && (
                      <img
                        src={img}
                        alt={trek.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    )}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: 'var(--color-forest)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}>
                        {highlightMatch(trek.name, query)}
                      </span>
                      <span style={{
                        fontSize: '0.62rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 500,
                        letterSpacing: '0.07em',
                        textTransform: 'uppercase',
                        padding: '2px 7px',
                        borderRadius: 100,
                        background: dc.bg,
                        color: dc.color,
                        border: `1px solid ${dc.border}`,
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}>
                        {trek.difficulty}
                      </span>
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-amber)',
                      marginBottom: 3,
                    }}>
                      {highlightMatch(trek.region, query)} · {trek.duration}D · {trek.maxAltitude}m
                    </div>
                    <div style={{
                      fontSize: '0.78rem',
                      color: 'var(--color-stone)',
                      lineHeight: 1.4,
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: 'vertical',
                    }}>
                      {trek.shortDesc}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div style={{
                    flexShrink: 0,
                    color: i === active ? 'var(--color-amber)' : 'var(--color-stone-light)',
                    transition: 'color 0.12s, transform 0.12s',
                    transform: i === active ? 'translateX(3px)' : 'none',
                  }}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>
                    </svg>
                  </div>
                </Link>
              );
            })}

            {/* Footer — view all */}
            <div style={{
              padding: '10px 20px',
              borderTop: '1px solid rgba(138,122,101,0.08)',
              background: 'rgba(245,240,232,0.5)',
            }}>
              <Link
                href={`/treks?q=${encodeURIComponent(query.trim())}`}
                onClick={() => { setOpen(false); setQuery(''); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--color-amber)',
                  textDecoration: 'none',
                }}
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                See all results for &ldquo;{query}&rdquo;
              </Link>
            </div>
          </div>
        )}

        {/* No results state */}
        {open && query.trim().length > 0 && results.length === 0 && (
          <div style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            left: 0,
            right: 0,
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 20px 60px rgba(10,25,47,0.18)',
            border: '1px solid rgba(138,122,101,0.12)',
            padding: '28px 24px',
            textAlign: 'center',
            animation: 'searchDropIn 0.18s ease',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: 8 }}>🏔️</div>
            <p style={{ fontWeight: 600, color: 'var(--color-forest)', marginBottom: 4 }}>No treks found</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-stone)' }}>
              Try &ldquo;Kedarkantha&rdquo;, &ldquo;Uttarakhand&rdquo; or &ldquo;Easy&rdquo;
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes searchDropIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
