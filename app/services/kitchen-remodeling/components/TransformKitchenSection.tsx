import Image from 'next/image';

export default function TransformKitchenSection() {
    const projects = [
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
    ];

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-[80%] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-gray mb-6">
                            How Can We Transform Your Kitchen?
                        </h2>
                        <p className="text-base text-charcoal-gray leading-relaxed mb-6">
                            <span className="underline">Palm Development & Renovation Group</span> offers kitchen remodeling services and can handle everything from complete teardowns/rebuilds to smaller updates. Some of the most popular <span className="underline">kitchen remodeling projects</span> we handle include:
                        </p>
                        <ul className="space-y-6 text-base text-charcoal-gray">
                            {projects.map((project, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-6 h-6 text-ocean-teal mr-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <strong>{project.title}:</strong> {project.description}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Right Side - Large Kitchen Image */}
                    <div className="relative w-full h-[600px] lg:h-[700px] rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="/images/kitchen-remodeling/modern-kitchen-design-reno.webp"
                            alt="Modern kitchen with white cabinets, light wood accents, and dining area"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

