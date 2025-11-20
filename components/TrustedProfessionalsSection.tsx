import { ReactNode } from 'react';
import Image from 'next/image';

interface Feature {
    icon: ReactNode;
    title: string;
    description: string;
}

interface TrustedProfessionalsSectionProps {
    title: string;
    paragraph: string;
    features: Feature[];
    imageSrc?: string;
    imageAlt?: string;
    bulletPoints?: string[];
}

export default function TrustedProfessionalsSection({ title, paragraph, features, imageSrc, imageAlt, bulletPoints }: TrustedProfessionalsSectionProps) {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-[80%] mx-auto">
                <div className={`grid grid-cols-1 ${imageSrc ? 'lg:grid-cols-2' : ''} gap-12 items-center mb-8`}>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
                            {title}
                        </h2>
                        <p className="text-base text-charcoal-gray leading-relaxed mb-4">
                            {paragraph}
                        </p>
                        {bulletPoints && bulletPoints.length > 0 && (
                            <ul className="space-y-3 text-base text-charcoal-gray">
                                {bulletPoints.map((point, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-6 h-6 text-ocean-teal mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {imageSrc && (
                        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src={imageSrc}
                                alt={imageAlt || title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    )}
                </div>

                {features.length > 0 && (
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
                )}
            </div>
        </section>
    );
}

