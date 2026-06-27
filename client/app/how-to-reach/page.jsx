import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'How to Reach | Himalayan Ibex',
  description: 'Your complete travel guide to reaching Himalayan Ibex treks and expeditions.',
};

export default function HowToReachPage() {
  return (
    <main className="section-padding" style={{ background: 'var(--color-snow)', minHeight: '100vh', paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="headline-italic" style={{ marginBottom: '1rem', textAlign: 'center' }}>How to Reach Himalayan Treks</h1>
        <p className="body-text" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-slate)', fontSize: '1.2rem', fontWeight: 500 }}>
          Your Complete Travel Guide to the Himalayas
        </p>

        <div className="body-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <p>Planning your trek begins with planning your journey. At Himalayan Ibex, we ensure that reaching the base camp is simple, well-organized, and stress-free. Most of our treks begin from major cities such as Dehradun, Rishikesh, Manali, Srinagar, or Bagdogra, depending on the destination.</p>
          <p>Whether you’re travelling from Delhi, Mumbai, Bengaluru, Kolkata, Chennai, Hyderabad, or any other city in India, this guide will help you choose the best way to reach your trek’s starting point.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>By Air</h2>
          <p>Flying is the fastest and most convenient option for trekkers travelling from distant cities.</p>
          <p>Major airports for our treks include:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Dehradun (Jolly Grant Airport)</li>
            <li>Bagdogra Airport</li>
            <li>Leh Airport</li>
            <li>Chandigarh Airport</li>
            <li>Kullu–Manali (Bhuntar Airport)</li>
            <li>Srinagar Airport</li>
          </ul>
          <p>From these airports, you can take a taxi or our scheduled pickup service to the trek base camp.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>By Train</h2>
          <p>Indian Railways offers excellent connectivity to most trekking regions.</p>
          <p>Common railway stations include:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Dehradun</li>
            <li>Haridwar</li>
            <li>Kathgodam</li>
            <li>Chandigarh</li>
            <li>Jammu Tawi</li>
            <li>New Jalpaiguri (NJP)</li>
          </ul>
          <p>We recommend arriving at least one day before your trek begins to avoid delays.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>By Road</h2>
          <p>Most Himalayan base camps are connected through national highways and state roads.</p>
          <p>You can reach them via:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Volvo Buses</li>
            <li>State Transport Buses</li>
            <li>Shared Jeeps</li>
            <li>Private Taxi</li>
            <li>Self Drive Vehicle</li>
          </ul>
          <p>Mountain roads can take longer than expected, so always keep extra travel time.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Pickup Services</h2>
          <p>For selected treks, Himalayan Ibex provides pickup and drop services from designated locations.</p>
          <p>Common pickup cities include:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Dehradun</li>
            <li>Rishikesh</li>
            <li>Manali</li>
            <li>Srinagar</li>
            <li>Kathgodam</li>
          </ul>
          <p>Pickup timing, meeting point, vehicle details, and coordinator contact information are shared after booking.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Before You Travel</h2>
          <p>To ensure a smooth journey:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Reach the pickup city at least one day early.</li>
            <li>Carry a valid Government Photo ID.</li>
            <li>Keep your booking confirmation handy.</li>
            <li>Carry enough cash for personal expenses and meals during road travel.</li>
            <li>Inform us in advance if your arrival is delayed.</li>
          </ul>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Travel Tips</h2>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Book flights and trains well in advance, especially during peak trekking seasons.</li>
            <li>Mountain weather can affect travel schedules, so keep buffer time.</li>
            <li>Download offline maps before travelling into remote regions.</li>
            <li>Keep your phone fully charged and carry a power bank.</li>
            <li>Pack warm clothing in your cabin bag if travelling during winter.</li>
          </ul>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Base Camp Information</h2>
          <p>Every trek page on the Himalayan Ibex website includes detailed information about:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Base Camp Location</li>
            <li>Pickup Point</li>
            <li>Reporting Time</li>
            <li>Route Map</li>
            <li>Distance from Major Cities</li>
            <li>Estimated Travel Time</li>
            <li>Nearby Railway Station</li>
            <li>Nearby Airport</li>
          </ul>
          <p>Please refer to your selected trek page for destination-specific travel instructions.</p>
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--color-pine)', color: 'white', borderRadius: '12px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Need Help Planning Your Journey?</h2>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
            Our trek experts are happy to help you choose the best travel option, suggest trains or flights, explain pickup arrangements, and answer any questions before your adventure begins.
          </p>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
            Contact Himalayan Ibex through Phone, WhatsApp, or Email, and we’ll help you plan a smooth journey to the mountains.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', background: 'var(--color-rust)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}>
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
