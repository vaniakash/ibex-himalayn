'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import './FaqSection.css';

const FAQ_DATA = [
  {
    category: 'About Himalayan Ibex',
    questions: [
      {
        q: 'Why the name “Himalayan Ibex”?',
        a: 'The Himalayan Ibex symbolizes strength, resilience, and the spirit of exploration in the mountains. Our name reflects our passion for authentic Himalayan adventures.',
      },
      {
        q: 'What makes Himalayan Ibex different?',
        a: 'We focus on small groups, local expertise, safety, and authentic trekking experiences across the Himalayas.',
      },
      {
        q: 'Where is Himalayan Ibex based?',
        a: 'Himalayan Ibex is based in Uttarakhand, operating treks across some of the most beautiful Himalayan regions.',
      },
      {
        q: 'Do you use local guides and support staff?',
        a: 'Yes. We work closely with local guides, trek leaders, homestays, and mountain communities to create sustainable trekking experiences.',
      },
      {
        q: 'Is Himalayan Ibex a registered trekking company?',
        a: 'Yes, we operate as a professional trekking organization and follow all required local regulations and safety practices.',
      },
      {
        q: 'What is the mission of Himalayan Ibex?',
        a: 'Our mission is to help people experience the Himalayas responsibly while supporting local communities and promoting sustainable tourism.',
      },
    ],
  },
  {
    category: 'Booking & Payments',
    questions: [
      {
        q: 'How do I book a trek?',
        a: 'Book directly through our website or contact our team.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'UPI, bank transfer, debit/credit cards, and online payments.',
      },
      {
        q: 'Can I pay in installments?',
        a: 'For selected treks, installment options may be available.',
      },
    ],
  },
  {
    category: 'Trek Difficulty & Fitness',
    questions: [
      {
        q: 'Are your treks suitable for beginners?',
        a: 'Yes, we offer beginner-friendly as well as advanced treks.',
      },
      {
        q: 'How fit should I be?',
        a: 'Basic fitness is required. Trek-specific requirements are mentioned on each trek page.',
      },
      {
        q: 'What is the minimum age for trekking?',
        a: 'Generally 12+ years, depending on the trek.',
      },
    ],
  },
  {
    category: 'Accommodation & Meals',
    questions: [
      {
        q: 'What type of accommodation is provided?',
        a: 'Guesthouses, homestays, camps, or tents depending on the trek.',
      },
      {
        q: 'Are meals included in the package?',
        a: 'Yes, meals are included for most treks unless stated otherwise.',
      },
    ],
  },
  {
    category: 'Safety & Support',
    questions: [
      {
        q: 'Are trek leaders certified?',
        a: 'Our treks are led by experienced and trained trek leaders.',
      },
      {
        q: 'What happens in case of an emergency?',
        a: 'Our team follows safety protocols and coordinates emergency assistance when required.',
      },
    ],
  },
  {
    category: 'Packing & Equipment',
    questions: [
      {
        q: 'What should I carry for the trek?',
        a: 'A detailed packing list is shared after booking.',
      },
      {
        q: 'Do you provide trekking equipment?',
        a: 'Selected equipment is provided depending on the trek package.',
      },
    ],
  },
  {
    category: 'Cancellation & Refunds',
    questions: [
      {
        q: 'What is your cancellation policy?',
        a: 'Refunds depend on the cancellation date and trek policy.',
      },
      {
        q: 'Can I transfer my booking to someone else?',
        a: 'In many cases, booking transfers can be arranged with prior notice.',
      },
    ],
  },
  {
    category: 'Travel & Transportation',
    questions: [
      {
        q: 'Is transportation included?',
        a: 'Some treks include transportation from the pickup point; others offer it as an add-on.',
      },
      {
        q: 'Where does the trek start and end?',
        a: 'The starting and ending points are clearly mentioned on each trek page.',
      },
    ],
  },
];

function FaqItem({ q, a, isOpen, onClick }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={onClick} aria-expanded={isOpen}>
        <span>{q}</span>
        {isOpen ? <ChevronUp size={20} className="faq-icon" /> : <ChevronDown size={20} className="faq-icon" />}
      </button>
      <div className="faq-answer-wrapper" style={{ maxHeight: isOpen ? '200px' : '0' }}>
        <div className="faq-answer">{a}</div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (catIndex, qIndex) => {
    const key = `${catIndex}-${qIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="section-padding topo-bg" style={{ background: 'var(--color-forest)', color: '#ffffff' }} id="faq" aria-label="Frequently Asked Questions">
      <div className="container">
        <ScrollReveal>
          <span className="section-label" style={{ color: 'var(--color-amber)' }}>COMMON QUESTIONS</span>
          <h2 className="section-heading" style={{ fontSize: 'var(--text-5xl)', marginBottom: '3rem', color: '#ffffff' }}>
            Frequently Asked Questions.
          </h2>
        </ScrollReveal>

        <div className="faq-layout">
          {/* Category Sidebar */}
          <ScrollReveal className="faq-sidebar">
            <div className="faq-categories">
              {FAQ_DATA.map((cat, i) => (
                <button
                  key={i}
                  className={`faq-category-btn ${activeCategory === i ? 'active' : ''}`}
                  onClick={() => setActiveCategory(i)}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* FAQ Content */}
          <div className="faq-content">
            {FAQ_DATA.map((cat, catIndex) => (
              <div 
                key={catIndex} 
                className="faq-category-group"
                style={{ display: activeCategory === catIndex ? 'block' : 'none' }}
              >
                <ScrollReveal delay={0.1}>
                  <h3 className="faq-category-title">{cat.category}</h3>
                  <div className="faq-list">
                    {cat.questions.map((item, qIndex) => (
                      <FaqItem
                        key={qIndex}
                        q={item.q}
                        a={item.a}
                        isOpen={!!openItems[`${catIndex}-${qIndex}`]}
                        onClick={() => toggleItem(catIndex, qIndex)}
                      />
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
