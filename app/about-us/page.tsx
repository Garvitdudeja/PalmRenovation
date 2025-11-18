import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palmrenovate.com';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Palm Development & Renovation Group - a full-service construction company based in Palm Beach, Florida, United States with over 15 years of experience in home renovation. Our mission is to put people first. Licensed, bonded, and insured contractors serving Palm Beach & Broward County.',
  keywords: [
    'about Palm Development & Renovation Group',
    'home renovation company Florida',
    'construction company Boynton Beach',
    'licensed contractors Palm Beach',
    'home remodeling contractors',
    'experienced renovation team',
  ],
  openGraph: {
    title: 'About Us - Palm Development & Renovation Group',
    description: 'Learn about Palm Development & Renovation Group - a full-service construction company with over 15 years of experience in home renovation. Our mission is to put people first.',
    url: `${siteUrl}/about-us`,
    siteName: 'Palm Development & Renovation Group',
    images: [
      {
        url: `${siteUrl}/images/palmdevgroup_bg.webp`,
        width: 1200,
        height: 630,
        alt: 'About Palm Development & Renovation Group',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Palm Development & Renovation Group',
    description: 'Learn about Palm Development & Renovation Group - a full-service construction company with over 15 years of experience in home renovation.',
    images: [`${siteUrl}/images/palmdevgroup_bg.webp`],
  },
  alternates: {
    canonical: `${siteUrl}/about-us`,
  },
};

export default function AboutUs() {
  return (
    <main>
        {/* Hero Section */}
        <PageHero
          title="About Palm Development & Renovation Group"
          backgroundImage="/images/palmdevgroup_bg.webp"
          backgroundImageAlt="About Palm Development & Renovation Group"
        />

        {/* Main Content */}
        <section className="pb-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-6">
                Palm Development & Renovation Group
              </h2>
              <p className="text-lg text-charcoal-gray leading-relaxed mb-6">
                Palm Development & Renovation Group&apos;s story began with a simple goal – to transform the home renovation experience by putting people first. This philosophy drives every project we complete, regardless of size or scope.
              </p>
              <p className="text-lg text-charcoal-gray leading-relaxed mb-6">
                With over 15 years of experience in the home renovation industry, we have made it our mission to stand out from the competition. Our goal is to focus on creating spaces that enhance each of our clients&apos; lifestyles.
              </p>
              <p className="text-lg text-charcoal-gray leading-relaxed mb-8">
                With an emphasis on exceptional service and high-quality work, Palm Development & Renovation Group makes the renovation experience enjoyable for all homeowners. As a full-service construction company based in Palm Beach, Florida, United States, our team can handle any renovation or expansion project. This includes everything from bathroom renovations to entirely new construction. We&apos;re dedicated to ensuring you have the best possible experience for your next home renovation.
              </p>
              <div className="text-center">
                <Link
                  href="/services"
                  className="inline-block bg-ocean-teal text-white px-8 py-3 rounded-lg hover:bg-ocean-teal-700 transition font-semibold text-lg"
                >
                  View Our Services
                </Link>
              </div>
            </div>

            {/* Our Mission */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal-gray mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-charcoal-gray leading-relaxed mb-4">
                Our clients are always our top priority. From the first consultation, we pay close attention to your needs without compromising on details. We promise to keep you informed every step of the way. From weekly updates to constant communication through text or phone calls, we make sure you remain informed throughout the entire renovation process.
              </p>
              <p className="text-lg text-charcoal-gray leading-relaxed">
                Our team of experts has mastered numerous home renovation styles. From state-of-the-art home offices to cozy home theaters and luxurious master bathrooms, there is nothing our team cannot handle. We have a team of trusted professionals including in-house architects, engineers, and designers to work on your home. Each one brings years of experience and a commitment to excellence.
              </p>
            </div>

            {/* What We Do */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal-gray mb-6">
                What We Do
              </h3>
              <p className="text-lg text-charcoal-gray leading-relaxed mb-4">
                You can count on us to deliver quality work every time. We&apos;re much more than just a home improvement and home remodeling company. We care about our customers. We guarantee to start the job as promised and complete projects on time without cutting corners.
              </p>
              <p className="text-lg text-charcoal-gray leading-relaxed">
                We meet with our clients on-site, begin the inspection process, and get to know your needs and wants for this renovation. You can browse our portfolio of work while we shop together for the perfect finishes. Our in-house designer will be happy to provide custom designs and 3D rendering services for further inspiration. We care about your home as if it were our own. With our skilled team of experts on board, we guarantee the best quality for your next home renovation.
              </p>
            </div>

            {/* Our Difference */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal-gray mb-6">
                Our Difference
              </h3>
              <p className="text-lg text-charcoal-gray leading-relaxed mb-4">
                We want to create a personal experience for each of our clients. With our team&apos;s years of expertise in home renovations, we are committed to helping you create your dream home. From the initial consultation to the final walkthrough, we will work with you to understand your vision, your lifestyle, and your overall budget.
              </p>
              <p className="text-lg text-charcoal-gray leading-relaxed">
                At Palm Development & Renovation Group, our relationships are built on trust. We care about our clients, and we&apos;re dedicated to making sure that your new home works for you and your family. You can rely on us to create a space that truly feels like home.
              </p>
            </div>
          </div>
        </section>
    </main>
  );
}

