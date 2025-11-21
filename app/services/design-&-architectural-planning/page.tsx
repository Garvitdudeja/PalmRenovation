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
    title: 'Design & Architectural Planning',
    description: 'Professional architectural planning and design services in Palm Beach and Broward County. Complete design-build solutions for home additions, remodels, and ADUs. Licensed and experienced architects.',
    keywords: [
        'architectural planning Palm Beach',
        'design build contractors Broward County',
        'architectural design services',
        'home design planning',
        'design build contractors',
        'architectural planning services',
        'ADU design',
        'space planning services',
        'architectural design Boynton Beach',
        'design build firm',
    ],
    openGraph: {
        title: 'Design & Architectural Planning - Palm Renovate',
        description: 'Professional architectural planning and design services in Palm Beach and Broward County. Complete design-build solutions for home additions, remodels, and ADUs.',
        url: `${siteUrl}/services/design-architectural-planning`,
        siteName: 'Palm Renovate',
        images: [
            {
                url: `${siteUrl}/images/Design and Architechture/hero.webp`,
                width: 1200,
                height: 630,
                alt: 'Design & Architectural Planning Services - Palm Renovate',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Design & Architectural Planning - Palm Renovate',
        description: 'Professional architectural planning and design services. Complete design-build solutions for home additions, remodels, and ADUs.',
        images: [`${siteUrl}/images/Design and Architechture/hero.webp`],
    },
    alternates: {
        canonical: `${siteUrl}/services/design-architectural-planning`,
    },
};

export default function DesignArchitecturalPlanningPage() {
    // Intro Section Data
    const introSectionData = {
        imageSrc: '/images/Design and Architechture/intro.webp',
        imageAlt: 'Architectural design and planning process',
        text: 'Whether you\'re expecting a younger or older addition to your family, feeling cramped, or craving more connection to nature, more storage space, more family togetherness, or more alone time, you want this endeavor to be worth the time and money you will put into it. Why consider architectural planning or design-build with Palm Development & Renovation Group for your home addition or home remodeling? Let\'s envision the process together to see.',
        linkHref: '/services',
        linkText: 'View All Services',
    };

    // Architectural Planning and Design Section Data
    const architecturalPlanningData = {
        title: 'Architectural Planning and Design',
        paragraphs: [
            'Good design is not about the "big reveal", it\'s about "no surprises".',
            'Whether you need help with space planning and designing for a complete home remodel, room addition or need an ADU, Palm Development & Renovation Group is your all-inclusive, one stop team for architectural planning services. We take care of all the fine details so you don\'t need to worry about bidding jobs.',
        ],
        services: [
            {
                title: 'Establishing goals',
                description: 'We work with you to clearly define your vision, needs, and objectives for your project.',
            },
            {
                title: 'Collecting facts',
                description: 'We gather all necessary information about your site, existing structure, local codes, and requirements.',
            },
            {
                title: 'Synthesis',
                description: 'Understanding the meanings behind the facts and how it all works together to create a cohesive design solution.',
            },
            {
                title: 'Testing concepts and alternatives',
                description: 'We explore multiple design options and present alternatives to ensure the best solution for your needs.',
            },
            {
                title: 'Fulfilling your needs',
                description: 'Knowing and fulfilling your needs based on your wishlist, ensuring every detail aligns with your vision.',
            },
            {
                title: 'Defining the problem',
                description: 'Finally, defining the problem in precise terms. Only once the problem has been precisely defined, it becomes possible to devise a real, knowledge-based solution.',
            },
        ],
    };

    // Trusted Design Build Contractor Section Data
    const trustedDesignBuildData = {
        title: 'Trusted Design Build Contractor',
        paragraph: 'We\'re not after projects. We\'re after long-term relationships. Here\'s what sets us apart:',
        imageSrc: '/images/Design and Architechture/TrustedProfeesional.webp',
        imageAlt: 'Trusted design build contractor',
        bulletPoints: [
            'We\'re not after projects. We\'re after long-term relationships.',
            'We\'re your single point of contact from concept to occupancy and beyond.',
            'We\'re licensed (Florida Department of Business and Professional Regulation [DBPR] License number CGC1518106), insured, and certified.',
            'We\'re deeply experienced with a range of project types.',
            'We\'re committed to listening to you, understanding and putting your needs first.',
            'All of our projects are fully warranted for 2 years from completion.',
        ],
        features: [
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                ),
                title: 'Single Point of Contact',
                description: 'We\'re your single point of contact from concept to occupancy and beyond. No need to coordinate between multiple contractors.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                ),
                title: 'Licensed, Insured & Certified',
                description: 'We\'re licensed (Florida Department of Business and Professional Regulation [DBPR] License number CGC1518106), insured, and certified.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                ),
                title: 'Deeply Experienced',
                description: 'We\'re deeply experienced with a range of project types, from small renovations to large-scale additions and new construction.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ),
                title: 'Client-Focused',
                description: 'We\'re committed to listening to you, understanding and putting your needs first. All of our projects are fully warranted for 2 years from completion.',
            },
        ],
    };

    // How It Works Process Section Data
    const howItWorksProcessData = {
        title: 'How It Works',
        paragraph: 'Our architectural planning process begins with a feasibility study and moves on to design and documentation. When workers arrive on your property, the process has been ongoing for months, and it continues as they work, encountering site conditions. We want to deliver the finished product as soon as possible, but we will take the time that quality requires.',
        steps: [
            { number: 1, title: 'Feasibility Study' },
            { number: 2, title: 'Schematic Design' },
            { number: 3, title: 'Design Development' },
            { number: 4, title: 'Construction Documents' },
            { number: 5, title: 'Construction' },
        ],
    };

    // Build Dream Section Data
    const buildDreamSectionData = {
        title: 'Architectural Planning For Your Space, Building Your Place',
        paragraph: 'Palm Development & Renovation Group leaves nothing to chance to ensure that you know what your space will look like, feel like, and cost before we touch any part of your home. Ready to take the next step in bringing your vision to life? Get in touch with us to schedule your free design-build services consultation, and let\'s get started!',
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
                title="Design & Architectural Planning"
                backgroundImage="/images/Design and Architechture/hero.webp"
                backgroundImageAlt="Design & Architectural Planning - Palm Renovate"
            />

            {/* Intro Section */}
            <IntroSection {...introSectionData} />

            {/* Architectural Planning and Design Section */}
            <ProfessionalServiceSection {...architecturalPlanningData} />

            {/* Trusted Design Build Contractor Section */}
            <TrustedProfessionalsSection {...trustedDesignBuildData} />

            {/* How It Works Process Section */}
            <RemodelingProcessSection {...howItWorksProcessData} />

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

