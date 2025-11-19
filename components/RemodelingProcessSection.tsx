interface Step {
    number: number;
    title: string;
}

interface RemodelingProcessSectionProps {
    title: string;
    paragraph: string;
    steps: Step[];
}

export default function RemodelingProcessSection({ title, paragraph, steps }: RemodelingProcessSectionProps) {
    // Determine grid columns based on number of steps
    const getGridCols = () => {
        if (steps.length <= 3) return 'md:grid-cols-3';
        if (steps.length === 4) return 'md:grid-cols-4';
        if (steps.length === 5) return 'md:grid-cols-5';
        if (steps.length === 6) return 'md:grid-cols-3 lg:grid-cols-6';
        return 'md:grid-cols-3 lg:grid-cols-4';
    };

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-[80%] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
                    {title}
                </h2>
                <p className="text-base text-charcoal-gray leading-relaxed mb-8">
                    {paragraph}
                </p>
                <div className={`grid grid-cols-1 ${getGridCols()} gap-6`}>
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

