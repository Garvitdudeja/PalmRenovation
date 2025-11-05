import Link from 'next/link';

const Footer = () => {
  const services = [
    'Kitchen Remodeling',
    'Bathroom Remodeling',
    'Room Addition',
    'Complete Home Remodeling',
    'Design & Architectural Planning',
    'Impact Windows and Doors',
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@GreenviewRenovation.com" className="hover:text-ocean-teal-300 transition">
                  info@GreenviewRenovation.com
                </a>
              </li>
              <li>
                <a href="tel:561-660-0955" className="hover:text-ocean-teal-300 transition">
                  561-660-0955
                </a>
              </li>
              <li className="text-sm text-gray-400 mt-4">
                <strong>License number:</strong> <em>CRC1334770</em>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-ocean-teal-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-ocean-teal-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-ocean-teal-300 transition">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-ocean-teal-300 transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ocean-teal-300 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-ocean-teal-300 transition"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
            <ul className="space-y-2 text-sm">
              <li>15+ Years of Experience</li>
              <li>500+ Satisfied Clients</li>
              <li>5.0 Rating on Yelp</li>
              <li>5.0 Rating on Google</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 All Rights Reserved – Greenview Renovation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

