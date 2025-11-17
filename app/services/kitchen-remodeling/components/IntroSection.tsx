import Link from 'next/link';
import Image from 'next/image';

export default function IntroSection() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-[80%] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Kitchen Image */}
                    <div className="relative w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="/images/kitchen-remodeling/modern-kitchen-design-reno.webp"
                            alt="Modern kitchen with white cabinets, island, and bar stools"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </div>
                    {/* Right Side - Text Content */}
                    <div>
                        <p className="text-base text-charcoal-gray leading-relaxed mb-6">
                            If you&apos;re dreaming of a light-filled open concept kitchen with a new island, sparkling natural or manmade stone countertops and floor, and a few extra features to suit your style, Palm Development & Renovation Group has the kitchen remodeling for you. Windows, comfy seating, a place for games and homework, tell us your dream and we&apos;ll show you the plan!
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
                </div>
            </div>
        </section>
    );
}

