'use client';

import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays automatically
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video Background - Full Coverage */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/slide-1-720.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Text Content */}
      <div className="relative h-full flex items-center justify-center px-4 md:px-8 z-10">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Let’s Build Your Dream, Together
          </h1>
          <blockquote className="text-xl md:text-2xl lg:text-3xl italic mb-4 leading-relaxed font-light">
            &quot;From concept to completion, we turn your ideas into lasting spaces built to inspire.&quot;
          </blockquote>
          {/* <p className="text-base md:text-lg lg:text-xl">
            — John &quot;Architect&quot; Aarons
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
