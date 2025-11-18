import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palmrenovate.com';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Palm Development & Renovation Group for your home remodeling needs. Contact us by phone at 813-838-2193, email, or fill out our contact form. Located in Palm Beach, Florida, United States. Serving Palm Beach & Broward County.',
  keywords: [
    'contact Palm Development & Renovation Group',
    'home remodeling quote',
    'free estimate',
    'Boynton Beach contractors',
    'Palm Beach renovation contact',
    'home improvement consultation',
  ],
  openGraph: {
    title: 'Contact Us - Palm Development & Renovation Group',
    description: 'Get in touch with Palm Development & Renovation Group for your home remodeling needs. Contact us by phone, email, or fill out our contact form. Located in Palm Beach, Florida, United States.',
    url: `${siteUrl}/contact`,
    siteName: 'Palm Development & Renovation Group',
    images: [
      {
        url: `${siteUrl}/images/Room-Addition.webp`,
        width: 1200,
        height: 630,
        alt: 'Contact Palm Development & Renovation Group',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Palm Development & Renovation Group',
    description: 'Get in touch with Palm Development & Renovation Group for your home remodeling needs. Contact us by phone, email, or fill out our contact form.',
    images: [`${siteUrl}/images/Room-Addition.webp`],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main>
        {/* Hero Section */}
        <PageHero
          title="Contact Us"
          backgroundImage="/images/Room-Addition.webp"
          backgroundImageAlt="Contact Us - Palm Development & Renovation Group"
        />

        {/* Ready To Start Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
                Ready To Start Your Project?
              </h2>
              <p className="text-lg md:text-xl text-charcoal-gray">
                Palm Development & Renovation Group is here to help every step of the way!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Phone Number */}
              <div className="text-center">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto text-ocean-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal-gray mb-2">Phone Number</h3>
                <a
                  href="tel:813-838-2193"
                  className="text-ocean-teal hover:text-ocean-teal-700 transition font-semibold text-lg"
                >
                  813-838-2193
                </a>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto text-ocean-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal-gray mb-2">Email</h3>
                <a
                  href="mailto:swolkov@palmdevgroup.com"
                  className="text-ocean-teal hover:text-ocean-teal-700 transition font-semibold text-lg break-all"
                >
                  swolkov@palmdevgroup.com
                </a>
              </div>

              {/* Address */}
              <div className="text-center md:col-span-2 lg:col-span-1">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto text-ocean-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal-gray mb-2">Where We Are</h3>
                <p className="text-charcoal-gray">
                  Palm Beach, Florida, United States
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <ContactForm variant="default" />
            </div>
          </div>
        </section>
    </main>
  );
}

