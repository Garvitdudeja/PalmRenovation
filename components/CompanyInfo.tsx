import Link from 'next/link';
import ContactForm from './ContactForm';

const CompanyInfo = () => {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Company Info */}
          <div className="flex flex-col justify-center">
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
              Palm Renovate is your trusted local home remodeling company with over 15 years of experience transforming living spaces. Our team is fully licensed, bonded, and insured. We are here to build lasting relationships with all of our clients. We do not just make promises; we earn your trust by being reliable and delivering on our word as your local home remodeling contractors in Palm Beach & Broward County.
            </p>

            {/* About Us Button */}
            <Link
              href="/about-us"
              className="inline-block bg-ocean-teal text-white px-8 py-4 rounded-lg hover:bg-ocean-teal-700 transition font-semibold text-lg shadow-lg hover:shadow-xl self-start"
            >
              About Us
            </Link>
          </div>

          {/* Right Column - Contact Form */}
          <div className='static lg:absolute lg:right-20 lg:top-[-100px]'>
            <ContactForm variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;

