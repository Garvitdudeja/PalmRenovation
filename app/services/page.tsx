import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Services - Palm Renovate',
  description: 'Transform your home with our remodeling services. Kitchen remodeling, bathroom renovation, room additions, complete home remodeling, design & architectural planning, and accessory dwelling units in South Florida.',
};

const services = [
  {
    title: 'Kitchen Remodeling',
    description: 'Our kitchen remodeling services transform outdated kitchens into modern, functional spaces. As experienced renovation contractors, we create custom designs that match your style and the way you use your kitchen.',
    details: 'We handle everything including initial design plans, helping you choose materials, managing timelines, and overseeing all contractors, from cabinet installers to electricians.',
    experience: 'Our kitchen remodeling team brings 15 years of local experience to every project. We offer options for every budget, from cabinet refacing to designing complete custom kitchens.',
    link: '/services/kitchen-remodeling',
    image: '/images/Kitchen-Remodeling-420x315.jpg.webp',
  },
  {
    title: 'Bathroom Remodeling',
    description: 'Our bathroom renovation services create spaces that work better and look beautiful. From outdated layouts to limited storage, we solve your bathroom problems while adding the perfect finishing touches.',
    details: 'Choose from tub-to-shower conversions, walk-in shower renovations, accessible bathroom renovations—we do it all.',
    experience: 'Our complete renovation process includes demolition, plumbing updates, electrical work, tiling, fixture installation, and final touches. Our licensed contractors ensure quality at every step.',
    link: '/services/bathroom-remodeling',
    image: '/images/Bathroom-Remodeling-420x315.jpg.webp',
  },
  {
    title: 'Room Addition',
    description: 'Create more living space with our expert home renovation and addition services. Whether you need an extra bedroom, home office, or family room, we will expand your home in the Palm Beach area.',
    details: 'Our custom room designs maximize your property\'s potential. Get personalized spaces that match your home\'s style while boosting its market value.',
    experience: 'Choose from a single-room addition, second-story expansion, or detached structure. We handle everything from design and permits to construction and finishing touches.',
    link: '/services/room-addition',
    image: '/images/Room-Addition-420x315.webp',
  },
  {
    title: 'Home Remodeling',
    description: 'Envision your home transformed into something brighter, cleaner, and more modern.',
    details: 'Every room will make you feel special and enhance your everyday life, making it easier and more enjoyable. We can make that happen!',
    experience: 'We take pleasure in making your home a delight. From helping you choose design options to securing the best supplies at competitive prices, to building optimal functionality into beautiful form that matches your lifestyle.',
    link: '/services/complete-home-remodeling',
    image: '/images/General-Remodeling-680x500.jpg.webp',
  },
  {
    title: 'Design & Architectural Planning',
    description: 'Palm Renovate\'s experts will help you find the best solution for any problem. You will know exactly what will happen, how much it will cost, and how long it will take.',
    details: 'First, we will discuss what you want. Then, we will show you different ideas on a computer and on paper before we start building.',
    experience: 'This helps save time and money, reduces stress, and ensures you get everything you want.',
    link: '/services/design-architectural-planning',
    image: '/images/Design-Architectural-Planning-420x315.jpg.webp',
  },
  {
    title: 'Accessory Dwelling Units',
    description: 'Create additional living space with just the right amount of privacy.',
    details: 'From a bedroom and kitchenette that shares a bathroom (Junior ADU) to a separate building with everything needed for comfortable living.',
    experience: 'We have designs ready for whatever you need. Some are universally accessible, some are built extra strong against hurricanes, and some can provide an additional income stream through rental. We can also combine these specialties.',
    link: '/services/accessory-dwelling-units',
    image: '/images/Room-Addition-420x315.webp',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <PageHero
          title="Our Services"
          backgroundImage="/images/Room-Addition.webp"
          backgroundImageAlt="Our Services - Palm Renovate"
        />

        {/* Introduction */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-charcoal-gray leading-relaxed text-center">
              Transform Your Home with Our Remodeling Services
            </p>
            <p className="text-lg text-charcoal-gray leading-relaxed mt-6">
              If you&apos;ve been searching for &quot;renovation services near me,&quot; you&apos;ve come to the right place! Palm Renovate offers remodeling services as a full-service renovation company in South Florida. With over 15 years of experience in the area, we can handle any residential renovation or expansion project on time and on budget.
            </p>
          </div>
        </section>

        {/* Services Sections */}
        <section className="py-20 px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="mb-16 border-2 border-ocean-teal-700 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image - Left Column */}
                  <div className="relative w-full h-80 lg:h-auto">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content - Right Column with Light Green Background and Diagonal Pattern */}
                  <div 
                    className="relative p-8 lg:p-12 bg-ocean-teal-50"
                  >
                    {/* Background Image for text side only */}
                    <div className="absolute inset-0 opacity-10 -z-0">
                      <Image
                        src="/images/decor-bg_4-sm.webp"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
                        {service.title}
                      </h3>
                      <p className="text-base text-charcoal-gray leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <p className="text-base text-charcoal-gray leading-relaxed mb-4">
                        {service.details}
                      </p>
                      <p className="text-base text-charcoal-gray leading-relaxed mb-6">
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
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

