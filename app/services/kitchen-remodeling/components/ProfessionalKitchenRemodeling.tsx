export default function ProfessionalKitchenRemodeling() {
    const services = [
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
    ];

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-[80%] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-6">
                    Professional Kitchen Remodeling
                </h2>
                <p className="text-base text-charcoal-gray leading-relaxed mb-6">
                    Older kitchens in Palm Beach and Broward County were designed on the &apos;kitchen triangle&apos; model of efficiency. An excellent idea when it originated in the 1940s, it anticipated neither the number of appliances nor the number of cooks that would arrive in the next 8 decades.
                </p>
                <p className="text-base text-charcoal-gray leading-relaxed mb-6">
                    With our kitchen remodeling, our licensed team has over 15 years of experience at bringing in optimum style and function, opening and brightening kitchens to create spaces where the whole crowd loves to gather.
                </p>
                <ul className="space-y-4 text-base text-charcoal-gray">
                    {services.map((service, index) => (
                        <li key={index} className="flex items-start">
                            <svg className="w-6 h-6 text-ocean-teal mr-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <strong>{service.title}:</strong> {service.description}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

