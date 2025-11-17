export default function TrustedProfessionalsSection() {
    const features = [
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
    ];

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-[80%] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
                    Trusted Kitchen Remodeling Professionals in Palm Beach
                </h2>
                <p className="text-base text-charcoal-gray leading-relaxed mb-8">
                    A long-term relationship is worth far more to us than any individual project. That&apos;s why we ask questions about your kitchen remodeling, show alternatives to you, and keep you apprised every step of the way. It&apos;s your kitchen, and you should see your fingerprints everywhere before you touch a single thing! Of course, for the biggest of remodeling jobs, you&apos;ll want to select the best kitchen remodeling company in Palm Beach and Broward County. Here&apos;s what you get with Palm Development & Renovation Group:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                            <div className="bg-ocean-teal w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-charcoal-gray mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-base text-charcoal-gray leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

