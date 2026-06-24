'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { TREKS } from '@/lib/treks-data';
import './admin.css';

// ─── Login Screen ───────────────────────────────────────────────
function LoginScreen({ onLogin }) {
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pw }),
    });
    setLoading(false);
    if (res.ok) {
      onLogin();
    } else {
      setError('Incorrect password. Try again.');
    }
  }

  return (
    <div className="admin-login">
      <div className="admin-login-card">
        <div className="admin-login-logo">🏔️</div>
        <h1>IBEX Admin Panel</h1>
        <p>Enter admin password to continue</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Admin password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            className="admin-input"
            autoFocus
          />
          {error && <div className="admin-error">{error}</div>}
          <button type="submit" className="admin-btn-primary" disabled={loading}>
            {loading ? 'Checking…' : 'Login →'}
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Image Upload Area ───────────────────────────────────────────
function CloudinaryUploader({ trekSlug, currentImages, onUploaded }) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');
  const fileRef = useRef();

  async function handleFiles(files) {
    if (!files || files.length === 0) return;
    setUploading(true);
    setProgress(0);
    setMessage('');

    // 1. Get upload config from server
    const sigRes = await fetch('/api/admin/cloudinary-sign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ folder: `treks/${trekSlug}` }),
    });
    const sigData = await sigRes.json();

    const uploadedUrls = [...currentImages];
    const total = files.length;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', `treks/${trekSlug}`);

      if (sigData.unsigned) {
        // Unsigned upload
        formData.append('upload_preset', sigData.uploadPreset);
      } else {
        formData.append('api_key', sigData.apiKey);
        formData.append('timestamp', sigData.timestamp);
        formData.append('signature', sigData.signature);
      }

      const uploadRes = await fetch(
        `https://api.cloudinary.com/v1_1/${sigData.cloudName}/image/upload`,
        { method: 'POST', body: formData }
      );
      const uploadData = await uploadRes.json();

      if (uploadData.secure_url) {
        uploadedUrls.push({ url: uploadData.secure_url, caption: file.name.split('.')[0] });
      }
      setProgress(Math.round(((i + 1) / total) * 100));
    }

    onUploaded(uploadedUrls);
    setUploading(false);
    setMessage(`✓ ${files.length} image(s) uploaded!`);
  }

  return (
    <div className="uploader">
      <div
        className="uploader-drop"
        onClick={() => fileRef.current.click()}
        onDragOver={e => e.preventDefault()}
        onDrop={e => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
      >
        <div className="uploader-icon">☁️</div>
        <div className="uploader-text">
          {uploading
            ? `Uploading… ${progress}%`
            : 'Click or drag & drop images to upload to Cloudinary'}
        </div>
        <div className="uploader-sub">PNG, JPG, WEBP supported</div>
      </div>
      <input
        ref={fileRef}
        type="file"
        multiple
        accept="image/*"
        style={{ display: 'none' }}
        onChange={e => handleFiles(e.target.files)}
      />
      {uploading && (
        <div className="uploader-progress-bar">
          <div className="uploader-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      )}
      {message && <div className="admin-success">{message}</div>}
    </div>
  );
}

// ─── Trek Edit Card ──────────────────────────────────────────────
function TrekEditCard({ trek, override, onSave }) {
  const [price, setPrice] = useState(override?.price ?? trek.price);
  const [images, setImages] = useState(override?.images ?? trek.images);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [expanded, setExpanded] = useState(false);

  async function save() {
    setSaving(true);
    const res = await fetch('/api/admin/treks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug: trek.slug, price, images }),
    });
    setSaving(false);
    if (res.ok) {
      setSaved(true);
      onSave(trek.slug, { price, images });
      setTimeout(() => setSaved(false), 3000);
    }
  }

  function removeImage(idx) {
    setImages(imgs => imgs.filter((_, i) => i !== idx));
  }

  function setMainImage(idx) {
    setImages(imgs => {
      const copy = [...imgs];
      const [item] = copy.splice(idx, 1);
      return [item, ...copy];
    });
  }

  const hasChanges = price !== (override?.price ?? trek.price) || JSON.stringify(images) !== JSON.stringify(override?.images ?? trek.images);

  return (
    <div className={`trek-edit-card ${expanded ? 'expanded' : ''}`}>
      <div className="trek-edit-header" onClick={() => setExpanded(v => !v)}>
        <div className="trek-edit-thumb">
          {images[0]?.url && (
            <Image src={images[0].url} alt={trek.name} fill style={{ objectFit: 'cover' }} sizes="60px" />
          )}
        </div>
        <div className="trek-edit-info">
          <div className="trek-edit-name">{trek.name}</div>
          <div className="trek-edit-meta">{trek.region} · {trek.difficulty} · {trek.duration} days</div>
        </div>
        <div className="trek-edit-price-badge">
          ₹{price.toLocaleString('en-IN')}
          {override?.price && override.price !== trek.price && (
            <span className="trek-edit-overridden">OVERRIDDEN</span>
          )}
        </div>
        <div className="trek-edit-toggle">{expanded ? '▲' : '▼'}</div>
      </div>

      {expanded && (
        <div className="trek-edit-body">
          {/* Price Edit */}
          <div className="admin-section">
            <div className="admin-section-title">💰 Trek Price (₹)</div>
            <div className="price-row">
              <span className="price-label">Original: ₹{trek.price.toLocaleString('en-IN')}</span>
              <input
                type="number"
                className="admin-input price-input"
                value={price}
                min={0}
                step={100}
                onChange={e => setPrice(Number(e.target.value))}
              />
              <button
                className="admin-btn-ghost"
                onClick={() => setPrice(trek.price)}
              >
                Reset
              </button>
            </div>
          </div>

          {/* Image Management */}
          <div className="admin-section">
            <div className="admin-section-title">🖼️ Trek Images</div>
            <div className="images-grid">
              {images.map((img, idx) => (
                <div key={idx} className={`img-item ${idx === 0 ? 'main' : ''}`}>
                  <div className="img-wrap">
                    <Image src={img.url} alt={img.caption || 'Trek'} fill style={{ objectFit: 'cover' }} sizes="160px" />
                    {idx === 0 && <span className="img-main-badge">MAIN</span>}
                  </div>
                  <div className="img-actions">
                    {idx !== 0 && (
                      <button className="img-btn" onClick={() => setMainImage(idx)} title="Set as main">⭐</button>
                    )}
                    <button className="img-btn danger" onClick={() => removeImage(idx)} title="Remove">✕</button>
                  </div>
                  <div className="img-caption">{img.caption || img.url.split('/').pop().slice(0, 20)}</div>
                </div>
              ))}
            </div>

            <CloudinaryUploader
              trekSlug={trek.slug}
              currentImages={images}
              onUploaded={setImages}
            />
          </div>

          {/* Save */}
          <div className="admin-save-row">
            {saved && <span className="admin-success">✓ Saved successfully!</span>}
            <button
              className="admin-btn-primary"
              onClick={save}
              disabled={saving || !hasChanges}
            >
              {saving ? 'Saving…' : hasChanges ? 'Save Changes' : 'No Changes'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Admin Panel ────────────────────────────────────────────
export default function AdminPanel() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [overrides, setOverrides] = useState({});
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('treks');
  const [enquiries, setEnquiries] = useState([]);
  const [enquiriesLoading, setEnquiriesLoading] = useState(false);
  const [enquiriesTotal, setEnquiriesTotal] = useState(0);

  // Check existing session
  useEffect(() => {
    fetch('/api/admin/auth').then(r => {
      setChecking(false);
      if (r.ok) setAuthed(true);
    }).catch(() => setChecking(false));
  }, []);

  // Load overrides when authed
  useEffect(() => {
    if (!authed) return;
    fetch('/api/admin/treks').then(r => r.json()).then(data => {
      if (!data.error) setOverrides(data);
    });
  }, [authed]);

  // Load enquiries when tab is active
  useEffect(() => {
    if (!authed || activeTab !== 'enquiries') return;
    setEnquiriesLoading(true);
    fetch('/api/admin/enquiries').then(r => r.json()).then(data => {
      if (!data.error) { setEnquiries(data.enquiries); setEnquiriesTotal(data.total); }
      setEnquiriesLoading(false);
    });
  }, [authed, activeTab]);

  async function logout() {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    setAuthed(false);
  }

  function handleSave(slug, update) {
    setOverrides(prev => ({ ...prev, [slug]: { ...(prev[slug] || {}), ...update } }));
  }

  if (checking) {
    return (
      <div className="admin-loading">
        <div className="admin-spinner" />
        <span>Checking session…</span>
      </div>
    );
  }

  if (!authed) {
    return <LoginScreen onLogin={() => setAuthed(true)} />;
  }

  const filtered = TREKS.filter(t =>
    !search ||
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.region.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-page">
      {/* Header */}
      <header className="admin-header">
        <div className="admin-header-left">
          <span className="admin-logo">🏔️ IBEX Admin</span>
          <span className="admin-badge">Panel</span>
        </div>
        <div className="admin-header-right">
          <button
            className={`admin-tab-btn ${activeTab === 'treks' ? 'active' : ''}`}
            onClick={() => setActiveTab('treks')}
          >Treks</button>
          <button
            className={`admin-tab-btn ${activeTab === 'enquiries' ? 'active' : ''}`}
            onClick={() => setActiveTab('enquiries')}
          >Enquiries {enquiriesTotal > 0 && <span className="admin-enquiry-count">{enquiriesTotal}</span>}</button>
          <span className="admin-session-info">{TREKS.length} treks · {Object.keys(overrides).length} modified</span>
          <button className="admin-btn-ghost" onClick={logout}>Logout →</button>
        </div>
      </header>

      <div className="admin-content">
        {activeTab === 'treks' ? (
          <>
        {/* Stats Bar */}
        <div className="admin-stats-bar">
          <div className="admin-stat-box">
            <div className="admin-stat-num">{TREKS.length}</div>
            <div className="admin-stat-label">Total Treks</div>
          </div>
          <div className="admin-stat-box">
            <div className="admin-stat-num">{Object.keys(overrides).length}</div>
            <div className="admin-stat-label">Modified</div>
          </div>
          <div className="admin-stat-box">
            <div className="admin-stat-num">
              ₹{Math.round(TREKS.reduce((a, t) => a + (overrides[t.slug]?.price ?? t.price), 0) / TREKS.length).toLocaleString('en-IN')}
            </div>
            <div className="admin-stat-label">Avg. Price</div>
          </div>
          <div className="admin-stat-box">
            <div className="admin-stat-num">
              ₹{Math.min(...TREKS.map(t => overrides[t.slug]?.price ?? t.price)).toLocaleString('en-IN')}
            </div>
            <div className="admin-stat-label">Lowest Price</div>
          </div>
        </div>

        {/* Search */}
        <div className="admin-search-wrap">
          <input
            type="search"
            className="admin-input admin-search"
            placeholder="🔍  Search treks by name or region…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Cloudinary Note */}
        <div className="admin-info-box">
          <strong>✅ Cloudinary signed uploads active</strong> — API Key <code>813462389331858</code> · Cloud <code>dirsimqmr</code>.
          Images upload to <code>treks/[slug]/</code> folder automatically.
        </div>

        {/* Trek List */}
        <div className="trek-edit-list">
          {filtered.map(trek => (
            <TrekEditCard
              key={trek.slug}
              trek={trek}
              override={overrides[trek.slug] || null}
              onSave={handleSave}
            />
          ))}
          {filtered.length === 0 && (
            <div className="admin-empty">No treks match your search.</div>
          )}
        </div>
          </>
        ) : (
          /* ── ENQUIRIES TAB ── */
          <div className="enquiries-panel">
            <div className="admin-stats-bar" style={{ marginBottom: '1.5rem' }}>
              <div className="admin-stat-box">
                <div className="admin-stat-num">{enquiriesTotal}</div>
                <div className="admin-stat-label">Total Enquiries</div>
              </div>
              <div className="admin-stat-box">
                <div className="admin-stat-num">{enquiries.filter(e => {
                  const d = new Date(e.createdAt);
                  const now = new Date();
                  return now - d < 7 * 24 * 60 * 60 * 1000;
                }).length}</div>
                <div className="admin-stat-label">This Week</div>
              </div>
              <div className="admin-stat-box">
                <div className="admin-stat-num">
                  {enquiries.filter(e => e.trek).length}
                </div>
                <div className="admin-stat-label">With Trek</div>
              </div>
              <div className="admin-stat-box">
                <div className="admin-stat-num">
                  {new Set(enquiries.map(e => e.trek).filter(Boolean)).size}
                </div>
                <div className="admin-stat-label">Unique Treks</div>
              </div>
            </div>

            {enquiriesLoading ? (
              <div className="admin-loading" style={{ minHeight: 200 }}>
                <div className="admin-spinner" />
                <span>Loading enquiries…</span>
              </div>
            ) : enquiries.length === 0 ? (
              <div className="admin-empty">No enquiries yet. They'll appear here when users fill the contact form.</div>
            ) : (
              <div className="enquiry-table-wrap">
                <table className="enquiry-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Trek</th>
                      <th>Message</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((e, i) => (
                      <tr key={e._id}>
                        <td className="eq-num">{i + 1}</td>
                        <td className="eq-name">{e.name}</td>
                        <td><a href={`mailto:${e.email}`} className="eq-email">{e.email}</a></td>
                        <td>{e.phone || '—'}</td>
                        <td>{e.trek ? <span className="eq-trek-badge">{e.trek}</span> : '—'}</td>
                        <td className="eq-message">{e.message ? e.message.slice(0, 60) + (e.message.length > 60 ? '…' : '') : '—'}</td>
                        <td className="eq-date">{new Date(e.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: '2-digit' })}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
