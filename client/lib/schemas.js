/**
 * Centralized JSON-LD Schema helpers for Himalayan Ibex SEO.
 * Each function returns a plain object ready to be serialized via JSON.stringify
 * and injected into a <script type="application/ld+json"> tag.
 */

const BASE_URL = 'https://himalayanibex.com';
const LOGO_URL = `${BASE_URL}/android-chrome-512x512.png`;

// ── Organization ──
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Himalayan Ibex',
    alternateName: 'IBEX Trekking',
    url: BASE_URL,
    logo: LOGO_URL,
    description:
      'Premium guided treks in the Indian Himalayas — Uttarakhand, Himachal Pradesh, Sikkim & Ladakh. Small groups, certified guides, leave-no-trace ethics.',
    foundingDate: '2014',
    founder: {
      '@type': 'Person',
      name: 'Alok Rawat',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-6398978309',
      contactType: 'customer service',
      email: 'himalayanibexofficial@gmail.com',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://instagram.com/ibextrekking',
      'https://facebook.com/ibextrekking',
      'https://youtube.com/@ibextrekking',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sankri',
      addressRegion: 'Uttarakhand',
      addressCountry: 'IN',
    },
  };
}

// ── WebSite with SearchAction ──
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Himalayan Ibex',
    alternateName: 'IBEX Trekking',
    url: BASE_URL,
    publisher: {
      '@type': 'Organization',
      name: 'Himalayan Ibex',
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/treks?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// ── LocalBusiness ──
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#localbusiness`,
    name: 'Himalayan Ibex',
    description:
      'Professional trekking company offering guided expeditions across the Indian Himalayas since 2014.',
    url: BASE_URL,
    telephone: '+91-6398978309',
    email: 'himalayanibexofficial@gmail.com',
    image: LOGO_URL,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sankri Base Camp',
      addressLocality: 'Sankri',
      addressRegion: 'Uttarakhand',
      postalCode: '249155',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.078206,
      longitude: 78.183056,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    sameAs: [
      'https://instagram.com/ibextrekking',
      'https://facebook.com/ibextrekking',
      'https://youtube.com/@ibextrekking',
    ],
  };
}

// ── WebPage (for individual pages) ──
export function webPageSchema({ title, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: url.startsWith('http') ? url : `${BASE_URL}${url}`,
    isPartOf: { '@type': 'WebSite', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Himalayan Ibex',
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
  };
}

// ── BreadcrumbList ──
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? (item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`) : undefined,
    })),
  };
}

// ── FAQPage ──
export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };
}

// ── Article / BlogPosting ──
export function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image?.startsWith('http') ? post.image : `${BASE_URL}${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'IBEX Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Himalayan Ibex',
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
    url: `${BASE_URL}/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
  };
}

// ── TouristTrip (for trek pages) ──
export function trekSchema(trek) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: `${trek.name} Trek`,
    description: trek.shortDesc,
    url: `${BASE_URL}/treks/${trek.slug}`,
    image: trek.images?.[0]?.url
      ? (trek.images[0].url.startsWith('http') ? trek.images[0].url : `${BASE_URL}${trek.images[0].url}`)
      : undefined,
    touristType: 'Adventure Trekking',
    provider: {
      '@type': 'Organization',
      name: 'Himalayan Ibex',
      url: BASE_URL,
    },
  };

  if (trek.duration) {
    schema.itinerary = {
      '@type': 'ItemList',
      numberOfItems: parseInt(trek.duration) || undefined,
      description: `${trek.duration} trek from ${trek.region || 'the Himalayas'}`,
    };
  }

  if (trek.price) {
    schema.offers = {
      '@type': 'Offer',
      price: String(trek.price).replace(/[^0-9]/g, ''),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/treks/${trek.slug}`,
    };
  }

  return schema;
}

// ── Helper to render a JSON-LD <script> tag (for use in JSX) ──
export function JsonLd({ data }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
