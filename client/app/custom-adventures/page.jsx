import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Custom Adventures | Himalayan Ibex',
  description: 'Customized trekking experiences in the Himalayas tailored to your preferences.',
};

export default async function CustomAdventuresPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const type = resolvedSearchParams?.type || 'Private';

  if (type === 'Family') {
    return (
      <main className="section-padding" style={{ background: 'var(--color-snow)', minHeight: '100vh', paddingTop: '120px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="headline-italic" style={{ marginBottom: '1rem', textAlign: 'center' }}>Family Adventures</h1>
          <p className="body-text" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-slate)', fontSize: '1.2rem', fontWeight: 500 }}>
            Create Unforgettable Himalayan Memories Together
          </p>

          <div className="body-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <p>Some of life’s best moments are shared with family. Himalayan Ibex Family Adventures are thoughtfully designed to bring families closer through safe, comfortable, and memorable experiences in the Himalayas.</p>
            <p>Whether you’re introducing your children to their first mountain trail, celebrating a special occasion, or simply spending quality time together, our family-friendly adventures offer the perfect blend of nature, exploration, and relaxation.</p>

            <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Why Choose a Family Adventure?</h2>
            <p>Our family trips are carefully planned to ensure that every member—from children to grandparents—can enjoy the journey comfortably.</p>
            <p>Family adventures offer:</p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
              <li>Quality Time Together</li>
              <li>Safe & Well-Planned Itineraries</li>
              <li>Beautiful Himalayan Landscapes</li>
              <li>Comfortable Accommodation</li>
              <li>Easy to Moderate Trails</li>
              <li>Memorable Outdoor Experiences</li>
            </ul>

            <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Perfect For</h2>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
              <li>Families with Children</li>
              <li>Parents & Teenagers</li>
              <li>Multi-Generational Families</li>
              <li>Family Reunions</li>
              <li>Holiday Vacations</li>
              <li>Nature Lovers</li>
              <li>First-Time Trekkers</li>
            </ul>

            <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Family-Friendly Experiences</h2>
            <p>Choose from a variety of experiences, including:</p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
              <li>Easy Himalayan Treks</li>
              <li>Meadow Walks</li>
              <li>Snow Adventures</li>
              <li>Camping Under the Stars</li>
              <li>Nature Trails</li>
              <li>Wildlife & Bird Watching</li>
              <li>Village Experiences</li>
              <li>Pilgrimage Tours</li>
              <li>Weekend Mountain Getaways</li>
            </ul>

            <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Popular Family Treks</h2>
            <p>Some of our recommended family-friendly adventures include:</p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
              <li>Dayara Bugyal</li>
              <li>Kedarkantha</li>
              <li>Brahmatal</li>
              <li>Valley of Flowers</li>
              <li>Tungnath Chandrashila</li>
              <li>Har Ki Dun</li>
            </ul>
            <p>The final recommendation depends on your family’s fitness level, children’s age, and travel season.</p>

            <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>What’s Included</h2>
            <p>Depending on your chosen itinerary, your package may include:</p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
              <li>Experienced Trek Leader</li>
              <li>Local Mountain Guides</li>
              <li>Comfortable Accommodation</li>
              <li>Camping Equipment (where applicable)</li>
              <li>Fresh Vegetarian Meals</li>
              <li>Transportation</li>
              <li>Forest Permits</li>
              <li>First Aid Support</li>
              <li>Oxygen Cylinder</li>
              <li>Pickup & Drop (Selected Treks)</li>
            </ul>

            <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Safety for Every Family</h2>
            <p>Your family’s safety is our highest priority.</p>
            <p>Every trip includes:</p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
              <li>Experienced Trek Leaders</li>
              <li>Daily Health Monitoring</li>
              <li>Emergency Medical Support</li>
              <li>Well-Planned Itineraries</li>
              <li>Child-Friendly Pace</li>
              <li>Weather Monitoring Throughout the Journey</li>
            </ul>
            <p>We ensure that every adventure remains enjoyable without compromising safety.</p>

            <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Customize Your Family Trip</h2>
            <p>Every family is different, so we offer flexible itineraries based on:</p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
              <li>Group Size</li>
              <li>Children’s Age</li>
              <li>Fitness Level</li>
              <li>Preferred Destination</li>
              <li>Travel Dates</li>
              <li>Trip Duration</li>
              <li>Budget</li>
            </ul>
            <p>We’ll help you create an itinerary that suits everyone in your family.</p>

            <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Make Memories That Last a Lifetime</h2>
            <p>Leave behind busy schedules and digital distractions. Discover the joy of exploring forests, alpine meadows, snow-covered trails, and breathtaking mountain views together.</p>
            <p>With Himalayan Ibex, every family adventure becomes a story you’ll cherish for years to come.</p>
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--color-pine)', color: 'white', borderRadius: '12px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Explore Together. Laugh Together. Grow Together.</h2>
            <p style={{ marginBottom: '1.5rem', opacity: 0.9, fontStyle: 'italic', fontSize: '1.1rem' }}>
              Experience the Himalayas as a Family.
            </p>
            <Link href="/contact?subject=Family Adventure Inquiry" style={{ display: 'inline-block', background: 'var(--color-rust)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}>
              Plan Your Family Adventure
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (type === 'Corporate') {
    return (
      <main className="section-padding" style={{ background: 'var(--color-snow)', minHeight: '100vh', paddingTop: '120px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="headline-italic" style={{ marginBottom: '1rem', textAlign: 'center' }}>Corporate Treks</h1>
          <p className="body-text" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-slate)', fontSize: '1.2rem', fontWeight: 500 }}>
            Build Stronger Teams Beyond the Office
          </p>

          <div className="body-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <p>Great teams aren’t built in meeting rooms—they’re built through shared experiences. Himalayan Ibex Corporate Treks are designed to strengthen teamwork, improve communication, develop leadership skills, and create lasting memories in the heart of the Himalayas.</p>
            <p>Whether you’re planning an annual offsite, leadership retreat, employee engagement activity, or team-building adventure, we create customized trekking experiences for organizations of all sizes.</p>

            <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Why Choose a Corporate Trek?</h2>
            <p>The mountains challenge individuals to work together, solve problems, and support one another—qualities that naturally translate into stronger workplace performance.</p>
            <p>Our corporate adventures help teams:</p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
              <li>Build Trust</li>
              <li>Improve Communication</li>
              <li>Strengthen Leadership Skills</li>
              <li>Boost Team Collaboration</li>
              <li>Increase Employee Motivation</li>
              <li>Reduce Workplace Stress</li>
              <li>Develop Problem-Solving Skills</li>
              <li>Create Meaningful Connections</li>
            </ul>

            <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Who Is It For?</h2>
            <p>Our corporate trekking programs are ideal for:</p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
              <li>Startups</li>
              <li>IT Companies</li>
              <li>Corporate Teams</li>
              <li>Educational Institutions</li>
              <li>Government Organizations</li>
              <li>NGOs</li>
              <li>Business Groups</li>
              <li>Leadership Teams</li>
              <li>Sales Teams</li>
              <li>Remote & Hybrid Teams</li>
            </ul>

            <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Customized Corporate Experiences</h2>
            <p>Every organization has different goals. We tailor each program based on your requirements.</p>
            <p>Choose from:</p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
              <li>Team Building Treks</li>
              <li>Leadership Retreats</li>
              <li>Weekend Adventure Programs</li>
              <li>Multi-Day Himalayan Expeditions</li>
              <li>Camping Experiences</li>
              <li>Wellness Retreats</li>
              <li>Employee Reward Trips</li>
              <li>Corporate Offsites</li>
            </ul>

            <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>What’s Included</h2>
            <p>Depending on your package, services may include:</p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
              <li>Dedicated Trek Leader</li>
              <li>Professional Local Guides</li>
              <li>Transportation</li>
              <li>Accommodation</li>
              <li>Camping Equipment</li>
              <li>Fresh Vegetarian Meals</li>
              <li>Forest Permits</li>
              <li>Medical Support</li>
              <li>Oxygen Cylinder</li>
              <li>First Aid Kit</li>
              <li>Team Coordination</li>
              <li>Emergency Backup Support</li>
            </ul>

            <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Safety Comes First</h2>
            <p>Every corporate trek follows Himalayan Ibex’s strict safety standards.</p>
            <p>Our team provides:</p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
              <li>Experienced Trek Leaders</li>
              <li>Daily Health Monitoring</li>
              <li>Emergency Medical Support</li>
              <li>Weather Monitoring</li>
              <li>High-Quality Trekking Equipment</li>
              <li>Risk Assessment Throughout the Journey</li>
            </ul>

            <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Flexible Group Sizes</h2>
            <p>We organize corporate adventures for:</p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
              <li>Small Teams (10–20 Participants)</li>
              <li>Medium Groups (20–50 Participants)</li>
              <li>Large Organizations (50+ Participants)</li>
            </ul>
            <p>Custom itineraries can be created for groups of any size.</p>

            <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Why Himalayan Ibex?</h2>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
              <li>Professionally Managed Adventures</li>
              <li>Experienced Mountain Team</li>
              <li>Customized Itineraries</li>
              <li>Safety-First Operations</li>
              <li>Transparent Pricing</li>
              <li>End-to-End Event Planning</li>
              <li>Local Himalayan Expertise</li>
            </ul>
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--color-pine)', color: 'white', borderRadius: '12px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Plan Your Next Corporate Adventure</h2>
            <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
              Take your team beyond office walls and into the mountains. Let Himalayan Ibex design a memorable trekking experience that inspires collaboration, leadership, and personal growth.
            </p>
            <p style={{ marginBottom: '1.5rem', opacity: 0.9, fontStyle: 'italic', fontSize: '1.1rem' }}>
              Stronger Teams. Greater Adventures. Unforgettable Himalayan Experiences.
            </p>
            <Link href="/contact?subject=Corporate Trek Inquiry" style={{ display: 'inline-block', background: 'var(--color-rust)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}>
              Contact Us for a Proposal
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Private Adventures fallback
  return (
    <main className="section-padding" style={{ background: 'var(--color-snow)', minHeight: '100vh', paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="headline-italic" style={{ marginBottom: '1rem', textAlign: 'center' }}>Private Adventures with Himalayan Ibex</h1>
        <p className="body-text" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-slate)', fontSize: '1.2rem', fontWeight: 500 }}>
          Your Journey. Your Group. Your Rules.
        </p>

        <div className="body-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <p>Some adventures are best shared only with the people who matter most. Whether you’re planning a family holiday, a getaway with friends, a photography expedition, or a special celebration, Himalayan Ibex creates fully customized private trekking experiences across the Himalayas.</p>
          <p>Unlike fixed departure groups, our Private Adventures are designed exclusively for your group, giving you complete flexibility, privacy, and personalized service from start to finish.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Why Choose a Private Adventure?</h2>
          <p>A private trek gives you the freedom to experience the mountains at your own pace without compromising on comfort, safety, or quality.</p>
          <p>With Himalayan Ibex, every journey is carefully planned around your travel dates, fitness level, group size, and adventure goals.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>What Makes Our Private Treks Different?</h2>
          
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-pine)', marginTop: '1rem' }}>Complete Privacy</h3>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Trek exclusively with your own group</li>
            <li>Dedicated trek leader and local guides</li>
            <li>Private campsites wherever possible</li>
            <li>Flexible daily schedule</li>
            <li>Peaceful mountain experience without large groups</li>
          </ul>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-pine)', marginTop: '1rem' }}>Personalized Itinerary</h3>
          <p>Customize every aspect of your adventure.</p>
          <p>Choose your:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Trek Destination</li>
            <li>Departure Date</li>
            <li>Duration</li>
            <li>Difficulty Level</li>
            <li>Group Size</li>
            <li>Accommodation Style</li>
            <li>Pickup Location</li>
          </ul>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-pine)', marginTop: '1rem' }}>Family Friendly</h3>
          <p>Perfect for:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Families with Children</li>
            <li>Multi-Generational Trips</li>
            <li>Couples</li>
            <li>Friends</li>
            <li>Anniversary Celebrations</li>
            <li>Birthday Trips</li>
          </ul>
          <p>We adjust the pace to suit your group’s comfort.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Premium Safety Standards</h2>
          <p>Every private adventure includes:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Experienced Trek Leaders</li>
            <li>First Aid Kit</li>
            <li>Oxygen Cylinder</li>
            <li>Pulse Oximeter</li>
            <li>Weather Monitoring</li>
            <li>Emergency Response Plan</li>
            <li>Daily Health Checks</li>
          </ul>
          <p>Your safety always comes first.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Comfortable Mountain Living</h2>
          <p>Depending on your package, enjoy:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Comfortable Hotels</li>
            <li>Premium Camping Equipment</li>
            <li>Spacious Tents</li>
            <li>Sleeping Bags</li>
            <li>Mattresses</li>
            <li>Hygienic Washroom Facilities</li>
            <li>Fresh Vegetarian Meals</li>
          </ul>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Customize Your Adventure</h2>
          <p>We can organize:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Snow Treks</li>
            <li>Family Treks</li>
            <li>Weekend Escapes</li>
            <li>High-Altitude Expeditions</li>
            <li>Photography Tours</li>
            <li>Camping Experiences</li>
            <li>Wellness Retreats</li>
            <li>Pilgrimage Journeys</li>
            <li>Corporate Adventures</li>
          </ul>
          <p>No two private trips are ever the same.</p>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Choose Your Experience</h2>
          <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <thead>
                <tr style={{ background: 'var(--color-snow)', borderBottom: '2px solid #eee' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>Features</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>Explorer</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>Comfort</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>Accommodation</td>
                  <td style={{ padding: '1rem' }}>Standard Camps</td>
                  <td style={{ padding: '1rem' }}>Premium Camps & Hotels</td>
                  <td style={{ padding: '1rem' }}>Luxury Mountain Stay</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>Meals</td>
                  <td style={{ padding: '1rem' }}>Fresh Vegetarian Meals</td>
                  <td style={{ padding: '1rem' }}>Multi-Course Meals</td>
                  <td style={{ padding: '1rem' }}>Premium Dining Experience</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>Trek Leader</td>
                  <td style={{ padding: '1rem' }}>Shared Support Team</td>
                  <td style={{ padding: '1rem' }}>Dedicated Trek Leader</td>
                  <td style={{ padding: '1rem' }}>Dedicated Trek Team</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>Safety Equipment</td>
                  <td style={{ padding: '1rem' }}>Standard</td>
                  <td style={{ padding: '1rem' }}>Advanced</td>
                  <td style={{ padding: '1rem' }}>Premium Emergency Support</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>Transportation</td>
                  <td style={{ padding: '1rem' }}>Optional</td>
                  <td style={{ padding: '1rem' }}>Included</td>
                  <td style={{ padding: '1rem' }}>Private Vehicle</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>Custom Activities</td>
                  <td style={{ padding: '1rem' }}>Basic</td>
                  <td style={{ padding: '1rem' }}>Moderate</td>
                  <td style={{ padding: '1rem' }}>Fully Personalized</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Perfect For</h2>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-slate)' }}>
            <li>Families</li>
            <li>Couples</li>
            <li>Friends</li>
            <li>Corporate Teams</li>
            <li>Schools & Colleges</li>
            <li>Photography Clubs</li>
            <li>Adventure Groups</li>
            <li>International Travelers</li>
          </ul>

          <hr style={{ margin: '1rem 0', borderColor: '#eee' }} />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-night)' }}>Why Himalayan Ibex?</h2>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'none', color: 'var(--color-slate)' }}>
            <li style={{ marginBottom: '0.5rem' }}>✔ Experienced Local Team</li>
            <li style={{ marginBottom: '0.5rem' }}>✔ Fully Customized Adventures</li>
            <li style={{ marginBottom: '0.5rem' }}>✔ Flexible Departure Dates</li>
            <li style={{ marginBottom: '0.5rem' }}>✔ Transparent Pricing</li>
            <li style={{ marginBottom: '0.5rem' }}>✔ Premium Safety Standards</li>
            <li style={{ marginBottom: '0.5rem' }}>✔ Comfortable Accommodation</li>
            <li style={{ marginBottom: '0.5rem' }}>✔ Responsible & Sustainable Tourism</li>
            <li style={{ marginBottom: '0.5rem' }}>✔ End-to-End Trip Planning</li>
          </ul>
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--color-pine)', color: 'white', borderRadius: '12px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Let’s Plan Your Private Adventure</h2>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
            Tell us where you want to go, when you want to travel, and who you’re travelling with.
          </p>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9, fontStyle: 'italic', fontSize: '1.1rem' }}>
            Our team will create a personalized Himalayan experience designed exclusively for your group.<br/>
            Explore the Himalayas on Your Terms with Himalayan Ibex.
          </p>
          <Link href="/contact?subject=Private Adventure Inquiry" style={{ display: 'inline-block', background: 'var(--color-rust)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}>
            Plan Your Adventure
          </Link>
        </div>
      </div>
    </main>
  );
}
