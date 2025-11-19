import { ReactNode } from 'react';

interface Feature {
    icon: ReactNode;
    title: string;
    description: string;
}

interface TrustedProfessionalsSectionProps {
    title: string;
    paragraph: string;
    features: Feature[];
}

export default function TrustedProfessionalsSection({ title, paragraph, features }: TrustedProfessionalsSectionProps) {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-[80%] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
                    {title}
                </h2>
                <p className="text-base text-charcoal-gray leading-relaxed mb-8">
                    {paragraph}
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

