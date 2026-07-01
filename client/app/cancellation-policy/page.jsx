import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Cancellation Policy | Himalayan Ibex',
  description: 'Cancellation policy for Himalayan Ibex treks and expeditions.',
  alternates: { canonical: 'https://himalayanibex.com/cancellation-policy' },
  openGraph: {
    title: 'Cancellation Policy | Himalayan Ibex',
    description: 'Cancellation policy for Himalayan Ibex treks and expeditions.',
    url: 'https://himalayanibex.com/cancellation-policy',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cancellation Policy | Himalayan Ibex',
    description: 'Cancellation policy for Himalayan Ibex treks and expeditions.',
  },
};

export default function CancellationPolicyPage() {
  return (
    <main className="section-padding" style={{ background: 'var(--color-snow)', minHeight: '100vh', paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="headline-italic" style={{ marginBottom: '2rem' }}>Cancellation Policy</h1>
        
        <div className="body-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p>At Himalayan Ibex, we understand that travel plans can change unexpectedly. Our cancellation policy is designed to be transparent and fair while ensuring smooth operations for every trek departure.</p>
          <p>Please read the following terms carefully before confirming your booking.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Cancellation by the Trekker</h2>
          <p>If you wish to cancel your trek, you must notify Himalayan Ibex in writing via email or through our official contact form. Refunds will be calculated based on the date on which the cancellation request is received.</p>
          
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Refund Policy</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
            <thead>
              <tr style={{ background: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Cancellation Period</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Refund</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>30 Days or More Before Departure</td>
                <td style={{ padding: '0.75rem' }}>90% Refund</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>21–29 Days Before Departure</td>
                <td style={{ padding: '0.75rem' }}>50% Refund</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem' }}>20 Days or Less Before Departure</td>
                <td style={{ padding: '0.75rem' }}>No Refund</td>
              </tr>
            </tbody>
          </table>
          <p>Eligible refunds will be processed within 7–10 business days after approval.</p>
          <p><strong>Note:</strong> Bank transaction charges, payment gateway fees, or currency conversion charges (if applicable) are non-refundable.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Cancellation by Himalayan Ibex</h2>
          <p>Although rare, Himalayan Ibex reserves the right to cancel or postpone a trek due to:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Severe weather conditions</li>
            <li>Natural disasters</li>
            <li>Government restrictions</li>
            <li>Forest department closures</li>
            <li>Safety concerns</li>
            <li>Insufficient group size</li>
          </ul>
          <p>If a trek is cancelled by Himalayan Ibex, participants will receive one of the following options:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Transfer to another available trek of equal value.</li>
            <li>One-year trek credit voucher valid for any Himalayan Ibex trek.</li>
          </ul>
          <p>Cash refunds may not be available for cancellations initiated due to force majeure events.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Mid-Trek Disruptions</h2>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Bad Weather or Route Closure</h3>
          <p>If a trek is interrupted because of:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Heavy snowfall</li>
            <li>Landslides</li>
            <li>Flash floods</li>
            <li>Government restrictions</li>
            <li>Forest closures</li>
            <li>Any situation affecting trek safety</li>
          </ul>
          <p>No refund will be provided for the completed portion of the trek.</p>
          <p>Depending on the situation, Himalayan Ibex may offer:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Alternative trekking route</li>
            <li>Alternative trek</li>
            <li>Trek credit voucher after deducting operational expenses</li>
          </ul>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Leaving the Trek Midway</h2>
          <p>If a participant leaves the trek before completion because of:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Personal reasons</li>
            <li>Illness</li>
            <li>Injury</li>
            <li>Altitude sickness</li>
            <li>Family emergency</li>
          </ul>
          <p>No refund will be issued for unused trek days.</p>
          <p>If emergency evacuation is required, Himalayan Ibex will assist in arranging transportation wherever possible. However, all evacuation, transportation, accommodation, and medical expenses must be borne by the participant.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>How to Request Cancellation</h2>
          <p>To request a cancellation, please provide:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Booking ID</li>
            <li>Trek Name</li>
            <li>Departure Date</li>
            <li>Registered Name</li>
            <li>Contact Number</li>
            <li>Reason for Cancellation</li>
          </ul>
          <p>Requests should be submitted through:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Official Email</li>
            <li>Contact Form</li>
            <li>Customer Support</li>
          </ul>
          <p>Refunds (if applicable) will be processed after verification.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Trek Insurance Recommendation</h2>
          <p>We strongly recommend that every participant purchase comprehensive travel and trekking insurance before joining any Himalayan Ibex expedition.</p>
          <p>A good insurance policy should include:</p>
          
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Medical Emergencies</h3>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Hospitalization</li>
            <li>Emergency treatment</li>
            <li>Altitude sickness</li>
            <li>Emergency evacuation</li>
          </ul>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Trip Cancellation</h3>
          <p>Coverage for cancellations caused by:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Medical emergencies</li>
            <li>Family emergencies</li>
            <li>Flight disruptions</li>
            <li>Natural disasters</li>
          </ul>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Lost or Damaged Equipment</h3>
          <p>Coverage for:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Trekking backpacks</li>
            <li>Trekking shoes</li>
            <li>Cameras</li>
            <li>Personal equipment</li>
          </ul>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Personal Accident Cover</h3>
          <p>Insurance covering accidental injury, disability, and emergency medical expenses.</p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>High Altitude Coverage</h3>
          <p>Trekkers joining expeditions above 4,000 metres should ensure their insurance policy specifically covers high-altitude trekking.</p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Important Information</h3>
          <p>Himalayan Ibex does not provide trek insurance as part of the package.</p>
          <p>Purchasing adequate insurance remains the responsibility of every participant.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Frequently Asked Questions</h2>
          
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Can I transfer my booking to another person?</h3>
            <p>Yes. Booking transfers may be permitted after prior approval from Himalayan Ibex. Additional administrative charges may apply.</p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>What happens if I cancel because of a medical emergency?</h3>
            <p>Our standard cancellation policy applies. If you have valid travel insurance covering trip cancellation, you may claim reimbursement through your insurer.</p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>What if Himalayan Ibex changes the trek dates?</h3>
            <p>Participants will have the option to:</p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
              <li>Shift to the revised departure</li>
              <li>Choose another available trek</li>
              <li>Receive a trek credit voucher</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Will I receive a refund if bad weather cancels the trek?</h3>
            <p>Weather-related cancellations are considered force majeure events. Depending on operational circumstances, Himalayan Ibex may offer an alternate trek or a trek credit instead of a cash refund.</p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Are booking amounts transferable?</h3>
            <p>Yes. Eligible booking amounts may be transferred to another Himalayan Ibex trek within the voucher validity period, subject to availability.</p>
          </div>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Need Assistance?</h2>
          <p>If you have questions regarding bookings, cancellations, or refunds, please <Link href="/contact" style={{ color: 'var(--color-rust)', textDecoration: 'underline' }}>contact the Himalayan Ibex support team</Link> through our official website, email, or customer support number.</p>
          <p>Our team will be happy to assist you throughout the booking process.</p>
        </div>
      </div>
    </main>
  );
}
