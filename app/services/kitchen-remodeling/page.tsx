import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';
import IntroSection from '@/components/IntroSection';
import ProfessionalServiceSection from '@/components/ProfessionalServiceSection';
import TransformSection from '@/components/TransformSection';
import TrustedProfessionalsSection from '@/components/TrustedProfessionalsSection';
import RemodelingProcessSection from '@/components/RemodelingProcessSection';
import BuildDreamSection from '@/components/BuildDreamSection';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palmrenovate.com';

export const metadata: Metadata = {
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen with our professional kitchen remodeling services in Palm Beach and Broward County. Custom designs, quality materials, and expert installation. Over 15 years of experience in kitchen renovations.',
    keywords: [
        'kitchen remodeling Palm Beach',
        'kitchen renovation Broward County',
        'custom kitchen design',
        'kitchen contractors',
        'kitchen remodeling services',
        'kitchen renovation contractors',
        'kitchen remodeling Boynton Beach',
        'professional kitchen installation',
    ],
    openGraph: {
        title: 'Kitchen Remodeling - Palm Renovate',
        description: 'Transform your kitchen with our professional kitchen remodeling services in Palm Beach and Broward County. Custom designs, quality materials, and expert installation.',
        url: `${siteUrl}/services/kitchen-remodeling`,
        siteName: 'Palm Renovate',
        images: [
            {
                url: `${siteUrl}/images/kitchen-remodeling/herobanner.webp`,
                width: 1200,
                height: 630,
                alt: 'Kitchen Remodeling Services - Palm Renovate',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kitchen Remodeling - Palm Renovate',
        description: 'Transform your kitchen with our professional kitchen remodeling services. Custom designs, quality materials, and expert installation.',
        images: [`${siteUrl}/images/kitchen-remodeling/herobanner.webp`],
    },
    alternates: {
        canonical: `${siteUrl}/services/kitchen-remodeling`,
    },
};

export default function KitchenRemodelingPage() {
    // Intro Section Data
    const introSectionData = {
        imageSrc: '/images/kitchen-remodeling/farmhouse-kitchen-remodeling-1024x683.webp',
        imageAlt: 'Modern kitchen with white cabinets, island, and bar stools',
        text: 'If you\'re dreaming of a light-filled open concept kitchen with a new island, sparkling natural or manmade stone countertops and floor, and a few extra features to suit your style, Palm Development & Renovation Group has the kitchen remodeling for you. Windows, comfy seating, a place for games and homework, tell us your dream and we\'ll show you the plan!',
        linkHref: '/services',
        linkText: 'View All Services',
    };

    // Professional Kitchen Remodeling Data
    const professionalKitchenRemodelingData = {
        title: 'Professional Kitchen Remodeling',
        paragraphs: [
            'Older kitchens in Palm Beach and Broward County were designed on the \'kitchen triangle\' model of efficiency. An excellent idea when it originated in the 1940s, it anticipated neither the number of appliances nor the number of cooks that would arrive in the next 8 decades.',
            'With our kitchen remodeling, our licensed team has over 15 years of experience at bringing in optimum style and function, opening and brightening kitchens to create spaces where the whole crowd loves to gather.',
        ],
        services: [
            {
                title: 'Design Consultation',
                description: 'At the design consultation, we will take site measurements and get a feel for your preferences. We want to know how you use your kitchen now, how you want to use it, and where the pain points are.',
            },
            {
                title: 'Custom Kitchen Layout',
                description: 'Our professional interior designers will draw a plan for your new kitchen and bring it to you for approval. If anything isn\'t perfect, we will change it to suit you!',
            },
            {
                title: 'Custom Kitchen Design',
                description: 'Do you want a separate baking area? An extra prep sink or cocktail area? Your kitchen is about you and your household, and need not be identical to any other kitchen in the world!',
            },
            {
                title: 'Material Selection',
                description: 'Material selection is fun. We\'ll bring you samples of cabinet finishes, countertop and flooring materials, window treatments, and millwork. Choose what looks and feels right to you!',
            },
            {
                title: 'Project Management',
                description: 'All planning done, our kitchen remodeling contractors will arrive at your home. You will have one point of contact, and no stress about scheduling multiple contractors and keeping them on schedule and budget.',
            },
        ],
    };

    // Transform Kitchen Section Data
    const transformKitchenSectionData = {
        title: 'How Can We Transform Your Kitchen?',
        paragraph: 'Palm Development & Renovation Group offers kitchen remodeling services and can handle everything from complete teardowns/rebuilds to smaller updates. Some of the most popular kitchen remodeling projects we handle include:',
        projects: [
            {
                title: 'New cabinets',
                description: 'If your cabinets are showing their age, it\'s time to replace them with beautiful, functional new cabinets.',
            },
            {
                title: 'Open concept & Islands',
                description: 'A new kitchen island can add beauty, functionality, and definition to your kitchen space.',
            },
            {
                title: 'Custom countertops',
                description: 'From natural stone like quartzite and marble to Porcelain slabs and everything in between, we design and install custom countertops that fit your lifestyle and budget.',
            },
        ],
        imageSrc: '/images/kitchen-remodeling/modern-kitchen-design-reno.webp',
        imageAlt: 'Modern kitchen with white cabinets, light wood accents, and dining area',
    };

    // Trusted Professionals Section Data
    const trustedProfessionalsSectionData = {
        title: 'Trusted Kitchen Remodeling Professionals in Palm Beach',
        paragraph: 'A long-term relationship is worth far more to us than any individual project. That\'s why we ask questions about your kitchen remodeling, show alternatives to you, and keep you apprised every step of the way. It\'s your kitchen, and you should see your fingerprints everywhere before you touch a single thing! Of course, for the biggest of remodeling jobs, you\'ll want to select the best kitchen remodeling company in Palm Beach and Broward County. Here\'s what you get with Palm Development & Renovation Group:',
        features: [
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                ),
                title: 'Dedicated Team',
                description: 'A dedicated team means that the kitchen remodeling contractors who remodel your space are assigned only to that one job, from beginning to end. Every sketch, plan, sample, detail, and specification is ours to produce for you, and yours to approve before we proceed.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ),
                title: 'Budget-Friendly Solutions',
                description: 'What happens if you like a certain countertop or cabinet pull, but it\'s not in the budget? We\'ll show you a selection of the most similar materials that we can find at lower price points. We want you and your finances to both be happy when we\'re done!',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                ),
                title: 'Attention to Detail',
                description: '"The devil is in the details" goes the old saw, but top architect Ludwig Mies van der Rohe exemplified architectural thinking when he wrote, "God is in the details". That\'s the attitude we bring to the table as your local kitchen remodeling company in Palm Beach and Broward County.',
            },
            {
                icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ),
                title: 'Professional Installation',
                description: 'From new appliances to flooring, cabinets and countertops, our skilled workers are licensed as applicable, trained and experienced with local codes, regulations, and best practices. They\'re prepared for unexpected issues and used to compliance with the highest standards of quality and finish.',
            },
        ],
    };

    // Remodeling Process Section Data
    const remodelingProcessSectionData = {
        title: 'Our Kitchen Remodeling Process',
        paragraph: 'We will be there for you throughout the entire process, from planning until 2 years after completion, per our warranty. Here\'s an outline of our process so you know what to expect:',
        steps: [
            { number: 1, title: 'Planning & Materials' },
            { number: 2, title: 'Mockup/Drawings' },
            { number: 3, title: 'Material & Finish Selection' },
            { number: 4, title: 'Demolition & Construction' },
            { number: 5, title: 'New Kitchen Delivery' },
        ],
    };

    // Build Dream Kitchen Section Data
    const buildDreamKitchenSectionData = {
        title: 'Build Your Dream Kitchen with Palm Development & Renovation Group',
        paragraph: 'Planning this largest of home renovations is a big job, so let us take care of everything in your kitchen remodeling for you. No nasty surprises, no sweat. Contact us today!',
        linkHref: '/contact',
        linkText: 'Contact Us Today',
    };

    return (
        <main>
                {/* Hero Section */}
                <PageHero
                    title="Kitchen Remodeling"
                    backgroundImage="/images/kitchen-remodeling/herobanner.webp"
                    backgroundImageAlt="Kitchen Remodeling - Palm Renovate"
                />

                {/* Intro Section */}
                <IntroSection {...introSectionData} />

                {/* Professional Kitchen Remodeling Section */}
                <ProfessionalServiceSection {...professionalKitchenRemodelingData} />

                {/* How Can We Transform Your Kitchen Section */}
                <TransformSection {...transformKitchenSectionData} />

                {/* Trusted Kitchen Remodeling Professionals Section */}
                <TrustedProfessionalsSection {...trustedProfessionalsSectionData} />

                {/* Our Kitchen Remodeling Process Section */}
                <RemodelingProcessSection {...remodelingProcessSectionData} />

                {/* Build Your Dream Kitchen Section */}
                <BuildDreamSection {...buildDreamKitchenSectionData} />

                {/* FAQ Section */}
                <FAQAccordion faqs={[
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
                ]} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "What services does Palm Development & Renovation Group offer?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Palm Development & Renovation Group specializes in a wide range of home renovation and construction services to meet all your needs. Our offerings include kitchen remodeling, bathroom remodeling, new construction projects, flooring solutions, and comprehensive design services. Whether you're looking to update a single room or undertake a full-scale renovation, our team has the expertise and experience to bring your vision to life."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How does the project process work with Palm Development & Renovation Group?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Initial consultation, then detailed quote and agreement, and then the design team starts working to help visualize the change, etc. This is aside from projects that require architectural planning, for which we will start with plans and then move on to a contract for construction and design."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How long does a typical renovation project take with Palm Development & Renovation Group?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "The timeline for a renovation project can vary widely depending on the scope and complexity of the work. A simple bathroom or kitchen remodel may take several weeks, while larger projects like new constructions or extensive renovations could take several months. During the initial consultation, we'll provide a more accurate timeline based on your specific project requirements. Our goal is always to complete your project efficiently without compromising on quality."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Does Palm Development & Renovation Group offer any warranties or guarantees on their work?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, we stand behind the quality of our work with a comprehensive warranty covering labor and materials. The specific terms of the warranty depend on the project and will be clearly outlined in your contract. We believe in the importance of peace of mind for our clients and are committed to ensuring your complete satisfaction with the finished project. For any concerns or issues that arise post-completion, we're here to provide prompt and effective solutions."
                                    }
                                }
                            ]
                        })
                    }}
                />
        </main>
    );
}

