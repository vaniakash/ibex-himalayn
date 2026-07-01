import { TREKS } from '@/lib/treks-data';
import { BLOG_POSTS } from '@/lib/blog-data';

const BASE_URL = 'https://himalayanibex.com';

export default function sitemap() {
  const now = new Date();

  // ── Static pages ──
  const staticPages = [
    { url: `${BASE_URL}`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/treks`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about/mission`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/faqs`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/safety`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/how-to-reach`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/pilgrimages`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/custom-adventures`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/trail-moments`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/terms-conditions`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/cancellation-policy`, changeFrequency: 'yearly', priority: 0.3 },
    // Seasonal pages
    { url: `${BASE_URL}/winter`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/summer`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/monsoon`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/spring`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/autumn`, changeFrequency: 'monthly', priority: 0.7 },
  ].map((page) => ({ ...page, lastModified: now }));

  // ── Dynamic trek pages ──
  const trekPages = TREKS.map((trek) => ({
    url: `${BASE_URL}/treks/${trek.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // ── Dynamic blog pages ──
  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...trekPages, ...blogPages];
}
