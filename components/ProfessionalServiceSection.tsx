interface Service {
    title: string;
    description: string;
}

interface ProfessionalServiceSectionProps {
    title: string;
    paragraphs: string[];
    services: Service[];
}

export default function ProfessionalServiceSection({ title, paragraphs, services }: ProfessionalServiceSectionProps) {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-[80%] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-6">
                    {title}
                </h2>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-base text-charcoal-gray leading-relaxed mb-6">
                        {paragraph}
                    </p>
                ))}
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

