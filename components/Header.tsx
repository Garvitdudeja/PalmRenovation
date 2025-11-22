'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Kitchen Remodeling',
    'Bathroom Remodeling',
    'Room Addition',
    'Complete Home Remodeling',
    'Design & Architectural Planning',
    'Impact Windows and Doors',
  ];

  const shouldShowWhiteBg = isScrolled || isMenuOpen;
  
  return (
    <header className={`${isScrolled ? 'sticky' : 'absolute'} top-0 left-0 right-0 z-50 transition-all duration-300 ${shouldShowWhiteBg ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full gap-3">
            <Image
              src="/images/logo.png"
              alt="Palm Development & Renovation Group Logo"
              width={200}
              height={80}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
            <span className={`font-bold transition leading-tight ${shouldShowWhiteBg ? 'text-ocean-teal' : 'text-white'}`} style={{ fontSize: '23px' }}>
              Palm Development<br />& Renovation Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            <Link href="/" className={`transition font-medium ${shouldShowWhiteBg ? 'text-charcoal-gray hover:text-ocean-teal' : 'text-white hover:text-ocean-teal-200'}`}>
              Home
            </Link>
            <Link href="/about-us" className={`transition font-medium ${shouldShowWhiteBg ? 'text-charcoal-gray hover:text-ocean-teal' : 'text-white hover:text-ocean-teal-200'}`}>
              About Us
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link href="/services" className={`transition flex items-center font-medium ${shouldShowWhiteBg ? 'text-charcoal-gray hover:text-ocean-teal' : 'text-white hover:text-ocean-teal-200'}`}>
                Our Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                    {services.map((service) => (
                      <Link
                        key={service}
                        href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-3 text-charcoal-gray hover:bg-ocean-teal-50 hover:text-ocean-teal transition"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/portfolio" className={`transition font-medium ${shouldShowWhiteBg ? 'text-charcoal-gray hover:text-ocean-teal' : 'text-white hover:text-ocean-teal-200'}`}>
              Portfolio
            </Link>
            <Link href="/blog" className={`transition font-medium ${shouldShowWhiteBg ? 'text-charcoal-gray hover:text-ocean-teal' : 'text-white hover:text-ocean-teal-200'}`}>
              Blog
            </Link>
            <Link href="/contact" className={`transition font-medium ${shouldShowWhiteBg ? 'text-charcoal-gray hover:text-ocean-teal' : 'text-white hover:text-ocean-teal-200'}`}>
              Contact Us
            </Link>
            <a
              href="tel:813-838-2193"
              className="btn-gradient-palm text-white px-5 py-2 rounded-lg transition font-semibold text-sm whitespace-nowrap"
            >
              CALL US: 813-838-2193
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`xl:hidden transition ${shouldShowWhiteBg ? 'text-charcoal-gray' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`xl:hidden py-4 ${shouldShowWhiteBg ? 'border-t border-gray-200' : 'border-t border-white/20'}`}>
            <nav className="flex flex-col space-y-4">
              <Link href="/" className={`transition font-medium ${shouldShowWhiteBg ? 'text-charcoal-gray hover:text-ocean-teal' : 'text-white hover:text-ocean-teal-200'}`}>
                Home
              </Link>
              <Link href="/about-us" className={`transition font-medium ${shouldShowWhiteBg ? 'text-charcoal-gray hover:text-ocean-teal' : 'text-white hover:text-ocean-teal-200'}`}>
                About Us
              </Link>
              <div>
                <div className="flex items-center justify-between">
                  <Link 
                    href="/services"
                    className={`transition font-medium ${shouldShowWhiteBg ? 'text-charcoal-gray hover:text-ocean-teal' : 'text-white hover:text-ocean-teal-200'}`}
                  >
                    Our Services
                  </Link>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`transition ${shouldShowWhiteBg ? 'text-charcoal-gray hover:text-ocean-teal' : 'text-white hover:text-ocean-teal-200'}`}
                    aria-label="Toggle services menu"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service}
                        href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`block transition ${shouldShowWhiteBg ? 'text-charcoal-gray-300 hover:text-ocean-teal' : 'text-white/80 hover:text-white'}`}
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/portfolio" className={`transition font-medium ${shouldShowWhiteBg ? 'text-charcoal-gray hover:text-ocean-teal' : 'text-white hover:text-ocean-teal-200'}`}>
                Portfolio
              </Link>
              <Link href="/blog" className={`transition font-medium ${shouldShowWhiteBg ? 'text-charcoal-gray hover:text-ocean-teal' : 'text-white hover:text-ocean-teal-200'}`}>
                Blog
              </Link>
              <Link href="/contact" className={`transition font-medium ${shouldShowWhiteBg ? 'text-charcoal-gray hover:text-ocean-teal' : 'text-white hover:text-ocean-teal-200'}`}>
                Contact Us
              </Link>
              <a
                href="tel:813-838-2193"
                className="btn-gradient-palm text-white px-6 py-3 rounded-lg transition font-semibold text-center"
              >
                CALL US: 813-838-2193
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
