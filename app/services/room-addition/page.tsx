import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';
import IntroSection from '@/components/IntroSection';
import ProfessionalServiceSection from '@/components/ProfessionalServiceSection';
import TrustedProfessionalsSection from '@/components/TrustedProfessionalsSection';
import RemodelingProcessSection from '@/components/RemodelingProcessSection';
import BuildDreamSection from '@/components/BuildDreamSection';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palmrenovate.com';

export const metadata: Metadata = {
    title: 'Room Addition',
    description: 'Expand your living space with professional room addition services in Palm Beach and Broward County. Custom designs, increased property value, and expert construction. Build up, build out, or build new.',
    keywords: [
        'room addition Palm Beach',
        'home addition Broward County',
        'room addition contractors',
        'home expansion services',
        'residential additions',
        'bathroom addition',
        'kitchen addition',
        'home addition contractors',
        'room addition Boynton Beach',
        'custom room addition',
    ],
    openGraph: {
        title: 'Room Addition - Palm Renovate',
        description: 'Expand your living space with professional room addition services in Palm Beach and Broward County. Custom designs, increased property value, and expert construction.',
        url: `${siteUrl}/services/room-addition`,
        siteName: 'Palm Renovate',
        images: [
            {
                url: `${siteUrl}/images/room-addition/herobanner.webp`,
                width: 1200,
                height: 630,
                alt: 'Room Addition Services - Palm Renovate',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Room Addition - Palm Renovate',
        description: 'Expand your living space with professional room addition services. Custom designs, increased property value, and expert construction.',
        images: [`${siteUrl}/images/room-addition/herobanner.webp`],
    },
    alternates: {
        canonical: `${siteUrl}/services/room-addition`,
    },
};

export default function RoomAdditionPage() {
    // Intro Section Data
    const introSectionData = {
        imageSrc: '/images/room-addition/room-addition-intro.webp',
        imageAlt: 'Beautiful room addition with modern design',
        text: 'Moving to a more suitable home is, let\'s face it, a LOT. A lot of looking, a lot of settling, a lot of packing, and moving, and waiting for your previous home to sell, not to mention a lot of payments for years to come. Instead, a room addition from Palm Development & Renovation Group can turn the place where your memories live into the place that suits your household\'s current needs to a T.',
        linkHref: '/services',
        linkText: 'View All Services',
    };

    // Advantages Section Data
    const advantagesSectionData = {
        title: 'Advantages of Home Additions in Palm Beach and Broward County',
        paragraphs: [
            'Is your family feeling a little cramped lately? Are you expecting a new member, or making plans to support those who supported you through childhood? Any type of new room addition from Palm Development & Renovation Group will increase your property value and quality of life.',
        ],
        services: [
            {
                title: 'Increased Property Value',
                description: 'Since homes are categorized for pricing by the number of rooms they have, a well-built addition is an investment, not only in the functionality and comfort of your people now, but also in their future resilience and prosperity. It\'s a win-win choice!',
            },
            {
                title: 'Increased Living Space',
                description: 'There are 3 main ways to expand your living space: Build up, build out, or build new. You can add a story, add a room, add a few rooms. Add an additional building to your yard.',
            },
            {
                title: 'Custom Room Designs',
                description: 'Our designers and architects know how to lay out the flow of people, utilities and services for maximum convenience and minimum cost. We take into account the style and materials of your existing residence, harmoniously updating the whole. We also make sure that your new space is solid and will serve for at least as long as the existing structure.',
            },
            {
                title: 'Single Contract, Single Source',
                description: 'We all know how messages can get lost in translation. By hiring a single local design-build firm, you choose a well-oiled machine for taking your custom home addition from the first idea to the last occupancy permit with non-stop internal communication.',
            },
        ],
    };

    // Professional Home Addition Contractors Section Data
    const professionalContractorsSectionData = {
        title: 'Professional Home Addition Contractors Palm Beach and Broward County',
        paragraphs: [
            'Palm Development & Renovation Group has the experienced home addition contractors to see your project from inception to conclusion, all in-house. Here are some of the residential additions that we offer:',
        ],
        services: [
            {
                title: 'Bathroom Addition',
                description: 'An added bathroom might incorporate spa-style amenities right at home, or give guests a place to go without having to go upstairs. If you have a pool, it could be a place for guests to change.',
            },
            {
                title: 'Kitchen Addition',
                description: 'A kitchen can be about more than cooking. Opening and enlarging the kitchen brings everyone together while getting things done, like homework, paperwork, learning to help around mealtimes, and enjoying a game or favorite show.',
            },
        ],
    };

    // Trusted Contractors Section Data
    const trustedContractorsSectionData = {
        title: 'Trusted Contractors for Room Additions',
        paragraph: 'We believe in building lasting relationships with all our clients, so we want every step of the process to be comfortable, just like your new addition. To that end, you can expect the following deliverables:',
        features: [
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                ),
                title: 'Detailed Quote',
                description: 'We provide comprehensive, transparent quotes that break down all costs and timelines so you know exactly what to expect from your room addition project.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                ),
                title: 'Expert Planning',
                description: 'Our experienced team handles all planning, material selection, and coordination to ensure your room addition is built to last and meets all local building codes.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                ),
                title: 'Quality Construction',
                description: 'We use only the highest quality materials and construction methods, ensuring your room addition is built to the same standards as the rest of your home.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                ),
                title: 'Single Point of Contact',
                description: 'With our design-build approach, you have one dedicated team handling everything from design to construction, ensuring seamless communication throughout your project.',
            },
        ],
    };

    // Room Addition Process Section Data
    const roomAdditionProcessSectionData = {
        title: 'Our Room Addition Process',
        paragraph: 'We believe in building lasting relationships with all our clients, so we want every step of the process to be comfortable, just like your new addition. Here is a breakdown of how we deliver results:',
        steps: [
            { number: 1, title: 'Detailed Quote' },
            { number: 2, title: 'Planning & Materials' },
            { number: 3, title: 'Mockup/Drawings' },
            { number: 4, title: 'Material & Finish Selection' },
            { number: 5, title: 'Demolition & Construction' },
            { number: 6, title: 'Site Walk Through & Delivery' },
        ],
    };

    // Build Dream Section Data
    const buildDreamSectionData = {
        title: 'Next Steps to Build More Space – Trust Your Local Home Addition Contractors',
        paragraph: 'If you dream of more space, whether it\'s to increase your income, comfort, peace or relaxation, we have the start-to-finish process to bring your dream home. Contact us or call today!',
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
                title="Room Addition"
                backgroundImage="/images/room-addition/herobanner.webp"
                backgroundImageAlt="Room Addition - Palm Renovate"
            />

            {/* Intro Section */}
            <IntroSection {...introSectionData} />

            {/* Advantages Section */}
            <ProfessionalServiceSection {...advantagesSectionData} />

            {/* Professional Home Addition Contractors Section */}
            <ProfessionalServiceSection {...professionalContractorsSectionData} />

            {/* Trusted Contractors Section */}
            <TrustedProfessionalsSection {...trustedContractorsSectionData} />

            {/* Our Room Addition Process Section */}
            <RemodelingProcessSection {...roomAdditionProcessSectionData} />

            {/* Build Your Dream Section */}
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

