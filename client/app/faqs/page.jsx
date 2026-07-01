import React from 'react';
import Link from 'next/link';
import { faqSchema, JsonLd } from '@/lib/schemas';

export const metadata = {
  title: 'Frequently Asked Questions | Himalayan Ibex',
  description: 'Find answers to the most common questions about Himalayan Ibex treks, bookings, payments, fitness, gear, travel, and safety.',
  alternates: { canonical: 'https://himalayanibex.com/faqs' },
  openGraph: {
    title: 'Frequently Asked Questions | Himalayan Ibex',
    description: 'Find answers to the most common questions about Himalayan Ibex treks, bookings, payments, fitness, gear, travel, and safety.',
    url: 'https://himalayanibex.com/faqs',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Himalayan Ibex',
    description: 'Find answers to the most common questions about Himalayan Ibex treks.',
  },
};

const FAQ_SECTIONS = [
  {
    title: "Booking Your Trek",
    faqs: [
      { q: "How do I book a trek with Himalayan Ibex?", a: "Visit your preferred trek page, choose a departure date, fill in your details, complete the payment, and receive your booking confirmation via email and WhatsApp." },
      { q: "Can I reserve a slot without payment?", a: "No. Your booking is confirmed only after the required advance payment is received." },
      { q: "Can I add another participant later?", a: "Yes, provided seats are available in that departure batch." },
      { q: "Will I receive confirmation after booking?", a: "Yes. You will receive: Booking Confirmation, Payment Receipt, Trek Preparation Guide, Packing List, Fitness Guide, Pickup Details, and WhatsApp Support." }
    ]
  },
  {
    title: "Payments & Refunds",
    faqs: [
      { q: "What payment methods do you accept?", a: "We accept UPI, Credit Cards, Debit Cards, Net Banking, Wallets, and Bank Transfer." },
      { q: "Can I pay in installments?", a: "For selected departures, partial payment options may be available. Contact our support team before booking." },
      { q: "My payment failed but money was deducted.", a: "Please wait for 30 minutes. If the booking is still not confirmed, contact our support team with your transaction ID." },
      { q: "How long does the refund take?", a: "Eligible refunds are generally processed within 7–10 business days." }
    ]
  },
  {
    title: "Before You Trek",
    faqs: [
      { q: "Do I need trekking experience?", a: "No. Many Himalayan Ibex treks are beginner-friendly and perfect for first-time trekkers." },
      { q: "Which treks are best for beginners?", a: "Recommended beginner treks include Kedarkantha, Brahmatal, Dayara Bugyal, Kuari Pass, Valley of Flowers, and Tungnath Chandrashila." },
      { q: "Which trek is best for snow?", a: "Kedarkantha, Brahmatal, Kuari Pass, and Dayara Bugyal. Best months: December to March." }
    ]
  },
  {
    title: "Trek Fitness",
    faqs: [
      { q: "How fit should I be?", a: "You should comfortably walk 8–10 km, climb stairs continuously, and run 5 km within 35–40 minutes." },
      { q: "Is a medical certificate mandatory?", a: "Yes, for moderate, difficult, and high-altitude treks." },
      { q: "Can I join if I have asthma?", a: "Mild asthma may be acceptable after medical consultation. Severe respiratory conditions are not recommended for high-altitude treks." },
      { q: "Can overweight trekkers join?", a: "Fitness matters more than weight. If you meet the required fitness benchmark, you can participate." }
    ]
  },
  {
    title: "Trek Difficulty",
    faqs: [
      { q: "How are treks graded?", a: "Easy, Easy to Moderate, Moderate, Moderate to Difficult, Difficult, and Expedition. Difficulty depends on altitude, terrain, distance, and weather." }
    ]
  },
  {
    title: "Travel to Base Camp",
    faqs: [
      { q: "Is transportation included?", a: "Please check the trek page. Some treks include pickup/drop from Dehradun or Rishikesh, while others require participants to arrange their own travel." },
      { q: "Where is the pickup point?", a: "Pickup details are shared after booking. Common pickup points include Dehradun Railway Station, Rishikesh, Manali, Srinagar, and Sankri, depending on the trek." },
      { q: "Should I arrive one day earlier?", a: "Yes. We strongly recommend reaching the pickup city at least one day before departure to avoid delays." }
    ]
  },
  {
    title: "Trek Facilities",
    faqs: [
      { q: "Is backpack offloading available?", a: "Yes. Offloading is available on selected treks at an additional charge." },
      { q: "Is there a cloakroom?", a: "Most base camps offer a cloakroom where you can safely store extra luggage." },
      { q: "Can I charge my phone?", a: "Electricity is generally available only at the base camp. There is usually no electricity during camping days." },
      { q: "Will there be mobile network?", a: "Network availability depends on the trek. Usually, Jio works at some base camps, BSNL has the widest mountain coverage, and no network is available on most high-altitude campsites." }
    ]
  },
  {
    title: "Food & Accommodation",
    faqs: [
      { q: "What meals are provided?", a: "Fresh vegetarian meals including Breakfast, Lunch, Evening Tea, Snacks, Soup, and Dinner. Eggs or Jain meals may be available on selected treks." },
      { q: "Do you serve non-vegetarian food?", a: "No. We serve hygienic vegetarian meals throughout the trek." },
      { q: "Can you accommodate Jain food?", a: "Yes, if informed in advance." },
      { q: "How many people share a tent?", a: "Usually 2–3 trekkers share one tent depending on availability." }
    ]
  },
  {
    title: "Trek Safety",
    faqs: [
      { q: "Is trekking with Himalayan Ibex safe?", a: "Safety is our highest priority. Every trek includes Certified Trek Leaders, First Aid Kit, Oxygen Cylinder, Pulse Oximeter, Daily Health Checks, and an Emergency Evacuation Protocol." },
      { q: "What happens if I develop AMS?", a: "Our trek leaders continuously monitor oxygen levels and symptoms. If necessary, immediate descent is mandatory for your safety." },
      { q: "Are trek leaders certified?", a: "Yes. Our leaders are trained in mountain safety, wilderness first aid, and high-altitude emergency response." }
    ]
  },
  {
    title: "Women Trekkers",
    faqs: [
      { q: "Is it safe for solo women?", a: "Yes. Many women join our treks as solo travelers every season. We maintain professional staff, secure campsites, and strict safety protocols." },
      { q: "Can I trek during my periods?", a: "Yes. Many women comfortably trek during menstruation with proper preparation and hygiene." }
    ]
  },
  {
    title: "Senior Trekkers (55+)",
    faqs: [
      { q: "Can senior citizens join?", a: "Yes. Trekkers above 55 are welcome if they meet the required fitness level and provide a medical fitness certificate." }
    ]
  },
  {
    title: "Rental Gear",
    faqs: [
      { q: "Do you provide rental equipment?", a: "Yes. Rental gear may include Trekking Shoes, Trekking Pole, Backpack, Sleeping Bag, Down Jacket, Microspikes, and Gaiters. Availability depends on the trek." }
    ]
  },
  {
    title: "Cancellation Policy",
    faqs: [
      { q: "Can I cancel my booking?", a: "Yes. Refund eligibility depends on how many days before departure the cancellation request is made. Please refer to our Cancellation Policy." },
      { q: "What if Himalayan Ibex cancels the trek?", a: "If a trek is cancelled due to weather, government restrictions, or safety concerns, we may offer an Alternative Departure, Trek Voucher, or Credit for Future Booking." }
    ]
  },
  {
    title: "Weather & Best Season",
    faqs: [
      { q: "Which season is best?", a: "Winter → Snow Treks | Spring → Rhododendrons & Meadows | Summer → Alpine Lakes | Monsoon → Valley of Flowers | Autumn → Crystal-clear Himalayan views." },
      { q: "Will I definitely see snow?", a: "Snow depends on the Trek, Month, and Recent weather. December–March generally offers the highest chances." }
    ]
  },
  {
    title: "Documents Required",
    faqs: [
      { q: "What documents should I carry?", a: "Government Photo ID, Medical Certificate (if required), Booking Confirmation, and Emergency Contact Details. Foreign nationals should also carry a Passport and Valid Visa." }
    ]
  },
  {
    title: "Frequently Asked Trek Questions",
    faqs: [
      { q: "What backpack size should I carry?", a: "50–60 Litres." },
      { q: "How much water should I drink?", a: "At least 3–4 litres daily." },
      { q: "Can I carry drones?", a: "Drone usage depends on local regulations and forest permissions. Prior approval is mandatory." },
      { q: "Are pets allowed?", a: "No. Pets are not permitted on Himalayan Ibex treks." },
      { q: "What happens in bad weather?", a: "Your trek leader may change the itinerary or cancel a section of the trek if weather conditions become unsafe. Safety always comes first." }
    ]
  }
];

export default function FAQPage() {
  // Collect all FAQ items for JSON-LD
  const allFaqs = FAQ_SECTIONS.flatMap(section => section.faqs);

  return (
    <main className="section-padding" style={{ background: 'var(--color-snow)', minHeight: '100vh', paddingTop: '120px' }}>
      <JsonLd data={faqSchema(allFaqs)} />
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="headline-italic" style={{ marginBottom: '1rem', textAlign: 'center' }}>Frequently Asked Questions</h1>
        <p className="body-text" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-slate)' }}>
          Find answers to the most common questions about Himalayan Ibex treks, bookings, payments, fitness, gear, travel, and safety.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {FAQ_SECTIONS.map((section, index) => (
            <div key={index} style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--color-night)' }}>{section.title}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {section.faqs.map((faq, i) => (
                  <details key={i} style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                    <summary style={{ fontWeight: 600, cursor: 'pointer', outline: 'none', color: 'var(--color-pine)', listStylePosition: 'inside' }}>
                      {faq.q}
                    </summary>
                    <p className="body-text" style={{ marginTop: '0.75rem', paddingLeft: '1rem', color: 'var(--color-slate)', borderLeft: '3px solid var(--color-rust)' }}>
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--color-pine)', color: 'white', borderRadius: '12px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Still Need Help?</h2>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
            If your question isn’t answered above, our team is happy to help. Our trekking experts will assist you with bookings, fitness guidance, trek planning, equipment, travel arrangements, and any other questions.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', background: 'var(--color-rust)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}>
            Contact Himalayan Ibex
          </Link>
        </div>
      </div>
    </main>
  );
}
