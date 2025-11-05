import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Services - Greenview Renovation',
  description: 'Transform your home with our remodeling services. Kitchen remodeling, bathroom renovation, room additions, complete home remodeling, design & architectural planning, and accessory dwelling units in South Florida.',
};

const services = [
  {
    title: 'Kitchen Remodeling',
    description: 'Our kitchen remodeling services transform outdated kitchens into modern, functional spaces. As experienced renovation contractors, we create custom designs that match your style and the way that you use your kitchen.',
    details: 'We handle everything including, initial design plans, helping you choose materials, managing timelines and overseeing all contractors, from cabinet installers to electricians.',
    experience: 'Our kitchen remodeling team brings 15 years of local experience to every project. We offer options for every budget, from cabinet refacing to designing complete custom kitchens.',
    link: '/services/kitchen-remodeling',
    image: 'https://greenviewrenovation.com/wp-content/uploads/2024/06/Kitchen-Remodeling-420x315.jpg.webp',
  },
  {
    title: 'Bathroom Remodeling',
    description: 'Our bathroom renovation services create spaces that work better and look beautiful. From outdated layouts to limited storage, we solve your bathroom problems while adding the perfect finishing touches.',
    details: 'Choose from tub to shower conversions, walk in shower renovations, accessible bathroom renovations, we do it all.',
    experience: 'Our complete renovation process includes demolition, plumbing updates, electrical work, tiling, fixture installation, and final touches. Our licensed contractors ensure quality at every step.',
    link: '/services/bathroom-remodeling',
    image: 'https://greenviewrenovation.com/wp-content/uploads/2024/06/Bathroom-Remodeling-420x315.jpg.webp',
  },
  {
    title: 'Room Addition',
    description: 'Create more living space with our expert home renovation and addition services. Whether you need an extra bedroom, home office, or family room, we\'ll expand your home in the Palm Beach area.',
    details: 'Our custom room designs maximize your property\'s potential. Get personalized spaces that match your home\'s style while boosting its market value.',
    experience: 'Choose from a single-room addition, second-story expansion, or detached structure. We handle everything from design and permits to construction and finishing touches.',
    link: '/services/room-addition',
    image: 'https://greenviewrenovation.com/wp-content/uploads/2024/06/Room-Addition-420x315.jpg.webp',
  },
  {
    title: 'Home Remodeling',
    description: 'Imagine your home, but brighter, cleaner, and more modern.',
    details: 'Every room will make you feel special and make your everyday life easier and more enjoyable. We can do that!',
    experience: 'We enjoy making your home a delight. From helping you choose design options to getting you the best supplies at the best price, to building the best function into the best form for your lifestyle.',
    link: '/services/complete-home-remodeling',
    image: 'https://greenviewrenovation.com/wp-content/uploads/2024/06/Complete-Home-Remodeling-420x315.jpg.webp',
  },
  {
    title: 'Design & Architectural Planning',
    description: 'Greenview Renovation\'s experts will help you find the best fix for any problem. You\'ll know exactly what will happen, how much it will cost, and how long it will take.',
    details: 'First, we\'ll talk about what you want. Then, we\'ll show you different ideas on a computer and on paper before we start building.',
    experience: 'This helps save time and money, cuts down on stress, and makes sure you get everything you want.',
    link: '/services/design-architectural-planning',
    image: 'https://greenviewrenovation.com/wp-content/uploads/2024/06/Design-Architectural-Planning-420x315.jpg.webp',
  },
  {
    title: 'Accessory Dwelling Units',
    description: 'Build extra living space that has just the right amount of privacy.',
    details: 'From a bedroom and kitchenette that shares a bathroom (Junior ADU), to a separate building with everything someone needs to live comfortably.',
    experience: 'We have designs ready for whatever you need. Some are universally accessible, some are extra strong against hurricanes, and some can give you an added income stream by renting them out. We can also combine these specialties.',
    link: '/services/accessory-dwelling-units',
    image: 'https://greenviewrenovation.com/wp-content/uploads/2024/06/Room-Addition-420x315.jpg.webp',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ocean-teal-50 via-ocean-teal-100 to-ocean-teal-50 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-gray mb-4">
                Our Services
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-charcoal-gray mb-6">
                What We Offer At GreenView
              </h2>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-charcoal-gray leading-relaxed text-center">
              Transform Your Home with Our Remodeling Services
            </p>
            <p className="text-lg text-charcoal-gray leading-relaxed mt-6">
              If you&apos;ve been searching for &quot;renovation services near me&quot;, you&apos;ve come to the right place! Greenview Renovation offers remodeling services as a full-service renovation company in South Florida. With over 15 years&apos; experience in the area, we can handle any residential renovation or expansion project on time and on budget.
            </p>
          </div>
        </section>

        {/* Services Sections */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`mb-16 ${index !== services.length - 1 ? 'border-b border-gray-200 pb-16' : ''}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-charcoal-gray leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-lg text-charcoal-gray leading-relaxed mb-4">
                      {service.details}
                    </p>
                    <p className="text-lg text-charcoal-gray leading-relaxed mb-6">
                      {service.experience}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-block bg-ocean-teal text-white px-6 py-3 rounded-lg hover:bg-ocean-teal-700 transition font-semibold"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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

