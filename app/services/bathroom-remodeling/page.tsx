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
    title: 'Bathroom Remodeling',
    description: 'Transform your bathroom with our professional bathroom remodeling services in Palm Beach and Broward County. Custom designs, quality materials, and expert installation. Increase storage, optimize space, or improve accessibility.',
    keywords: [
        'bathroom remodeling Palm Beach',
        'bathroom renovation Broward County',
        'custom bathroom design',
        'bathroom contractors',
        'bathroom remodeling services',
        'bathroom renovation contractors',
        'bathroom remodeling Boynton Beach',
        'professional bathroom installation',
    ],
    openGraph: {
        title: 'Bathroom Remodeling - Palm Renovate',
        description: 'Transform your bathroom with our professional bathroom remodeling services in Palm Beach and Broward County. Custom designs, quality materials, and expert installation.',
        url: `${siteUrl}/services/bathroom-remodeling`,
        siteName: 'Palm Renovate',
        images: [
            {
                url: `${siteUrl}/images/bathroom-remodeling/herobanner.webp`,
                width: 1200,
                height: 630,
                alt: 'Bathroom Remodeling Services - Palm Renovate',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bathroom Remodeling - Palm Renovate',
        description: 'Transform your bathroom with our professional bathroom remodeling services. Custom designs, quality materials, and expert installation.',
        images: [`${siteUrl}/images/bathroom-remodeling/herobanner.webp`],
    },
    alternates: {
        canonical: `${siteUrl}/services/bathroom-remodeling`,
    },
};

export default function BathroomRemodelingPage() {
    // Intro Section Data
    const introSectionData = {
        imageSrc: '/images/bathroom-remodeling/modern-bathroom-design-1536x1024.jpg.webp',
        imageAlt: 'Modern bathroom with elegant fixtures and design',
        text: 'Increase storage, optimize space, or improve accessibility or an outdated design with top bathroom remodeling specialists in South Florida – Palm Development & Renovation Group. We know that no two households are alike, so we take a personalized approach to bathroom remodeling. We focus on creating a layout and design that enhances your living space from replacing old plumbing fixtures to a complete bathroom remodel.',
        linkHref: '/services',
        linkText: 'View All Services',
    };

    // Professional Bathroom Remodeling Data
    const professionalBathroomRemodelingData = {
        title: 'Professional Bathroom Remodeling Company',
        paragraphs: [
            'Having in-house remodeling contractors allows us to maintain consistent quality and communication from beginning to end. Our team can best serve your bathroom remodeling project because we are united in values, standards, and mission. So whether you want to repurpose a room, create extra storage space, improve comfort and convenience, or design a guest bathroom, we are experts to partner with.',
        ],
        services: [
            {
                title: 'Demolition',
                description: 'Our contractors work efficiently to remove elements of your old bathroom, working carefully to prioritize safety, keep dust and mess at a minimum, and avoid damage.',
            },
            {
                title: 'Site inspection',
                description: 'A key part of the process is having our experienced contractors evaluate your bathroom before start designing your remodel and after once the renovation is complete.',
            },
            {
                title: 'Plumbing and electrical',
                description: 'This is an important part of the remodeling – we check for insufficient, old plumbing and electrical systems and provide the required upgrades. From low water pressure to relocating junction boxes, our team will make sure it\'s up to code and with proper GFCI outlets.',
            },
            {
                title: 'Flooring, tiling',
                description: 'Choose the perfect flooring material and colour to suit your budget and style. Our tiles come in countless patterns and designs and are made from porcelain, ceramic, vinyl, and more.',
            },
            {
                title: 'Drywall and paint',
                description: 'We\'ll work with you to choose the perfect paint colour that provides a finishing touch and ties all your design elements together.',
            },
            {
                title: 'Construction and installation',
                description: 'Our bathroom remodeling contractors will do our best to take proper provisions on-site to prevent damages. After the demolition and construction is complete, our team treats your bathroom like our own. We clean our mess and remove garbage from your home.',
            },
        ],
    };

    // What You Get Section Data
    const whatYouGetSectionData = {
        title: 'What You Get With Our Bathroom Remodeling',
        paragraphs: [
            'We know how essential your bathroom is to your daytime and nighttime routine. Having a bathroom that serves your needs aesthetically and functionally can make all the difference for your family. This is why we are committed to building a bathroom that meets your goals.',
        ],
        services: [
            {
                title: 'Custom bathroom design',
                description: 'Your custom bathroom that is specifically tailored to your needs awaits. We can install custom shower fixtures, a double vanity, freestanding bathtub, and so much more.',
            },
            {
                title: 'Optimizing layout and space',
                description: 'Bathrooms are the smallest rooms in a home. We can remodel your bathroom with a tub-to-shower conversion, increasing storage, or making your bathroom more accessible and convenient.',
            },
            {
                title: 'Material, finish, and fixture selection',
                description: 'Updating fixtures for improved energy efficiency, function and flow. Our renovation consultant will guide you through choosing which sink and faucets match your design, deciding on 12×12 or 12×24 tiles on the floor or walls and more.',
            },
            {
                title: 'Choosing between a tub, shower or both',
                description: 'Choose from different options and our bathroom remodelers can work within your bathroom space to make the best accommodations for you. A bathtub is the perfect way to relax and there unwind after a long day while a shower offers better efficiency and convenience.',
            },
        ],
    };

    // Trusted Professionals Section Data
    const trustedProfessionalsSectionData = {
        title: 'Trust Local Bathroom Remodeling Contractors',
        paragraph: 'Invest in bathroom remodeling services that completely transform your bathroom experience. Palm Development & Renovation Group is a team of professionals you can trust to update old, moldy bathrooms to a fresh spa-like space. Here\'s what you get with our team:',
        features: [
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                ),
                title: 'In-House Contractors',
                description: 'Having in-house remodeling contractors allows us to maintain consistent quality and communication from beginning to end. Our team is united in values, standards, and mission.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                ),
                title: 'Quality Assurance',
                description: 'We stand behind the quality of our work with comprehensive warranties. Our skilled workers are licensed, trained, and experienced with local codes, regulations, and best practices.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ),
                title: 'Efficient Process',
                description: 'We take care to protect the work area, clean daily, and schedule efficiently—so your daily routine isn\'t completely disrupted during your bath remodel.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                ),
                title: 'Design Expertise',
                description: 'Our in-house bath professionals walk you through everything from layout sketches to finish selections. We make sure your new space works well and feels like home.',
            },
        ],
    };

    // Remodeling Process Section Data
    const remodelingProcessSectionData = {
        title: 'Bathroom Remodeling Process',
        paragraph: 'Getting started with our bathroom remodeling services is a straightforward and easy process. Together with our in-house bathroom remodeling contractors, you get better quality control and project management. Here is a breakdown of how we deliver results.',
        steps: [
            { number: 1, title: 'Planning & Materials' },
            { number: 2, title: 'Mockup/Drawings' },
            { number: 3, title: 'Material & Finish Selection' },
            { number: 4, title: 'Demolition & Construction' },
            { number: 5, title: 'New Bathroom Delivery' },
        ],
    };

    // Build Dream Bathroom Section Data
    const buildDreamBathroomSectionData = {
        title: 'Transform Your Bathroom with Palm Development & Renovation Group',
        paragraph: 'Invest in bathroom remodeling services that completely transform your bathroom experience. Book your free consultation with us today!',
        linkHref: '/contact',
        linkText: 'Contact Us Today',
    };

    // FAQ Data
    const faqData = [
        {
            question: 'How long does a full bathroom remodel usually take in South Florida?',
            answer: 'Most full bathroom remodels can be finished in 2 to 4 weeks. Timeframes vary based on the size of your space, design plans, and whether any structural, plumbing or electrical work is involved.',
        },
        {
            question: 'Do I need permits for bathroom remodeling in Florida?',
            answer: 'Permits for bathroom remodels are required when you\'re installing a new bathroom, updating electrical, relocating plumbing rough-ins or doing any structural modifications. For straightforward remodels such as painting, installing new floors or installing new bathroom vanities, typically permits are not required. No matter which type of bathroom remodel or renovation you need, Palm Development & Renovation Group will take care of the permit applications for you.',
        },
        {
            question: 'Do you offer warranty on your bathroom remodeling services in South Florida?',
            answer: 'Yes, we provide a standard 1 year warranty on labour.',
        },
        {
            question: 'What\'s the average cost to remodel a bathroom in South Florida?',
            answer: 'If you\'re looking to refresh your bathroom with new tiles, fixtures, or a vanity update (cosmetic changes), budgets typically start around $8,000. A complete bath remodel that involves a full gut and demolition can run on the higher end, depending on the scope of work involved. Contact us for your free estimate.',
        },
        {
            question: 'Can you help with tub-to-shower conversions?',
            answer: 'Definitely. Tub-to-shower conversions are one of our most requested upgrades—great for saving space and improving accessibility in bathrooms that need a modern touch.',
        },
        {
            question: 'How do I make my bathroom more accessible?',
            answer: 'We create accessible bathrooms across South Florida with features such as barrier free showers, walk-in showers, grab bars, shower bench, wider doorways and more. It\'s a practical step, whether you\'re planning ahead for aging in place or supporting a family member with mobility needs.',
        },
        {
            question: 'Can I supply my own bathroom fixtures and finishes?',
            answer: 'No—we use the design-build delivery method to maintain better quality control and construction management. But don\'t worry, you\'ll work with our team to select finishes that align with your wishlist. We\'ll help guide the choices so everything works together beautifully.',
        },
        {
            question: 'Do you offer bathroom remodeling for small homes or condos?',
            answer: 'Yes, and we love a good challenge. We\'re all about creative planning—whether it\'s a simple update or a bathroom remodeling project that redesigns the whole space.',
        },
        {
            question: 'Will I need to move out while my bathroom is being remodeled?',
            answer: 'Not usually. We take care to protect the work area, clean daily, and schedule efficiently—so your daily routine isn\'t completely disrupted during your bath remodel.',
        },
        {
            question: 'Can a bath professional help with design and layout choices?',
            answer: 'Absolutely. Our in-house bath professionals walk you through everything from layout sketches to finish selections. We make sure your new space works well and feels like home.',
        },
    ];

    return (
        <main>
            {/* Hero Section */}
            <PageHero
                title="Bathroom Remodeling"
                backgroundImage="/images/bathroom-remodeling/hero.webp"
                backgroundImageAlt="Bathroom Remodeling - Palm Renovate"
            />

            {/* Intro Section */}
            <IntroSection {...introSectionData} />

            {/* Professional Bathroom Remodeling Section */}
            <ProfessionalServiceSection {...professionalBathroomRemodelingData} />

            {/* What You Get Section */}
            <ProfessionalServiceSection {...whatYouGetSectionData} />

            {/* Trusted Bathroom Remodeling Professionals Section */}
            <TrustedProfessionalsSection {...trustedProfessionalsSectionData} />

            {/* Our Bathroom Remodeling Process Section */}
            <RemodelingProcessSection {...remodelingProcessSectionData} />

            {/* Build Your Dream Bathroom Section */}
            <BuildDreamSection {...buildDreamBathroomSectionData} />

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

