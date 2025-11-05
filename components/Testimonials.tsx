const testimonials = [
  {
    name: 'Jessica M.',
    rating: 5,
    review: "After years of dreaming about a modern, functional kitchen, I finally decided to take the plunge with Greenview Renovation. From the initial consultation to the final reveal, the team was absolutely outstanding. They listened to my needs, provided creative and practical suggestions, and kept me informed every step of the way. The project was completed on time and within budget, which was a huge relief. My new kitchen is everything I hoped for and more. It's not only beautiful but also incredibly functional. The quality of workmanship is top-notch, and the attention to detail is evident in every corner. I highly recommend Greenview Renovation to anyone looking to transform their kitchen. They have truly made my dream a reality.",
  },
  {
    name: 'Brian T.',
    rating: 5,
    review: "Choosing Greenview Renovation for our bathroom remodel was the best decision we could have made. Our outdated bathroom was in desperate need of an upgrade, and the Greenview team turned it into a luxurious oasis. They were professional, knowledgeable, and very responsive to our questions and concerns throughout the process. The design team was fantastic, helping us select materials and fixtures that fit our style and budget. The craftsmanship is impeccable, and the finished product is beyond our expectations. The project was completed on schedule, and the work area was always kept clean and organized. We are absolutely in love with our new bathroom and wouldn't hesitate to use Greenview Renovation for future projects.",
  },
  {
    name: 'Elena R.',
    rating: 5,
    review: "We had the pleasure of working with Greenview Renovations for the construction of our new home, and the experience was nothing short of exceptional. From the initial design phase to the construction and final walkthrough, the entire team demonstrated professionalism, expertise, and a commitment to quality. They were attentive to our vision and worked diligently to bring it to life, offering valuable advice and solutions to any challenges that arose. The project management was superb, with clear communication and updates throughout the process. The end result is a beautiful, well-constructed home that perfectly meets our needs and desires. We are deeply grateful to the Greenview team for their hard work and dedication, and we highly recommend their services to anyone looking to build their dream home.",
  },
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className="text-yellow-400 text-xl">★</span>
    ));
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
            Discover Why Our Customers Love Us
          </h2>
          <p className="text-lg text-charcoal-gray max-w-3xl mx-auto mb-4">
            Take a look at what some of our satisfied customers have to say about their experience with Greenview Renovation. We take pride in our work and always strive to provide high-quality services that exceed our customers&apos; expectations. Contact us today to learn more about our services, and how we can help you transform your home!
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-3xl font-bold text-charcoal-gray">5.0</span>
            <div className="flex">{renderStars(5)}</div>
            <span className="text-lg text-charcoal-gray font-semibold">Positive Reviews</span>
          </div>
          <button className="text-ocean-teal font-semibold hover:text-ocean-teal-700 transition">
            See More →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              <p className="text-charcoal-gray mb-4 italic">&quot;{testimonial.review}&quot;</p>
              <p className="text-charcoal-gray font-semibold">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

