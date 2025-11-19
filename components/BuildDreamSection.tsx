import Link from 'next/link';

interface BuildDreamSectionProps {
    title: string;
    paragraph: string;
    linkHref: string;
    linkText: string;
}

export default function BuildDreamSection({ title, paragraph, linkHref, linkText }: BuildDreamSectionProps) {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-[80%] mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
                    {title}
                </h2>
                <p className="text-base text-charcoal-gray leading-relaxed mb-6">
                    {paragraph}
                </p>
                <Link
                    href={linkHref}
                    className="inline-block bg-ocean-teal text-white px-8 py-4 rounded-lg hover:bg-ocean-teal-700 transition font-semibold text-lg"
                >
                    {linkText}
                </Link>
            </div>
        </section>
    );
}

