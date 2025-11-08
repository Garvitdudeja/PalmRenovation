"use client"

import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah M.',
    rating: 5,
    review: "After years of envisioning a modern, functional kitchen, I finally decided to work with Palm Renovate. From the initial consultation to the final reveal, the team exceeded all my expectations. They listened carefully to my needs, offered creative and practical solutions, and kept me informed throughout the entire process. The project was completed on schedule and within budget, which was a tremendous relief. My new kitchen is everything I dreamed of and more. It's not only beautiful but also incredibly functional. The craftsmanship is exceptional, and the attention to detail is visible in every aspect. I highly recommend Palm Renovate to anyone looking to transform their kitchen. They truly brought my vision to life.",
  },
  {
    name: 'Michael T.',
    rating: 5,
    review: "Selecting Palm Renovate for our bathroom renovation was one of the best decisions we've made. Our outdated bathroom desperately needed an upgrade, and the Palm Renovate team transformed it into a luxurious retreat. They were professional, knowledgeable, and extremely responsive to all our questions and concerns throughout the process. The design team was excellent, helping us choose materials and fixtures that matched our style and budget perfectly. The craftsmanship is outstanding, and the finished product exceeded our expectations. The project was completed on schedule, and the work area was always kept clean and organized. We are absolutely thrilled with our new bathroom and wouldn't hesitate to use Palm Renovate for future projects.",
  },
  {
    name: 'Amanda R.',
    rating: 5,
    review: "We had the pleasure of working with Palm Renovate for the construction of our new home, and the experience was absolutely exceptional. From the initial design phase through construction and the final walkthrough, the entire team demonstrated professionalism, expertise, and an unwavering commitment to quality. They were attentive to our vision and worked diligently to bring it to life, offering valuable advice and solutions whenever challenges arose. The project management was excellent, with clear communication and regular updates throughout the process. The end result is a beautiful, well-constructed home that perfectly meets our needs and desires. We are deeply grateful to the Palm Renovate team for their hard work and dedication, and we highly recommend their services to anyone looking to build their dream home.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className="text-yellow-400 text-xl">★</span>
    ));
  };

  const nextReview = () => {
    if (isAnimating) return;
    setSlideDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => {
        setIsAnimating(false);
      }, 10);
    }, 150);
  };

  const prevReview = () => {
    if (isAnimating) return;
    setSlideDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => {
        setIsAnimating(false);
      }, 10);
    }, 150);
  };

  const goToReview = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setSlideDirection(index > currentIndex ? 'right' : 'left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 10);
    }, 150);
  };

  return (
    <section 
      className="py-20 px-4 bg-white relative"
      style={{
        backgroundImage: 'url(/images/decor-bg.webp)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Intro Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
              Discover Why Our Customers Love Us
            </h2>
            <p className="text-lg text-charcoal-gray mb-6 leading-relaxed">
              Read what our satisfied customers have to say about their experience with Palm Renovate. We take pride in our work and consistently strive to provide high-quality services that exceed our customers' expectations. Contact us today to learn more about our services and how we can help transform your home!
            </p>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl font-bold text-charcoal-gray">5.0</span>
              <div className="flex">{renderStars(5)}</div>
              <span className="text-lg text-charcoal-gray font-semibold uppercase">Positive Reviews</span>
            </div>
            <button className="bg-ocean-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-ocean-teal-700 transition">
              See More
            </button>
          </div>

          {/* Right Section - Review Slider */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-8 uppercase">Reviews</h3>
            
            <div className="relative">
              {/* Review Card */}
              <div className="bg-white rounded-lg p-8 shadow-lg relative overflow-hidden h-[450px]">
                {/* Content Container with Slide Animation */}
                <div 
                  key={currentIndex}
                  className={`transition-all duration-300 ease-in-out h-full flex flex-col relative z-0 ${
                    isAnimating 
                      ? slideDirection === 'right' 
                        ? 'opacity-0 translate-x-8' 
                        : 'opacity-0 -translate-x-8'
                      : 'opacity-100 translate-x-0'
                  }`}
                >
                  <div className="flex mb-4">{renderStars(testimonials[currentIndex].rating)}</div>
                  <p className="text-charcoal-gray mb-6 leading-relaxed flex-1 overflow-y-auto">
                    &quot;{testimonials[currentIndex].review}&quot;
                  </p>
                  <p className="text-charcoal-gray font-semibold">— {testimonials[currentIndex].name}</p>
                </div>
              </div>

              {/* Navigation Arrows on Card Edges - Outside card to avoid overflow clipping */}
              <button
                onClick={prevReview}
                className="absolute left-0 top-[225px] -translate-x-1/2 -translate-y-1/2 bg-[#8B4513] rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-30 w-12 h-12 flex items-center justify-center"
                aria-label="Previous review"
              >
                <svg className="w-6 h-6 text-[#F5DEB3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextReview}
                className="absolute right-0 top-[225px] translate-x-1/2 -translate-y-1/2 bg-[#8B4513] rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-30 w-12 h-12 flex items-center justify-center"
                aria-label="Next review"
              >
                <svg className="w-6 h-6 text-[#F5DEB3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? 'bg-ocean-teal w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

