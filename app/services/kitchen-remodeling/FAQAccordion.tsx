'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const faqs = [
    {
        question: 'What services does Palm Development & Renovation Group offer?',
        answer: 'Palm Development & Renovation Group specializes in a wide range of home renovation and construction services to meet all your needs. Our offerings include kitchen remodeling, bathroom remodeling, new construction projects, flooring solutions, and comprehensive design services. Whether you\'re looking to update a single room or undertake a full-scale renovation, our team has the expertise and experience to bring your vision to life.',
    },
    {
        question: 'How does the project process work with Palm Development & Renovation Group?',
        answer: 'Initial consultation, then detailed quote and agreement, and then the design team starts working to help visualize the change, etc. This is aside from projects that require architectural planning, for which we will start with plans and then move on to a contract for construction and design.',
    },
    {
        question: 'How long does a typical renovation project take with Palm Development & Renovation Group?',
        answer: 'The timeline for a renovation project can vary widely depending on the scope and complexity of the work. A simple bathroom or kitchen remodel may take several weeks, while larger projects like new constructions or extensive renovations could take several months. During the initial consultation, we\'ll provide a more accurate timeline based on your specific project requirements. Our goal is always to complete your project efficiently without compromising on quality.',
    },
    {
        question: 'Does Palm Development & Renovation Group offer any warranties or guarantees on their work?',
        answer: 'Yes, we stand behind the quality of our work with a comprehensive warranty covering labor and materials. The specific terms of the warranty depend on the project and will be clearly outlined in your contract. We believe in the importance of peace of mind for our clients and are committed to ensuring your complete satisfaction with the finished project. For any concerns or issues that arise post-completion, we\'re here to provide prompt and effective solutions.',
    },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: { question: string; answer: string }; isOpen: boolean; onToggle: () => void }) {
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

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState(0); // First question is open by default

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-20 px-4 relative">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/kitchen-remodeling/faqbg.png"
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

