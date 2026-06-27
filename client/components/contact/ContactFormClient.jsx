'use client';

import { useState } from 'react';

const TREKS = [
  { value: 'Kedarkantha Trek',              label: 'Kedarkantha Trek' },
  { value: 'Valley of Flowers Trek',        label: 'Valley of Flowers Trek' },
  { value: 'Hampta Pass Trek',              label: 'Hampta Pass Trek' },
  { value: 'Rupin Pass Trek',               label: 'Rupin Pass Trek' },
  { value: 'Roopkund',                      label: 'Roopkund' },
  { value: 'Goecha La Trek',                label: 'Goecha La Trek' },
  { value: 'Chadar Trek',                   label: 'Chadar Trek' },
  { value: 'Pin Parvati Pass Trek',         label: 'Pin Parvati Pass Trek' },
  { value: 'Dayara Bugyal',                 label: 'Dayara Bugyal' },
  { value: 'Gaumukh Trek',                  label: 'Gaumukh Trek' },
  { value: 'Chopta Chandrashila Trek',      label: 'Chopta Chandrashila Trek' },
  { value: 'Nag Tibba Trek',                label: 'Nag Tibba Trek' },
  { value: 'Hemkund Sahib Trek',            label: 'Hemkund Sahib Trek' },
  { value: 'Ali Bedni Bugyal Trek',         label: 'Ali Bedni Bugyal Trek' },
  { value: 'Dodital Trek',                  label: 'Dodital Trek' },
  { value: 'Bali Pass Trek',                label: 'Bali Pass Trek' },
  { value: 'Pin Bhaba Pass Trek',           label: 'Pin Bhaba Pass Trek' },
  { value: 'Kedartal Trek',                 label: 'Kedartal Trek' },
  { value: 'Kashmir Great Lakes Trek',      label: 'Kashmir Great Lakes Trek' },
  { value: 'Har Ki Dun Trek',               label: 'Har Ki Dun Trek' },
  { value: 'Bhrigu Lake Trek',              label: 'Bhrigu Lake Trek' },
  { value: 'Black Peak Expedition',         label: 'Black Peak Expedition' },
  { value: 'Friendship Peak Expedition',    label: 'Friendship Peak Expedition' },
  { value: 'Kang Yatse 1 Peak Expedition',  label: 'Kang Yatse 1 Peak Expedition' },
  { value: 'Kang Yatse 2 Peak Expedition',  label: 'Kang Yatse 2 Peak Expedition' },
  { value: 'Kedarnath Trek',                label: 'Kedarnath Trek' },
  { value: 'Panch Kedar Trek',              label: 'Panch Kedar Trek' },
  { value: 'Brahmatal Trek',                label: 'Brahmatal Trek' },
  { value: 'Buran Ghati Trek',              label: 'Buran Ghati Trek' },
  { value: 'Everest Base Camp Trek',        label: 'Everest Base Camp Trek' },
  { value: 'Kuari Pass Trek',               label: 'Kuari Pass Trek' },
  { value: 'Pangarchulla Peak Trek',        label: 'Pangarchulla Peak Trek' },
  { value: 'Phulara Ridge Trek',            label: 'Phulara Ridge Trek' },
  { value: 'Pindari Glacier Trek',          label: 'Pindari Glacier Trek' },
  { value: 'Sandakphu Trek',                label: 'Sandakphu Trek' },
  { value: 'Sar Pass Trek',                 label: 'Sar Pass Trek' },
  { value: 'Tarsar Marsar Trek',            label: 'Tarsar Marsar Trek' },
  { value: 'Tungnath Chandrashila Trek',    label: 'Tungnath Chandrashila Trek' },
];

export default function ContactFormClient() {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState({ name: '', email: '', phone: '', trek: '', message: '' });

  const handleChange = (e) => setData(d => ({ ...d, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success" aria-live="polite" role="status">
        <div className="success-icon" aria-hidden="true">✓</div>
        <h3 className="success-title">Message received!</h3>
        <p className="success-sub">We'll get back to you within 4 hours on working days.</p>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="contact-form"
        noValidate
        aria-label="Contact form"
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-name" className="form-label">Full Name *</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={data.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Arjun Rawat"
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email" className="form-label">Email *</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={data.email}
              onChange={handleChange}
              className="form-input"
              placeholder="arjun@email.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-phone" className="form-label">Phone</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              value={data.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="+91 6398 978 309"
              autoComplete="tel"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-trek" className="form-label">Trek of Interest</label>
            <select
              id="contact-trek"
              name="trek"
              value={data.trek}
              onChange={handleChange}
              className="form-input"
              style={{ appearance: 'auto' }}
            >
              <option value="">Select a trek…</option>
              {TREKS.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contact-message" className="form-label">Message *</label>
          <textarea
            id="contact-message"
            name="message"
            required
            value={data.message}
            onChange={handleChange}
            className="form-input form-textarea"
            rows={5}
            placeholder="Tell us your preferred dates, group size, any fitness concerns…"
          />
        </div>

        {status === 'error' && (
          <p className="form-error" role="alert">Something went wrong. Please try again or call us directly.</p>
        )}

        <button
          type="submit"
          className="btn btn-amber btn-full btn-lg"
          id="contact-submit-btn"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending…' : 'Send Message →'}
        </button>
      </form>
    </>
  );
}
