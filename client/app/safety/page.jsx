import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Safety Standards | Himalayan Ibex',
  description: 'Your safety is our highest priority. Learn about our safety standards, certified trek leaders, medical preparedness, and responsible altitude management.',
  alternates: { canonical: 'https://himalayanibex.com/safety' },
  openGraph: {
    title: 'Safety Standards | Himalayan Ibex',
    description: 'Your safety is our highest priority. Learn about our safety standards, certified trek leaders, medical preparedness, and responsible altitude management.',
    url: 'https://himalayanibex.com/safety',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safety Standards | Himalayan Ibex',
    description: 'Your safety is our highest priority. Learn about our safety standards.',
  },
};

export default function SafetyStandardsPage() {
  return (
    <main className="section-padding" style={{ background: 'var(--color-snow)', minHeight: '100vh', paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="headline-italic" style={{ marginBottom: '1rem', textAlign: 'center' }}>Safety Standards</h1>
        <p className="body-text" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-slate)', fontSize: '1.2rem', fontWeight: 500 }}>
          Your Safety Is Our Highest Priority
        </p>

        <div className="body-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <p>At Himalayan Ibex, every trek is planned with one goal in mind—bringing you back safely while delivering an unforgettable Himalayan experience. Our safety standards combine experienced leadership, proper equipment, medical preparedness, and responsible decision-making to ensure every trek is conducted with the highest level of care.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Certified Trek Leaders</h2>
          <p>Every trek is led by experienced mountain professionals trained in:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>High-altitude trekking</li>
            <li>Wilderness First Aid</li>
            <li>Emergency Response</li>
            <li>Mountain Navigation</li>
            <li>Risk Assessment</li>
            <li>Group Management</li>
          </ul>
          <p>Our leaders continuously monitor trail conditions and make decisions based on safety rather than schedules.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Daily Health Monitoring</h2>
          <p>Your health is monitored throughout the trek.</p>
          <p>Our safety protocol includes:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Oxygen Saturation (SpO₂) Checks</li>
            <li>Pulse Rate Monitoring</li>
            <li>Blood Pressure Checks (selected treks)</li>
            <li>Daily AMS (Acute Mountain Sickness) Assessment</li>
          </ul>
          <p>Trekkers showing signs of altitude sickness are immediately evaluated by our trek leaders.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Emergency Medical Support</h2>
          <p>Every trek carries essential emergency medical equipment, including:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>High Altitude Medical Kit</li>
            <li>Portable Oxygen Cylinder</li>
            <li>Pulse Oximeter</li>
            <li>First Aid Equipment</li>
            <li>Emergency Medicines</li>
            <li>Stretcher (where required)</li>
          </ul>
          <p>Our staff is trained to respond quickly to medical emergencies.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>High-Quality Trekking Equipment</h2>
          <p>For snow treks and winter expeditions, we provide essential safety gear such as:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Microspikes / Crampons</li>
            <li>Gaiters</li>
            <li>Ropes (where required)</li>
            <li>Safety Equipment for Difficult Sections</li>
          </ul>
          <p>All equipment is regularly inspected before every trek.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Weather Monitoring</h2>
          <p>Mountain weather changes rapidly.</p>
          <p>Before and during every trek, our team continuously monitors:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Weather Forecasts</li>
            <li>Snow Conditions</li>
            <li>Rainfall</li>
            <li>Trail Safety</li>
            <li>Avalanche Risk (where applicable)</li>
          </ul>
          <p>Routes may be modified or cancelled if conditions become unsafe.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Small Group Management</h2>
          <p>We maintain manageable group sizes to ensure:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Better supervision</li>
            <li>Faster emergency response</li>
            <li>Personal attention</li>
            <li>Improved trekking experience</li>
          </ul>
          <p>Each group is supported by trek leaders, local guides, and support staff.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Responsible Altitude Management</h2>
          <p>Proper acclimatization is critical in the Himalayas.</p>
          <p>Our itineraries are designed to:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Gain altitude gradually</li>
            <li>Reduce the risk of AMS</li>
            <li>Allow sufficient rest</li>
            <li>Keep trekkers well hydrated</li>
          </ul>
          <p>No shortcuts are taken when it comes to altitude safety.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Hygienic Food & Drinking Water</h2>
          <p>Healthy trekkers are safe trekkers.</p>
          <p>We provide:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Freshly prepared vegetarian meals</li>
            <li>Boiled or purified drinking water</li>
            <li>Hygienic cooking practices</li>
            <li>Nutritious meals suitable for high-altitude trekking</li>
          </ul>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Emergency Evacuation</h2>
          <p>In case of injury, illness, or severe altitude sickness:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Immediate medical assessment is carried out.</li>
            <li>The trek leader decides the safest course of action.</li>
            <li>Emergency descent or evacuation is arranged when required.</li>
            <li>Local rescue services are contacted if necessary.</li>
          </ul>
          <p>The safety of the trekker always takes priority over completing the trek.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Environmental Responsibility</h2>
          <p>We believe protecting the Himalayas is part of trekking safely.</p>
          <p>Our eco-friendly practices include:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Leave No Trace principles</li>
            <li>Waste segregation</li>
            <li>No littering</li>
            <li>Responsible camping</li>
            <li>Respect for local communities and wildlife</li>
          </ul>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>What We Expect From Every Trekker</h2>
          <p>To maintain a safe trekking environment, all participants must:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Meet the required fitness standards.</li>
            <li>Carry the mandatory trekking gear.</li>
            <li>Follow trek leader instructions at all times.</li>
            <li>Respect fellow trekkers and local communities.</li>
            <li>Avoid alcohol, drugs, and smoking during the trek.</li>
            <li>Report any health concerns immediately.</li>
          </ul>
          <p>Failure to follow safety instructions may result in removal from the trek without refund.</p>
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--color-pine)', color: 'white', borderRadius: '12px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Trek With Confidence</h2>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
            From your first step at the base camp to your final descent, Himalayan Ibex is committed to maintaining the highest standards of safety, professionalism, and responsible adventure.
          </p>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9, fontStyle: 'italic', fontSize: '1.1rem' }}>
            Our mission is simple: Safe Treks. Responsible Adventures. Unforgettable Himalayan Experiences.
          </p>
          <Link href="/treks" style={{ display: 'inline-block', background: 'var(--color-rust)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}>
            Explore Our Treks
          </Link>
        </div>
      </div>
    </main>
  );
}
