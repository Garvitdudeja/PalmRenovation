import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kitchen Remodeling - Palm Renovate',
    description: 'Transform your kitchen with our professional kitchen remodeling services in Palm Beach and Broward County. Custom designs, quality materials, and expert installation.',
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

                {/* Professional Kitchen Remodeling Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                            <div>
                                <p className="text-base text-charcoal-gray leading-relaxed mb-6">
                                    If you&apos;re dreaming of a light-filled open concept kitchen with a new island, sparkling natural or manmade stone countertops and floor, and a few extra features to suit your style, Palm Renovate has the kitchen remodeling for you. Windows, comfy seating, a place for games and homework, tell us your dream and we&apos;ll show you the plan!
                                </p>
                                <div className="mt-6">
                                    <Link
                                        href="/services"
                                        className="inline-block bg-ocean-teal text-white px-6 py-3 rounded-lg hover:bg-ocean-teal-700 transition font-semibold"
                                    >
                                        View All Services
                                    </Link>
                                </div>
                            </div>
                            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/images/kitchen-remodeling/modern-kitchen-design-reno.webp"
                                    alt="Professional Kitchen Remodeling"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-8">
                                Professional Kitchen Remodeling
                            </h2>
                        </div>
                        <ul className="space-y-4 text-base text-charcoal-gray">
                            <li className="flex items-start">
                                <span className="text-ocean-teal mr-3 font-bold">•</span>
                                <div>
                                    <strong>Design Consultation:</strong> At the design consultation, we will take site measurements and get a feel for your preferences. We want to know how you use your kitchen now, how you want to use it, and where the pain points are.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-ocean-teal mr-3 font-bold">•</span>
                                <div>
                                    <strong>Custom Kitchen Layout:</strong> Our professional interior designers will draw a plan for your new kitchen and bring it to you for approval. If anything isn&apos;t perfect, we will change it to suit you!
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-ocean-teal mr-3 font-bold">•</span>
                                <div>
                                    <strong>Custom Kitchen Design:</strong> Do you want a separate baking area? An extra prep sink or cocktail area? Your kitchen is about you and your household, and need not be identical to any other kitchen in the world!
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-ocean-teal mr-3 font-bold">•</span>
                                <div>
                                    <strong>Material Selection:</strong> Material selection is fun. We&apos;ll bring you samples of cabinet finishes, countertop and flooring materials, window treatments, and millwork. Choose what looks and feels right to you!
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-ocean-teal mr-3 font-bold">•</span>
                                <div>
                                    <strong>Project Management:</strong> All planning done, our kitchen remodeling contractors will arrive at your home. You will have one point of contact, and no stress about scheduling multiple contractors and keeping them on schedule and budget.
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* How Can We Transform Your Kitchen Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-8">
                            How Can We Transform Your Kitchen?
                        </h2>
                        <p className="text-base text-charcoal-gray leading-relaxed mb-6">
                            Palm Renovate offers kitchens remodeling services and can handle everything from complete teardowns/rebuilds to smaller updates. Some of the most popular kitchen remodeling projects we handle include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/images/kitchen-remodeling/modern-kitchen-renovation.webp"
                                    alt="New cabinets"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/images/kitchen-remodeling/farmhouse-kitchen-remodeling-1024x683.webp"
                                    alt="Open concept & Islands"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/images/kitchen-remodeling/modern-kitchen-design-reno.webp"
                                    alt="Custom countertops"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        </div>
                        <ul className="mt-8 space-y-4 text-base text-charcoal-gray">
                            <li className="flex items-start">
                                <span className="text-ocean-teal mr-3 font-bold">•</span>
                                <div>
                                    <strong>New cabinets:</strong> If your cabinets are showing their age, it&apos;s time to replace them with beautiful, functional new cabinets.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-ocean-teal mr-3 font-bold">•</span>
                                <div>
                                    <strong>Open concept & Islands:</strong> A new kitchen island can add beauty, functionality, and definition to your kitchen space.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-ocean-teal mr-3 font-bold">•</span>
                                <div>
                                    <strong>Custom countertops:</strong> From natural stone like quartzite and marble to Porcelain slabs and everything in between, we design and install custom countertops that fit your lifestyle and budget.
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Trusted Kitchen Remodeling Professionals Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
                            Trusted Kitchen Remodeling Professionals in Palm Beach
                        </h2>
                        <p className="text-base text-charcoal-gray leading-relaxed mb-8">
                            A long-term relationship is worth far more to us than any individual project. That&apos;s why we ask questions about your kitchen remodeling, show alternatives to you, and keep you apprised every step of the way. It&apos;s your kitchen, and you should see your fingerprints everywhere before you touch a single thing! Of course, for the biggest of remodeling jobs, you&apos;ll want to select the best kitchen remodeling company in Palm Beach and Broward County. Here&apos;s what you get with Palm Renovate:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-charcoal-gray mb-4">
                                    Dedicated Team
                                </h3>
                                <p className="text-base text-charcoal-gray leading-relaxed">
                                    A dedicated team means that the kitchen remodeling contractors who remodel your space are assigned only to that one job, from beginning to end. Every sketch, plan, sample, detail, and specification is ours to produce for you, and yours to approve before we proceed.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-charcoal-gray mb-4">
                                    Budget-Friendly Solutions
                                </h3>
                                <p className="text-base text-charcoal-gray leading-relaxed">
                                    What happens if you like a certain countertop or cabinet pull, but it&apos;s not in the budget? We&apos;ll show you a selection of the most similar materials that we can find at lower price points. We want you and your finances to both be happy when we&apos;re done!
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-charcoal-gray mb-4">
                                    Attention to Detail
                                </h3>
                                <p className="text-base text-charcoal-gray leading-relaxed">
                                    &quot;The devil is in the details&quot; goes the old saw, but top architect Ludwig Mies van der Rohe exemplified architectural thinking when he wrote, &quot;God is in the details&quot;. That&apos;s the attitude we bring to the table as your local kitchen remodeling company in Palm Beach and Broward County.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-charcoal-gray mb-4">
                                    Professional Installation
                                </h3>
                                <p className="text-base text-charcoal-gray leading-relaxed">
                                    From new appliances to flooring, cabinets and countertops, our skilled workers are licensed as applicable, trained and experienced with local codes, regulations, and best practices. They&apos;re prepared for unexpected issues and used to compliance with the highest standards of quality and finish.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Kitchen Remodeling Process Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
                            Our Kitchen Remodeling Process
                        </h2>
                        <p className="text-base text-charcoal-gray leading-relaxed mb-8">
                            We will be there for you throughout the entire process, from planning until 2 years after completion, per our warranty. Here&apos;s an outline of our process so you know what to expect:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                            <div className="text-center">
                                <div className="bg-ocean-teal text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    1
                                </div>
                                <h4 className="font-semibold text-charcoal-gray mb-2">Planning & Materials</h4>
                            </div>
                            <div className="text-center">
                                <div className="bg-ocean-teal text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    2
                                </div>
                                <h4 className="font-semibold text-charcoal-gray mb-2">Mockup/Drawings</h4>
                            </div>
                            <div className="text-center">
                                <div className="bg-ocean-teal text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    3
                                </div>
                                <h4 className="font-semibold text-charcoal-gray mb-2">Material & Finish Selection</h4>
                            </div>
                            <div className="text-center">
                                <div className="bg-ocean-teal text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    4
                                </div>
                                <h4 className="font-semibold text-charcoal-gray mb-2">Demolition & Construction</h4>
                            </div>
                            <div className="text-center">
                                <div className="bg-ocean-teal text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    5
                                </div>
                                <h4 className="font-semibold text-charcoal-gray mb-2">New Kitchen Delivery</h4>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Build Your Dream Kitchen Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
                            Build Your Dream Kitchen with Palm Renovate
                        </h2>
                        <p className="text-base text-charcoal-gray leading-relaxed mb-6">
                            Planning this largest of home renovations is a big job, so let us take care of everything in your kitchen remodeling for you. No nasty surprises, no sweat. Contact us today!
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-ocean-teal text-white px-8 py-4 rounded-lg hover:bg-ocean-teal-700 transition font-semibold text-lg"
                        >
                            Contact Us Today
                        </Link>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 px-4 relative">
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src="/images/kitchen-remodeling/faqbg.png"
                            alt=""
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                    </div>
                    <div className="absolute inset-0 bg-white/90"></div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-8 text-center">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-charcoal-gray mb-3">
                                    What services does Palm Renovate offer?
                                </h3>
                                <p className="text-base text-charcoal-gray leading-relaxed">
                                    Palm Renovate specializes in a wide range of home renovation and construction services to meet all your needs. Our offerings include kitchen remodeling, bathroom remodeling, new construction projects, flooring solutions, and comprehensive design services. Whether you&apos;re looking to update a single room or undertake a full-scale renovation, our team has the expertise and experience to bring your vision to life.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-charcoal-gray mb-3">
                                    How does the project process work with Palm Renovate?
                                </h3>
                                <p className="text-base text-charcoal-gray leading-relaxed">
                                    Initial consultation, then detailed quote and agreement, and then the design team starts working to help visualize the change, etc. This is aside from projects that require architectural planning, for which we will start with plans and then move on to a contract for construction and design.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-charcoal-gray mb-3">
                                    How long does a typical renovation project take with Palm Renovate?
                                </h3>
                                <p className="text-base text-charcoal-gray leading-relaxed">
                                    The timeline for a renovation project can vary widely depending on the scope and complexity of the work. A simple bathroom or kitchen remodel may take several weeks, while larger projects like new constructions or extensive renovations could take several months. During the initial consultation, we&apos;ll provide a more accurate timeline based on your specific project requirements. Our goal is always to complete your project efficiently without compromising on quality.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-charcoal-gray mb-3">
                                    Does Palm Renovate offer any warranties or guarantees on their work?
                                </h3>
                                <p className="text-base text-charcoal-gray leading-relaxed">
                                    Yes, we stand behind the quality of our work with a comprehensive warranty covering labor and materials. The specific terms of the warranty depend on the project and will be clearly outlined in your contract. We believe in the importance of peace of mind for our clients and are committed to ensuring your complete satisfaction with the finished project. For any concerns or issues that arise post-completion, we&apos;re here to provide prompt and effective solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

