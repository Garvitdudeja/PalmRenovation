import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import PortfolioPagination from '@/components/PortfolioPagination';
import PortfolioScrollHandler from '@/components/PortfolioScrollHandler';
import Image from 'next/image';
import { Suspense } from 'react';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palmrenovate.com';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'View our portfolio of completed home renovation projects including kitchen remodeling, bathroom renovations, and complete home remodels in South Florida. See examples of our quality work in Palm Beach and Broward County.',
  keywords: [
    'Palm Development & Renovation Group portfolio',
    'home renovation projects',
    'kitchen remodeling examples',
    'bathroom renovation gallery',
    'home remodeling before and after',
    'South Florida renovation projects',
  ],
  openGraph: {
    title: 'Portfolio - Palm Development & Renovation Group',
    description: 'View our portfolio of completed home renovation projects including kitchen remodeling, bathroom renovations, and complete home remodels in South Florida.',
    url: `${siteUrl}/portfolio`,
    siteName: 'Palm Development & Renovation Group',
    images: [
      {
        url: `${siteUrl}/images/Room-Addition.webp`,
        width: 1200,
        height: 630,
        alt: 'Palm Development & Renovation Group Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Palm Development & Renovation Group',
    description: 'View our portfolio of completed home renovation projects including kitchen remodeling, bathroom renovations, and complete home remodels.',
    images: [`${siteUrl}/images/Room-Addition.webp`],
  },
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
};

const ITEMS_PER_PAGE = 12;

const allPortfolioItems = [
  {
    category: 'General Remodeling',
    title: 'Black and White Kitchen',
    image: '/images/potfolio/kitchen-with-white-cabinets-and-black-appliances-680x500.webp',
    imageUrl: null,
  },
  {
    category: 'General Remodeling',
    title: 'Hypoluxo Kitchen',
    image: '/images/potfolio/kitchen-with-grey-cabinets-and-stainless-appliances-680x500.webp',
    imageUrl: null,
  },
  {
    category: 'General Remodeling',
    title: 'Gulf Stream Bathroom',
    image: '/images/potfolio/gulf-stream-bathroom-after-remodel-680x500..webp',
    imageUrl: null,
  },
  {
    category: 'General Remodeling',
    title: 'Delray Beach Kitchen Remodel',
    image: '/images/potfolio/kitchen-view-after-remodel-delray-beach-680x500.webp',
    imageUrl: null,
  },
  {
    category: 'General Remodeling',
    title: 'Complete Home Remodel',
    image: '/images/potfolio/full-home-Remodel-With-Modern-Design-680x500.webp',
    imageUrl: null,
  },
  {
    category: 'General Remodeling',
    title: 'Modern Kitchen Remodel with Expanded Island',
    image: '/images/potfolio/modern-kitchen-with-white-cabinets-and-large-island-680x500.webp',
    imageUrl: null,
  },
  {
    category: 'General Remodeling',
    title: 'Full House Remodel',
    image: '/images/potfolio/full-home-Remodel-With-Modern-Design-680x500.webp',
    imageUrl: null,
  },
  {
    category: 'General Remodeling',
    title: 'Margate Kitchen',
    image: '/images/potfolio/chic-kitchen-with-dark-grey-cabinets--680x500.webp',
    imageUrl: null,
  },
  {
    category: 'General Remodeling',
    title: 'Boynton Beach Bathroom Remodel',
    image: '/images/potfolio/bathroom-with-glass-shower-tub-and-modern-vanity-680x500.webp',
    imageUrl: null,
  },
  {
    category: 'General Remodeling',
    title: 'Traditional Home Renovation',
    image: '/images/potfolio/double-vanity-bathroom-renovation-680x500.webp',
    imageUrl: null,
  },
  {
    category: 'General Remodeling',
    title: 'Spa-like Bathroom Renovation',
    image: '/images/potfolio/luxury-bathroom-remodel-680x500.webp',
    imageUrl: null,
  },
  {
    category: 'General Remodeling',
    title: 'Historic Home Renovation',
    image: '/images/potfolio/historic-home-full-renovation-680x500.webp',
    imageUrl: null,
  },
  // Page 2 items
  {
    category: 'General Remodeling',
    title: 'Mid-Century Home Redesign',
    image: '/images/potfolio/modern-bathroom-design-680x500.webp',
    imageUrl: null,
  },
  {
    category: 'Full Kitchen Remodel',
    title: 'Classic Kitchen Design Project',
    image: '/images/potfolio/classic-home-kitchen-renovation-680x500.webp',
    imageUrl: null,
  },
  {
    category: 'Full Kitchen Remodel',
    title: 'Farmhouse Kitchen Renovation',
    image: '/images/potfolio/kitchen-with-island-remodeling-project-680x500.webp',
    imageUrl: null,
  },
  {
    category: 'General Remodeling',
    title: 'Sustainable Remodeling for a Greener Home',
    image: '/images/potfolio/modern-house-pool-builder-680x500.webp',
    imageUrl: null,
  },
  {
    category: 'General Remodeling',
    title: 'Interior Home Makeover Project',
    image: '/images/potfolio/custom-home-remodeling-project-680x500.webp',
    imageUrl: null,
  },
];

interface PortfolioPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function PortfolioPage({ searchParams }: PortfolioPageProps) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1', 10);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const portfolioItems = allPortfolioItems.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allPortfolioItems.length / ITEMS_PER_PAGE);
  return (
    <div className="min-h-screen">
      <Header />
      <Suspense fallback={null}>
        <PortfolioScrollHandler />
      </Suspense>
      <main>
        {/* Hero Section */}
        <PageHero
          title="Our Portfolio"
          backgroundImage="/images/Room-Addition.webp"
          backgroundImageAlt="Our Portfolio - Palm Development & Renovation Group"
        />

        {/* Portfolio Intro */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal-gray mb-4">
              Check Out The Palm Development & Renovation Group Difference
            </h2>
            <p className="text-lg md:text-xl text-charcoal-gray">
              Transform Your Home with Our Renovation Services
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section id="portfolio-grid" className="py-12 px-4 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <img
                        src={item.imageUrl || ''}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-sm font-semibold text-ocean-teal mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-lg font-bold text-charcoal-gray">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <PortfolioPagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

