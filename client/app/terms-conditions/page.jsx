import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Himalayan Ibex',
  description: 'Terms and conditions for Himalayan Ibex treks and expeditions.',
};

export default function TermsConditionsPage() {
  return (
    <main className="section-padding" style={{ background: 'var(--color-snow)', minHeight: '100vh', paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="headline-italic" style={{ marginBottom: '2rem' }}>Terms & Conditions</h1>
        
        <div className="body-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p><strong>Terms & Conditions of Website Use and Trek Participation</strong></p>
          <p>These Terms & Conditions govern the use of the Himalayan Ibex website and participation in all trekking, expeditions, mountaineering, camping, and adventure activities organized by Himalayan Ibex (“Company”, “we”, “our”, or “us”).</p>
          <p>By accessing our website or booking any trek, you agree to these Terms & Conditions, our Privacy Policy, Cancellation Policy, and any additional guidelines provided for specific treks.</p>
          <p>If you do not agree with these terms, please refrain from using our website or booking our services.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>1. Acceptance of Risk</h2>
          <p>Trekking and high-altitude expeditions involve inherent risks, including but not limited to:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Altitude sickness</li>
            <li>Landslides</li>
            <li>Extreme weather</li>
            <li>Falling rocks</li>
            <li>River crossings</li>
            <li>Snowfall</li>
            <li>Injuries</li>
            <li>Illness</li>
            <li>Accidents</li>
            <li>Death</li>
          </ul>
          <p>By booking a trek with Himalayan Ibex, you voluntarily accept all associated risks and agree that participation is entirely at your own responsibility.</p>
          <p>Participants must ensure they are physically and mentally fit before joining any trek.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>2. Booking & Payments</h2>
          <p>Booking confirmation is subject to receipt of the applicable advance payment.</p>
          <p>The remaining balance must be paid before the trek departure or as instructed by Himalayan Ibex.</p>
          <p>Failure to complete payment before the due date may result in cancellation of your booking.</p>
          <p>All promotional offers, discount coupons, vouchers, and special pricing are non-transferable unless otherwise specified.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>3. Eligibility</h2>
          <p>Participants below 18 years of age must provide written consent from a parent or legal guardian.</p>
          <p>Children below 15 years must be accompanied by a parent or guardian throughout the trek.</p>
          <p>Certain high-altitude expeditions may have minimum age requirements depending on difficulty.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>4. Cancellation & Refund</h2>
          <p>Cancellation and refund requests are governed by the official Himalayan Ibex Cancellation Policy.</p>
          <p>Participants are advised to review the Cancellation Policy before making any booking.</p>
          <p>Refunds, where applicable, will be processed according to the published refund schedule.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>5. Trek Date Change Policy</h2>
          <p>Date change requests must be submitted via email at least 7 days before the scheduled departure.</p>
          <p>The first date change is complimentary.</p>
          <p>Subsequent date changes may incur an administrative fee.</p>
          <p>Once a departure has been rescheduled, additional restrictions on cancellation or refund may apply.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>6. Medical Fitness</h2>
          <p>Participants joining moderate, difficult, or high-altitude treks must submit a valid medical fitness certificate when requested.</p>
          <p>Participants are responsible for declaring any existing medical conditions including:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Heart conditions</li>
            <li>Asthma</li>
            <li>Diabetes</li>
            <li>High blood pressure</li>
            <li>Recent surgeries</li>
            <li>Epilepsy</li>
            <li>Mental health conditions</li>
            <li>Severe allergies</li>
          </ul>
          <p>Failure to disclose medical conditions may result in removal from the trek without refund.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>7. Safety Protocols</h2>
          <p>Safety remains the highest priority during every Himalayan Ibex trek.</p>
          <p>Participants must:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Follow all instructions issued by trek leaders.</li>
            <li>Attend mandatory safety briefings.</li>
            <li>Carry all mandatory trekking equipment.</li>
            <li>Stay with the designated group.</li>
            <li>Respect turnaround times established by trek leaders.</li>
            <li>Cooperate during medical assessments.</li>
          </ul>
          <p>Trekkers showing symptoms of Acute Mountain Sickness (AMS) or any condition that may endanger themselves or others may be instructed to descend immediately.</p>
          <p>The decision of the Trek Leader is final.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>8. Code of Conduct</h2>
          <p>Participants are expected to maintain respectful behaviour throughout the journey.</p>
          <p>The following are strictly prohibited:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Alcohol consumption</li>
            <li>Illegal drugs</li>
            <li>Smoking during the trek</li>
            <li>Harassment</li>
            <li>Violence</li>
            <li>Abusive language</li>
            <li>Littering</li>
            <li>Damaging natural surroundings</li>
            <li>Disturbing wildlife</li>
          </ul>
          <p>Violation may result in immediate removal from the trek without refund.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>9. Emergency Evacuation</h2>
          <p>In case of illness, injury, or emergency, Himalayan Ibex may arrange evacuation whenever possible.</p>
          <p>All evacuation costs including:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Helicopter evacuation</li>
            <li>Porter assistance</li>
            <li>Pony charges</li>
            <li>Vehicle transportation</li>
            <li>Hospital expenses</li>
          </ul>
          <p>shall be borne entirely by the participant.</p>
          <p>Himalayan Ibex will assist with coordination but cannot guarantee emergency services due to weather or terrain conditions.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>10. Trek Equipment</h2>
          <p>Participants are responsible for carrying the mandatory gear listed in the Packing List.</p>
          <p>Failure to carry essential equipment may result in denial of participation for safety reasons.</p>
          <p>Rental equipment, if available, remains subject to availability.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>11. Travel Delays & Force Majeure</h2>
          <p>Himalayan Ibex shall not be held responsible for delays or cancellations caused by:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Natural disasters</li>
            <li>Landslides</li>
            <li>Floods</li>
            <li>Heavy snowfall</li>
            <li>Road closures</li>
            <li>Political disturbances</li>
            <li>Government restrictions</li>
            <li>Forest Department orders</li>
            <li>Pandemics</li>
            <li>Any event beyond our reasonable control</li>
          </ul>
          <p>Alternative arrangements may be offered where operationally feasible.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>12. Photography & Media</h2>
          <p>During the trek, photographs and videos may be captured for promotional and marketing purposes.</p>
          <p>By participating, you grant Himalayan Ibex permission to use such media across our website, social media platforms, brochures, advertisements, and promotional materials unless you notify us in writing before the trek.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>13. Website Usage</h2>
          <p>All content available on the Himalayan Ibex website, including text, graphics, photographs, logos, icons, videos, and designs, is protected under applicable intellectual property laws.</p>
          <p>No content may be copied, reproduced, modified, distributed, or republished without prior written permission.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>14. Privacy</h2>
          <p>Personal information collected during booking is used solely for operational, safety, legal, and communication purposes.</p>
          <p>We do not sell personal information to third parties.</p>
          <p>Please review our Privacy Policy for complete details.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>15. Limitation of Liability</h2>
          <p>Himalayan Ibex shall not be liable for:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Personal injuries</li>
            <li>Loss of personal belongings</li>
            <li>Flight or train delays</li>
            <li>Visa issues</li>
            <li>Travel disruptions</li>
            <li>Weather-related changes</li>
            <li>Medical complications</li>
            <li>Expenses arising from circumstances beyond our control</li>
          </ul>
          <p>Participants are encouraged to purchase comprehensive travel and trekking insurance.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>16. Dispute Resolution</h2>
          <p>Any disputes arising from these Terms & Conditions shall first be resolved through mutual discussion.</p>
          <p>If unresolved, disputes shall be governed by the laws of India.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>17. Jurisdiction</h2>
          <p>All legal proceedings relating to Himalayan Ibex shall fall under the exclusive jurisdiction of the competent courts of Dehradun, Uttarakhand, India.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>18. Changes to Terms</h2>
          <p>Himalayan Ibex reserves the right to modify these Terms & Conditions at any time without prior notice.</p>
          <p>The latest version published on the website shall always prevail.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Contact Us</h2>
          <p>For any questions regarding these Terms & Conditions, please <Link href="/contact" style={{ color: 'var(--color-rust)', textDecoration: 'underline' }}>contact the Himalayan Ibex support team</Link> through our official website or customer support channels.</p>
          <p>By using this website or booking any trek with Himalayan Ibex, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.</p>
        </div>
      </div>
    </main>
  );
}
