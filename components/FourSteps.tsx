import Image from 'next/image';

const steps = [
  {
    number: '1',
    title: 'Consultation',
    description: 'Begin with a personalized consultation where our team listens attentively to your vision, needs, and preferences. We believe in understanding your unique style to lay the foundation for a tailored renovation plan.',
    image: '/images/home-remodeling-miami-680x500.jpg.webp',
  },
  {
    number: '2',
    title: 'Design Process',
    description: 'Experience the magic of our design process, where your ideas take shape. Our skilled team combines creativity with functionality to craft a detailed design that aligns perfectly with your vision, ensuring a space that suits your lifestyle.',
    image: '/images/complete-home-remodeling-680x500.jpg.webp',
  },
  {
    number: '3',
    title: 'Communication',
    description: 'Open and transparent communication is at the heart of our service. Stay informed and engaged throughout the entire process. We value your input, and our team is always ready to address your questions, concerns, and preferences promptly.',
    image: '/images/home-renovations-680x500.jpg.webp',
  },
  {
    number: '4',
    title: 'Implementation',
    description: 'Watch your vision come to life as we expertly execute the plan. Our dedicated team ensures a smooth and efficient implementation, bringing your dream space from concept to reality with precision and care. At Greenview Renovation, your satisfaction is our ultimate goal, and we take pride in delivering results that exceed expectations.',
    image: '/images/bathroom-renovation-company-680x500.jpg.webp',
  },
];

const FourSteps = () => {
  return (
    <section>
      {/* Header Section */}
      <div className="py-20 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto text-center">
          {/* Seamless Collaboration */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-ocean-teal"></div>
            <h3 className="text-xl md:text-2xl font-semibold text-ocean-teal">
              Seamless Collaboration
            </h3>
            <div className="h-px w-16 bg-ocean-teal"></div>
          </div>
          
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
            Four Steps to Your Dream Space
          </h2>
          
          {/* Description */}
          <p className="text-lg text-charcoal-gray max-w-3xl mx-auto leading-relaxed">
            Embark on a hassle-free journey with Greenview Renovation as we guide you through four simple steps to bring your dream space to life.
          </p>
        </div>
      </div>

      {/* Steps with Background Images */}
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative min-h-[400px] overflow-hidden group"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40"></div>
            
            {/* Content */}
            <div className="relative flex flex-col items-center justify-start p-6 md:p-8 text-center text-white pt-12 pb-12">
              {/* Icon Badge */}
              <div className="mb-6">
                <div className="bg-ocean-teal text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                  {step.number}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
              
              {/* Description */}
              <p className="text-white/90 leading-relaxed text-sm md:text-base max-w-xs">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourSteps;
