'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    'Kitchen Remodeling',
    'Bathroom Remodeling',
    'Room Addition',
    'Complete Home Remodeling',
    'Design & Architectural Planning',
    'Impact Windows and Doors',
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-bold text-ocean-teal hover:text-ocean-teal-700 transition">
            Greenview Renovation
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-charcoal-gray hover:text-ocean-teal transition font-medium">
              Home
            </Link>
            <Link href="/about-us" className="text-charcoal-gray hover:text-ocean-teal transition font-medium">
              About Us
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link href="/services" className="text-charcoal-gray hover:text-ocean-teal transition flex items-center font-medium">
                Our Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
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
              )}
            </div>
            <Link href="/portfolio" className="text-charcoal-gray hover:text-ocean-teal transition font-medium">
              Portfolio
            </Link>
            <Link href="/blog" className="text-charcoal-gray hover:text-ocean-teal transition font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-charcoal-gray hover:text-ocean-teal transition font-medium">
              Contact Us
            </Link>
            <a
              href="tel:561-660-0955"
              className="bg-ocean-teal text-white px-5 py-2 rounded-lg hover:bg-ocean-teal-700 transition font-semibold text-sm whitespace-nowrap"
            >
              CALL US: 561-660-0955
            </a>
            <Link
              href="/contact"
              className="bg-ocean-teal text-white px-5 py-2 rounded-lg hover:bg-ocean-teal-700 transition font-semibold text-sm whitespace-nowrap"
            >
              Get a FREE Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-charcoal-gray"
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
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-charcoal-gray hover:text-ocean-teal transition font-medium">
                Home
              </Link>
              <Link href="/about-us" className="text-charcoal-gray hover:text-ocean-teal transition font-medium">
                About Us
              </Link>
              <div>
                <div className="flex items-center justify-between">
                  <Link 
                    href="/services"
                    className="text-charcoal-gray hover:text-ocean-teal transition font-medium"
                  >
                    Our Services
                  </Link>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="text-charcoal-gray hover:text-ocean-teal transition"
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
                        className="block text-charcoal-gray-300 hover:text-ocean-teal transition"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/portfolio" className="text-charcoal-gray hover:text-ocean-teal transition font-medium">
                Portfolio
              </Link>
              <Link href="/blog" className="text-charcoal-gray hover:text-ocean-teal transition font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-charcoal-gray hover:text-ocean-teal transition font-medium">
                Contact Us
              </Link>
              <a
                href="tel:561-660-0955"
                className="bg-ocean-teal text-white px-6 py-3 rounded-lg hover:bg-ocean-teal-700 transition font-semibold text-center"
              >
                CALL US: 561-660-0955
              </a>
              <Link
                href="/contact"
                className="bg-ocean-teal text-white px-6 py-3 rounded-lg hover:bg-ocean-teal-700 transition font-semibold text-center"
              >
                Get a FREE Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
