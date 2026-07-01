export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/dashboard/'],
      },
    ],
    sitemap: 'https://himalayanibex.com/sitemap.xml',
    host: 'https://himalayanibex.com',
  };
}
