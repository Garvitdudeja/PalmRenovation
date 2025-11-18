import Hero from '@/components/Hero';
import CompanyInfo from '@/components/CompanyInfo';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FourSteps from '@/components/FourSteps';
import ServiceAreas from '@/components/ServiceAreas';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palmrenovate.com';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Palm Development & Renovation Group is your trusted local home remodeling company with over 15 years of experience transforming living spaces. Licensed, bonded, and insured contractors serving Palm Beach & Broward County. Specializing in kitchen remodeling, bathroom renovation, room additions, and complete home remodeling.',
  keywords: [
    'home remodeling Palm Beach',
    'home renovation Broward County',
    'kitchen remodeling Boynton Beach',
    'bathroom renovation contractors',
    'room addition services',
    'licensed home contractors',
    'residential remodeling Florida',
  ],
  openGraph: {
    title: 'Palm Development & Renovation Group - Home Remodeling and Renovation Contractors',
    description: 'Transform your home with Palm Development & Renovation Group. Over 15 years of experience in kitchen remodeling, bathroom renovation, room additions, and complete home remodeling in Palm Beach & Broward County.',
    url: siteUrl,
    siteName: 'Palm Development & Renovation Group',
    images: [
      {
        url: `${siteUrl}/images/palmdevgroup_bg.webp`,
        width: 1200,
        height: 630,
        alt: 'Palm Development & Renovation Group - Home Remodeling Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palm Development & Renovation Group - Home Remodeling and Renovation Contractors',
    description: 'Transform your home with Palm Development & Renovation Group. Over 15 years of experience in home remodeling services.',
    images: [`${siteUrl}/images/palmdevgroup_bg.webp`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyInfo />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FourSteps />
      <ServiceAreas />
    </main>
  );
}
