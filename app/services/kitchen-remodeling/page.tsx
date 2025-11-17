import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';
import FAQAccordion from './FAQAccordion';
import IntroSection from './components/IntroSection';
import ProfessionalKitchenRemodeling from './components/ProfessionalKitchenRemodeling';
import TransformKitchenSection from './components/TransformKitchenSection';
import TrustedProfessionalsSection from './components/TrustedProfessionalsSection';
import RemodelingProcessSection from './components/RemodelingProcessSection';
import BuildDreamKitchenSection from './components/BuildDreamKitchenSection';

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
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                {/* Hero Section */}
                <PageHero
                    title="Kitchen Remodeling"
                    backgroundImage="/images/kitchen-remodeling/herobanner.webp"
                    backgroundImageAlt="Kitchen Remodeling - Palm Renovate"
                />

                {/* Intro Section */}
                <IntroSection />

                {/* Professional Kitchen Remodeling Section */}
                <ProfessionalKitchenRemodeling />

                {/* How Can We Transform Your Kitchen Section */}
                <TransformKitchenSection />

                {/* Trusted Kitchen Remodeling Professionals Section */}
                <TrustedProfessionalsSection />

                {/* Our Kitchen Remodeling Process Section */}
                <RemodelingProcessSection />

                {/* Build Your Dream Kitchen Section */}
                <BuildDreamKitchenSection />

                {/* FAQ Section */}
                <FAQAccordion />
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
            <Footer />
        </div>
    );
}

