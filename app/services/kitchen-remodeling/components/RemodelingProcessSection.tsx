export default function RemodelingProcessSection() {
    const steps = [
        { number: 1, title: 'Planning & Materials' },
        { number: 2, title: 'Mockup/Drawings' },
        { number: 3, title: 'Material & Finish Selection' },
        { number: 4, title: 'Demolition & Construction' },
        { number: 5, title: 'New Kitchen Delivery' },
    ];

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-[80%] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
                    Our Kitchen Remodeling Process
                </h2>
                <p className="text-base text-charcoal-gray leading-relaxed mb-8">
                    We will be there for you throughout the entire process, from planning until 2 years after completion, per our warranty. Here&apos;s an outline of our process so you know what to expect:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {steps.map((step) => (
                        <div key={step.number} className="text-center">
                            <div className="bg-ocean-teal text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                {step.number}
                            </div>
                            <h4 className="font-semibold text-charcoal-gray mb-2">{step.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

