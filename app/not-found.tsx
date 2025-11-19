import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for could not be found.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-white">
            <div className="max-w-[80%] mx-auto text-center py-20">
                <div className="mb-8">
                    <h1 className="text-9xl md:text-[12rem] font-bold text-ocean-teal mb-4">
                        404
                    </h1>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-gray mb-6">
                        Page Not Found
                    </h2>
                    <p className="text-lg md:text-xl text-charcoal-gray leading-relaxed mb-8 max-w-2xl mx-auto">
                        Sorry, we couldn&apos;t find the page you&apos;re looking for. The page may have been moved, deleted, or the URL may be incorrect.
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/"
                        className="inline-block bg-ocean-teal text-white px-8 py-4 rounded-lg hover:bg-ocean-teal-700 transition font-semibold text-lg"
                    >
                        Go to Homepage
                    </Link>
                    <Link
                        href="/services"
                        className="inline-block bg-white text-ocean-teal border-2 border-ocean-teal px-8 py-4 rounded-lg hover:bg-ocean-teal hover:text-white transition font-semibold text-lg"
                    >
                        View Our Services
                    </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-base text-charcoal-gray mb-4">
                        Popular Pages:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/services/kitchen-remodeling"
                            className="text-ocean-teal hover:text-ocean-teal-700 underline transition"
                        >
                            Kitchen Remodeling
                        </Link>
                        <Link
                            href="/services/bathroom-remodeling"
                            className="text-ocean-teal hover:text-ocean-teal-700 underline transition"
                        >
                            Bathroom Remodeling
                        </Link>
                        <Link
                            href="/contact"
                            className="text-ocean-teal hover:text-ocean-teal-700 underline transition"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/about"
                            className="text-ocean-teal hover:text-ocean-teal-700 underline transition"
                        >
                            About Us
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

