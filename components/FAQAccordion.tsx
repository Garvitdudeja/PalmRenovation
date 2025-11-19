'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface FAQ {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    faqs: FAQ[];
    backgroundImage?: string;
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
    const contentRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState<number>(0);

    useEffect(() => {
        if (innerRef.current) {
            if (isOpen) {
                // Get the actual height of the content
                const height = innerRef.current.scrollHeight;
                setMaxHeight(height);
            } else {
                setMaxHeight(0);
            }
        }
    }, [isOpen]);

    // Handle initial open state
    useEffect(() => {
        if (isOpen && innerRef.current && maxHeight === 0) {
            const height = innerRef.current.scrollHeight;
            setMaxHeight(height);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden transition-all duration-300">
            <button
                onClick={onToggle}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={isOpen}
            >
                <h3 className={`text-lg transition-all duration-300 ${isOpen ? 'font-bold' : 'font-normal'} text-charcoal-gray pr-4`}>
                    {faq.question}
                </h3>
                <div className="flex-shrink-0 transition-transform duration-300 ease-in-out" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <svg
                        className="w-5 h-5 text-gray-600 transition-colors duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: `${maxHeight}px`,
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <div ref={innerRef} className="px-6 pb-4">
                    <p className="text-base text-charcoal-gray leading-relaxed">
                        {faq.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function FAQAccordion({ faqs, backgroundImage = '/images/kitchen-remodeling/faqbg.png' }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState(0); // First question is open by default

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-20 px-4 relative">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={backgroundImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
            <div className="absolute inset-0 bg-white/90"></div>

            <div className="max-w-[80%] mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-8 text-center">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <FAQItem
                                key={index}
                                faq={faq}
                                isOpen={isOpen}
                                onToggle={() => toggleFAQ(index)}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

