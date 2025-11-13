import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palmrenovate.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about-us',
    '/contact',
    '/portfolio',
    '/services',
    '/services/kitchen-remodeling',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
    priority: route === '' ? 1 : route.startsWith('/services') ? 0.8 : 0.7,
  }));
}

