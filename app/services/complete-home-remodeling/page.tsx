import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';
import IntroSection from '@/components/IntroSection';
import ProfessionalServiceSection from '@/components/ProfessionalServiceSection';
import TransformSection from '@/components/TransformSection';
import TrustedProfessionalsSection from '@/components/TrustedProfessionalsSection';
import BuildDreamSection from '@/components/BuildDreamSection';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palmrenovate.com';

export const metadata: Metadata = {
    title: 'Complete Home Remodeling',
    description: 'Transform your entire home with our professional complete home remodeling services in Palm Beach and Broward County. Full home renovation, design, and construction. Licensed contractors with 15+ years of experience.',
    keywords: [
        'complete home remodeling Palm Beach',
        'full home renovation Broward County',
        'whole home remodeling',
        'home renovation contractors',
        'complete home renovation',
        'full house remodel',
        'home remodeling services',
        'residential remodeling contractors',
        'home renovation Boynton Beach',
        'whole house renovation',
    ],
    openGraph: {
        title: 'Complete Home Remodeling - Palm Renovate',
        description: 'Transform your entire home with our professional complete home remodeling services in Palm Beach and Broward County. Full home renovation, design, and construction.',
        url: `${siteUrl}/services/complete-home-remodeling`,
        siteName: 'Palm Renovate',
        images: [
            {
                url: `${siteUrl}/images/complete home/hero.webp`,
                width: 1200,
                height: 630,
                alt: 'Complete Home Remodeling Services - Palm Renovate',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Complete Home Remodeling - Palm Renovate',
        description: 'Transform your entire home with our professional complete home remodeling services. Full home renovation, design, and construction.',
        images: [`${siteUrl}/images/complete home/hero.webp`],
    },
    alternates: {
        canonical: `${siteUrl}/services/complete-home-remodeling`,
    },
};

export default function CompleteHomeRemodelingPage() {
    // Intro Section Data
    const introSectionData = {
        imageSrc: '/images/complete home/intro.webp',
        imageAlt: 'Beautifully remodeled home interior',
        text: 'Your home is your sanctuary. It should reflect your personality and match your lifestyle. If your current home needs a makeover, partner with our team for trustworthy home remodeling services. Palm Development & Renovation Group is here to help you update your home, improve functionality, and design a home that fits your family\'s needs perfectly.',
        linkHref: '/services',
        linkText: 'View All Services',
    };

    // Professional Home Remodeling Services Section Data
    const professionalServicesData = {
        title: 'Professional Home Remodeling Services',
        paragraphs: [
            'Palm Development & Renovation Group offers a full range of home remodeling services to upgrade your home and lifestyle. We specialize in a variety of general remodeling work. Our team is capable of handling any project regardless of complexity and size. We have an in-house team of seasoned experts who will see your project from concept to completion.',
            'We\'ll help you fine-tune your home improvement plan with modern yet functional design ideas to give your home the perfect touch. So whether your goal is to conduct repairs, increase your home\'s value, improve energy efficiency, maximize space, or make your home safer, Palm Development & Renovation Group can help you accomplish that role.',
        ],
        imageSrc: '/images/complete home/professional.webp',
        imageAlt: 'Professional home remodeling services',
        services: [
            {
                title: 'Lighting',
                description: 'Upgrade your home\'s lighting with modern fixtures and energy-efficient solutions that enhance both functionality and ambiance.',
            },
            {
                title: 'Flooring',
                description: 'Transform your floors with high-quality materials including hardwood, tile, luxury vinyl, and more to match your style and budget.',
            },
            {
                title: 'Windows and doors',
                description: 'Replace or upgrade windows and doors to improve energy efficiency, security, and curb appeal.',
            },
            {
                title: 'Home additions',
                description: 'Expand your living space with expertly designed and constructed room additions that seamlessly integrate with your existing home.',
            },
            {
                title: 'Bedrooms',
                description: 'Create the perfect retreat with custom bedroom designs that maximize comfort, storage, and style.',
            },
            {
                title: 'Bathrooms',
                description: 'Transform your bathrooms into spa-like spaces with modern fixtures, efficient layouts, and luxurious finishes.',
            },
            {
                title: 'Kitchens',
                description: 'Design and build your dream kitchen with custom cabinets, countertops, and modern appliances.',
            },
            {
                title: 'Skylights and sun tunnels',
                description: 'Bring natural light into your home with strategically placed skylights and sun tunnels.',
            },
            {
                title: 'Sheetrock installation',
                description: 'Professional drywall installation and finishing for smooth, seamless walls and ceilings.',
            },
            {
                title: 'Painting and finishing/refinishing',
                description: 'Complete interior and exterior painting services with premium finishes that protect and beautify your home.',
            },
        ],
    };

    // Whole Home Remodeling Section Data
    const wholeHomeRemodelingData = {
        title: 'Whole Home Remodeling',
        paragraph: 'Palm Development & Renovation Group offers full home remodeling based on your vision and lifestyle. This includes complete gutting, demolition and remodeling.',
        projects: [
            {
                title: 'Design',
                description: 'We provide accurate designs that are fundamental to the architectural aspect of your project. Utilizing the latest tools and techniques, we draft a design plan that progresses from conceptualization to final design drawings.',
            },
            {
                title: 'Supply',
                description: 'We work with different suppliers and ensure all materials are ordered and delivered on time and are of the highest quality. Our team handles all the communication so you don\'t have to.',
            },
            {
                title: 'Build',
                description: 'Count on our team for exceptional craftsmanship, which is guaranteed. Through strategic planning, we acquire the necessary permits and construct your home according to the drawings, offering a safe and seamless construction process.',
            },
        ],
        imageSrc: '/images/complete-home-remodeling/whole-home-remodel.webp',
        imageAlt: 'Complete home remodeling project in progress',
    };

    // Budget Section Data
    const budgetSectionData = {
        title: 'How Much Should You Budget for Your Home Remodeling?',
        paragraphs: [
            'Your home remodeling costs will depend on the scope and complexity of the project. In general, you can expect to spend $100-$250+ per square foot, with the average cost being $175 per square foot. The types of finishes you choose play a large role in costs.',
            'Also keep in mind that some areas of the home will cost more to remodel than others. Kitchens and bathrooms have additional elements that need to be installed and require specialized work, which can affect material and labor costs.',
        ],
        services: [],
    };

    // Why Choose Section Data
    const whyChooseSectionData = {
        title: 'Why Choose Palm Development & Renovation Group for Your Next Home Remodeling?',
        paragraph: 'Palm Development & Renovation Group has successfully completed countless home projects. With 15 years of experience and 500+ satisfied clients, we are committed to providing the best home remodeling service in South Florida. Our quality is consistent from start to finish and provides a single point of contact for a hassle-free remodeling experience.',
        features: [
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                ),
                title: 'Licensed & Insured',
                description: 'We are fully licensed and insured, giving you peace of mind that your project is in professional hands.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                ),
                title: 'In-House Team',
                description: 'Our experienced in-house team ensures consistent quality and seamless communication throughout your entire project.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                ),
                title: 'Experienced Remodeling Contractors',
                description: 'With 15 years of experience and 500+ satisfied clients, our contractors bring expertise and reliability to every project.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                ),
                title: 'Open Communication',
                description: 'We maintain transparent, open communication throughout your project, keeping you informed every step of the way.',
            },
        ],
    };

    // Build Dream Section Data
    const buildDreamSectionData = {
        title: 'Your Vision, Our Team – Modern Home Remodeling You Can Trust',
        paragraph: 'Partner with Palm Development & Renovation Group for superior full home remodeling. Our team is here to help you design and construct your dream home. Enhance your lifestyle and home with remodeling contractors you can rely on. Get in touch to schedule your free consultation.',
        linkHref: '/contact',
        linkText: 'Contact Us Today',
    };

    // FAQ Data
    const faqData = [
        {
            question: 'What services does Palm Development & Renovation Group offer?',
            answer: 'Palm Development & Renovation Group specializes in a wide range of home renovation and construction services to meet all your needs. Our offerings include kitchen remodeling, bathroom remodeling, new construction projects, flooring solutions, and comprehensive design services. Whether you\'re looking to update a single room or undertake a full-scale renovation, our team has the expertise and experience to bring your vision to life.',
        },
        {
            question: 'How does the project process work with Palm Development & Renovation Group?',
            answer: 'Initial consultation, then detailed quote and agreement, and then the design team starts working to help visualize the change, etc. This is aside from projects that require architectural planning, for which we will start with plans and then move on to a contract for construction and design.',
        },
        {
            question: 'How long does a typical renovation project take with Palm Development & Renovation Group?',
            answer: 'The timeline for a renovation project can vary widely depending on the scope and complexity of the work. A simple bathroom or kitchen remodel may take several weeks, while larger projects like new constructions or extensive renovations could take several months. During the initial consultation, we\'ll provide a more accurate timeline based on your specific project requirements. Our goal is always to complete your project efficiently without compromising on quality.',
        },
        {
            question: 'Does Palm Development & Renovation Group offer any warranties or guarantees on their work?',
            answer: 'Yes, we stand behind the quality of our work with a comprehensive warranty covering labor and materials. The specific terms of the warranty depend on the project and will be clearly outlined in your contract. We believe in the importance of peace of mind for our clients and are committed to ensuring your complete satisfaction with the finished project. For any concerns or issues that arise post-completion, we\'re here to provide prompt and effective solutions.',
        },
    ];

    return (
        <main>
            {/* Hero Section */}
            <PageHero
                title="Complete Home Remodeling"
                backgroundImage="/images/complete home/hero.webp"
                backgroundImageAlt="Complete Home Remodeling - Palm Renovate"
            />

            {/* Intro Section */}
            <IntroSection {...introSectionData} />

            {/* Professional Home Remodeling Services Section */}
            <ProfessionalServiceSection {...professionalServicesData} />

            {/* Whole Home Remodeling Section */}
            <TransformSection {...wholeHomeRemodelingData} />

            {/* Budget Section */}
            <ProfessionalServiceSection {...budgetSectionData} />

            {/* Why Choose Section */}
            <TrustedProfessionalsSection {...whyChooseSectionData} />

            {/* Build Dream Section */}
            <BuildDreamSection {...buildDreamSectionData} />

            {/* FAQ Section */}
            <FAQAccordion faqs={faqData} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqData.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
        </main>
    );
}

