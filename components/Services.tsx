"use client"
import Link from 'next/link';
import Image from 'next/image';


const additionalServices = [
    {
        title: 'Kitchen Remodeling',
        description: "We'll help you redesign your kitchen with an improved layout that transforms the space and customizes it into a kitchen that better serves you and your family.",
        link: '/services/kitchen-remodeling',
        image: '/images/Kitchen-Remodeling-420x315.jpg.webp',
    },
    {
        title: 'Bathroom Remodeling',
        description: 'Upgrade your bathroom for comfort, convenience, and style with a new shower, flooring, lighting, and more. Consider a tub-to-shower conversion or create an accessible bathroom design.',
        link: '/services/bathroom-remodeling',
        image: '/images/Bathroom-Remodeling-420x315.jpg.webp',
    },
    {
        title: 'Room Addition',
        description: 'Need more space? Our team of remodeling contractors will help you expand your home with a bump-out, sunroom addition, garage conversion, ADU, or second-story addition.',
        link: '/services/room-addition',
        image: '/images/Room-Addition-420x315.webp',
    },
    {
        title: 'Complete Home Remodeling',
        description: "Fall in love with your home all over again with home remodeling contractors that maximize your home's potential and redesign your living space for improved function and appeal.",
        link: '/services/complete-home-remodeling',
        image: '/images/General-Remodeling-420x315.jpg.webp',
    },
    {
        title: 'Design & Architectural Planning',
        description: "As a residential remodeling company, Palm Development & Renovation Group delivers exceptional design and architectural services with precision, creativity, and execution that makes all the difference.",
        link: '/services/design-architectural-planning',
        image: '/images/Design-Architectural-Planning-420x315.jpg.webp',
    },
    {
        title: 'All Our Services',
        description: "Palm Development & Renovation Group offers a comprehensive selection of remodeling and renovation services throughout Palm Beach & Broward County.",
        link: '/services',
        image: '/images/Kitchen-Remodeling-420x315.jpg.webp',
    },
];

const Services = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <style jsx>{`
                .border-divider {
                    transform: translate(-50%, -50%) rotate(-5deg);
                    transition: transform 0.3s ease, width 0.3s ease;
                }
                .group:hover .border-divider {
                    transform: translate(-50%, -50%) rotate(0deg);
                }
            `}</style>
            <div className="max-w-[90rem] mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-2">
                        Our Services
                    </h2>
                    <h3 className="text-xl md:text-2xl text-charcoal-gray font-semibold mb-8">
                        What We Offer At Palm Development & Renovation Group
                    </h3>
                </div>

                {/* Two Additional Cards Side by Side */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
                    {additionalServices.map((service) => (
                        <div
                            key={service.title}
                            className="group relative bg-white border-2 border-ocean-teal rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-[338px]"
                        >
                            {/* Tilted Border Divider */}
                            <div 
                                className="border-divider absolute left-1/2 top-1/2 w-8 group-hover:w-[2px] bg-ocean-teal z-10 hidden md:block" 
                                style={{ 
                                    height: 'calc(100% / 0.966)', 
                                    transformOrigin: 'center center'
                                }}
                            ></div>
                            
                            <div className="flex flex-col md:flex-row h-full relative">
                                {/* Image on Left */}
                                <div className="relative w-full md:w-1/2 h-full overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                
                                {/* Content on Right */}
                                <div className="px-10 py-6 flex-1 flex flex-col justify-center">
                                    <div>
                                        <h3 className="text-xl font-bold text-charcoal-gray mb-4">{service.title}</h3>
                                        <p className="text-charcoal-gray mb-4 leading-relaxed">{service.description}</p>
                                    </div>
                                    <Link
                                        href={service.link}
                                        className="inline-flex items-center text-ocean-teal hover:text-ocean-teal-700 transition-all duration-300 self-start group-hover:translate-x-2"
                                        aria-label={`Learn more about ${service.title}`}
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/services"
                        className="inline-block btn-gradient-palm text-white px-8 py-3 rounded-lg transition font-semibold"
                    >
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
