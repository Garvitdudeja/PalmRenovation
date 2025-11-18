import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Thank You - Palm Development & Renovation Group',
    description: 'Thank you for contacting Palm Development & Renovation Group. We will get back to you soon.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function ThankYouPage() {
    return (
        <main className="min-h-screen">
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* Success Icon */}
                        <div className="mb-8">
                            <div className="w-24 h-24 bg-ocean-teal rounded-full flex items-center justify-center mx-auto">
                                <svg
                                    className="w-12 h-12 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Thank You Message */}
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-6">
                            Thank You!
                        </h1>
                        <p className="text-xl text-charcoal-gray mb-4">
                            Your message has been submitted successfully.
                        </p>
                        <p className="text-base text-charcoal-gray mb-8 leading-relaxed">
                            We appreciate you reaching out to Palm Development & Renovation Group. Our team will review your inquiry and get back to you as soon as possible, typically within 24-48 hours.
                        </p>

                        {/* What's Next Section */}
                        <div className="bg-ocean-teal-50 rounded-lg p-6 mb-8 text-left">
                            <h2 className="text-2xl font-bold text-charcoal-gray mb-4">
                                What&apos;s Next?
                            </h2>
                            <ul className="space-y-3 text-charcoal-gray">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-ocean-teal mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>We&apos;ll review your submission and contact you within 24-48 hours</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-ocean-teal mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>One of our team members will reach out to discuss your project in detail</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-ocean-teal mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>We&apos;ll schedule a consultation to understand your vision and provide a detailed quote</span>
                                </li>
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="inline-block bg-ocean-teal text-white px-8 py-3 rounded-lg hover:bg-ocean-teal-700 transition font-semibold text-lg"
                            >
                                Return to Home
                            </Link>
                            <Link
                                href="/services"
                                className="inline-block bg-white text-ocean-teal border-2 border-ocean-teal px-8 py-3 rounded-lg hover:bg-ocean-teal-50 transition font-semibold text-lg"
                            >
                                View Our Services
                            </Link>
                        </div>

                        {/* Contact Information */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <p className="text-charcoal-gray mb-4">
                                Need immediate assistance?
                            </p>
                            <a
                                href="tel:813-838-2193"
                                className="text-ocean-teal hover:text-ocean-teal-700 transition font-semibold text-lg"
                            >
                                Call Us: 813-838-2193
                            </a>
                        </div>
                    </div>
                </section>
        </main>
    );
}

