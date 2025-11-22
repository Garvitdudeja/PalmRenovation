import Link from 'next/link';
import Image from 'next/image';

interface IntroSectionProps {
    imageSrc: string;
    imageAlt: string;
    text: string;
    linkHref: string;
    linkText: string;
}

export default function IntroSection({ imageSrc, imageAlt, text, linkHref, linkText }: IntroSectionProps) {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-[80%] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image */}
                    <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </div>
                    {/* Right Side - Text Content */}
                    <div>
                        <p className="text-base text-charcoal-gray leading-relaxed mb-6">
                            {text}
                        </p>
                        <div className="mt-6">
                            <Link
                                href={linkHref}
                                className="inline-block btn-gradient-palm text-white px-6 py-3 rounded-lg transition font-semibold"
                            >
                                {linkText}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

