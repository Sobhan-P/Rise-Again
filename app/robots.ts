import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://www.riseagaintech.com/sitemap.xml',
    host: 'https://www.riseagaintech.com',
  };
}
