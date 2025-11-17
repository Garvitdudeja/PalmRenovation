import Link from 'next/link';

export default function BuildDreamKitchenSection() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-[80%] mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
                    Build Your Dream Kitchen with Palm Development & Renovation Group
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
    );
}

