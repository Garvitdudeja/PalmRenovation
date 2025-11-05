import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Greenview Renovation',
  description: 'Learn about Greenview Renovation - a full-service construction company based in Boyton Beach, Florida with over 15 years of experience in home renovation. Our mission is to put people first.',
};

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ocean-teal-50 via-ocean-teal-100 to-ocean-teal-50 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-gray mb-4">
                About Greenview Renovation
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-6">
                Greenview Renovation
              </h2>
              <p className="text-lg text-charcoal-gray leading-relaxed mb-6">
                Greenview Renovation&apos;s story began with a wish – to change the home renovation experience by putting people first. That&apos;s at the core of every project they complete, no matter how big or small it may be.
              </p>
              <p className="text-lg text-charcoal-gray leading-relaxed mb-6">
                With over 15 years of experience in the home renovation industry, we made it our mission to stand out from the competition. Our goal is to focus on creating spaces that improve each of our client&apos;s lifestyles.
              </p>
              <p className="text-lg text-charcoal-gray leading-relaxed mb-8">
                With an emphasis on exceptional service and high-quality work, Greenview Renovation makes the renovation experience enjoyable for all homeowners. As a full-service construction company based in Boyton Beach, Florida, our team can handle any renovation or expansion project. This includes everything from bathroom renovations to an entirely new construction. We&apos;re dedicated to ensuring you have the best possible experience for your next home renovation.
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
                Our clients are always our top priority. From the first consultation, we&apos;ll pay close attention to your needs without compromising on the details. We promise to keep you in the loop every step of the way. From weekly updates to constant communication through text or phone calls, we&apos;ll make sure you remain informed throughout the entire renovation process.
              </p>
              <p className="text-lg text-charcoal-gray leading-relaxed">
                Our team of experts have mastered several home renovation styles. From state-of-the-art home offices to cozy home theaters and luxurious master bathrooms, there&apos;s nothing that our team can&apos;t handle. We have a team of trusted professionals including in-house architects, engineers and designers to work on your home. Each one brings years of experience to the table, and a commitment to excellence.
              </p>
            </div>

            {/* What We Do */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal-gray mb-6">
                What We Do
              </h3>
              <p className="text-lg text-charcoal-gray leading-relaxed mb-4">
                You can count on us to deliver quality work every time. We&apos;re much more than just a home improvement and home remodeling company. We care about our customers. We guarantee to start the job as promised and complete projects on time, without cutting corners.
              </p>
              <p className="text-lg text-charcoal-gray leading-relaxed">
                We meet with our clients on-site, begin the inspection process and get to know your needs and wants for this renovation. You can browse our portfolio of work while we shop together for the perfect finishes. Our in-house designer will be happy to provide custom designs and 3D rendering services for further inspiration. We care about your home as if it were our own. With our skilled team of experts on board, we guarantee the best quality for your next home renovation.
              </p>
            </div>

            {/* Our Difference */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal-gray mb-6">
                Our Difference
              </h3>
              <p className="text-lg text-charcoal-gray leading-relaxed mb-4">
                We want to create a personal experience for each of our clients. With our team&apos;s years of expertise in home renovations, we are committed to helping you create your dream home. From the initial consultation to the final walk through, we&apos;ll work with you to understand your vision, your lifestyle, and your overall budget.
              </p>
              <p className="text-lg text-charcoal-gray leading-relaxed">
                At Greenview Renovation, our relationships are built on trust. We care about our clients, and we&apos;re dedicated to making sure that your new home works for you and your family. You can rely on us to create a space that truly feels like home.
              </p>
            </div>
          </div>
        </section>

        {/* Get A Free Estimate Section */}
        <section className="py-20 px-4 bg-ocean-teal">
          <div className="max-w-7xl mx-auto">
            <div className="text-center text-white mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get A Free Estimate</h2>
              <p className="text-lg mb-8">
                Send us a message about your project, and we will make sure to get back to you!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">15</div>
                  <div className="text-sm">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-sm">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">5.0</div>
                  <div className="text-sm">Rating on Yelp</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">5.0</div>
                  <div className="text-sm">Rating on Google</div>
                </div>
              </div>
            </div>
            <div className="max-w-2xl mx-auto">
              <ContactForm variant="light" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

