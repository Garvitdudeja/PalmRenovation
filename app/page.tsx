import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FourSteps from '@/components/FourSteps';
import ServiceAreas from '@/components/ServiceAreas';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        {/* Company Info Section */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Subtitle with line */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-ocean-teal"></div>
              <h2 className="text-lg md:text-xl font-semibold text-ocean-teal">
                Palm Renovate
              </h2>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-gray mb-6 leading-tight">
              Home Remodeling and Renovation Contractors
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-charcoal-gray mb-8 leading-relaxed">
              Palm Renovate is your trusted local home remodeling company with over 15 years of experience in transforming living spaces. Our team is fully licensed, bonded and insured. We are here to build lifetime relationships with all of our clients. We don&apos;t just create promises, but we make sure we earn your trust by being reliable and delivering on our word as your local home remodeling contractors in Palm Beach & Broward County.
            </p>

            {/* About Us Button */}
            <Link
              href="/about-us"
              className="inline-block bg-ocean-teal text-white px-8 py-4 rounded-lg hover:bg-ocean-teal-700 transition font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              About Us
            </Link>
          </div>
        </section>
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <FourSteps />
        <ServiceAreas />
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
