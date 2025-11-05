const areas = [
  'Fort Lauderdale',
  'Pompano Beach',
  'Boca Raton',
  'West Palm Beach',
  'Hollywood',
  'Delray Beach',
  'Boynton Beach',
  'Aventura',
  'Davie',
  'Wellington',
  'Lantana',
  'Surfside',
];

const ServiceAreas = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-8 text-center">
          Remodeling Services Across South Florida and Beyond
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area) => (
            <div
              key={area}
              className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-charcoal-gray font-semibold"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;

