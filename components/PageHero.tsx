import Image from 'next/image';

interface PageHeroProps {
  title: string;
  backgroundImage: string;
  backgroundImageAlt?: string;
  overlayOpacity?: number;
  height?: string;
}

const PageHero = ({
  title,
  backgroundImage,
  backgroundImageAlt = 'Hero background',
  overlayOpacity = 50,
  height = 'h-[400px] md:h-[500px]',
}: PageHeroProps) => {
  return (
    <section className={`relative ${height} overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})` }}
      ></div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
        </div>
      </div>
      
      {/* Curved Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 L0,40 Q720,100 1440,40 L1440,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;

