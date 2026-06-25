import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Mountain } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description: 'Himalayan Ibex was created with a simple vision: to make trekking in the Himalayas accessible, safe, and memorable for everyone.',
  keywords: ['Himalayan Treks', 'Trekking in Uttarakhand', 'Best Trekking Company in India', 'Kedarkantha Trek', 'Winter Treks in India', 'Beginner Friendly Treks', 'Guided Himalayan Treks', 'Adventure Travel India', 'Trekking Tours Uttarakhand']
};

export default function AboutPage() {
  return (
    <>
      {/* HERO — split screen */}
      <section className="about-hero" aria-label="About Himalayan Ibex">
        <div className="about-hero-image">
          <Image
            src="/assets/treks/treks/WhatsApp Image 2026-06-23 at 13.43.21.jpeg"
            alt="Alok Rawat - Founder of Himalayan Ibex"
            fill
            priority
            sizes="55vw"
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          />
        </div>
        <div className="about-hero-text topo-bg">
          <div className="about-hero-content">
            <span className="mono-label" style={{ color: 'var(--color-amber)', marginBottom: '1.5rem', display: 'block' }}>ABOUT US</span>
            <h1 className="headline-italic about-hero-heading">
              Explore the Himalayas<br />With Confidence
            </h1>
            <p className="about-hero-desc">
              Himalayan Ibex was created with a simple vision: to make trekking in the Himalayas accessible, safe, and memorable for everyone. Whether you are taking your first step on a mountain trail or seeking your next high-altitude adventure, we aim to provide well-organized trekking experiences that connect people with nature.
            </p>
            <p className="about-hero-desc">
              Our journeys take you through some of the most stunning landscapes in India, from snow-covered forests and alpine meadows to remote mountain villages and breathtaking summit viewpoints.
            </p>
          </div>
          <div className="about-hero-wave" aria-hidden="true" />
        </div>
      </section>

      {/* CORE INFO */}
      <section className="section-padding" style={{ background: 'var(--color-snow)' }} aria-label="Our Mission and What We Do">
        <div className="container">
          <div className="grid-2">
            <ScrollReveal>
              <h2 className="section-heading" style={{ fontSize: 'var(--text-4xl)', marginBottom: '1.5rem' }}>Our Mission</h2>
              <p className="body-text" style={{ marginBottom: '2rem' }}>
                Our mission is to inspire more people to explore the mountains responsibly while creating meaningful outdoor experiences. We believe trekking is not just about reaching a destination; it is about personal growth, adventure, and developing a deeper connection with nature.
              </p>
              
              <h2 className="section-heading" style={{ fontSize: 'var(--text-4xl)', marginBottom: '1.5rem' }}>Safety First</h2>
              <p className="body-text">
                Safety is at the heart of every trek we organize. Our team follows established mountain safety practices and ensures proper planning, route assessment, weather monitoring, and participant support throughout the journey. We encourage responsible trekking and prioritize the well-being of every participant on the trail.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div style={{ background: '#fff', padding: '3rem', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-card)' }}>
                <h2 className="section-heading" style={{ fontSize: 'var(--text-4xl)', marginBottom: '1.5rem' }}>What We Do</h2>
                <p className="body-text" style={{ marginBottom: '1.5rem' }}>
                  At Himalayan Ibex, we organize guided trekking expeditions across the Indian Himalayas. Our focus is on providing carefully planned itineraries, experienced trek leaders, reliable support teams, and a seamless trekking experience.
                </p>
                <p className="body-text" style={{ marginBottom: '1rem', fontWeight: 600 }}>We specialize in:</p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-stone)' }}>
                  <li>Himalayan Treks</li>
                  <li>Weekend Adventures</li>
                  <li>Snow Treks</li>
                  <li>Beginner-Friendly Treks</li>
                  <li>High Altitude Expeditions</li>
                  <li>Customized Group Treks</li>
                  <li>Corporate Outdoor Programs</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY & LOCAL COMMUNITY */}
      <section className="section-padding topo-bg" style={{ background: 'var(--color-forest)', color: '#fff' }} aria-label="Sustainable and Responsible Travel">
        <div className="container">
          <div className="grid-2">
            <ScrollReveal>
              <h2 className="section-heading" style={{ fontSize: 'var(--text-4xl)', marginBottom: '1.5rem', color: '#fff' }}>Sustainable &amp; Responsible Travel</h2>
              <p className="body-text" style={{ color: 'rgba(255,255,255,0.8)' }}>
                The Himalayas are among the world&apos;s most fragile ecosystems. We are committed to minimizing our environmental impact through responsible trekking practices, waste management awareness, and promoting Leave No Trace principles.
              </p>
              <p className="body-text" style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1rem' }}>
                We believe future generations should experience these mountains in the same pristine condition that we enjoy today.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <h2 className="section-heading" style={{ fontSize: 'var(--text-4xl)', marginBottom: '1.5rem', color: '#fff' }}>Supporting Local Communities</h2>
              <p className="body-text" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Mountain communities play an essential role in every trekking experience. Whenever possible, we work with local guides, homestays, porters, drivers, and service providers to ensure tourism contributes positively to local livelihoods.
              </p>
              <p className="body-text" style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1rem' }}>
                By choosing Himalayan Ibex, you help support mountain communities and sustainable tourism initiatives.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & JOIN US */}
      <section className="section-padding" style={{ background: 'var(--color-snow)' }} aria-label="Why Choose Us">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
              <Image src="/assets/treks/treks/logo.jpeg" alt="Himalayan Ibex Logo" width={100} height={100} style={{ borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem auto' }} />
              <h2 className="section-heading" style={{ fontSize: 'var(--text-4xl)', marginBottom: '1.5rem' }}>Join Us On The Trail</h2>
              <p className="body-text">
                Every mountain has a story, and every trek creates memories that last a lifetime. Whether you dream of witnessing a Himalayan sunrise, walking through snow-covered forests, or exploring hidden valleys, Himalayan Ibex is here to help you begin that journey.
              </p>
              <p className="body-text" style={{ marginTop: '1rem' }}>
                We invite you to discover the beauty of the Himalayas and experience adventure beyond the ordinary.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-3" style={{ textAlign: 'center' }}>
            {[
              "Carefully Curated Trek Experiences",
              "Passionate Trek Leaders",
              "Focus on Safety and Comfort",
              "Small Group Experiences",
              "Transparent Pricing",
              "Personalized Support",
              "Responsible Travel Practices"
            ].map((reason, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div style={{ padding: '1.5rem', background: '#fff', borderRadius: 'var(--radius-card)', border: 'var(--border-subtle)', boxShadow: 'var(--shadow-card)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-forest)' }}>{reason}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO SECTIONS */}
      <section className="section-padding" style={{ background: '#fcfaf5', borderTop: '1px solid #e5e5e5' }} aria-label="Additional Information">
        <div className="container">
          
          {/* STATISTICS */}
          <ScrollReveal>
            <div style={{ marginBottom: '5rem', background: '#fff', padding: '3rem', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-card)' }}>
              <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                {[
                  { value: '500+', label: 'Happy Trekkers' },
                  { value: '20+', label: 'Trek Routes' },
                  { value: '50+', label: 'Trek Departures' },
                  { value: '100%', label: 'Safety Focused' },
                ].map((stat, i) => (
                  <div key={i} style={{ textAlign: 'center', padding: '1rem' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-amber)', fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>{stat.value}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-stone)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid-2" style={{ gap: '4rem' }}>
            {/* DESTINATIONS */}
            <ScrollReveal>
              <h2 className="section-heading" style={{ fontSize: 'var(--text-3xl)', marginBottom: '1.5rem' }}>Our Trekking Destinations</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { name: 'Kedarkantha Trek', link: '/treks/kedarkantha' },
                  { name: 'Dayara Bugyal Trek', link: '/treks' },
                  { name: 'Brahmatal Trek', link: '/treks' },
                  { name: 'Har Ki Dun Trek', link: '/treks' },
                  { name: 'Valley of Flowers Trek', link: '/treks/valley-of-flowers' },
                ].map((dest, i) => (
                  <li key={i}>
                    <Link href={dest.link} style={{ fontSize: '1.1rem', color: 'var(--color-forest)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Mountain size={18} color="var(--color-amber)" /> {dest.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* SEO FAQ */}
            <ScrollReveal delay={0.2}>
              <h2 className="section-heading" style={{ fontSize: 'var(--text-3xl)', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { q: 'Is trekking experience required?', a: 'Not always. We offer Beginner Friendly Treks that are perfect for first-timers.' },
                  { q: 'What is the best season?', a: 'It depends on the trek. We organize Winter Treks in India like the Kedarkantha Trek, as well as summer and post-monsoon expeditions.' },
                  { q: 'How fit should I be?', a: 'Basic cardiovascular fitness is recommended for all our Guided Himalayan Treks. A simple routine of jogging or brisk walking helps.' },
                  { q: 'What gear is required?', a: 'We provide a comprehensive gear list upon booking to ensure you are well-prepared for your Adventure Travel in India.' },
                ].map((faq, i) => (
                  <div key={i} style={{ background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: 'var(--border-subtle)' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-forest)', marginBottom: '0.5rem' }}>{faq.q}</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-stone)' }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>
    </>
  );
}
