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
    title: 'Impact Windows and Doors',
    description: 'Professional impact windows and doors installation in Palm Beach and Broward County. Hurricane-resistant windows and doors for year-round protection. Licensed installers with code-compliant installations.',
    keywords: [
        'impact windows Palm Beach',
        'impact doors Broward County',
        'hurricane windows installation',
        'impact windows and doors',
        'hurricane resistant windows',
        'impact windows installation',
        'impact doors installation',
        'hurricane windows Palm Beach',
        'impact windows Boynton Beach',
        'storm windows and doors',
    ],
    openGraph: {
        title: 'Impact Windows and Doors - Palm Renovate',
        description: 'Professional impact windows and doors installation in Palm Beach and Broward County. Hurricane-resistant windows and doors for year-round protection.',
        url: `${siteUrl}/services/impact-windows-and-doors`,
        siteName: 'Palm Renovate',
        images: [
            {
                url: `${siteUrl}/images/impact-windows-and-doors/herobanner.webp`,
                width: 1200,
                height: 630,
                alt: 'Impact Windows and Doors Services - Palm Renovate',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Impact Windows and Doors - Palm Renovate',
        description: 'Professional impact windows and doors installation. Hurricane-resistant windows and doors for year-round protection.',
        images: [`${siteUrl}/images/impact-windows-and-doors/herobanner.webp`],
    },
    alternates: {
        canonical: `${siteUrl}/services/impact-windows-and-doors`,
    },
};

export default function ImpactWindowsAndDoorsPage() {
    // Intro Section Data
    const introSectionData = {
        imageSrc: '/images/impact-windows-and-doors/impact-windows-intro.webp',
        imageAlt: 'Impact windows and doors installation',
        text: 'Always be prepared and stay safe before hurricane season hits. At Palm Development & Renovation Group, we install impact windows and doors that are built for this climate and installed with long-term performance in mind. We work with property owners across Palm Beach and Broward County to upgrade homes with clean, code-compliant installs that offer year-round protection and peace of mind.',
        linkHref: '/services',
        linkText: 'View All Services',
    };

    // Impact Windows Installation Section Data
    const impactWindowsData = {
        title: 'Impact Windows Installation Palm Beach',
        paragraphs: [
            'Our Palm Beach impact windows are designed for pressure resistance, heat reduction, and a better indoor feel. They\'re not just about storms — they\'re a year-round upgrade that blocks noise, filters light, and tightens up your home\'s envelope.',
        ],
        services: [
            {
                title: 'Casement and awning windows',
                description: 'Versatile window styles that provide excellent ventilation and weather protection.',
            },
            {
                title: 'Horizontal rollers and single-hung windows',
                description: 'Classic window designs that combine functionality with traditional aesthetics.',
            },
            {
                title: 'Fixed/picture windows',
                description: 'Large, unobstructed views that maximize natural light while maintaining impact resistance.',
            },
            {
                title: 'Custom shapes for unique spaces',
                description: 'We make sure every opening is reinforced, sealed, and properly finished. No drafts, no shortcuts — just windows that work how they should.',
            },
        ],
    };

    // Impact Doors Installation Section Data
    const impactDoorsData = {
        title: 'Impact Doors Installation Palm Beach',
        paragraphs: [
            'If your door isn\'t impact-rated, it\'s likely your weak point. Our impact doors installation covers everything from front entries to backyard sliders. We help you pick the right setup and make sure it\'s installed for both everyday use and storm safety.',
        ],
        services: [
            {
                title: 'Heavy-duty front doors',
                description: 'Front doors with or without glass, designed to withstand hurricane-force winds and provide security.',
            },
            {
                title: 'French doors',
                description: 'French doors with impact-rated panes that combine elegance with storm protection.',
            },
            {
                title: 'Sliding glass doors',
                description: 'Sliding glass doors that move smooth and seal tight, perfect for patios and outdoor living spaces.',
            },
            {
                title: 'Multi-panel and custom-fit designs',
                description: 'Searching for impact doors near you? Our team has you covered. We help you choose the design, the type of doors that would not just match your home but makes an impact.',
            },
        ],
    };

    // Trusted Installers Section Data
    const trustedInstallersData = {
        title: 'Trusted Impact Window and Door Installers in Broward and Palm Beach',
        paragraph: 'Choosing the right contractor matters. When it comes to impact windows and doors, you\'re not just updating your home — you\'re securing it for the long run. We focus on work that meets code, fits right, and holds up in South Florida\'s real conditions. Here\'s what you get when you work with Palm Development & Renovation Group:',
        features: [
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                ),
                title: 'Local Crew',
                description: 'Your install is handled by our trained, in-house crew — never outsourced — for full control over quality, timing, and finish.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                ),
                title: 'Built for This Climate',
                description: 'We only install products approved for South Florida\'s wind zones and tested to hold up through storms, heat, and humidity.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                ),
                title: 'Clean, Respectful Work',
                description: 'We protect your space with floor coverings, dust barriers, and cleanup after — keeping your home safe and livable throughout.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ),
                title: 'Long-Term Value',
                description: 'We follow current codes, seal and reinforce properly, and use quality materials that hold up well beyond basic inspection.',
            },
        ],
    };

    // Installation Process Section Data
    const installationProcessData = {
        title: 'Our Impact Windows and Doors Installation Process',
        paragraph: 'We\'re with you from the first conversation through final inspection. Our team takes care of everything — permits, prep, installation, and follow-up. You\'ll know what\'s happening at each stage, and we\'re always available to answer questions.',
        steps: [
            { number: 1, title: 'Site Visit & Measurements' },
            { number: 2, title: 'Permitting & Product Orders' },
            { number: 3, title: 'Frame Prep & Removal' },
            { number: 4, title: 'Window & Door Installation' },
            { number: 5, title: 'Final Finishing & Inspection' },
        ],
    };

    // Build Dream Section Data
    const buildDreamSectionData = {
        title: 'Ready to Get Started?',
        paragraph: 'If you\'re replacing windows for insurance, prepping for the next season, or just tired of noisy drafts — we\'re here to help. Palm Development & Renovation Group is your go-to impact windows and doors company, and we install with care, clarity, and no wasted time. Call or message us to get your free quote and schedule your install.',
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
                title="Impact Windows and Doors"
                backgroundImage="/images/impact-windows-and-doors/herobanner.webp"
                backgroundImageAlt="Impact Windows and Doors - Palm Renovate"
            />

            {/* Intro Section */}
            <IntroSection {...introSectionData} />

            {/* Impact Windows Installation Section */}
            <ProfessionalServiceSection {...impactWindowsData} />

            {/* Impact Doors Installation Section */}
            <ProfessionalServiceSection {...impactDoorsData} />

            {/* Trusted Installers Section */}
            <TrustedProfessionalsSection {...trustedInstallersData} />

            {/* Installation Process Section */}
            <RemodelingProcessSection {...installationProcessData} />

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

